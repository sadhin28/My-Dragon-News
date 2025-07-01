
import moment from 'moment';
import logo from '../assets/satradal_img.png'
const Header = () => {
    return (
        <div className='header '>
            <div className='flex justify-between'>
                <div><img className='py-3 h-[100px] w-full' src={logo} alt="" /></div>
                <div><img className='py-3 h-[100px] w-full' src={logo} alt="" /></div>
                <div><img className='py-3 h-[100px] w-full' src={logo} alt="" /></div>

            </div>
            <div>
                <p className=' text-gray-400 font-Poppins'>বাংলাদেশ জাতীয়তাবাদী ছাত্রদল</p>
                <p className=' text-gray-400 font-Poppins'>সিটি বিশ্ববিদ্যালয়</p>
                <p className=' text-gray-400 font-Poppins'>শিক্ষা ঐক্য প্রগতি ছাত্রদলের মূল নীতি</p>
                <p>{moment().format("ddd, MMMM Do YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;