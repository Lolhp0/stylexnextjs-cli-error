import "../stylex_bundle.css";
import * as stylex from "@stylexjs/stylex"


export default function Home() {
  return (
    <>
      <div {...stylex.props(styles.rootDiv)}> 

      </div>
    </>
  );
}

const styles = stylex.create({
  rootDiv: {width: "100%", minHeight: "100dvh", background: "green"}
})