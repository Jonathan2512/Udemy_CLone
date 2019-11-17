import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
import { NavLink } from 'react-router-dom';

export default function Course(props) {

    let { Course } = props;

    const StyledButton = withStyles({
        root: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            borderRadius: 3,
            border: 0,
            color: 'white',
            height: 48,
            padding: '0 30px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            textAlign: "center",
            outline: "none"
        },
        label: {
            textTransform: 'capitalize',
        },
    })(Button);

    const hoverPopup = () => {
        return (
            <div className="course-popup">
                <div className="container-fliud">
                    <div className="preview-pic">
                        <img src={Course.hinhAnh} alt="/" />
                    </div>
                </div>
                <div className="details">
                    <h3 className="product-title">{Course.tenKhoaHoc}</h3>
                    <p className="product-description">{Course.moTa}</p>
                    <p className="author">Created by <span>Jonathan Dennis.</span></p>
                </div>
            </div>
        )
    }

    return (
        <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} placement="right-start" title={hoverPopup()}>
            <div className="card border-info hoverShadow mx-1">
                <div className="img-top">
                    <img src={Course.hinhAnh} alt="/" className="img-fluid" />
                </div>
                <div className="card-body">
                    <p className="card-text collapsed" id="collapseContent">{Course.tenKhoaHoc}</p>
                    <span className="author">{Course.nguoiTao.hoTen}</span>
                    <span className="views">{Course.luotXem}</span>
                    <span className="rating">
                        <FontAwesomeIcon icon="star" />
                        <FontAwesomeIcon icon="star" />
                        <FontAwesomeIcon icon="star" />
                        <FontAwesomeIcon icon="star" />
                        <FontAwesomeIcon icon="star-half" />
                    </span>
                    <div className="mt-2 detailBtn">
                        <NavLink to={`/course-detail/${Course.maKhoaHoc}`}>
                            <StyledButton>
                                Detail Course
                            </StyledButton>
                        </NavLink>
                        <p className="price">
                            <span>
                                <s>$199.99</s>
                            </span>
                            <span>$10.99</span>
                        </p>
                    </div>
                </div>
            </div>
        </Tooltip>
    )
}
