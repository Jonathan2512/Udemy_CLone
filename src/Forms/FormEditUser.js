import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as action from './../redux/actions/actions';



function FormEditUser(props) {

    let { profile } = props;

    const [state, setState] = useState({
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        email: "",
        soDT: "",
        maNhom: "",
        maLoaiNguoiDung: "",
        isEdit: false
    })


    useEffect(() => {
        if (profile !== "") {
            setState({
                taiKhoan: profile.taiKhoan,
                matKhau: profile.matKhau,
                hoTen: profile.hoTen,
                email: profile.email,
                soDT: profile.soDT,
                maNhom: profile.maNhom,
                maLoaiNguoiDung: profile.maLoaiNguoiDung,
                isEdit: true
            })
        }
    }, [profile]);

    const handleOnChange = (event) => {
        let { name, value } = event.target;
        setState({
            ...state,
            [name]: value
        });
    }
    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.editUserInfo(state);
    }

    return (
        <div id="formSaveUser" className="modal animate fadeIn" role="dialog">
            <div className="modal-dialog">
                {/* Modal content*/}
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="signup-form">
                            <form action="/examples/actions/confirmation.php" method="post" onSubmit={handleOnSubmit}>
                                <h2>Edit Your userInfo</h2>
                                {state !== "" ? <Fragment>
                                    <div className="form-group">
                                        <label > Username :</label>
                                        <input type="text"
                                            disabled
                                            className="form-control input-lg"
                                            name="taiKhoan"
                                            placeholder="Username"
                                            required="required"
                                            onChange={handleOnChange}
                                            value={state.taiKhoan || ""}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label> Email : </label>
                                        <input
                                            type="email"
                                            className="form-control input-lg"
                                            name="email"
                                            placeholder="Email Address"
                                            required="required"
                                            onChange={handleOnChange}
                                            value={state.email || ""}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label> FullName : </label>
                                        <input type="text"
                                            className="form-control input-lg"
                                            name="hoTen"
                                            placeholder="Full Name"
                                            required="required"
                                            onChange={handleOnChange}
                                            value={state.hoTen || ""} />
                                    </div>
                                    <div className="form-group">
                                        <label> Phone Number</label>
                                        <input
                                            type="text"
                                            className="form-control input-lg"
                                            name="soDT"
                                            placeholder="Phone Number"
                                            required="required"
                                            onChange={handleOnChange}
                                            value={state.soDT || ""} />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input
                                            type="text"
                                            className="form-control input-lg"
                                            name="matKhau"
                                            placeholder="Password"
                                            required="required"
                                            onChange={handleOnChange}
                                            value={state.matKhau || ""} />
                                    </div>
                                </Fragment> : ""}
                                <div className="form-group">
                                    <button type="submit" className="btn btn--gradient btn-lg btn-block signup-btn">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        editUserInfo: (userEdited) => {
            dispatch(action.actEditUserInfo(userEdited))
        }
    }
}

const mapStateToProps = state => {
    return {
        profile: state.userReducer.profile
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormEditUser);