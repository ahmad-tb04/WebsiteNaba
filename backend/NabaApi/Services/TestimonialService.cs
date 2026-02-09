using System.Security.Cryptography;
using Microsoft.EntityFrameworkCore;
using NabaApi.Data;
using NabaApi.DTOs;
using NabaApi.Models;

namespace NabaApi.Services;

public interface ITestimonialService
{
    Task<IEnumerable<TestimonialPublicDto>> GetApprovedAsync();
    Task<IEnumerable<TestimonialResponseDto>> GetAllForAdminAsync();
    Task<(Testimonial? testimonial, string? editToken)> CreateAsync(CreateTestimonialDto dto);
    Task<TestimonialResponseDto?> GetByIdWithTokenAsync(Guid id, string editToken);
    Task<bool> UpdateAsync(Guid id, string editToken, UpdateTestimonialDto dto);
    Task<bool> UpdateStatusAsync(Guid id, TestimonialStatus status);
    Task<bool> DeleteAsync(Guid id);
}

public class TestimonialService : ITestimonialService
{
    private readonly NabaDbContext _context;

    public TestimonialService(NabaDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<TestimonialPublicDto>> GetApprovedAsync()
    {
        return await _context.Testimonials
            .Where(t => t.Status == TestimonialStatus.Approved)
            .OrderByDescending(t => t.CreatedAt)
            .Select(t => new TestimonialPublicDto
            {
                CompanyName = t.CompanyName,
                PersonName = t.PersonName,
                Role = t.Role,
                Content = t.Content
            })
            .ToListAsync();
    }

    public async Task<IEnumerable<TestimonialResponseDto>> GetAllForAdminAsync()
    {
        return await _context.Testimonials
            .OrderByDescending(t => t.CreatedAt)
            .Select(t => new TestimonialResponseDto
            {
                Id = t.Id,
                CompanyName = t.CompanyName,
                PersonName = t.PersonName,
                Role = t.Role,
                Content = t.Content,
                Status = t.Status.ToString(),
                CreatedAt = t.CreatedAt
            })
            .ToListAsync();
    }

    public async Task<(Testimonial? testimonial, string? editToken)> CreateAsync(CreateTestimonialDto dto)
    {
        var editToken = GenerateSecureToken();
        var tokenHash = HashToken(editToken);

        var testimonial = new Testimonial
        {
            Id = Guid.NewGuid(),
            CompanyName = dto.CompanyName,
            PersonName = dto.PersonName,
            Role = dto.Role,
            Email = dto.Email,
            Content = dto.Content,
            Status = TestimonialStatus.Pending,
            EditTokenHash = tokenHash,
            CreatedAt = DateTime.UtcNow,
            LastUpdatedAt = DateTime.UtcNow
        };

        _context.Testimonials.Add(testimonial);
        await _context.SaveChangesAsync();

        return (testimonial, editToken);
    }

    public async Task<TestimonialResponseDto?> GetByIdWithTokenAsync(Guid id, string editToken)
    {
        var testimonial = await _context.Testimonials.FindAsync(id);
        if (testimonial == null) return null;

        var tokenHash = HashToken(editToken);
        if (testimonial.EditTokenHash != tokenHash) return null;

        return new TestimonialResponseDto
        {
            Id = testimonial.Id,
            CompanyName = testimonial.CompanyName,
            PersonName = testimonial.PersonName,
            Role = testimonial.Role,
            Content = testimonial.Content,
            Status = testimonial.Status.ToString(),
            CreatedAt = testimonial.CreatedAt
        };
    }

    public async Task<bool> UpdateAsync(Guid id, string editToken, UpdateTestimonialDto dto)
    {
        var testimonial = await _context.Testimonials.FindAsync(id);
        if (testimonial == null) return false;

        var tokenHash = HashToken(editToken);
        if (testimonial.EditTokenHash != tokenHash) return false;

        // Only allow editing if still pending
        if (testimonial.Status != TestimonialStatus.Pending) return false;

        testimonial.CompanyName = dto.CompanyName;
        testimonial.PersonName = dto.PersonName;
        testimonial.Role = dto.Role;
        testimonial.Content = dto.Content;
        testimonial.LastUpdatedAt = DateTime.UtcNow;

        await _context.SaveChangesAsync();
        return true;
    }

    public async Task<bool> UpdateStatusAsync(Guid id, TestimonialStatus status)
    {
        var testimonial = await _context.Testimonials.FindAsync(id);
        if (testimonial == null) return false;

        testimonial.Status = status;
        testimonial.LastUpdatedAt = DateTime.UtcNow;

        await _context.SaveChangesAsync();
        return true;
    }

    public async Task<bool> DeleteAsync(Guid id)
    {
        var testimonial = await _context.Testimonials.FindAsync(id);
        if (testimonial == null) return false;

        _context.Testimonials.Remove(testimonial);
        await _context.SaveChangesAsync();
        return true;
    }

    private static string GenerateSecureToken()
    {
        var bytes = new byte[32];
        using var rng = RandomNumberGenerator.Create();
        rng.GetBytes(bytes);
        return Convert.ToBase64String(bytes);
    }

    private static string HashToken(string token)
    {
        var bytes = System.Text.Encoding.UTF8.GetBytes(token);
        var hash = SHA256.HashData(bytes);
        return Convert.ToBase64String(hash);
    }
}
