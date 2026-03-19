# 🚀 BÀI THỰC HÀNH NODE.JS - GIẢI THÍCH TOÀN BỘ CODE

Project này là một ứng dụng web cơ bản được xây dựng bằng Node.js và Express, nhằm mục đích giúp sinh viên hiểu cách một web server hoạt động từ khi khởi tạo đến khi xử lý request từ người dùng và trả về kết quả trên trình duyệt.

Ứng dụng bắt đầu bằng việc sử dụng thư viện Express thông qua câu lệnh:
const express = require('express');
Đây là bước import thư viện, giúp chúng ta sử dụng các chức năng có sẵn của Express để xây dựng server thay vì phải code thủ công bằng Node.js thuần.

Sau đó, ta khởi tạo một ứng dụng web bằng:
const app = express();
Lệnh này tạo ra một đối tượng “app”, đóng vai trò là trung tâm điều khiển toàn bộ server, nơi sẽ định nghĩa các route (đường dẫn), middleware và cấu hình hệ thống.

Tiếp theo, ta khai báo cổng chạy server:
const port = 3000;
Cổng (port) là nơi server lắng nghe các request từ client (trình duyệt). Trong trường hợp này, ứng dụng sẽ chạy tại địa chỉ http://localhost:3000.

Phần quan trọng tiếp theo là định nghĩa route:
app.get('/', (req, res) => {
    res.send('Hello World');
});
Đây là một route xử lý HTTP GET request khi người dùng truy cập vào đường dẫn gốc "/".
- req (request): chứa thông tin request từ client gửi lên (URL, dữ liệu, header,...)
- res (response): dùng để gửi dữ liệu phản hồi lại cho client

Trong ví dụ này, khi người dùng truy cập vào trang chủ, server sẽ trả về chuỗi “Hello World” hiển thị trên trình duyệt.

Cuối cùng, server được khởi động bằng lệnh:
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
Lệnh này yêu cầu server bắt đầu chạy và lắng nghe request tại port đã khai báo. Khi server chạy thành công, một thông báo sẽ được in ra terminal để xác nhận.

Toàn bộ luồng hoạt động của chương trình có thể hiểu như sau: khi chạy file app.js bằng Node.js, server được khởi tạo và lắng nghe tại cổng 3000. Khi người dùng mở trình duyệt và truy cập vào địa chỉ tương ứng, request sẽ được gửi đến server, Express sẽ kiểm tra route phù hợp (ở đây là "/"), sau đó thực thi hàm xử lý và trả về kết quả cho người dùng.

Ngoài ra, project còn có thể bao gồm các thư mục như views (chứa giao diện), public (chứa file tĩnh như CSS, JS, hình ảnh) và node_modules (chứa thư viện). Trong đó, node_modules không cần upload lên GitHub vì có thể cài lại bằng lệnh npm install dựa trên file package.json.

Tóm lại, bài thực hành này giúp nắm được quy trình cơ bản của một ứng dụng web backend: từ khởi tạo server, định nghĩa route, xử lý request/response cho đến việc chạy và kiểm tra kết quả trên trình duyệt. Đây là nền tảng quan trọng để phát triển các ứng dụng web phức tạp hơn trong tương lai.