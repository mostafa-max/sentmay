// app/ClientLayout.js
"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { PageBackground } from "./components/layout/PageBackground";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const queryClient = new QueryClient();

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  // Update metadata on route change
  // useEffect(() => {
  //   const routeMetadata = {
  //     '/': { title: 'Home', description: 'Welcome to our site' },
  //     '/about': { title: 'About Us', description: 'Learn about our company' },
  //   };
    
  //   const meta = routeMetadata[pathname] || {
  //     title: "Default Title",
  //     description: "Default Description"
  //   };

  //   // Update document title
  //   document.title = meta.title;

  //   // Update meta description
  //   const descriptionMeta = document.querySelector('meta[name="description"]');
  //   if (descriptionMeta) descriptionMeta.content = meta.description;
  // }, [pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <PageBackground />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen pt-[56px]"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </QueryClientProvider>
  );
}