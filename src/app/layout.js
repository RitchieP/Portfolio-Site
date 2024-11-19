import { HiOutlineMail } from "react-icons/hi";

import localFont from "next/font/local";
import "./globals.css";

const titilliumWebBold = localFont({
  src: "./fonts/TitilliumWeb-Bold.ttf",
  variable: "--font-titillium-web-bold",
});
const titilliumWebSemiBold = localFont({
  src: "./fonts/TitilliumWeb-SemiBold.ttf",
  variable: "--font-titillium-web-semi-bold",
});
const titilliumWebRegular = localFont({
  src: "./fonts/TitilliumWeb-Regular.ttf",
  variable: "--font-titillium-web-regular",
});
const titilliumWebLight = localFont({
  src: "./fonts/TitilliumWeb-Light.ttf",
  variable: "--font-titillium-web-light",
});

export const metadata = {
  title: "Ritchie Poh",
  description: "Ritchie's developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${titilliumWebBold.variable} ${titilliumWebLight.variable} ${titilliumWebRegular.variable} ${titilliumWebSemiBold.variable} antialiased no-scrollbar`}
      >
        {/* Top navigation bar that will be shared for all pages. */}
        <header>
          <div className="flex justify-between p-5">
            <p className="text-2xl font-[family-name:var(--font-titillium-web-bold)]">
              RitchieP
            </p>
            <a
              href="mailto:ritchiepoh@gmail.com"
            >
              <HiOutlineMail className="size-7"></HiOutlineMail>
            </a>
          </div>
          <hr className="h-0.5 bg-unhighlighted border-0"/>
        </header>
        {children}
      </body>
    </html>
  );
}
