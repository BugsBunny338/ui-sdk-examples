import React from 'react';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from 'react-live';


export default ({
  title,
  scope,
  scopeDesc,
  code,
  livePreviewClassname,
}) => (
  <div className="playground">
    <h1>{title}</h1>
    <h2>Scope</h2>
    <pre>{scopeDesc}</pre>
    <LiveProvider
      noInline
      scope={scope}
      code={code}
    >
      <h2>Source</h2>
      <LiveEditor />
      <LiveError />
      <h2>Preview</h2>
      <LivePreview className={livePreviewClassname} />
    </LiveProvider>
  </div>
);
