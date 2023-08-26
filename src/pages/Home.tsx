import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="bg-myGreen">
      <Navbar />
      <div className="flex items-center flex-col">
        <h1 className="font-Nunito text-white font-extrabold text-7xl pt-20">
          We help you achieve <span className="font-extrabold"> more </span>
        </h1>
        <p className="text-white text-xl pt-6">
          Whether its to lose weight, pick up a hobby, or learn new skills
          we're here to help.
        </p>
        <div className="pb-16">
        <button className="btn text-myGreen btn-wide my-8 ">
            Sign In
        </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
