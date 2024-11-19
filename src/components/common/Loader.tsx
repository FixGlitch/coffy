import Image from "next/image";

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Image
        src="/loader.gif"
        alt="Loading..."
        width={500}
        height={500}
        priority
      />
    </div>
  );
}
