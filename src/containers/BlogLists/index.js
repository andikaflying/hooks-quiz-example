import React, {Fragment, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Footer from "../../components/Footer";
import NewsLetter from "../../components/NewsLetter";
import BlogItem from "../../components/BlogItem";
import ModalVideo from 'react-modal-video';

import blogImg1 from '../../images/blog/blog-img1.jpg';
import blogImg2 from '../../images/blog/blog-img2.jpg';
import blogImg3 from '../../images/blog/blog-img3.jpg';
import blogImg4 from '../../images/blog/blog-img4.jpg';
import blogImg5 from '../../images/blog/blog-img5.jpg';

import './style.scss';
import FontAwesome from "../../components/UiStyle/FontAwesome";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";

const blogPosts = [
    {
        id: 1,
        image: blogImg1,
        created_at: 'April 15 , 2019 ',
        title: 'Excepteur Sint Ocaecat Alit If Cupidatat Non Proident.',
        body: 'We’re a creative agency. Ask us about distinctive branding and clean design. We will find the best solution. Take a look at our portfolio.'
    },
    {
        id: 2,
        image: blogImg2,
        created_at: 'April 15 , 2019 ',
        title: 'Excepteur Sint Ocaecat Alit If Cupidatat Non Proident.',
        body: 'We’re a creative agency. Ask us about distinctive branding and clean design. We will find the best solution. Take a look at our portfolio.'
    },
    {
        id: 3,
        image: blogImg3,
        created_at: 'April 15 , 2019 ',
        title: 'Excepteur Sint Ocaecat Alit If Cupidatat Non Proident.',
        body: 'We’re a creative agency. Ask us about distinctive branding and clean design. We will find the best solution. Take a look at our portfolio.'
    },
    {
        id: 4,
        image: blogImg4,
        created_at: 'April 15 , 2019 ',
        title: 'Excepteur Sint Ocaecat Alit If Cupidatat Non Proident.',
        body: 'We’re a creative agency. Ask us about distinctive branding and clean design. We will find the best solution. Take a look at our portfolio.'
    },
    {
        id: 5,
        image: blogImg5,
        created_at: 'April 15 , 2019 ',
        title: 'Excepteur Sint Ocaecat Alit If Cupidatat Non Proident.',
        body: 'We’re a creative agency. Ask us about distinctive branding and clean design. We will find the best solution. Take a look at our portfolio.'
    },
];

const BlogLists = () => {
    const [search, setSearch] = useState('');

    function searchFilter(row, search) {
        return row.title.toLowerCase().includes(search.toLowerCase()) || !search;
    }

    function submitHandler(e) {
        e.preventDefault();
    }

    return(
        <Fragment>
            <BreadCrumb
                pagename="Awesome Blog"
                title="We have nice blog's"
            />
            <Grid className="allblogs">
                <Grid  className="container" container spacing={4}>
                    <Grid item xs={12} md={8}>
                        {blogPosts.filter(row => searchFilter(row, search)).map(item => {
                            return(
                                <BlogItem key={item.id} item={item}/>
                            )
                        })}
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Grid className="sidebarArea">
                            {/*widget search */}
                            <Grid className="widget widgetSearch">
                                <form onSubmit={e => submitHandler(e)}>
                                    <input onChange={e => setSearch(e.target.value)} type="text" placeholder="Search" />
                                    <Button><FontAwesome name="search" /></Button>
                                </form>
                            </Grid>
                            {/*widget category*/}
                            <Grid className="widget widgetCategory">
                                <h3 className="widgetTitle">Categories</h3>
                                <ul className="widgetList">
                                    <li><Link to="/">Categories<span>05</span></Link></li>
                                    <li><Link to="/">Digital Studio<span>54</span></Link></li>
                                    <li><Link to="/">Creative Agency<span>32</span></Link></li>
                                    <li><Link to="/">Digital Photography<span>3</span></Link></li>
                                    <li><Link to="/">Business<span>124</span></Link></li>
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
                                <Link to="/">business</Link>
                                <Link to="/">Design</Link>
                                <Link to="/">Agency</Link>
                                <Link to="/">Infography</Link>
                                <Link to="/">Design</Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <NewsLetter className="pd-mt-40" />
            <Footer/>
        </Fragment>
    )
};

export default BlogLists;