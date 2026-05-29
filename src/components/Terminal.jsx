import React, { useEffect, useRef } from 'react';

function Terminal({ output }) {
  const terminalRef = useRef(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <div className="terminal-container">
      <h3>💻 Terminal / Log</h3>
      <div className="terminal" ref={terminalRef}>
        {output ? (
          output.split('\n').map((line, idx) => (
            <div key={idx} className="terminal-line">
              {line}
            </div>
          ))
        ) : (
          <div className="terminal-line placeholder">
            Aguardando ações...
          </div>
        )}
      </div>
    </div>
  );
}

export default Terminal;
