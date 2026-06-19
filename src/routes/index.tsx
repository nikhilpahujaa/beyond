import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aeon — Venture Past Our Sky" },
      {
        name: "description",
        content:
          "Discover the universe in ways once unimaginable. Pioneering vessels and breakthrough engineering bring deep-space exploration within reach.",
      },
      { property: "og:title", content: "Aeon — Venture Past Our Sky" },
      {
        property: "og:description",
        content:
          "Discover the universe in ways once unimaginable. Pioneering vessels and breakthrough engineering bring deep-space exploration within reach.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/space.html");
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <p className="font-light">Launching…</p>
    </div>
  );
}
