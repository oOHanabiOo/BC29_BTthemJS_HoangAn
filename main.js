function getId(n) {
    return document.getElementById(n);
}

// ---------------------------------------------
/**
 * Bài 1
 */

/** Mô hình 3 khối
 * - Đầu vào
 *      - Nhận dữ liệu từ người dùng
 * - Xử lý
 *      - Tạo biến hoTen, tongThuNhapNam, soNPT để nhận giá trị người dùng nhập vào
 *      - Tính tổng thu nhập chịu thuế
 *      - Tính thuế thu nhập cá nhân thì bằng thu nhập chịu thuế nhân với % thuế
 * - Đầu ra
 *      - Show kết quả
 */

// Code

getId("tinhTien").onclick = function() {

    var hoTen = getId("a").value;
    var tongThuNhapNam = getId("b").value * 1;
    var soNPT = getId("c").value * 1;
    var thuNhapChiuThue = tongThuNhapNam - (4e+6) - (soNPT * (1.6e+6));
    var currentFormat = new Intl.NumberFormat("vn-VN");
    var tienThue = "";

    if (0 < thuNhapChiuThue && thuNhapChiuThue <= 60e+6) {

        tienThue = thuNhapChiuThue * 0.05;

    } else if (60e+6 < thuNhapChiuThue && thuNhapChiuThue <= 120e+6) {

        tienThue = thuNhapChiuThue * 0.1;

    } else if (120e+6 < thuNhapChiuThue && thuNhapChiuThue <= 210e+6) {

        tienThue = thuNhapChiuThue * 0.15;

    } else if (210e+6 < thuNhapChiuThue && thuNhapChiuThue <= 384e+6) {

        tienThue = thuNhapChiuThue * 0.2;

    } else if (384e+6 < thuNhapChiuThue && thuNhapChiuThue <= 624e+6) {

        tienThue = thuNhapChiuThue * 0.5;

    } else if (624e+6 < thuNhapChiuThue && thuNhapChiuThue <= 960e+6) {

        tienThue = thuNhapChiuThue * 0.3;

    } else if (960e+6 < thuNhapChiuThue) {

        tienThue = thuNhapChiuThue * 0.35;
    }

    getId("ft1").innerHTML = "Họ tên: " + hoTen + "<br>Tiền thuế thu nhập cá nhân: " + currentFormat.format(tienThue) + " VNĐ.";
};

// --------------------------------------------------------

/**
 * Bài 2
 */

/** Mô hình 3 khối
 * 
 */

// Code

const nd1 = 4.5;
const nd2 = 20.5;
const dn1 = 15;
const dn2 = 75;

function abc(n) {

    var val = n.value;

    if (val === "dn") {

        getId("c1").style.display = "block";

    } else if (val === "nd") {

        getId("c1").style.display = "none";

    } else if (val === "") {

        getId("c1").style.display = "none";
    }
}

getId("tinhTien1").onclick = function() {

    var loaiKH = getId("abc").value;
    var maKH = getId("a1").value;
    var soKenhCC = getId("b1").value * 1;
    var soKetNoi = getId("c1").value * 1;
    var tienCap = "";

    if (loaiKH === "nd") {
        tienCap = nd1 + nd2 + (soKenhCC * 7.5);
    } else if (loaiKH === "dn") {
        if (soKetNoi <= 10) {
            tienCap = dn1 + dn2 + (soKenhCC * 50);
        } else if (soKetNoi > 10) {
            tienCap = dn1 + dn2 + ((soKetNoi - 10) * 5) + (soKenhCC * 50);
        }
    }
    getId("ft2").innerHTML = "Mã khách hàng: " + maKH + "<br>Tiền cáp: " + tienCap + " $";
}