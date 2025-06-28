"use client";

import css from "./UserInfo.module.scss";
import { FiUser } from "react-icons/fi";
import { FiEdit2 } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
import { selectUser } from "@/redux/slices/authSlice";
import { useSelector } from "react-redux";
import { FiPlus } from "react-icons/fi";

const UserInfo = ({ openUserInfo }: { openUserInfo: () => void }) => {
  const user = useSelector(selectUser);
  return (
    <div className={css.bagUserInfo}>
      <form className={css.modalUserInfo}>
        <TfiClose onClick={openUserInfo} className={css.iconClose}/>
        <div className={css.boxUserImg}>
          <input accept=".jpg,.jpeg,.png" className={css.userInfoFile}/>
          <FiPlus className={css.plus} />
        </div>
        <div className={css.boxNameUser}>
          <FiUser className={css.iconUser}/>
          <input placeholder={user.name} className={css.inputNameUser}/>
          <FiEdit2 className={css.iconRename}/>
        </div>

        <button type="submit" className={css.btnSubmitUser}>Save changes</button>
      </form>
    </div>
  );
};

export default UserInfo;
