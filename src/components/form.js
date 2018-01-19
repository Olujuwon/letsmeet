import React, { Component } from 'react';
import '../css/form.css';

class FormComp extends Component {
  render() {
    return (
      <form className="main">
                <p>1. Personal information</p>
                <hr/>
                <div className="fone">
                <input type="text" name="Fullname" id="fullname" placeholder="Fullname*" pattern="^([a-zA-Z]{2,}\s[a-zA-Z]{2,})$" required/>
                <input type="tel" name="phoneno" id="phone" placeholder="Phone#*" pattern="^((\+?|00)\d{1,3}|0?)-?\d{3}-?\d{3}-?\d{3}| {4}$" required/>
                </div>
                <input type="email" name="email" id="email" placeholder="Email*" required/>
                <input type="email" name="email" id="reemail" placeholder="Re-enter Email*" required/>
                <input type="text" name="address" id="address" placeholder="Address*" required/>
                <input type="text" name="address" id="readdress" placeholder="Address cont'd"/>
                <div className="small"><input type="text" name="city" id="city" placeholder="City*" required pattern="^([a-z A-Z]{2,})$"/>
                <input type="text" name="state" id="state" placeholder="State"/>
                <input type="text" name="country" id="country" placeholder="Country/Region*" required/>
                <input type="number" name="zip" id="zip" placeholder="Zip/Postal Code" pattern="^([0-9a-z]{5})$"/></div>
                <input type="text" name="habu" id="habu" placeholder="How did you hear about us" />
                <input type="submit" value="Submit"/>
        
      </form>
    );
  }
}

export default FormComp;