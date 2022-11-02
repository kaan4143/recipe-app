import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="flex bg-pink-300 w-[25rem] flex-col justify-center items-center gap-2 ">
      <p className="text-xl">{data.recipe.label}</p>
      <img
        src={data.recipe.image}
        width="150px"
        alt=""
        className="rounded-lg"
      />
      <button
        className="rounded-lg bg-black text-white p-1"
        onClick={() => navigate("/details", { state: data.recipe })}
      >
        Details
      </button>
    </div>
  );
};

export default Card;
