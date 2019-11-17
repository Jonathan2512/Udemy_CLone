import React, { useState } from 'react';
import * as action from '../redux/actions/actions';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'

function FormDangKy(props) {

    const [state, setState] = useState(
        {
            userSignUp: {
                taiKhoan: "",
                matKhau: "",
                email: "",
                hoTen: "",
                soDT: ""
            }
        }
    )
    const handleOnchange = (event) => {
        let { name, value } = event.target;
        setState({
            ...state,
            [name]: value
        })
    }

    const handleSignUp = (event) => {
        event.preventDefault();
        props.SignUp(state, props.history);
    }
    return (
        <div className="sign-up">
            <div className="signup-content">
                <form className="signup-form" action="/examples/actions/confirmation.php" method="post" onSubmit={handleSignUp}>
                    <h2 className="form-title">Create an Account</h2>
                    <div className="form-group">
                        <input type="text"
                            className="form-input input-lg"
                            name="taiKhoan"
                            placeholder="Username"
                            required="required"
                            onChange={handleOnchange} />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-input input-lg"
                            name="email"
                            placeholder="Email Address"
                            required="required"
                            onChange={handleOnchange} />
                    </div>
                    <div className="form-group">
                        <input type="text"
                            className="form-input input-lg"
                            name="hoTen"
                            placeholder="Full Name"
                            required="required"
                            onChange={handleOnchange} />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-input input-lg"
                            name="soDT"
                            placeholder="Phone Number"
                            required="required"
                            onChange={handleOnchange} />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-input input-lg"
                            name="matKhau"
                            placeholder="Password"
                            required="required"
                            onChange={handleOnchange} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-input input-lg" name="confirm_password" placeholder="Confirm Password" required="required" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn form-submit btn-lg btn-block signup-btn">Sign Up</button>
                    </div>
                    <div className="login-here">Already have an account?
                    <NavLink to="/sign-in">Login Here </NavLink>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        SignUp: (user, history) => {
            dispatch(action.actUserSignUp(user, history))
        }
    }
}

const mapStateToProps = state => {
    return {
        userEdit: state.userReducer.userEdit
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormDangKy);
