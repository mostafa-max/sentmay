export const dynamic = "force-dynamic"
import { Suspense } from "react";
import FamousPage from "./FamousPage"; // Import the Client Component
import LoadingSpinner from "../components/LoadingSpinner";

export default function Page() {
  return <Suspense fallback={<LoadingSpinner/>}><FamousPage /></Suspense> ;
}
