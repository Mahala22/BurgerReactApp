import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    Salad: 0.5,
    Bacon: 0.7,
    Cheese: 0.4,
    Meat: 1.3,

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
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }
    purchaseHandler = () =>{
        this.setState({purchasing:true})
    }
    purchaseCancelHandler = () =>{
        this.setState({purchasing: false})
    }
    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igkey => {
                return ingredients[igkey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({ purchasable: sum > 0 })
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
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredient })
        this.updatePurchaseState(updatedIngredient);
    }
    removeIngredientHandler = (type) => {
        const OldCount = this.state.ingredients[type];
        if (OldCount > 0) {
            const updatedCount = OldCount - 1;
            const updatedIngredient = {
                ...this.state.ingredients
            }
            updatedIngredient[type] = updatedCount;
            const priceDeduction = INGREDIENT_PRICES[type]
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceDeduction
            this.setState({ totalPrice: newPrice, ingredients: updatedIngredient })
            this.updatePurchaseState(updatedIngredient);
        }
        else
            return;
    }
    render() {

        const disabledInfo = { ...this.state.ingredients };
        for (let key in disabledInfo) {

            disabledInfo[key] = disabledInfo[key] <= 0

        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalcancel = {this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemove={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    purchasing={this.purchaseHandler}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder