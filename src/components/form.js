import React, { Component } from 'react';
import '../css/form.css';
import validate from './validate'



class FormComp extends Component {
  constructor(props){
    super(props)
    this.state = {
        fullname:'', 
        phone:'',
        email:'',
        cemail:'',
        address:'',
        address2:'',
        city:'',
        state:'',
        country:'',
        zip:'',
        habu:'',
    }
}

  render() {
    //const {fullname,phone,email,cemail,address,address2,city,state,country,zip,habu } = this.state;
    const errors = validate(this.state);
    //console.log("errors", errors.fullname);
    
    return (
      <form className="main" onSubmit = {()=>{this.props.submitform(this.state) }}>
                <p>1. Personal information</p>
                <hr/>
                <div className="fone">
                  <input type="text" 
                    name="Fullname" 
                    className={(errors.fullname)? 'fieldtwo invalid':'fieldtwo'}
                    placeholder="Fullname*" 
                    value = {this.state.fullname}
                    onChange={(e)=>{this.setState({fullname:e.target.value})}}/>
                  <input type="tel" 
                    name="phoneno" 
                    className={(errors.phone)? 'phone invalid':'phone'}
                    placeholder="Phone#*" 
                    value = {this.state.phone}
                    onChange={(e)=>{this.setState({phone:e.target.value})}}/>
                </div>
                <input type="email" 
                  name="email" 
                  className={`fieldtwo ${errors.email ? "invalid" : "" }`}
                  placeholder="Email*" 
                  value = {this.state.email}
                  onChange={(e)=>{this.setState({email:e.target.value})}}/>
                <input type="email" 
                  name="email" 
                  className={`fieldtwo ${errors.cemail ? "invalid" : "" }`} 
                  placeholder="Re-enter Email*" 
                  value = {this.state.cemail}
                  onChange={(e)=>{this.setState({cemail:e.target.value})}}/>
                <input type="text" 
                  name="address" 
                  className={(errors.address)? 'fieldthree invalid':'fieldthree'}
                  placeholder="Address*" 
                  value = {this.state.address}
                  onChange={(e)=>{this.setState({address:e.target.value})}}/>
                <input type="text" 
                name="address" 
                className={(errors.address2)? 'fieldthree invalid':'fieldthree'} 
                placeholder="Address cont'd"
                value = {this.state.address2}
                onChange={(e)=>{this.setState({address2:e.target.value})}}/>
                <div className="small">
                  <input type="text" 
                  name="city" 
                  className={(errors.city)? 'fieldone invalid':'fieldone'}
                  placeholder="City*"  
                  value = {this.state.city}
                  onChange={(e)=>{this.setState({city:e.target.value})}}/>
                  <input type="text" 
                  name="state" 
                  className={(errors.state)? 'fieldone invalid':'fieldone'}
                  placeholder="State"
                  value = {this.state.state}
                  onChange={(e)=>{this.setState({state:e.target.value})}}/>
                  <input type="text" 
                  name="country" 
                  className={(errors.country)? 'fieldone invalid':'fieldone'}
                  placeholder="Country/Region*" 
                  value = {this.state.country}
                  onChange={(e)=>{this.setState({country:e.target.value})}}/>
                  <input type="number" 
                  name="zip" 
                  className={(errors.zip)? 'fieldone invalid':'fieldone'}
                  placeholder="Zip/Postal Code" 
                  value = {this.state.zip}
                  onChange={(e)=>{this.setState({zip:e.target.value})}}/>
                </div>
                <input type="text" 
                name="habu" 
                className={(errors.habu)? 'fieldthree invalid':'fieldthree'}
                placeholder="How dclassName you hear about us" 
                value = {this.state.habu}
                onChange={(e)=>{this.setState({habu:e.target.value})}}/>
                <input type="submit" value="Submit"/>
        
      </form>
    );
  }
}

export default FormComp;