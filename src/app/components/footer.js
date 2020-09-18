import React from 'react'

export default function Footer() {
    return (
        <div>
            <div className="users-feedback">
                <div className="container">
                    <div className="row about-section bg-grey my-5">
                        <div className="col-3">
                            <div className="about">
                                <h6>About</h6>
                                <p><a href="#">How Trill Work</a></p>
                                <p><a href="#">Newsroom</a></p>
                                <p><a href="#">Custom Itinerary</a></p>
                                <p><a href="#">Trill for Work</a></p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="about">
                                <h6>COMMUNITY</h6>
                                <p><a href="#">Diversity & Belonging</a></p>
                                <p><a href="#">Trill Associates</a></p>
                                <p><a href="#">Invite friends</a></p>
                                <p><a href="#">Trill for Work</a></p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="about">
                                <h6>Affiliation</h6>
                                <p><a href="#">Host your home</a></p>
                                <p><a href="#">Connect your Vechile</a></p>
                                <p><a href="#">Be a Guide</a></p>
                                <p><a href="#">Community center</a></p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="about">
                                <h6>SUPPORT</h6>
                                <p><a href="#">Help Centre</a></p>
                                <p><a href="#">Cancellation options</a></p>
                                <p><a href="#">Trust & Safety</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer p-5">
                <section className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                        <p>©2020 Trill,Inc.All rights reserved</p>
                        <ul className="d-flex flex-row">
                            <li className="mx-3">Privacy</li>
                            <li className="mx-3">Terms</li>
                            <li className="mx-3">Sitemap</li>
                        </ul>
                    </div>
                    <div className="d-flex flex-row">
                        <p className="px-3"><a href="#"></a>Facebook</p>
                        <p className="px-3"><a href="#"></a>Insta</p>
                        <p className="px-3"><a href="#"></a>Twitter</p>
                    </div>
                </section>
            </div>
        </div>
    )
}
