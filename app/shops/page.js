import { Suspense } from "react";
import ShopsPage from "./ShopsPage"; // Import the Client Component
import LoadingSpinner from "../components/LoadingSpinner";

export default function Page() {
  return <Suspense fallback={<LoadingSpinner/>}> <ShopsPage  /></Suspense>;
}
