
const Profilecard = ({user,handeldelate}) => {
 
  return (
  <div className="bg-white p-4 shadow rounded">
            <img
              src={user.image}
              alt={user.name}
              className="w-full  h-60 object-center rounded mb-2"
            />
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p>DOB: {user.dob}</p>
            <p>Designation: {user.designation}</p>
           <div className="flex justify-end"> <button onClick={()=>handeldelate(`${user._id}`)} className="btn mt-3  btn-circle bg-amber-400 hover:text-white hover:bg-amber-600 ">X</button></div>
          </div>

    );
};

export default Profilecard;