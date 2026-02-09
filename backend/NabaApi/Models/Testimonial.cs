namespace NabaApi.Models;

public enum TestimonialStatus
{
    Pending,
    Approved,
    Rejected
}

public class Testimonial
{
    public Guid Id { get; set; }
    public string CompanyName { get; set; } = string.Empty;
    public string PersonName { get; set; } = string.Empty;
    public string Role { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
    public TestimonialStatus Status { get; set; } = TestimonialStatus.Pending;
    public string EditTokenHash { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime LastUpdatedAt { get; set; } = DateTime.UtcNow;
}
