import { LOGIN } from '../types'
import axios from 'axios'
import Cookie from 'universal-cookie'

import Swal from 'sweetalert2'

const cookie = new Cookie();

export const loginUser  = ( payload ) => (dispatch) => {
// export const loginUser  = async ( payload, dispatch ) => {
    console.log("asuk", payload)
    return (
        axios.post(`${process.env.REACT_APP_BASE_URL}/users/login`, payload )
        .then(res => {
            if(res.data === "FAILED"){
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: res.data
                })
            } else {
                const { _id, email } = res.data
                Swal.fire({
                    position: 'center',
                    type: 'success',
                    title: 'Login Success!',
                    showConfirmButton: true,
                    timer: 1500
                })
                dispatch({
                    type: LOGIN,
                    payload: res.data
                })
                cookie.set('username', {_id, email }, {path: '/'})
            }
        }).catch((err) => {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: err.message
            })
        })
    )
}

export const keepLogin = (objUser) => {
    console.log("keep login",objUser)
    return {
        type: "LOGIN",
        payload: {
            id: objUser.id,
            email: objUser.email,
        }
    }
}

export const logoutUser = () => {
    console.log('asuk1')
    cookie.remove('username');
    console.log('logout')
    return {
        type: 'LOGOUT'
    }
}