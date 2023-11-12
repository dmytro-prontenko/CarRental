import { ProgressBar } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ProgressBar
        height={100}
        width={100}
        ariaLabel="progress-bar-loading"
        borderColor="#3470FF"
        barColor="#3470FF"
      />
    </div>
  );
};

export default Loader;
