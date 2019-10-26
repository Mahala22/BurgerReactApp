import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'


const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3,

}


class BurgerBuilder extends Component {

    // constructor(){
    //     super(props);
    //     this.state ={...}
    // }
    state = {
        ingredients: {
            Salad: 1,
            Bacon: 1,
            Cheese: 2,
            Meat: 1
        },
        totalPrice: 4
    }
    addIngredientHandler = (type) => {
        const OldCount = this.state.ingredients[type];
        const updatedCount = OldCount + 1;
        const updatedIngredient = {
            ...this.state.ingredients
        }
        updatedIngredient[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredient })

    }
    removeIngredientHandler = (type) => {
        const OldCount = this.state.ingredients[type];
        const updatedCount = OldCount - 1;
        const updatedIngredient = {
            ...this.state.ingredients
        }
        updatedIngredient[type] = updatedCount;
        const  priceSubstraction = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceSubstraction
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredient })

    }
    render() {

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemove={this.addIngredientHandler}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder