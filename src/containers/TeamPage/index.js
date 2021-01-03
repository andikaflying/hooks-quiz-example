import React, {Fragment} from 'react';
import Footer from "../../components/Footer";
import BreadCrumb from "../../components/BreadCrumb";
import HireUs from "../../components/HireUs";

import Grid from "@material-ui/core/Grid";
import thumb1 from "../../images/team/team1.jpg";

import './style.scss';

const ourteam = [
    {
        id: 1,
        thumb: thumb1,
        name: 'Rashadul Islam',
        profession: 'FrontEnd Developer'
    },
    {
        id: 2,
        thumb: thumb1,
        name: 'Fhata kesto',
        profession: 'Content Creation Expert'
    },
    {
        id: 3,
        thumb: thumb1,
        name: 'Mui kida',
        profession: ' Social Media Expert'
    },
    {
        id: 4,
        thumb: thumb1,
        name: 'Foqrul islam',
        profession: 'Content Creation Expert'
    },
    {
        id: 5,
        thumb: thumb1,
        name: 'Rashadul Islam',
        profession: 'FrontEnd Developer'
    },
    {
        id: 6,
        thumb: thumb1,
        name: 'Fhata kesto',
        profession: 'Content Creation Expert'
    },
    {
        id: 7,
        thumb: thumb1,
        name: 'Mui kida',
        profession: ' Social Media Expert'
    },
    {
        id: 8,
        thumb: thumb1,
        name: 'Foqrul islam',
        profession: 'Content Creation Expert'
    },
    {
        id: 9,
        thumb: thumb1,
        name: 'John doe',
        profession: 'Expert'
    },
];

const TeamPage =() => {
    return(
        <Fragment>
            <BreadCrumb
                pagename="Team"
                title="Our Expert Team member"
            />

            <Grid className="allTeam">
                <Grid container className="container">
                    {ourteam.map(item => {
                        return(
                            <Grid key={item.id} item sm={6} md={4} xs={12}>
                                <Grid className="expertTeam mb-30">
                                    <Grid className="thumb">
                                        <img src={item.thumb} alt=""/>
                                    </Grid>
                                    <Grid className="content">
                                        <h4>{item.name}</h4>
                                        <p>{item.profession}</p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>

            <HireUs/>
            <Footer/>
        </Fragment>
    )
};
export default TeamPage;