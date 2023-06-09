import { AccountType, DetailServiceType, NumberingType, ReportType, RoleType, UserLogType } from "../type/types";

export const DataDetailService: DetailServiceType[] = [
    {
        key: 1,
        soThuTu: '20100001',
        trangThaiHoatDong: 'Đã hoàn thành'
    },
    {
        key: 2,
        soThuTu: '20100002',
        trangThaiHoatDong: 'Đang thực hiện'
    },
    {
        key: 3,
        soThuTu: '20100003',
        trangThaiHoatDong: 'Đã hoàn thành'
    },
    {
        key: 4,
        soThuTu: '20100004',
        trangThaiHoatDong: 'Đã hoàn thành'
    },
    {
        key: 5,
        soThuTu: '20100005',
        trangThaiHoatDong: 'Vắng'
    },
    {
        key: 6,
        soThuTu: '20100006',
        trangThaiHoatDong: 'Đã hoàn thành'
    },
    {
        key: 7,
        soThuTu: '20100007',
        trangThaiHoatDong: 'Đang thực hiện'
    },
    {
        key: 8,
        soThuTu: '20100008',
        trangThaiHoatDong: 'Đã hoàn thành'
    },
    {
        key: 9,
        soThuTu: '20100009',
        trangThaiHoatDong: 'Vắng'
    },
    {
        key: 10,
        soThuTu: '20100010',
        trangThaiHoatDong: 'Đã hoàn thành'
    },
]
export const DataReport: ReportType[] = [
    {
        key:1,
        stt:2001201,
        tenDichVu:'Khám tim mạch',
        thoiGianCap: '07:02 - 07/10/2021',
        tinhTrang:'Đang chờ',
        nguonCap:'Kiosk',
    },
    {
        key:2,
        stt:2001202,
        tenDichVu:'Khám răng hàm mặt',
        thoiGianCap: '07:02 - 07/10/2021',
        tinhTrang:'Đã sử dụng',
        nguonCap:'Kiosk',
    },
    {
        key:3,
        stt:2001203,
        tenDichVu:'Khám sản - Phụ khoa',
        thoiGianCap: '07:02 - 07/10/2021',
        tinhTrang:'Bỏ qua',
        nguonCap:'Hệ thống',
    },
    {
        key:4,
        stt:2001204,
        tenDichVu:'Khám tai mũi họng',
        thoiGianCap: '07:02 - 07/10/2021',
        tinhTrang:'Đang chờ',
        nguonCap:'Kiosk',
    },
    {
        key:5,
        stt:2001205,
        tenDichVu:'Khám tim mạch',
        thoiGianCap: '07:02 - 07/10/2021',
        tinhTrang:'Bỏ qua',
        nguonCap:'Hệ thống',
    },
    {
        key:6,
        stt:2001206,
        tenDichVu:'Khám tổng quát',
        thoiGianCap: '07:02 - 07/10/2021',
        tinhTrang:'Đang chờ',
        nguonCap:'Kiosk',
    },
    {
        key:7,
        stt:2001207,
        tenDichVu:'Khám hô hấp',
        thoiGianCap: '07:02 - 07/10/2021',
        tinhTrang:'Đã sử dụng',
        nguonCap:'Hệ thống',
    },
    {
        key:8,
        stt:2001208,
        tenDichVu:'Khám tim mạch',
        thoiGianCap: '07:02 - 07/10/2021',
        tinhTrang:'Đang chờ',
        nguonCap:'Kiosk',
    },
    {
        key:9,
        stt:2001209,
        tenDichVu:'Khám tim mạch',
        thoiGianCap: '07:02 - 07/10/2021',
        tinhTrang:'Đang chờ',
        nguonCap:'Kiosk',
    },
    {
        key:10,
        stt:2001210,
        tenDichVu:'Khám tim mạch',
        thoiGianCap: '07:02 - 07/10/2021',
        tinhTrang:'Bỏ qua',
        nguonCap:'Kiosk',
    },
    {
        key:11,
        stt:2001211,
        tenDichVu:'Khám tim mạch',
        thoiGianCap: '07:02 - 07/10/2021',
        tinhTrang:'Đang chờ',
        nguonCap:'Kiosk',
    },
]
export const dataAccount: AccountType[] = [
    {
        key:"1",
        tenDangNhap:'trungtin@1',
        hoTen:'trungtin',
        soDienThoai:'038843438',
        email:'tin@gmail.com',
        vaiTro:'Bác sĩ',
        trangThaiHoatDong:'Hoạt động'
    },
    {
        key:"2",
        tenDangNhap:'trungtin@2',
        hoTen:'trungtin',
        soDienThoai:'038843438',
        email:'tin@gmail.com',
        vaiTro:'Lễ tân',
        trangThaiHoatDong:'Ngưng hoạt động'
    },
    {
        key:"3",
        tenDangNhap:'trungtin@3',
        hoTen:'trungtin',
        soDienThoai:'038843438',
        email:'tin@gmail.com',
        vaiTro:'Admin',
        trangThaiHoatDong:'Hoạt động'
    },
    {
        key:"4",
        tenDangNhap:'trungtin@4',
        hoTen:'trungtin',
        soDienThoai:'038843438',
        email:'tin@gmail.com',
        vaiTro:'Kế toán',
        trangThaiHoatDong:'Hoạt động'
    },
    {
        key:"5",
        tenDangNhap:'trungtin@5',
        hoTen:'trungtin',
        soDienThoai:'038843438',
        email:'tin@gmail.com',
        vaiTro:'Bác sĩ',
        trangThaiHoatDong:'Hoạt động'
    },
    {
        key:"6",
        tenDangNhap:'trungtin@6',
        hoTen:'trungtin',
        soDienThoai:'038843438',
        email:'tin@gmail.com',
        vaiTro:'Bác sĩ',
        trangThaiHoatDong:'Hoạt động'
    },
    {
        key:"7",
        tenDangNhap:'trungtin@7',
        hoTen:'trungtin',
        soDienThoai:'038843438',
        email:'tin@gmail.com',
        vaiTro:'Bác sĩ',
        trangThaiHoatDong:'Hoạt động'
    },
    {
        key:"8",
        tenDangNhap:'trungtin@8',
        hoTen:'trungtin',
        soDienThoai:'038843438',
        email:'tin@gmail.com',
        vaiTro:'Bác sĩ',
        trangThaiHoatDong:'Hoạt động'
    },
    {
        key:"10",
        tenDangNhap:'trungtin@9',
        hoTen:'trungtin',
        soDienThoai:'038843438',
        email:'tin@gmail.com',
        vaiTro:'Bác sĩ',
        trangThaiHoatDong:'Hoạt động'
    },
    {
        key:"11",
        tenDangNhap:'trungtin@10',
        hoTen:'trungtin',
        soDienThoai:'038843438',
        email:'tin@gmail.com',
        vaiTro:'Bác sĩ',
        trangThaiHoatDong:'Hoạt động'
    },
    {
        key:"11",
        tenDangNhap:'trungtin@11',
        hoTen:'trungtin',
        soDienThoai:'038843438',
        email:'tin@gmail.com',
        vaiTro:'Bác sĩ',
        trangThaiHoatDong:'Hoạt động'
    },
]
export const dataUserLog: UserLogType[] = [
    {
        key:1,
        tenDangNhap:'trungtin',
        thoiGianTacDong:'01/12/2021 15:12:17',
        ipThucHien:'192.268.0.1',
        thaoTacThucHien:'Cập nhật thông tin dịch vụ DV_01'
    },
    {
        key:2,
        tenDangNhap:'trungtin',
        thoiGianTacDong:'01/12/2021 15:12:17',
        ipThucHien:'192.268.0.1',
        thaoTacThucHien:'Cập nhật thông tin dịch vụ DV_01'
    },
    {
        key:3,
        tenDangNhap:'trungtin',
        thoiGianTacDong:'01/12/2021 15:12:17',
        ipThucHien:'192.268.0.1',
        thaoTacThucHien:'Cập nhật thông tin dịch vụ DV_01'
    },
    {
        key:4,
        tenDangNhap:'trungtin',
        thoiGianTacDong:'01/12/2021 15:12:17',
        ipThucHien:'192.268.0.1',
        thaoTacThucHien:'Cập nhật thông tin dịch vụ DV_01'
    },
    {
        key:5,
        tenDangNhap:'trungtin',
        thoiGianTacDong:'01/12/2021 15:12:17',
        ipThucHien:'192.268.0.1',
        thaoTacThucHien:'Cập nhật thông tin dịch vụ DV_01'
    },
    {
        key:6,
        tenDangNhap:'trungtin',
        thoiGianTacDong:'01/12/2021 15:12:17',
        ipThucHien:'192.268.0.1',
        thaoTacThucHien:'Cập nhật thông tin dịch vụ DV_01'
    },
    {
        key:7,
        tenDangNhap:'trungtin',
        thoiGianTacDong:'01/12/2021 15:12:17',
        ipThucHien:'192.268.0.1',
        thaoTacThucHien:'Cập nhật thông tin dịch vụ DV_01'
    },
    {
        key:8,
        tenDangNhap:'trungtin',
        thoiGianTacDong:'01/12/2021 15:12:17',
        ipThucHien:'192.268.0.1',
        thaoTacThucHien:'Cập nhật thông tin dịch vụ DV_01'
    },
    {
        key:9,
        tenDangNhap:'trungtin',
        thoiGianTacDong:'01/12/2021 15:12:17',
        ipThucHien:'192.268.0.1',
        thaoTacThucHien:'Cập nhật thông tin dịch vụ DV_01'
    },
    {
        key:10,
        tenDangNhap:'trungtin',
        thoiGianTacDong:'01/12/2021 15:12:17',
        ipThucHien:'192.268.0.1',
        thaoTacThucHien:'Cập nhật thông tin dịch vụ DV_01'
    },
]