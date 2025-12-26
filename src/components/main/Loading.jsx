import React from "react";
import { Spinner } from "../ui/spinner";

const Loading = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#112117]">
        <Spinner className="w-12 h-12 text-green-400" />
    </div>
  );
};

export default Loading;
