import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import FontAwesome from "../UiStyle/FontAwesome";
import Button from "@material-ui/core/Button";

import footerBgShape from '../../images/footer-bg.svg';
import logo from '../../images/logo.svg';

import './style.scss';

const sociallinks = [
    {
        id: 1,
        name: 'facebook',
    },
    {
        id: 2,
        name: 'linkedin',
    },
    {
        id: 3,
        name: 'dribbble',
    },
    {
        id: 4,
        name: 'twitter',
    },
];

const Footer = () => {
    const [activeSocial, setSocial] = useState(1);
    return(
        <Grid className="footerWrapper">
            <Grid container className="container" spacing={4}>
                <Grid item xs={12} md={3}>
                    <Grid className="footerContact">
                        <Link to="/"><img src={logo} alt="logo"/></Link>
                        <p>1nd Floor, No.21, 80-feet Road, Cadarso 19 bis, loft 2 28008 Madrid (USA)</p>
                        <ul>
                            <li>202-555-0191</li>
                            <li>office23@gmail.com</li>
                        </ul>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={3} sm={6}>
                    <Grid className="widget haslpadding">
                        <h4 className="widgetTitle">Quick Link</h4>
                        <ul className="quickLinks">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about-us">About us</Link></li>
                            <li><Link to="/contact-us">Contact</Link></li>
                            <li><Link to="/marketing">Marketing</Link></li>
                        </ul>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={2} sm={6}>
                    <h4 className="widgetTitle">Services</h4>
                    <ul className="quickLinks">
                        <li><Link to="/">Faq</Link></li>
                        <li><Link to="/">Customer Support</Link></li>
                        <li><Link to="/">Privacy Policy</Link></li>
                        <li><Link to="/">Careers</Link></li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                    <h4 className="widgetTitle">Newsletter</h4>
                    <form className="ftNewsletter">
                        <input type="text" placeholder="Your Email" />
                        <Button className="cBtn">Send</Button>
                    </form>
                    <ul className="socialLinks">
                        {sociallinks.map(item => {
                            return <li key={item.id}><Link className={activeSocial === item.id ? 'active' : ''} onMouseEnter={() => setSocial(item.id)} to="/"><FontAwesome name={item.name} /></Link></li>;
                        })}
                    </ul>
                </Grid>
            </Grid>
            <Grid className="container">
                <Grid className="footerBottom">
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <p>Copyrights 2019 Template_ammelias</p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <img className="footerBgShape" src={footerBgShape} alt="footerBgShape"/>
        </Grid>
    )
};

export default Footer;