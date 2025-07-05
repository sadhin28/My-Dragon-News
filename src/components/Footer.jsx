
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
                            <Link to='/members'  className="hover:cursor-pointer">Menber</Link>
                        </li>
                        <li>
                             <Link to='/about'  className="hover:cursor-pointer">About</Link>
                        </li>
                       
                    </ul>
                </div>

                {/* Earning Programs */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Get in Touch for More Offers</h3>
                    <div className="text-xl flex gap-3">
                        <a href="https://www.facebook.com/taosifsadhin/" target="_blank"><FaFacebook /></a>
                        <a href="https://www.instagram.com/taosifsadhin/" target="_blank" rel="noopener noreferrer">    <FaInstagram /></a>
                        
                    </div>
                    <p className='text-sm mt-2'>Stay connected with us to discover the latest discounts, exclusive deals, and exciting offers tailored just for you!</p>
                </div>

                {/* Download App */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">We Are Hiring!</h3>
                    <p className="text-sm">
                        Join our team of deal-driven superheroes and save the world of
                        savings. Ready to seize the deal?
                    </p>
                    <a
                        href="#"
                        className="mt-2 inline-block text-red-500 hover:underline font-medium text-sm"
                    >
                        See All Jobs
                    </a>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-400"></div>

            {/* Bottom Section */}
            <div className="container mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Blog Section */}
                

                {/* Hiring Section */}
                

                {/* Subscribe Section */}
                
            </div>

            {/* Copyright Section */}
            <p className="text-center   text-xs py-10"> Copyright © {new Date().getFullYear()} Discount PRO. All rights reserved || Created By Sadhin</p>
            
        </footer>
    );
};

export default Footer;