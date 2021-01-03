import React from 'react';
import Grid from "@material-ui/core/Grid";
import Slider from "react-slick";
import Hidden from "@material-ui/core/Hidden";

// images
import Quotation from '../../images/quotation-marks.png';
import thumb from '../../images/tstthumb.jpg';
import next from '../../images/icon/next.png';
import prev from '../../images/icon/prev.png';

import './style.scss';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            src={next}
            className={className}
            style={{ ...style, display: "inline-block" }}
            onClick={onClick}
            alt="next"
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            src={prev}
            className={className}
            style={{ ...style, display: "inline-block" }}
            onClick={onClick}
            alt="prev"
        />
    );
}

const settings = {
    dots:false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
};

const testimonials = [
    {
        id: 1,
        thumb: thumb,
        name: 'Alfred Roy',
        profession: 'CEO',
        body: 'Nam quis laoreet nisl. Vivamus nec quam magna. Cras interdum metus blandit hendrerit ornare. Sed id leo nulla. Etiam ornare imperdiet ligula, sit amet gravida felis bibendum eget. Lorem ipsum dolor sit amet.'
    },
    {
        id: 2,
        thumb: thumb,
        name: 'Alfred Roy',
        profession: 'Frontend developer',
        body: 'Nam quis laoreet nisl. Vivamus nec quam magna. Cras interdum metus blandit hendrerit ornare. Sed id leo nulla. Etiam ornare imperdiet ligula, sit amet gravida felis bibendum eget. Lorem ipsum dolor sit amet.'
    },
    {
        id: 3,
        thumb: thumb,
        name: 'Alfred Roy',
        profession: 'Ux & Ui Designer',
        body: 'Nam quis laoreet nisl. Vivamus nec quam magna. Cras interdum metus blandit hendrerit ornare. Sed id leo nulla. Etiam ornare imperdiet ligula, sit amet gravida felis bibendum eget. Lorem ipsum dolor sit amet.'
    },
];

const TestimonialCarousel = () => {
    return(
        <Grid className="testimonialCarousel">
            <Grid container className="container">
                <Hidden smDown><Grid item md={1}></Grid></Hidden>
                <Grid item xs={12} md={10}>
                    <Slider {...settings}>
                        {testimonials.map(item => {
                            return(
                                <Grid key={item.id} className="tstItem">
                                    <p><img src={Quotation} alt=""/>{item.body}</p>
                                    <Grid className="tstAuthor">
                                        <Grid className="avatar">
                                            <img src={item.thumb} alt="user thumb"/>
                                        </Grid>
                                        <h4>{item.name}</h4>
                                        <strong>{item.profession}</strong>
                                    </Grid>
                                </Grid>

                            )
                        })}
                    </Slider>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default TestimonialCarousel;