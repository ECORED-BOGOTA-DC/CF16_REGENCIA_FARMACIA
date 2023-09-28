export default {
  global: {
    componenteFormativo: 'Servicio al cliente',
    descripcionCurso:
      'Este componente formativo describe la importancia de evaluar la satisfacción del usuario en los servicios farmacéuticos, dando respuesta oportuna y asertiva a sus peticiones, sugerencias, quejas y reclamos.  En la primera línea de atención al usuario, hay diferentes tipos de clientes, quienes requieren urgentemente respuestas claras, veraces y humanizadas, a variadas necesidades que los rodean, en la atención en salud.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Satisfacción del usuario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Atención para la satisfacción',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Diseño de las instalaciones',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Información y formación mediante la atención',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Técnicas de servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Presentación personal y actitud frente al servicio',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas de comunicación verbal y no verbal',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Principios éticos y manejo de la información',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Indicadores de gestión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Orientaciones desde la normatividad',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Principios del servicio farmacéutico',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gestión integral de residuos en salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Clasificación de los residuos derivados de la atención en salud',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Características de almacenamiento de residuos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Segregación en la fuente',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Gestión interna',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Gestión externa',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Residuos peligrosos RESPEL',
            hash: 't_4_6',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Plan post consumo',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/material.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Satisfacción del usuario',
      referencia:
        'Resolución número 1403 de 2007. [Ministerio de la Protección Social]. (2017). Por la cual se determina el Modelo de Gestión del Servicio Farmacéutico, se adopta el Manual de Condiciones Esenciales y Procedimientos y se dictan otras disposiciones. 14 de mayo de 2007, http://autorregulacion.saludcapital.gov.co/leyes/Resolucion_1403_de_2007.pdf',
      tipo: 'Documento',
      link:
        'http://autorregulacion.saludcapital.gov.co/leyes/Resolucion_1403_de_2007.pdf',
    },
    {
      tema: 'Satisfacción del usuario',
      referencia:
        'Ministerio de Salud y Protección Social. (2016). <i>Protocolo de Atención al Ciudadano.</i>',
      tipo: 'Documento',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/SG/SAB/protocolo-atencion-ciudadano-sector-salud.pdf',
    },
    {
      tema: 'Indicadores de gestión',
      referencia:
        'Resolución número 1403 de 2007. [Ministerio de la Protección Social]. (2017). Por la cual se determina el Modelo de Gestión del Servicio Farmacéutico, se adopta el Manual de Condiciones Esenciales y Procedimientos y se dictan otras disposiciones. 14 de mayo de 2007',
      tipo: 'Documento',
      link:
        'http://autorregulacion.saludcapital.gov.co/leyes/Resolucion_1403_de_2007.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Automedicación responsable',
      significado:
        'Práctica en la cual los individuos previenen o tratan sus enfermedades con fórmulas autorizadas y disponibles para su venta sin prescripción médica, las cuales son seguras y efectivas cuando se utilizan tal como se indica en el empaque.',
    },
    {
      termino: 'Auto prescripción',
      significado:
        'Venta directa al paciente de medicamentos sin la respectiva fórmula o prescripción médica de productos regulados.',
    },
    {
      termino: 'Contraindicación',
      significado:
        'Situación clínica o régimen terapéutico en la cual la administración de un medicamento debe ser evitada.',
    },
    {
      termino: 'Dispensación de medicamentos',
      significado:
        'Entrega de uno o más medicamentos y dispositivos médicos brindando al mismo tiempo la información sobre su uso adecuado del mismo.',
    },
    {
      termino: 'Evento adverso',
      significado:
        'Cualquier suceso médico desafortunado que puede presentarse durante el tratamiento con un medicamento, pero que no tiene necesariamente una relación causal con dicho tratamiento.',
    },
    {
      termino: 'Fecha de vencimiento, expiración o caducidad',
      significado:
        'Tiempo máximo que garantiza la potencia, la pureza, las características físico químicas de un medicamento, cosmético o producto similar; el cual se recomienda con base en los resultados de pruebas de estabilidad realizadas en el laboratorio productor o fabricante. Después de pasada dicha fecha queda prohibido la venta y utilización del producto relacionado.',
    },
    {
      termino: 'Fórmula o prescripción',
      significado:
        'Documento por medio del cual un profesional médico u odontólogo prescribe medicamentos.',
    },
    {
      termino: 'Generador',
      significado:
        'Persona natural o jurídica, pública o privada que produce o genera residuos en el desarrollo de las actividades derivadas de la atención en salud y similares',
    },
    {
      termino:
        'Problemas relacionados con la utilización de medicamentos (PRUM)',
      significado:
        'Corresponden a causas prevenibles de problemas relacionados con medicamentos, asociados a errores de medicación (prescripción, dispensación, administración o uso por parte del paciente o cuidador).',
    },
    {
      termino: 'Reconciliación medicamentosa',
      significado:
        'Proceso asistencial que consiste en revisar de forma integral el perfil fármaco terapéutico de un paciente cuando ingresa a una estancia hospitalaria.',
    },
  ],
  referencias: [
    {
      referencia:
        'Álvarez, M., Calvin, B., Feal, L., Martínez, I., Pedreira. M. & Herranz, M. (2014). Indicadores de calidad en el proceso de almacenamiento y dispensación de medicamentos en un Servicio de Farmacia Hospitalaria. <i>Revista de calidad asistencial.</i> 29(04) p. 204-211.',
      link:
        'https://www.elsevier.es/es-revista-revista-calidad-asistencial-256-pdf-S1134282X14000451',
    },
    {
      referencia:
        'Decreto 351 de 2014. [Ministerio de Salud y Protección Social]. Por el cual se reglamenta la gestión integral de los residuos generados en la atención en salud y otras actividades. Febrero 19 de 2014.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s.f.). Mejorar la seguridad en la utilización de medicamentos. Paquetes Instruccionales. Paquetes instruccionales. Guía técnica “buenas prácticas para la seguridad del paciente en la atención en salud”.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/CA/seguridad-en-la-utilizacion-de-medicamentos.pdf',
    },
    {
      referencia:
        'Resolución 0371 de 2009. [Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por la cual se establecen los elementos que deben ser considerados en los Planes de Gestión de Devolución de Productos Posconsumo de Fármacos o Medicamentos Vencidos. Febrero 26 de 2009.',
      link: '',
    },
    {
      referencia:
        'Resolución 1403 de 2007. [Ministerio de la Protección Social]. Por la cual se determina el Modelo de Gestión del Servicio Farmacéutico, se adopta el Manual de Condiciones Esenciales y Procedimientos y se dictan otras disposiciones. Mayo 14 de 2007',
      link:
        'https://www.invima.gov.co/documents/20143/453029/Resoluci%C3%B3n+1403+de+2007.pdf',
    },
    {
      referencia:
        'Resolución  01164 de 2002. [Ministerio de Medio Ambiente]. Por la cual se adopta el Manual de Procedimientos para la Gestión Integral de los residuos hospitalarios y similares. Noviembre 25 de 2002.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gloria Lida Alzáte Suárez',
          cargo: 'Adecuación instruccional - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseño web - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollo fullstack',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logísti Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo:
            'Validación de recursos educativos digitales y vinculación al LMS',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
