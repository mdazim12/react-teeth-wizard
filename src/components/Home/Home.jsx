import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ServicesCard from "../ServiceCard/ServicesCard";

const Home = () => {

    const services = useLoaderData();

    console.log(services)
    return (
        <div>
            <Banner></Banner>

            <div className="grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-10">
                {
                    services.map(services => <ServicesCard key={services.id} services = {services}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Home;