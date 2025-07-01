"use client";

import { useState, useEffect } from "react";
import css from "./UserInfo.module.scss";
import { TfiClose } from "react-icons/tfi";
import { selectUser, setUser } from "@/redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { FiPlus, FiUser, FiEdit2 } from "react-icons/fi";
import clsx from "clsx";
import Image from "next/image";
import ErrorSvg from "../../../../public/icons/error.svg";

const UserInfo = ({ openUserInfo }: { openUserInfo: () => void }) => {
  const [imgBin, setImgBin] = useState<File | null>(null);
  const [imgPreview, setImgPreview] = useState<string>("");
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [username, setUsername] = useState<string>(user.name);

  // useEffect(() => {
  //   if (recipe.img) setImgBin(base64ToFile(recipe.img, "restored.jpg", "image/jpeg"));
  // }, []);

  return (
    <div className={css.userInfoOverlay}>
      <div className={css.bagUserInfo} data-open-modal>
        <form className={css.modalUserInfo}>
          <TfiClose onClick={openUserInfo} className={css.iconClose} />
          <div className={css.boxUserImg}>
            <input
              accept=".jpg,.jpeg,.png"
              type="file"
              className={css.userInfoFile}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                const file = evt.target.files?.[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = (e: ProgressEvent<FileReader>) =>
                  // dispatch(setImg(e.target?.result ?? ""));
                  setImgPreview(String(e.target?.result) ?? "");
                reader.readAsDataURL(file);
                setImgBin(file);
              }}
            />
            <div className={css.plusBox}>
              <FiPlus className={css.plus} />
            </div>
            {/* {imgBin ? } */}
            <div className={css.test}>
              {imgPreview ? (
                <Image src={imgPreview} alt="userImg" width={103} height={103}/>
              ) : (
                <FiUser className={css.testIcon} />
              )}
              {/* <FiUser className={css.testIcon} /> */}
            </div>
          </div>
          <div className={css.boxNameUser}>
            <FiUser className={css.iconUser} />
            <input
              value={username}
              className={clsx(css.inputNameUser, css.inputNameUserError)}
              onChange={(evt) => setUsername(evt.target.value)}
            />
            <FiEdit2 className={css.iconRename} />
            {/* <Image src={ErrorSvg} alt="errorSvg" className={css.iconRename} /> */}
          </div>

          <button type="submit" className={css.btnSubmitUser}>
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserInfo;
