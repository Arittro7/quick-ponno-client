import { GridLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center">
      <GridLoader
        color="#80EF80"
        loading= 'true'
        size={30}>
      </GridLoader>
    </div>
  );
};

export default Loading;