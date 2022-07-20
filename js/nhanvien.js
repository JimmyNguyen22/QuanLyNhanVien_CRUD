let arrNhanVien = [];

document.querySelector("#btnThemNV").onclick = function () {
  //input thông tin nhan vien
  let nv = new NhanVien();

  nv.taiKhoan = document.querySelector("#tknv").value;
  nv.hoTen = document.querySelector("#name").value;
  nv.email = document.querySelector("#email").value;
  nv.matKhau = document.querySelector("#password").value;
  nv.ngayLam = document.querySelector("#datepicker").value;
  nv.luongCoBan = document.querySelector("#luongCB").value;
  nv.chucVu = document.querySelector("#chucvu").value;
  nv.gioLam = document.querySelector("#gioLam").value;

  // validation
  let valid = true;
  // kiem tra rỗng
  valid &= checkDay(nv.ngayLam, ".errorDay", "Ngày");
  // kiểm tra độ dài
  valid &= lengthPass(nv.matKhau, ".max_mix_pass", "* Mật khẩu", 6, 10);
  // kiem tra định dạng
  valid &=
    checkLength(nv.taiKhoan, "#errorTaiKhoan", "Tài khoản", 4, 6) &
    checkName(nv.hoTen, ".errorName", "Tên nhân viên") &
    checkEmail(nv.email, ".errorEmail", " Email") &
    checkPass(nv.matKhau, ".errorPass", "Mật khẩu") &
    kiemTraChuc(nv.chucVu, ".errorChucvu", "Chức vụ");
  // kiem tra gia tri
  valid &=
    checkLuong(nv.luongCoBan, ".errorLuong", "Lương", 10e6) &
    soGioLam(nv.gioLam, ".errorGioLam", "Số giờ làm", 80);
  if (!valid) {
    return;
  }

  //output html: string
  arrNhanVien.push(nv);
  taoBang(arrNhanVien);

  // Sau khi thêm nv thành công thì lưu mảng vào localstorage
  let luuMang = JSON.stringify(arrNhanVien);
  luuLocalStorage("luuNhanVien", luuMang);
};

