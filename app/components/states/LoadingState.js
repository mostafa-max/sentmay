
'use client';

import LoadingSpinner from "../LoadingSpinner";

export const LoadingState = () => (
  <div className="min-h-screen flex items-center justify-center bg-base-200">
    <div className="animate-pulse text-2xl text-primary"><LoadingSpinner/></div>
  </div>
);