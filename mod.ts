import { Element } from "npm:@marp-team/marpit";
import { Marp } from "npm:@marp-team/marp-core";

const marp = new Marp({
  container: new Element("div", { id: ":$p" }),
});

const md = Deno.readTextFileSync("slide.md");

const { html, css } = marp.render(md);

const content = String.raw`
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title></title>
  <style>${css}</style>
  <style>
    .bespoke-marp-parent {
      height: 100dvh;
      width: 100dvw;
      display: grid;
      place-items: center;
      background-color: gray;
    }
    .bespoke-marp-slide {
      max-height: 100dvh;
      max-width: 100dvw;
    }
    .bespoke-marp-slide:not(.bespoke-marp-active) {
      display: none;
    }
  </style>
</head>
<body>
  ${html}
  <script src="https://unpkg.com/@marp-team/marp-cli@latest/lib/bespoke.js"></script>
</body>
</html>
`;

Deno.writeTextFileSync("index.html", content);
