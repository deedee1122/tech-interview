import React from "react";

const Comments = ({ message, user }) => {
  return (
    <div className="d-flex gap-3">
      <img
        style={{ borderRadius: "100%" }}
        width={55}
        height={55}
        src={user?.avatarUrl}
        alt=""
      />
      <div className="">
        <h5>{user?.name}</h5>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Comments;
