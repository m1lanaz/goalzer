import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FaUserAlt, FaPen, FaCalendarCheck, FaCheck } from "react-icons/fa";

const Home = () => {
  return (
    <div >
      <Navbar />
      <div className="flex flex-col items-center bg-myGreen">
        <h1 className="font-Nunito text-white font-extrabold text-7xl pt-20 xl:text-center mx-5">
          We Help You Achieve <span className="font-extrabold"> More </span>
        </h1>
        <p className="text-white text-xl pt-6 xl:text-center mx-5">
          Whether its to lose weight, pick up a hobby, or learn new skills we're
          here to help.
        </p>
        <div className="pb-16">
          <button className="btn text-myGreen btn-wide my-8 ">Sign In</button>
        </div>
      </div>
      <h2 className="bg-white text-center text-4xl font-medium pt-11">
        How It Works
      </h2>
      <div className="bg-white flex flex-wrap justify-center p-10 pb-11">
        <div className="flex flex-col mx-10 items-center w-56 mb-9	">
          <FaUserAlt className="text-4xl mb-2" />
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            autem nam beatae provident neque tempora quo sunt eaque perferendis.
            Quibusdam blanditiis veritatis fuga a, temporibus dolores quas vel
            illo deserunt.
          </p>
        </div>
        <div className="flex flex-col mx-10 items-center w-56 mb-9">
          <FaPen className="text-4xl mb-2" />
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            autem nam beatae provident neque tempora quo sunt eaque perferendis.
            Quibusdam blanditiis veritatis fuga a, temporibus dolores quas vel
            illo deserunt.
          </p>
        </div>
        <div className="flex flex-col mx-10 items-center w-56 mb-9">
          <FaCalendarCheck className="text-4xl mb-2" />
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            autem nam beatae provident neque tempora quo sunt eaque perferendis.
            Quibusdam blanditiis veritatis fuga a, temporibus dolores quas vel
            illo deserunt.
          </p>
        </div>
        <div className="flex flex-col mx-10 items-center w-56 mb-9">
          <FaCheck className="text-4xl mb-2" />
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            autem nam beatae provident neque tempora quo sunt eaque perferendis.
            Quibusdam blanditiis veritatis fuga a, temporibus dolores quas vel
            illo deserunt.
          </p>
        </div>
      </div>
      <div className="text-white bg-myGreen">
        <h3 className="text-4xl font-bold pt-24 text-center">
          "A goal without a plan is only a dream"
        </h3>
        <p className="text-center text-xl font-medium pt-5 pb-20">
          -Brian Tracey
        </p>
      </div>
      <div className="bg-white m-14 flex justify-center">
        <div className="bg-myBlack w-8/12 text-white p-10 rounded-3xl text-center">
          <p>
            We use multiplke methods that have been tested and gkjdfhkgduf
            fjgdkfigu fgjhfgd fgifg ihfgif hg gihfg difgh ifhgd ifg dfghdifgoie
            ritu riufk gdfkfgieri ery eyre dfjsdh euyr dfgj sdhfei df fdjhsdryer
            dhjs dfhfe8r f dhfsdue dfsjdhfeuy fdjshsjye w sdf sdjfhs eurf euyr
            rs udf gfghdf g fgdkfjg fjghdfgj fgdfhjwe ew8ewe q we e we e er r
            trttrurt itrurit r xcv v bcvbcvb v nfghfg gfdfs df sd fsd f ersere
            xcvxcvfv \zx\z xcvvcx bvbvbcv bbcv fgdf gdfg dfg dfg fs ar e er er
            hfgfghfgh lpopokl popoipolkl opoioioi mnmnbmnb waaewawa qasdaw
            zxdzdszds trtrd gffgc uyuytuyg nbnbnh ioiou Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Officia autem nam beatae
            provident neque tempora quo sunt eaque perferendis. Quibusdam
            blanditiis veritatis fuga a, temporibus dolores quas vel illo
            deserunt.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
