import React from 'react';
import Grid from "@material-ui/core/Grid";

import leftImage from '../../images/intro-left-image.jpg';
import abdtdotShape from '../../images/abdtdotshape.png';

import './style.scss';

const AboutIntro = () => {
    return(
        <Grid className="aboutIntroWrapper">
            <Grid
                container
                spacing={4}
                alignItems="center"
                className="container"
            >
                <Grid item xs={12} md={5}>
                    <Grid className="thumb">
                        <img src={leftImage} alt="leftImage"/>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Grid className="introList">
                        <span>01</span>
                        <h4>Our History</h4>
                        <p>The making of WigWag. Exposing the secret behind the complex story behind the brand we all know and love.</p>
                    </Grid>
                    <Grid className="introList">
                        <span>02</span>
                        <h4>Our Principles</h4>
                        <p>Ready to solve problems and eager to apply new ideas. This is the brave territory where we come together, and it’s hard to get there if you’re not having fun..</p>
                    </Grid>
                    <Grid className="introList">
                        <span>03</span>
                        <h4>Business success</h4>
                        <p>Ready to solve problems and eager to apply new ideas. This is the brave territory where we come together, and it’s hard to get there if you’re not having fun..</p>
                    </Grid>
                    <Grid className="introList">
                        <span>04</span>
                        <h4>Digital Solution</h4>
                        <p>Ready to solve problems and eager to apply new ideas. This is the brave territory where we come together, and it’s hard to get there if you’re not having fun..</p>
                    </Grid>
                </Grid>
            </Grid>
            <img src={abdtdotShape} alt="abdtdotShape" className="abdtdotShape"/>
        </Grid>
    )
};

export default AboutIntro;