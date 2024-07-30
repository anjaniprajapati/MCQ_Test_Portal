import Link from "next/link";
import styles from "./page.module.css";
import Header from "./header";
import McqTestPortal from "./mcq_test_portal";
import Footer from "./footer";

export default function Home() {
  return (
    <main >
      <Header/>
      <McqTestPortal/>
      {/* <Link href="/about">Go to about page</Link> */}
      <Footer/>
    </main>
  );
}
