import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import Aux from '../../../hoc/Auxiliary'
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = () => (
    <Aux>
        <header className={classes.Toolbar}>
            <div>MENU</div>
            <Logo/>
            <nav>
                <NavigationItems></NavigationItems>
            </nav>
        </header>
    </Aux>
)


export default toolbar