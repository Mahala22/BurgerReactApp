import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = (props) => (
    
        <header className={classes.Toolbar}>
            <div onClick = {props.opensidebar}>MENU</div>
            <div className={classes.Logo}>
                <Logo />
            </div>
            
            <nav className={classes.DesktopOnly}>
                <NavigationItems></NavigationItems>
            </nav>
        </header>
    
)


export default toolbar