function taoBang(arrnv) {
  let html = "";
  for (let index = 0; index < arrnv.length; index++) {
    let staff = arrnv[index];
    if (!staff.hasOwnProperty("tongLuong")) {
      staff.tongLuong = function () {
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
    }
    if (!staff.hasOwnProperty("xepLoaiNhanVien")) {
      staff.xepLoaiNhanVien = function () {
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
    let tr = `
        <tr>
            <th>${staff.taiKhoan}</th>
            <th>${staff.hoTen}</th>
            <th>${staff.email}</th>
            <th>${staff.ngayLam}</th>
            <th>${staff.chucVu}</th>
            <th>${staff.tongLuong()}</th>
            <th>${staff.xepLoaiNhanVien()}</th>
            <th>
            <button class="btn btn-danger" onclick="xoaNhanVien('${
              staff.taiKhoan
            }')">Xóa</button>
            <button class="btn btn-primary ml-2 " data-toggle="modal" data-target="#myModal" onclick="suaNhanVien('${
              staff.taiKhoan
            }')">Sửa</button>
            </th>
        </tr>
        `;
    html += tr;
  }
  document.querySelector("#tableDanhSach").innerHTML = html;
}

function xoaNhanVien(tk) {
  let viTriXoa = -1;
  for (let index = 0; index < arrNhanVien.length; index++) {
    let array = arrNhanVien[index];
    if (array.taiKhoan == tk) {
      viTriXoa = index;
      break;
    }
  }
  arrNhanVien.splice(viTriXoa, 1);
  taoBang(arrNhanVien);
}

function suaNhanVien(tk) {
  for (let index = 0; index < arrNhanVien.length; index++) {
    let nhanVien = arrNhanVien[index];
    if (tk == nhanVien.taiKhoan) {
      document.querySelector("#tknv").value = nhanVien.taiKhoan;
      document.querySelector("#name").value = nhanVien.hoTen;
      document.querySelector("#email").value = nhanVien.email;
      document.querySelector("#password").value = nhanVien.matKhau;
      document.querySelector("#datepicker").value = nhanVien.ngayLam;
      document.querySelector("#luongCB").value = nhanVien.luongCoBan;
      document.querySelector("#chucvu").value = nhanVien.chucVu;
      document.querySelector("#gioLam").value = nhanVien.gioLam;
      break;
    }
  }
}

document.querySelector("#btnCapNhat").onclick = function () {
  let update = new NhanVien();

  update.taiKhoan = document.querySelector("#tknv").value;
  update.hoTen = document.querySelector("#name").value;
  update.email = document.querySelector("#email").value;
  update.matKhau = document.querySelector("#password").value;
  update.ngayLam = document.querySelector("#datepicker").value;
  update.luongCoBan = document.querySelector("#luongCB").value;
  update.chucVu = document.querySelector("#chucvu").value;
  update.gioLam = document.querySelector("#gioLam").value;
  let valid = true;
  // kiem tra rỗng
  valid &= checkDay(update.ngayLam, ".errorDay", "Ngày");
  // kiểm tra độ dài
  valid &= lengthPass(update.matKhau, ".max_mix_pass", "* Mật khẩu", 6, 10);
  // kiem tra định dạng
  valid &=
    checkLength(update.taiKhoan, "#errorTaiKhoan", "Tài khoản", 4, 6) &
    checkName(update.hoTen, ".errorName", "Tên nhân viên") &
    checkEmail(update.email, ".errorEmail", " Email") &
    checkPass(update.matKhau, ".errorPass", "Mật khẩu") &
    kiemTraChuc(update.chucVu, ".errorChucvu", "Chức vụ");
  // kiem tra gia tri
  valid &=
    checkLuong(update.luongCoBan, ".errorLuong", "Lương", 10e6) &
    soGioLam(update.gioLam, ".errorGioLam", "Số giờ làm", 80);
  if (!valid) {
    return;
  }
  for (let i = 0; i < arrNhanVien.length; i++) {
    let arrTam = arrNhanVien[i];
    if (arrTam.taiKhoan === update.taiKhoan) {
      arrTam.taiKhoan = update.taiKhoan;
      arrTam.hoTen = update.hoTen;
      arrTam.email = update.email;
      arrTam.ngayLam = update.ngayLam;
      arrTam.luongCoBan = update.luongCoBan;
      arrTam.chucVu = update.chucVu;
      arrTam.gioLam = update.gioLam;
      taoBang(arrNhanVien);
      break;
    }
  }
};

function luuLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

function layLocalStorage(key) {
  if (localStorage.getItem(key)) {
    return localStorage.getItem(key);
  }
  return undefined;
}

window.onload = function () {
  if (layLocalStorage("luuNhanVien") !== undefined) {
    arrNhanVien = JSON.parse(layLocalStorage("luuNhanVien"));
    taoBang(arrNhanVien);
  }
};

// tìm nhan viên theo tài khoản
// document.querySelector("#btnTimNV").onclick = function () {
//   let timNhanVien = Number(document.querySelector("#searchName").value);
//   let nhanVienSearch = arrNhanVien.filter((value) => {
//     return value.taiKhoan.includes(timNhanVien);
//   });
//   taoBang(nhanVienSearch);
// };

// document.querySelector("#btnTimNV").onclick = function () {
//   let timNhanVien = document.querySelector("#searchName").value;
//   let nhanVienSearch = arrNhanVien.filter((value) => {
//     return value.hoTen.toUpperCase().includes(timNhanVien.toUpperCase());
//   });
//   taoBang(nhanVienSearch);
// };

// Tìm nhân viên theo xếp loại

document.querySelector("#btnTimNV").onclick = function () {
  let timNhanVien = document.querySelector("#searchName").value;
  let nhanVienSearch = arrNhanVien.filter((value) => {
    return value
      .xepLoaiNhanVien()
      .toUpperCase()
      .includes(timNhanVien.toUpperCase());
  });
  taoBang(nhanVienSearch);
};
