import React from 'react';
import Slider from "react-slick";
import Grid from "@material-ui/core/Grid";
import SectionTitle from "../SectionTitle";

import andika from "../../images/team/andika.jpeg";
import rizkia from "../../images/team/rizkia.jpg";
import hedy from "../../images/team/hedy.jpeg";
import wahyu from "../../images/team/wahyu.jpg";
import nextIcon from '../../images/icon/next.png';
import prevIcon from '../../images/icon/prev.png';
import bgShape2 from '../../images/bg-shape-n2.png';

import './style.scss';

const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ],
};

const ourteam = [
    {
        id: 1,
        thumb: andika,
        name: 'Andika Kurniawan',
        profession: 'Senior Software Engineer'
    },
    {
        id: 2,
        thumb: rizkia,
        name: 'Fyka Rizkia Auliandy',
        profession: 'Software Engineer'
    },
    {
        id: 3,
        thumb: wahyu,
        name: 'Wahyu Dwi Nurhalim',
        profession: 'Designer'
    },
];

class OurExpert extends React.Component{

    nextHandler = () => {
        this.slider.slickNext();
    };
    prevHandler = () => {
        this.slider.slickPrev();
    };

    render() {
        return(
            <Grid className="ourExpertWrapper">
                <Grid container className="container">
                    <Grid item xs={12}>
                        <SectionTitle
                            title="Pembuat - Pembuat"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid className="ourExpert">
                            <Slider {...settings} ref={slider => (this.slider = slider)} {...settings}>
                                {ourteam.map(item => {
                                    return(
                                        <Grid key={item.id} className="expertTeam">
                                            <Grid className="thumb">
                                                <img src={item.thumb} alt=""/>
                                            </Grid>
                                            <Grid className="content">
                                                <h4>{item.name}</h4>
                                                <p>{item.profession}</p>
                                            </Grid>
                                        </Grid>
                                    )
                                })}
                            </Slider>
                            <ul className="sliderNav">
                                <li onClick={this.prevHandler}><img src={prevIcon} alt="prev"/></li>
                                <li onClick={this.nextHandler}><img src={nextIcon} alt="next"/></li>
                            </ul>
                        </Grid>
                    </Grid>
                </Grid>
                <img className="bgShape2" src={bgShape2} alt="bgShape2"/>
            </Grid>
        )
    }
}

export default OurExpert;