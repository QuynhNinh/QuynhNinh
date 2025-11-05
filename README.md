📋 Giới thiệu
QuynhNinhShop là website thương mại điện tử chuyên về thời trang nữ, được xây dựng bằng HTML, CSS, JavaScript và Bootstrap. Website mang đến trải nghiệm mua sắm trực tuyến với giao diện hiện đại, thân thiện và đầy đủ các tính năng cần thiết.
🛍️ Quản lý sản phẩm
Hiển thị danh mục sản phẩm theo nhiều loại (đầm, áo, quần, chân váy, áo khoác)
Bộ lọc sản phẩm theo danh mục
Tìm kiếm sản phẩm nhanh chóng
Chi tiết sản phẩm với hình ảnh và thông tin đầy đủ
🛒 Hệ thống giỏ hàng
Thêm/Xóa sản phẩm vào giỏ hàng
Thay đổi số lượng sản phẩm
Tính tổng tiền tự động
Lưu trữ giỏ hàng với Local Storage
💳 Thanh toán
Đa dạng phương thức thanh toán (COD, Chuyển khoản, MoMo)
Form thông tin giao hàng đầy đủ
Xác nhận đơn hàng với thông báo chi tiết
👤 Quản lý tài khoản
Đăng nhập/Đăng ký tài khoản
Form validation cho thông tin cá nhân
Ghi nhớ đăng nhập
📞 Hỗ trợ khách hàng
Trang liên hệ với form gửi tin nhắn
FAQ - Câu hỏi thường gặp
Thông tin liên hệ chi tiết
🎨 Thiết kế giao diện
🎯 Màu sắc chủ đạo
:root {
  --pink-color: #f8c1d0;      /* Màu hồng chính */
  --light-pink: #fff5f8;      /* Màu hồng nhạt */
  --dark-pink: #e55a8a;       /* Màu hồng đậm */
}
📱 Responsive Design
Tương thích đa thiết bị (Desktop, Tablet, Mobile)
Breakpoints linh hoạt với Bootstrap
Navigation thông minh trên mobile
🗂️ Cấu trúc dự án
QuynhNinhShop/
├── index.html              # Trang chủ
├── san-pham.html           # Trang sản phẩm
├── cart.html               # Trang giỏ hàng
├── contact.html            # Trang liên hệ
├── checkout.html           # Trang thanh toán
├── product_detail.html     # Trang chi tiết sản phẩm
├── style.css              # File CSS chính
├── scripts.js             # File JavaScript chính
└── images/                # Thư mục hình ảnh
    ├── Logo.png           # Logo website
    └── banner.jpg         # Banner chính
🚀 Công nghệ sử dụng
Frontend: HTML5, CSS3, JavaScript (ES6)
Framework: Bootstrap 5.3.2
Icons: Font Awesome 6.4.2
Fonts: Google Fonts (Poppins)
Storage: Local Storage API
📖 Hướng dẫn sử dụng
1. Truy cập website
Mở file index.html trong trình duyệt để bắt đầu trải nghiệm.
2. Duyệt sản phẩm
Truy cập trang "Sản phẩm" để xem toàn bộ danh mục
Sử dụng bộ lọc danh mục để tìm sản phẩm theo loại
Click "Mua hàng" để thêm sản phẩm vào giỏ
3. Quản lý giỏ hàng
Click biểu tượng giỏ hàng trên navigation
Thay đổi số lượng hoặc xóa sản phẩm
Chọn phương thức thanh toán phù hợp
4. Thanh toán
Click "Thanh toán ngay" từ giỏ hàng
Điền đầy đủ thông tin giao hàng
Xác nhận đơn hàng
5. Tài khoản
Click "Tài khoản" để đăng nhập/đăng ký
Điền thông tin và submit form
🔧 Tính năng kỹ thuật
🗃️ Quản lý dữ liệu
// Product Data Model
const products = [
  {
    id: 1,
    name: "Tên sản phẩm",
    type: "danh-muc",
    price: 120000,
    img: "url-hinh-anh",
    description: "Mô tả sản phẩm"
  }
];
💾 Local Storage Integration
// Lưu giỏ hàng
localStorage.setItem('cart', JSON.stringify(cart));
// Đọc giỏ hàng
let cart = JSON.parse(localStorage.getItem('cart')) || [];
📱 Responsive Breakpoints
/* Desktop */ @media (min-width: 992px) { ... }
/* Tablet */ @media (max-width: 991.98px) { ... }
/* Mobile */ @media (max-width: 767.98px) { ... }
🌟 Điểm nổi bật
✅ Ưu điểm
Giao diện hiện đại, phù hợp với thời trang nữ
Trải nghiệm người dùng tốt với navigation rõ ràng
Performance tốt với tối ưu hóa hình ảnh và code
Code sạch sẽ, dễ bảo trì và mở rộng
Tài liệu đầy đủ với hướng dẫn sử dụng chi tiết
🔄 Hướng phát triển
Backend Integration - Kết nối với cơ sở dữ liệu
User Authentication - Hệ thống đăng nhập bảo mật
Payment Gateway - Tích hợp cổng thanh toán
Admin Dashboard - Trang quản trị cho shop
Product Reviews - Hệ thống đánh giá sản phẩm
Order Tracking - Theo dõi đơn hàng
👥 Đóng góp
Dự án được phát triển bởi Phạm Thị Quỳnh Ninh như một bài tập lớn môn Thiết kế Web và Triển khai Hệ thống Phần mềm.
Giảng viên hướng dẫn: ThS. Lê Văn Phong
📄 Giấy phép
Dự án được phát triển cho mục đích học tập. Mọi quyền được bảo lưu.
📞 Liên hệ
Địa chỉ: Thanh Xuân, Hà Nội
Điện thoại: 0336118717
Email: contact@quynhninhshop.com
© 2025 QuynhNinhShop. Tất cả quyền được bảo lưu.
