import type { ReactNode } from "react";
import Link from "next/link";
import { SanityImage } from "./SanityImage";
import type {
  SanityMarkDefinition,
  SanityPortableTextNode,
  SanityTextBlock,
  SanityTextSpan,
} from "@/sanity/types";

function renderSpan(span: SanityTextSpan, markDefs: SanityMarkDefinition[]) {
  let content: ReactNode = span.text;

  for (const mark of span.marks || []) {
    if (mark === "strong") {
      content = <strong>{content}</strong>;
      continue;
    }

    if (mark === "em") {
      content = <em>{content}</em>;
      continue;
    }

    const definition = markDefs.find((item) => item._key === mark);

    if (definition?._type === "internalLink" && definition.language === "en" && definition.slug) {
      content = <Link href={`/blog/${definition.slug}`}>{content}</Link>;
    }

    if (definition?._type === "externalLink" && definition.href) {
      const opensNewWindow = definition.openInNewTab === true;
      content = (
        <a
          href={definition.href}
          target={opensNewWindow ? "_blank" : undefined}
          rel={opensNewWindow ? "noopener noreferrer" : undefined}
        >
          {content}
        </a>
      );
    }
  }

  return <span key={span._key}>{content}</span>;
}

function renderInline(block: SanityTextBlock) {
  const markDefs = block.markDefs || [];
  return (block.children || []).map((span) => renderSpan(span, markDefs));
}

function renderTextBlock(block: SanityTextBlock) {
  const children = renderInline(block);

  switch (block.style) {
    case "h2":
      return <h2 key={block._key}>{children}</h2>;
    case "h3":
      return <h3 key={block._key}>{children}</h3>;
    case "blockquote":
      return <blockquote key={block._key}>{children}</blockquote>;
    default:
      return <p key={block._key}>{children}</p>;
  }
}

function renderBlocks(nodes: SanityPortableTextNode[]) {
  const output: ReactNode[] = [];

  for (let index = 0; index < nodes.length; index += 1) {
    const node = nodes[index];

    if (node._type === "block" && node.listItem) {
      const listType = node.listItem;
      const items: SanityTextBlock[] = [];

      while (
        index < nodes.length &&
        nodes[index]._type === "block" &&
        (nodes[index] as SanityTextBlock).listItem === listType
      ) {
        items.push(nodes[index] as SanityTextBlock);
        index += 1;
      }
      index -= 1;

      const listItems = items.map((item) => <li key={item._key}>{renderInline(item)}</li>);
      output.push(
        listType === "number" ? (
          <ol key={`list-${node._key}`}>{listItems}</ol>
        ) : (
          <ul key={`list-${node._key}`}>{listItems}</ul>
        ),
      );
      continue;
    }

    if (node._type === "block") {
      output.push(renderTextBlock(node));
      continue;
    }

    if (node._type === "articleImage" && node.asset) {
      output.push(
        <figure className="article-body-image" key={node._key}>
          <SanityImage
            image={node}
            alt={node.alt}
            sizes="(max-width: 860px) calc(100vw - 32px), 780px"
          />
          {node.caption ? <figcaption>{node.caption}</figcaption> : null}
        </figure>,
      );
      continue;
    }

    if (node._type === "articleTable" && node.rows?.length) {
      output.push(
        <figure className="article-table" key={node._key}>
          {node.caption ? <figcaption>{node.caption}</figcaption> : null}
          <div>
            <table>
              <tbody>
                {node.rows.map((row, rowIndex) => (
                  <tr key={row._key}>
                    {(row.cells || []).map((cell, cellIndex) =>
                      node.hasHeaderRow && rowIndex === 0 ? (
                        <th scope="col" key={`${row._key}-${cellIndex}`}>
                          {cell}
                        </th>
                      ) : (
                        <td key={`${row._key}-${cellIndex}`}>{cell}</td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </figure>,
      );
      continue;
    }

    if (node._type === "callout") {
      output.push(
        <aside className={`article-callout article-callout-${node.tone || "info"}`} key={node._key}>
          {node.title ? <strong>{node.title}</strong> : null}
          {node.content?.length ? renderBlocks(node.content) : null}
        </aside>,
      );
      continue;
    }

    if (node._type === "faqSection" && node.items?.length) {
      output.push(
        <section className="article-faq" key={node._key}>
          <h2>{node.heading || "Frequently Asked Questions"}</h2>
          <div className="article-faq-list">
            {node.items.map((item) => (
              <details key={item._key}>
                <summary>{item.question}</summary>
                <div>{item.answer?.length ? renderBlocks(item.answer) : null}</div>
              </details>
            ))}
          </div>
        </section>,
      );
    }
  }

  return output;
}

export function PortableTextRenderer({ value }: { value?: SanityPortableTextNode[] }) {
  if (!value?.length) return null;

  return <div className="article-body">{renderBlocks(value)}</div>;
}
