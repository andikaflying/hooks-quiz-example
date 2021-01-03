import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {toast} from "react-toastify";
import Joi from 'joi-browser';

import ShowPass from '../../images/icon/eye.svg';
import Pass from '../../images/icon/eye2.svg';


import {
    InputAdornment,
    IconButton,
} from '@material-ui/core';

import logo from '../../images/logo2.svg';

import './style.scss';
import {Link} from "react-router-dom";

class SignupPage extends Component{

    state = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirmPassword: '',
        passwordShow: false,
        confirmPasswordShow: false,
        error: {},
    };

    schema = {
        first_name: Joi.string()
            .required()
            .error(errors => ({
                message: 'First Name is Required',
            })),
        last_name: Joi.any(),
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
        password: Joi.string()
            .required()
            .min(8)
            .regex(/^[a-zA-Z0-9]{3,30}$/)
            .error(errors => ({
                message: 'Please Provide a strong password',
            })),
        confirmPassword: Joi.any()
            .valid(Joi.ref('password'))
            .required()
            .error(errors => ({
                message: 'Confirm Password dosen\'t match!',
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
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
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
            this.setState({
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                confirmPassword: '',
                passwordShow: false,
                confirmPasswordShow: false,
            });
            toast.success('Successfully Registered!');
            this.props.history.push('/login');
        }
    };

    handleClickShowPassword = current => {
        this.setState({
            [current]: !this.state[current],
        });
    };

    render() {
        const {first_name, last_name, email, password, confirmPassword} = this.state;
        return (
            <Grid className="unAuthWrapper">
                <Grid className="formBox">
                    <Grid className="lFormHead">
                        <img src={logo} alt=""/>
                    </Grid>
                    <Grid className="lFormBody">
                        <h4>Sign Up</h4>
                        <p>Create a new account.</p>
                        <form onSubmit={this.submitHandler}>
                            <Grid
                                container>
                                <Grid item xs={12}>
                                    <TextField
                                        name="first_name"
                                        helperText={
                                            this.state.error.first_name ? this.state.error.first_name : ''
                                        }
                                        value={first_name}
                                        placeholder="First Name"
                                        className="inputStyleBasic"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={this.changeHandler}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name="last_name"
                                        helperText={
                                            this.state.error.last_name ? this.state.error.last_name : ''
                                        }
                                        value={last_name}
                                        placeholder="Last Name"
                                        className="inputStyleBasic"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={this.changeHandler}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name="email"
                                        helperText={
                                            this.state.error.email ? this.state.error.email : ''
                                        }
                                        value={email}
                                        placeholder="Email"
                                        className="inputStyleBasic"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={this.changeHandler}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name="password"
                                        helperText={
                                            this.state.error.password ? this.state.error.password : ''
                                        }
                                        value={password}
                                        placeholder="Password"
                                        type={this.state.passwordShow ? 'text' : 'password'}
                                        className="inputStyleBasic"
                                        margin="normal"
                                        variant="outlined"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment className="showPassword" position="end">
                                                    <IconButton
                                                        disableRipple
                                                        onClick={() =>
                                                            this.handleClickShowPassword('passwordShow')
                                                        }
                                                    >
                                                        <img src={this.state.passwordShow ? Pass : ShowPass} alt="icon"/>
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                        onChange={this.changeHandler}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name="confirmPassword"
                                        helperText={
                                            this.state.error.confirmPassword ? this.state.error.confirmPassword : ''
                                        }
                                        value={confirmPassword}
                                        placeholder="Confirm Password"
                                        type={this.state.confirmPasswordShow ? 'text' : 'password'}
                                        className="inputStyleBasic"
                                        margin="normal"
                                        variant="outlined"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment className="showPassword" position="end">
                                                    <IconButton
                                                        disableRipple
                                                        onClick={() =>
                                                            this.handleClickShowPassword('confirmPasswordShow')
                                                        }
                                                    >
                                                        <img src={this.state.confirmPasswordShow ? Pass : ShowPass} alt="icon"/>
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                        onChange={this.changeHandler}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" className="cBtn cBtnShadow cBtnFull">Sign Up</Button>
                                    <h6>Don’t have account ? <Link to="/login">Sign In</Link></h6>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}
export default withRouter(SignupPage);