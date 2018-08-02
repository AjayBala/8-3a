import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { BrowserRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ShoppingPreferences.css';

import { ShoppingPreferences } from './ShoppingPreferences';

const validate = values => {
    const errors = {}
    if (!values.email) {
        errors.email = 'Required'
    }

    if (!values.password) {
        errors.password = 'Required'
    }
    return errors;
}

const renderField = ({ placeholder, input, label, type, meta: { touched, error } }) => (
    <div className='form-group'>
        <label className="labelTxt">{label}</label>
        <input {...input} placeholder={placeholder} type={type} className="form-control" />
        {touched && ((error && <span className="errorTxt">{error}</span>))}
    </div>
)

export class ShoppingPreferencesForm extends React.Component {

    static propTypes = {
        submitCase: PropTypes.func,
        handleSubmit: PropTypes.func,
    };

    static defaultProps = {
        submitCase: {},
    };

    constructor() {
        super()
    };

    render() {
        const { loggingIn } = this.props;
        const { handleSubmit, pristine, submitting, reset, dirty, loginError } = this.props;
        console.log('loginError', loginError);
        const handleSubmitForm = (values) => {
            this.props.submitCase(values);
        };
        return (
            <div className="ShoppingBoxWrap">





                <form onSubmit={handleSubmit(handleSubmitForm)} >



                    <div className="Products">
                        <label> <input type="checkbox" component={renderField} className="Check" /> Office supplies </label><br /><br />

                        <label>  <input type="checkbox" component={renderField} /> Cleaning & Janitorial </label><br /><br />
                        <label> <input type="checkbox" component={renderField} /> Building Materials </label><br /><br />
                        <label> <input type="checkbox" component={renderField} /> Electrical </label><br /><br />
                        <label> <input type="checkbox" component={renderField} /> Outdoor Equipment </label><br /><br />
                        <label> <input type="checkbox" component={renderField} /> Plumbing </label><br /><br />
                        <label> <input type="checkbox" component={renderField} /> Hardware </label><br /><br />
                        <label> <input type="checkbox" component={renderField} /> Tools </label><br /><br />
                        <label> <input type="checkbox" component={renderField} /> Furniture </label><br /><br />
                        <label> <input type="checkbox" component={renderField} /> Safety & Security </label><br /><br />

                    </div>






                </form>





            </div>
        )
    }
}
const Shopping = reduxForm({
    form: 'login',
    validate,
})(ShoppingPreferencesForm);

export default Shopping;