$(document).ready(function () {
    // $(".thongBao").hide();
    $(".btnDN").click(function () {
        //lấy dữ liệu
        var taikhoan = $("#tenDangNhap").val();
        var matKhau = $("#matKhau").val();
        //tạo list danh sách tài khoản được đăng nhập thành công
        var list_Account_Success_ful = [
            { taikhoan: 'admin', matKhau: '123' },
            { taikhoan: 'admin123', matKhau: '123456' },
            { taikhoan: 'admin', matKhau: '123456' },
            { taikhoan: 'admin', matKhau: 'admin' },
            { taikhoan: 'admin@abc.com', matKhau: 'admin' },
            { taikhoan: 'admin123@abc.com', matKhau: 'admin123' },
        ];
        // Biến flag để kiểm tra đăng nhập thành công
        var loginSuccess = false;
        //đặt điều kiện
        if (taikhoan == "") {
            $(".tenDangNhap_error").html("Vui lòng nhập thông tin tên đăng nhập");
            $(".tenDangNhap_error").show();
        } else {
            $(".tenDangNhap_error").hide();
        }

        if (matKhau == "") {
            $(".matKhau_error").html("Vui lòng nhập thông tin mật khẩu");
            $(".matKhau_error").show();
        } else {
            $(".matKhau_error").hide();
        }

        // Kiểm tra từng cặp tài khoản và mật khẩu trong danh sách
        if (taikhoan !== "" && matKhau !== "") {
            for (var i = 0; i < list_Account_Success_ful.length; i++) {
                var account = list_Account_Success_ful[i];
                if (account.taikhoan === taikhoan && account.matKhau === matKhau) {
                    loginSuccess = true;
                    break; // Thoát khỏi vòng lặp khi tìm thấy
                }
            }

            if (loginSuccess) {
                //access += "Đăng nhập thành công";
                // $(".thongBao").html(access);
                $(".thongBao").html("Đăng nhập thành công");
                $(".thongBao").show();
                //nếu đăng nhập thành công thì sẽ chuyển đến trang chủ
                window.location.href = 'index.html';
            } else {
                //access += "Đăng nhập thất bại";
                // $(".thongBao").html(access);
                $(".thongBao").html("Đăng nhập thất bại");
                $(".thongBao").show();
                $(".tenDangNhap_error").html("Kiểm tra lại thông tin tên đăng nhập");
                $(".tenDangNhap_error").show();
                $(".matKhau_error").html("Kiểm tra lại thông tin mật khẩu");
                $(".matKhau_error").show();
            }
        }
    });

    $(".btnDK").click(function () {
        // Lấy dữ liệu
        var hoVaTen = $("#hoVaTen").val();
        var email = $("#email_is").val();
        var tenDangKy = $("#tenDangKy").val();
        var matKhau = $("#matKhau").val();
        var re_matKhau = $("#re_matKhau").val();
        var ngaySinh = $("#ngaySinh").val();
        var gioiTinh = $("input[name='gioiTinh']:checked").val(); // Sử dụng "input[name='gioiTinh']:checked" để lấy giá trị của radio button
        var diaChi = $("#diaChi").val();
        // Sử dụng "input[name='dieuKhoan']:checked" để lấy giá trị của radio khi đồng ý với điều khoản
        var dieuKhoan = $("input[name='dieuKhoan']:checked").val();
        console.log("điều khoản", dieuKhoan);

        // Khởi tạo mảng thông báo lỗi
        var loi_DKy = false;
        var loiArr = [];

        // Đặt điều kiện kiểm tra từng trường
        if (hoVaTen == "") {
            $(".hoVaTen_error").html("Vui lòng nhập thông tin họ và tên đăng ký");
            loi_DKy = true;
        } else {
            $(".hoVaTen_error").html("");
        }

        if (email == "") {
            $(".email_error").html("Vui lòng nhập thông tin Email");
            loi_DKy = true;
        } else {
            $(".email_error").html("");
        }

        if (tenDangKy == "") {
            $(".tenDangKy_error").html("Vui lòng nhập thông tin tên đăng ký");
            loi_DKy = true;
        } else if (!/^[a-zA-Z0-9._%+-]+@abc\.com$/.test(tenDangKy)) {
            $(".tenDangKy_error").html("Vui lòng nhập đúng định dạng email: example@abc.com");
            loi_DKy = true;
        } else {
            $(".tenDangKy_error").html("");
        }

        if (matKhau == "") {
            $(".matKhau_error").html("Vui lòng nhập thông tin mật khẩu");
            loi_DKy = true;
        } else if (!/^\d{1,8}$/.test(matKhau)) {
            $(".matKhau_error").html("Vui lòng nhập mật khẩu, tối thiểu 8 kí tự");
            loi_DKy = true;
        } else {
            $(".matKhau_error").html("");
        }

        if (re_matKhau == "") {
            $(".re_matKhau_error").html("Vui lòng nhập lại thông tin mật khẩu");
            loi_DKy = true;
        } else if (matKhau !== re_matKhau) {
            $(".re_matKhau_error").html("Nhập lại mật khẩu không khớp với mật khẩu đã nhập");
            loi_DKy = true;
            $(".re_matKhau_error").show();
        } else {
            $(".re_matKhau_error").html("");
        }

        if (ngaySinh == "") {
            $(".ngaySinh_error").html("Vui lòng chọn ngày sinh");
            loi_DKy = true;
        } else {
            $(".ngaySinh_error").html("");
        }

        if (gioiTinh == undefined) {
            $(".gioiTinh_error").html("Vui lòng chọn giới tính");
            loi_DKy = true;
        } else {
            $(".gioiTinh_error").html("");
        }

        if (diaChi == "") {
            $(".diaChi_error").html("Vui lòng nhập thông tin địa chỉ");
            loi_DKy = true;
        } else {
            $(".diaChi_error").html("");
        }

        // Kiểm tra nếu có lỗi
        if (loi_DKy) {
            // Hiển thị thông báo lỗi
            var loiString = "<ul>";
            for (var i = 0; i < loiArr.length; i++) {
                loiString += "<li>" + loiArr[i] + "</li>";
            }
            $(".thongBao").html("Đăng ký không thành công");
        } else {
            // Kiểm tra nếu tất cả các trường đều được nhập và không có lỗi
            $(".thongBao").html("Đăng ký thành công");
            // Nếu khi đăng ký thành công chuyển hướng đến trang index.html 
            window.location.href = 'index.html';
        }
    });

    //lấy thông tin form liên hệ
    $(".guiLoiNhan").click(function () {
        var hoVaTen = $("#hoVaTen").val();
        var emailLienHe = $("#emailLienHe").val();
        var soDienThoai = $("#soDienThoai").val();
        var noiDungPhanHoi = $("#noiDungPhanHoi").val();

        // Hiển thị dữ liệu trong console hoặc thực hiện các hành động khác
        // $(".").html();
        // $(".").show();
        console.log("Họ và tên:", hoVaTen);
        console.log("Email liên hệ:", emailLienHe);
        console.log("SĐT liên hệ:", soDienThoai);
        console.log("Nội dung:", noiDungPhanHoi);
    });

    //lấy thông tin email dưới footer
    $(".btn_email_footer").click(function () {
        var email_footer = $("#input_email").val();

        // Hiển thị dữ liệu trong console hoặc thực hiện các hành động khác
        // $(".").html();
        // $(".").show();
        console.log("Email:", email_footer);
    });

});

//khi nhấn vào nút button thì sẽ chuyển sang trang giỏ hàng
//Phương thức querySelector() sẽ tìm kiếm phần tử có class là button và thêm sự kiện click cho phần tử đó.
//Hàm addEventListener() sẽ lắng nghe sự kiện click và khi sự kiện xảy ra, sẽ gọi hàm goToGioHang().
// function goToGioHang1() {
//     window.location.href = "gioHang.html";
// }

// document.querySelector(".btn").addEventListener("click", goToGioHang);