
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const NewMenbers = () => {

    const navigate = useNavigate()
 const [imageBase64, setImageBase64] = useState('');

 
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
 console.log(imageBase64)
    const handleSubmit = async (e) => {
        e.preventDefault();
       const data = {
      name: e.target.name.value,
      dob: e.target.dob.value,
      designation: e.target.designation.value,
      image: imageBase64,
      
    };
    console.log(data)
   fetch('https://my-dragonnews-server.onrender.com/member', {
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
                   navigate('/members')
   
   
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
        <div className='min-h-screen flex items-center justify-center bg-[#f4f3f0] px-4 py-8'>
            <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-10 relative" >
                <div className="max-w-2xl mx-auto p-4">

                    <a href="/" className="absolute top-4 left-4 text-lg font-semibold text-gray-700 hover:underline">
                        ← Back to home
                    </a>

                    <h2 className="text-3xl font-bold text-center text-[#374151] mb-2">সদস্য যোগ করুন</h2>
                    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                           
                            className="w-full border p-2 rounded"
                            required
                        />
                        <input
                            type="date"
                            name="dob"
                            className="w-full border p-2 rounded"
                            required
                        />
                        <input
                            type="text"
                            name="designation"
                            placeholder="Designation"
                            className="w-full border p-2 rounded"
                            required
                        />
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full border p-2 rounded"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-[#d6a86b] hover:bg-[#c99757] text-white font-semibold py-2 px-6 rounded transition-all duration-300"
                        >
                            Add Member
                        </button>
                    </form>

                    {/* Show members */}

                </div>
            </div>
        </div>
    );
};

export default NewMenbers;