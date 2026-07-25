import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return { name: "Koledzy App", short_name: "Koledzy", description: "Asystent zdrowia, żywienia i treningów", start_url: "/", display: "standalone", background_color: "#f4f7f3", theme_color: "#2e7d4f" };
}
