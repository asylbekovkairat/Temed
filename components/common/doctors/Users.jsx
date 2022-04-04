import React from "react";
import Link from "next/link";
import cn from "./../../../styles/doctors.module.css";

function Users({ users }) {
  return (
    <div className={cn.users}>
      <div className={cn.userCardGrid}>
        {users.map((user, index) => (
          <div style={{ position: "relative" }} key={user.id}>
            <div className={cn.userCard}>
              <div className={cn.userImage}>
                <img src={user.image}></img>
              </div>
              <div className={cn.userName}>{user.firstName}</div>
              <div className={cn.userCity}>
                <Link href="/">{user.city}</Link>
              </div>
              <div className={cn.userProfession}>{user.profession}</div>
              <div className={cn.userProfession}>{user.spec}</div>
            </div>
            <div className={cn.userButton}>
              <button>Записаться на прием</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
