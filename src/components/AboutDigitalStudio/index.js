import React from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Shape9 from "../../images/shape9.png";

import './style.scss';

const AboutDigitalStudio = ({className = ''}) => {
    return(
        <Grid className={`aboutAgencyWrapper ${className}`}>
            <Grid
                container
                alignItems="center"
                spacing={4}
                className="container xs-column-reverse">
                <Grid item xs={12} md={6}>
                    <Grid className="textContent">
                        <strong>About Digital agency</strong>
                        <h2>Attract Customers With Content And SEO</h2>
                        <h5>How Can Help Your Business?</h5>
                        <p>Building your online presence helps attract more potential clients. Our integrated marketing team will work directly with you to understand what makes your business unique, and provide more qualified leads to achieve success in your industry</p>
                        <Button component="a" className="cBtn cBtnRadius">Learn more</Button>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid className="textThumb rthumb">
                        <img className="Shape9" src={Shape9} alt="shape"/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default AboutDigitalStudio;