
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
const AddPosts = () => {
    const navigate=useNavigate()
    const { register, handleSubmit, formState: { errors },} = useForm();

    const onSubmit = async (data) => {
       
       fetch('http://localhost:5000/posts',{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data)
        
           Swal.fire({
             title:'Success',
             text:"Add Coffee Item Successfully",
             icon:'success',
             confirmButtonText:'Cool'
           })
           navigate('/')
           
        
       })
       .catch(errors=>{
          Swal.fire({
             title:'Error',
             text:`${errors.message}`,
             icon:'error',
             confirmButtonText:'Cool'
           })
       })
      
    };
   const post = 
    {
  "status": true,
  "data": [
    {
      "_id": "4e6092d54c18fbd89ad59e88a1e87fbb",
      "others_info": {
        "is_todays_pick": false,
        "is_trending": false
      },
      "category_id": "07",
      "rating": {
        "number": 4.5,
        "badge": "Excellent"
      },
      "total_view": 300,
      "title": "Joe Biden announces $3B in new military aid to Ukraine",
      "author": {
        "name": "",
        "published_date": "2022-08-24 22:30:00",
        "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
      },
      "thumbnail_url": "https://i.ibb.co/QnwC4sG/unsplash-Eh-Tc-C9s-YXsw-11.png",
      "image_url": "https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png",
      "details": "Washington, Aug 24 (Prensa Latina) President Joe Biden has announced he will allot nearly billion in military aid to Kyiv – the biggest US package so far since the beginning of the Russian military…"
    }]}
   

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f4f3f0] px-4 py-8">
            <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-10 relative">
                <a href="/" className="absolute top-4 left-4 text-lg font-semibold text-gray-700 hover:underline">
                    ← Back to home
                </a>

                <h2 className="text-3xl font-bold text-center text-[#374151] mb-2">পোস্ট করুন</h2>
                

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { name: 'title', label:'Post Title', placeholder: 'Enter Post Title' },
                            { name: 'published_date', label: 'Published date', placeholder: 'Enter published_date' },
                            { name: 'details', label: 'Details', placeholder: 'Enter All details' },
                           
                        ].map(({ name, label, placeholder }) => (
                            <div key={name}>
                                <label className="block mb-1 font-medium">{label}</label>
                                <input
                                    {...register(name, { required: `${label} is required` })}
                                    placeholder={placeholder}
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#d6a86b]"
                                />
                                {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>}
                            </div>
                        ))}
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Thumbnail url</label>
                        <input
                            {...register('thumbnail_url', {
                                required: 'Photo URL is required',

                            })}
                            placeholder="thumbnail_url"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#d6a86b]"
                        />
                        {errors.photo && <p className="text-red-500 text-sm mt-1">{errors.photo.message}</p>}
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Image url</label>
                        <input
                            {...register('image_url', {
                                required: 'image_url',

                            })}
                            placeholder="Enter photo URL"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#d6a86b]"
                        />
                        {errors.photo && <p className="text-red-500 text-sm mt-1">{errors.photo.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#d6a86b] hover:bg-[#c99757] text-white font-semibold py-2 px-6 rounded transition-all duration-300"
                    >
                        Add Coffee
                    </button>
                </form>

                <ToastContainer position="top-right" autoClose={3000} />
            </div>
        </div>
    );
};

export default AddPosts;