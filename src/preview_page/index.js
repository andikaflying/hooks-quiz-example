import React from 'react';

import PreviewHeader from './components/header'
import PreviewHero from './components/hero'
import WhoWeAre from './components/whoWeAre'
import PreviewFeatured from './components/featured'
import PreviewFeaturedAwesome from './components/awesomeFeatured'
import PreviewDemo from './components/demo'
import PreviewFooter from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.scss'

const PreviewPage = () => {
    return (
        <div className="previewArea">
            <PreviewHeader />
            <PreviewHero />
            <WhoWeAre />
            <PreviewFeatured />
            <PreviewFeaturedAwesome />
            <PreviewDemo />
            <PreviewFooter />
        </div>
    );
}

export default PreviewPage
