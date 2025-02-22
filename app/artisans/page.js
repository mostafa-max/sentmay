import { Suspense } from "react";
import ArtisansPage from "./ArtisansPage"; // Import the Client Component
import LoadingSpinner from "../components/LoadingSpinner";

export default async function Page() {
  return <Suspense fallback={<LoadingSpinner/>}><ArtisansPage  /></Suspense> ;
}






