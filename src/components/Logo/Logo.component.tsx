import Image from "next/image";
import logoSvg from "../../../public/images/logo.svg";

export function Logo() {
  return (
    <Image
      src={logoSvg}
      alt="Lyrax"
      title="Lyrax"
      data-test="company-info"
      width="80"
    />
  );
}
