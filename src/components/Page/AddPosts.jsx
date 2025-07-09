
import { th } from 'framer-motion/client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
const AddPosts = () => {
        const navigate = useNavigate()
     const [imageBase64, setImageBase64] = useState('');
     const [thumbnailBase64, setthumbnailBase64] = useState('');
    
     
      const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () => {
          setImageBase64(reader.result); // base64 string
        };
    
        if (file) {
          reader.readAsDataURL(file);
        }
      };
      const handelthumbnailChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () => {
          setthumbnailBase64(reader.result); // base64 string
        };
    
        if (file) {
          reader.readAsDataURL(file);
        }
      };

        const handleSubmit = async (e) => {
            e.preventDefault();
           const data = {
          name: e.target.name.value,
          published_date: e.target.published_date.value,
          title:e.target.title.value,
          detail: e.target.detail.value,
          image_url: imageBase64,
          thumbnail_url: thumbnailBase64,
          
        };
       console.log(data)
       fetch('https://my-dragonnews-server.onrender.com/posts', {
                   method: "POST",
                   headers: {
                       'content-type': 'application/json'
                   },
                   body: JSON.stringify(data)
               })
                   .then(res => res.json())
                   .then(data => {
       
                        console.log(data)
                       Swal.fire({
                           title: 'Success',
                           text: "Add Members  Successfully",
                           icon: 'success',
                           confirmButtonText: 'Cool'
                       })
                       navigate('/')
       
       
                   })
                   .catch(errors => {
                       Swal.fire({
                           title: 'Error',
                           text: `${errors.message}`,
                           icon: 'error',
                           confirmButtonText: 'Cool'
                       })
                   })
       
             
        };
    
      
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f4f3f0] px-4 py-8">
            <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-10 relative">
                <a href="/" className="absolute top-4 left-4 text-lg font-semibold text-gray-700 hover:underline">
                    ← Back to home
                </a>

                <h2 className="text-3xl font-bold text-center text-[#374151] mb-2">পোস্ট করুন</h2>


                <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
                      <label >Your Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                           
                            className="w-full border p-2 rounded"
                            required
                        />
                        <label >Published Date</label>
                        <input
                            type="date"
                            name="published_date"
                            className="w-full border p-2 rounded"
                            required
                        />
                         <label >Post Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Post title"
                            className="w-full border p-2 rounded"
                            required
                        />
                         <label >Select Your Image</label>
                        <input
                            type="file"
                            name="image_url"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full border p-2 rounded"
                            required
                        />
                         <label > Select Thumbnail Image</label>
                        <input
                            type="file"
                            name="thumbnail_url"
                            accept="image/*"
                            onChange={handelthumbnailChange}
                            className="w-full border p-2 rounded"
                            required
                        />
                           <div>
                        <textarea
                           name='detail'
                            onSubmit={handleSubmit}
                            placeholder="detail"
                            className="w-full mb-4 p-2 border rounded"
                            rows="4"
                        ></textarea>
                       
                    </div>
                        <button
                            type="submit"
                            className="w-full bg-[#d6a86b] hover:bg-[#c99757] text-white font-semibold py-2 px-6 rounded transition-all duration-300"
                        >
                            Add Member
                        </button>
                    </form>

                <ToastContainer position="top-right" autoClose={3000} />
            </div>
        </div>
    );
};

export default AddPosts;