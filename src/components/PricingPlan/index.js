import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Swiper from 'react-id-swiper';

// images
import pricelistbgshape1 from '../../images/prc-bg-shape1.png';
import pricelistbgshape2 from '../../images/prc-bg-shape2.png';
import pricelistbgshape3 from '../../images/prc-bg-shape3.png';
import next from '../../images/icon/next.png';
import prev from '../../images/icon/prev.png';
import bgShapeNew1 from '../../images/bg-shape-n1.png';

import './style.scss';

const pricelistsmonthly = [
    {
        id: 1,
        price: '99',
        type: 'Regular',
        color: [
            {
                code: '#d858f6'
            },
            {
                code: '#f754f2'
            },
        ],
        features: [
            {
                id: 1,
                text: '1-2 target pages'
            },
            {
                id: 2,
                text: '30-40 Keywords'
            },
            {
                id: 3,
                text: 'Connect Domain'
            },
            {
                id: 4,
                text: 'Ideal for smaller professional websites'
            },
            {
                id: 5,
                text: 'Business & eCommerce'
            },
        ]
    },
    {
        id: 2,
        price: '39',
        type: 'Business',
        color: [
            {
                code: '#88cbf7'
            },
            {
                code: '#a3b6fa'
            },
        ],
        features: [
            {
                id: 1,
                text: '1-2 target pages'
            },
            {
                id: 2,
                text: '30-40 Keywords'
            },
            {
                id: 3,
                text: 'Connect Domain'
            },
            {
                id: 4,
                text: 'Ideal for smaller professional websites'
            },
            {
                id: 5,
                text: 'Business & eCommerce'
            },
        ]
    },
    {
        id: 3,
        price: '19',
        type: 'Corporate',
        color: [
            {
                code: '#ea4e46'
            },
            {
                code: '#ff766f'
            },
        ],
        features: [
            {
                id: 1,
                text: '1-2 target pages'
            },
            {
                id: 2,
                text: '30-40 Keywords'
            },
            {
                id: 3,
                text: 'Connect Domain'
            },
            {
                id: 4,
                text: 'Ideal for smaller professional websites'
            },
            {
                id: 5,
                text: 'Business & eCommerce'
            },
        ]
    },
];

const pricelistsyealry = [
    {
        id: 1,
        price: '299',
        type: 'Regular',
        color: [
            {
                code: '#d858f6'
            },
            {
                code: '#f754f2'
            },
        ],
        features: [
            {
                id: 1,
                text: '1-2 target pages'
            },
            {
                id: 2,
                text: '30-40 Keywords'
            },
            {
                id: 3,
                text: 'Connect Domain'
            },
            {
                id: 4,
                text: 'Ideal for smaller professional websites'
            },
            {
                id: 5,
                text: 'Business & eCommerce'
            },
        ]
    },
    {
        id: 2,
        price: '139',
        type: 'Business',
        color: [
            {
                code: '#88cbf7'
            },
            {
                code: '#a3b6fa'
            },
        ],
        features: [
            {
                id: 1,
                text: '1-2 target pages'
            },
            {
                id: 2,
                text: '30-40 Keywords'
            },
            {
                id: 3,
                text: 'Connect Domain'
            },
            {
                id: 4,
                text: 'Ideal for smaller professional websites'
            },
            {
                id: 5,
                text: 'Business & eCommerce'
            },
        ]
    },
    {
        id: 3,
        price: '89',
        type: 'Corporate',
        color: [
            {
                code: '#ea4e46'
            },
            {
                code: '#ff766f'
            },
        ],
        features: [
            {
                id: 1,
                text: '1-2 target pages'
            },
            {
                id: 2,
                text: '30-40 Keywords'
            },
            {
                id: 3,
                text: 'Connect Domain'
            },
            {
                id: 4,
                text: 'Ideal for smaller professional websites'
            },
            {
                id: 5,
                text: 'Business & eCommerce'
            },
        ]
    },
];

const PricingPlan = () => {
    const [planMonthly, setPlan] = useState(true);
    const [planpricelists, setPlanPrice] = useState(pricelistsmonthly);

    function switchHandler(isMonthly) {
        setPlan(isMonthly);
        if (planMonthly){
            setPlanPrice(pricelistsyealry);
        }
        else {
            setPlanPrice(pricelistsmonthly);
        }
    }

    const params = {
        loop: false,
        speed: 800,
        slidesPerView: 2,
        spaceBetween: 0,
        centeredSlides: true,
        effect: 'coverflow',
        coverflowEffect: {
            // rotate: -40,
            rotate: 0,
            stretch: 54,
            depth: 400,
            modifier: 1,
            slideShadows: false,
        },

        breakpoints: {
            1251: {
                effect: 'coverflow'
            },
            992: {
                effect: 'normal',
                slidesPerView: 1,
                centeredSlides: false,
                spaceBetween: 0,
            },
            767: {
                effect: 'normal',
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 30,
            },
            240: {
                effect: 'normal',
                slidesPerView: 1,
                centeredSlides: false,
                spaceBetween: 0,
            }
        },

        navigation: {
            nextEl: '.sbnext',
            prevEl: '.sbprev'
        },
        renderPrevButton: () => <Grid className="sbArrow sbprev"><img src={prev} alt="prev"/></Grid>,
        renderNextButton: () => <Grid className="sbArrow sbnext"> <img src={next} alt="next"/> </Grid>,
    };

    return(
        <Grid className="pricingPlan">
            <Grid className="container" container alignItems="center" spacing={4}>
                <Grid item xs={12} md={6}>
                    <Grid className="textContent">
                        <strong>Pricing Plan</strong>
                        <h4>Affordable Pricing Plan For Customer</h4>
                        <p>Nam quis laoreet nisl. Vivamus nec quam magna.interdum etus blandit hendrerit ornare. Sed id leo nulla.</p>
                        <ButtonGroup
                            className="mt-40"
                            size="large"
                            aria-label="large outlined button group"
                        >
                            <Button onClick={() => switchHandler(true)} className={`cBtn disabledHover ${planMonthly ? '' : 'cBtnOutline'}`}>Monthly</Button>
                            <Button onClick={() => switchHandler(false)} className={`cBtn disabledHover ${planMonthly ? 'cBtnOutline' : ''}`}>Yearly</Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid className="planpricelists">
                        <Swiper {...params}>
                            {planpricelists.map(item => {
                                return(
                                    <Grid key={item.id} className="swiper-slide">
                                        <Grid className="signlePrice" style={{borderTopColor: `${item.id === 1 ? '#3492FF' : item.id === 2 ? '#FFC134' : '#FF5A8D'}`}}>
                                            <h2><img src={item.id === 1 ? pricelistbgshape1 : item.id === 2 ? pricelistbgshape2 : pricelistbgshape3} alt="pricelistbgshape1"/> <span>{item.type}</span></h2>
                                            <Grid className="price">${item.price}</Grid>
                                            <ul>
                                                {item.features.map(feature => {
                                                    return <li key={feature.id}>{feature.text}</li>;
                                                })}
                                            </ul>
                                            <Button component="a" className="cBtn">Choose Plan</Button>
                                        </Grid>
                                    </Grid>
                                )
                            })}
                        </Swiper>
                    </Grid>
                </Grid>
            </Grid>
            <img className="bgShapeNew1" src={bgShapeNew1} alt="bgShapeNew1"/>
        </Grid>
    )
};

export default PricingPlan;