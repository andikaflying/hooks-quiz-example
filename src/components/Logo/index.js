import React from 'react';
import {Link} from "react-router-dom";
import {Grid} from "@material-ui/core";
const Logo = ({isHeaderFix,lightLogo, darkLogo, alt, link, className = '' }) => {
    return(
        <Grid className={`logo ${className}`}>
            <Link to={link}>{isHeaderFix ? <img src={darkLogo} alt={alt}/> : <img src={lightLogo} alt={alt}/>}</Link>
        </Grid>
    )
};

export default Logo;