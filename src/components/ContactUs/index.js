import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";

// images
import Shape7 from '../../images/shape7.png';
import bgShape8 from '../../images/bg-shape-n1.png';
import TextField from "@material-ui/core/TextField";

import './style.scss';
import Button from "@material-ui/core/Button";
import {toast} from "react-toastify";

import Joi from 'joi-browser';

class ContactUs extends Component{

    state = {
        name: '',
        email: '',
        message: '',
        error: {},
    };

    schema = {
        name: Joi.string()
            .required(),
        email: Joi.string()
            .required()
            .email()
            .error(errors => {
                errors.forEach(err => {
                    switch (err.type) {
                        case 'string.email':
                            err.message = 'Email Must be Email Format';
                            break;
                        case 'any.required':
                            err.message = 'Email is Requared';
                            break;
                        default:
                            break;
                    }
                });
                return errors;
            }),
        message: Joi.string()
            .required()
            .error(errors => ({
                message: 'Please Provide a Message',
            })),
    };

    changeHandler = event => {
        const error = { ...this.state.error };
        const errorMassage = this.validationProperty(event);
        if (errorMassage) {
            error[event.target.name] = errorMassage;
        } else {
            delete error[event.target.name];
        }
        this.setState({
            [event.target.name]: event.target.value,
            error,
        });
    };


    validationProperty = event => {
        const Obj = { [event.target.name]: event.target.value };
        const schema = { [event.target.name]: this.schema[event.target.name] };
        const { error } = Joi.validate(Obj, schema);
        return error ? error.details[0].message : null;
    };

    validate = () => {
        const options = { abortEarly: false };
        const form = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
        };
        const { error } = Joi.validate(form, this.schema, options);
        if (!error) return null;

        const errors = {};
        for (const item of error.details) errors[item.path[0]] = item.message;
        return errors;
    };

    submitHandler = event => {
        event.preventDefault();
        const error = this.validate();
        this.setState({
            error: error || {},
        });
        if (!error) {
            toast.success('Successfully Sended!');
            this.setState({
                name: '',
                email: '',
                message: '',
            })
        }
    };

    render() {

        const {name, email, message} = this.state;
        const {className = ''} = this.props;

        return (
            <Grid className={`contactUsWrapper ${className}`}>
                <Grid
                    className="container"
                    container
                    spacing={4}>
                    <Grid item xs={12} md={5}>
                        <div className="thumb">
                            <img src={Shape7} alt="thumb"/>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Grid className="contactRight">
                            <Grid className="textContent">
                                <strong>Kontak Kami</strong>
                                <h4>Ada masukkan. Kirim ke email !!!</h4>
                            </Grid>
                            <form onSubmit={this.submitHandler}>
                                <Grid
                                    spacing={2}
                                    container>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            name="name"
                                            value={name}
                                            helperText={
                                                this.state.error.name ? this.state.error.name : ''
                                            }
                                            placeholder="Name*"
                                            className="inputStyleBasic"
                                            margin="normal"
                                            variant="outlined"
                                            onChange={this.changeHandler}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            name="email"
                                            helperText={
                                                this.state.error.email ? this.state.error.email : ''
                                            }
                                            value={email}
                                            placeholder="Email*"
                                            className="inputStyleBasic"
                                            margin="normal"
                                            variant="outlined"
                                            onChange={this.changeHandler}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            multiline
                                            helperText={
                                                this.state.error.message ? this.state.error.message : ''
                                            }
                                            value={message}
                                            className="inputStyleBasic"
                                            name="message"
                                            placeholder="Message*"
                                            variant="outlined"
                                            onChange={this.changeHandler}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button type="submit" className="cBtn cBtnShadow mt-20 pr-50 pl-50">Send</Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </Grid>
                <img className="bgShape8" src={bgShape8} alt="shape"/>
            </Grid>
        );
    }
}
export default ContactUs;