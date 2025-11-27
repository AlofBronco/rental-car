import { useState, useRef, useEffect } from "react";
import css from "./Select.module.css";

interface SelectProps {
  label: string;
  value: string;
  onChange: (option: string) => void;
  options: string[];
  placeholder: string;
}

const Select = ({
  label,
  value,
  onChange,
  options,
  placeholder,
}: SelectProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div className={css.selectWrapper} ref={ref}>
      <p className={css.label}>{label}</p>

      <div className={css.customSelect}>
        <button
          className={css.selectBtn}
          onClick={() => setOpen((prev) => !prev)}
          type="button"
        >
          {value ? value : placeholder}
          <svg
            className={`arrow ${open ? "up" : "down"}`}
            width="16"
            height="16"
          >
            <use href="sprite.svg#icon-arrow"></use>
          </svg>
        </button>

        {open && (
          <ul className={css.dropdown}>
            {options.map((opt) => (
              <li
                key={opt}
                className={css.dropdownItem}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
              >
                {opt}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Select;
