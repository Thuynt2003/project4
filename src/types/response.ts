export interface IResponse<T> {
  data: T;
  message: string;
  status: number;
  total?: number;
  meta?: {
    nextToken: string;
  };
}
export interface TeacherData {
  id: number;
  officerNumber: string;
  joiningDate: string;
  sortName: string;
  active: boolean,
  user: {
    id: number,
    username: string,
    password: string,
    status: null,
    roles: [
      {
        id: number,
        name: string
      }
    ],
    userDetail: {
      id: number,
      firstname: string,
      lastname: string,
      address: string,
      phone: string,
      email: string,
      gender: string,
      birthday: string,
      citizen_id: string,
      nation: null,
      avatar: string
    }
  }
}

export interface DataTypeAcknowledge {
  key: number;
  Stt: number;
  Ho_Ten: string;
  Ngay_sinh: string;
  Nhan_Xet: JSX.Element;
  Trang_Thai: string
}
export interface DataAllClass {
  classId: number,
  className: string,
  SchoolBlock: {
    schoolBlockId: number,
    schoolBlockName: number
  }
}
export interface Student {
  id: number,
  students: {
    id: number,
    gender: boolean,
    firstName: string,
    lastName: string,
    birthday: string,
    address: string,
    studentCode: string,
    studentStatuses: [
      {
        id: number,
        description: string,
        status: {
          id: number,
          name: string,
          code: string,
        }
      }
    ]
  }
}
export interface Acknowledge {
  id: number,
  Acknowledge: string
}
export interface DataTypeEvaluate {
  key: number;
  Stt: number;
  Ho_Ten: string;
  Ngay_sinh: string;
  Nhan_Xet: JSX.Element;
  Toan: number,
  Tieng_viet: number;
  Tieng_anh: number;
  Dao_duc: number;
  Tu_nhien_va_xa_hoi: number;
  Lich_su: number;
  Dia_ly: number;
  Khoa_hoc: number;
  Tin_hoc_va_cong_nghe: number;
  The_duc: number;
  Mi_thuat: number;
  Am_nhac: number;
  Trang_Thai: string;
  Hanh_kiem: string;
  Tong: number;
}
export interface DataTypeAttendence{
  key: number;
  Stt: number;
  Ho_Ten: string;
  Ngay_sinh: string;
  Co_Mat: JSX.Element;
  Nghi_Co_Phep: JSX.Element;
  Nghi_Khong_Phep: JSX.Element;
  Trang_Thai: number
}
export interface TeachingAssignments{
  Stt: number;
  Giao_Vien: string;
  Mon_Day:string;
  Phan_Cong_Giang_dạy: JSX.Element;
  Chu_Nhiem: JSX.Element;
}
export interface ListTeachingAssignments{
  Stt: number; 
  Giao_Vien: string;
  Phan_Cong_Giang_dạy:number;
  Chu_Nhiem: number;
}
