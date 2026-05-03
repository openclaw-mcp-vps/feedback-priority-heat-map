import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FeedbackHeat – Visual Heatmap of Customer Feedback Priorities",
  description: "Aggregate feedback from Intercom, Zendesk, and email. AI-powered impact/effort scoring with interactive priority heatmaps for product managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a883cb44-fb03-48bd-ba2b-2c1889d21241"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
