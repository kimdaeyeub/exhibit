import Card from "@/components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xl:px-32 lg:px-20 md:px-32 sm:px-20 px-12 gap-5">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
