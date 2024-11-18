

const FeedbackCard = ({ feedback }) => {


    const {  name, userImg, review } = feedback;

    
    return (
        <div className="card  shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src= {userImg}
                    alt="Shoes"
                    className="rounded-full object-cover w-[100px] h-[100px]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p> {review} </p>
                
            </div>
        </div>
    );
};

export default FeedbackCard;