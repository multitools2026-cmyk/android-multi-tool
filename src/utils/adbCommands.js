export const getAdbDevices = async () => {
  try {
    // Simular detecção de dispositivos
    // Em produção, seria necessário executar: adb devices
    return [
      {
        id: 'emulator-5554',
        name: 'Emulator',
        status: 'device'
      },
      {
        id: '192.168.0.100:5555',
        name: 'Device Wireless',
        status: 'device'
      }
    ];
  } catch (error) {
    console.error('Erro ao obter dispositivos:', error);
    return [];
  }
};

export const executeAdbCommand = async (device, command) => {
  try {
    const fullCommand = `adb -s ${device} ${command}`;
    return { success: true, output: `Executado: ${fullCommand}` };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const factoryReset = async (device) => {
  return executeAdbCommand(device, 'shell wipe data all');
};

export const resetFRP = async (device) => {
  return executeAdbCommand(device, 'shell pm remove-user 0');
};

export const bootToEDL = async (device) => {
  return executeAdbCommand(device, 'reboot edl');
};

export const bootToFastboot = async (device) => {
  return executeAdbCommand(device, 'reboot fastboot');
};
