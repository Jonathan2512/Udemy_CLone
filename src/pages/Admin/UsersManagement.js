import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import * as action from './../../redux/actions/actions';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import classNames from 'classnames'

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Fab from '@material-ui/core/Fab';

// @material-ui/icon 
import AddIcon from '@material-ui/icons/Add'

// core components
import GridContainer from './../../components/AdminComponents/Grid/GridContainer';
import GridItem from './../../components/AdminComponents/Grid/GridItem';
import CardHeader from './../../components/AdminComponents/Card/CardHeader';
import Card from './../../components/AdminComponents/Card/Card';
import CardBody from './../../components/AdminComponents/Card/CardBody';
import Table from './../../components/AdminComponents/Table/Table';
import { ToastContainer } from 'react-toastify';


import styles from './../../assets/jss/material-ui/views/UsersManagementStyle';
import FormSaveUser from '../../Forms/FormSaveUser';

const useStyles = makeStyles(styles);

function UsersManagement(props) {

    let { userList, history } = props;

    const classes = useStyles();

    useEffect(() => {
        props.getUserList();

    }, [])

    const renderTable = () => {
        if (userList && userList.length > 0) {
            userList = userList.map((item, index) => {
                return { ...item, key: index }
            });
            return <Table
                tableHeaderColor="success"
                tableHead={["ID", "Account", "Name", "Email", "Phone", "Type"]}
                tableData={userList}
                history={history} />
        }
    }

    return (
        <Fragment>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader hovercontent="Users List" color="success">
                            <h2 className={classes.title}>Users List (GP09)</h2>
                        </CardHeader>
                        <CardBody>
                            {renderTable()}
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
            <ScrollUpButton
                StopPosition={0}
                ShowAtPosition={50}
                EasingType='easeOutCubic'
                AnimationDuration={500}
                ContainerClassName='ScrollUpButton__Container'
                TransitionClassName='ScrollUpButton__Toggled'
                style={{
                    fill: "#f44336",
                    border: "2px solid #f44336",
                    outline: "none"
                }}
            />
            <Fab className={classNames({
                [classes.fab]: true,
                [classes.add]: true
            })}
                data-toggle="modal"
                data-target="#formSaveUser"
                onClick={() => { props.onAddUser("") }}>
                <AddIcon />
            </Fab>
            <ToastContainer />
            <FormSaveUser history={props.history} />
        </Fragment>
    )

}

const mapDispatchToProps = dispatch => {
    return {
        getUserList: () => {
            dispatch(action.actGetUserList());
        },
        onAddUser: (user) => {
            dispatch(action.actSaveUser(user))
        }
    }
}

const mapStateToProps = state => {
    return {
        userList: state.userReducer.userList
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersManagement);