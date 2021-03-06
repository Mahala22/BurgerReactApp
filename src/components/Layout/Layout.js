import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary/Auxiliary'
import classes from '../Layout/Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component{
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () =>{

        this.setState({showSideDrawer : false})
    }
    sideDrawerOpenHandler = () =>{

        this.setState((prevState) => {
            return {showSideDrawer : !prevState.showSideDrawer}
        })
    }
    render(){
        return(
            <Aux>
                <Toolbar opensidebar={this.sideDrawerOpenHandler}/>
                <SideDrawer 
                open={this.state.showSideDrawer}
                closed ={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }

}

    


export default Layout