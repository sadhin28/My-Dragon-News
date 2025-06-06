import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import MainContent from "../components/layout-component/MainContent";
import RightNavbar from "../components/layout-component/RightNavbar";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div>
           <header>
             <Header></Header>
             <section className="mt-5 w-11/12 mx-auto">
                <LatestNews></LatestNews>
             </section>
           </header>
           <nav className="w-11/12 mx-auto mt-5">
             <Navbar></Navbar>
           </nav>
           <main className="pt-5 gap-10 grid md:grid-cols-12  w-11/12 mx-auto">
            <aside className="left col-span-3">
                <LeftNavbar></LeftNavbar>
            </aside>
            <section className="main col-span-6">
                <MainContent></MainContent>
            </section>
            <aside className="right col-span-3">
                <RightNavbar></RightNavbar>
            </aside>
           </main>
        </div>
    );
};

export default Home;