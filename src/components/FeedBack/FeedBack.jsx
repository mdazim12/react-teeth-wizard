import FeedbackCard from "../FeedbackCard/FeedbackCard";




const FeedBack = ({feedback}) => {

    const {reviewId,name,userImg,review} = feedback;

   


    return (
        <div className="grid grid-cols-3  gap-5">
           {
                feedback.map(feedback => <FeedbackCard key={feedback.reviewId} feedback = {feedback}></FeedbackCard>)
           }
        </div>
    );
};

export default FeedBack;