import React, { useState, useEffect } from 'react';
import * as action from '../redux/actions/actions';
import { connect } from 'react-redux';
import classNames from 'classnames';

//  material-ui core
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

// date time picketr

import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';


// material ui component
import styles from './../assets/jss/material-ui/components/FormSaveCourseStyle';
import { InputLabel } from '@material-ui/core';


const useStyles = makeStyles(styles);

function FormSaveCourse(props) {

    let { history, isAdd, isEdit, editCourse } = props;

    const classes = useStyles();

    const [selectedDate, setSelectedDate] = useState(new Date());

    const [state, setState] = useState(
        {
            maKhoaHoc: "",
            tenKhoaHoc: "",
            moTa: "",
            luotXem: 0,
            danhGia: 1,
            hinhAnh: "",
            maNhom: "GP09",
            ngayTao: selectedDate,
            maDanhMucKhoaHoc: "",
        }
    )

    const [errors, setErrors] = useState({
        maKhoaHoc: "",
        tenKhoaHoc: "",
        moTa: "",
        luotXem: "",
        maDanhMucKhoaHoc: "",
    })

    useEffect(() => {
        if (editCourse !== "" && editCourse.danhMucKhoaHoc !== undefined) {
            // // handle created date
            let date = editCourse.ngayTao.split('/');
            let handledDate = date[1] + '/' + date[0] + '/' + date[2];
            setState({
                maKhoaHoc: editCourse.maKhoaHoc,
                tenKhoaHoc: editCourse.tenKhoaHoc,
                moTa: editCourse.moTa,
                luotXem: editCourse.luotXem,
                hinhAnh: editCourse.hinhAnh.split("/").pop(),
                maNhom: editCourse.maNhom,
                ngayTao: handledDate,
                maDanhMucKhoaHoc: editCourse.danhMucKhoaHoc.maDanhMucKhoahoc
            })
        }
        else {
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

    }, [editCourse]);

    // date time picker
    const handleDateChange = date => {
        setSelectedDate(date);
        setState({
            ...state,
            ngayTao: date
        });
    };

    const handleOnchange = (event) => {

        let { name, value } = event.target;

        // handle image path
        value = value.split("\\").pop();

        setState({
            ...state,
            [name]: value
        })
    };

    const handleErrors = (event) => {
        let { name, value } = event.target;
        let message = (value === "" ? "Please fill out this field !" : "");

        switch (name) {
            case "maKhoaHoc":
                break;
            case "tenKhoaHoc":
                break;
            case "moTa":
                break;
            case "luotXem":
                if (value !== "" && !value.match(/^[0-9]/i)) {
                    message = "View must be number !"
                }
                break;
            case "maDanhMucKhoaHoc":
                break;
            default:
                break;
        }
        setErrors({
            ...errors,
            [name]: message
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // upload image 
        const data = new FormData();
        let imageUpload = document.querySelector('input[type="file"]').files[0];
        data.append('file', imageUpload);
        data.append('tenKhoaHoc', state.tenKhoaHoc)

        if (isAdd) {
            props.CourseAdding(state, data, history);
        }
        if (isEdit) {
            props.CourseEditing(state, data, history);
        }
    };

    const handleClear = (event) => {
        event.preventDefault();

        setErrors({
            maKhoaHoc: "",
            tenKhoaHoc: "",
            moTa: "",
            luotXem: "",
            hinhAnh: "",
            maDanhMucKhoaHoc: "",
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

    const renderCategory = () => {
        let { courseCategory } = props;
        if (courseCategory && courseCategory.length > 1) {
            return courseCategory.map((item, index) => {
                return <MenuItem key={index} value={item.maDanhMuc}>{item.tenDanhMuc}</MenuItem>
            })
        }
    };

    return (
        <div id="formSaveCourse" className="modal animate fadeIn" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                {/* Modal content*/}
                <div className="modal-content">
                    <div className={classes.bodyContent}>
                        <form encType="multipart/form-data" className="edit-course-form" onSubmit={handleSubmit}>
                            <h2 className={classNames({
                                [classes.saveTitle]: true,
                                [classes.addTitle]: isAdd,
                                [classes.edtiTitle]: isEdit
                            })}>{editCourse ? "EDIT YOUR COURSE" : "Add New Course"} </h2>
                            {/* course id */}
                            <FormControl className={classes.formControl}>
                                <TextField type="text"
                                    name="maKhoaHoc"
                                    value={state.maKhoaHoc || ""}
                                    label="Course ID"
                                    disabled={isEdit}
                                    onBlur={handleErrors}
                                    onKeyUp={handleErrors}
                                    onChange={handleOnchange} />
                                {errors.maKhoaHoc !== "" ? (<div className="alert alert-danger">{errors.maKhoaHoc}</div>) : ""}
                            </FormControl>
                            {/* course name */}
                            <FormControl className={classes.formControl}>
                                <TextField
                                    type="text"
                                    name="tenKhoaHoc"
                                    value={state.tenKhoaHoc || ""}
                                    label="Course Name"
                                    onBlur={handleErrors}
                                    onKeyUp={handleErrors}
                                    onChange={handleOnchange} />
                                {errors.tenKhoaHoc !== "" ? (<div className="alert alert-danger">{errors.tenKhoaHoc}</div>) : ""}
                            </FormControl>
                            {/* descriptipon */}
                            <FormControl className={classes.formControl}>
                                <TextField type="text"
                                    name="moTa"
                                    value={state.moTa || ""}
                                    label="Course Description"
                                    onBlur={handleErrors}
                                    onKeyUp={handleErrors}
                                    onChange={handleOnchange} />
                                {errors.moTa !== "" ? (<div className="alert alert-danger">{errors.moTa}</div>) : ""}
                            </FormControl>
                            {/* views */}
                            <FormControl className={classes.formControl}>
                                <TextField
                                    type="text"
                                    name="luotXem"
                                    value={state.luotXem || ""}
                                    label="Views"
                                    onBlur={handleErrors}
                                    onKeyUp={handleErrors}
                                    onChange={handleOnchange} />
                                {errors.luotXem !== "" ? (<div className="alert alert-danger">{errors.luotXem}</div>) : ""}
                            </FormControl>
                            {/* image */}
                            <FormControl className={classNames({
                                [classes.formControl]: true,
                                [classes.imgForm]: true
                            })} >
                                <TextField
                                    type="file"
                                    className={classes.imgField}
                                    name="hinhAnh"
                                    id="img-file"
                                    multiple
                                    required={isAdd}
                                    accept="image/*"
                                    onChange={handleOnchange} />
                                <label htmlFor="img-file" onClick={() => handleErrors}>
                                    <Button component="span" className={classNames({
                                        [classes.uploadBtn]: true,
                                        [classes.addBtn]: isAdd,
                                        [classes.editBtn]: isEdit
                                    })}>
                                        Image
                                    </Button>
                                    <span className={classes.imgName}>{state.hinhAnh}</span>
                                </label>
                                {state.hinhAnh === "Your Upload Image" ? (<div className="alert alert-warning">Choose an image !</div>) : ""}
                            </FormControl>
                            {/* created date */}
                            <FormControl className={classes.formControl}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="dd/MM/yyyy"
                                        margin="normal"
                                        label="Created Date"
                                        value={state.ngayTao}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                            </FormControl>
                            {/* category */}
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="select-category">Category</InputLabel>
                                <Select
                                    labelid="demo-simple-select-label"
                                    id="select-category"
                                    onBlur={handleErrors}
                                    onKeyUp={handleErrors}
                                    name="maDanhMucKhoaHoc"
                                    value={state.maDanhMucKhoaHoc || ""}
                                    onChange={handleOnchange}
                                >
                                    {renderCategory()}
                                </Select>
                                {errors.maDanhMucKhoaHoc !== "" ? (<div className="alert alert-danger">{errors.maDanhMucKhoaHoc}</div>) : ""}
                            </FormControl>
                            {/* submit button */}
                            <FormControl className={classes.formControl}>
                                <Button type="submit" className={classNames({
                                    [classes.submitBtn]: true,
                                    [classes.addBtn]: isAdd,
                                    [classes.editBtn]: isEdit
                                })}>Submit</Button>
                                <Button onClick={handleClear} data-dismiss="modal">CLose</Button>
                            </FormControl>
                        </form>
                    </div>
                </div >
            </div >
        </div >
    )
}

const mapDispatchToProps = dispatch => {
    return {
        CourseAdding: (course, fileUpload, history) => {
            dispatch(action.actAddCourse(course, fileUpload, history))
        },
        CourseEditing: (course, fileUpload, history) => {
            dispatch(action.actEditCourse(course, fileUpload, history))
        }
    }
}

const mapStateToProps = state => {
    return {
        editCourse: state.courseReducer.editCourse,
        isAdd: state.courseReducer.isAdd,
        isEdit: state.courseReducer.isEdit
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormSaveCourse);