
import moment from 'moment';
// import flag from '../assets/satradal_img.png'
import logo from '../assets/satradolLogo_files/জাতীয়তাবাদী_ছাত্রদলের_লোগো(1).svg.png'
import flag from '../assets/satradolLogo_files/Flag_of_Bangladesh_Jatiotabadi_Chatra_Dal.svg.png'
import flmilyimg from '../assets/satradolLogo_files/thumbnail-of-bnp-news-25--e489.jpg'
const Header = () => {
    return (
        <div className='header '>
            <div className='flex w-11/12 mx-auto  justify-between'>
                <div><img className='py-3 h-[100px] w-[100px]' src={logo} alt="" /></div>
                
                    <div className='p-5 text-center'>
                        <p>বিসমিল্লাহির রাহমানির রাহিম</p>
                        <p className=' text-gray-400 font-Poppins'>শিক্ষা ঐক্য প্রগতি </p>
                    </div>
                
                <div><img className='py-3 h-[100px] w-[100px]' src={flmilyimg} alt="" /></div>

            </div>
            <div className='text-center mx-10'>
                <p className=' text-gray-400 font-Poppins'>বাংলাদেশ জাতীয়তাবাদী ছাত্রদল ।</p>
                <p className=' text-gray-400 font-Poppins'>সিটি বিশ্ববিদ্যালয় শাখা।</p>

                <p>{moment().format("ddd, MMMM Do YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;