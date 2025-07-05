import { useLoaderData } from "react-router-dom";
import NewsCard from "../layout-component/NewsCard";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const CategoryNews = () => {
    const news = useLoaderData()
    const [newnews,setnewnews]=useState(news)
    const {loading}=useContext(AuthContext)
        const handelDelete = _id => {
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

                fetch(`https://my-dragonnews-server.onrender.com/posts/${_id}`,{
                    method:'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        
                       
                        if (data.deletedCount > 0) {

                            swalWithBootstrapButtons.fire({
                                title: "Deleted!",
                                text: "Your post has been deleted.",
                                icon: "success"
                            });
                            const remaining = newnews.filter(cof=> cof._id !== _id);
                            setnewnews(remaining)
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

            <h1 className="font-bold">বাংলাদেশ জাতীয়তাবাদী ছাত্রদল</h1>
            <h1 className="font-bold text-xs">({news.length}) News Found Here</h1>
            {
                loading && <div className="grid relative top-40 justify-center">
            <span className="loading  loading-infinity loading-xl"></span>
            
        </div>
            }
            <div className="flex flex-col gap-5">
                {
                    newnews.map(posts=><NewsCard key={posts._id} handelDelete={handelDelete} posts={posts}></NewsCard>)
                }
                
            </div>
        </div>
    );
};

export default CategoryNews;