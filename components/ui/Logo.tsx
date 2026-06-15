import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("logo-wrap relative inline-flex select-none", className)}>
      <Image
        src="/logo.png"
        alt="Stock Checker"
        width={140}
        height={56}
        className="logo-img h-12 w-auto object-contain"
        priority
      />
    </div>
  );
}
