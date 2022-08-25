import React from "react";
import AppForm from "../Components/AppForm";

import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../redux/features/user/userSlice";
import Home from "../Components/Home";

const FirstScreen = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleUser = () => {
    dispatch(removeUser());
  };

  return (
    <div>
      {user == null ? (
        <AppForm />
      ) : (
        <>
          <h1>Welcome {user?.name} </h1>
          <button className="btn btn-danger" onClick={handleUser}>Remove User</button>
          <Home />
        </>
      )}
    </div>
  );
};

export default FirstScreen;
