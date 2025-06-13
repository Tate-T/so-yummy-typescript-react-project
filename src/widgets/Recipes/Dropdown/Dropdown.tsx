import { MouseEvent, useState } from "react";
import css from "./Dropdown.module.scss";
import Arrow from "@/../public/icons/dropdownArrow.svg";
import Image from "next/image";
import clsx from "clsx";

interface Props {
  items: string[];
  selectedValue: string;
  setSelectedValue: Function;
}

const Dropdown = ({ items, selectedValue, setSelectedValue }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };
  const selectValue = (e: MouseEvent) => {
    e.stopPropagation();
    console.log(e.target);
    if (
      !(e.target instanceof HTMLLIElement) &&
      !(e.target instanceof HTMLParagraphElement)
    )
      return;
    e.target instanceof HTMLLIElement
      ? setSelectedValue(e.target.children[0].textContent!)
      : setSelectedValue(e.target.textContent!);
    toggleDropdown();
  };
  return (
    <div className={css.dropdown}>
      <div className={css.dropdownValue}>
        <p className={css.dropdownValueText}>{selectedValue}</p>
        <button
          type="button"
          className={css.dropdownBtn}
          onClick={toggleDropdown}
        >
          <Image
            className={clsx(
              css.dropdownIcon,
              isOpen && css.dropdownIconRotated
            )}
            src={Arrow}
            alt="dropdown arrow"
          />
        </button>
      </div>
      {isOpen && (
        <ul className={css.dropdownList}>
          {items.map((item, i) => (
            <li key={i} className={css.dropdownItem} onClick={selectValue}>
              <p className={css.dropdownText}>{item}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
