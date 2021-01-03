import React, {Fragment} from 'react';
import Featured from "../../components/Featured";
import Footer from "../../components/Footer";
import BreadCrumb from "../../components/BreadCrumb";
import HireUs from "../../components/HireUs";

// images
import icon1 from "../../images/icon/objective.png";
import icon2 from "../../images/icon/feature-icon1.png";
import icon3 from "../../images/icon/research.png";
import icon4 from "../../images/icon/bar-chart.png";
import icon5 from "../../images/icon/share.png";
import icon6 from "../../images/icon/advertising.png";


const featured = [
    {
        id: 1,
        icon: icon1,
        title: 'Web Design & Development',
        body: 'Let us put your website in front of consumers at the moment in time they are searching for your products & services.',
    },
    {
        id: 2,
        icon: icon2,
        title: 'Rech Influencer Marketing',
        body: 'Working together, we will use our knowledge of SEO to bring more leads to your business through your website.',
    },
    {
        id: 3,
        icon: icon3,
        title: 'Reporting Analysis',
        body: 'The same way you review and analyze your job reports by cost, ROI, customer satisfaction  and much more',
    },
    {
        id: 4,
        icon: icon4,
        title: 'Web Design & Development',
        body: 'Let us put your website in front of consumers at the moment in time they are searching for your products & services.',
    },
    {
        id: 5,
        icon: icon5,
        title: 'Reporting Analysis',
        body: 'Working together, we will use our knowledge of SEO to bring more leads to your business through your website.',
    },
    {
        id: 6,
        icon: icon6,
        title: 'Social Media Advertising',
        body: 'The same way you review and analyze your job reports by cost, ROI, customer satisfaction  and much more',
    },
];

const Services =() => {
    return(
        <Fragment>
            <BreadCrumb
                pagename="Our Services"
                title="Creative Agency Services"
            />
            <Featured featured={featured} className="allFeaturs" />
            <HireUs/>
            <Footer/>
        </Fragment>
    )
};
export default Services;