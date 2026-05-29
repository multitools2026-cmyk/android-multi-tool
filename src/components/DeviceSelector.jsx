import React from 'react';

function DeviceSelector({ devices, selectedDevice, onDeviceChange, onRefresh }) {
  return (
    <div className="device-selector">
      <div className="section-header">
        <h3>📱 Dispositivos Conectados</h3>
        <button className="refresh-btn" onClick={onRefresh} title="Atualizar">
          🔄
        </button>
      </div>

      {devices.length === 0 ? (
        <div className="no-devices">
          <p>Nenhum dispositivo detectado</p>
          <small>Conecte um dispositivo Android via USB</small>
        </div>
      ) : (
        <select
          value={selectedDevice}
          onChange={(e) => onDeviceChange(e.target.value)}
          className="device-select"
        >
          {devices.map((device) => (
            <option key={device.id} value={device.id}>
              {device.name} ({device.status})
            </option>
          ))}
        </select>
      )}

      {selectedDevice && (
        <div className="device-info">
          <p><strong>ID:</strong> {selectedDevice}</p>
          <p><strong>Status:</strong> Conectado ✓</p>
        </div>
      )}
    </div>
  );
}

export default DeviceSelector;
