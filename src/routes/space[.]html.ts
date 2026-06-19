import { createFileRoute } from "@tanstack/react-router";
import spaceHtml from "../static/space.html?raw";

export const Route = createFileRoute("/space.html")({
  server: {
    handlers: {
      GET: () =>
        new Response(spaceHtml, {
          headers: { "Content-Type": "text/html; charset=utf-8" },
        }),
    },
  },
});
