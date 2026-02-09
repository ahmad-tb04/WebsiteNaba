using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using NabaApi.Data;
using NabaApi.DTOs;
using NabaApi.Models;

namespace NabaApi.Services;

public interface IAuthService
{
    Task<AdminLoginResponseDto?> LoginAsync(AdminLoginDto dto);
    string HashPassword(string password);
    bool VerifyPassword(string password, string hash);
}

public class AuthService : IAuthService
{
    private readonly NabaDbContext _context;
    private readonly IConfiguration _configuration;

    public AuthService(NabaDbContext context, IConfiguration configuration)
    {
        _context = context;
        _configuration = configuration;
    }

    public async Task<AdminLoginResponseDto?> LoginAsync(AdminLoginDto dto)
    {
        var admin = await _context.Admins
            .FirstOrDefaultAsync(a => a.Username == dto.Username);

        if (admin == null || !VerifyPassword(dto.Password, admin.PasswordHash))
        {
            return null;
        }

        var token = GenerateJwtToken(admin);
        var expiresAt = DateTime.UtcNow.AddHours(8);

        return new AdminLoginResponseDto
        {
            Token = token,
            ExpiresAt = expiresAt
        };
    }

    public string HashPassword(string password)
    {
        return BCrypt.Net.BCrypt.HashPassword(password, BCrypt.Net.BCrypt.GenerateSalt(12));
    }

    public bool VerifyPassword(string password, string hash)
    {
        return BCrypt.Net.BCrypt.Verify(password, hash);
    }

    private string GenerateJwtToken(Admin admin)
    {
        var jwtKey = _configuration["Jwt:Key"] ?? throw new InvalidOperationException("JWT Key not configured");
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey));
        var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var claims = new[]
        {
            new Claim(ClaimTypes.NameIdentifier, admin.Id.ToString()),
            new Claim(ClaimTypes.Name, admin.Username),
            new Claim(ClaimTypes.Role, "Admin")
        };

        var token = new JwtSecurityToken(
            issuer: _configuration["Jwt:Issuer"],
            audience: _configuration["Jwt:Audience"],
            claims: claims,
            expires: DateTime.UtcNow.AddHours(8),
            signingCredentials: credentials
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
