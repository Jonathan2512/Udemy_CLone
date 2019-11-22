import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';
import { connect } from 'react-redux';
import * as action from './../../../redux/actions/actions';


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
// core components
import styles from "./../../../assets/jss/material-ui/components/tableStyle.js";

const useStyles = makeStyles(styles);

function CustomTable(props) {

  const classes = useStyles();
  const { tableHead, tableHeaderColor } = props;
  let { tableData, history } = props;


  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const renderTrow = (user) => {
    return (
      <TableRow key={user.key} className={classes.tableBodyRow}>
        <TableCell className={classes.tableCell}>{user.key + 1}</TableCell>
        <TableCell className={classes.tableCell}>{user.taiKhoan} </TableCell>
        <TableCell className={classes.tableCell}>{user.hoTen} </TableCell>
        <TableCell className={classes.tableCell}>{user.email} </TableCell>
        <TableCell className={classes.tableCell}>{user.soDt} </TableCell>
        <TableCell className={classes.tableCell}>{user.maLoaiNguoiDung}</TableCell>
        <TableCell className={classes.tableCell}>
          <Fab className={classNames({
            [classes.fab]: true,
            [classes.edit]: true
          })}
            data-toggle="modal"
            data-target="#formSaveUser"
            onClick={() => { props.onEditUser(user) }}>
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
      </TableRow>
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
        rowsPerPageOptions={[20, 60, 100]}
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
    onEditUser: (user) => {
      dispatch(action.actSaveUser(user))
    }
  }
}

export default connect(null, mapDispatchToProps)(CustomTable);