import React from 'react';
import Grid from "@material-ui/core/Grid";
import SectionTitle from "../SectionTitle";
import TestimonialCarousel from "../TestimonialCarousel";

import bgShape4 from "../../images/bg-shape4.png";

import './style.scss';

const Testimonial = () => {
    return(
        <Grid className="testimonialWrapper">
            <Grid className="container">
                <SectionTitle
                    subtitle="Testimonial"
                    title="What Our Client Say About Us"
                />
                <TestimonialCarousel/>
            </Grid>
            <img src={bgShape4} alt="bgShape4" className="bgShape4"/>
        </Grid>
    )
};

export default Testimonial;