import React, {Fragment} from 'react';
import AboutIntro from "../../components/AboutIntro";
import AboutDigitalStudio from "../../components/AboutDigitalStudio";
import DigitalStudio from "../../components/DigitalStudio";
import Footer from "../../components/Footer";
import ContactUs from "../../components/ContactUs";
import OurExpert from "../../components/OurExpert";
import BreadCrumb from "../../components/BreadCrumb";

const AboutUs = () => {
    return(
        <Fragment>
            <BreadCrumb
                title="Creative Agency Template"
                pagename="About us"
            />
            <AboutIntro/>
            <DigitalStudio/>
            <AboutDigitalStudio className="pt-0 pb-120" />
            <OurExpert/>
            <ContactUs/>
            <Footer/>
        </Fragment>
    )
};

export default AboutUs;