import { Clock, MapPin, Phone } from "lucide-react";
import { site } from "@/data/content";

export default function TopBar() {
  return (
    <div className="relative z-[60] border-b border-champagne/15 bg-noir/90 text-taupe">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-2 px-4 py-2 text-[0.65rem] tracking-[0.18em] uppercase sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-2">
          <Clock className="h-3 w-3 text-champagne" strokeWidth={1.5} />
          <span>{site.hours}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-3 w-3 text-champagne" strokeWidth={1.5} />
          <span>{site.address}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-3 w-3 text-champagne" strokeWidth={1.5} />
          <span>
            {site.phones[0]} <span className="text-champagne/50">|</span>{" "}
            {site.phones[1]}
          </span>
        </div>
      </div>
    </div>
  );
}
