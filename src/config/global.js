export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Fundamentos de la Investigación de Operaciones',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Desigualdades e Inecuaciones, valor absoluto',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición y objetivos en la administración de empresas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Importancia de la Investigación de Operaciones en la toma de decisiones empresariales',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Introducción a los modelos de Investigación de Operaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Componentes principales de un modelo en IO',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipos de modelos en Investigación de Operaciones',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Desarrollo y aplicación de modelos en problemas administrativos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Metodología de la Investigación de Operaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Fases del proceso de Investigación de Operaciones',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Uso del método científico en la resolución de problemas organizacionales',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia: 'DataCamp. (2023). AI in decision making.',
      link: 'https://www.datacamp.com/es/blog/ai-in-decision-making',
    },
    {
      referencia:
        'Intelequia. (2023). El impacto de la IA en la toma de decisiones empresariales.',
      link:
        'https://intelequia.com/es/blog/post/el-impacto-de-la-ia-en-la-toma-de-decisiones-empresariales',
    },
    {
      referencia: 'Tableau. (2023). AI y Big Data.',
      link: 'https://www.tableau.com/es-es/data-insights/ai/ai-big-data',
    },
    {
      referencia:
        'Universidad Alfonso X el Sabio. (2023). Relación entre IA y Big Data.',
      link: 'https://www.uax.com/blog/ingenieria/relacion-entre-ia-y-big-data',
    },
    {
      referencia:
        'Universidad de Sabaneta. (2024). Descubre cómo la Inteligencia Artificial y el Big Data están revolucionando el mundo y mejorando vidas.',
      link:
        'https://unisabaneta.edu.co/2024/06/13/descubre-como-la-inteligencia-artificial-y-el-big-data-estan-revolucionando-el-mundo-y-mejorando-vidas/',
    },
    {
      referencia:
        'Universidad Pontificia Comillas. (2023). Aplicaciones del Big Data en la cadena de suministro.',
      link: 'https://repositorio.comillas.edu/xmlui/handle/11531/56434',
    },
    {
      referencia:
        'Hillier F. S., Lieberman G. J. (2010) Introducción a la Investigación de Operaciones, Edit. Mc Graw Hill, 9ª ed.',
      link: '',
    },
    {
      referencia:
        'Taha, H. A. (2012). Investigación de operaciones. Pearson Educación.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Algoritmo',
      significado:
        'Conjunto de pasos para resolver problemas o realizar tareas de forma eficiente.',
    },
    {
      termino: 'Análisis de Datos',
      significado:
        'Proceso de examinar, organizar y modelar datos para extraer conclusiones útiles.',
    },
    {
      termino: 'Big Data',
      significado:
        'Análisis de grandes volúmenes de datos para tomar decisiones estratégicas.',
    },
    {
      termino: 'Determinístico',
      significado:
        'Modelo con resultados predecibles y sin incertidumbre en sus variables.',
    },
    {
      termino: 'Eficiencia Operativa',
      significado:
        'Capacidad para maximizar resultados con el uso mínimo de recursos.',
    },
    {
      termino: 'Gestión de Inventarios',
      significado:
        'Organización y control del stock para evitar escasez o exceso.',
    },
    {
      termino: 'Inteligencia Artificial',
      significado:
        'Tecnología que simula procesos humanos para personalizar experiencias de cliente.',
    },
    {
      termino: 'Logística',
      significado: 'Planificación y gestión del flujo de bienes y servicios.',
    },
    {
      termino: 'Modelo Matemático',
      significado:
        'Representación numérica para analizar y resolver problemas organizacionales.',
    },
    {
      termino: 'Optimización',
      significado:
        'Proceso para obtener los mejores resultados con recursos limitados.',
    },
    {
      termino: 'Probabilístico',
      significado:
        'Modelo que incorpora incertidumbre mediante el uso de probabilidades.',
    },
    {
      termino: 'Red de Distribución',
      significado:
        'Sistema para entregar bienes y servicios de manera eficiente.',
    },
    {
      termino: 'Simulación',
      significado:
        'Creación de escenarios virtuales para evaluar decisiones estratégicas.',
    },
    {
      termino: 'Toma de Decisiones',
      significado:
        'Proceso de elegir la mejor opción entre las alternativas disponibles.',
    },
    {
      termino: 'Transporte',
      significado:
        'Movimiento eficiente de productos del origen al destino final.',
    },
    {
      termino: 'Variable de Decisión',
      significado:
        'Elemento controlado que influye en el resultado de un modelo.',
    },
  ],
}
