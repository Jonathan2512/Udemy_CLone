import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Recomendation() {
    return (
        <section className="rec-section">
            <div className="rec-border-top" />
            <div className="container">
                <div className="row top-content">
                    <div className="col-sm text-center">
                        <FontAwesomeIcon icon="film" />
                    </div>
                    <div className="col-sm text-center">
                        <FontAwesomeIcon icon="clock" />
                    </div>
                    <div className="col-sm text-center">
                        <FontAwesomeIcon icon="balance-scale" />
                    </div>
                    <div className="col-sm text-center">
                        <FontAwesomeIcon icon="archive" />
                    </div>
                    <div className="col-sm text-center">
                        <FontAwesomeIcon icon="camera" />
                    </div>
                </div>
                <div className="row between-content">
                    <div className="col-sm-3 col-12 p-0 between-content__left">
                        <FontAwesomeIcon icon="certificate" />
                    </div>
                    <div className="col-sm-6">
                        <h3>Get personalized recommendations</h3>
                        <h5>Answer a few questions for your top picks</h5>
                        <button className="btn--gradient">Get Started</button>
                    </div>
                    <div className="col-sm-3 col-12 p-0 between-content__right mt-4">
                        <FontAwesomeIcon icon="address-book" />
                    </div>
                </div>
                <div className="row bottom-content">
                    <div className="col-sm text-center">
                        <FontAwesomeIcon icon="address-card" />
                    </div>
                    <div className="col-sm text-center">
                        <FontAwesomeIcon icon="anchor" />
                    </div>
                    <div className="col-sm text-center">
                        <FontAwesomeIcon icon="chart-bar" />
                    </div>
                    <div className="col-sm text-center">
                        <FontAwesomeIcon icon="calendar" />
                    </div>
                    <div className="col-sm text-center">
                        <FontAwesomeIcon icon="code" />
                    </div>
                </div>
            </div>
        </section>

    )
}
