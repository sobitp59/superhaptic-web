'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useSuperhaptic } from '../hooks/useSuperhaptic';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = 'javascript' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const { trigger } = useSuperhaptic();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      trigger('light');

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="code-block">
      <button
        className={`copy-button ${copied ? 'copied' : ''}`}
        onClick={handleCopy}
      >
        <i className={`ph ph-${copied ? 'check' : 'copy'}`}></i>
        <span>{copied ? 'Copied!' : 'Copy'}</span>
      </button>
      <SyntaxHighlighter
        language={language}
        style={tomorrow}
        customStyle={{
          background: 'transparent',
          padding: 0,
          margin: 0,
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
