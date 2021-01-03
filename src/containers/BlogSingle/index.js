import React, {Fragment, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Footer from "../../components/Footer";
import NewsLetter from "../../components/NewsLetter";
import blogImg1 from "../../images/blog/blog-img1.jpg";
import blogImg2 from "../../images/blog/blog-img2.jpg";
import blogImg3 from "../../images/blog/blog-img3.jpg";
import blogImg4 from "../../images/blog/blog-img4.jpg";
import blogImg5 from "../../images/blog/blog-img5.jpg";
import Comments from "../../components/Comments";
import CommentForm from "../../components/CommentForm";
import FontAwesome from "../../components/UiStyle/FontAwesome";
import {Link} from "react-router-dom";

import blogImgd from "../../images/blog/blog-details.jpg";

import './style.scss';
import BreadCrumb from "../../components/BreadCrumb";

const blogPosts = [
    {
        id: 1,
        image: blogImg1,
        cat: 'Design',
        created_at: 'April 15 , 2019 ',
        title: 'Web development is a best work in future world',
        body: 'In a tech world when it comes to design, UI UX design go hand in hand. You can often hear people talking about a good UI of an app or a weak UX design of a website'
    },
    {
        id: 2,
        image: blogImg2,
        cat: 'Design',
        created_at: 'April 15 , 2019 ',
        title: 'Our Student Survey for National Careers Week',
        body: 'In a tech world when it comes to design, UI UX design go hand in hand. You can often hear people talking about a good UI of an app or a weak UX design of a website'
    },
    {
        id: 3,
        image: blogImg3,
        cat: 'Design',
        created_at: 'April 15 , 2019 ',
        title: 'Web development is a best work in future world',
        body: 'In a tech world when it comes to design, UI UX design go hand in hand. You can often hear people talking about a good UI of an app or a weak UX design of a website'
    },
    {
        id: 4,
        image: blogImg4,
        video_id: 'a4KNQZBb1jA',
        cat: 'Design',
        created_at: 'April 15 , 2019 ',
        title: 'You can trust me and business with together',
        body: 'In a tech world when it comes to design, UI UX design go hand in hand. You can often hear people talking about a good UI of an app or a weak UX design of a website'
    },
    {
        id: 5,
        image: blogImg5,
        cat: 'Design',
        created_at: 'April 15 , 2019 ',
        title: 'Web development is a best work in future world',
        body: 'In a tech world when it comes to design, UI UX design go hand in hand. You can often hear people talking about a good UI of an app or a weak UX design of a website'
    },
];

const comments = [
    {
        id: 1,
        name: 'Tamim anj',
        created_at: '15 april, 2019',
        comment: 'Before we begin to build your home, we want to get to know you.Through our design process, we will be asking',
        reply: [
            {
                id: 1,
                name: 'Mahfuz Riad',
                created_at: '8 April, 2019',
                comment: 'Can you imagine what we will be downloading in another twenty years?',
            },
        ]
    },
    {
        id: 2,
        name: 'Riad M.',
        created_at: '10 April 2019',
        comment: 'We’ve also updated the account page to provide more insight into your connected accounts. The new header surfaces more information',
    },
];

const BlogSingle = () => {

    const [allComments, setComments] = useState(comments);
    const [isload, setLoad] = useState(false);

    function setCommentsHandler(data) {

        let newcom = allComments;
        newcom.unshift(data);
        setComments(newcom);
        setLoad(!isload);
    }

    return(
        <Fragment>
            <BreadCrumb
                title="Blog Details"
            />
            <Grid className="blogListsBanner pb-70">
                <Grid className="container" container spacing={4}>
                    <Grid item xs={12} md={8}>
                        <div className="content textLeft">
                            <h2>UI / UX Design Explained. And What It Means to Business</h2>
                            <span className="date"><FontAwesome name="calendar" /> April 15 , 2019 </span>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid  className="container" container spacing={4}>
                <Grid item xs={12} md={8}>
                    <Grid className="postDetails">
                        <img src={blogImgd} alt=""/>
                        <p>So what is UX/UI? Just some fancy terms cool designer kids are using? What is the difference between UI ad UX or is it the same thing?  And more importantly, what’s in it for you and your business?</p>
                        <h2>UI vs UX Design: Know Your Acronyms</h2>
                        <p>UX and UI are two areas of design that are often confused. UX stands for ‘User Experience’ and UI means ‘User Interface’. The two terms have been widely used and overused and to an outsider may sound a bit intimidating.</p>
                        <p>A potential alternative to offering a discount is to go for a product bundle instead. Bundles allow you to give more value to your potential customers for a lower price. This could come in the form of templates or extra tutorial videos, exclusive to this Black Friday.</p>
                        <p>Let’s start with the UX. ‘User Experience’ goes back to the 90s when the term was coined by Donald Norman, Apple’s VP of the Advanced Technology Group at that time</p>
                        <p>In an email explaining how he came up with it, he wrote, “I invented the term because I thought human interface and usability were too narrow. I wanted to cover all aspects of the person’s experience with the system including industrial design</p>
                        <blockquote>
                            <p>Johnson Banks’ open source rebrand of Mozilla put the award-winning agency’s thorough creative process firmly in the public eye</p>
                        </blockquote>
                        <p>In terms of buying behavior, people just aren’t wired to purchase intangible gifts on Black Friday. If you’re still interested in gifting or believe it will have value for your product, check out the implementation guide we released last year on the subject.</p>
                        <p>In it, he breaks down the five steps in Johnson Banks’ branding process – including a fluid ‘half-step’ between strategy and design – and explains how it all works, from the perspective of a world-class studio.</p>

                        <Grid className="shareBlogPost">
                            <h5>Share The Post</h5>
                            <ul className="socials">
                                <li><Link to="/"><FontAwesome name="facebook" /></Link></li>
                                <li><Link to="/"><FontAwesome name="linkedin" /></Link></li>
                                <li><Link to="/"><FontAwesome name="google-plus" /></Link></li>
                                <li><Link to="/"><FontAwesome name="twitter" /></Link></li>
                            </ul>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Grid className="sidebarArea">
                        {/*widget category*/}
                        <Grid className="widget widgetCategory">
                            <h3 className="widgetTitle">Categories</h3>
                            <ul className="widgetList">
                                <li><Link to="/blog-details/1">Categories<span>05</span></Link></li>
                                <li><Link to="/blog-details/1">Digital Studio<span>54</span></Link></li>
                                <li><Link to="/blog-details/1">Creative Agency<span>32</span></Link></li>
                                <li><Link to="/blog-details/1">Digital Photography<span>3</span></Link></li>
                                <li><Link to="/blog-details/1">Business<span>124</span></Link></li>
                            </ul>
                        </Grid>
                        {/*widget recent post*/}
                        <Grid className="widget widgetRecentPost">
                            <h3 className="widgetTitle">Recent Post</h3>
                            {blogPosts.map(item => {
                                return(
                                    <Grid key={item.id} className="rcSinglePost">
                                        <div className="thumb">
                                            <img src={item.image} alt="thumb"/>
                                        </div>
                                        <div className="content">
                                            <h5><Link to={`/blog-details/${item.id}`}>{item.title}</Link></h5>
                                            <p className="date"><FontAwesome name="calendar"/>{item.created_at}</p>
                                        </div>
                                    </Grid>
                                )
                            })}
                        </Grid>
                        {/*widget keyword*/}
                        <Grid className="widget widgetKeywords">
                            <h3 className="widgetTitle">Keywords</h3>
                            <Link to="/blog-details/1">business</Link>
                            <Link to="/blog-details/1">Design</Link>
                            <Link to="/blog-details/1">Agency</Link>
                            <Link to="/blog-details/1">Infography</Link>
                            <Link to="/blog-details/1">Design</Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className="relatedPost">
                <Grid container className="container p0" spacing={0}>
                    <Grid item xs={12}>
                        <Grid  className="container" container spacing={4}>
                            {blogPosts.splice(0, 3).map(item => {
                                return(
                                    <Grid key={item.id} item xs={12} sm={6} md={4}>
                                        <Grid className="brelatedPost">
                                            <Grid className="thumb">
                                                <img src={item.image} alt=""/>
                                            </Grid>
                                            <Grid className="content">
                                                <h2><Link to={`/blog-details/${item.id}`}>{item.title}</Link></h2>
                                                <Link className="readmore" to={`/blog-details/${item.id}`}>Read more</Link>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container className="container" spacing={4}>
                <Grid item xs={12} md={7}>
                    {isload ? <Comments comments={allComments} /> : <Comments comments={allComments} />}
                </Grid>
                <Grid item xs={12} md={5}>
                    <CommentForm setCommentsHandler={setCommentsHandler}/>
                </Grid>
            </Grid>
            <NewsLetter/>
            <Footer/>
        </Fragment>
    )
};

export default BlogSingle;