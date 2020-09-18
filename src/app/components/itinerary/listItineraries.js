import React, { Component } from 'react'
import Header from '../header/header';
import banner from '../../assets/images/itineraryhome.jpg';
import gallery4 from '../../assets/images/gallery4.jpg'
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import SafeMeasures from '../commonComps/safeMeasures';
import Footer from '../footer';
import Carousel from '../carousel/carousel'

export default class Itineraries extends Component {
    handleHome = () =>{
        this.props.history.push('/')
    }

    handleItiPlan = () =>{
        this.props.history.push('/itidesc')
    } 
    render() {
        return (
            <>
                <Header isWithSearch={true} onClick={()=>this.handleHome()} />
                <div className="conatiner">
                    <div className="banner-iti">
                        <img src={banner} alt="baneer-img" />
                    </div>
                    <div className="banner-text-bd">
                        <p className="banner-text">Give your<br></br> routine a new <br></br>place</p>
                        <p className="banner-p">Look in somewhere new to discover</p>
                    </div>
                    <main>
                        <section className="iti-main">
                            <h3 className="mx-3 my-5">Top spots to forget yourself</h3>
                            <div className="container-custom mx-4 my-5">
                                <div className="row mb-3">
                                    <div className="col-3">
                                        <div className="place-card d-flex flex-row"onClick={()=>this.handleItiPlan()} >
                                            <img src={gallery4} />
                                            <div className="spot-info">
                                                <p>Bali</p>
                                                <p><span>3</span> Days/ <span>4</span> nights</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="place-card d-flex flex-row"onClick={()=>this.handleItiPlan()}>
                                            <img src={gallery4} />
                                            <div className="spot-info">
                                                <p>Bali</p>
                                                <p><span>3</span> Days/ <span>4</span> nights</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="place-card d-flex flex-row"onClick={()=>this.handleItiPlan()}>
                                            <img src={gallery4} />
                                            <div className="spot-info">
                                                <p>Bali</p>
                                                <p><span>3</span> Days/ <span>4</span> nights</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="place-card d-flex flex-row"onClick={()=>this.handleItiPlan()}>
                                            <img src={gallery4} />
                                            <div className="spot-info">
                                                <p>Bali</p>
                                                <p><span>3</span> Days/ <span>4</span> nights</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="place-card d-flex flex-row"onClick={()=>this.handleItiPlan()}>
                                            <img src={gallery4} />
                                            <div className="spot-info">
                                                <p>Bali</p>
                                                <p><span>3</span> Days/ <span>4</span> nights</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="place-card d-flex flex-row"onClick={()=>this.handleItiPlan()}>
                                            <img src={gallery4} />
                                            <div className="spot-info">
                                                <p>Bali</p>
                                                <p><span>3</span> Days/ <span>4</span> nights</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="place-card d-flex flex-row"onClick={()=>this.handleItiPlan()}>
                                            <img src={gallery4} />
                                            <div className="spot-info">
                                                <p>Bali</p>
                                                <p><span>3</span> Days/ <span>4</span> nights</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="place-card d-flex flex-row"onClick={()=>this.handleItiPlan()}>
                                            <img src={gallery4} />
                                            <div className="spot-info">
                                                <p>Bali</p>
                                                <p><span>3</span> Days/ <span>4</span> nights</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="categeory iti-main">
                            <div className="container-custom">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="group-cate mb-3">
                                            <img src={"https://images.unsplash.com/photo-1585483103289-39c79411fda9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"} alt="" />
                                            <h2 className="mt-3 ml-3" >National picks</h2>
                                            <p className="ml-3">When you can take the Indian out of the family, but you cannot take the family out of the Indian.</p>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="group-cate mb-3">
                                            <img src={"https://images.unsplash.com/photo-1600073956897-4fc08a2b27d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"} alt="" />
                                            <h2 className="mt-3 ml-3">International picks</h2>
                                            <p className="ml-3">When you can take the Indian out of the family, but you cannot take the family out of the Indian.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="iti-main">
                            <div className="custom-container my-3">
                                <div className="d-flex justify-content-between">
                                    <div className="catch-line-iti mt-3">
                                        <h3>Unique spots on weekends</h3>
                                        <p>Let yourself into an out-of-the-ordinary weekends</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <p className="mb-0 mt-1 mr-1 font-weight-bold ">1/12</p>
                                        <div className="slide">
                                            <button className="prev-slide mx-2"><AiOutlineArrowLeft /></button>
                                            <button className="next-slide mx-2"><AiOutlineArrowRight /></button>
                                        </div>
                                    </div>

                                </div>
                                <div className="catch-body">
                                    <div className="parent-container">
                                        <div className="sub-parent">
                                            <div className="row d-flex flex-row ">
                                                <div className="col">
                                                    <Carousel/>
                                                </div>
                                                <div className="col">
                                                    <Carousel />
                                                </div>
                                                <div className="col">
                                                    <Carousel />
                                                </div>
                                            </div>
                                            <a href="#" className="font-weight-bold text-black-50" ><u>Show all </u><IoIosArrowForward/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <SafeMeasures />
                        <Footer />
                    </main>
                </div>
            </>
        )
    }
}
