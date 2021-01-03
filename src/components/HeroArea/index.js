import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import ModalVideo from 'react-modal-video';

// images
import bgShape1 from '../../images/bg-shape1.png';
import Shape1 from '../../images/shape1.png';

import './style.scss';

class HeroArea extends Component {

    constructor () {
        super();
        this.state = {
            isOpen: false
        };
        this.openModal = this.openModal.bind(this)
    }

    openModal () {
        this.setState({isOpen: true})
    }

    render(){
        return(
            <Grid className="heroAreaWapper">
                <Grid
                    container
                    alignItems="center"
                    className="container">
                    <Grid item xs={12} md={6}>
                        <Grid className="heroContent">
                            <strong>Seru utk iseng-iseng !!!</strong>
                            <h2>KUIS HAFALAN SURAT</h2>
                            <p>Cuma Juz Amma 30</p>
                            <Link to="/about-us" className="cBtn">Main</Link>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid className="hrRighThumb">
                            <img src={Shape1} alt=""/>
                        </Grid>
                    </Grid>
                </Grid>
                <img className="bgShape1" src={bgShape1} alt="shape"/>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='DGQwd1_dpuc' onClose={() => this.setState({isOpen: false})} />
            </Grid>
        )
    }
}

export default HeroArea;