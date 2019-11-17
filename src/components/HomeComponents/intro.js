import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Intro() {

    return (
        <section className="intro-section">
            <div className="banner-intro">
                <div className="row">
                    <div className="col-sm-4 intro-item">
                        <FontAwesomeIcon icon="book" />
                        <div className="intro-text">
                            <h4>100,000 online courses</h4>
                            <p>Explore a variety of fresh topics</p>
                        </div>
                    </div>
                    <div className="col-sm-4 intro-item">
                        <FontAwesomeIcon icon="check-circle" />
                        <div className="intro-text">
                            <h4>Expert instruction</h4>
                            <p>Find the right instructor for you</p>
                        </div>
                    </div>
                    <div className="col-sm-4 intro-item">
                        <FontAwesomeIcon icon="clock" />
                        <div className="intro-text">
                            <h4>Lifetime access</h4>
                            <p>Learn on your schedule</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
