import React, { Fragment } from 'react'
import {Link} from "react-router-dom";

// images
import payment from '../images/mockup/payment.png';
import refferal from '../images/mockup/refferal.png';
import shape2 from '../images/shape/shape2.svg'
import shape3 from '../images/shape/shape3.svg'
import shape5 from '../images/shape/shape6.svg'
import shape4 from '../images/shape/shape4.svg'


const PreviewFeaturedAwesome = () => {
    return (
        <Fragment>
            <div className="previewFeaturedArea " id="features">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="featuredContent">
                                <h2>Easy Customization & Fully Responsive Template.</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy when Lorem Ipsum is simply dummy text of the printing and typesetting industry I completely follow all your instructions.</p>
                                <Link to="/">Know More</Link>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="featuredImg featuredImgOne">
                                <img src={payment} alt="payment" />
                                <span className="poa zI-1 pshape2 bounceAnimation">
                                    <img src={shape2} alt="" />
                                </span>
                                <span className="poa zI-1 L-0 pshape3 bounceAnimationTop">
                                    <img src={shape3} alt="" />
                                </span>
                                <span className="poa zI-1 L-0 pshape4 circleAnimation">
                                    <img src={shape4} alt="" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="previewFeaturedArea pt-0" id="features">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="featuredImg featuredImgTwo">
                                <img src={refferal} alt="payment" />
                                <span className="poa zI-1 pshape2 bounceAnimation">
                                    <img src={shape2} alt="" />
                                </span>
                                <span className="poa zI-1 L-0 pshape3 bounceAnimationTop">
                                    <img src={shape5} alt="" />
                                </span>
                                <span className="poa zI-1 L-0 pshape4 circleAnimation">
                                    <img src={shape4} alt="" />
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="featuredContent">
                                <h2>Easy Customization & Fully Responsive Template.</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy when Lorem Ipsum is simply dummy text of the printing and typesetting industry I completely follow all your instructions.</p>
                                <Link to="/">Know More</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default PreviewFeaturedAwesome