import * as actionType from './../constants/actionType';
import { callAPI } from './../../utils/CallAPI';
import * as toastify from '../../components/Custom/toastify';


//  *** User Module ***

export const actUserSignUp = (user, history) => {
    return () => {
        let data = { ...user, maNhom: "GP09" }
        callAPI("QuanLyNguoiDung/DangKy", "POST", data, null)
            .then(res => {
                toastify.SuccessNotify("Sign Up Successfully ! Login Now ( ͡♥ ͜ʖ ͡♥)");
                localStorage.setItem("user", JSON.stringify(res.data));
                setTimeout(() => {
                    history.push('/sign-in')
                }, 2000)
            })
            .catch(err => {
                console.log(err.response.data);
            })
    }
}

export const actUserLogin = (user, history) => {
    return () => {
        callAPI("QuanLyNguoiDung/DangNhap", "POST", user, null)
            .then(res => {
                // user sign in successfully.
                localStorage.setItem("userLogin", JSON.stringify(res.data));
                toastify.SuccessNotify("Signin Successfull !!!");

                // if user is GV => access to dashboard permitted and direct to dashboard
                if (res.data.maLoaiNguoiDung === "GV") {
                    localStorage.setItem("adminLogin", JSON.stringify(res.data));
                    setTimeout(() => {
                        history.push('/admin/dashboard')
                    }, 1000)
                }
                // if user is HV => access to dashboard denied and direct to homepage
                if (localStorage.getItem("adminLogin") === null) {
                    setTimeout(() => {
                        history.push('/')
                    }, 1000)
                }
            })
            .catch(err => {
                toastify.ErrNotify(err.response.data);
            })
    }
}

export const actGetCourseList = () => {
    return (dispatch) => {
        // Axios({
        //     method: "GET",
        //     url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP09"
        // })

        callAPI("QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP09", "GET", null, null)
            .then(res => {
                let categoryList = res.data.reduce((acc, course) => {
                    let { danhMucKhoaHoc } = course;
                    return { ...acc, [danhMucKhoaHoc.maDanhMucKhoahoc]: [...(acc[danhMucKhoaHoc.maDanhMucKhoahoc] || []), course] };
                }, {});
                dispatch({
                    type: actionType.GET_COURSE_LIST,
                    courseCategoryList: categoryList,
                    courseList: res.data
                })
            })
            .catch(err => {
                console.log(err.response);
            })
    }
}

