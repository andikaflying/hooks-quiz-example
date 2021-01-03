import React, {Fragment} from 'react';
import Footer from "../../components/Footer";
import WorkInquiry from "../../components/WorkInquiry";
import BreadCrumb from "../../components/BreadCrumb";
import PortfolioSingleDetails from "../../components/PortfolioSingleDetails";

import './style.scss';

const PortfolioSingle = () => {
    return(
            <Fragment>
                <BreadCrumb
                    pagename="Creative Protfolio"
                    title="Creative Digital Agency"
                />
                <PortfolioSingleDetails/>
                <WorkInquiry className="hasMb" />
                <Footer/>
            </Fragment>
    )
};

export default PortfolioSingle;