import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';
import { connect } from 'react-redux';
import * as action from './../../../redux/actions/actions';
import { NavLink } from 'react-router-dom';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TablePagination from '@material-ui/core/TablePagination';
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Fab from "@material-ui/core/Fab";


// material ui icon
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
// core components
import styles from "./../../../assets/jss/material-ui/components/tableStyle.js";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(styles);

function CustomTable(props) {

  const classes = useStyles();
  const { tableHead, tableHeaderColor } = props;

  let { tableData, history, rowsOnPage, listType, courseID } = props;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsOnPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const renderRegiserButtons = (user) => {
    switch (listType) {
      case "Registered":
        return <TableCell className={classes.tableCell}>
          <Fab className={classNames({
            [classes.fab]: true,
            [classes.delete]: true
          })}
            onClick={() => {
              props.onDeregisterUser(courseID, user.taiKhoan);
            }}>
            <RemoveIcon />
          </Fab>
        </TableCell>;
      case "Waiting Accept":
        return <TableCell className={classes.tableCell}>
          <Fab className={classNames({
            [classes.fab]: true,
            [classes.add]: true
          })}
            onClick={() => {
              props.onRegisterUser(courseID, user.taiKhoan);
            }}>
            <PersonAddIcon />
          </Fab>
          <Fab className={classNames({
            [classes.fab]: true,
            [classes.delete]: true
          })}
            onClick={() => {
              props.onDeregisterUser(courseID, user.taiKhoan);
            }}>
            <RemoveIcon />
          </Fab>
        </TableCell>;
      case "Unregister":
        return <TableCell className={classes.tableCell}>
          <Fab className={classNames({
            [classes.fab]: true,
            [classes.add]: true
          })}
            onClick={() => {
              props.onRegisterUser(courseID, user.taiKhoan);
            }}>
            <PersonAddIcon />
          </Fab>
        </TableCell>;
      default:
        return null;
    }
  }

  const renderTrow = (user) => {
    return (
      <TableRow key={user.key} className={classes.tableBodyRow}>
        {user.key !== undefined
          ? <TableCell className={classes.tableCell}>{user.key + 1}</TableCell>
          : null}
        {user.taiKhoan !== undefined
          ? <TableCell className={classes.tableCell}>
            <NavLink className={classes.linkAcc} to='/admin/course-register'>
              <Button onClick={() => { props.onSaveUser(user) }}>
                {user.taiKhoan}
              </Button>
            </NavLink>
          </TableCell>
          : null}
        {user.hoTen !== undefined
          ? <TableCell className={classes.tableCell}>{user.hoTen} </TableCell>
          : null}
        {user.biDanh !== undefined
          ? <TableCell className={classes.tableCell}>{user.biDanh}</TableCell>
          : null}
        {user.email !== undefined
          ? <TableCell className={classes.tableCell + " email"}>{user.email} </TableCell>
          : null}
        {user.soDt !== undefined
          ? <TableCell className={classes.tableCell + " soDt"}>{user.soDt} </TableCell>
          : null}
        {/* type of user */}
        {user.maLoaiNguoiDung !== undefined
          ? <TableCell className={classes.tableCell + " maLoai"}>{user.maLoaiNguoiDung}</TableCell>
          : null}
        {/* password */}
        {user.matKhau !== undefined
          ? <TableCell className={classes.tableCell + " matKhau"}
          >{user.matKhau}</TableCell> : null}
        {/* manage button */}
        {user.biDanh === undefined
          ? <TableCell>
            <Fab className={classNames({
              [classes.fab]: true,
              [classes.edit]: true
            })}
              data-toggle="modal"
              data-target="#formSaveUser"
              onClick={() => { props.onSaveUser(user) }}>
              <EditIcon />
            </Fab>
            <Fab className={classNames({
              [classes.fab]: true,
              [classes.delete]: true
            })}
              onClick={() => { props.OnDeleteUser(user, history) }}>
              <DeleteIcon />
            </Fab>
          </TableCell>
          : null}
        {renderRegiserButtons(user)}
      </TableRow >
    )
  }

  const renderTbody = () => {
    return tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => {
      return renderTrow(user);
    })
  }

  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {renderTbody()}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={tableData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'previous page',
        }}
        nextIconButtonProps={{
          'aria-label': 'next page',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
};

const mapDispatchToProps = dispatch => {
  return {
    OnDeleteUser: (user, history) => {
      dispatch(action.actDeleteUser(user, history))
    },
    onSaveUser: (user) => {
      dispatch(action.actSaveUser(user))
    },
    onRegisterUser: (courseID, userAccount) => {
      dispatch(action.actRegiterUser(courseID, userAccount))
    },
    onDeregisterUser: (courseID, userAccount) => {
      dispatch(action.actDeregisterUser(courseID, userAccount))
    }
  }
}

export default connect(null, mapDispatchToProps)(CustomTable);