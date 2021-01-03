import React from 'react';
import workinquiry from "../../images/work-inquiry.png";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import './style.scss';

const WorkInquiry = ({className}) => {
    return(
        <Grid className={`container ${className}`} container spacing={4}>
            <Grid item xs={12} md={12}>
                <Grid className="textContent">
                    <strong>Say hello!</strong>
                    <h2>Work inquiry</h2>
                    <h5>
                        <p>Is to deliver awesome for our clients. By awesome, this should be a tangible impact on their business</p>
                    </h5>
                    <p>We exist as a partner to businesses, crafting strategies that are aligned with our client’s business goals.</p>
                    <Link to="/contact-us" className="cBtn cBtnUppercase">Work with us</Link>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default WorkInquiry;