const ButtonStart = ({ fill, typeColor }) => {
  return (
    <>
      <svg
        className=" absolute z-10 right-2 bottom-4"
        width="70"
        height="35"
        viewBox="0 0 70 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="70" height="35" rx="17.5" fill={fill} />
        <path
          d="M21.3224 22.144C20.7944 22.144 20.2824 22.044 19.7864 21.844C19.2984 21.644 18.8664 21.36 18.4904 20.992L19.3064 20.044C19.5864 20.308 19.9064 20.524 20.2664 20.692C20.6264 20.852 20.9864 20.932 21.3464 20.932C21.7944 20.932 22.1344 20.84 22.3664 20.656C22.5984 20.472 22.7144 20.228 22.7144 19.924C22.7144 19.764 22.6824 19.628 22.6184 19.516C22.5624 19.404 22.4784 19.308 22.3664 19.228C22.2624 19.14 22.1344 19.06 21.9824 18.988C21.8384 18.916 21.6784 18.844 21.5024 18.772L20.4224 18.304C20.2304 18.224 20.0384 18.124 19.8464 18.004C19.6624 17.884 19.4944 17.74 19.3424 17.572C19.1904 17.404 19.0664 17.208 18.9704 16.984C18.8824 16.76 18.8384 16.504 18.8384 16.216C18.8384 15.904 18.9024 15.616 19.0304 15.352C19.1664 15.08 19.3504 14.844 19.5824 14.644C19.8144 14.444 20.0904 14.288 20.4104 14.176C20.7384 14.064 21.0944 14.008 21.4784 14.008C21.9344 14.008 22.3744 14.1 22.7984 14.284C23.2224 14.46 23.5864 14.7 23.8904 15.004L23.1824 15.892C22.9264 15.684 22.6624 15.52 22.3904 15.4C22.1184 15.28 21.8144 15.22 21.4784 15.22C21.1024 15.22 20.8024 15.304 20.5784 15.472C20.3544 15.632 20.2424 15.856 20.2424 16.144C20.2424 16.296 20.2744 16.428 20.3384 16.54C20.4104 16.644 20.5024 16.74 20.6144 16.828C20.7344 16.908 20.8704 16.984 21.0224 17.056C21.1744 17.12 21.3304 17.184 21.4904 17.248L22.5584 17.692C22.7904 17.788 23.0024 17.9 23.1944 18.028C23.3864 18.156 23.5504 18.304 23.6864 18.472C23.8304 18.64 23.9424 18.836 24.0224 19.06C24.1024 19.276 24.1424 19.528 24.1424 19.816C24.1424 20.136 24.0784 20.436 23.9504 20.716C23.8224 20.996 23.6344 21.244 23.3864 21.46C23.1464 21.668 22.8504 21.836 22.4984 21.964C22.1544 22.084 21.7624 22.144 21.3224 22.144ZM27.5191 22V15.328H25.2511V14.152H31.1791V15.328H28.9111V22H27.5191ZM34.2134 17.824L33.9374 18.784H35.9414L35.6654 17.824C35.5374 17.408 35.4134 16.98 35.2934 16.54C35.1814 16.1 35.0694 15.664 34.9574 15.232H34.9094C34.7974 15.672 34.6854 16.112 34.5734 16.552C34.4614 16.984 34.3414 17.408 34.2134 17.824ZM31.5854 22L34.1414 14.152H35.7734L38.3294 22H36.8654L36.2534 19.876H33.6134L33.0014 22H31.5854ZM39.8968 22V14.152H42.5488C42.9568 14.152 43.3368 14.192 43.6888 14.272C44.0408 14.352 44.3448 14.484 44.6008 14.668C44.8568 14.844 45.0568 15.08 45.2008 15.376C45.3528 15.672 45.4288 16.04 45.4288 16.48C45.4288 17.08 45.2848 17.564 44.9968 17.932C44.7168 18.3 44.3408 18.564 43.8688 18.724L45.7408 22H44.1808L42.4888 18.928H41.2888V22H39.8968ZM41.2888 17.824H42.4048C42.9408 17.824 43.3488 17.712 43.6288 17.488C43.9168 17.264 44.0608 16.928 44.0608 16.48C44.0608 16.024 43.9168 15.708 43.6288 15.532C43.3488 15.356 42.9408 15.268 42.4048 15.268H41.2888V17.824ZM48.9948 22V15.328H46.7268V14.152H52.6548V15.328H50.3868V22H48.9948Z"
          fill={typeColor}
        />
      </svg>
    </>
  );
};

export default ButtonStart;
