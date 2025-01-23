import { HoverCard, } from "@radix-ui/react-hover-card";
import { HoverCardTrigger, HoverCardContent } from "@radix-ui/react-hover-card";

export default function HeroSection() {
  return (// Hero Section
    <div className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-neutral-900 to-neutral-700">
      <HoverCard>
        <HoverCardTrigger>
          <h1 className="text-6xl font-bold text-neutral-100 hover:text-gray-400 transition-colors duration-300">
            Syed Minam Ur Rehman
          </h1>
        </HoverCardTrigger>
        <HoverCardContent className="bg-neutral-800 text-white rounded-lg p-6 shadow-lg">
          <h2 className="text-sm font-mono">
            Passionate Frontend Developer
          </h2>
        </HoverCardContent>
      </HoverCard>

      <h6 className="text-sm font-bold text-neutral-300 mt-6">
        CEO Zarak
      </h6>
    </div>
  );
}
