import React, { useState } from 'react';
import * as action from './../redux/actions/actions';
import { connect } from 'react-redux';


export default function FormEditCourse(props) {

    const [state, setState] = useState(
        {
            maKhoaHoc: "",
            tenKhoaHoc: "",
            moTa: "",
            luotXem: 0,
            danhGia: 0,
            hinhAnh: "",
            maNhom: "GP09",
            ngayTao: "",
            maDanhMucKhoaHoc: "",
        }
    )
    const handleOnchange = () => {

    }

    const handleSubmit = () => {

    }

    return (
        <div id="formEditUser" className="modal animated fadeIn" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                {/* Modal content*/}
                <div className="modal-content">
                    <div className="modal-body">
                        <form className="edit-course-form" action="/examples/actions/confirmation.php" method="post" onSubmit={handleSubmit}>
                            <h2 className="form-title">Edit Your Profile</h2>
                            <div className="form-group">
                                <input type="text"
                                    className="form-input input-lg"
                                    name="maKhoaHoc"
                                    placeholder="Course ID"
                                    required="required"
                                    onChange={handleOnchange} />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-input input-lg"
                                    name="tenKhoaHoc"
                                    placeholder="Course Name"
                                    required="required"
                                    onChange={handleOnchange} />
                            </div>
                            <div className="form-group">
                                <input type="text"
                                    className="form-input input-lg"
                                    name="moTa"
                                    placeholder="Course Description"
                                    required="required"
                                    onChange={handleOnchange} />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-input input-lg"
                                    name="luotXem"
                                    placeholder="Views"
                                    required="required"
                                    onChange={handleOnchange} />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-input input-lg"
                                    name="danhGia"
                                    placeholder="Preview"
                                    required="required"
                                    onChange={handleOnchange} />
                            </div>
                            <div className="form-group">
                                <input
                                    type="file"
                                    className="form-input input-lg"
                                    name="hinhAnh"
                                    placeholder="Image"
                                    required="required"
                                    onChange={handleOnchange} />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-input input-lg"
                                    name="ngayTao"
                                    placeholder="Date : "
                                    required="required"
                                    onChange={handleOnchange} />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-input input-lg"
                                    name="maDanhMucKhoaHoc"
                                    placeholder="Category"
                                    required="required"
                                    onChange={handleOnchange} />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn form-submit btn-lg btn-block signup-btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
