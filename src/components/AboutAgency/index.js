import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";

// images
import Shape2 from '../../images/shape2.png';
import bgShape3 from '../../images/bg-shape3.png';

import './style.scss';

const AboutAgency = () => {
    return(
        <Grid className="aboutAgencyWrapper">
            <Grid
                container
                alignItems="center"
                spacing={4}
                className="container">
                <Grid item xs={12} md={6}>
                    <Grid className="textThumb">
                        <img className="Shape2" src={Shape2} alt="shape"/>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid className="textContent">
                        <strong>Know About Ammelias</strong>
                        <h2><span>Ammelias</span> For Your Business Solution</h2>
                        <p>Building your online presence helps attract more potential clients. Our integrated marketing team will work directly with you to understand what makes your business unique, and provide more qualified leads to achieve success in your industry</p>
                        <Link to="/about-us" className="cBtn">About Us</Link>
                    </Grid>
                </Grid>
            </Grid>
            <img src={bgShape3} alt="bgShape3" className="bgShape3"/>
        </Grid>
    )
};

export default AboutAgency;