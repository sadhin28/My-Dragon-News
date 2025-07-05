
import Footer from "../components/Footer";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import MainContent from "../components/layout-component/MainContent";
import RightNavbar from "../components/layout-component/RightNavbar";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div>
           <header className=" bg-white">
        {/* sticky top-0 z-30 */}
             <Header></Header>
             <section className="mt-5  w-11/12 mx-auto ">
                <LatestNews></LatestNews>
             </section>
           </header>
           <nav className="sticky top-0  p-2 z-30 bg-white w-11/12 mx-auto mt-5">
             <Navbar></Navbar>
           </nav>
           <main className="pt-5 mb-10 gap-10 grid  md:grid-cols-12  w-11/12 mx-auto">
            {/* <aside className=" md:col-span-3">
                <LeftNavbar></LeftNavbar>
            </aside> */}
            <section className="main md:col-span-9">
                <MainContent></MainContent>
            </section>
            <aside className="right md:col-span-3">
                <RightNavbar></RightNavbar>
            </aside>
           </main>
           <Footer></Footer>
        </div>
    );
};

export default Home;