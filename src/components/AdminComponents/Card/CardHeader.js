import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';

// @material-ui/icons

// core components
import styles from "./../../../assets/jss/material-ui/components/cardHeaderStyle.js";

const useStyles = makeStyles(styles);

export default function CardHeader(props) {
  const classes = useStyles();
  const { className, children, color, plain, stats, icon, ...rest } = props;
  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes[color + "CardHeader"]]: color,
    [classes.cardHeaderPlain]: plain,
    [classes.cardHeaderStats]: stats,
    [classes.cardHeaderIcon]: icon,
    [className]: className !== undefined
  });

  const hoverPopup = () => {
    let { course, hovercontent } = props;
    if (course !== undefined) {
      return (
        <div className="course-popup">
          <div className="container-fliud">
            <div className="preview-pic">
              <img src={course.hinhAnh} alt="/" />
            </div>
          </div>
          <div className="details">
            <h3 className="product-title">{course.tenKhoaHoc}</h3>
            <p className="product-description">{course.moTa}</p>
            <p className="author">Created by <span>Jonathan Dennis.</span></p>
          </div>
        </div>)
    }
    if (hovercontent !== undefined) {
      return <h3 style={{ color: "#ef5350", padding: "10px 10px 0 10px" }}>{hovercontent}</h3>
    }
    return <div></div>
  }
  return (
    <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 500 }} placement="right-start" title={hoverPopup()}>
      <div className={cardHeaderClasses} {...rest}>
        {children}
      </div>
    </Tooltip>
  );
}

CardHeader.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose"
  ]),
  plain: PropTypes.bool,
  stats: PropTypes.bool,
  icon: PropTypes.bool,
  children: PropTypes.node
};
