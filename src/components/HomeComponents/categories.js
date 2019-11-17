import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Categories() {
    return (
        <section className="categories-section">
            <div className="container">
                <div className="categories-title">
                    <h3>Top categories</h3>
                </div>
                <div className="categories-content">
                    <div className="card-deck">
                        <div className="card hoverShadow">
                            <div className="card-body">
                                <FontAwesomeIcon icon="code" />
                                <span>Development</span>
                            </div>
                        </div>
                        <div className="card hoverShadow">
                            <div className="card-body">
                                <FontAwesomeIcon icon="chart-bar" />
                                <span>Business</span>
                            </div>
                        </div>
                        <div className="card hoverShadow">
                            <div className="card-body">
                                <FontAwesomeIcon icon="tv" />
                                <span>IT &amp; Software</span>
                            </div>
                        </div>
                        <div className="card hoverShadow">
                            <div className="card-body">
                                <FontAwesomeIcon icon="paint-brush" />
                                <span>Design</span>
                            </div>
                        </div>
                    </div>
                    <div className="card-deck">
                        <div className="card hoverShadow">
                            <div className="card-body">
                                <FontAwesomeIcon icon="address-card" />
                                <span>Marketing</span>
                            </div>
                        </div>
                        <div className="card hoverShadow">
                            <div className="card-body">
                                <FontAwesomeIcon icon="book" />
                                <span>Personal Development</span>
                            </div>
                        </div>
                        <div className="card hoverShadow">
                            <div className="card-body">
                                <FontAwesomeIcon icon="camera-retro" />
                                <span>Photography</span>
                            </div>
                        </div>
                        <div className="card hoverShadow">
                            <div className="card-body">
                                <FontAwesomeIcon icon="music" />
                                <span>Music</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
