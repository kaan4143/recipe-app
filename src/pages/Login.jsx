import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="bglogin min-h-screen w-full flex justify-center items-center ">
      <div>
        <form className="flex flex-col gap-3" onSubmit={() => navigate("home")}>
          <img src="https://svgsilh.com/svg/2085075.svg" alt="" width="200px" />

          <input
            type="text"
            placeholder="Enter your username"
            className="rounded-lg bg-black p-2 text-white"
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="rounded-lg bg-black p-2 text-white"
            required
          />
          <button className="rounded-lg bg-black p-1 text-white">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
