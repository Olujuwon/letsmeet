import React, { Component } from 'react';
import '../css/portfolio.css';
import isAlphanumeric from 'validator/lib/isAlphanumeric';
import isURL from 'validator/lib/isURL';

const validate = (obj)=>{
    return {
        portfolio: isURL(obj.portfolio)? '': "There seem to be an error!",
        txt: !isAlphanumeric(obj.txt.replace(' ', '')) || obj.txt.length >= 251
    }
}

class Portfolio extends Component {
    constructor(props){
        super(props)
        this.state = {
            portfolio:'', 
            txt: ''
        }
    }
  render() {
      const errors = validate(this.state)
    return (
      <form className="main">
            <p>3. Portfolio</p>
            <hr/>
            <p className="ibm">Prove you're IBM's next great designer by showing us who you are. What you have done. How you think. Tell us your story</p>

            <input type="text" 
            name="portfolio" 
            className={(errors.portfolio)? 'portfolio invalid':'portfolio'}
            onChange={e=>this.setState({portfolio:e.target.value})} 
            value={this.state.portfolio}
            placeholder="Portfolio link*"/>
            <span className="portmessage">{errors.portfolio}</span>
          
          <span>{this.state.txt.length}/250</span>
            <textarea name="" 
            className={(errors.txt)? 'txt invalid':'txt'}
            cols="30" 
            rows="5"
            onChange={e=>this.setState({txt:e.target.value})} 
            value={this.state.txt}
            placeholder="Anything else (another link, availability, etc)?"></textarea>
           
            <input type="submit" value="Submit" onClick={(e)=>{this.props.portfolio(e,this.state.address,this.state.txt )
            this.setState({
                address:'', 
                txt: ''
            })
            }}/>
        
     </form>)
  }
}

export default Portfolio;