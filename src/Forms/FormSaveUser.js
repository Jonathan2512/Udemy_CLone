import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as action from '../redux/actions/actions';
import classNames from 'classnames';

//  material-ui core
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import { InputLabel, MenuItem } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';

// icon
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import styles from './../assets/jss/material-ui/components/FormSaveCourseStyle';



const useStyles = makeStyles(styles);

function FormSaveUser(props) {

    let { profile, history, isAdd, isEdit } = props;

    const classes = useStyles();

    const [state, setState] = useState({
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        email: "",
        soDT: "",
        maLoaiNguoiDung: "",
    })

    const [errors, setErrors] = useState({
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        email: "",
        soDT: "",
        maLoaiNguoiDung: "",
    })

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    };

    useEffect(() => {
        if (profile !== "" && profile !== undefined) {
            setState({
                taiKhoan: profile.taiKhoan,
                matKhau: profile.matKhau,
                hoTen: profile.hoTen,
                email: profile.email,
                soDT: profile.soDT || profile.soDt,
                maLoaiNguoiDung: profile.maLoaiNguoiDung,
            })
        }
        else {
            setState({
                taiKhoan: "",
                matKhau: "",
                hoTen: "",
                email: "",
                soDT: "",
                maLoaiNguoiDung: "",
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

    const handleErrors = (event) => {
        let { name, value } = event.target;
        let message = (value === "" ? "Please fill out this field !" : "");

        switch (name) {
            case "taiKhoan":
                if (value !== "" && !value.match(/^([a-z0-9_-]{3,16})$/i)) {
                    message = "Usename can't contain special character !"
                }
                break;
            case "hoTen":
                if (value !== "" && value.length < 4) {
                    message = "Fullname is at least 4 character !"
                }
                break;
            case "email":
                if (value !== "" && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                    message = "Email is informat !"
                }
                break;
            case "soDT":
                break;
            case "matKhau":
                break;
            default:
                break;
        }
        setErrors({
            ...errors,
            [name]: message
        })
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (isEdit) {
            props.editUserInfo(state, history);
        }
        if (isAdd) {
            props.addNewUser(state, history)
        }
    }

    const handleClear = (event) => {
        event.preventDefault();

        setErrors({
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            email: "",
            soDT: "",
            maLoaiNguoiDung: "",
        })

        if (isAdd) {
            setState({
                maKhoaHoc: "",
                tenKhoaHoc: "",
                moTa: "",
                luotXem: 0,
                danhGia: 0,
                hinhAnh: "Your Upload Image",
                maNhom: "GP09",
                ngayTao: new Date(),
                maDanhMucKhoaHoc: "",
            })
        }
    }

    return (
        <div id="formSaveUser" className="modal animate fadeIn" role="dialog">
            <div className="modal-dialog modal-dialog-centered">
                {/* Modal content*/}
                <div className="modal-content">
                    <div className={classes.bodyContent}>
                        <div className="signup-form">
                            <form method="post" onSubmit={handleOnSubmit}>
                                <h2 className={classNames({
                                    [classes.saveTitle]: true,
                                    [classes.addUserTitle]: isAdd,
                                    [classes.edtiTitle]: isEdit
                                })}>{profile !== "" ? "EDIT PROFILE" : "ADD NEW USER"} </h2>
                                {/* account */}
                                <FormControl className={classes.formControl}>
                                    <TextField type="text"
                                        name="taiKhoan"
                                        value={state.taiKhoan || ""}
                                        label="User Name"
                                        disabled={isEdit}
                                        onBlur={handleErrors}
                                        onKeyUp={handleErrors}
                                        onChange={handleOnChange}
                                    />
                                    {errors.taiKhoan !== "" ? (<div className="alert alert-danger">{errors.taiKhoan}</div>) : ""}
                                </FormControl>
                                {/* email */}
                                <FormControl className={classes.formControl}>
                                    <TextField type="text"
                                        name="email"
                                        value={state.email || ""}
                                        label="Email"
                                        onBlur={handleErrors}
                                        onKeyUp={handleErrors}
                                        onChange={handleOnChange}
                                    />
                                    {errors.email !== "" ? (<div className="alert alert-danger">{errors.email}</div>) : ""}
                                </FormControl>
                                {/* fullname */}
                                <FormControl className={classes.formControl}>
                                    <TextField type="text"
                                        name="hoTen"
                                        value={state.hoTen || ""}
                                        label="Full Name"
                                        onBlur={handleErrors}
                                        onKeyUp={handleErrors}
                                        onChange={handleOnChange}
                                    />
                                    {errors.hoTen !== "" ? (<div className="alert alert-danger">{errors.hoTen}</div>) : ""}
                                </FormControl>
                                {/* Phone Number */}
                                <FormControl className={classes.formControl}>
                                    <TextField type="text"
                                        name="soDT"
                                        value={state.soDT || ""}
                                        label="Phone Number"
                                        onBlur={handleErrors}
                                        onKeyUp={handleErrors}
                                        onChange={handleOnChange}
                                    />
                                    {errors.soDT !== "" ? (<div className="alert alert-danger">{errors.soDT}</div>) : ""}
                                </FormControl>
                                {/* password */}
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                    <Input
                                        name="matKhau"
                                        id="standard-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={state.matKhau || ""}
                                        onChange={handleOnChange}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleShowPassword}
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                    {errors.matKhau !== "" ? (<div className="alert alert-danger">{errors.matKhau}</div>) : ""}
                                </FormControl>
                                {/* category */}
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="select-category">Category</InputLabel>
                                    <Select
                                        labelid="demo-simple-select-label"
                                        name="maLoaiNguoiDung"
                                        value={state.maLoaiNguoiDung || ""}
                                        id="select-category"
                                        onBlur={handleErrors}
                                        onChange={handleOnChange}
                                    >
                                        <MenuItem value="HV">Học Viên</MenuItem>
                                        <MenuItem value="GV">Giáo Vụ</MenuItem>
                                    </Select>
                                    {errors.maLoaiNguoiDung !== "" ? (<div className="alert alert-danger">{errors.maLoaiNguoiDung}</div>) : ""}
                                </FormControl>
                                {/* submit */}
                                <FormControl className={classes.formControl}>
                                    <Button type="submit" className={classNames({
                                        [classes.submitBtn]: true,
                                        [classes.addUserBtn]: isAdd,
                                        [classes.editBtn]: isEdit
                                    })}>Submit</Button>
                                    <Button onClick={handleClear} data-dismiss="modal">CLose</Button>
                                </FormControl>
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
        editUserInfo: (savedUser, history) => {
            dispatch(action.actEditUser(savedUser, history))
        },
        addNewUser: (savedUser, history) => {
            dispatch(action.actAddUser(savedUser, history))
        }
    }
}

const mapStateToProps = state => {
    return {
        profile: state.userReducer.saveUser,
        isAdd: state.userReducer.isAdd,
        isEdit: state.userReducer.isEdit,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormSaveUser);