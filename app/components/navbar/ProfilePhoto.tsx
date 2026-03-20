import Image from "next/image";
import Link from "next/link"

export default function ProfilePhoto() {
  return (
    <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden shadow-xl">
      <Link href={"#home"}>
        <Image
          src="/images/icon-circle.jpg"
          alt="Devang Ray"
          fill
          className="object-cover object-top"
          sizes="192px"
          priority
        />
      </Link>
    </div>
  );
}