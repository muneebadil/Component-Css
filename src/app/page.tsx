import HTMLInfo from "./component/html";
import JavaScriptBenefits from "./component/javascript";
import NextJSBenefits from "./component/nextjs";
import Link from "next/link";

export default function Home(){
  return(
    <div>
      <h1>ROUTES HERE</h1>
      <nav>
        <Link href="/htmlwork">HTML</Link>
        <br />
        <Link href="/javascriptwork">JavaScript</Link>
        <br />
        <Link href="/nextwork">Next.js</Link>
      </nav>

      <br />
      <h1>COMPONENT HERE</h1>
      <nav>
        <Link href="#HTML">HTML</Link>
        <br />
        <Link href="#JavaScriptBenefits">JavaScript</Link>
        <br />
        <Link href="#NextJSBenefits">Next.js</Link>
      </nav>

      <HTMLInfo/>
      <JavaScriptBenefits/>
      <NextJSBenefits/>
    </div>
  );
}