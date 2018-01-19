import React, { Component } from 'react';
import '../css/skills.css';



class SkillComp extends Component {
    constructor(props){
        super(props)
        this.state = {
            addnew:'', 
            checked: false
        }
    }

    handleSubmit=(e)=>{
        this.props.addnew(e, this.state.addnew, this.state.checked)
        this.setState({
            addnew:''
        }) 
    }
  render() {
    return (
        <form className="skills">
          <p>2. Skills and location</p>
                <hr/>
                <p id="wisy">Which is your primary design discipline?*</p>
                <div className="discdiv">
                    {this.props.data.map((item,i)=>{
                      return  (
                          <div key={i} className="rad">
                          <input type="radio" 
                          value={item.disc}
                          name="discrad" 
                          id={i+"x"}
                          checked={item.checked}
                          onChange={ ()=>this.props.xchange(item,i)}/> 
                      <label htmlFor={i+"x"} className="radg">{item.disc}</label></div>)
                    })}
                </div>
                <div className="sidediv">
                <div className="side1">
                    <p id="doyo">Do you have experience with any other disciplines?</p>
                   
                        {this.props.data2.map((item, i)=>{
                            return(
                                <div id="lcol" key={i}>
                                    <label className="ldisc">
                                        <input type="checkbox" 
                                        name="visdes" id="visdes" 
                                        value={item.disc}
                                        checked={item.checked}
                                        onChange={(e,i)=>this.props.checkbox(e,item.disc)} /> {item.disc}
                                        <span className="checkmark"><i className="fa fa-trash-o" aria-hidden="true"></i>
                                        </span>
                                    </label>
                                </div>
                            )
                        })}
                    <div id="divaddbutt">
                        <input type="text" id="add" placeholder="Add new"  onChange={e=>this.setState({addnew:e.target.value})} value={this.state.addnew}/>
                        <input type="button" value="Add New" id="addbutt" onClick = {(e)=>this.handleSubmit(e, this.state.addnew, this.state.checked)}/>
                    </div>
                </div>
                <div className="side2">
                    <p className="location">Where are you interested in working?</p>
                    <p className="legal">You must be legally authorized to work without visa sponsorship in the location you choose.</p>
                    
                        {this.props.data3.map((item, i)=>{
                            return(
                                <div key={i}>
                                    <label className="lcountry">
                                        <input type="checkbox" 
                                        name={item.name} 
                                        id="icountry"
                                        checked={item.checked}
                                        onChange={(e,i)=>this.props.checkboxL(e,item.location)}/>{item.location}
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            )
                        })}
                </div>
                </div>
                <input type="submit" value="Submit"/>
        </form>
        
    );
  }
}

export default SkillComp;