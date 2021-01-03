import React from 'react';
import {Grid} from "@material-ui/core";

// images
import iconBg1 from '../../images/iconbg1.png';
import iconBg2 from '../../images/iconbg2.png';
import iconBg3 from '../../images/iconbg3.png';
import iconBg4 from '../../images/iconbg4.png';
import iconBg5 from '../../images/iconbg5.png';
import lineShape from '../../images/linehsape.png';

import './style.scss';

const DigitalStudio = () => {
    return(
        <Grid className="digitalStudio">
            <Grid className="container" container alignItems="center" spacing={4}>
                <Grid item xs={12} md={6}>
                    <Grid className="textContent">
                        <strong>Know About Ammelias</strong>
                        <h4>We Help To Increase Sales By Improving SEO.</h4>
                        <p>Nam quis laoreet nisl. Vivamus nec quam magna.interdum etus blandit hendrerit ornare. Sed id leo nulla.</p>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid className="digitalStudioContent">
                        <div className="dstudioItem">
                            <img src={iconBg1} alt=""/>
                            <Grid className="content">
                                <p>Projects</p>
                                <h4>30k</h4>
                            </Grid>
                        </div>
                        <div className="dstudioItem">
                            <img src={iconBg3} alt=""/>
                            <Grid className="content">
                                <p>Cups of Coffee</p>
                                <h4>10k</h4>
                            </Grid>
                        </div>
                        <div className="dstudioItem">
                            <img src={iconBg2} alt=""/>
                            <Grid className="content">
                                <p>Projects</p>
                                <h4>32k</h4>
                            </Grid>
                        </div>
                        <div className="dstudioItem">
                            <img src={iconBg4} alt=""/>
                            <Grid className="content">
                                <p>Customer</p>
                                <h4>80k</h4>
                            </Grid>
                        </div>
                        <div className="dstudioItem">
                            <img src={iconBg5} alt=""/>
                            <Grid className="content">
                                <p>Clients</p>
                                <h4>60k</h4>
                            </Grid>
                        </div>
                        <img src={lineShape} alt="" className="lineShape"/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default DigitalStudio;