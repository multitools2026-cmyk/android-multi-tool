import React from 'react';
import { ACTIONS } from '../utils/constants';

function ActionButtons({ onAction, isProcessing, selectedDevice }) {
  return (
    <div className="action-buttons">
      <h2>⚙️ Ações Disponíveis</h2>

      {!selectedDevice && (
        <div className="warning-message">
          ⚠️ Conecte um dispositivo para usar as ações
        </div>
      )}

      <div className="buttons-grid">
        {ACTIONS.map((action) => (
          <button
            key={action.id}
            className={`action-btn ${action.danger ? 'danger' : ''}`}
            onClick={() => onAction(action.label)}
            disabled={isProcessing || !selectedDevice}
            title={action.description}
          >
            <span className="btn-icon">{action.icon}</span>
            <span className="btn-label">{action.label}</span>
            <span className="btn-desc">{action.shortDesc}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ActionButtons;
