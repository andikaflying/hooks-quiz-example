import React from 'react';
import Grid from "@material-ui/core/Grid";

// images
import picture from '../../images/portfolio/prtdetails/picture.jpg';
import picture1 from '../../images/portfolio/prtdetails/picture1.jpg';
import picture2 from '../../images/portfolio/prtdetails/picture2.jpg';
import picture3 from '../../images/portfolio/prtdetails/picture3.jpg'

import './style.scss';
const PortfolioSingleDetails = () => {
    return(
        <Grid className="portfolioSingleDetails">
            <Grid className="container" container spacing={4}>
                <Grid item xs={12}>
                    <Grid className="prtMetaTop">
                        <h2><span>Creative digital business</span>, Building engaging digital experiences</h2>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid className="prtImages">
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={6}><img src={picture} alt=""/></Grid>
                            <Grid item xs={12} md={6}><img src={picture1} alt=""/></Grid>
                            <Grid item xs={12} md={6}><img src={picture2} alt=""/></Grid>
                            <Grid item xs={12} md={6}><img src={picture3} alt=""/></Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid className="prtdRightContent">
                        <h5>Experiences</h5>
                        <p>With a scientific approach to design, we develop the right UX that drives product adoption</p>
                        <p>Across both, online as well as offline channels we provide a business's user base with a universal customer experience</p>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default PortfolioSingleDetails;