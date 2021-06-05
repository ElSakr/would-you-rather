import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { unAuthUser } from "../store/authuser";

const Logout = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(unAuthUser())
  }, [dispatch])

  return <Redirect to="/" />;
}

export default connect()(Logout);
