export default {
  global: {
    componenteFormativo: 'Identificación y análisis del cliente ideal',
    descripcionCurso:
      'Este componente se enfoca en la identificación del cliente ideal a través de la creación de perfiles detallados y el uso de herramientas y técnicas de análisis. Permite a las empresas personalizar sus estrategias comerciales, optimizar recursos y maximizar beneficios mediante el conocimiento profundo de sus clientes actuales y potenciales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'Identificación del cliente ideal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición del perfil de cliente',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Herramientas y técnicas para identificar clientes potenciales',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Segmentación de mercados',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Recopilación de información del cliente',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Importancia de la información en la estrategia comercial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Análisis de datos para la toma de decisiones',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Personalización de la oferta comercial',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Estrategias de fidelización basadas en el conocimiento del cliente',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Regulaciones y normativas sobre la información del cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Protección de datos personales',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Consentimiento y transparencia en la recopilación de datos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Responsabilidades legales de las empresas en el manejo de información',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Portafolio de productos y servicios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'Componentes principales del portafolio de productos y servicios',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Ciclo de vida del producto',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Gestión del portafolio de productos y servicios',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Portafolio de instituciones financieras',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Portafolio de servicios financieros',
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
        download: 'downloads/CFA_01_13330035_DU.zip',
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
      tema: '1.1.	Definición del perfil del cliente',
      referencia:
        'TEDx Talks (2022). Entendiendo al cliente. User Experience y Psicología | Blanca B. | TEDxUC3MLive.',
      tipo: 'Video en línea',
      link: 'https://www.youtube.com/watch?v=WYbh60FijSM',
    },
    {
      tema: '3.2. Personalización de la oferta comercial',
      referencia:
        'TEDx Talks (2018). Neuromarketing: somos lo que nos emociona | David Juárez Varón | TEDxAlcoi.',
      tipo: 'Video en línea',
      link: 'https://www.youtube.com/watch?v=tIAQtN8xer0',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de comportamiento',
      significado:
        'estudio de las interacciones y preferencias de los usuarios en plataformas digitales para identificar patrones de comportamiento y segmentar a los clientes de manera más precisa.',
    },
    {
      termino: 'Análisis de mercado',
      significado:
        'evaluación detallada de la competencia, identificación de oportunidades de mercado y comprensión de las tendencias del sector para tomar decisiones informadas.',
    },
    {
      termino: 'Ciclo de Vida del Producto (CVP)',
      significado:
        'etapas por las que pasa un producto desde su introducción en el mercado hasta su declive, cada una requiriendo estrategias específicas de <em>marketing</em>, producción y gestión.',
    },
    {
      termino: 'Cliente Ideal (<em>buyer persona</em>)',
      significado:
        'representación semi-ficticia del cliente que mejor se ajusta a los productos o servicios ofrecidos por una empresa, basada en datos demográficos, psicográficos y comportamentales.',
    },
    {
      termino: 'Datos demográficos',
      significado:
        'información cuantificable sobre la población, como edad, género, nivel educativo, ocupación y estado civil, utilizada para segmentar el mercado y comprender las características básicas de los clientes.',
    },
    {
      termino: 'Datos psicográficos',
      significado:
        'información sobre los intereses, valores, estilos de vida, actitudes y personalidad de los clientes, utilizada para una segmentación más profunda y detallada.',
    },
    {
      termino: 'Estrategias de fidelización',
      significado:
        'técnicas y acciones dirigidas a mantener a los clientes actuales comprometidos y satisfechos, incentivando su lealtad a largo plazo mediante programas de recompensas y personalización de la oferta.',
    },
    {
      termino: 'Personalización',
      significado:
        'adaptación de productos, servicios y campañas de <em>marketing</em> para satisfacer las necesidades y preferencias individuales de los clientes, mejorando la experiencia del cliente y aumentando la lealtad.',
    },
    {
      termino: 'Protección de datos personales',
      significado:
        'medidas legales y técnicas para garantizar la privacidad y seguridad de la información personal recopilada por las empresas, evitando el uso indebido y el acceso no autorizado.',
    },
    {
      termino: 'Segmentación de mercados',
      significado:
        'proceso de dividir un mercado heterogéneo en grupos más pequeños y homogéneos que comparten características similares, permitiendo a las empresas adaptar sus estrategias de <em>marketing</em> y ventas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cooper, R. G. (2017). <em>Winning at New Products: Creating Value Through Innovation</em> (5th ed.). Basic Books.',
      link: '',
    },
    {
      referencia:
        'Harvard Business Review (2024). 3 Ways to Clearly Communicate Your Company’s Strategy.',
      link:
        'https://hbr.org/2024/05/3-ways-to-clearly-communicate-your-companys-strategy',
    },
    {
      referencia:
        'Kotler, P., & Keller, K. L. (2019). <em>Marketing Management</em> (15th ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Revella, A. (2020). <em>Buyer personas: How to Gain Insight into your Customer’s Expectations, Align your Marketing Strategies, and Win More Business.</em> Wiley.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lisseth Tatiana Molano Camacho',
          cargo: 'Experta temática',
          centro: 'Regional Tolima. Centro de Comercio y Servicios',
        },
        {
          nombre: 'Claudia Marcela Gamboa Durán',
          cargo: 'Guionista de línea de producción',
          centro: 'Regional Tolima. Centro de Comercio y Servicios',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Guionista de línea de producción',
          centro: 'Regional Tolima. Centro de Comercio y Servicios',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Asesor pedagógico',
          centro: 'Regional Tolima. Centro de Comercio y Servicios',
        },
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Oscar Daniel Espitia Marín',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
