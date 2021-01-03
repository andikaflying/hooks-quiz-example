import React from 'react'
import PreviewSectionTitle from './SectionTitle'

// images 
import react from '../images/featured/react.svg'
import redux from '../images/featured/redux.svg'
import router from '../images/featured/reactRouterDom.png'
import bootstrap from '../images/featured/bootstrap.png'
import sass from '../images/featured/sass.svg'
import material from '../images/featured/material-ui-logo.svg'

const featureds = [
    {
        image: react,
        title: 'React',
        text: 'The point of using Lorem Ipsum is that it has or-less normal distribution letters, as opposed Content here.',
    },
    {
        image: redux,
        title: 'Redux',
        text: 'The point of using Lorem Ipsum is that it has or-less normal distribution letters, as opposed Content here.',
    },
    {
        image: router,
        title: 'React Router Dom',
        text: 'The point of using Lorem Ipsum is that it has or-less normal distribution letters, as opposed Content here.',
    },
    {
        image: bootstrap,
        title: 'Bootstrap',
        text: 'The point of using Lorem Ipsum is that it has or-less normal distribution letters, as opposed Content here.',
    },
    {
        image: sass,
        title: 'Sass',
        text: 'The point of using Lorem Ipsum is that it has or-less normal distribution letters, as opposed Content here.',
    },
    {
        image: material,
        title: 'Material ui',
        text: 'The point of using Lorem Ipsum is that it has or-less normal distribution letters, as opposed Content here.',
    },
];

const PreviewFeatured = () => {
    return (
        <div className="previewAwesomeFeatureArea" id="features">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <PreviewSectionTitle
                            title="Our Awesome Feature"
                            text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                        />
                    </div>
                    {featureds.map((featured, i) => (
                        <div key={i} className="col-lg-4 col-sm-6 col-12">
                            <div className="awesomeFeaturedWrap">
                                <div className="awesomeFeaturedIcon">
                                    <img src={featured.image} alt="" />
                                </div>
                                <h3>{featured.title}</h3>
                                <p>{featured.text}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}
export default PreviewFeatured