export const actGetCourseCategory = () => {
    return dispatch => {
        callAPI("QuanLyKhoaHoc/LayDanhMucKhoaHoc", "GET", null, null)
            .then(res => {
                dispatch({
                    type: actionType.GET_COURSE_CATEGORY,
                    courseCategory: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const actGetCourseDetail = (courseID) => {
    return dispatch => {
        // Axios({
        //     method: "GET",
        //     url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${courseID}`
        // })
        callAPI(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${courseID}`, "GET", null, null)
            .then(res => {
                dispatch({
                    type: actionType.GET_COURSE_DETAIL,
                    course: res.data
                })
            })
            .catch(err => {
                console.log(err.response.data);
            })
    }
}

export const actGetUserInfo = () => {
    return dispatch => {
        const user = JSON.parse(localStorage.getItem("userLogin"))
        let data = { taiKhoan: user.taiKhoan, matKhau: user.matKhau }
        let headers = {
            Authorization: `Bearer ${user.accessToken}`
        }
        callAPI("QuanLyNguoiDung/ThongTinTaiKhoan", "POST", data, headers)
            .then(res => {
                let userInfo = res.data;
                dispatch({
                    type: actionType.GET_USER_INFO,
                    userInfo: userInfo
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}


export const actFindingCourse = (keyword) => {
    return (dispatch) => {
        dispatch({
            type: actionType.FIND_COURSE,
            keyword: keyword
        })
    }
}

export const actRegisterCourse = (course) => {
    return () => {
        const user = JSON.parse(localStorage.getItem("userLogin"));
        let data = { maKhoaHoc: course.maKhoaHoc, taiKhoan: user.taiKhoan }
        let headers = {
            Authorization: `Bearer ${user.accessToken}`
        }
        callAPI("QuanLyKhoaHoc/DangKyKhoaHoc", "POST", data, headers)
            .then(res => {
                setTimeout(() => {
                    localStorage.setItem(`${course.maKhoaHoc}`, JSON.stringify(course));
                }, 1000)
            })
            .catch(err => {
                console.log(err.response);
            })
    }
}

export const actDeregisterCourse = (courseID) => {
    return () => {
        const user = JSON.parse(localStorage.getItem("userLogin"));
        let data = { maKhoaHoc: courseID, taiKhoan: user.taiKhoan };
        let headers = {
            Authorization: `Bearer ${user.accessToken}`
        };
        callAPI("QuanLyKhoaHoc/HuyGhiDanh", "POST", data, headers)
            .then(res => {
                console.log(res);
                setTimeout(() => {
                    localStorage.removeItem(`${courseID}`);
                }, 1000)
            })
            .catch(err => {
                console.log(err.response)
            })
    }
}

// *** Admin module ***

// ** Courses Tasks**
export const actDeleteCourse = (courseID, history) => {
    return () => {
        const admin = JSON.parse(localStorage.getItem("adminLogin"));
        let headers = { Authorization: `Bearer ${admin.accessToken}` };
        callAPI(`QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${courseID}`, "DELETE", null, headers)
            .then(res => {
                console.log(res);
                toastify.WariningNotify("Deleted A Course !!!")
                setTimeout(() => {
                    history.go()
                }, 500);
            })
            .catch(err => {
                toastify.ErrNotify(err.response.data)
            })
    }
}

export const actAddCourse = (course, uploadFile, history) => {
    return () => {
        const admin = JSON.parse(localStorage.getItem("adminLogin"));
        let formUpload = new FormData();
        formUpload = uploadFile;
        let data = { ...course, taiKhoanNguoiTao: admin.taiKhoan };
        let headers = { Authorization: `Bearer ${admin.accessToken}` };
        callAPI("QuanLyKhoaHoc/ThemKhoaHoc", "POST", data, headers)
            .then(res => {
                console.log(res);
                toastify.SuccessNotify("Add Successfully <3");
                callAPI("QuanLyKhoaHoc/UploadHinhAnhKhoaHoc", "POST", formUpload, headers)
                    .then(res => {
                        console.log(res);
                        setTimeout(() => {
                            history.go();
                        }, 500)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                toastify.ErrNotify(err.response.data);
            })
    }
}

// check modal using for
export const actSaveCourse = (editCourse) => {
    return dispatch => {
        let isAdd = false;
        let isEdit = false;
        if (editCourse === "") {
            isAdd = true;
        }
        else {
            isEdit = true;
        }
        dispatch({
            type: actionType.SAVE_COURSE,
            editCourse,
            isAdd,
            isEdit
        })
    }
}

export const actEditCourse = (course, uploadFile, history) => {
    return () => {
        const admin = JSON.parse(localStorage.getItem("adminLogin"));

        // handle date
        let { ngayTao } = course;
        if (typeof (ngayTao) !== "string") {
            let date = ngayTao.toLocaleDateString().split('/');
            ngayTao = date[1] + '/' + date[0] + '/' + date[2];
        }
        else {
            let date = ngayTao.split('/');
            ngayTao = date[1] + '/' + date[0] + '/' + date[2]
        }

        let data = { ...course, taiKhoanNguoiTao: admin.taiKhoan, ngayTao: ngayTao };
        let headers = {
            Authorization: `Bearer ${admin.accessToken}`
        }

        callAPI('QuanLyKhoaHoc/CapNhatKhoaHoc', 'PUT', data, headers)
            .then(() => {

                toastify.SuccessNotify("Edit Successfully <3")
                setTimeout(() => {
                    history.go();
                }, 1000);
                if (uploadFile.get('file') !== undefined) {
                    let formUpload = new FormData();
                    formUpload = uploadFile;
                    callAPI('QuanLyKhoaHoc/UploadHinhAnhKhoaHoc', 'POST', formUpload, headers)
                        .then(() => {
                            console.log("upload file success")
                        })
                }
                else {
                    console.log('image has no change ');
                }

            })
            .catch(err => {
                toastify.ErrNotify(err.response.data);
            })
    }
}

//  ** Users Task
export const actGetUserList = () => {
    return dispatch => {
        callAPI('QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP09', 'GET', null, null)
            .then(res => {
                dispatch({
                    type: actionType.GET_USER_LIST,
                    userList: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const actDeleteUser = (user, history) => {
    return () => {
        const admin = JSON.parse(localStorage.getItem('adminLogin'));
        let taiKhoan = user.taiKhoan;
        let headers = {
            Authorization: `Bearer ${admin.accessToken}`
        }
        callAPI(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`, "DELETE", null, headers)
            .then(res => {
                toastify.WariningNotify(res.data);
                setTimeout(() => {
                    history.go();
                }, 500)
            })
            .catch(err => {
                toastify.ErrNotify(err.response.data)
            })
    }
}

// check update modal
export const actSaveUser = (saveUser) => {
    return dispatch => {
        let isAdd = false;
        let isEdit = false;
        if (saveUser === "") isAdd = true;
        else isEdit = true;
        dispatch({
            type: actionType.SAVE_USER,
            saveUser,
            isAdd,
            isEdit
        })
    }
}

export const actAddUser = (user, history) => {
    return () => {
        const admin = JSON.parse(localStorage.getItem('adminLogin'));
        let data = { ...user, maNhom: "GP09" };
        let headers = { Authorization: `Bearer ${admin.accessToken}` }
        callAPI('QuanLyNguoiDung/ThemNguoiDung', "POST", data, headers)
            .then(() => {
                toastify.SuccessNotify('Add Successfully !!!');
                setTimeout(() => {
                    history.go();
                }, 500)
            })
            .catch(err => {
                toastify.ErrNotify(err.response.data)
            })
    }
}

export const actEditUser = (userEdited, history) => {
    return () => {
        const user = JSON.parse(localStorage.getItem("userLogin"));
        let data = { ...userEdited, maNhom: "GP09" };
        let headers = { Authorization: `Bearer ${user.accessToken}` }
        callAPI("QuanLyNguoiDung/CapNhatThongTinNguoiDung", "PUT", data, headers)
            .then(() => {
                toastify.SuccessNotify('Edit Successfully !!!');
                setTimeout(() => {
                    history.go();
                }, 1000)
            })
            .catch((err) => {
                toastify.ErrNotify(err.response.data)
            })
    }
}
