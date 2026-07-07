import Image from "next/image";

export default function Logo() {

  return (

    <div className="mb-8">

      <Image
        src="/bpdplogo.png"
        width={110}
        height={110}
        alt="Logo"
        priority
      />

    </div>

  );

}