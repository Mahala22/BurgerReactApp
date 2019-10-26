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
            Salad: 0,
            Bacon: 0,
            Cheese: 0,
            Meat: 0
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
        const priceDeduction = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceDeduction;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredient })

    }
    removeIngredientHandler = (type) => {
        const OldCount = this.state.ingredients[type];
        if (OldCount > 0) {
            const updatedCount = OldCount - 1;
            const updatedIngredient = {
                ...this.state.ingredients
            }
            updatedIngredient[type] = updatedCount;
            const priceSubstraction = INGREDIENT_PRICES[type]
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceSubstraction
            this.setState({ totalPrice: newPrice, ingredients: updatedIngredient })
        }
        else
            return;
    }
    render() {
        const disabledInfo = {...this.state.ingredients};
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemove={this.removeIngredientHandler}
                    disabled={disabledInfo}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder