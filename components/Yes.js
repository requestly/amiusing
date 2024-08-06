import { Checkmark } from "./icons";

export default function Yes() {
  return (
    <div className="grid">
      <div className="success">
        <h1>
          <Checkmark />
          Success
        </h1>
        <div className="info">
          <p>
            Your internet traffic is now successfully being transferred through
            Requestly.
          </p>
          <p>
            {
              "In case you're having trouble accessing HTTPS Website, refer to our troubleshooting guide"
            }{" "}
            <a
              href="https://docs.requestly.io/desktop-app/troubleshooting"
              target="_blank"
              rel="noreferrer noopener"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>
      <div className="next">
        <h2>{"What's next you ask"} ?</h2>

        <div className="options">
          <a
            href="https://docs.requestly.com/general/getting-started--introduction"
            target="_blank"
            rel="noreferrer noopener"
          >
            Getting started
          </a>
          <a
            href="https://docs.requestly.com/general/advanced-usage/rule-operators"
            target="_blank"
            rel="noreferrer noopener"
          >
            Understanding Rule Operators
          </a>
          <a
            href="https://docs.requestly.com/general/rule-types/modify-headers"
            target="_blank"
            rel="noreferrer noopener"
          >
            Modify HTTP(s) Headers
          </a>
          <a
            href="https://docs.requestly.com/general/http-rules--rule-types/modify-response-body"
            target="_blank"
            rel="noreferrer noopener"
          >
            Modify Response Rule
          </a>
          <a
            href="https://docs.requestly.com/general/http-rules--rule-types/modify-dominject-scripts"
            target="_blank"
            rel="noreferrer noopener"
          >
            Inject Javascript or CSS to any website
          </a>
          <a
            href="https://docs.requestly.com/general/rule-types/replace-strings"
            target="_blank"
            rel="noreferrer noopener"
          >
            Coinditionally replace part of an URL String
          </a>
          <a
            href="https://docs.requestly.com/general/rule-types/modify-user-agents"
            target="_blank"
            rel="noreferrer noopener"
          >
            Modify User Agent
          </a>
          <a
            href="https://docs.requestly.com/general/others/sharing-rules"
            target="_blank"
            rel="noreferrer noopener"
          >
            Share your Rules
          </a>
        </div>
      </div>
    </div>
  );
}
