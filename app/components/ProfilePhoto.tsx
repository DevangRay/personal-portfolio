import Image from "next/image";

export default function ProfilePhoto() {
  return (
    <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden shadow-xl">
      <Image
        src="/images/icon-circle.jpg"
        alt="Devang Ray"
        fill
        className="object-cover object-top"
        sizes="192px"
        priority
      />
    </div>
  );
}