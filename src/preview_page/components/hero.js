import React from 'react'
import Particles from 'react-particles-js';
import {Link} from "react-router-dom";
// images
import hero from '../images/mockup/laptop.png'

// shape
import star5 from '../images/shape/hero/5star.svg'
import roundShape from '../images/shape/hero/round_shape.svg'
import shape1 from '../images/shape/hero/shape1.svg'
import shape2 from '../images/shape/hero/shape2.svg'
import shape3 from '../images/shape/hero/shape3.svg'
import star from '../images/shape/hero/star.svg'
import starStock from '../images/shape/hero/star_stock.svg'
import stockShape from '../images/shape/hero/stock_shape.svg'

const PreviewHero = () => {
    return (
        <div className="previewHeroArea" id="home">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-12">
                        <div className="heroContent">
                            <h2>Ammelias Creative Agency Template</h2>
                            <p>There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration.There are
                            many There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration.There are
                            many.</p>
                            <Link to="/">buy now</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="heroImage">
                <img src={hero} alt="" />
            </div>


            <Particles
                className="particaleWrapper"
                params={{
                    particles: {
                        number: {
                            value: 8,
                            density: {
                                enable: true,
                                value_area: 800
                            }
                        },
                        line_linked: {
                            enable: false
                        },
                        move: {
                            speed: 1.5,
                            out_mode: "in"
                        },
                        shape: {
                            type: [
                                "images",
                                "circle"
                            ],
                            images: [
                                {
                                    src: `${star5}`,
                                    height: 13,
                                    width: 15,
                                },
                                {
                                    src: `${roundShape}`,
                                    height: 20,
                                    width: 20
                                },
                                {
                                    src: `${shape1}`,
                                    height: 2,
                                    width: 46
                                },
                                {
                                    src: `${shape2}`,
                                    height: 29,
                                    width: 33,
                                },
                                {
                                    src: `${shape3}`,
                                    height: 10,
                                    width: 12,
                                },
                                {
                                    src: `${star}`,
                                    height: 21,
                                    width: 22
                                },
                                {
                                    src: `${starStock}`,
                                    height: 21,
                                    width: 22
                                },
                                {
                                    src: `${stockShape}`,
                                    height: 5,
                                    width: 7
                                },
                            ]
                        },
                        color: {
                            value: "#18ea61"
                        },
                        size: {
                            value: 20,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 2,
                                size_min: 10,
                                sync: true
                            }
                        }

                    },
                    opacity: {
                        value: 0.4008530152163807,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    interactivity: {
                        detect_on: "window",
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse"
                            },
                            onclick: {
                                enable: false,
                                mode: "bubble"
                            },
                            resize: true
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                line_linked: {
                                    opacity: 1
                                }
                            },
                            bubble: {
                                distance: 400,
                                size: 40,
                                duration: 2,
                                opacity: 8,
                                speed: 3
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.4
                            },
                            push: {
                                particles_nb: 4
                            },
                            remove: {
                                particles_nb: 2
                            }
                        }
                    },
                    retina_detect: false
                }}
            />
        </div>
    )
}
export default PreviewHero