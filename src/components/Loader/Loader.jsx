import { ProgressBar } from "react-loader-spinner";

const Loader = () => {
  return (
<div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <ProgressBar
      height={200}
      width={200}
      ariaLabel="progress-bar-loading"
      borderColor="#3470FF"
      barColor="#3470FF"
    />
  </div>
  );
};

export default Loader;
