import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RickRoll } from '../../src/RickRoll';

const installCode = `npm install react-ascii-rickroll`;

const usageCode = `import { RickRoll } from 'react-ascii-rickroll';

export function App() {
  return <RickRoll />;
}`;

function App() {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        color: '#1f2328',
        fontFamily: 'monospace',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '3rem 1rem',
        gap: '2rem',
      }}
    >
      <header style={{ textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '2rem', color: '#0969da' }}>
          react-ascii-rickroll
        </h1>
        <p style={{ margin: '0.5rem 0 0', color: '#636c76' }}>
          ASCII Rickroll animation as a React component
        </p>
        <a
          href="https://github.com/goliney/react-ascii-rickroll"
          style={{
            color: '#0969da',
            textDecoration: 'none',
            fontSize: '0.9rem',
          }}
        >
          GitHub →
        </a>
      </header>

      <RickRoll />

      <section
        style={{
          width: '100%',
          maxWidth: '560px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: '1rem',
            color: '#636c76',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          Install
        </h2>
        <pre
          style={{
            margin: 0,
            padding: '1rem',
            backgroundColor: '#f6f8fa',
            color: '#1f2328',
            border: '1px solid #d0d7de',
            borderRadius: '6px',
            overflowX: 'auto',
          }}
        >
          {installCode}
        </pre>

        <h2
          style={{
            margin: 0,
            fontSize: '1rem',
            color: '#636c76',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          Usage
        </h2>
        <pre
          style={{
            margin: 0,
            padding: '1rem',
            backgroundColor: '#f6f8fa',
            color: '#1f2328',
            border: '1px solid #d0d7de',
            borderRadius: '6px',
            overflowX: 'auto',
          }}
        >
          {usageCode}
        </pre>
      </section>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
