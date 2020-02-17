import React, { useEffect } from 'react'
import Aux from '../Auxiliary/Auxiliary'
import Modal from '../../components/UI/Modal/Modal'


const withErrorHandler = (WrappedComponent, axios) => {

    let errorVal = null
    return (props)=>{
        
        // axios.interceptors.request.use(request => {
        //     errorVal = null
        // })
        useEffect(() => {
            
            axios.interceptors.response.use(null, error => {
                errorVal = error
                //console.log(error)
               // return error
            })
            
            //console.log('use effect running')
        }, [props.axios.error])
        return(
            <Aux>
                <Modal show={errorVal} modalcancel ={null}>Something went wrong!...</Modal>
                <WrappedComponent {...props}/>
            </Aux>

        )
        
    }


}

export default withErrorHandler