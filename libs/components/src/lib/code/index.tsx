import 'prismjs/themes/prism.css';

import React from 'react';
import Prism from 'prismjs';

import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-python';

const CodeHighlighter = ({ code, language }: { code: string; language: string }) => {
  const highlightedCode = Prism.highlight(code, Prism.languages[language], language);

  return (
    <pre style={{ background: '#333', padding: '10px', borderRadius: '5px' }}>
      <code
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
        style={{ fontFamily: 'monospace', fontSize: '14px' }}
      />
    </pre>
  );
};

export default CodeHighlighter;
