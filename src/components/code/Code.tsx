import * as React from 'react';
import * as Prism from 'prismjs';

interface CodeProps {
  // String template of code to be styled
  children: string;
}

/**
 * Format code blocks with prism themed css
 */
export const Code = (props: CodeProps) => {
  React.useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0);
  }, []);

  return (
    <pre>
      <code className='language-js'>{props.children}</code>
    </pre>
  );
};
