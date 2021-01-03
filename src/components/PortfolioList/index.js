import React from 'react';
import Grid from "@material-ui/core/Grid";
import SectionTitle from "../SectionTitle";

import portimg1 from '../../images/portfolio/portfolio-img1.jpg';
import portimg2 from '../../images/portfolio/portfolio-img2.jpg';
import portimg3 from '../../images/portfolio/portfolio-img3.jpg';
import portimg4 from '../../images/portfolio/portfolio-img4.jpg';

import './style.scss';
import {Link} from "react-router-dom";

const portfolioLists = [
    {
        id: 1,
        image: portimg1,
        cat: 'Creative design',
        title: 'Hannover Fair CTA Germany',
        body: 'Creating and preparing the interactive part of the ABB exhibition for one of the world\'s largest trade fairs, Hannover Messe 2017. The exhibition’s leading Template '
    },
    {
        id: 2,
        image: portimg2,
        cat: 'Infographics',
        title: 'The Duke of Edinburgh\'s Awar',
        body: 'Creating and preparing the interactive part of the ABB exhibition for one of the world\'s largest trade fairs, Hannover Messe 2017. The exhibition’s leading Template '
    },
    {
        id: 3,
        image: portimg3,
        cat: 'Infographics',
        title: 'Hospitality Line',
        body: 'Creating and preparing the interactive part of the ABB exhibition for one of the world\'s largest trade fairs, Hannover Messe 2017. The exhibition’s leading Template '
    },
    {
        id: 4,
        image: portimg4,
        cat: 'Digital maketing',
        title: 'Tiger Awareness',
        body: 'Creating and preparing the interactive part of the ABB exhibition for one of the world\'s largest trade fairs, Hannover Messe 2017. The exhibition’s leading Template '
    },
];

const PortfolioList = () => {
    return(
        <Grid className="portfolioListArea">
            <SectionTitle
                subtitle="Latest Portfolio"
                title="Some of our Portfolio"
                body="Consider us your team of problem-solvers. We treat every agency campaign with a unique approach "
            />
            <Grid className="container" container spacing={4}>
                <Grid item xs={12}>
                    <Grid className="portfolioList">
                        <Grid container spacing={4}>
                            {portfolioLists.map(item => {
                                return(
                                    <Grid key={item.id} item xs={12} sm={6}>
                                        <Grid className="portSingle">
                                            <Grid className="thumb">
                                                <img src={item.image} alt=""/>
                                            </Grid>
                                            <Grid className="content">
                                                <span>{item.cat}</span>
                                                <h2><Link to="/portfolio-single">{item.title}</Link></h2>
                                                <p>{item.body}</p>
                                                <Link to="/portfolio-single" className="cBtn cBtnRadius cBtnUppercase" >Read More</Link>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default PortfolioList;