import React from 'react';
import Slider from 'react-slick'

export default function FeedBack() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <section className="feedback-section">
            <div className="container">
                <div className="feedback-title">
                    <h3> What our students have to say</h3>
                </div>
                <div className="feedback-content">
                    <Slider {...settings}>
                        <div className="card mx-1">
                            <div className="card-top">
                                <img src="./img/test1.jpg" alt="/" />
                                <span>Borivoye</span>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Udemy is a life saver. I don't have the time or money for a college
                                  education. My goal is to become a freelance web developer, and thanks to
                    Udemy, I'm really close.</p>
                            </div>
                        </div>
                        <div className="card mx-1">
                            <div className="card-top">
                                <img src="./img/test2.jpg" alt="/" />
                                <span>Kathy</span>
                            </div>
                            <div className="card-body">
                                <p className="card-text">I believe in lifelong learning and Udemy is a great place to learn from
                    experts. I've learned a lot and recommend it to all my friends.</p>
                            </div>
                        </div>
                        <div className="card mx-1">
                            <div className="card-top">
                                <img src="./img/test3.jpg" alt="/" />
                                <span>Zulaika</span>
                            </div>
                            <div className="card-body">
                                <p className="card-text">My children and I LOVE Udemy! The courses are fantastic and the instructors
                    are so fun and k nowledgeable. I only wish we found it sooner.</p>
                            </div>
                        </div>
                        <div className="card mx-1">
                            <div className="card-top">
                                <img src="./img/t1.jpg" alt="/" />
                                <span>John</span>
                            </div>
                            <div className="card-body">
                                <p className="card-text">I work in project management and joined Udemy because I get great courses for
                                  less. The instructors are fantastic, interesting, and helpful. I plan to use
                    Udemy for a long time!</p>
                            </div>
                        </div>
                        <div className="card mx-1">
                            <div className="card-top">
                                <img src="./img/t2.jpg" alt="/" />
                                <span>Begy</span>
                            </div>
                            <div className="card-body">
                                <p className="card-text">The best part about Udemy is the selection. You can find a course for
                    anything you want to learn!</p>
                            </div>
                        </div>
                        <div className="card mx-1">
                            <div className="card-top">
                                <img src="./img/t3.jpg" alt="/" />
                                <span>Bamd</span>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Thank you Udemy! You've renewed my passion for learning and my dream of
                    becoming a web developer.</p>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="feedback-footer">
                    <div className="partner-text">
                        Trusted by companies all sizes
      </div>
                    <div className="partners-logo">
                        <div className="logo-item">
                            <img src="./img/booking.svg" alt="/" />
                        </div>
                        <div className="logo-item">
                            <img src="./img/volkswagen.svg" alt="/" />
                        </div>
                        <div className="logo-item">
                            <img src="./img/mercedes.svg" alt="/" />
                        </div>
                        <div className="logo-item">
                            <img src="./img/pinterest.svg" alt="/" />
                        </div>
                        <div className="logo-item">
                            <img src="./img/adidas.svg" alt="/" />
                        </div>
                        <div className="logo-item">
                            <img src="./img/paypal.svg" alt="/" />
                        </div>
                    </div>
                    <div className="row student-intro">
                        <div className="col-sm-6 teach-item">
                            <div className="student-intro-item ">
                                <h4>Teach on Udemy</h4>
                                <p>Teach what you love. Udemy gives you the tools to create an online course.</p>
                                <button className="btn--gradient">Start Teaching</button>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="student-intro-item">
                                <h4>Udemy for Business</h4>
                                <p>Get unlimited access to 3,500+ of Udemy's top courses for your team.</p>
                                <button className="btn--gradient">Get Udemy for Business</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
