import React from 'react'

export default function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="row">
                        <div className="col-sm-9 links-text">
                            <ul className="links">
                                <li>
                                    <a href="/">Udemy for Business</a>
                                </li>
                                <li>
                                    <a href="/">Teach on Udemy</a>
                                </li>
                                <li>
                                    <a href="/"> Udemy app</a>
                                </li>
                                <li>
                                    <a href="/">About us</a>
                                </li>
                                <li>
                                    <a href="/">Careers</a>
                                </li>
                                <li>
                                    <a href="/">Blog</a>
                                </li>
                                <li>
                                    <a href="/">Support</a>
                                </li>
                                <li>
                                    <a href="/">Affiliate</a>
                                </li>
                                <li>
                                    <a href="/">Sitemap</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-3 dropup-text">
                            <div className="dropup">
                                <button type="button" className="btn btn--dropup dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-globe" />
                                    <span>English</span>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="/">Vietnamese</a>
                                    <a className="dropdown-item" href="/">English</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="row">
                        <div className="col-sm-6 footer-left">
                            <img src="/img/logo-coral.svg" alt="/" />
                            <span> Copyright © 2019 Udemy, Inc.</span>
                        </div>
                        <div className="col-sm-6 footer-right">
                            <span className="mr-4">Terms</span>
                            <span>Privacy Policy and Cookie Policy</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
