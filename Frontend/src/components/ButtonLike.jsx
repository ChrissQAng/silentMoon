const ButtonLike = () => {
  return (
    <>
      <svg
        className=" z-10 absolute right-24 top-5"
        width="55"
        height="55"
        viewBox="0 0 55 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="55"
          y="55"
          width="55"
          height="55"
          rx="27.5"
          transform="rotate(-180 55 55)"
          fill="#E28F83"
          fillOpacity="0.5"
        />
        <path
          d="M35.8509 19.653C33.9731 17.449 30.9338 17.449 29.0561 19.653L28.9076 19.8273C28.4797 20.3296 27.781 20.3296 27.3443 19.8273C25.7111 17.9 23.0911 17.408 21.1609 18.9252C18.5583 20.9857 18.305 25.158 20.4098 27.6286L21.3356 28.7152L26.9426 35.2966C27.5976 36.0654 28.6544 36.0654 29.3094 35.2966L34.9164 28.7152L35.8421 27.6286C37.7286 25.4245 37.7286 21.8571 35.8509 19.653Z"
          stroke="#FAF2DA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default ButtonLike;