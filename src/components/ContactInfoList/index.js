import React from 'react';
import Grid from "@material-ui/core/Grid";

import icon1 from '../../images/icon/customer-service.png';
import icon2 from '../../images/icon/paper-plane.png';
import icon3 from '../../images/icon/route.png';

import './style.scss';

const contactinfo = [
    {
        id: 1,
        icon: icon1,
        title: 'Contact Number',
        list: [
            {
                body: '+1-202-555-0101'
            },
            {
                body: '202-555-0191'
            },
        ]
    },
    {
        id: 2,
        icon: icon2,
        title: 'Email address',
        list: [
            {
                body: 'user@yoursite.com'
            },
            {
                body: 'user@email.com'
            },
        ]
    },
    {
        id: 3,
        icon: icon3,
        title: 'Office Location',
        list: [
            {
                body: '62 Arlington St. Suite 100'
            },
            {
                body: 'Boston, CA 01117, USA'
            },
        ]
    },
];

const ContactInfoList = () => {
    return(
        <Grid className="contactInfoList">
            <Grid container className="container" spacing={4}>
                {contactinfo.map(item => {
                    return(
                        <Grid key={item.id} item xs={12} md={4} sm={6}>
                            <Grid className="cntItem">
                                <Grid className="iconBox">
                                    <img className="icon" src={item.icon} alt="icon bg"/>
                                </Grid>
                                <h2>{item.title}</h2>
                                <ul>{item.list.map((item, i) => {
                                    return<li key={i}>{item.body}</li>
                                })}</ul>
                            </Grid>
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>
    )
};

export default ContactInfoList;