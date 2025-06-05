import Header from "../components/Header";
import LatestNews from "../components/LatestNews";

const Home = () => {
    return (
        <div>
           <header>
             <Header></Header>
             <section className="mt-5 w-11/12 mx-auto">
                <LatestNews></LatestNews>
             </section>
           </header>
           <nav></nav>
           <main></main>
        </div>
    );
};

export default Home;