import React from 'react'
import Swal from 'sweetalert2'

const alertRed = (e, content) => {
    if(e == 'FAIL'){
        return (
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: content,
                footer: '<a href>Refresh This Page</a>'
            })
        )
    } else if(e == 'SUCCESS'){
        return (
            Swal.fire(
                'Good job!',
                'SUCCESS',
                'success'
            )
        )
    } else if(e == "SOON"){
        Swal.fire(
            'Comming Soon',
            'This Feature will be in the next version',
            'success'
        )
    } else {
        return (
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                }
            })
        )
    }
}

export default alertRed