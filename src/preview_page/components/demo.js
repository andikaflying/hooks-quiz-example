import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import PreviewSectionTitle from './SectionTitle'

// images 
import home from '../images/demo/home.jpg';
import about from '../images/demo/about-us.jpg';
import blog from '../images/demo/blog.jpg';
import blogDetails from '../images/demo/blog-details.jpg';
import contact from '../images/demo/contact-us.jpg';
import gallery from '../images/demo/gallery.jpg';
import portfolio from '../images/demo/portfolio.jpg';
import service from '../images/demo/services.jpg';
import portfolioSingle from '../images/demo/portfolio-single.jpg';
import team from '../images/demo/team.jpg';
import login from '../images/demo/login.jpg';
import signup from '../images/demo/signup.jpg';

const demos = [
    { name: 'Home Page', image: home, link: 'home' },
    { name: 'About Us', image: about, link: 'about-us' },
    { name: 'Service', image: service, link: 'services' },
    { name: 'Blog', image: blog, link: 'blog' },
    { name: 'Blog Details', image: blogDetails, link: 'blog-details/1' },
    { name: 'Portfolio', image: portfolio, link: 'portfolio' },
    { name: 'Portfolio Single', image: portfolioSingle, link: 'portfolio-single' },
    { name: 'Contact us', image: contact, link: 'contact-us' },
    { name: 'Gallery', image: gallery, link: 'gallery' },
    { name: 'Our Team', image: team, link: 'team' },
    { name: 'Login', image: login, link: 'login' },
    { name: 'Sign up', image: signup, link: 'signup' },
];

const PreviewDemo = () => {
    return (
        <Fragment>
            <div className="previewDemoArea" id="demo">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <PreviewSectionTitle
                                title="Demo"
                                text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                            />
                        </div>
                        {demos.map((demo, i) => (
                            <div key={i} className="col-sm-6 col-12">
                                <div className="demoWrapper">
                                    <Link className="demoInfo" target="_blank" to={`/${demo.link}`}>{demo.name}</Link>
                                    <div className="demoImg">
                                        {demo.new && <span> {demo.new} </span>}
                                        <img src={demo.image} alt="" />
                                    </div>
                                    <div className="demoContent">
                                        <h3>{demo.name}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default PreviewDemo