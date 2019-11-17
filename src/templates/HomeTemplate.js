import React, { Fragment, useEffect, useState } from 'react';
import Navbar from './../components/HomeComponents/navbar'
import { Route } from 'react-router-dom';
import Footer from './../components/HomeComponents/footer';
import { RotateSpinner } from 'react-spinners-kit';

const HomeLayout = props => {
    return (
        <Fragment>
            <Navbar />
            {props.children}
            <hr></hr>
            <Footer />
        </Fragment>
    )
}

export default function HomeTemplate({ Component, ...props }) {

    const [state, setState] = useState({ isLoading: true });

    useEffect(() => {
        setTimeout(() => {
            setState({
                isLoading: false
            })
        }, 1000);
    }, [])

    return (
        state.isLoading
            ? (<RotateSpinner
                size={100}
                color="#ec5252"
                loading={state.isLoading}
            />)
            : (<Fragment>
                <Route
                    {...props}
                    render={componentProps => (
                        <HomeLayout>
                            <Component {...componentProps} />
                        </HomeLayout>
                    )}
                />
            </Fragment>)
    )
}
