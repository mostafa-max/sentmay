import { Suspense } from "react";
import MasjedsPage from "./MasjedsPage"; // Import the Client Component
import LoadingSpinner from "../components/LoadingSpinner";

export default function Page() {
  return <Suspense fallback={<LoadingSpinner/>}><MasjedsPage  /></Suspense> ;
}
