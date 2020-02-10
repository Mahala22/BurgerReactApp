import React, { Component } from 'react'
import Aux from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component{

    componentDidUpdate(){
        console.log("[OrderSummary] updated")
    }
    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igkey => {
            return <li key={igkey}><span style={{textTransform: 'capitalize'}}>{igkey}</span>: {this.props.ingredients[igkey]}</li>
        })
        return(
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients</p>
                <ul>
                    {ingredientSummary}
                    
                </ul>
                <p><strong>TOTAL PRICE : {this.props.price.toFixed(2)} dollars</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancel}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Aux>
        )
    }
}
export default OrderSummary