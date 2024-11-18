import { useLoaderData } from "react-router-dom";
import ServicesCard from "../ServiceCard/ServicesCard";

const AllTheatements = () => {

    const  {services} = useLoaderData()

    return (


        <div className="grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-10 py-20">
             {
                    services.map(services => <ServicesCard key={services.id} services = {services}></ServicesCard>)
             }
        </div>
    );
};

export default AllTheatements;