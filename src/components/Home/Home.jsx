import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ServicesCard from "../ServiceCard/ServicesCard";
import FeedBack from "../FeedBack/FeedBack";

const Home = () => {

    const  {services,feedback} = useLoaderData();

    
    return (
        <div>
            <Banner></Banner>

            <div className="grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-10 py-20">
                {
                    services.slice(0,3).map(services => <ServicesCard key={services.id} services = {services}></ServicesCard>)
                }
                
            </div>
            <div className="mx-auto text-center my-5"><button className="btn btn-primary"> <Link to = '/all-threatments'>Show More</Link> </button></div>

            <FeedBack feedback = {feedback}></FeedBack>


        </div>
    );
};

export default Home;