import React from 'react'
import classes from './BuildControl.module.css'

const buildControl = (props) => (

<div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button onClick={props.less} className={classes.Less}>Less</button>
    <button onclick={props.more} className={classes.More}>More</button>
</div>

)
export default buildControl;