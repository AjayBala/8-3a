
import React from 'react';
import ShoppingPreferncesForm from './ShoppingPreferencesForm';

export class ShoppingPreferences extends React.Component {
    constructor() {
        super()
    };
    render() {
        return (
            <div className="container">



                <div className="productslist">

                    <h2 className="text">What type of products do you shop for ?</h2> 
                    <React.Fragment>
                        <ShoppingPreferncesForm />
                    </React.Fragment>


                </div>

                <br /> <br />
                <div className='Terms'>
                    <div className="Terms1">
                        <span> By clicking finish you agree to user </span>

                    </div>

                    <div className="Terms2">

                        <a href="https://help.overstock.com/help/s/article/TERMS-AND-CONDITIONS" ><p>Terms & Conditions</p> </a>

                    </div>


                </div >
                <br />

                <div className="clicks">

                    <button className="btn-primary">Back</button>  &nbsp;&nbsp;
                     <button className="btn-secondary">Finish</button>

                </div>

            </div >

        )
    }
}

export default ShoppingPreferences;