import { useContext, useState } from "react";
import { UserContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import { backendUrl } from "../api/api.js";

const VerficationPopUp = ({ setShowVerification, showVerification }) => {
  const { user, setUser } = useContext(UserContext);
  const [sixDigitCode, setSixDigitCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const verificateEmail = async (e) => {
    e.preventDefault();

    const userId = user.id;
    const res = await fetch(`${backendUrl}/api/v1/users/verify`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ userId, sixDigitCode }),
      credentials: "include",
    });

    const data = await res.json();

    if (!data.result)
      return setErrorMessage("Six Digit Code is wrong - try again");
    setShowVerification(false);
    navigate("/notification");
  };

  return (
    <section className="w-screen">
      <div className=" h-full fixed bg-maintext/85 top-0 w-screen z-10 md:px-24 lg:px-48 px-6   ">
        <div className="bg-white rounded-lg sticky top-20 ">
          <section className="flex flex-col">
            <div className=" bg-circle h-2 rounded-t-lg mb-4"></div>
            <div>
              <h1 className="font-black text-maintext text-2xl leading-10 text-center tracking-wide mb-2">
                Verifiy your email
              </h1>
              <p className="text-subtext text-lg  text-center font-semibold mx-4">
                Hi {user?.firstname}, Please type in the 6-Digit Code we've sent
                you to:{" "}
                <span className="font-bold text-maintext">{user?.email}</span>
              </p>
            </div>
            <div className="flex flex-col items-center mt-4 mb-2">
              <input
                type="number"
                maxLength="6"
                min="6"
                max="6"
                onChange={(e) => setSixDigitCode(e.target.value)}
                className="h-10 w-10/12 border-solid border border-pink text-subtext rounded-lg text-center font-semibold leading-5 tracking-wider mb-2"
              />
              <button
                className="h-10 w-10/12 bg-pink text-circle rounded-lg"
                onClick={verificateEmail}
              >
                Verify
              </button>
            </div>
            <p className="text-subtext leading-5 text-xs text-center ">
              Questions? Email us as soons as our Support goes Online 😉
            </p>
            <button
              onClick={() => setShowVerification(false)}
              className="text-subtext leading-5 text-xs text-center mb-6 font-bold cursor-pointer "
            >
              I will verify later
            </button>
            <p className="font-bold text-red text-center ">{errorMessage}</p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default VerficationPopUp;
