import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
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
           <section className="w-11/12 mx-auto mt-5">
             <Navbar></Navbar>
           </section>
           <main></main>
        </div>
    );
};

export default Home;