import darkLogo from "@/assets/logos/logo.png";
import logo from "@/assets/logos/logo.png";
import Image from "next/image";

export function Logo() {
  return (
    <div className="relative h-8 max-w-[10.847rem]">
      <Image
        src={logo}
        className="dark:hidden"
        alt="GlobalGreen logo"
        role="presentation"
        quality={100}
      />

      <Image
        src={darkLogo}
        className="hidden dark:block"
        alt="GlobalGreen logo"
        role="presentation"
        quality={100}
      />
    </div>
  );
}
