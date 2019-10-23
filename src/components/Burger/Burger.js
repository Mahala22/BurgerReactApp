import React from 'react'
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';
import classes from './'



const burger = (props) => {

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="bread-top"/>
        </div>


    );
};

export default burger;