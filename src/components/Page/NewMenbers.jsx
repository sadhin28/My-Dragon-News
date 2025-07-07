import { div } from 'framer-motion/client';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const NewMenbers = () => {
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        designation: '',
        image: '',
    });
    const navigate = useNavigate()
    const [members, setMembers] = useState([]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'image') {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({ ...prev, image: reader.result }));
            };
            reader.readAsDataURL(file); // Convert image to base64
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch('https://my-dragonnews-server.onrender.com/member', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
         Swal.fire({
                            title: 'Success',
                            text: "Add Members  Successfully",
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                        navigate('/members')
        setFormData({ name: '', dob: '', designation: '', image: '' });
        fetchMembers();
    };

    const fetchMembers = async () => {
        const res = await fetch('http://localhost:5000/member');
        const data = await res.json();
        setMembers(data);
    };

    useEffect(() => {
        fetchMembers();
    }, []);
    return (
        <div className='min-h-screen flex items-center justify-center bg-[#f4f3f0] px-4 py-8'>
            <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-10 relative" >
                <div className="max-w-2xl mx-auto p-4">

                    <a href="/" className="absolute top-4 left-4 text-lg font-semibold text-gray-700 hover:underline">
                        ← Back to home
                    </a>

                    <h2 className="text-3xl font-bold text-center text-[#374151] mb-2">সদস্য যোগ করুন</h2>
                    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            required
                        />
                        <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            required
                        />
                        <input
                            type="text"
                            name="designation"
                            placeholder="Designation"
                            value={formData.designation}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            required
                        />
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-[#d6a86b] hover:bg-[#c99757] text-white font-semibold py-2 px-6 rounded transition-all duration-300"
                        >
                            Add Member
                        </button>
                    </form>

                    {/* Show members */}

                </div>
            </div>
        </div>
    );
};

export default NewMenbers;