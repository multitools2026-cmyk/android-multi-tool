import React, { useState, useEffect } from 'react';
import DeviceSelector from '../components/DeviceSelector';
import BrandModelSelect from '../components/BrandModelSelect';
import ActionButtons from '../components/ActionButtons';
import Terminal from '../components/Terminal';
import { getAdbDevices } from '../utils/adbCommands';

function Dashboard() {
  const [devices, setDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('Samsung');
  const [selectedModel, setSelectedModel] = useState('');
  const [terminalOutput, setTerminalOutput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    refreshDevices();
    const interval = setInterval(refreshDevices, 3000);
    return () => clearInterval(interval);
  }, []);

  const refreshDevices = async () => {
    try {
      const deviceList = await getAdbDevices();
      setDevices(deviceList);
      if (deviceList.length > 0 && !selectedDevice) {
        setSelectedDevice(deviceList[0].id);
      }
    } catch (error) {
      addTerminalOutput(`Erro ao detectar dispositivos: ${error.message}`);
    }
  };

  const addTerminalOutput = (message) => {
    const timestamp = new Date().toLocaleTimeString();
    setTerminalOutput(prev => `${prev}[${timestamp}] ${message}\n`);
  };

  const handleAction = async (action) => {
    if (!selectedDevice) {
      addTerminalOutput('❌ Nenhum dispositivo selecionado!');
      return;
    }

    setIsProcessing(true);
    addTerminalOutput(`\n🔄 Executando: ${action}`);

    try {
      await executeAction(action, selectedDevice, selectedBrand, selectedModel);
    } catch (error) {
      addTerminalOutput(`❌ Erro: ${error.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const executeAction = async (action, device, brand, model) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        addTerminalOutput(`✅ ${action} - ${brand} ${model} (${device})`);
        resolve();
      }, 1000);
    });
  };

  return (
    <div className="dashboard">
      <header className="header">
        <h1>📱 Android Multi Tool</h1>
        <p>Gerenciador Completo de Dispositivos Android</p>
      </header>

      <div className="main-content">
        <aside className="sidebar">
          <DeviceSelector
            devices={devices}
            selectedDevice={selectedDevice}
            onDeviceChange={setSelectedDevice}
            onRefresh={refreshDevices}
          />

          <BrandModelSelect
            selectedBrand={selectedBrand}
            selectedModel={selectedModel}
            onBrandChange={setSelectedBrand}
            onModelChange={setSelectedModel}
          />
        </aside>

        <div className="main-area">
          <ActionButtons
            onAction={handleAction}
            isProcessing={isProcessing}
            selectedDevice={selectedDevice}
          />

          <Terminal output={terminalOutput} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
