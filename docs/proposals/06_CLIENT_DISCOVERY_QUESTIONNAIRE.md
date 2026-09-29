# BỘ CÂU HỎI KHẢO SÁT NGHIỆP VỤ & ĐÁNH GIÁ NHU CẦU DỰ ÁN (CLIENT DISCOVERY QUESTIONNAIRE)
> **Biểu mẫu khảo sát nhu cầu chuyên sâu phục vụ lên Bản Đề Xuất Giải Pháp & Báo Giá chính xác trong vòng 24 Giờ**  
> **Đơn vị phát hành:** Ban Tư vấn Giải pháp SynapForge  
> **Cam kết:** Bảo mật 100% thông tin ý tưởng và mô hình kinh doanh của Quý khách theo chuẩn NDA  

---

## 📌 HƯỚNG DẪN DÀNH CHO KHÁCH HÀNG & CHUYÊN VIÊN TƯ VẤN
* **Mục đích:** Giúp SynapForge thấu hiểu 99% bài toán kinh doanh, quy mô người dùng và các rào cản kỹ thuật của Quý khách, từ đó đưa ra kiến trúc tối ưu nhất mà không lãng phí ngân sách vào các tính năng thừa thãi.
* **Thời gian hoàn thành:** Khoảng **10 – 15 phút** điền nhanh hoặc trao đổi trực tiếp trong buổi Discovery Call 30 phút.
* **Kết quả nhận lại:** Trong vòng **24 giờ làm việc** sau khi nhận được bản khảo sát này, SynapForge sẽ gửi lại Quý khách:
  1. Bản Đề Xuất Giải Pháp Kỹ Thuật & Kiến Trúc Tổng Thể ([01_MASTER_PROPOSAL_TEMPLATE.md](./01_MASTER_PROPOSAL_TEMPLATE.md)).
  2. Bảng Phân Rã Hạng Mục Công Việc & Báo Giá Trọn Gói ([05_COMMERCIAL_PRICING_AND_ESCROW.md](./05_COMMERCIAL_PRICING_AND_ESCROW.md)).

---

## PHẦN A: THÔNG TIN DOANH NGHIỆP & MÔ HÌNH KINH DOANH

**1. Tên doanh nghiệp / Thương hiệu / Dự án khởi nghiệp của Quý khách là gì?**  
👉 *Trả lời:* `[........................................................................]`

**2. Lĩnh vực hoạt động chính của Quý khách?**  
* [ ] Thương mại điện tử (Bán lẻ, Mỹ phẩm, Thời trang, Đồ hiệu)
* [ ] Sàn giao dịch chuyên biệt (Bất động sản, Xe cộ, Biển số xe, Đấu giá trực tuyến)
* [ ] Dịch vụ đặt lịch & Cho thuê (Vé xe, Khách sạn, Spa, Phòng khám)
* [ ] Phần mềm dịch vụ B2B SaaS / Đào tạo trực tuyến EdTech
* [ ] Khác: `[........................................................................]`

**3. Khách hàng mục tiêu (Đối tượng người dùng cuối) của Quý khách là ai?**  
👉 *Mô tả ngắn gọn:* `[Ví dụ: Chủ doanh nghiệp, Người săn đồ hiệu, Học sinh sinh viên...]`

---

## PHẦN B: BỐI CẢNH THỰC TẾ & NỖI ĐAU CẦN GIẢI QUYẾT

**4. Quý khách hiện đang vận hành và tiếp nhận đơn hàng bằng phương thức nào?**  
* [ ] Bán hàng thủ công qua Fanpage, Zalo, chốt đơn qua tin nhắn và ghi chép sổ sách/Excel
* [ ] Đang dùng website tự dựng bằng WordPress / Haravan / Shopify nhưng bị chậm, lag hoặc giới hạn tính năng
* [ ] Đang có hệ thống phần mềm cũ viết bằng PHP/C# cũ, hay bị nghẽn server và muốn đập đi xây lại
* [ ] Dự án hoàn toàn mới (Khởi nghiệp từ con số 0 cần MVP thần tốc)

**5. Điểm nghẽn lớn nhất hoặc rủi ro gây thiệt hại doanh thu hiện tại của Quý khách là gì?**  
* [ ] Khách hàng bỏ dở giỏ hàng vì web tải quá chậm (> 3 giây)
* [ ] Nhân viên mất quá nhiều thời gian kiểm tra sao kê ngân hàng và đối soát tiền cọc thủ công
* [ ] Hay bị bán trùng hàng (hai khách cùng chuyển tiền mua một sản phẩm độc bản tại cùng 1 lúc)
* [ ] Mất từ 1.5% đến 2.5% phí giao dịch khi dùng các cổng trung gian thanh toán
* [ ] Khác: `[........................................................................]`

---

## PHẦN C: YÊU CẦU TÍNH NĂNG CỐT LÕI (CORE FEATURE REQUIREMENTS)

