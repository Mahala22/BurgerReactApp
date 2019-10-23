import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component{

    // constructor(){
    //     super(props);
    //     this.state ={...}
    // }
    state ={
        ingredients:{
        Salad: 0,
        Bacon: 0,
        Cheese: 0,
        Meat: 0
        }
    }
    
    render(){

        return(
            <Aux>
                <Burger ingredients = {this.state.ingredients}/>
            </Aux>
        )
    }
}

export default BurgerBuilder