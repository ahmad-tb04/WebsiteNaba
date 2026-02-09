using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NabaApi.DTOs;
using NabaApi.Models;
using NabaApi.Services;

namespace NabaApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TestimonialsController : ControllerBase
{
    private readonly ITestimonialService _testimonialService;
    private const string EditTokenCookieName = "testimonial_edit_token";

    public TestimonialsController(ITestimonialService testimonialService)
    {
        _testimonialService = testimonialService;
    }

    // GET: api/testimonials - Public approved testimonials
    [HttpGet]
    public async Task<ActionResult<IEnumerable<TestimonialPublicDto>>> GetApproved()
    {
        var testimonials = await _testimonialService.GetApprovedAsync();
        return Ok(testimonials);
    }

    // GET: api/testimonials/all - Admin only
    [HttpGet("all")]
    [Authorize(Roles = "Admin")]
    public async Task<ActionResult<IEnumerable<TestimonialResponseDto>>> GetAll()
    {
        var testimonials = await _testimonialService.GetAllForAdminAsync();
        return Ok(testimonials);
    }

    // POST: api/testimonials - Create new testimonial
    [HttpPost]
    public async Task<ActionResult<TestimonialResponseDto>> Create([FromBody] CreateTestimonialDto dto)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var (testimonial, editToken) = await _testimonialService.CreateAsync(dto);
        
        if (testimonial == null || editToken == null)
        {
            return StatusCode(500, "Failed to create testimonial");
        }

        // Set HttpOnly cookie with edit token
        var cookieOptions = new CookieOptions
        {
            HttpOnly = true,
            Secure = true,
            SameSite = SameSiteMode.Strict,
            MaxAge = TimeSpan.FromDays(30),
            Path = "/"
        };
        Response.Cookies.Append(EditTokenCookieName, $"{testimonial.Id}:{editToken}", cookieOptions);

        return CreatedAtAction(nameof(GetApproved), new
        {
            id = testimonial.Id,
            status = testimonial.Status.ToString(),
            message = "Testimonial submitted successfully. It will be visible after approval."
        });
    }

    // GET: api/testimonials/my - Get user's own testimonial using cookie
    [HttpGet("my")]
    public async Task<ActionResult<TestimonialResponseDto>> GetMy()
    {
        var cookieValue = Request.Cookies[EditTokenCookieName];
        if (string.IsNullOrEmpty(cookieValue))
        {
            return NotFound("No testimonial found for this browser");
        }

        var parts = cookieValue.Split(':', 2);
        if (parts.Length != 2 || !Guid.TryParse(parts[0], out var id))
        {
            return BadRequest("Invalid token format");
        }

        var testimonial = await _testimonialService.GetByIdWithTokenAsync(id, parts[1]);
        if (testimonial == null)
        {
            return NotFound("Testimonial not found or token invalid");
        }

        return Ok(testimonial);
    }

    // PUT: api/testimonials/my - Update user's own testimonial using cookie
    [HttpPut("my")]
    public async Task<IActionResult> UpdateMy([FromBody] UpdateTestimonialDto dto)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var cookieValue = Request.Cookies[EditTokenCookieName];
        if (string.IsNullOrEmpty(cookieValue))
        {
            return NotFound("No testimonial found for this browser");
        }

        var parts = cookieValue.Split(':', 2);
        if (parts.Length != 2 || !Guid.TryParse(parts[0], out var id))
        {
            return BadRequest("Invalid token format");
        }

        var success = await _testimonialService.UpdateAsync(id, parts[1], dto);
        if (!success)
        {
            return BadRequest("Cannot update. Either the testimonial was not found, the token is invalid, or the testimonial has already been reviewed.");
        }

        return Ok(new { message = "Testimonial updated successfully" });
    }

    // PATCH: api/testimonials/{id}/status - Admin only: approve/reject
    [HttpPatch("{id}/status")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> UpdateStatus(Guid id, [FromBody] UpdateStatusDto dto)
    {
        if (!Enum.TryParse<TestimonialStatus>(dto.Status, true, out var status))
        {
            return BadRequest("Invalid status. Use 'Pending', 'Approved', or 'Rejected'.");
        }

        var success = await _testimonialService.UpdateStatusAsync(id, status);
        if (!success)
        {
            return NotFound("Testimonial not found");
        }

        return Ok(new { message = $"Testimonial status updated to {status}" });
    }

    // DELETE: api/testimonials/{id} - Admin only
    [HttpDelete("{id}")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> Delete(Guid id)
    {
        var success = await _testimonialService.DeleteAsync(id);
        if (!success)
        {
            return NotFound("Testimonial not found");
        }

        return Ok(new { message = "Testimonial deleted" });
    }
}

public class UpdateStatusDto
{
    public string Status { get; set; } = string.Empty;
}
