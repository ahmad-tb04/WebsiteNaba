using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NabaApi.DTOs;
using NabaApi.Services;

namespace NabaApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AdminController : ControllerBase
{
    private readonly IAuthService _authService;

    public AdminController(IAuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("login")]
    public async Task<ActionResult<AdminLoginResponseDto>> Login([FromBody] AdminLoginDto dto)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var result = await _authService.LoginAsync(dto);
        if (result == null)
        {
            return Unauthorized(new { message = "Invalid username or password" });
        }

        return Ok(result);
    }

    [HttpGet("verify")]
    [Authorize(Roles = "Admin")]
    public IActionResult Verify()
    {
        return Ok(new { valid = true, message = "Token is valid" });
    }
}
