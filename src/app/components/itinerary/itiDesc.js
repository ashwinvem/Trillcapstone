import React, { Component } from 'react';
import Header from '../header/header';
import banner from '../../assets/images/itiDescBg.jpg';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import SafeMeasures from '../commonComps/safeMeasures';
import Footer from '../footer';


export default class ItiDesc extends Component {
    handleHome = () => {
        this.props.history.push('/')
    }
    render() {
        return (
            <div className="container-custom">
                <Header isWithSearch={true} onClick={() => this.handleHome()} />
                <main>
                    <div className="banner-iti">
                        <img src={banner} />
                    </div>
                    <div className="banner-text-bd">
                        <p className="banner-text">Welcome to<br></br> most wishlisted <br></br>spot <i className="text-danger">Bali</i></p>
                        <p className="banner-p">Look in somewhere new to discover</p>
                    </div>
                    <section>
                        <div className="container">
                            <div className="row my-5">
                                <div className="col-2 m-auto">
                                    <h3>Day 1</h3>
                                </div>
                                <div className="col">
                                    <Accordion allowZeroExpanded={true}>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Tourist Spots&nbsp;(2)
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    Exercitation in fugiat est ut ad ea cupidatat ut in
                                                    cupidatat occaecat ut occaecat consequat est minim minim
                                                    esse tempor laborum consequat esse adipisicing eu
                                                    reprehenderit enim.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Hotels to stay&nbsp;(1)
                                            </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    In ad velit in ex nostrud dolore cupidatat consectetur
                                                    ea in ut nostrud velit in irure cillum tempor laboris
                                                    sed adipisicing eu esse duis nulla non.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>
                            <div className="row my-5">
                                <div className="col-2 m-auto">
                                    <h3>Day 2</h3>
                                </div>
                                <div className="col">
                                    <Accordion allowZeroExpanded={true}>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Tourist Spots&nbsp;(4)
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    Exercitation in fugiat est ut ad ea cupidatat ut in
                                                    cupidatat occaecat ut occaecat consequat est minim minim
                                                    esse tempor laborum consequat esse adipisicing eu
                                                    reprehenderit enim.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Hotels to stay&nbsp;(2)
                                            </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    In ad velit in ex nostrud dolore cupidatat consectetur
                                                    ea in ut nostrud velit in irure cillum tempor laboris
                                                    sed adipisicing eu esse duis nulla non.
                                                </p>
                                                <ul>
                                                    <li>In ad velit in ex nostrud dolore cupidatat consectetur</li>
                                                    <li>In ad velit in ex nostrud dolore cupidatat consectetur</li>
                                                    <li>In ad velit in ex nostrud dolore cupidatat consectetur</li>
                                                </ul>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>
                            <div className="row my-5">
                                <div className="col-2 m-auto">
                                    <h3>Day 3</h3>
                                </div>
                                <div className="col">
                                    <Accordion allowZeroExpanded={true}>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Tourist Spots
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    Exercitation in fugiat est ut ad ea cupidatat ut in
                                                    cupidatat occaecat ut occaecat consequat est minim minim
                                                    esse tempor laborum consequat esse adipisicing eu
                                                    reprehenderit enim.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Hotels to stay
                                            </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    In ad velit in ex nostrud dolore cupidatat consectetur
                                                    ea in ut nostrud velit in irure cillum tempor laboris
                                                    sed adipisicing eu esse duis nulla non.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </section>
                    <SafeMeasures/>
                    <Footer/>
                </main>

            </div>
        )
    }
}
