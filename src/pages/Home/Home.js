import React, { Component, Fragment } from 'react';
import Banner from './../../components//HomeComponents/banner'
import Intro from './../../components//HomeComponents/intro'
import CourseList from './../../components//HomeComponents/CourseList'
import Recomendation from './../../components/HomeComponents/recomendation';
import Categories from './../../components/HomeComponents/categories';
import FeedBack from './../../components/HomeComponents/feedback';

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Intro />
                <CourseList />
                <Recomendation />
                <Categories />
                <FeedBack />
            </Fragment>
        )
    }
}
