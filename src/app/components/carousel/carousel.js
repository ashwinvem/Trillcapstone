import React from 'react';
import gallery1 from '../../assets/images/gallery1.jpg'
import gallery2 from '../../assets/images/gallery2.jpg'
import gallery3 from '../../assets/images/gallery3.jpg'
import gallery4 from '../../assets/images/gallery4.jpg'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FiArrowRightCircle } from "react-icons/fi";
import { FiArrowLeftCircle } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";


export default class extends React.Component {
    render() {
        return (
            <div className="mb-3">
                <div className="unique-picks">
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={70}
                        totalSlides={4}
                        isPlaying={true}
                    >
                        <Slider>
                            <Slide className="img-caro" index={0}><img src={gallery1} /></Slide>
                            <Slide className="img-caro" index={1}><img src={gallery2} /></Slide>
                            <Slide className="img-caro" index={2}><img src={gallery3} /></Slide>
                            <Slide className="img-caro" index={3}><img src={gallery4} /></Slide>
                        </Slider>
                        <ButtonBack className="prev-caro"><FiArrowLeftCircle /></ButtonBack>
                        <ButtonNext className="next-caro"><FiArrowRightCircle /></ButtonNext>
                    </CarouselProvider>
                    <p className="recommended">Recommended</p>
                </div>
                <p className="mb-0 ml-2 p-uni-des"><AiFillStar /><span>&nbsp; 4.2</span></p>
                <p className="mb-0 ml-2 p-uni-des">DamnKind</p>
                <p className="mb-0 ml-2 p-uni-des"><span>3&nbsp;</span>nights / <span>4</span> Days</p>
            </div>
        );
    }
}