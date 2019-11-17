import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../redux/actions/actions';
class FormEditUser extends Component {

    state = {
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        email: "",
        soDT: "",
        maLoaiNguoiDung: "HV",
        isEdit: false
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.userEdited) {
            this.setState({
                taiKhoan: nextProps.userEdited.taiKhoan,
                matKhau: nextProps.userEdited.matKhau,
                hoTen: nextProps.userEdited.hoTen,
                email: nextProps.userEdited.email,
                soDT: nextProps.userEdited.soDT,
                maLoaiNguoiDung: nextProps.userEdited.maLoaiNguoiDung,
                isEdit: true
            })
        }
    }
    handleOnChange = (event) => {
        let { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.editUserInfo(this.state);
    }
    render() {
        return (
            <div id="formSaveUser" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    {/* Modal content*/}
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="signup-form">
                                <form action="/examples/actions/confirmation.php" method="post" onSubmit={this.handleOnSubmit}>
                                    <h2>Edit Your Profile</h2>
                                    {this.state !== "" ? <Fragment>
                                        <div className="form-group">
                                            <label > Username :</label>
                                            <input type="text"
                                                disabled
                                                className="form-control input-lg"
                                                name="taiKhoan"
                                                placeholder="Username"
                                                required="required"
                                                onChange={this.handleOnChange}
                                                value={this.state.taiKhoan || ""}
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
                                                onChange={this.handleOnChange}
                                                value={this.state.email || ""}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label> FullName : </label>
                                            <input type="text"
                                                className="form-control input-lg"
                                                name="hoTen"
                                                placeholder="Full Name"
                                                required="required"
                                                onChange={this.handleOnChange}
                                                value={this.state.hoTen || ""} />
                                        </div>
                                        <div className="form-group">
                                            <label> Phone Number</label>
                                            <input
                                                type="text"
                                                className="form-control input-lg"
                                                name="soDT"
                                                placeholder="Phone Number"
                                                required="required"
                                                onChange={this.handleOnChange}
                                                value={this.state.soDT || ""} />
                                        </div>
                                        <div className="form-group">
                                            <label> Password</label>
                                            <input
                                                type="password"
                                                className="form-control input-lg"
                                                name="matKhau"
                                                placeholder="Password"
                                                required="required"
                                                onChange={this.handleOnChange}
                                                value={this.state.matKhau || ""} />
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
}

const mapStateToProps = state => {
    return {
        userEdited: state.userReducer.userInfo,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        editUserInfo: (userEdited) => {
            dispatch(action.actEditUserInfo(userEdited))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormEditUser);