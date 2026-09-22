import { redirect } from "next/navigation";

export default function AiCopilotRedirectPage() {
  redirect("/dashboard/worklist");
}
