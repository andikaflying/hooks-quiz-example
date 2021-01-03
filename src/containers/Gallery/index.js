import React, {Fragment} from 'react';
import WorkInquiry from "../../components/WorkInquiry";
import Footer from "../../components/Footer";
import PortfolioMasonary from "../../components/PortfolioMasonary";
import BreadCrumb from "../../components/BreadCrumb";

const Gallery = () => {
    return(
        <Fragment>
            <BreadCrumb
                pagename="Creative Protfolio"
                title="Creative Digital Agency"
            />
            <PortfolioMasonary/>
            <WorkInquiry className="hasMb"/>
            <Footer/>
        </Fragment>
    )
};

export default Gallery;