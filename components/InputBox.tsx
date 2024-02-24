import { StringSetter } from "@/utils/types";

export default function InputBox({
  placeholder,
  setter,
}: {
  placeholder?: string;
  setter: StringSetter;
}) {
  return (
    <input
      type="text"
      onChange={(newValue) => setter(newValue.target.value)}
      placeholder={placeholder}
      className="p-2 bg-black border-2 border-[#202020] outline-none w-[26.5rem] rounded-lg"
    />
  );
}
