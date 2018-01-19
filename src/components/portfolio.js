import React, { Component } from 'react';
import '../css/portfolio.css';

class Portfolio extends Component {
    constructor(props){
        super(props)
        this.state = {
            address:'', 
            txt: ''
        }
    }
  render() {
    return (
      <form className="main">
            <p>3. Portfolio</p>
            <hr/>
            <p className="ibm">Prove you're IBM's next great designer by showing us who you are. What you have done. How you think. Tell us your story</p>
            <input type="text" 
            name="address" 
            id="address" 
            onChange={e=>this.setState({address:e.target.value})} 
            value={this.state.address}
            placeholder="Portfolio link*"/>
          
            <textarea name="" 
            id="txt" 
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