import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      src={"/logo.svg"}
      alt="logo"
      style={{ marginBottom: "3.75rem" }}
      width={212}
      height={40}
    />
  );
};
