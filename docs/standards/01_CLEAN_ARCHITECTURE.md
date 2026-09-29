# TIÊU CHUẨN XUẤT XƯỞNG: CLEAN ARCHITECTURE & DESIGN PATTERNS
> **Bộ tiêu chuẩn kiến trúc mã nguồn bắt buộc cho toàn bộ dự án Backend tại SynapForge**  
> **Áp dụng cho:** .NET 8 (C#) & Java 21 (Spring Boot 3.3+)  
> **Nguyên tắc tối thượng:** Mã nghiệp vụ (Domain Logic) độc lập 100% với Database, Framework và UI  

---

## 1. NGUYÊN LÝ BẤT BIẾN CỦA CLEAN ARCHITECTURE (DEPENDENCY RULE)

```
                            SƠ ĐỒ 4 TẦNG PHỤ THUỘC ĐỒNG TÂM
                            
                     ┌───────────────────────────────────────────────┐
                     │         TẦNG 4: PRESENTATION / WEB API        │
                     │    Controllers, Middleware, Swagger, Filters  │
                     └───────────────────────┬───────────────────────┘
                                             │ Phụ thuộc vào
                     ┌───────────────────────▼───────────────────────┐
                     │         TẦNG 3: INFRASTRUCTURE (HẠ TẦNG)      │
                     │  EF Core / Hibernate, Redis, S3, RabbitMQ, Mail│
                     └───────────────────────┬───────────────────────┘
                                             │ Phụ thuộc vào
                     ┌───────────────────────▼───────────────────────┐
                     │         TẦNG 2: APPLICATION (ỨNG DỤNG)        │
                     │ CQRS Handlers, DTOs, Interfaces, Validations  │
                     └───────────────────────┬───────────────────────┘
                                             │ Phụ thuộc vào
                     ┌───────────────────────▼───────────────────────┐
                     │           TẦNG 1: DOMAIN (LÕI NGHIỆP VỤ)      │
                     │  Entities, Value Objects, Domain Exceptions   │
                     └───────────────────────────────────────────────┘
```

* **Quy tắc phụ thuộc một chiều (Inward Dependency):** Tầng ngoài phụ thuộc vào tầng trong. Tầng Domain tuyệt đối **KHÔNG ĐƯỢC** tham chiếu bất kỳ thư viện ngoài nào (kể cả Entity Framework hay Spring Data).
* **Độc lập cơ sở dữ liệu (Database-Agnostic):** Có thể tráo đổi cơ sở dữ liệu từ PostgreSQL sang SQL Server hoặc MongoDB mà không cần sửa đổi một dòng code nghiệp vụ nào tại Domain hoặc Application.

---

## 2. CẤU TRÚC THƯ MỤC CHUẨN CHO .NET 8 (C#)

```
Solution: SynapForge.ProjectName.sln
├── 📁 src/
│   ├── 📁 1. Domain/                                  <- Tầng Lõi nghiệp vụ thuần C#
│   │   ├── 📁 Common/                                 <- BaseEntity, IAuditableEntity, ValueObject
│   │   ├── 📁 Entities/                               <- PlateNumber.cs, Order.cs, User.cs
│   │   ├── 📁 Enums/                                  <- OrderStatus.cs, PlateCategory.cs
│   │   ├── 📁 Exceptions/                             <- DomainException.cs, InsufficientFundsException.cs
│   │   └── 📁 Repositories/                           <- IPlateRepository.cs (Chỉ chứa Interface)
│   │
│   ├── 📁 2. Application/                             <- Tầng Sử dụng nghiệp vụ (CQRS)
│   │   ├── 📁 Common/                                 <- IApplicationDbContext.cs, ICurrentUserService.cs
│   │   │   ├── 📁 Behaviors/                          <- ValidationBehavior.cs, LoggingBehavior.cs
│   │   │   └── 📁 Models/                             <- Result<T>.cs, PaginatedList<T>.cs
│   │   ├── 📁 Features/                               <- Tổ chức theo tính năng (Vertical Slices)
│   │   │   ├── 📁 Orders/
│   │   │   │   ├── 📁 Commands/                       <- CreateOrderCommand.cs, CreateOrderValidator.cs
│   │   │   │   └── 📁 Queries/                        <- GetOrderByIdQuery.cs, OrderDto.cs
│   │   │   └── 📁 Plates/
│   │   └── 📁 Interfaces/                             <- IVietQrService.cs, IEmailSender.cs
│   │
│   ├── 📁 3. Infrastructure/                          <- Tầng Triển khai công nghệ
│   │   ├── 📁 Persistence/                            <- ApplicationDbContext.cs, Configurations/
│   │   │   ├── 📁 Migrations/
│   │   │   └── 📁 Repositories/                       <- PlateRepository.cs
│   │   ├── 📁 Services/                               <- VietQrService.cs, RedisCacheService.cs
│   │   └── 📁 MessageBroker/                          <- RabbitMqPublisher.cs
│   │
│   └── 📁 4. WebApi/                                  <- Tầng Cổng giao tiếp & Khởi chạy
│       ├── 📁 Controllers/                            <- OrdersController.cs, PlatesController.cs
│       ├── 📁 Middleware/                             <- ExceptionHandlingMiddleware.cs, RateLimitMiddleware.cs
│       ├── appsettings.json
│       └── Program.cs                                 <- Dependency Injection Registry
│
└── 📁 tests/                                          <- Tầng Kiểm thử
    ├── 📁 Domain.UnitTests/
    ├── 📁 Application.UnitTests/
    └── 📁 Api.IntegrationTests/
```

---

## 3. CẤU TRÚC THƯ MỤC CHUẨN CHO JAVA 21 (SPRING BOOT 3.3+)

```
Project: com.synapforge.projectname
├── 📁 domain/
│   ├── 📁 model/                                      <- Aggregate Roots, Entities, Value Objects
│   ├── 📁 repository/                                 <- Repository Interfaces (thuần Java)
│   └── 📁 exception/                                  <- Domain-specific runtime exceptions
│
├── 📁 application/
│   ├── 📁 usecase/                                    <- CreateOrderUseCase.java, ProcessPaymentUseCase.java
│   ├── 📁 dto/                                        <- Request/Response Records (Java 21 Records)
│   └── 📁 port/                                       <- Input & Output Ports (Hexagonal Architecture)
│       ├── 📁 in/                                     <- Driving Ports (Interfaces UseCase)
│       └── 📁 out/                                    <- Driven Ports (MessagePublisherPort, StoragePort)
│
├── 📁 infrastructure/
│   ├── 📁 persistence/                                <- Spring Data JPA Repositories, Entities (JPA Mapping)
│   ├── 📁 messaging/                                  <- RabbitMQ Listeners, RabbitMQ Producers
│   ├── 📁 external/                                   <- Third-party API clients (RestTemplate / WebClient)
│   └── 📁 cache/                                      <- Redis Cache Configurations
│
└── 📁 presentation/
    ├── 📁 controller/                                 <- RestControllers (@RestController)
    ├── 📁 advice/                                     <- GlobalExceptionHandler (@ControllerAdvice)
    └── 📁 filter/                                     <- JwtAuthenticationFilter, CorsFilter
```

---

## 4. QUY CHUẨN THIẾT KẾ ENTITY & KIỂM TOÁN (AUDIT BASELINE)

Mọi Entity lưu trữ trong cơ sở dữ liệu bắt buộc kế thừa từ lớp `BaseAuditableEntity`:

```csharp
public abstract class BaseAuditableEntity<TId>
{
    public TId Id { get; protected set; } = default!;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public string? CreatedBy { get; set; }
    public DateTime? UpdatedAt { get; set; }
    public string? UpdatedBy { get; set; }
    public bool IsDeleted { get; set; } = false; // Soft Delete chuẩn mực
    public DateTime? DeletedAt { get; set; }
}
```

* **Soft Delete:** Tuyệt đối không sử dụng `DELETE` cứng khỏi Database cho các bản ghi giao dịch (Đơn hàng, Khách hàng, Sản phẩm, Hóa đơn). Mọi truy vấn đọc tự động lọc qua Global Query Filter: `WHERE IsDeleted = false`.
* **Idempotency Key:** Mọi bảng giao dịch tài chính (Cọc tiền, Thanh toán, Trừ tiền ví) phải có cột `TransactionRef` hoặc `IdempotencyKey` với ràng buộc `UNIQUE` để loại trừ hoàn toàn việc trừ tiền/ghi nhận trùng lặp.

---

## 5. MẪU KẾT QUẢ THỐNG NHẤT (RESULT PATTERN & ERROR HANDLING)

SynapForge **nghiêm cấm việc ném Exception (throw Exception)** để điều hướng luồng nghiệp vụ thông thường. Mọi nghiệp vụ phải trả về kiểu `Result<T>`:

```csharp
// Chuẩn trả về thống nhất cho Application Layer
public class Result<T>
{
    public bool IsSuccess { get; }
    public T? Value { get; }
    public Error? Error { get; }

    public static Result<T> Success(T value) => new(true, value, null);
    public static Result<T> Failure(Error error) => new(false, default, error);
}
```

### Chuẩn hóa lỗi API theo RFC 7807 (ProblemDetails)
Toàn bộ lỗi hệ thống (500) hoặc lỗi validation (400) trả về cho Frontend phải tuân thủ định dạng chuẩn quốc tế:
```json
{
  "type": "https://synapforge.dev/errors/validation-failed",
  "title": "Dữ liệu đầu vào không hợp lệ",
  "status": 400,
  "detail": "Số điện thoại không đúng định dạng chuẩn 10 chữ số",
  "instance": "/api/v1/orders/checkout",
  "timestamp": "2026-09-29T01:00:00Z",
  "errors": {
    "PhoneNumber": ["Số điện thoại bắt đầu bằng 03, 05, 07, 08, 09"]
  }
}
```

---

## 6. CHIẾN LƯỢC KIỂM THỬ XUẤT XƯỞNG (TESTING PYRAMID)
1. **Unit Tests (Độ bao phủ > 80% tại Domain & Application):** Kiểm tra tính đúng đắn của logic tính toán tiền cọc, chiết khấu, phân quyền ma trận mà không cần bật Database.
2. **Integration Tests (với Testcontainers):** Chạy kiểm thử tự động với Database thật (PostgreSQL container) và Redis thật trong tiến trình CI/CD GitHub Actions trước khi merge code vào nhánh `main`.