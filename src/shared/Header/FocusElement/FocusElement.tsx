import css from "./FocusElement.module.scss";

type Props = {
  username: string;
};

const FocusElement = ({ username }: Props) => {
  return (
    <div className={css.focus}>
      <p className={css.focusText}>{username}</p>
      <svg viewBox="0 0 100 86" xmlns="http://www.w3.org/2000/svg" className={css.focusTriangle}>
        <path
          d="M50 0
       Q52 0 58 7
       L100 86
       Q100 90 95 90
       L5 90
       Q0 90 0 86
       L42 7
       Q48 0 50 0Z"
          //   fill="red"
        />
      </svg>
    </div>
  );
};

export default FocusElement;
