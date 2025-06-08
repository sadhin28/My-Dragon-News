
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../Header';
import RightNavbar from '../layout-component/RightNavbar';
import { FaArrowLeft } from "react-icons/fa";

const DetailsNews = () => {
    const details = useLoaderData();
    console.log(details)
    return (

        <div className=''>
            <header className='sticky top-0 bg-white'>
                <Header></Header>
            </header>
            <div className='pt-5 mb-10  gap-10 grid md:grid-cols-12 items-start  w-11/12 mx-auto'>
                <section className='md:col-span-8 flex flex-col '>
                    <h1 className='mb-3 text-xl font-bold'>Dragon News</h1>
                    <div className='shadow-2xl p-5 rounded-2xl flex flex-col '>
                        <img className='rounded-2xl' src={details.data[0].image_url} alt="" />
                        <h1 className='text-xl font-bold mt-5 mb-5'>{details.data[0].title}</h1>
                        <p className='mb-5'>{details.data[0].details}</p>
                        <div>

                            <Link className='p-1 flex items-center gap-2 text-white bg-[#D72050] w-60 justify-center ' to={`/category/${details?.data[0].category_id}`}><FaArrowLeft />All news in this category</Link>
                        </div>
                    </div>
                </section>
                <aside className='md:col-span-3 md:sticky top-40'>
                    <RightNavbar></RightNavbar>
                </aside>
            </div>

        </div>
    );
};

export default DetailsNews;