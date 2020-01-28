import React from 'react';
import burgerlogo from '../../assets/images/burger-logo.png'
import classes from './Logo.module.css'

const logo = () => (
    <div className = {classes.Logo}>
        <img src={burgerlogo} alt = "Myburger"/>
    </div>

)

export default logo