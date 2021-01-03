import React from 'react';
import SectionTitle from "../SectionTitle";
import Grid from "@material-ui/core/Grid";
import Slider from "react-slick";
import FontAwesome from "../UiStyle/FontAwesome";

import blogPostsImg1 from '../../images/blog/blog-post1.jpg';
import blogPostsImg2 from '../../images/blog/blog-post2.jpg';
import blogPostsImg3 from '../../images/blog/blog-post3.jpg';
import nextIcon from '../../images/icon/next.png';
import prevIcon from '../../images/icon/prev.png';

import './style.scss';
import {Link} from "react-router-dom";

const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1920,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
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

const blogLists = [
    {
        id: 1,
        thumb: blogPostsImg1,
        title: 'Lorem ipsum dolor sit amet, consectetur adipscing fusce hendrerit rutrumfe.',
        author: 'By Rasheda Kabir',
        created_at: '16 August 2019',
    },
    {
        id: 2,
        thumb: blogPostsImg2,
        title: 'Lorem ipsum dolor sit amet, consectetur adipscing fusce hendrerit rutrumfe.',
        author: 'By Rasheda Kabir',
        created_at: '16 August 2019',
    },
    {
        id: 3,
        thumb: blogPostsImg3,
        title: 'Lorem ipsum dolor sit amet, consectetur adipscing fusce hendrerit rutrumfe.',
        author: 'By Rasheda Kabir',
        created_at: '16 August 2019',
    },
    {
        id: 4,
        thumb: blogPostsImg2,
        title: 'Lorem ipsum dolor sit amet, consectetur adipscing fusce hendrerit rutrumfe.',
        author: 'By Rasheda Kabir',
        created_at: '16 August 2019',
    },
];

class BlogSection extends React.Component{

    nextHandler = () => {
        this.slider.slickNext();
    };
    prevHandler = () => {
        this.slider.slickPrev();
    };

    render() {
        return (
            <Grid className="BlogSection">
                <Grid container>
                    <Grid item xs={12}>
                        <SectionTitle
                            title="Check Our Company News"
                            subtitle="Our Blog"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Slider {...settings} ref={slider => (this.slider = slider)} {...settings}>
                            {blogLists.map(item => {
                                return(
                                    <Grid key={item.id} className="singleBlog">
                                        <Grid className="thumb">
                                            <img src={item.thumb} alt=""/>
                                        </Grid>
                                        <Grid className="content">
                                            <Grid className="metaTop">
                                                <p><FontAwesome name="user" /> {item.author}</p>
                                                <p><FontAwesome name="clock" /> {item.created_at}</p>
                                            </Grid>
                                            <h4><Link to="/blog-details/1">{item.title}</Link></h4>
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
        );
    }
}

export default BlogSection;