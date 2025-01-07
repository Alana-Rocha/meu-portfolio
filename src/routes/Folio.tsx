import { Folio } from "@/Pages/Folio";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/Folio")({
  component: () => <Folio />,
});
