import { useEffect, useState } from "react";
import { DatePicker, Form, Space } from 'antd';
import dayjs from 'dayjs';
import { Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { Select } from 'antd';
import { Button, Modal } from 'antd';
import mainAxios from "../../apis/main-axios";
import { DataAllClass } from "../../types/response";
import type { Acknowledge, DataTypeAcknowledge, Student } from "../../types/response";

type TableRowSelection<T> = TableProps<T>['rowSelection'];

const Acknowledge = () => {
  const AllClasses: DataAllClass[] = [{
    "classId": 1,
    "className": "1a1",
    SchoolBlock: {
      "schoolBlockId": 1,
      "schoolBlockName": 1
    }
  }, {
    "classId": 2,
    "className": "1a2",
    SchoolBlock: {
      "schoolBlockId": 1,
      "schoolBlockName": 1
    }
  },
  {
    "classId": 3,
    "className": "1a3",
    SchoolBlock: {
      "schoolBlockId": 1,
      "schoolBlockName": 1
    }
  },
  {
    "classId": 4,
    "className": "1a4",
    SchoolBlock: {
      "schoolBlockId": 1,
      "schoolBlockName": 1
    }
  },
  {
    "classId": 5,
    "className": "1a5",
    SchoolBlock: {
      "schoolBlockId": 1,
      "schoolBlockName": 1
    }
  },
  {
    "classId": 6,
    "className": "1a6",
    SchoolBlock: {
      "schoolBlockId": 1,
      "schoolBlockName": 1
    }
  },
  {
    "classId": 7,
    "className": "2a1",
    SchoolBlock: {
      "schoolBlockId": 2,
      "schoolBlockName": 2
    }
  },
  {
    "classId": 8,
    "className": "2a2",
    SchoolBlock: {
      "schoolBlockId": 2,
      "schoolBlockName": 2
    }
  },
  {
    "classId": 9,
    "className": "2a3",
    SchoolBlock: {
      "schoolBlockId": 2,
      "schoolBlockName": 2
    }
  },
  {
    "classId": 10,
    "className": "2a4",
    SchoolBlock: {
      "schoolBlockId": 2,
      "schoolBlockName": 2
    }
  },

  {
    "classId": 11,
    "className": "2a5",
    SchoolBlock: {
      "schoolBlockId": 2,
      "schoolBlockName": 2
    }
  }, {
    "classId": 12,
    "className": "2a6",
    SchoolBlock: {
      "schoolBlockId": 2,
      "schoolBlockName": 2
    }
  },
  {
    "classId": 13,
    "className": "3a1",
    SchoolBlock: {
      "schoolBlockId": 3,
      "schoolBlockName": 3
    }
  }
    ,
  {
    "classId": 14,
    "className": "3a2",
    SchoolBlock: {
      "schoolBlockId": 3,
      "schoolBlockName": 3
    }
  }
    ,
  {
    "classId": 15,
    "className": "3a3",
    SchoolBlock: {
      "schoolBlockId": 3,
      "schoolBlockName": 3
    }
  }
    ,
  {
    "classId": 16,
    "className": "3a4",
    SchoolBlock: {
      "schoolBlockId": 3,
      "schoolBlockName": 3
    }
  }
    ,
  {
    "classId": 17,
    "className": "3a5",
    SchoolBlock: {
      "schoolBlockId": 3,
      "schoolBlockName": 3
    }
  }
    ,
  {
    "classId": 18,
    "className": "3a6",
    SchoolBlock: {
      "schoolBlockId": 3,
      "schoolBlockName": 3
    }
  },
  {
    "classId": 19,
    "className": "4a1",
    SchoolBlock: {
      "schoolBlockId": 4,
      "schoolBlockName": 4
    }
  },
  {
    "classId": 20,
    "className": "4a2",
    SchoolBlock: {
      "schoolBlockId": 4,
      "schoolBlockName": 4
    }
  },
  {
    "classId": 21,
    "className": "4a3",
    SchoolBlock: {
      "schoolBlockId": 4,
      "schoolBlockName": 4
    }
  },
  {
    "classId": 22,
    "className": "4a4",
    SchoolBlock: {
      "schoolBlockId": 4,
      "schoolBlockName": 4
    }
  },
  {
    "classId": 23,
    "className": "4a5",
    SchoolBlock: {
      "schoolBlockId": 4,
      "schoolBlockName": 4
    }
  },
  {
    "classId": 24,
    "className": "4a6",
    SchoolBlock: {
      "schoolBlockId": 4,
      "schoolBlockName": 4
    }
  },
  {
    "classId": 25,
    "className": "5a1",
    SchoolBlock: {
      "schoolBlockId": 5,
      "schoolBlockName": 5
    }
  },
  {
    "classId": 26,
    "className": "5a2",
    SchoolBlock: {
      "schoolBlockId": 5,
      "schoolBlockName": 5
    }
  },
  {
    "classId": 27,
    "className": "5a3",
    SchoolBlock: {
      "schoolBlockId": 5,
      "schoolBlockName": 5
    }
  },
  {
    "classId": 28,
    "className": "5a4",
    SchoolBlock: {
      "schoolBlockId": 5,
      "schoolBlockName": 5
    }
  },
  {
    "classId": 29,
    "className": "5a5",
    SchoolBlock: {
      "schoolBlockId": 5,
      "schoolBlockName": 5
    }
  },
  {
    "classId": 30,
    "className": "5a6",
    SchoolBlock: {
      "schoolBlockId": 5,
      "schoolBlockName": 5
    }
  }
  ];
  const Acknowledge: Acknowledge[] = [{
    id: 1,
    Acknowledge: "Học sinh hăng hái phát xây dựng biểu bài"
  },
  {
    id: 2,
    Acknowledge: "Biết giúp đỡ bạn bè trong học tập"
  },
  {
    id: 3,
    Acknowledge: "Học sinh hay mất trật tự"
  },
  {
    id: 4,
    Acknowledge: "Biết cách đánh vần to,dõng dạc"
  },
  {
    id: 5,
    Acknowledge: "Biết cách làm việc theo nhóm"
  },
  {
    id: 6,
    Acknowledge: "Tích cực tham gia phát biểu xây dựng bài,hăng hái các hoạt động lớp"
  }]
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [student, setStudent] = useState<Student[]>([])
  const [classes, setClasses] = useState<DataAllClass[]>(AllClasses)
  const getClass = localStorage.getItem('idClass');
  const [idClass, setIdClass] = useState(parseInt(getClass!) ?? 1);
  const idYear = localStorage.getItem('idYear');

  const options = classes.map(c => ({
    value: c.classId,
    label: c.className
  }));
  useEffect(() => {

    localStorage.setItem('idClass', idClass.toString())

  }, [idClass])
  //modal
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  //modal
  const getStudents = async () => {
    const s = await mainAxios.get(`/api/v1/student/get-student-year-info-by?bySchoolYearClassId=${idClass}`);
    setStudent(s.data);
  }
  useEffect(() => {
    getStudents();
  }, [student])
  const rowSelection: TableRowSelection<DataTypeAcknowledge> = {
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };
  const acknowledge = Acknowledge.map(a => ({
    value: a.id,
    label: a.Acknowledge
  }));


  const handleChange = (value: number) => {
    setIdClass(value)
  };
  const formatDate = (dateString: string) => {
    const dateObject = new Date(dateString);
    const day = String(dateObject.getDate()).padStart(2, '0');
    const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // January is 0!
    const year = dateObject.getFullYear();
    return `${day}${month}${year}`;
  }
  const columnsAcknowledge: TableColumnsType<DataTypeAcknowledge> = [
    {
      title: 'Stt',
      dataIndex: 'Stt',
      key: 'Stt',
      width: '5%',
      align: "center"
    },
    {
      title: 'Họ tên',
      dataIndex: 'Ho_Ten',
      key: 'Ho_Ten',
      width: '25%',
      align: "center"
    },
    {
      title: 'Ngày sinh',
      dataIndex: 'Ngay_sinh',
      key: 'Ngay_sinh',
      width: '14%',
      align: "center"
    },
    {
      title: 'Nhận xét',
      dataIndex: 'Nhan_Xet',
      width: '35%',
      key: 'Nhan_Xet',
      align: "center"
    },
    {
      title: 'Trạng thái',
      dataIndex: 'Trang_Thai',
      width: '14%',
      key: 'Trang_Thai',
      align: "center"
    }
  ];
  const dataAcknowledge = student.map((data) => ({
    key: data.id,
    Ho_Ten: data.students.lastName + data.students.firstName, // Assuming `s` contains the name of the student
    Ngay_sinh: formatDate(data.students.birthday.substring(0, 10)),
    Stt: data.id,
    Nhan_Xet: <Select mode="tags" style={{ width: '100%' }} placeholder="Nhập nhận xét" options={acknowledge} />,
    Trang_Thai: 0 ? "Đã thông báo" : "chưa thông báo"

  }));

  return (

    <div className="acknowledge ">
      <div style={{ display: "flex", padding: "16px" }}>
        <div style={{ marginRight: "14px" }}>
          <Select style={{ width: "100px", height: "38px" }} options={options} defaultValue={getClass ? options.find(e => e.value == parseInt(getClass))?.value : options[0].value} onChange={handleChange} />
        </div>
        <Space direction="vertical">
          <DatePicker style={{ height: "38px" }} disabledDate={(date) => {
            return date.isBefore(dayjs(new Date(`${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}`)))
          }} />
        </Space>
        <div className="mx-4 border flex items-center rounded-lg justify-center" style={{ width: "260px", height: "38px" }}>
          Tổng số học sinh : {student.length}
        </div>
        <div style={{ width: "100%" }}>
          <Button type="primary" style={{ float: "right", background: "#349634" }}>Thông báo cho PH</Button>
          <Button type="primary" style={{ float: "right", background: "#349634", marginRight: "7px" }} onClick={showModal}>Nhận xét nhanh</Button>
        </div>
      </div>
      <Modal
        open={open}
        title="Nhận xét nhanh"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Huỷ bỏ
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk} style={{ background: "rgb(52, 150, 52" }}>
            Lưu
          </Button>
        ]}
      >
        <div>
          <p>Nhận xét <span style={{ color: "red" }}>*</span></p>
          <Select mode="tags" style={{ width: '100%' }} placeholder="Nhập nhận xét" onChange={handleChange} options={acknowledge} />
        </div>
        <div style={{ marginTop: "15px" }}>
          <p>Nhận xét học sinh:</p>
          <div>
            <span>
              Nguyễn Phúc Khang,
            </span>
            <span>
              Nguyễn Phúc Khang ,
            </span>
            <span>
              Nguyễn Phúc Khang ,
            </span>
          </div>
        </div>
      </Modal>
      <div className="mx-15">
        <Table

          rowSelection={{
            ...rowSelection,
          }}
          columns={columnsAcknowledge}
          dataSource={dataAcknowledge}
          pagination={false}
          bordered
          scroll={{ y: 385 }}
        />
      </div>
      <div className="w-full mt-4">
        <Button type="primary" className="float-right mr-4 bg-green-600 " style={{ background: "rgb(52, 150, 52)" }}>Lưu Lại</Button>
      </div>
    </div >
  )

}
export default Acknowledge;