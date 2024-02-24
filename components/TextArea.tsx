import { StringSetter } from "@/utils/types";

export default function TextArea({
  placeholder,
  setter,
}: {
  placeholder?: string;
  setter: StringSetter;
}) {
  return (
    <textarea
      style={{ resize: "none" }}
      onChange={(event) => setter(event.target.value)}
      className="sm:w-[23rem] w-[15rem] mt-4 border-2 border-[#202020] rounded-lg bg-black outline-none p-2"
      rows={6}
      placeholder={placeholder}
    ></textarea>
  );
}
