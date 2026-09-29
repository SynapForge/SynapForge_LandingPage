# MODULE 03: QUẢN LÝ KHO & KHÓA TRẠNG THÁI REAL-TIME CHỐNG BÁN TRÙNG
> **Giải pháp phần mềm lắp ghép độc quyền — Thuộc hệ sinh thái SynapForge**  
> **Dự án gốc đã triển khai thực tế:** `BienSoVip (Sàn Đấu Giá & Giao Dịch Biển Số Xe)`  
> **Công nghệ cốt lõi:** `Redis Distributed Lock • Redlock Algorithm • SignalR • PostgreSQL GIN`  
> **Chỉ số đo lường thực tế:** `Khóa phân tán TTL 15 phút • Triệt tiêu 100% rủi ro Double-Booking`  

---

## 1. HÌNH ẢNH MINH CHỨNG THỰC TẾ ĐÃ CODE TRONG SẢN XUẤT
Dưới đây là ảnh chụp màn hình trực tiếp từ hệ thống đang vận hành thực tế:

![Quản Lý Kho & Khóa Trạng Thái Real-Time Chống Bán Trùng](./biensovip_real_plates.png)
*Chú thích: Kho quản trị biển số và cơ chế khóa độc bản thời gian thực từ hệ thống Biensovip*

---

## 2. NỖI ĐAU THỰC TẾ CỦA DOANH NGHIỆP (PAIN POINT)
Đối với các sản phẩm độc bản hoặc số lượng có hạn (như biển số xe, căn hộ, vé sự kiện), nhiều khách hàng cùng bấm thanh toán một lúc sẽ gây ra hiện tượng bán trùng (double-booking), dẫn đến tranh chấp pháp lý và mất uy tín nghiêm trọng.

---

## 3. GIẢI PHÁP KỸ THUẬT & KIẾN TRÚC SYNAPFORGE (TECHNICAL SOLUTION)
Ứng dụng Redis Distributed Lock (khóa phân tán). Ngay khi khách bấm vào bước thanh toán, sản phẩm bị khóa giữ chỗ với thời gian sống TTL 15 phút. Nếu sau 15 phút khách không hoàn tất giao dịch, lock tự động giải phóng nhả sản phẩm về kho cho khách khác mua.

---

## 4. QUY TRÌNH HOẠT ĐỘNG THỰC TẾ (WORKFLOW)
1. **Bước 1:** Khách hàng bấm 'Giữ cọc ngay', backend phát lệnh Redis Lock với TTL 15 phút.
2. **Bước 2:** Tất cả người dùng khác truy cập trang sản phẩm lập tức thấy trạng thái 'ĐANG GIỮ CHỖ'.
3. **Bước 3:** Nếu thanh toán thành công -> Khóa vĩnh viễn sang ĐÃ BÁN. Nếu hết 15 phút -> Tự nhả về kho.

---

## 5. HƯỚNG DẪN DÀNH CHO LẬP TRÌNH VIÊN KHI CODE TÍNH NĂNG
* **Dữ liệu nguồn:** Đã được cấu hình trong `src/data/pricingAndSaasData.js` với ID `inventory_lock`.
* **Component giao diện:** Có thể tham chiếu component mẫu từ dự án gốc để lắp ráp trực tiếp vào website của khách hàng.
* **Thư mục ảnh assets:** `public/docs/images/biensovip_real_plates.png`.
