# QUY CHUẨN VẬN HÀNH DỰ ÁN AGILE, GIT & CODE REVIEW NỘI BỘ
> **Quy định kỷ luật kỹ thuật bắt buộc cho toàn bộ kỹ sư SynapForge**  
> **Mục tiêu:** Đảm bảo mã nguồn nhất quán, không xung đột (conflict), 100% truy vết được qua Jira và Git  

---

## 1. QUY CHUẨN ĐẶT TÊN NHÁNH GIT (BRANCHING STRATEGY)
Mọi dự án áp dụng mô hình chuẩn hóa **Trunk-Based / GitFlow**:
* Nhánh chính:
  * `main` / `production`: Chứa mã nguồn ổn định nhất đang chạy thực tế trên Cloud. Chỉ merge qua Pull Request (PR) được Tech Lead duyệt.
  * `develop` / `staging`: Nhánh tích hợp liên tục để kiểm thử trước khi release.
* Nhánh tính năng (Feature branches):
  * Cú pháp: `feat/[Jira-Ticket-ID]_[short-description]`
  * Ví dụ: `feat/SF-102_vietqr-webhook-listener`
* Nhánh sửa lỗi (Bugfix / Hotfix):
  * Cú pháp: `fix/[Jira-Ticket-ID]_[issue-summary]`
  * Ví dụ: `fix/SF-204_redis-concurrency-lock-leak`

---

## 2. QUY CHUẨN GHI CHÚ COMMIT (CONVENTIONAL COMMITS)
Mọi commit bắt buộc tuân theo cú pháp:
```
<type>(<scope>): <subject> [#Jira-ID]
```
* **Các loại type chuẩn:**
  * `feat`: Thêm tính năng mới cho người dùng.
  * `fix`: Sửa lỗi kỹ thuật.
  * `refactor`: Tái cấu trúc mã nguồn nhưng không đổi logic bên ngoài.
  * `perf`: Tối ưu hiệu năng, giảm thời gian query SQL, giảm bundle size.
  * `docs`: Thêm hoặc cập nhật tài liệu kỹ thuật.
  * `test`: Thêm hoặc sửa Unit test, Integration test.
* **Ví dụ mẫu:**
  * `feat(payment): implement vietqr dynamic webhook listener #BSV-45`
  * `perf(database): add GIN index on plate numeric features for sub-8ms query #BSV-12`

---

## 3. QUY TRÌNH PULL REQUEST & CODE REVIEW MANDATE
1. **Quy tắc 1-Senior Review:** Không kỹ sư nào được tự merge code vào `develop` hoặc `main`. Mỗi PR phải có ít nhất 1 Senior/Lead phê duyệt.
2. **Kiểm tra tự động trước khi Review (CI Gate):**
   * Code phải vượt qua 100% Linter (ESLint, Prettier, StyleCop).
   * Không có lỗi biên dịch (Compilation error) và Unit test phải Pass 100%.
3. **Tiêu chuẩn nghiệm thu code (Definition of Done - DoD):**
   * Tuân thủ Clean Architecture, không inject DbContext trực tiếp vào Controller.
   * Viết comment giải thích rõ ràng tại các thuật toán phức tạp (như Redis Lock, RAG Pipeline).
   * Có ảnh chụp màn hình hoặc video demo chức năng chạy trên máy local kèm theo PR description.
