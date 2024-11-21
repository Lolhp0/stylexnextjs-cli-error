import Image from "next/image";
import { props, create, keyframes } from "@stylexjs/stylex";
// Although StyleX can compile `@/` paths, TS can only resolve
// them to one location. This will be fixed in the CLI soon.
import { fonts, tokens } from "../vars.stylex";

export default function Home() {
  return (
    <main {...props(s.main)}>
      <h1 {...props(s.h1)}>Welcome to Next.js & StyleX!</h1>
      <p {...props(s.p)}>
        Get started by editing <code>pages/index.tsx</code>
      </p>
      <div {...props(s.box)} />
    </main>
  );
}

const gradientColors = [
  "#ffadad",
  "#ffd6a5",
  "#fdffb6",
  "#caffbf",
  "#9bf6ff",
  "#a0c4ff",
  "#bdb2ff",
  "#ffc6ff",
  "#ffadad",
].join(", ");

const rotate = keyframes({
  from: { [tokens.gradAngle]: "0deg" },
  to: { [tokens.gradAngle]: "360deg" },
});

const s = create({
  main: {
    minHeight: {
      default: "100vh",
      "@supports (height: 100dvh)": "100dvh",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  h1: {
    fontFamily: fonts.sans,
    fontSize: "3rem",
    lineHeight: 1,
    margin: 0,
  },
  p: {
    fontFamily: fonts.sans,
    fontSize: "1.2rem",
    lineHeight: 1.5,
    marginBlock: "1em",
  },
  box: {
    height: 100,
    width: 200,
    borderRadius: tokens.rounded1,

    backgroundImage: `conic-gradient(from ${tokens.gradAngle}, ${gradientColors})`,
    animationName: rotate,
    animationDuration: "10s",
    animationIterationCount: "infinite",
  },
});
