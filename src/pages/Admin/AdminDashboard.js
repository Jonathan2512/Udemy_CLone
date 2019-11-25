import React from 'react';

// react plugin for creating charts
// import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
// import ArrowUpward from "@material-ui/icons/ArrowUpward";
// import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
// import BugReport from "@material-ui/icons/BugReport";
// import Code from "@material-ui/icons/Code";
// import Cloud from "@material-ui/icons/Cloud";
import ReportIcon from '@material-ui/icons/Report';
import FolderIcon from '@material-ui/icons/Folder';

// core components
import GridItem from "./../../components/AdminComponents/Grid/GridItem";
import GridContainer from "./../../components/AdminComponents/Grid/GridContainer.js";
// import Table from "./../../components/AdminComponents/Table/Table.js";
// // import Tasks from "./../../components/AdminComponents/Tasks/Tasks.js";
// import CustomTabs from "./../../components/AdminComponents/CustomTabs/CustomTabs.js";
import Danger from "./../../components/AdminComponents/Typography/Danger.js";
import Card from "./../../components/AdminComponents/Card/Card.js";
import CardHeader from "./../../components/AdminComponents/Card/CardHeader.js";
import CardIcon from "./../../components/AdminComponents/Card/CardIcon.js";
// import CardBody from "./../../components/AdminComponents/Card/CardBody.js";
import CardFooter from "./../../components/AdminComponents/Card/CardFooter.js";


// import { bugs, website, server } from "./../../components/AdminComponents/variables/general";

// import {
//     dailySalesChart,
//     emailsSubscriptionChart,
//     completedTasksChart
// } from "./../../components/AdminComponents/variables/charts";

import styles from "./../../assets/jss/material-ui/views/dashboardStyle";

const useStyles = makeStyles(styles);

export default function AdminDashboard() {

    const classes = useStyles(styles);

    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader hovercontent="USED SPACE" color="warning" stats icon>
                            <CardIcon color="warning">
                                <FolderIcon />
                            </CardIcon>
                            <p className={classes.cardCategory}>Used Space</p>
                            <h3 className={classes.cardTitle}>
                                49/50 <small>GB</small>
                            </h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <Danger>
                                    <Warning />
                                </Danger>
                                <a href="#pablo" onClick={e => e.preventDefault()}>
                                    Get more space
                                </a>
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader hovercontent="STORE" color="success" stats icon>
                            <CardIcon color="success">
                                <Store />
                            </CardIcon>
                            <p className={classes.cardCategory}>Revenue</p>
                            <h3 className={classes.cardTitle}>$34,245</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <DateRange />
                                Last 24 Hours
                             </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader hovercontent="REPORT" color="danger" stats icon>
                            <CardIcon color="danger">
                                <ReportIcon />
                            </CardIcon>
                            <p className={classes.cardCategory}>Fixed Issues</p>
                            <h3 className={classes.cardTitle}>75</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <LocalOffer />
                                Tracked from Github
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader hovercontent="Accessibility" color="info" stats icon>
                            <CardIcon color="info">
                                <Accessibility />
                            </CardIcon>
                            <p className={classes.cardCategory}>Followers</p>
                            <h3 className={classes.cardTitle}>+245</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <Update />
                                Just Updated
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    )
}
