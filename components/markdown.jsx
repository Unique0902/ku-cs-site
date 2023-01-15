import React from 'react';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';

export default function Markdown({ content }) {
  return (
    <ReactMarkdown
      children={content}
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]}
    />
  );
}
