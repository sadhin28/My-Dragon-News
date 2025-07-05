
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import flag from '../assets/satradolLogo_files/Flag_of_Bangladesh_Jatiotabadi_Chatra_Dal.svg.png'
const Footer = () => {
    return (
        <footer className='text-white bg-[#1a080c]  border-t'>
            <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Company Info */}
                <div>
                    <h1 className="flex gap-2  items-center-center text-lg font-semibold mb-4">বাংলাদেশ জাতীয়তাবাদী ছাত্রদল</h1>
                    <p className="mt-2 text-sm">
                        সিটি বিশ্ববিদ্যালয় শাখা।
                    </p>
                    <img className="w-25 mt-2" src={flag} alt="" />
                </div>

                {/* Help & Support */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li>

                            <Link to='/' className="hover:cursor-pointer">Home</Link>
                        </li>
                        <li>
                            <Link to='/members' className="hover:cursor-pointer">Menber</Link>
                        </li>
                        <li>
                            <Link to='/about' className="hover:cursor-pointer">About</Link>
                        </li>

                    </ul>
                </div>


                {/*দলীয় শ্লোগান */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">দলীয় শ্লোগান</h3>
                    <p className="text-sm">
                        "প্রথম বাংলাদেশ আমার শেষ বাংলাদেশ,<br /><br />

                        জীবন বাংলাদেশ আমার মরন বাংলাদেশ।"<br /><br />

                        "বাংলাদেশ জিন্দাবাদ"
                    </p>

                </div>
                
                {/* Earning Programs */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="text-xl flex gap-3">
                        <a href="#/" target="_blank"><FaFacebook /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer">    <FaInstagram /></a>

                    </div>
                   
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-400"></div>

            {/* Bottom Section */}


            {/* Copyright Section */}
            <p className="text-center   text-xs py-10"> Copyright © {new Date().getFullYear()} Bangladesh Jatiotabadi Chatradal || City University Branch.</p>

        </footer>
    );
};

export default Footer;