
import moment from 'moment';
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div className='header flex flex-col justify-center items-center'>
           <div>
              <img className='py-3 w-[300px]' src={logo} alt="" />
           </div>
           <p className=' text-gray-400 font-Poppins'>Journalism Without Fear or Favour</p>
            <p>{moment().format("ddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;