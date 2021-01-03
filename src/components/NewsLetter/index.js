import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import './style.scss';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import Joi from "joi-browser";
import {toast} from "react-toastify";
import Hidden from "@material-ui/core/Hidden";
//d
class NewsLetter extends Component{

    state = {
        email: '',
        error: {},
    };

    schema = {
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
            email: this.state.email,
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
                email: '',
            })
        }
    };

    render() {
        const {email } = this.state;
        const {className} = this.props;
        var styleQuestion = {
            marginTop: 60
        };
        var styleAnswer = {
            width: '100%',
            marginTop: 30
        };

        return (
            <Grid className={`newsLetter ${className}`}>
                <Grid container className="container" spacing={1}>
                    <Hidden smDown><Grid item xs={12} md={2}></Grid></Hidden>
                    <Grid item xs={12} md={8}>
                        <Grid className="textContent">
                            <h2>Pertanyaan <span>#1</span></h2>
                            <h5 style={styleQuestion}>
                                جَالًا كَثِيْرًا وَّنِسَاۤءً ۚ وَاتَّقُوا اللّٰهَ الَّذِيْ تَسَاۤءَلُوْنَ  <br/> <br/>
                                Ayat dari surat apa ?
                            </h5>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container className="container" spacing={1}>
                    <Hidden smDown><Grid item xs={12} md={2}></Grid></Hidden>
                    <Grid item xs={12} md={8}>
                        <Grid className="textContent">
                            <Button className="cBtn cBtnOutline cBtnUppercase btnBlock" style={styleAnswer}>Al Ikhlas</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container className="container" spacing={1}>
                    <Hidden smDown><Grid item xs={12} md={2}></Grid></Hidden>
                    <Grid item xs={12} md={8}>
                        <Grid className="textContent">
                            <Button className="cBtn cBtnOutline cBtnUppercase btnBlock" style={styleAnswer}>An - Nas</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container className="container" spacing={1}>
                    <Hidden smDown><Grid item xs={12} md={2}></Grid></Hidden>
                    <Grid item xs={12} md={8}>
                        <Grid className="textContent">
                            <Button className="cBtn cBtnOutline cBtnUppercase btnBlock" style={styleAnswer}>Al - Humazah</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container className="container" spacing={1}>
                    <Hidden smDown><Grid item xs={12} md={2}></Grid></Hidden>
                    <Grid item xs={12} md={8}>
                        <Grid className="textContent">
                            <Button className="cBtn cBtnOutline cBtnUppercase btnBlock" style={styleAnswer}>Al - Lahab</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default NewsLetter;