import React from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios'
import Swal from 'sweetalert2'

const confirmationCode = (props) => {
  const confirmation = async () => {
    const token = props.match.params.confirmationCode
    await axios.post(`${process.env.REACT_APP_BASE_URL}/users/register/${token}`)
      .then((res) => {
        // console.log(res.data == "SUCCEESS INPUT")
        if(res.data == "SUCCEESS INPUT"){
          Swal.fire({
            title: 'Confirmation Email',
            text: "Your Account Success activation",
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login'
          }).then((result) => {
            if (result.isConfirmed == true) {
              window.location = "http://localhost:3000/Login"
            }
          })
        }
      })
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>Confirmation Account !!</strong>
        </h3>
      </header>
        <button className="btn btn-danger" onClick={() => confirmation()}> AKTIVATION YOUR ACCOUNT HERE</button>
    </div>
  )
}

export default confirmationCode;