import type {MetadataRoute} from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FUELIFY",
    short_name: "FUELIFY",
    description: "Fuel. Earn. Repeat.",
    start_url: "/",
    display: "standalone",
    background_color: "#07100d",
    theme_color: "#07100d",
    orientation: "portrait",
    icons: [{src: "/icon.svg", sizes: "any", type: "image/svg+xml"}],
  };
}
