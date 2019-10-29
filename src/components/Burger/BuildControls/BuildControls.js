import React from 'react';
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'
const controls = [
    { label: 'Salad', type:'Salad'},
    { label: 'Bacon', type:'Bacon'},
    { label: 'Cheese', type:'Cheese'},
    { label: 'Meat', type:'Meat'},
]



const buildControls = (props) => {
    
    return(
        <div className={classes.BuildControls}>
            <p>Current Price : <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    more={() => props.ingredientAdded(ctrl.type)}
                    less={() => props.ingredientRemove(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                />
            ))}
            <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.purchasing}
            >ORDER NOW</button>
        </div>
)}
export default buildControls;