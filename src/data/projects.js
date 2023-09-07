const data = [
  {
    id: '1',
    title: 'YouGym App Frontend Web',
    description:
      'Este es el desarrollo Frontend de la aplicacion de administracion de gimnasio hecho en react. Con Landing page y dashboard app.',
    image: {
      src: 'https://user-images.githubusercontent.com/89551043/260635029-a434c012-039f-411f-ab72-474065add6fd.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      repo: 'https://github.com/VictorArdila/YouGym-App-Web-Frontend',
    },
    technologies: [
      '#react-js',
      '#react-native',
      '#react-native-web',
      '#styleds-components'
    ],
  },
  {
    id: '2',
    title: 'YouGym App Backend Web',
    description:
      'Desarrollo de Backend de la app YouGym web hecho en Node Js, Express y Mongo db.',
    image: {
      src: 'https://user-images.githubusercontent.com/89551043/258622074-7dffb556-0de7-4e23-8e8f-6fd8ffd5790e.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      repo: 'https://github.com/VictorArdila/YouGym-App-Web-Backend.git',
    },
    technologies: [
      '#Node Js',
      '#Express',
      '#Mongo db',
    ],
  },
  {
    id: '3',
    title: 'AI Emotion app',
    description:
      'Software de reconocimiento de emociones desarrollado con python y PyQt5. Con Inteligencia artificial. Hasta 5 emociones en tiempo real, a traves de redes convolucionales.',
    image: {
      src: 'https://user-images.githubusercontent.com/89551043/261832864-725e9bd2-306c-4e00-b1e5-04f5f725a00c.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://www.facebook.com/100070327928352/videos/638023017941212/',
      repo: 'https://github.com/VictorArdila/AI-Emotion-app.git',
    },
    technologies: [
      '#python',
      '#pyqt5',
      '#expo',
      '#IA',
      '#redes convolucionales',
    ],
  },
  {
    id: '4',
    title: 'Ac Fashion Store App',
    description:
      'Tienda de ropa mobil para la venta de outfis mcomerce.',
    image: {
      src: 'https://github-production-user-asset-6210df.s3.amazonaws.com/89551043/258562024-274a4a08-0057-4850-b93a-4565da1ad03a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230906%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230906T215919Z&X-Amz-Expires=300&X-Amz-Signature=8cdf525d65a80cb77caa00b61a4ba75641fc20fb52e57ee53257a405fb7c09a4&X-Amz-SignedHeaders=host&actor_id=89551043&key_id=0&repo_id=669545334',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      repo: 'https://github.com/VictorArdila/AC-Fashion-Store-Client.git',
    },
    technologies: [
      '#flutter',
      '#supabase',
      '#dart',
      '#client',
    ],
  },
  {
    id: '5',
    title: 'My Wallet App',
    description:
      'Aplicacion movil con inicio de sesion y registro de ingresos de gastos y dinero en tiempo real.',
    image: {
      src: 'https://user-images.githubusercontent.com/89551043/265178454-0c6f4f26-f73e-4d2b-a663-54fec3380f89.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      repo: 'https://github.com/VictorArdila/My-Wallet-App.git',
    },
    technologies: [
      '#flutter',
      '#firebase',
      '#dart',
      '#user',
    ],
  },
  {
    id: '6',
    title: 'NetduinoUPC App',
    description:
      'Aplicacion para ascensor inteligente + arduino',
    image: {
      src: 'https://user-images.githubusercontent.com/89551043/266155946-531ceec3-a25d-4f1c-b6c1-4e4fd63223d2.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      repo: 'https://github.com/VictorArdila/Netduino-UPC-App.git',
    },
    technologies: [
      '#flutter',
      'expo',
      '#arduino',
      '#dart',
      '#user',
    ],
  },
  {
    id: '7',
    title: 'Admin YouGym Desktop',
    description:
      'Sistema de información para la gestión de un gimnasio, desarrollado y enfocado al control de los usuarios, los entrenadores, los horarios, las clases, los pagos y las rutinas de entrenamiento.',
    image: {
      src: 'https://user-images.githubusercontent.com/89551043/266174926-f186eab2-0a3c-4387-99b3-e794e6ff6e32.jpeg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      repo: 'https://github.com/VictorArdila/AdminYouGym-Con-BD-v2.git',
    },
    technologies: [
      '#C#',
      '#SQL Server',
      '#Windows Forms',
      '#Entity Framework',
    ],
  },
  {
    id: '8',
    title: 'Admin Pharm App',
    description:
      'Sistema de Información para la gestión de una farmacia, desarrollado y enfocado al control de los usuarios, los medicamentos, los proveedores, los clientes, las ventas y las compras.',
    image: {
      src: 'https://user-images.githubusercontent.com/89551043/266192825-b408b8dc-60a5-4d91-802f-044d944866b3.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      repo: 'https://github.com/VictorArdila/Admin-Pharm-con-BD-Proyecto.git',
    },
    technologies: [
      '#C#',
      '#SQL Server',
      '#Windows Forms',
      '#Entity Framework',
    ],
  },
];

export default data;
