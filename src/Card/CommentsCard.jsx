import NameCircle from "../Comonents/NameCircle";

const CommentsCard = ({comment}) => {
  return (
    <div className="my-4">
      <div className="w-full flex gap-x-4">
        <div>
          <NameCircle name={comment.name}/>
        </div>
        <div>
          <h1 className="font-bold">{comment.name}</h1>
          <p>{comment.content}</p>
        </div>
      </div>
    </div>
    
  );
};

export default CommentsCard;
