import React, { FC } from "react";

interface loadingProps {
  loading?: string;
}

const Loading: FC<loadingProps> = ({ loading }) => {
  return (
    <div className="h-[85vh] flex justify-center items-center">
      <div className="loader">{loading}</div>
    </div>
  );
};

export default Loading;
