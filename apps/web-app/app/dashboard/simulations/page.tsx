import { redirect } from "next/navigation";

export default function SimulationsRedirectPage() {
  redirect("/dashboard/worklist");
}
