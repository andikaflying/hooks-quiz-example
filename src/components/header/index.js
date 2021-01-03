import React, { useState, useEffect, Fragment } from "react";
import {Grid} from "@material-ui/core";
import {Link, NavLink, withRouter} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import Cookies from 'js-cookie';
import MobileMenu from "../MobileMenu";
import Hidden from "@material-ui/core/Hidden";
import Logo from "../Logo";

import logo from "../../images/logo.svg";
import logo2 from "../../images/logo2.svg";

import './style.scss';

const Header = (props) => {
    const Auth = Cookies.get('Auth');
    useEffect(() => {
        if (!Auth){
            props.history.push('/login');
        }
    }, [Auth, props]);
    function logoutHandler() {
        Cookies.remove('Auth');
        props.history.push('/login');
    }

    const [showMobile, setShowMobile] = useState(false);

    return(
        <Grid className={`header ${!props.fixHeader ? 'fixedHeader' : ''}`}>
            <Grid
                container
                alignItems="center">
                <Grid item xs={6} lg={2}>
                    <Logo
                        darkLogo={logo2}
                        lightLogo={logo}
                        alt="Logo"
                        link="/"
                        isHeaderFix={!props.fixHeader}
                    />
                </Grid>
                <Hidden mdDown>
                    <Grid item xs={12} md={7}>
                        <Grid className="mainMenu">
                            <List>
                                <ListItem><NavLink to="/" exact activeClassName="active">Home</NavLink></ListItem>
                                <ListItem><NavLink to="/portfolio">Main</NavLink></ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Hidden>
                {/* <Hidden xsDown>
                    <Grid item xs={3} lg={3} sm={4} container alignItems="center" className="justify-md-flex-space-between" justify="flex-end">
                        {Auth ? <Fragment>
                            <Button onClick={() => logoutHandler()} className="cBtn cBtnOutline cBtnUppercase ml-10">Log Out</Button>
                        </Fragment> : <Link to="/login" className="cBtn cBtnOutline">Sign In</Link>}
                    </Grid>
                </Hidden> */}
                <Hidden lgUp>
                    <Grid item xs={6} sm={2} className="text-right">
                        <Grid className={`humbergur ${showMobile ? 'show' : ''}`} onClick={() => setShowMobile(!showMobile)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </Grid>
                    </Grid>
                </Hidden>
            </Grid>
            <MobileMenu showMobile={showMobile} logoutHandler={logoutHandler} setShowMobile={setShowMobile} />
        </Grid>
    )
};

export default withRouter(Header);