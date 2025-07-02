"use client";

import { BsArrowRight } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import css from "./User.module.scss";
import { useState } from "react";
import UserInfo from "../UserInfo/UserInfo";

const User = ({ openLogOutunction }: { openLogOutunction: () => void }) => {
  const [openUserInfo, setOpenUserInfo] = useState<boolean>(false);
  const openUserInfoFunction = (): void => {
    if (!openUserInfo) {
      setOpenUserInfo(true);
    } else {
      setOpenUserInfo(false);
    }
  };
  return (
    <>
      {openUserInfo && <UserInfo openUserInfo={openUserInfoFunction} />}
      <div className={css.boxUser}>
        <div className={css.boxUserName}>
          <p className={css.textName}>Edit profile</p>
          <FiEdit2 className={css.buttonRename} onClick={openUserInfoFunction} />
        </div>
        {/* <div className={css.relativeIcon} onClick={openLogOutunction}> */}
        <button type="button" className={css.btnLogOutR} onClick={openLogOutunction}>
          Log out
          <BsArrowRight className={css.iconLogOut} />
        </button>
        {/* </div> */}
      </div>
    </>
  );
};
export default User;
