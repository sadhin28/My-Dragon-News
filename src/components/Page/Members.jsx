
import React, {  useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Profilecard from './Profilecard';
import Navbar from '../Navbar';
import Swal from 'sweetalert2';
import Footer from '../Footer';

const Members = () => {
      const newmembers = useLoaderData()
    const [member,setmember]=useState(newmembers)
     console.log(member)
    
    const handeldelate = _id => {
          console.log(_id)
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: "btn btn-success",
                    cancelButton: "btn btn-danger"
                },
                buttonsStyling: false
            });
            swalWithBootstrapButtons.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
    
                    fetch(`https://my-dragonnews-server.onrender.com/members${_id}`,{
                        method:'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            
                           
                            if (data.deletedCount > 0) {
    
                                swalWithBootstrapButtons.fire({
                                    title: "Deleted!",
                                    text: "Your member has been deleted.",
                                    icon: "success"
                                });
                                const remaining = member.filter(member=> member._id !== _id);
                                setmember(remaining)
                               
                                }
                        })
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire({
                        title: "Cancelled",
                        text: "Your imaginary Coffee is safe :)",
                        icon: "error"
                    });
                }
            });
        }
    return (
        <div>
            <Navbar></Navbar>
              <Link to='/AddMember' className='btn btn-circle sticky z-30 ml-10 top-10 mt-10  bg-amber-400 text-3xl hover:text-white hover:bg-amber-600 '>+</Link>
            <div className='mt-20 mb-20  grid gap-10 w-11/12 mx-auto md:grid-cols-3 lg:grid-cols-4'>
          {
            member.map(user=><Profilecard handeldelate={handeldelate} key={user._id} user={user}></Profilecard>)
            
         }
        
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Members;