**6. Về Cổng thông tin cho Khách hàng (Client Facing Portal):**  
* [ ] Cần bộ lọc danh mục sản phẩm siêu tốc độ cao (< 8ms) theo nhiều tiêu chí
* [ ] Cần công cụ 1-click tự động sinh ảnh phối cảnh thực tế (Mockup Generator)
* [ ] Cần tính năng so sánh đa sản phẩm trực quan
* [ ] Cần trợ lý AI đàm thoại tư vấn sản phẩm và giải đáp chính sách tự động 24/7
* [ ] Cần thông báo người khác vừa mua hàng thời gian thực (Social Proof Popup)

**7. Về Thanh toán & Đối soát tự động (Payment Automation):**  
* [ ] Cần tích hợp quét mã VietQR Pro động tự động nhận diện cú pháp chuyển khoản và khớp cọc trong < 0.5s (0đ phí cổng)
* [ ] Cần cổng cọc tiền linh hoạt (Cho phép cọc một phần 10% - 20% hoặc thanh toán 100%)
* [ ] Cần cơ chế khóa phân tán Redis Lock giữ chỗ sản phẩm trong 15 phút, quá hạn tự nhả kho

**8. Về Phân hệ Quản trị & Vận hành (Admin CMS):**  
* [ ] Dashboard báo cáo biểu đồ doanh thu, số lượt quét mã cọc theo thời gian thực
* [ ] Cổng quản trị mạng lưới Cộng Tác Viên (CTV), cấp link UTM định danh và tính hoa hồng tự động
* [ ] Trình thiết kế email marketing kéo-thả gửi thông báo hóa đơn tự động 0đ phí
* [ ] Hệ thống nhật ký kiểm toán bất biến (Audit Trail) giám sát nhân viên, chống lộ dữ liệu khách VIP

---

## PHẦN D: QUY MÔ TRUY CẬP, HẠ TẦNG & TÍCH HỢP BÊN THỨ BA

**9. Lượng người dùng và số lượng đơn hàng Quý khách kỳ vọng trong 6 – 12 tháng tới?**  
* Lượng truy cập đồng thời tại giờ cao điểm (Peak CCU): `[.....]` người online cùng lúc.
* Số lượng đơn hàng / giao dịch trung bình mỗi ngày: `[.....]` đơn/ngày.

**10. Quý khách đã có sẵn những hạ tầng nào dưới đây chưa?**  
* [ ] Đã có Tên miền riêng (Domain)
* [ ] Đã có Máy chủ Cloud VPS (AWS, DigitalOcean, Viettel IDC, BKNS...)
* [ ] Đã có Tài khoản Ngân hàng doanh nghiệp / cá nhân để nhận tiền VietQR
* [ ] Chưa có gì cả, cần SynapForge tư vấn và hỗ trợ thiết lập từ A đến Z

**11. Quý khách có yêu cầu tích hợp với phần mềm nào có sẵn không?**  
* [ ] Cần kết nối Bot thông báo về nhóm Telegram / Zalo của ban quản lý
* [ ] Cần kết nối với phần mềm kế toán / CRM nội bộ: `[Tên phần mềm: ...................]`
* [ ] Cần kết nối với đơn vị vận chuyển (Giao Hàng Tiết Kiệm, GHN, Viettel Post)
* [ ] Không có yêu cầu tích hợp thêm

---

## PHẦN E: NGÂN SÁCH, TIẾN ĐỘ & TIÊU CHÍ NGHIỆM THU

**12. Ngân sách đầu tư dự kiến cho dự án này của Quý khách?**  
* [ ] Dưới 15.000.000 VNĐ *(Phù hợp gói MVP Sprint: 11.5M • 30 Ngày)*
* [ ] Từ 15.000.000 đến 25.000.000 VNĐ *(Phù hợp gói Growth Production: 18.5M • 45 Ngày - Khuyên nghị)*
* [ ] Từ 25.000.000 đến 50.000.000 VNĐ *(Phù hợp gói Enterprise Scale: 33M • 60 Ngày)*
* [ ] Ngân sách mở tùy theo giải pháp kỹ thuật đề xuất

**13. Thời hạn mong muốn đưa sản phẩm vào vận hành thương mại chính thức (Go-live)?**  
👉 *Ngày mong muốn:* `[..... / ..... / 2026]` (hoặc trong vòng `[.....]` tuần tới).

**14. Tiêu chí quan trọng nhất để Quý khách đánh giá dự án này thành công rực rỡ?**  
👉 *Chia sẻ của Quý khách:* `[Ví dụ: Không bao giờ bị bán trùng đơn, Web mượt như Apple, Tự động hóa hoàn toàn không cần người canh màn hình...]`

---

## 📞 THÔNG TIN LIÊN HỆ ĐỂ NHẬN BÁO GIÁ TRONG 24H
* **Họ và tên người phụ trách:** `[........................................................................]`
* **Chức danh:** `[Giám Đốc / Chủ Doanh Nghiệp / Quản Lý Dự Án / Kỹ Sư Trưởng]`
* **Số điện thoại / Zalo:** `[........................................................................]`
* **Email nhận bản đề xuất:** `[........................................................................]`

*(Quý khách vui lòng lưu file hoặc gửi lại thông tin qua Zalo/Email: `0912 158 715` — `contact@synapforge.dev` để Tech Lead Lê Trí Trung trực tiếp phản hồi giải pháp).*