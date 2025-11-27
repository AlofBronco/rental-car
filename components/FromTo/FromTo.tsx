"use client";
import { useId } from "react";
import css from "./FromTo.module.css";

interface FromToProps {
  from: string;
  to: string;
  setFrom: (from: string) => void;
  setTo: (to: string) => void;
}

const FromTo = ({ from, to, setFrom, setTo }: FromToProps) => {
  const id = useId();

  return (
    <div className={css.fromtoWrapper}>
      <div className={`${css.blockFrom} ${css.block}`}>
        <label className={css.label} htmlFor={`from-${id}`}>
          From
        </label>
        <input
          value={from}
          onChange={(e) => {
            const val = e.target.value;

            if (/^\d*$/.test(val)) {
              setFrom(val);
            }
          }}
          type="text"
          placeholder="From"
          id={`from-${id}`}
        />
      </div>

      <div className={`${css.blockTo} ${css.block}`}>
        <label className={css.label} htmlFor={`to-${id}`}>
          To
        </label>
        <input
          value={to}
          onChange={(e) => {
            const val = e.target.value;

            if (/^\d*$/.test(val)) {
              setTo(val);
            }
          }}
          type="text"
          placeholder="To"
          id={`to-${id}`}
        />
      </div>
    </div>
  );
};

export default FromTo;
