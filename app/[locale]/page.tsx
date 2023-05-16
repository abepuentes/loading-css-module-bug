import styles from "./page.module.css";
import Link from "next/link";

export default async function Home() {
  return (
    <main
      className={styles.main}
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      <strong style={{ color: "orange" }}>Same CSS module</strong>
      <div className={styles.card}>
        <Link href="/es/same">{`TO PAGE`}</Link>
        <span>{`->`}</span>
      </div>
      <br />
      <br />
      <br />
      <strong style={{ color: "purple" }}>Different CSS module</strong>
      <div className={styles.card}>
        <Link href="/es/different">{`TO PAGE`}</Link>
        <span>{`->`}</span>
      </div>
    </main>
  );
}
