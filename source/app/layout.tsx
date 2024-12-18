import type { Metadata } from "next";
import * as stylex from "@stylexjs/stylex";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html {...stylex.props(s.reset)} lang="en">
      <body {...stylex.props(s.reset, s.body)}>{children}</body>
    </html>
  );
}

const s = stylex.create({
  reset: {
    margin: 0,
    padding: 0,
  },
  body: {
    minHeight: {
      default: "100vh",
      "@supports (height: 100dvh)": "100dvh",
    },
  },
});
