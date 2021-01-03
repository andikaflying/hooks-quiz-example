import React, {Fragment} from 'react';
import NewsLetter from "../../components/NewsLetter";
import Footer from "../../components/Footer";
import ContactInfoList from "../../components/ContactInfoList";
import ContactUs from "../../components/ContactUs";
import BreadCrumb from "../../components/BreadCrumb";

import './style.scss';

const ContactUsPage = () => {
    return(
        <Fragment>
            <BreadCrumb
                pagename="Contact us"
                title="Where We Are? Let's Find Out!"
            />
            <ContactInfoList/>
            <ContactUs/>
            <NewsLetter
                className="pt-0"
            />
            <Footer/>
        </Fragment>
    )
};

export default ContactUsPage;