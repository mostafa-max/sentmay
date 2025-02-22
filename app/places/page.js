import { Suspense } from "react";
import PlacesPage from "./PlacesPage"; // Import the Client Component
import LoadingSpinner from "../components/LoadingSpinner";

export default function Page() {
  return <Suspense fallback={<LoadingSpinner/>}><PlacesPage  /></Suspense> ;
}
