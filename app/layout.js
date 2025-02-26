// app/layout.js
import { Zain } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const zain = Zain({
  variable: "--font-zain",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata = {
  title: 'سنتماي - الموقع الرسمي',
  description: "سنتماي - الموقع الرسمي لقرية سنتماي التابعة لمركز ميت غمر بمحافظة الدقهلية. اكتشف تاريخ القرية،الصور، والخدمات المحلية لسكان سنتماي.",
  icons: { icon: "/icon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" data-theme="light" className={`text-base-content ${zain.variable}`}>
      <body className="font-sans min-h-screen text-base-content w-full flex flex-col scroll-smooth">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}