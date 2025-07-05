
const Profilecard = ({user}) => {
   const photo = (JSON.stringify(user.photoFilename))
   
   return (
        <div>
       
         
           <img
  src={`http://localhost:5000/members/${photo}`}
  alt={user.name}
  className="rounded w-32 h-32 object-cover"
/>
        </div>
        
    );
};

export default Profilecard;