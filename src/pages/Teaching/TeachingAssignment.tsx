import React, { useEffect, useState } from "react";
import { DataAllClass, TeacherData } from "../../types/response";
import mainAxios from "../../apis/main-axios";
import { Button, Select, Table, TableColumnsType } from "antd";
import { TeachingAssignments } from "../../types/response";
import Link from "antd/es/typography/Link";
import { NavLink } from "react-router-dom";
const TeachingAssignment = () => {
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
    const [teachers, setTeachers] = useState<TeacherData[]>([]);
    const [classe, setClasse] = useState<DataAllClass[]>(AllClasses);


    const fetTeacher = async () => {
        mainAxios.get('/api/v1/teacher')
            .then(response => {
                // Update state with fetched data
                setTeachers(response.data);
            })
            .catch(error => {
                // Handle error
                console.error('Error fetching teachers:', error);
            });

    }
    useEffect(() => {
        // Fetch teacher
        fetTeacher();
        console.log(teachers)
    }, []);
    const classes = classe.map(c => ({
        value: c.classId,
        label: c.className
    }));
    const columnTeachingAssignment: TableColumnsType<TeachingAssignments> = [
        {
            title: 'Stt',
            dataIndex: 'Stt',
            key: 'Stt',
            width: '5%',
            align: "center"
        },
        {
            title: 'Giáo Viên',
            dataIndex: 'Giao_Vien',
            key: 'Giao_Vien',
            width: '13%',
            align: "center"
        },
        {
            title: 'Chủ nhiệm',
            dataIndex: 'Chu_Nhiem',
            width: '10%',
            key: 'Chu_Nhiem',
            align: "center"
        },

        {
            title: 'Phân Công Giảng Dạy',
            dataIndex: 'Phan_Cong_Giang_dạy',
            key: 'Phan_Cong_Giang_dạy',
            width: '10%',
            align: "center"
        }
    ];
    const dataTeachingAssignment = teachers.map((data) => ({
        key: data.id,
        Stt: data.id,
        Giao_Vien: data.user.userDetail.lastname + data.user.userDetail.firstname,
        Phan_Cong_Giang_dạy: <Select mode="tags" style={{ width: '100%' }} placeholder="chọn lớp" options={classes} />,
        Chu_Nhiem: <Select mode="tags" style={{ width: '100%' }} placeholder="chọn lớp" options={classes} />
    }));
    return (
        <>
            <div style={{ width: "100%" }}>
                <Button type="primary" style={{ float: "right", background: "#349634" }} className="mb-4 mt-4 mr-3 ">Lưu Lại</Button>
                <NavLink to="" style={{ float: "right", background: "#349634" }} className="mb-4 mt-4 mr-2 h-8 text-center text-white flex justify-center items-center pr-2 pl-2 rounded-lg ">Danh Sách phân công</NavLink>

            </div>
            <div className="mx-15">

                <Table
                    columns={columnTeachingAssignment}
                    dataSource={dataTeachingAssignment}
                    pagination={false}
                    bordered
                    scroll={{ y: 370 }}
                />
            </div>
        </>

    )
}
export default TeachingAssignment