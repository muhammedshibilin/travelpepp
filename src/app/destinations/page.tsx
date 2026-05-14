import { Destinations } from "@/components/sections/destinations";
import { Packages } from "@/components/sections/packages";
import { CTA } from "@/components/sections/cta";

export default function DestinationsPage() {
  return (
    <main className="relative w-full min-h-screen bg-brand-silver dark:bg-brand-black">
      {/* 
        We don't pass a 'limit' prop so it displays ALL destinations 
        and naturally hides the "View All" button at the bottom.
      */}
      <Destinations />
      <Packages />
      <CTA />
      
      {/* Dark gradient overlay for transparent navbar visibility at the very top */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />
    </main>
  );
}
