import React from "react";
import s from "./Notification.module.css";

const Notification = ({ notification }) => {
  return <h2 className={s.title}>{notification}</h2>;
};

export default Notification;
