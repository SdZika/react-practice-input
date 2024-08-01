import { ChangeEvent, FC } from "react";

interface MyProps {
  type: string;
  value: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  checked: any;
}

export const Input: FC<MyProps> = ({
  type,
  value,
  name,
  onChange,
  checked,
}) => {
  return (
    <label>
      {value}
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        checked={checked}
      />
    </label>
  );
};
