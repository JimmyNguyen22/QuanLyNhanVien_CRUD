function NhanVien() {
  this.taiKhoan = "";
  this.hoTen = "";
  this.email = " ";
  this.matKhau = "";
  this.ngayLam = "";
  this.luongCoBan = 0;
  this.chucVu = "";
  this.gioLam = 0;

  this.tongLuong = function () {
    let luong = 0;
    if (this.chucVu === "Sếp") {
      luong = Number(this.luongCoBan) * 3;
    } else if (this.chucVu === "Trưởng phòng") {
      luong = Number(this.luongCoBan) * 2;
    } else {
      luong = Number(this.luongCoBan);
    }
    return luong.toLocaleString() + " VND";
  };

  this.xepLoaiNhanVien = function () {
    let xepLoai = "";
    if (this.gioLam >= 192) {
      xepLoai = "Nhân viên xuất sắc";
    } else if (this.gioLam >= 176) {
      xepLoai = "Nhân viên giỏi";
    } else if (this.gioLam >= 160) {
      xepLoai = "Nhân viên khá";
    } else {
      xepLoai = "Nhân viên trung bình";
    }
    return xepLoai;
  };
}
