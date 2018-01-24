import React from 'react';


function validate(obj){
        const fullnameReg = /^([a-zA-Z]{2,}\s[a-zA-Z]{2,})$/g;
        const phoneReg = /^((\+?|00)\d{1,3}|0?)-?\d{3}-?\d{3}-?\d{3}| {4}$/;
        const emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
        const cemailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
        const addressReg = /[a-zA-Z0-9,\s.]/;
        const address2Reg =/[a-zA-Z0-9,\s.]/;
        const cityReg = /^([a-z A-Z]{2,})$/g;
        const stateReg = /^([a-zA-Z0-9]{2,})$/;
        const countryReg = /^([a-zA-Z0-9]{2,}\s[a-zA-Z0-9]{2,})$/;
       const zipReg = /^([0-9a-z]{5})$/;
        const habuReg = /[a-zA-Z0-9 \w \W]{2,}/;
        return {
            fullname:!fullnameReg.test(obj.fullname), 
            phone:!phoneReg.test(obj.phone),
            email:!emailReg.test(obj.email),
            cemail:!cemailReg.test(obj.cemail),
            address:!addressReg.test(obj.address),
            address2:!address2Reg.test(obj.address2),
            city:!cityReg.test(obj.city),
            state:!stateReg.test(obj.state),
            country:!countryReg.test(obj.country),
            zip:!zipReg.test(obj.zip),
            habu:!habuReg.test(obj.habu),
        }
}


export default validate;