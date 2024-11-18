import { useLoaderData } from "react-router-dom";
import Modal from "../Modal/Modal";




const Detail = () => {

    const singleData = useLoaderData();
    const { treatment, image, description, cost } = singleData;

    console.log(singleData)
    return (
        <div>
            <div className="card bg-base-100 shadow-xl w-[70%] mx-auto my-10">
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
                    <div className="card-actions justify-center">
                        <div className="badge badge-outline bg-primary text-white p-3">
                            <button onClick={()=>document.getElementById('my_modal_5').showModal()}>Appoinments</button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal></Modal>
        </div>
    );
};

export default Detail;