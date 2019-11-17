import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as action from '../../redux/actions/actions'

class Banner extends Component {

    handleSearch = (keyword) => {
        this.props.OnSearch(keyword)
    }

    render() {
        return (
            <section className="banner-section">
                <div className="banner-content container">
                    <div className="banner-text">
                        <h3>Brighten your future</h3>
                        <p>Enroll in a course now for as low as $12.99! Ends 7/11, 11:59 PDT</p>
                    </div>
                    <div className="banner-group">
                        <input
                            type="text"
                            className="banner-search"
                            placeholder="What do you want to learn ?"
                            onChange={(event) => { this.handleSearch(event.target.value) }} />
                        <div className="banner-group-prepend">
                            <NavLink to="/course-list">
                                <button className="input-group-text" id="basic-addon1">
                                    <FontAwesomeIcon icon="search" />
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        OnSearch: (keyword) => {
            dispatch(action.actFindingCourse(keyword))
        }
    }
}

export default connect(null, mapDispatchToProps)(Banner)