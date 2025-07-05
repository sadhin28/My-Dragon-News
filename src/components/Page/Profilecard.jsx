import { use } from "react";
import { FiDelete } from "react-icons/fi";

const Profilecard = ({user,handeldelate}) => {
   return (
       <div className="md:max-w-xs w-full bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mx-auto">
      <img
        src={user.image_url}
        alt={user.name}
        className="mx-auto rounded-full h-40 w-40 p-4 md:p-1 md:h-30 md:w-30 object-cover"
      />
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
        <p className="mt-1 text-gray-600">{user.Designation}</p>
      </div>
     <div className="flex justify-end px-4 py-2 ">
         <button onClick={()=>handeldelate(`${user._id}`)} className="btn btn-circle bg-amber-400 hover:text-white hover:bg-amber-600">X</button>
     </div>
    </div>
        
    );
};

export default Profilecard;