import { CarouselPlugin } from "@/components/CarouselPlugin";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-violet-300 flex flex-col">
      <div className="h-[80px] bg-zinc-900" />
      <div className="h-[80px] bg-zinc-300" />

      <div style={{ 
        height: 'calc(100vh - 160px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <CarouselPlugin />
      </div>
    </div>
  );
}
