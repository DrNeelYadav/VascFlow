import { redirect } from "next/navigation";

export default function UatRedirectPage() {
  redirect("/dashboard/worklist");
}
