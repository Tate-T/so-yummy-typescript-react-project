import { ReactNode } from "react";
import css from "./Container.module.scss";
import "@/sass/base/common.scss";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className={css.container}>{children}</div>;
};

export default Container;
