import Footer from "../Footer";
import Navbar from "../Navbar";

const About = () => {
    return (
       <dib>
        <Navbar></Navbar>
            <div className="min-h-screen flex items-center justify-center bg-[#f4f3f0] px-4 py-8">
            <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-10 relative">
                <a href="/" className="absolute top-4 left-4 text-lg font-semibold text-gray-700 hover:underline">
                    ← Back to home
                </a>
                    <h1 className='text-center font-bold mt-10 mb-10'>বাংলাদেশ জাতীয়তাবাদী ছাত্রদল</h1>
                    <p className='mb-10 text-justify'>বাংলাদেশ জাতীয়তাবাদী ছাত্রদল বাংলাদেশ জাতীয়তাবাদী দলের ছাত্র সংগঠন। বাংলাদেশ জাতীয়তাবাদী ছাত্রদল ১৯৭৯ সালে প্রতিষ্ঠিত হয়। ছাত্রদলের প্রধান শ্লোগান হচ্ছে - শিক্ষা, ঐক্য, প্রগতি। এই সংগঠনটির প্রধান কার্যালয় ঢাকার নয়া পল্টনে অবস্থিত। বর্তমানে যারা বিএনপির রাজনীতির সাথে যুক্ত, তাদের মধ্যে অনেকেই জাতীয়তাবাদী ছাত্রদলের সাথে যুক্ত ছিলেন।</p>
                    <p className='mb-10 text-justify'>জিয়াউর রহমান যখন বিএনপির প্রতিষ্ঠা করেন, তখন তিনি ভবিষ্যতের নেতৃত্ব তৈরি করার জন্য এর একটি ছাত্র সংগঠন প্রতিষ্ঠা করার প্রয়োজনিয়তা অনুভব করেন। তাই তিনি ১ জানুয়ারি ১৯৭৯ সালে কেন্দ্রীয়ভাবে এই সংগঠনটি প্রতিষ্ঠা করেন। তখনকার সময়ে জিয়াউর রহমানের জনপ্রিয়তার জন্য অনেক তরুন অনুপ্রানিত হয়ে জাতীয়তাবাদী ছাত্রদলে যোগদান করেন।.</p>
                    <p className="text-justify">কাজী আসাদুজ্জামান (ঢাকা বিশ্ববিদ্যালয়) কে আহ্বায়ক করে ঐদিন ছাত্রদলের প্রথম কমিটি প্রকাশ করা হয়।</p>
            </div>
        </div>
        <Footer></Footer>
       </dib>
    );
};

export default About;