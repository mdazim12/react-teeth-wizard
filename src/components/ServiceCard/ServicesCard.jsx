import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ServicesCard = ({ services }) => {
    const { treatment, image, description, cost, id } = services;

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
                    <div className="badge badge-outline bg-primary text-white p-3">
                        <Link to={`details/${id}`}>
                            <button>CheckOut</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};


ServicesCard.propTypes = {
    services: PropTypes.shape({
        treatment: PropTypes.string.isRequired,   
        image: PropTypes.string.isRequired,      
        description: PropTypes.string.isRequired, 
        cost: PropTypes.number.isRequired,       
        id: PropTypes.oneOfType([                 
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
    }).isRequired
};

export default ServicesCard;
