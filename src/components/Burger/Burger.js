import React from 'react'
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.module.css'



const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(igkey => {
            //console.log("value of the" + igkey + "is" +props.ingredients[igkey])      
            return [...Array(props.ingredients[igkey])].map((_, i) => {
                      //to return single array element of ingredient
                return <BurgerIngredient key={igkey + i} type={igkey} />;  //of which kind (eg: meat0 meat)
            });
    })
    .reduce((arr, el)=> {
        return arr.concat(el)
    })
    if(transformedIngredients.length === 0)
    {
        transformedIngredients = <p>Please add the ingredients</p>
    }
    console.log(transformedIngredients)
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>


    );
};

export default burger;