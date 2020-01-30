import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary'
import classes from '../Layout/Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component{
    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () =>{

        this.setState({showSideDrawer : false})
    }
    render(){
        return(
            <Aux>
                <Toolbar/>
                <SideDrawer 
                show={this.state.showSideDrawer}
                closed ={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }

}

    


export default Layout