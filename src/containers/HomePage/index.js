import React, {Fragment} from 'react';
import HeroArea from "../../components/HeroArea";
import Featured from "../../components/Featured";
import AboutAgency from "../../components/AboutAgency";
import DigitalStudio from "../../components/DigitalStudio";
import Testimonial from "../../components/Testimonial";
import OurExpert from "../../components/OurExpert";
import PricingPlan from "../../components/PricingPlan";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";

import icon1 from "../../images/icon/feature-icon1.png";
import icon2 from "../../images/icon/feature-icon1.png";
import icon3 from "../../images/icon/feature-icon1.png";
import BlogSection from "../../components/BlogSection";

const featured = [
    {
        id: 1,
        icon: icon1,
        title: 'USER INTERFACE DESIGN',
        body: 'Let us put your website consumers at moment in time they are searching your products services.',
    },
    {
        id: 2,
        icon: icon2,
        title: 'USER INTERFACE DESIGN',
        body: 'Let us put your website consumers at moment in time they are searching your products services.',
    },
    {
        id: 3,
        icon: icon3,
        title: 'USER INTERFACE DESIGN',
        body: 'Let us put your website consumers at moment in time they are searching your products services.',
    },
];

const HomePage =() => {
    return(
        <Fragment>
            <HeroArea/>
            <OurExpert/>
            <ContactUs/>
        </Fragment>
    )
};
export default HomePage;