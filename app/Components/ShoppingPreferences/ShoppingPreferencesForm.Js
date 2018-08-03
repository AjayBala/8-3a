import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { BrowserRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ShoppingPreferences.css';

import { ShoppingPreferences } from './ShoppingPreferences';



const ShoppingPreferencesForm = (props) => {

    const { handleSubmit, pristine, reset, submitting } = props

    const handleSubmitForm = (values) => {

        submitCase(values);
      };

      
    return (
        <div className="ShoppingBoxWrap">

            <form onSubmit={handleSubmit}>
                <div>

                    <div>
                        <div>
                            <Field name="Office supplies" id="Office supplies" component="input" type="checkbox" /> Office supplies
                </div>
                    </div>
                    <div> <br />

                        <div>
                            <Field name="Cleaning & Janitorial" id="Cleaning & Janitorial" component="input" type="checkbox" /> Cleaning & Janitorial
                </div>
                    </div>
                    <div><br />

                        <div>
                            <Field name="Building Materials" id="Building Materials" component="input" type="checkbox" /> Building Materials
                </div>
                    </div>
                    <div><br />

                        <div>
                            <Field name="Electrical" id="Electrical" component="input" type="checkbox" /> Electrical
                </div>
                    </div>
                    <div><br />

                        <div>
                            <Field name="Outdoor Equipment" id="Outdoor Equipment" component="input" type="checkbox" /> Outdoor Equipment
                </div>
                    </div>
                    <div><br />

                        <div>
                            <Field name="Plumbing" id="Plumbing" component="input" type="checkbox" /> Plumbing
                </div>
                    </div>
                    <div><br />

                        <div>
                            <Field name="Hardware" id="Hardware" component="input" type="checkbox" /> Hardware
                </div>
                    </div>
                    <div><br />

                        <div>
                            <Field name="Tools" id="Tools" component="input" type="checkbox" /> Tools
                </div>
                    </div>
                    <div><br />

                        <div>
                            <Field name="Furniture" id="Furniture" component="input" type="checkbox" />  Furniture
                </div>
                    </div>
                    <div><br />

                        <div>
                            <Field name="Safety & Security" id="Safety & Security" component="input" type="checkbox" />  Safety & Security
                </div>
                    </div><br />
                    <div className="Terms">
                        <div className="Terms1">
                            <span> By clicking finish you agree to user </span>

                        </div>

                        <div className="Terms2">

                            <a href="https://help.overstock.com/help/s/article/TERMS-AND-CONDITIONS" ><p>Terms & Conditions</p> </a>

                        </div>

                    </div>

                    <div className="btn">
                        <button className="primarybtn" type="submit" disabled={pristine || submitting}> Back
                                        </button> &nbsp;
                        <button className="secondarybtn" type="button" disabled={pristine || submitting}>
                            Finish
                                    </button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default reduxForm({
    form: 'simple' // a unique identifier for this form
})(ShoppingPreferencesForm)