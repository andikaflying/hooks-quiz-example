import React from 'react'
import PreviewSectionTitle from './SectionTitle'
// images 
import whoWeAre from '../images/mockup/Image.png'
import shape1 from '../images/shape/shape1.svg'
import ellipse from '../images/icon/ellipse.svg'
const whoWeAres = [
    {
        image: ellipse,
        title: 'User Panel',
        text:
            'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.Many desktop.',
    },
    {
        image: ellipse,
        title: 'Material Ui Design',
        text:
            'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.Many desktop.',
    },
    {
        image: ellipse,
        title: 'Easy Customizeable',
        text:
            'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.Many desktop.',
    },
];


const WhoWeAre = () => {
    return (
        <div className="previewWhoWeAreArea" id="about">
            <div className="whoWeAreImg">
                <img src={whoWeAre} alt="" />
                <span className="shape1 poa zI-1 L-0 bounceAnimation">
                    <img src={shape1} alt="" />
                </span>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <PreviewSectionTitle
                            title="Who We are"
                            text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                        />
                    </div>
                    <div className="col-lg-6 offset-lg-6">
                        <ul className="whoWeAreContetnt">
                            {whoWeAres.map((who, i) => (
                                <li key={i}>
                                    <h4>
                                        <img src={who.image} alt="" />
                                        {who.title}
                                    </h4>
                                    <p>{who.text}</p>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WhoWeAre