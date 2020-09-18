import React, { Component } from 'react'
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { FcGoogle } from "react-icons/fc";
import { FaSearch } from "react-icons/fa";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class header extends Component {


    state = {
        isDropDown: false,
        isModal: false
    }

    handleToggel = () => {
        this.setState({
            isDropDown: !this.state.isDropDown
        })
    }

   

    render() {

        const { isDropDown, isModal } = this.state;
        const { isWithSearch } = this.props

        return (
            <>
                {!isWithSearch ? (
                    <header className={this.props.className}>
                        <nav>
                            <div className="menu-icon">
                                <i className="fa fa-bars fa-2x"></i>
                            </div>
                            <div className="logo" onClick={() => this.handleHome()}>
                                <h1 className="font-weight-bolder">TRILL</h1>
                                <p className="tagline">Your experince with us</p>
                            </div>
                            <div className="menu d-flex justify-content-end">
                                <button className="profile-btn-burger main mt-4 mr-5" onClick={() => this.handleToggel()}>
                                    <div className="burger-menu ml-2">
                                        <GiHamburgerMenu />
                                    </div>
                                    <div className="profile-logo ml-2">
                                        <CgProfile />
                                    </div>
                                </button>
                                <div className={`bg-white d-flex flex-column menu-toggle-body `} style={{ visibility: !isDropDown ? "hidden" : "" }}>
                                    <span onClick={() => this.setState(prev => ({ isModal: !prev.isModal, isDropDown: false }))}>Sign Up</span>
                                    <span className="border-bottom">Login In</span>
                                    <span>Help</span>
                                    <span>Join With Us</span>
                                </div>
                            </div>
                        </nav>
                    </header>
                ) : (
                        <header className={this.props.className}>
                            <nav>
                                <div className="logo pointer-cursor" onClick={() => this.props.onClick()}>
                                    <h1 className="font-weight-bolder">TRILL</h1>
                                    <p className="tagline">Your experince with us</p>
                                </div>
                                <div className="serach-bar-nav  d-flex mt-4 justify-content-center">
                                    <div className="form-group">
                                        <input type="text" className="input-group form-control nav-search" id="existingphone" name="existingphone" maxLength="10"
                                            data-alert="Please fill the mobile number" placeholder="Search.." autoComplete="off" />
                                            <FaSearch className="search-ic"/>
                                    </div>
                                </div>
                                <div className="menu d-flex justify-content-end">
                                    <button className="profile-btn-burger mt-4 mr-5" onClick={() => this.handleToggel()}>
                                        <div className="burger-menu ml-2">
                                            <GiHamburgerMenu />
                                        </div>
                                        <div className="profile-logo ml-2">
                                            <CgProfile />
                                        </div>
                                    </button>
                                    <div className={`bg-white d-flex flex-column menu-toggle-body `} style={{ visibility: !isDropDown ? "hidden" : "" }}>
                                        <span onClick={() => this.setState(prev => ({ isModal: !prev.isModal, isDropDown: false }))}>Sign Up</span>
                                        <span className="border-bottom">Login In</span>
                                        <span>Help</span>
                                        <span>Join With Us</span>
                                    </div>
                                </div>
                            </nav>
                        </header>
                    )}


                <Modal isOpen={isModal} className="signup">
                    <ModalHeader className="signup-header" toggle={() => this.setState(prev => ({ isModal: !prev.isModal }))} >Sign Up</ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <input type="text" className="input-group form-control signup-mobilenumbers" id="existingphone" name="existingphone" maxLength="10"
                                            data-alert="Please fill the mobile number" placeholder="Phone" autoComplete="off" />

                                        <input type="password" className="input-group form-control login-password" id="existingphone" name="existingphone" maxLength="10"
                                            data-alert="Please fill the mobile number" placeholder="Password" autoComplete="off" />
                                    </div>
                                    <p className="signup-text">We’ll call or text you to confirm your number. Standard message and data rates apply</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <button className="btn col-12 continue-login">Continue</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="text-center mt-3">
                                        <span className="or-break">or</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row my-4">
                                <div className="col-12 text-center">
                                    <button className="btn btn-with-google col-12"><FcGoogle />Continue with google</button>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-12 border-top pt-3">
                                    <p className="mb-0">Already a customer? <strong><a href="#">LogIn</a></strong></p>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}
