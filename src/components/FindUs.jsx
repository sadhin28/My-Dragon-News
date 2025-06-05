import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
          <div>
            <h1 className="font-bold mb-3 mt-5">Find Us On</h1>

            <div className="join join-vertical *:bg-base-100 flex">
                <button className="btn join-item justify-start text-xl"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn join-item justify-start text-xl"><FaInstagram></FaInstagram> Instragram</button>
                <button className="btn join-item justify-start text-xl"><FaTwitter></FaTwitter> Twitter</button>
            </div>
        </div>
    );
};

export default FindUs;