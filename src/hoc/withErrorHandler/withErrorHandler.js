import React, { useEffect } from 'react'
import Aux from '../Auxiliary/Auxiliary'
import Modal from '../../components/UI/Modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {

    let modal = null
        let errorVal = null
        
    return (props)=>{
            useEffect(() => {
                axios.interceptors.request.use(req => {
                    errorVal = null
                })
                axios.interceptors.response.use(null, error => {
                    errorVal = error
                })
                modal = <Modal show={errorVal} clicked ={!errorVal}>Something went wrong!...</Modal>
            }, errorVal)
            return(
                <Aux>
                    {modal}
                    <WrappedComponent {...props}/>
                </Aux>

            )
    }


}

export default withErrorHandler