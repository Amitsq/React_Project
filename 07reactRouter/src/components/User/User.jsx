// import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const {userid} = useParams();
  return (
    <>
    <div className="flex justify-center p-4 items-center bg-gray-700 text-white text-3xl text-center"> User: {userid}</div>
    </>
  )
}

export default User;
