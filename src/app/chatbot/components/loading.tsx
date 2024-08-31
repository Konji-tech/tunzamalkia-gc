import React from "react";

type LoadingProps = {
  isLoading: boolean;
};

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <div>
      {isLoading && (
        <div className="flex items-center justify-center mt-2">
          <div className="spinner-border text-white" role="status">
            <span className="visually-hidden">Typing...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Loading;
