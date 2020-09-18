import React from 'react';
import ReactDOM from 'react-dom';
import road from '../assets/images/road.jpg';
import spain from '../assets/images/spain.jpg'
import lake from '../assets/images/lake.jpg'
import gallery1 from '../assets/images/gallery1.jpg'
import gallery2 from '../assets/images/gallery2.jpg'
import gallery3 from '../assets/images/gallery3.jpg'
import gallery4 from '../assets/images/gallery4.jpg'
import Header from './header/header';
import Footer from './footer';
import VideoComp from './video/video';
import Carousel from './carousel/carousel';




class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    handlePlanHere = () => {
        this.props.history.push('/itinerary')
    }

    componentDidMount() {
        const header = document.querySelector("nav");
        const section = document.querySelector(".second-section");
        const secOpti = {};
        const scetionObserver = new IntersectionObserver(function (entries, scetionObserver) {
            entries.forEach(ele => {
                if (!ele.isIntersecting) {
                    header.classList.add("nav-scroll")
                } else {
                    header.classList.remove("nav-scroll")
                }
            })
        }, secOpti);
        scetionObserver.observe(section)
    }
    render() {

        return (
            <div className="main">
                <Header className={"main-page"} />
                <div className="container-fluid px-0">
                    <main className="main">
                        <div className="content">
                            <div className="go-away">
                                <h1>Go Away</h1>
                                <p>be back never by your custom itinerary</p>
                                <button className="btn btn-plan-here" onClick={() => this.handlePlanHere()}>Plan here</button>
                            </div>
                            <div id="cover">
                                <form method="get" action="">
                                    <div className="tb">
                                        <div className="td"><input type="text" className="main-search" placeholder="Search....." required /></div>
                                        <div className="td" id="s-cover">
                                            <button className="search-btn" type="submit">
                                                <div id="s-circle"></div>
                                                <span></span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="second-section">
                                <h1>Featured Destinations</h1>
                                <div className="custom-container">
                                    <div className="row mx-4">
                                        <div className="col-md-4">
                                            <div className="feature-box">
                                                <div className="feature-img">
                                                    <VideoComp img={spain} video={"https://player.vimeo.com/external/439346171.sd.mp4?s=a272ed0b736daeaf06d5205ccca148bc5d2c1824&profile_id=139&oauth2_token_id=57447761"} />
                                                    {/* <img src={spain} alt="thumb-1" /> */}
                                                    <div className="price">
                                                        <p>90%</p>

                                                    </div>
                                                </div>
                                                <div className="feature-details">
                                                    <h4>LOS ANGELS</h4>
                                                    <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="feature-box">
                                                <div className="feature-img">
                                                    <VideoComp img={lake} video={"https://player.vimeo.com/external/406775183.sd.mp4?s=90afcb8d276e90fd76c8f069e973e0057675a56c&profile_id=139&oauth2_token_id=57447761"} />
                                                    {/* <img src={lake} alt="thumb-1" /> */}
                                                    <div className="price">
                                                        <p>83%</p>

                                                    </div>
                                                </div>
                                                <div className="feature-details">
                                                    <h4>SPAIN</h4>
                                                    <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="feature-box">
                                                <div className="feature-img">
                                                    <VideoComp img={road} video={"https://player.vimeo.com/external/333187445.sd.mp4?s=980ab5ba38a2e8a4fba36b1dece03081e49087ae&profile_id=139&oauth2_token_id=57447761"} />
                                                    {/* // <img src={} alt="thumb-1" /> */}
                                                    <div className="price">
                                                        <p>99%</p>

                                                    </div>
                                                </div>
                                                <div className="feature-details">
                                                    <h4>MOSCOW</h4>
                                                    <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="gallery">
                                <h1>EXPERINCED ITINERARIES</h1>
                                <div className="custom-container">
                                    <div className='row'>
                                        <div className="col-md-3">
                                            <div className="gallery-box">
                                                <img src={gallery4} />
                                                <h4>Cancun</h4>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="gallery-box">
                                                <img src={gallery1} />
                                                <h4>Orlando</h4>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="gallery-box">
                                                <img src={gallery2} />
                                                <h4>Myrtle Beach</h4>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="gallery-box">
                                                <img src={gallery3} />
                                                <h4>Rome</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="banner">
                                <div className="banner-highlights">
                                    <div className="custom-container">
                                        <div className="d-flex justify-content-around">
                                            <div className="">
                                                <h2>Get 30% on top destinations</h2>
                                                <p>Book your itineraries before jan 1st and avail flat 30% off</p>
                                            </div>
                                            <button className="btn  booking-btn">Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Footer />
                        </div>
                    </main>
                </div>


            </div>
        )
    }

}

export default Main;