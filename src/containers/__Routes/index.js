import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Route Setting
import HomePage from "../HomePage";
import AboutUs from "../AboutUs";
import Services from "../Services";

// Normal Route
import PrivateRoute from "../_PrivateRoute";
import PublicRoute from "../_PublicRoute";
import TeamPage from "../TeamPage";
import Portfolio from "../Portfolio";
import Gallery from "../Gallery";
import PortfolioSingle from "../PortfolioSingle";
import BlogLists from "../BlogLists";
import BlogSingle from "../BlogSingle";
import ContactUsPage from "../ContactUsPage";
import LoginPage from "../LoginPage";
import SignupPage from "../SignupPage";

export default function Routes() {
        return (
            <Switch>
                    <PrivateRoute
                        fixHeader={true}
                        exact
                        path="/"
                        component={HomePage}
                    />
                    <PrivateRoute
                        path="/about-us"
                        component={AboutUs}
                    />
                    <PrivateRoute
                        path="/services"
                        component={Services}
                    />
                    <PrivateRoute
                        path="/team"
                        component={TeamPage}
                    />
                    <PrivateRoute
                        path="/portfolio"
                        component={Portfolio}
                    />
                    <PrivateRoute
                        path="/gallery"
                        component={Gallery}
                    />
                    <PrivateRoute
                        path="/portfolio-single"
                        component={PortfolioSingle}
                    />
                    <PrivateRoute
                        path="/blog"
                        component={BlogLists}
                    />
                    <PrivateRoute
                        path="/blog-details/:id"
                        component={BlogSingle}
                    />
                    <PrivateRoute
                        path="/contact-us"
                        component={ContactUsPage}
                    />

                    <Route path="/login" component={LoginPage} />
                    <Route path="/signup" component={SignupPage} />
                    <PrivateRoute
                        exact
                        component={HomePage}
                    />
            </Switch>
        );
}
