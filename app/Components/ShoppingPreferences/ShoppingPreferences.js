
import React from 'react';
import ShoppingPreferncesForm from './ShoppingPreferencesForm';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'; 
import './ShoppingPreferences.css';
import * as userAction from "./action";

export class ShoppingPreferences extends React.Component {
    constructor() {
        super()
    };
    render() {
        return (
            <div className="container">



                <div className="productslist">

                    <h2 className="text">What type of products do you shop for ?</h2>
                    <br />
                    <React.Fragment>
                        <ShoppingPreferncesForm />
                    </React.Fragment>


                </div>

                <br /> <br />




            </div >

        )
    }
}

const mapStateToProps = state =>{
    return state;
    
    }
    
    const matchDispatchToProps = dispatch => ({
        actions: bindActionCreators(Object.assign(
            userAction,
        ), dispatch),
      });

      export default connect(mapStateToProps,matchDispatchToProps) (ShoppingPreferences);