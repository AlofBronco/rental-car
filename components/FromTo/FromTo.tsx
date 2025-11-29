"use client";
import { useId } from "react";
import css from "./FromTo.module.css";

interface FromToProps {
  from: string | undefined;
  to: string | undefined;
  setFrom: (from: string) => void;
  setTo: (to: string) => void;
}

const FromTo = ({ from, to, setFrom, setTo }: FromToProps) => {
  const id = useId();

  const format = (value: string | undefined, prefix: string) => {
    if (!value) return "";
    return `${prefix} ${Number(value).toLocaleString("en-US")}`;
  };

  const unformat = (value: string, prefix: string) => {
    return value.replace(prefix, "").replace(/[ ,]/g, "");
  };

  const invalidRange = from && to && Number(from) > Number(to);

  return (
    <div className={css.fromtoWrapper}>
      <div className={`${css.blockFrom} ${css.block}`}>
        <label className={css.label} htmlFor={`from-${id}`}>
          Сar mileage / km
        </label>
        <input
          id={`from-${id}`}
          type="text"
          inputMode="numeric"
          placeholder="From"
          value={format(from, "From")}
          onChange={(e) => {
            const raw = unformat(e.target.value, "From");
            if (/^\d*$/.test(raw)) setFrom(raw);
          }}
        />
      </div>

      <div className={`${css.blockTo} ${css.block}`}>
        <label
          className={css.label}
          htmlFor={`to-${id}`}
          style={{ color: "transparent" }}
        >
          To
        </label>
        <input
          id={`to-${id}`}
          type="text"
          inputMode="numeric"
          placeholder="To"
          value={format(to, "To")}
          onChange={(e) => {
            const raw = unformat(e.target.value, "To");
            if (/^\d*$/.test(raw)) setTo(raw);
          }}
        />
      </div>
      {invalidRange && (
        <p className={css.errorMsg}>From cannot be greater than To</p>
      )}
    </div>
  );
};

export default FromTo;
