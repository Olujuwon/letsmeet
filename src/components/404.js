import React from 'react';
import '../css/404.css';
import  img from '../imgs/404.png';


const ErrorPage =()=>{
    return (
        <div className="image">
          <img src={img} alt="not found!"></img>
        </div>
      );
} 

    


export default ErrorPage;