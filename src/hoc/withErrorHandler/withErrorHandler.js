import React, { Component } from 'react'
import Aux from '../Auxiliary/Auxiliary'
import Modal from '../../components/UI/Modal/Modal'


const withErrorHandler = (WrappedComponent, axios) => {

    
    
    return class extends Component{

        state = {error : null}

        componentWillMount(){

            this.reqInterceptors = axios.interceptors.request.use(req => {
                this.setState({error: null})
               // console.log(errorVal)
               return req
            })

            this.resInterceptors = axios.interceptors.response.use(null, error => {
                this.setState({error: error})
            })
        }
        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptors)
            axios.interceptors.response.eject(this.resInterceptors)
        }
        errorConfirmedhandler = () =>{
            this.setState({error: null})
        }
        render(){
            return(
                <Aux>
                    <Modal show={this.state.error} modalcancel={this.errorConfirmedhandler}>{this.state.error ? this.state.error.message : null}</Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
    
            )

        }
        
        // useEffect(() => {
            
        //     // axios.interceptors.request.use(req => errorVal.error = null)
        //      axios.interceptors.response.use(null, error => {
        //          errorVal.error = error
        //         // console.log(errorVal)
        //         // return error
        //      })
        //      //console.log('use effect running')
        //      console.log(errorVal.error)
        //      alert("use effect")
        // })
        
        
        //console.log(errorVal.error)
        
        
    }


}

export default withErrorHandler