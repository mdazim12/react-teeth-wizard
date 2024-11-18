

const ServicesCard = ({ services }) => {

    const {treatment,image,description,cost} = services;
    console.log(services);

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt={treatment} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {treatment}
                    <div className="badge badge-secondary"> ${cost}</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline bg-primary text-white p-3">CheckOut</div>
                    
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;