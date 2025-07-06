
const Profilecard = ({user,handeldelate}) => {
  const member = user 
  return (
  <div key={member._id} className="bg-white p-4 shadow rounded">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p>DOB: {member.dob}</p>
            <p>Designation: {member.designation}</p>
           <div className="flex justify-end"> <button onClick={()=>handeldelate(`${user._id}`)} className="btn mt-3  btn-circle bg-amber-400 hover:text-white hover:bg-amber-600 ">X</button></div>
          </div>

    );
};

export default Profilecard;