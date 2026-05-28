export const BRANDS = [
  'Samsung',
  'Xiaomi',
  'Motorola',
  'Oppo',
  'OnePlus',
  'LG',
  'Sony',
  'Realme',
  'Poco',
  'Vivo',
  'Huawei',
  'Apple',
  'Nokia',
  'ZTE'
];

export const MODELS = {
  'Samsung': [
    'Galaxy S24 Ultra',
    'Galaxy S24',
    'Galaxy S23 Ultra',
    'Galaxy S23',
    'Galaxy A54',
    'Galaxy A34',
    'Galaxy Z Fold 5',
    'Galaxy Z Flip 5',
    'Galaxy S20',
    'Galaxy A50'
  ],
  'Xiaomi': [
    '14 Ultra',
    '14 Pro',
    '13 Ultra',
    '13 Pro',
    'Redmi Note 13 Pro',
    'Redmi Note 12 Pro',
    'Redmi 12',
    'Redmi 11',
    'Mi 11',
    'Mi 10T'
  ],
  'Motorola': [
    'Edge 50 Pro',
    'Edge 50',
    'Edge 40 Pro',
    'Edge 40',
    'G54',
    'G53',
    'G34',
    'E13',
    'Razr 40',
    'ThinkPhone'
  ],
  'Oppo': [
    'Find X7',
    'Find X6 Pro',
    'Find X5 Pro',
    'Reno 11 Pro',
    'Reno 11',
    'A58',
    'A38',
    'A17k',
    'F23 Pro',
    'A16k'
  ],
  'OnePlus': [
    '12',
    '12R',
    '11 5G',
    '11 Pro 5G',
    '10T Pro',
    '10 Pro',
    'Nord N30 Pro',
    'Nord N20',
    '9 Pro',
    '8T'
  ],
  'LG': [
    'V70 ThinQ 5G',
    'V60 ThinQ 5G',
    'Velvet',
    'G8 ThinQ',
    'G7 ThinQ',
    'K50',
    'K42',
    'Stylo 7',
    'Phoenix',
    'Prime 2'
  ],
  'Sony': [
    'Xperia 1 V',
    'Xperia 1 IV',
    'Xperia 5 V',
    'Xperia 5 IV',
    'Xperia 10 V',
    'Xperia 10 IV',
    'Xperia Pro-I',
    'Xperia Pro',
    'Xperia 1',
    'Xperia 5'
  ],
  'Realme': [
    'GT 6',
    'GT 5 Pro',
    'GT 5',
    'C65',
    'C63',
    'C33',
    '12 Pro',
    '12',
    '11 Pro',
    '11'
  ],
  'Poco': [
    'F5 Pro',
    'F5',
    'X5 Pro',
    'X5',
    'M4 Pro',
    'M4',
    'C65',
    'C55',
    'X4 GT',
    'X4'
  ],
  'Vivo': [
    'X90 Pro',
    'X90',
    'V27 Pro',
    'V27',
    'Y200',
    'Y100',
    'V29',
    'V25 Pro',
    'X80 Pro',
    'S16 Pro'
  ],
  'Huawei': [
    'Mate 60 Pro',
    'Mate 60',
    'P60 Pro',
    'P60',
    'Nova 12 Pro',
    'Nova 12',
    'Y9a',
    'Y9s',
    'Mate 40 Pro',
    'P40 Pro'
  ],
  'Apple': [
    'iPhone 15 Pro Max',
    'iPhone 15 Pro',
    'iPhone 15 Plus',
    'iPhone 15',
    'iPhone 14 Pro Max',
    'iPhone 14 Pro',
    'iPhone 13 Pro',
    'iPhone 12 Pro',
    'iPhone SE',
    'iPhone 11'
  ],
  'Nokia': [
    'G100',
    'G50',
    'G42',
    'X30',
    'X20',
    'C31',
    'C21',
    'C01 Plus',
    'Lumia 950',
    'Lumia 930'
  ],
  'ZTE': [
    'S30 Pro',
    'S30',
    'A20',
    'A30',
    'Blade A53',
    'Blade A51',
    'Nubia Z40 Ultra',
    'Nubia Z40S Pro',
    'AXON 40 Ultra',
    'AXON 40 Pro'
  ]
};

export const ACTIONS = [
  {
    id: 'factory-reset',
    label: 'Factory Reset',
    icon: '🔧',
    description: 'Restaura o aparelho para os padrões de fábrica',
    shortDesc: 'Apaga todos os dados',
    danger: true
  },
  {
    id: 'reset-frp',
    label: 'Reset FRP',
    icon: '🔐',
    description: 'Remove o bloqueio de conta Google (Factory Reset Protection)',
    shortDesc: 'Remove bloqueio Google',
    danger: true
  },
  {
    id: 'factory-frp',
    label: 'Factory + FRP',
    icon: '⚡',
    description: 'Executa Factory Reset e Remove FRP simultaneamente',
    shortDesc: 'Reset completo',
    danger: true
  },
  {
    id: 'reset-mi',
    label: 'Reset Mi Account',
    icon: '🔑',
    description: 'Remove a conta Mi vinculada ao dispositivo Xiaomi',
    shortDesc: 'Apenas Xiaomi',
    danger: true
  },
  {
    id: 'unlock-bootloader',
    label: 'Unlock Bootloader',
    icon: '🔓',
    description: 'Desbloqueia o gerenciador de inicialização',
    shortDesc: 'Para ROMs custom',
    danger: true
  },
  {
    id: 'flash',
    label: 'Flash',
    icon: '💾',
    description: 'Reinstala ou atualiza o sistema operacional',
    shortDesc: 'Instala firmware',
    danger: true
  },
  {
    id: 'partition-manager',
    label: 'Partition Manager',
    icon: '📊',
    description: 'Gerencia partições individuais da memória',
    shortDesc: 'Visualizar partições',
    danger: false
  },
  {
    id: 'boot-edl',
    label: 'Boot to EDL / Fastboot',
    icon: '🚀',
    description: 'Força reinício no modo de emergência',
    shortDesc: 'Modo EDL/Fastboot',
    danger: false
  },
  {
    id: 'mi-assistant',
    label: 'Mi Assistant',
    icon: '⚙️',
    description: 'Coloca Xiaomi/Poco em modo sideload',
    shortDesc: 'Apenas Xiaomi/Poco',
    danger: false
  }
];
