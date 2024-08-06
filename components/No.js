import { Cross } from "./icons";

export default function No() {
  return (
    <div className="failure">
      <h1>
        <Cross />
        Failure
      </h1>
      <div className="info">
        <p>{"It doesn't seem like you're using Requestly"}</p>
        <p>
          In case you think this is a problem at our end, feel free to log an
          issue on our{" "}
          <a
            href="https://github.com/requestly/requestly/issues"
            target="_blank"
            rel="noreferrer noopener"
          >
            Github
          </a>{" "}
          or initiate a chat from the bottom right corner of this page.
        </p>
      </div>
    </div>
  );
}
