import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ATS Resume Optimizer – Beat the Bots, Land the Interview",
  description: "Analyze job postings and optimize your resume keywords and formatting for specific ATS systems. Increase your pass-through rate and get more interviews."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5e7ccb91-a08d-40c6-96c7-d2d0898fb325"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
