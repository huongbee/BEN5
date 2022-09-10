/*
Cho file users.json
Dựng server thực hiện các APIs sau:
- Đọc data từ file users.json
- Thêm 1 user vào file users.json. Kiểm tra id tồn tại
- Cập nhật 1 user trong file users.json với id truyền từ route
- Xóa user trong file users.json với id truyền từ route

Cấu trúc data response:
{
  "success": true,
  "message": "Success!",
  "data": {
      "users": [
        {
          "id": 1,
          "name": "Nguyen Van A",
          "age": "22",
          "address": "District 3, HCM"
        }
      ]
  }
}
*/
