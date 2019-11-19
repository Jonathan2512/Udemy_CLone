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
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

// date time picketr

import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';


// material ui component
import styles from './../assets/jss/material-ui/components/FormSaveCourseStyle';


const useStyles = makeStyles(styles);

function FormSaveCourse(props) {

    let { history, isAdd, isEdit, editCourse } = props;

    const classes = useStyles();

    const [selectedDate, setSelectedDate] = useState(new Date('2019-11-19T21:11:54'));

    const [state, setState] = useState(
        {
            maKhoaHoc: "",
            tenKhoaHoc: "",
            moTa: "",
            luotXem: 0,
            danhGia: 0,
            hinhAnh: "Your Upload Image",
            maNhom: "GP09",
            ngayTao: selectedDate.toString(),
            maDanhMucKhoaHoc: "",
        }
    )

    useEffect(() => {
        if (editCourse !== "") {
            if (editCourse.danhMucKhoaHoc !== undefined) {
                setState({
                    maKhoaHoc: editCourse.maKhoaHoc,
                    tenKhoaHoc: editCourse.tenKhoaHoc,
                    moTa: editCourse.moTa,
                    luotXem: editCourse.luotXem,
                    danhGia: 1,
                    hinhAnh: editCourse.hinhAnh,
                    maNhom: editCourse.maNhom,
                    ngayTao: editCourse.ngayTao,
                    maDanhMucKhoaHoc: editCourse.danhMucKhoaHoc.maDanhMucKhoaHoc
                })
            }
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
                ngayTao: new Date('2019-11-19T21:11:54'),
                maDanhMucKhoaHoc: "",
            })
        }
    }, [props])

    // date time picker
    const handleDateChange = date => {
        setSelectedDate(date);
        setState({
            ...state,
            ngayTao: date.toString()
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
    }

    const handleSubmit = (event) => {

        event.preventDefault();
        // upload image 
        const data = new FormData();

        let imageUpload = document.querySelector('input[type="file"]').files[0];
        data.append('file', imageUpload);
        data.append('tenKhoaHoc', state.tenKhoaHoc)

        props.addCourse(state, data, history);
    }

    const renderCategory = () => {
        let { courseCategory } = props;
        if (courseCategory && courseCategory.length > 1) {
            return courseCategory.map((item, index) => {
                return <MenuItem key={index} value={item.maDanhMuc}>{item.tenDanhMuc}</MenuItem>
            })
        }
    }

    return (
        <div id="formSaveCourse" encType="multipart/form-data" className="modal animate fadeIn" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                {/* Modal content*/}
                <div className="modal-content">
                    <div className={classes.bodyContent}>
                        <form className="edit-course-form" onSubmit={handleSubmit}>
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
                                    required
                                    onChange={handleOnchange} />
                            </FormControl>
                            {/* course name */}
                            <FormControl className={classes.formControl}>
                                <TextField
                                    type="text"
                                    name="tenKhoaHoc"
                                    value={state.tenKhoaHoc || ""}
                                    label="Course Name"
                                    required
                                    onChange={handleOnchange} />
                            </FormControl>
                            {/* descriptipon */}
                            <FormControl className={classes.formControl}>
                                <TextField type="text"
                                    name="moTa"
                                    value={state.moTa || ""}
                                    label="Course Description"
                                    required
                                    onChange={handleOnchange} />
                            </FormControl>
                            {/* views */}
                            <FormControl className={classes.formControl}>
                                <TextField
                                    type="text"
                                    name="luotXem"
                                    value={state.luotXem || ""}
                                    label="Views"
                                    required
                                    onChange={handleOnchange} />
                            </FormControl>
                            {/* preview */}
                            <FormControl className={classes.formControl}>
                                <TextField
                                    type="text"
                                    name="danhGia"
                                    value={state.danhGia || ""}
                                    label="Preview"
                                    required
                                    onChange={handleOnchange} />
                            </FormControl>
                            {/* image */}
                            <FormControl className={classes.formControl}>
                                <TextField
                                    type="file"
                                    className={classes.imgField}
                                    name="hinhAnh"
                                    id="img-file"
                                    multiple
                                    accept="image/*"
                                    required
                                    onChange={handleOnchange} />
                                <label htmlFor="img-file">
                                    <Button component="span" className={classNames({
                                        [classes.uploadBtn]: true,
                                        [classes.addBtn]: isAdd,
                                        [classes.editBtn]: isEdit
                                    })}>
                                        Image
                                    </Button>
                                    <span className={classes.imgName}>{state.hinhAnh}</span>
                                </label>
                            </FormControl>
                            {/* created date */}
                            <FormControl className={classes.formControl}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="dd/MM/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
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
                                <InputLabel id="select-category">Category</InputLabel>
                                <Select
                                    labelid="demo-simple-select-label"
                                    value={state.maDanhMucKhoaHoc || ""}
                                    id="select-category"
                                    required
                                    name="maDanhMucKhoaHoc"
                                    value={state.maDanhMucKhoaHoc || ""}
                                    onChange={handleOnchange}
                                >
                                    {renderCategory()}
                                </Select>
                            </FormControl>
                            {/* submit button */}
                            <FormControl className={classes.formControl}>
                                <Button type="submit" className={classNames({
                                    [classes.submitBtn]: true,
                                    [classes.addBtn]: isAdd,
                                    [classes.editBtn]: isEdit
                                })}>Submit</Button>
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
        addCourse: (course, fileUpload, history) => {
            dispatch(action.actAddCourse(course, fileUpload, history))
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