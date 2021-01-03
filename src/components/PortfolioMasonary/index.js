import React, {Fragment, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Lightbox from 'react-image-lightbox';

import 'react-image-lightbox/style.css';

// images
import portimg1 from '../../images/portfolio/grid/1.jpg';
import portimg2 from '../../images/portfolio/grid/2.jpg';
import portimg3 from '../../images/portfolio/grid/3.jpg';
import portimg4 from '../../images/portfolio/grid/4.jpg';
import portimg5 from '../../images/portfolio/grid/5.jpg';
import portimg6 from '../../images/portfolio/grid/6.jpg';
import portimg7 from '../../images/portfolio/grid/7.jpg';
import portimg8 from '../../images/portfolio/grid/8.jpg';
import portimg9 from '../../images/portfolio/grid/9.jpg';

import './style.scss';

const portfolio = [
    {
        id: 1,
        category: 'agency',
        image: portimg1
    },
    {
        id: 2,
        category: 'creative',
        image: portimg2
    },
    {
        id: 3,
        category: 'design',
        image: portimg3
    },
    {
        id: 4,
        category: 'seo',
        image: portimg4
    },
    {
        id: 5,
        category: 'design',
        image: portimg5
    },
    {
        id: 6,
        category: 'seo',
        image: portimg6
    },
    {
        id: 7,
        category: 'agency',
        image: portimg7
    },
    {
        id: 8,
        category: 'design',
        image: portimg8
    },
    {
        id: 9,
        category: 'agency',
        image: portimg9
    },
];

function searchFilter(row, category) {
    return row.category.toLowerCase().includes(category.toLowerCase()) || !category;
}

const PortfolioMasonary = () => {
    const [category, setCategory] = useState('');
    const [isOpen, setOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    function onOpenHandler(id) {
        setOpen(true);
        setPhotoIndex(id - 1);
    }

    return(
        <Fragment>
            <Grid container spacing={4} className="container">
                <Grid item xs={12}>
                    <Grid className="portfolioFilter">
                        <Button className={`cBtn cBtnRadius cBtnOutline cBtnUppercase ${category === '' ? 'active' : ''}`} onClick={() => setCategory('',)}>All</Button>
                        <Button className={`cBtn cBtnRadius cBtnOutline cBtnUppercase ${category === 'agency' ? 'active' : ''}`} onClick={() => setCategory('agency')}>Digital Agency</Button>
                        <Button className={`cBtn cBtnRadius cBtnOutline cBtnUppercase ${category === 'creative' ? 'active' : ''}`} onClick={() => setCategory('creative')}>Creative</Button>
                        <Button className={`cBtn cBtnRadius cBtnOutline cBtnUppercase ${category === 'design' ? 'active' : ''}`} onClick={() => setCategory('design')}>Design & development</Button>
                        <Button className={`cBtn cBtnRadius cBtnOutline cBtnUppercase ${category === 'seo' ? 'active' : ''}`} onClick={() => setCategory('seo')}>SEO</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className="portfolioGrid container" container spacing={4}>
                <Grid item xs={12}>
                    <Grid container spacing={4}>
                        {portfolio.filter(row => searchFilter(row, category)).map(item => {
                            return(
                                <Grid key={item.id} item xs={12} sm={6} md={4} onClick={() => onOpenHandler(item.id)}>
                                    <img src={item.image} alt="portfolio"/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
                {isOpen && (
                    <Lightbox
                        mainSrc={portfolio[photoIndex].image}
                        nextSrc={portfolio[(photoIndex + 1) % portfolio.length].image}
                        prevSrc={portfolio[(photoIndex + portfolio.length - 1) % portfolio.length].image}
                        onCloseRequest={() => setOpen(false)}
                        onMovePrevRequest={() => setPhotoIndex((photoIndex + portfolio.length - 1) % portfolio.length)}
                        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % portfolio.length)}
                    />
                )}
            </Grid>
        </Fragment>
    )
};

export default PortfolioMasonary;