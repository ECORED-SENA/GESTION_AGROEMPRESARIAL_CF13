<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span.text-white 5
      h1 Evaluación de resultados
    .row.justify-content-center(data-aos="fade-down-left")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4
        p La certificación de la unidad productiva agropecuaria es un proceso que demanda tiempo y recursos pero que, finalmente, ofrece la posibilidad al productor de acceder a nuevos mercados, mejorar los procesos internos que se dan en la finca y alinear las actividades que tienen lugar allí con los más altos estándares internacionales.
        p.p-4.fondo22 Igualmente, para implementar de la manera más ágil posible las alternativas de solución y las estrategias para que la certificación se dé de manera exitosa, se requiere el estudio, en detalle, de las recomendaciones y sugerencias emitidas por el organismo certificador, las cuales tienen un plazo perentorio. 
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4
        img(src='@/assets/curso/tema5/imagen1.jpg')
    p.mb-5(data-aos="fade-down-right") En el video que se muestra a continuación, se detallan los parámetros de la evaluación de resultados, dentro del proceso de certificación; se sugiere observarlo atentamente y llevar un registro de lo más destacado:
    figure.mb-5(data-aos="fade-down-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 5.1 Medición de impactos
    .row.justify-content-center(data-aos="fade-down-left")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4
        p Con base en los parámetros anteriormente descritos es posible establecer las metodologías para medir los impactos del proceso de certificación, para lo cual se deben estimar los respectivos indicadores. Para la construcción de los indicadores se debe establecer 
         span.colortextocontenido qué parámetro se desea medir, cómo se va a calcular y qué medio de verificación se va a emplear 
         span para corroborar que efectivamente se ha cumplido.
         p Algunos ejemplos de indicadores, que se pueden emplear para medir los impactos del proceso de certificación y de acuerdo con los parámetros establecidos, son los siguientes: 
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4
        img(src='@/assets/curso/tema5/imagen2.jpg')
    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 3. 
      span Indicadores que se pueden emplear para la medición del impacto de procesos de certificación

    .tabla-b.color-acento-contenido.mb-5(data-aos="fade-left")
      table
        caption Nota. Adaptado de Muñoz (2018).
        tr.fondo13.text-white
          th.mb-0.anchocol2.bordetabla.text-center Parámetro
          th.mb-0.anchocol2.bordetabla.text-center Indicador
          th.mb-0.anchocol2.bordetabla.text-center Fórmula de indicador
          th.mb-0.anchocol2.sinborde.text-center Medio de verificación
        tr
          <th rowspan="3">Estimación de beneficios económicos.</th>
          td.anchocol2.bordetabla.text-center Producción por hectárea año.
          td.anchocol2.bordetabla.text-center Toneladas de producto / hectárea / año.
          td.anchocol2.text-center Registros de producción.
        tr.fondo10
          td.anchocol2.bordetabla.text-center Ingresos anuales.
          td.anchocol2.bordetabla.text-center Millones de pesos / año.
          td.anchocol2.text-center Facturas de venta.
        tr
          td.anchocol2.bordetabla.text-center Costos de producción.
          td.anchocol2.bordetabla.text-center Costos de producción/año.
          td.anchocol2.text-center Registros contables.
        tr
          <th rowspan="3">Evaluación de la reducción de los impactos ambientales.</th>
          td.anchocol2.bordetabla.text-center Volumen de residuos generados en el mes.
          td.anchocol2.bordetabla.text-center Kilogramos de residuos sólidos/mes.
          td.anchocol2.text-center Registros diarios de residuos dispuestos.
        tr.fondo7
          td.anchocol2.bordetabla.text-center Volumen de vertimientos líquidos en el mes.
          td.anchocol2.bordetabla.text-center Litros de vertimientos líquidos/mes.
          td.anchocol2.text-center Registros diarios de vertimientos líquidos.
        tr
          td.anchocol2.bordetabla.text-center Número de aplicación de agroquímicos por cosecha.
          td.anchocol2.bordetabla.text-center Número de aplicaciones de agroquímicos/cosecha.
          td.anchocol2.text-center Registro de labores de cultivo
        tr
          <th rowspan="2">Valoración de los beneficios en la calidad de vida de los trabajadores.</th>
          td.anchocol2.bordetabla.text-center Programas de bienestar para el trabajador implementados.
          td.anchocol2.bordetabla.text-center Número de programas de bienestar para el trabajador / año.
          td.anchocol2.text-center Protocolo de programa de bienestar para el trabajador
        tr.fondo10
          td.anchocol2.bordetabla.text-center Número de capacitaciones en seguridad y salud en el trabajo realizadas en el año.
          td.anchocol2.bordetabla.text-center Número de capacitaciones en seguridad y salud en el trabajo realizadas/año.
          td.anchocol2.text-center Registro de capacitaciones en seguridad y salud en el trabajo – registro fotográfico.
        tr.fondo7
          <th rowspan="2">Habituación a las normas de certificación.</th>
          td.anchocol2.bordetabla.text-center Porcentaje de no conformidades encontradas en procesos de preauditoría.
          td.anchocol2.bordetabla.text-center Número de no conformidades/número de ítems evaluados × 100.
          td.anchocol2.text-center Registros de preauditoría y auditoría.
        tr.fondo7
          td.anchocol2.bordetabla.text-center Diligenciamiento de registros conforme a la normatividad.
          td.anchocol2.bordetabla.text-center Registros diligenciados / registros establecidos en protocolos.
          td.anchocol2.text-center Registros de preauditoría y auditoría.

    .row.justify-content-center(data-aos="fade-right")
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12
        .cajon.color-acento-contenido.p-4.mb-4.fondo2
          p Al interior de la empresa agropecuaria se pueden establecer otros indicadores que, igualmente, permitan identificar los impactos de la certificación, los cuales dependen del sistema productivo, de la capacidad operativa de la empresa, los parámetros que se definan y las características de la explotación agropecuaria.
    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 5.2 Elaboración de reportes e informes
    p.mb-5(data-aos="fade-right") Una vez se tiene claridad sobre los resultados de la medición de los indicadores, es necesario procesar la información para generar los reportes e informes que faciliten la toma de decisiones y el análisis del funcionamiento de la unidad productiva.
    .bloque-texto-g.fondo13.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/imagen3.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p En términos generales, los reportes e informes son documentos escritos en los cuales se comparte información relacionada con el funcionamiento de la unidad productiva, siempre tomando como referencia información estadística de las áreas contable, financiera, técnica o de gestión.
    .row.my-5(data-aos="fade-right")
      .col-xxl-2.col-xl-3.col-lg-3.col-md-4.col-sm-5.col-7
        h4.fondotitulo2.p-4.text-white.mb-0 El reporte
    .row.justify-content-center(data-aos="fade-left")
      .col-xxl-8.col-xl-8.col-lg-8.col-md-12.mb-4
        p La información que se comparte en el reporte generalmente tiene utilidad al interior de la empresa y se desarrolla sobre sucesos puntuales. Los reportes generalmente son de tipo ejecutivo, es decir, manejan cifras y datos precisos sobre alguna situación en particular.
        AcordionA(tipo="b" clase-tarjeta="tarjeta fondo3")
          .row.align-items-center(titulo="Fuente de información")
            .col-md-12.mb-4.mb-md-0.mb-lg-0
              p.mb-0 Los datos empleados en el reporte deben ser confiables, por lo que conocer su procedencia es fundamental para asegurar el éxito del reporte. En los reportes la información numérica es fundamental, por lo que se recomienda recurrir a datos estadísticos precisos. 
          .row.align-items-center(titulo="Información visual")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Para la presentación de los datos que fundamentan el reporte es recomendable recurrir a información gráfica, la cual se puede procesar a través de herramientas informáticas, como Excel. 
          .row.align-items-center(titulo="Resumen ejecutivo")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Es recomendable incluir dentro del reporte un resumen ejecutivo en el cual se presenten de manera precisa los datos y cómo estos pueden influir en el desarrollo de los procesos de la empresa agropecuaria. Igualmente, en este aparte del documento se puede dar una idea general de las conclusiones del reporte.
          .row.align-items-center(titulo="Conclusiones")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 En el reporte se deben incluir las conclusiones a las que llegó el equipo de trabajo tras el análisis de la información. Cada una de las conclusiones que se consignen en el reporte debe estar sustentadas con los mismos datos presentados. Se debe evitar reportar impresiones personales sobre alguna situación particular. 
          .row.align-items-center(titulo="Anexos")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Es recomendable incluir en el informe los anexos que se consideren necesarios y que respalden las afirmaciones que se realicen en el reporte. Estos anexos pueden consistir en fotografías, cuadros, planillas, récord de visitas, entre otros. 

      .col-xxl-4.col-xl-4.col-lg-4.col-md-12.mb-4
        img(src='@/assets/curso/tema5/imagen4.jpg')
    p.mt-5(data-aos="fade-right") Si bien el reporte es un documento muy puntual y restringido, principalmente a la presentación de información estadística, es fundamental realizarlo con buena redacción, buena ortografía y siguiendo un esquema secuencial que facilite su lectura y comprensión.
    p.mb-5(data-aos="fade-left") Se recomienda que el reporte contenga, como mínimo, los siguientes elementos:
    .row.ampliar.px-5.fondo23.justify-content-center(data-aos="fade-right")
      .col-xxl-12
        SlyderF.mb-5(columnas="col-lg-6 col-xl-4 col-md-6")
          .tarjeta-avatar.sizecrd2
            img(src='@/assets/curso/tema5/slider1.svg')
            .tarjeta.fondoavatar.sombracrd
              .text-dark.p-2
                h5.text-center Portada: 
                p.text-center indicando autor, fecha, a quién se dirige y qué situación particular se reporta. 

          .tarjeta-avatar.sizecrd2
            img(src='@/assets/curso/tema5/slider2.svg')
            .tarjeta.fondoavatar.sombracrd
              .text-dark.p-2
                h5.text-center Resumen ejecutivo: 
                p.text-center indicando qué hallazgos y qué conclusiones generales existen en el documento. 

          .tarjeta-avatar.sizecrd2
            img(src='@/assets/curso/tema5/slider3.svg')
            .tarjeta.fondoavatar.sombracrd
              .text-dark.p-2
                h5.text-center.px-5.mx-sm-5.mx-md-3 Tabla de contenido

          .tarjeta-avatar.sizecrd2
            img(src='@/assets/curso/tema5/slider4.svg')
            .tarjeta.fondoavatar.sombracrd
              .text-dark.p-2
                h5.text-center Metodología: 
                p.text-center se expresa de manera muy puntual cómo se obtuvo la información y de qué fuentes proviene.

          .tarjeta-avatar.sizecrd2
            img(src='@/assets/curso/tema5/slider5.svg')
            .tarjeta.fondoavatar.sombracrd
              .text-dark.p-2
                h5.text-center Componente descriptivo: 
                p.text-center es el cuerpo del documento y es donde se expresan los resultados encontrados, de una manera clara y muy dinámica.

          .tarjeta-avatar.sizecrd2
            img(src='@/assets/curso/tema5/slider6.svg')
            .tarjeta.fondoavatar.sombracrd
              .text-dark.p-2
                h5.text-center Conclusiones: 
                p.text-center se expresan los resultados de las observaciones realizadas con base siempre en la información estadística. 

          .tarjeta-avatar.sizecrd2
            img(src='@/assets/curso/tema5/slider7.svg')
            .tarjeta.fondoavatar.sombracrd
              .text-dark.p-2
                h5.text-center Recomendaciones: 
                p.text-center se establecen algunas medidas que pueden ser pertinentes para superar las situaciones negativas encontradas en el proceso de observación. 

          .tarjeta-avatar.sizecrd2
            img(src='@/assets/curso/tema5/slider8.svg')
            .tarjeta.fondoavatar.sombracrd
              .text-dark.py-2.px-4
                h5.text-center Anexos
                p.text-center son documentos o soportes que corroboran la información compartida en el cuerpo del documento. 
        .row.my-5
          .col-xxl-2.col-xl-3.col-lg-3.col-md-4.col-sm-5.col-7
            h4.fondotitulo3.py-4.pe-4.ps-3.text-white.mb-0 El informe
        .row.justify-content-center
          .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4
            p A diferencia del reporte, el informe es un documento de mayor extensión que puede ser presentado dentro y fuera de la empresa. La descripción de las observaciones realizadas es más extensa y detallada, aunque las fuentes de información pueden ser las mismas que se utilizan para el reporte.
            .cajon.color-acento-contenido.p-4.mb-4.fondo2
              p Debido a que los informes están dirigidos a públicos más diversos, se recomienda no hacer uso de un lenguaje muy técnico y, en caso de que se empleen términos puntuales, se ayude al lector con la inclusión de un glosario.         
          .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4
            img(src='@/assets/curso/tema5/imagen5.jpg')
    p.mt-5(data-aos="fade-right") El informe debe ser un material de consulta que dé cuenta del funcionamiento de la empresa agropecuaria, en el cual se analicen en detalle todos los aspectos que tienen que ver con el desarrollo e implementación de cierta actividad o grupo de actividades. Debido a que estos son más detallados, es fundamental hacer un análisis profundo de los temas, empleando un lenguaje mucho más descriptivo que en el reporte.
    p.mb-5(data-aos="fade-left") En lo relacionado con la estructura del informe es recomendable tener en cuenta:
    .row.justify-content-center(data-aos="fade-right")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.colsm-12.col-12.mb-4
        LineaTiempoD.color-secundario.fondolineatiempo 
          p(numero="1" titulo="Portada") Indicando fecha de elaboración, responsables, título y a quién está dirigido. 
          
          p(numero="2" titulo="Introducción") Se presenta el tema general del informe, cómo se realizó el proceso y las conclusiones a las que se llegó en el proceso de análisis. En este aparte, además de la idea central, es importante incluir el objetivo del informe. 
          
          p(numero="3" titulo="Resumen ejecutivo") Se debe elaborar un resumen que presente las principales conclusiones del informe, las principales estadísticas y las observaciones realizadas.
          
          p(numero="4" titulo="Tabla de contenido") Conservando correspondencia entre lo estipulado en ella y los contenidos finales del informe. 

      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.colsm-12.col-12.mb-4
        img(src="@/assets/curso/tema5/imagen6.jpg")
    .row.justify-content-center(data-aos="fade-left")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.colsm-12.col-12.my-4.mb-md-0
        img(src="@/assets/curso/tema5/imagen7.jpg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.colsm-12.col-12.my-4
        LineaTiempoD.color-secundario.fondolineatiempo
          p(numero="5" titulo="Cuerpo del informe") Se presentan en detalle y de forma secuencial los resultados de las observaciones realizadas, así como el proceso mediante el cual se capturó la información. Se recomienda incluir fotografías, tablas, cuadros y demás recursos que puedan orientar al lector sobre los pormenores de las actividades en las que se basa el informe.
          
          p(numero="6" titulo="Conclusiones") Se deben incluir las conclusiones a las que se llegó tras el proceso de análisis de la información. Es importante tener en cuenta que cada una de las conclusiones debe tener como soporte los datos obtenidos en el proceso de observación.
          
          p(numero="7" titulo="Recomendaciones") Con base en la información analizada durante la observación en el informe se debe incluir un aparte con las recomendaciones para superar aspectos por mejorar o situaciones que estén influyendo de manera negativa el desarrollo de los procesos al interior de la unidad productiva.
          
          p(numero="8" titulo="Bibliografía") Es importante relacionar los documentos citados y consultados en el proceso de elaboración del informe.

          p(numero="9" titulo="Glosario de términos") Cuando se tengan términos que sean netamente técnicos o que puedan generar dudas en el lector se recomienda incluir un glosario de términos para facilitar la comprensión del documento.
    separador
    .row.ampliar.px-5.fondo24.justify-content-center
      .col-xxl-12
        #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade")
          h2 5.3 Acciones de mejora
        p(data-aos="fade-right") Como parte del proceso de evaluación de los resultados del proceso de certificación, se deben proponer las acciones de mejora, las cuales se obtienen a partir de las oportunidades de mejora, expresadas en las conclusiones y recomendaciones de los reportes e informes elaborados por el personal de seguimiento de la empresa agropecuaria.     
        p.mb-5(data-aos="fade-left") Las principales fuentes para la identificación de oportunidades de mejora, son:
        .titulo-sexto.color-acento-botones(data-aos="fade")
          h5 Figura 3. 
          span Insumos para la obtención de las oportunidades de mejora
        .row.justify-content-center(data-aos="fade-right")
          .col-xxl-7.col-xl-7.col-lg-7.col-md-12.mb-4
            img(src='@/assets/curso/tema5/figura1.svg')
          .col-xxl-5.col-xl-5.col-lg-5.col-md-12.mb-4 
            img(src='@/assets/curso/tema5/figura2.svg')
        p.my-5(data-aos="fade-left") Las acciones de mejora consisten en una serie de recomendaciones que se realizan para superar situaciones que puedan poner en riesgo el desarrollo del proyecto o los procesos que tienen lugar al interior de la unidad productiva.
        .row.justify-content-center(data-aos="fade-right")
          .col-xxl-4.col-xl-4.col-lg-4.col-md-6.col-sm-12.mb-4.fondo2.p-4
            h4.mb-3 Acciones de mejora preventivas
            p Las acciones de mejora pueden ser preventivas, cuando se trabajan con riesgos potenciales.
          .col-xxl-4.col-xl-4.col-lg-4.col-md-6.col-sm-12.mb-4
            img(src='@/assets/curso/tema5/imagen8.jpg')
          .col-xxl-4.col-xl-4.col-lg-4.col-md-6.col-sm-12.mb-4.fondo16.p-4
            h4.mb-3 Acciones de mejora correctivas
            p Las acciones de mejora pueden ser correctivas cuando con estas se espera mejorar una situación no deseable que ya se está presentando al interior de la empresa.
        p.mt-5(data-aos="fade-left") En términos generales, lo que se busca con la adopción de las acciones de mejora es eliminar las causas de “no conformidades” reales o potenciales y fortalecer las áreas de oportunidad. Tras un proceso de seguimiento a la unidad productiva es necesario formular un plan de acciones de mejora el cual consiste, básicamente, en un documento que contiene todas las acciones que se requieren, correctivas o preventivas, para superar las situaciones que pueden afectar el funcionamiento de la unidad productiva o el bienestar de las personas.
        p.mb-5(data-aos="fade-right") Algunos ejemplos de acciones de mejora son los siguientes:
        .row.mb-5.justify-content-center(data-aos="fade-left")
          .col-xxl-10.col-xl-10.col-lg-10.col-md-12
            .row.justify-content-center
              .col-md-6.col-lg.mb-5.mb-lg-0
                .tarjeta-avatar
                  img(src='@/assets/curso/tema5/avatar1.svg')
                  .tarjeta.fondo21
                    .p-4
                      h4.text-center.px-5 Acciones de mejora correctivas
                      ul.lista-ul.vinetacolor.ms-4
                        li 
                          i.fas.fa-angle-right
                          | Adecuaciones de infraestructura. 
                        li 
                          i.fas.fa-angle-right
                          | Sustitución de equipos obsoletos. 
                        li 
                          i.fas.fa-angle-right
                          | Dejar de emplear determinados productos agroquímicos. 
                        li 
                          i.fas.fa-angle-right
                          | Prohibir el uso de determinados equipos o herramientas. 
                        li 
                          i.fas.fa-angle-right
                          | Instalar un sistema de tratamiento de aguas residuales

              .col-md-6.col-lg.mb-5.mb-lg-0
                .tarjeta-avatar
                  img(src='@/assets/curso/tema5/avatar2.svg')
                  .tarjeta.fondo21
                    .p-4
                      h4.text-center.px-5.mx-4 Acciones de mejora preventivas
                      ul.lista-ul.vinetacolor.ms-4
                        li 
                          i.fas.fa-angle-right
                          | Señalización de áreas.
                        li 
                          i.fas.fa-angle-right
                          | Limpieza y desinfección. 
                        li 
                          i.fas.fa-angle-right
                          | Iluminación de áreas de trabajo. 
                        li 
                          i.fas.fa-angle-right
                          | Mantenimiento preventivo de equipos.       
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
