import React, {Fragment} from 'react';
import PortfolioList from "../../components/PortfolioList";
import WorkInquiry from "../../components/WorkInquiry";
import NewsLetter from "../../components/NewsLetter";
import Footer from "../../components/Footer";

import './style.scss';
import BreadCrumb from "../../components/BreadCrumb";

const Portfolio = () => {
    return(
        <Fragment>
            <BreadCrumb
                title="Kuis Hafalan Surat"
            />
            <NewsLetter/>
        </Fragment>
    )
};

export default Portfolio;