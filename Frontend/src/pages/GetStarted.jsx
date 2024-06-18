import { useNavigate } from "react-router-dom";
import ButtonPink from "../components/ButtonPink";
import Header from "../components/Header";

const GetStarted = () => {
  const navigate = useNavigate();

  const getRouted = () => {
    navigate(`/notification`);
  };

  return (
    <section className="h-screen">
      <div className="bg-getStartedImg bg-contain bg-no-repeat h-full">
        <Header />
        <div className="w-44 mt-16 ml-8">
          <h1 className="font-black text-lightcreme text-4xl leading-10">
            Hi Leon, welcome to Silent Moon
          </h1>
        </div>
      </div>
      <div className="mt-16 pb-20">
        <ButtonPink name="GET STARTED" funktion={getRouted} />
      </div>
    </section>
  );
};

export default GetStarted;
