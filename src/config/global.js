export default {
  global: {
    componenteFormativo:
      'Implementación de procesos de certificación de sistemas agropecuarios',
    descripcionCurso:
      'Este componente aborda aspectos relacionados con exigencias sanitarias y comerciales que han llevado a que la certificación de unidades productivas agropecuarias sea requisito clave, basado en buenas prácticas agrícolas, pecuarias y ganaderas. En una certificación exitosa es fundamental conocer la regulación y las etapas que se deben surtir para acceder a este beneficio que abre mercados nacionales y extranjeros.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    fondoBannerInterno: require('@/assets/curso/portada/fondo-banner-interno.jpg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fases del proceso de certificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Solicitud',
            hash: 'solicitud',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Documentación',
            hash: 'documentacion',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Alistamiento',
            hash: 'alistamiento',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Auditoría interna',
            hash: 'interna',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Auditoría externa',
            hash: 'externa',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Mejora continua',
            hash: 'mejora',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Entidades certificadoras',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de entidades certificadoras',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Competencia y rango de acción',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Parámetros técnicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Normatividad aplicable',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Documentación',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Inspección de procesos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Seguimiento a procesos de certificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Herramientas de seguimiento',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Verificación de actividades',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Sanciones',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Evaluación de resultados',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Medición de impactos',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Elaboración de reportes e informes',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Acciones de mejora',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
  referencias: [
    {
      referencia:
        'Centro Nacional de Investigaciones en Café. (2007). Certificación de fincas de producción de café orgánico. ',
      link: 'https://www.cenicafe.org/es/publications/avt0363.pdf',
    },
    {
      referencia:
        'Centros Regionales de Educación Superior. (2021). Pasos para la certificación Global G.A.P. ',
      link:
        'https://cerescolombia-cert.com/wp-content/uploads/2021/10/3-1-8_ES_Pasos_a_seguir_certificacion_GLOBALGAP_Inf.pdf',
    },
    {
      referencia:
        'Certificaciones Certhia. (2019). Decisión de certificación y emisión de certificado.',
      link:
        'https://www.certhia.cl/wp-content/uploads/2019/10/P-17-Decisi%C3%B3n-de-Certificaci%C3%B3n-e-emisi%C3%B3n-de-certificaci%C3%B3n.pdf',
    },
    {
      referencia: 'Global G.A.P. (2022). Lista de verificación módulo Nurture.',
      link:
        'https://www.globalgap.org/.content/.galleries/documents/181112_NURTURE_Inspection-Checklist_FV_V11_2_protected_es.xlsx',
    },
    {
      referencia:
        'Global G.A.P. (2022). Guía para la inspección y certificación Global G.A.P. Spring.',
      link:
        'https://www.globalgap.org/.content/.galleries/documents/SPRING_guia_es.pdf',
    },
    {
      referencia:
        'Global STD Certificación. (2022). Causas de suspensiones y retiros.',
      link:
        'https://www.globalstd.com/causas-de-suspensiones-y-retiros-de-certificado/',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario - ICA. (2017). Resolución 30021 de 2017. Por medio de la cual se establecen los requisitos para la certificación en buenas prácticas agrícolas en producción primaria y vegetales y otras especies para consumo humano.',
      link:
        'https://www.ica.gov.co/getattachment/9d8fe0fa-66d2-4feb-9513-cbba30dc4844/2017R30021.aspx',
    },
    {
      referencia:
        'Kiwa BCS. (2022). Solicitud de certificación orgánica (Ley de Producción Orgánica).',
      link:
        'https://www.kiwa.com/globalassets/latam/rspo-certificacion/aplicacion-para-lpo.pdf',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2022). Lista de certificadoras de productos ecológicos.',
      link:
        'https://www.minagricultura.gov.co/tramites-servicios/Documents/Lista_de_Certificadoras_de_Productos_Ecologicos_040219.pdf',
    },
    {
      referencia:
        'Miranda F., Chamorro A., y Rubio S. (s. f.). Clarificando el concepto de certificación: el caso español.',
      link:
        'http://merkado.unex.es/operaciones/descargas/Certificacio%CC%81n%20en%20Espan%CC%83a.pdf',
    },
    {
      referencia:
        'Organismo Nacional de Acreditación. (2022). ¿Qué es el Organismo Nacional de Acreditación? ONAC.',
      link: 'https://onac.org.co/acerca-de-onac/',
    },
    {
      referencia:
        'Organismo Nacional de Acreditación. (2022). Directorio de acreditados. ONAC.',
      link: 'https://onac.org.co/directorio-de-acreditados/',
    },
  ],
  glosario: [
    {
      termino: 'Concesión de aguas',
      significado:
        'permiso para la explotación de un recurso hídrico de una fuente natural expedido por la autoridad competente.',
    },
    {
      termino: 'Diagrama de flujo',
      significado:
        'representación gráfica de la manera como se dan los procesos al interior de la unidad productiva.',
    },
    {
      termino: 'Estándar de certificación',
      significado:
        'documento oficial que sirve como referente para evaluar y certificar la unidad productiva.',
    },
    {
      termino: 'ONAC',
      significado: 'Organismo Nacional de Acreditación.',
    },
    {
      termino: 'Organismo normalizador',
      significado:
        'organismo que implementan o regulan normas o especificaciones que definen esquemas de manejo en determinados aspectos.',
    },
  ],
  complementario: [
    {
      tema: 'Solicitud',
      referencia:
        'Kiwa BCS. (2022). Solicitud de certificación orgánica (Ley de Producción Orgánica).',
      tipo: 'Documento',
      link:
        'https://www.kiwa.com/globalassets/latam/rspo-certificacion/aplicacion-para-lpo.pdf',
    },
    {
      tema: 'Entidades certificadoras',
      referencia:
        'Organismo Nacional de Acreditación. (2022). ¿Qué es el Organismo Nacional del Acreditación? ONAC.',
      tipo: 'Página web',
      link: 'https://onac.org.co/acerca-de-onac/',
    },
    {
      tema: 'Entidades certificadoras',
      referencia:
        'Organismo Nacional de Acreditación. (2022). Directorio de acreditados. ONAC. ',
      tipo: 'Página web',
      link: 'https://onac.org.co/directorio-de-acreditados/',
    },
    {
      tema: 'Parámetros técnicos',
      referencia:
        'Instituto Colombiano Agropecuario - ICA. (2017). Resolución 30021 de 2017. Por medio de la cual se establecen los requisitos para la certificación en buenas prácticas agrícolas en producción primaria y vegetales y otras especies para consumo humano.',
      tipo: 'Documento',
      link:
        'https://www.ica.gov.co/getattachment/9d8fe0fa-66d2-4feb-9513-cbba30dc4844/2017R30021.aspx',
    },
    {
      tema: 'Seguimiento a procesos de certificación',
      referencia:
        'Global G.A.P. (2022). GLOBAL G.A.P. una marca registrada y un conjunto de normas para las buenas prácticas agrícolas.',
      tipo: 'Documento',
      link:
        'https://www.globalgap.org/.content/.galleries/documents/181112_NURTURE_Inspection-Checklist_FV_V11_2_protected_es.xlsx',
    },
    {
      tema: 'Seguimiento a procesos de certificación',
      referencia: 'Global G.A.P. (2022). Tesco Nurture Module.',
      tipo: 'Documento',
      link:
        'https://www.globalgap.org/.content/.galleries/documents/181112_NURTURE_Inspection-Checklist_FV_V11_2_protected_es.xlsx',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Carlos Andrés Sánchez Suárez',
        cargo: 'Experto temático',
        centro: 'Centro Agropecuario La Granja - Espinal Tolima.',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador instruccional',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      /*{
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guión audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },*/
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      /*{
        nombre: 'Miguel Guerrero Gutiérrez',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },*/
      {
        nombre: 'Jorge Enrique Haylock Calderín',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      /*{
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },*/
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
}
