import React, { Component } from 'react';
import './App.css';
import FormComp from "./components/form";
import Header from "./components/header";
import SkillComp from "./components/skills";
import discipline from "./data/discipline";
import location from "./data/location";
import PropTypes from 'prop-types';
import Portfolio from "./components/portfolio";
import ErrorPage from "./components/404";
import { BrowserRouter, Route , Switch} from 'react-router-dom'



class App extends Component {
  constructor(){
    super()
    this.state = {
        disc : discipline,
        loc: location,
        disc2: [ ]
      }
}

//Handle Form 
handleForm = (componentstate)=>{
  
  console.log('form handled', componentstate);
}
//Add new items to Discipline array
addNewDisc = (e, input,checked)=>{
  const arr = Object.assign([], this.state.disc2)
  const newObj = {"disc":input , "checked": checked}
  const s = [newObj].concat(arr)
  this.setState({disc2: s})
  console.log('new item added', s);
  
}
//radio inputs for the disciplines
handleChange = (x, i)=>{
const newArr = this.state.disc.map(({disc, checked})=>{return{ disc,checked:false}})

  // 1. you could store the index of currently checked element inside the state
// 2. compare the indexes of currently selected  radio and to be selected radio
// 3. if they are not the same, turn the checked value of currently checked element to false
// 4. then turn the value of to be selected element to true

  const newDisc = Object.assign({}, this.state.disc[i] , {checked:!i.checked} )
   const newArr1 = [...newArr.slice(0, i), newDisc, ...newArr.slice(i + 1)]
  this.setState({disc: newArr1})
  console.log( newArr1);
}
//checkbox inputs for the disciplines
handleCheckbox = (e, i)=>{
  const arr = Object.assign([], this.state.disc2)
  const selectedDisc = arr.find((item)=>item.disc === i)
  const selectedDiscIndex = arr.findIndex((item)=>item.disc === i)
  const newDisc = Object.assign({}, selectedDisc , {checked:!selectedDisc.checked} )
  arr[selectedDiscIndex] = newDisc;
  this.setState({disc2: arr})
}
//checkbox inputs for the locations
handleCheckboxL = (e, i)=>{
  const arr = Object.assign([], this.state.loc)
  const selectedLoc = arr.find((item)=>item.location === i)
  const selectedLocIndex = arr.findIndex((item)=>item.location === i)
  const newLoc = Object.assign({}, selectedLoc , {checked:!selectedLoc.checked} )
  arr[selectedLocIndex] = newLoc;
  this.setState({loc: arr})
}

//handle processing of portfolio input forms
portfolioHandle = (e, a, b)=>{
  e.preventDefault()
  console.log("hello world", a, b)
  
}
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div>
              {/*<Prompt message = {(location)=>`Are you sure you wanna go to ${location.pathname} page ?`}/>*/}
            <Switch>
              <Route  exact path="/" component={Header }  />
              <Route exact path="/personal"  render = {()=> {return (<div>
                <Header/>
                <FormComp/>
                </div>)}}  />
              <Route exact path="/skills" render={() => {return(<div><Header/> 
                                  <SkillComp  data={this.state.disc} 
                                    xchange={this.handleChange} 
                                    data2={this.state.disc2} 
                                    checkbox={this.handleCheckbox} 
                                    checkboxL={this.handleCheckboxL}
                                    data3={this.state.loc} 
                                    addnew={this.addNewDisc}/></div>)}} />
              <Route exact path="/portfolio" render = {()=> {return (<div>
                <Header/>
                <Portfolio/>
                </div>)}} />
              <Route render = {()=> {return (<div>
                <Header/>
                <ErrorPage/>
                </div>)}} exact/>  
              </Switch>    
      </div>
      </BrowserRouter>
      </div>
    );
  }
}
App.propTypes = {
  addNewDisc: PropTypes.func,
  handleChange: PropTypes.func,
  handleCheckbox: PropTypes.func,
  handleCheckboxL: PropTypes.func,
  data: PropTypes.array,
  data2: PropTypes.array,
  data3: PropTypes.array,
}
export default App;
