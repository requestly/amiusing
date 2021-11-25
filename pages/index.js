import Head from "next/head";
import No from "../components/No";
import Yes from "../components/Yes";

export default function Home({ headers }) {
  const amIUsingRequestly = headers.amiusingrequestly === "true" || false;

  return (
    <div>
      <Head>
        <title>
          Am I Using Requestly | Requestly - Intercept & Modify HTTP(s) Requests
        </title>
        <meta
          name="description"
          content="Requestly allows you to Intercept & Modify network requests. Main features include Modifying headers, Setting  up redirects, Switch hosts, inserting custom scripts and much more"
        />
        <link href="/favicon.png" rel="shortcut icon" />
      </Head>

      <div className="container">{amIUsingRequestly ? <Yes /> : <No />}</div>
    </div>
  );
}

export const getServerSideProps = (ctx) => {
  const headers = ctx.req.headers;

  return {
    props: { headers },
  };
};
