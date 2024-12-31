import "./globals.css";

export const metadata = {
  title: "Event Link",
  description:
    "Event Link is a platform that helps you discover and attend events that matter to you. From networking events to workshops, we've got you covered.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
