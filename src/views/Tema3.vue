<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span.text-white 3
      h1 Parámetros técnicos
    .row.justify-content-center(data-aos="fade-up-left")
      .col-xxl-5.col-xl-5.col-lg-5.col-md-12.colsm-12.col-12.mb-4
        p Los parámetros técnicos hacen referencia a las variables que se evalúan para conocer el funcionamiento de una unidad productiva agropecuaria y en los procesos de certificación estos son innumerables, debido a que dependen del tipo de certificación, del sistema productivo y de la normativa relacionada.
        .cajon.color-acento-contenido.px-4.pt-3.pb-1.mb-4.fondo14
          p Con base en estos factores, los parámetros técnicos que más frecuentemente se revisan se pueden agrupar en las siguientes categorías: normatividad aplicable, documentación e inspección de procesos.     
      .col-xxl-7.col-xl-7.col-lg-7.col-md-12.colsm-12.col-12.mb-4
        img(src='@/assets/curso/tema3/imagen1.jpg')
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 3.1 Normatividad aplicable
    p(data-aos="fade-up-left") La normativa es uno de los principales elementos que se deben tener en cuenta para el cumplimiento de los requisitos de certificación; su cumplimiento o incumplimiento es decisivo al momento de acceder a ella.
    p.mb-5(data-aos="fade-up-right") Independientemente si la certificación es para producción orgánica, buenas prácticas agrícolas o producción ecológica, algunos de los parámetros que se evalúan en este aspecto son:
    AcordionA(data-aos="fade-up-left")(tipo="b" clase-tarjeta="tarjeta fondo3")
      .row.align-items-center(titulo="Para la certificación orgánica")
        .col-md-7.col-sm-10.col-10.mb-4.mb-md-0.mb-lg-0
          ul.lista-ul.ms-4
            li 
              i.fas.fa-angle-right
              | Reglamento CE 834/07 fuera de la Unión Europea.
            li 
              i.fas.fa-angle-right
              | Reglamento CE 834/07 sobre la producción orgánica para el mercado europeo. 
            li 
              i.fas.fa-angle-right
              p.mb-0 NOP (<em>National Organic Program</em>) para el mercado orgánico de EE. UU.
            li 
              i.fas.fa-angle-right
              p.mb-0 JAS (<i>Japanese Agricultural Standard</i>) para el mercado orgánico en Japón.
        .col-10.col-sm-10.col-lg-4.col-md-4.mb-4.mb-md-0
          img(src='@/assets/curso/tema3/acordeon1.jpg')
      .row.align-items-center(titulo="Para las certificaciones del ICA")
        .col-md-10.col-sm-10.col-10.mb-4.mb-md-0
          ul.lista-ul.ms-4
            li 
              i.fas.fa-angle-right
              <p><span style="font-weight: 700;">Resolución ICA 3651 de 2014: </span>requisitos de certificación de granjas avícolas bioseguras de postura y levante.</p>
            li 
              i.fas.fa-angle-right
              <p><span style="font-weight: 700;">Resolución 20186 de 2016: </span>establece condiciones sanitarias y de bioseguridad en producción primaria de animales acuáticos. Otorga certificado como Establecimiento de Acuicultura Bioseguro.</p>
            li 
              i.fas.fa-angle-right
              <p><span style="font-weight: 700;">Resolución 20009 de 2016: </span>establece requisitos de Certificación en BPA en producción primaria de vegetales y otras especies para consumo humano.</p>
            li 
              i.fas.fa-angle-right
              <p><span style="font-weight: 700;">Resolución 2304 de 2015: </span>establece requisitos sanitarios y de inocuidad para Certificación en BPG en producción primaria de ovinos y caprinos para consumo humano.</p>
      .row.align-items-center(titulo="Para certificación global GAP")
        .col-md-7.col-sm-10.col-10.mb-4.mb-md-0.mb-lg-0
          ul.lista-ul.ms-4
            li 
              i.fas.fa-angle-right
              | Marco legal para la obtención de la norma Global G.A.P.
            li 
              i.fas.fa-angle-right
              | Puntos de Control y Criterios de Cumplimiento PCCC
            li 
              i.fas.fa-angle-right
              | Listas de verificación Global G.A.P. y requisitos para sistemas de gestión de calidad. 
            li 
              i.fas.fa-angle-right
              | Guías de Interpretación Nacionales (adaptan los PCCC a cada país). 
            li 
              i.fas.fa-angle-right
              | Reglamento General Global G.A.P.
            li 
              i.fas.fa-angle-right
              | Reglas específicas para Global G.A.P. para cada sistema productivo.
            li 
              i.fas.fa-angle-right
              | Novedades técnicas y actualizaciones normativas.
        .col-10.col-sm-10.col-lg-4.col-md-4.mb-4.mb-md-0
          img(src='@/assets/curso/tema3/acordeon2.jpg')
    p.my-5(data-aos="fade-up-left") En lo relacionado con la normatividad aplicable, tenga en cuenta estos aspectos adicionales:
    //-tarjetas slide nuevo
    .row.justify-content-center.mb-5(data-aos="fade-up-right")
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-4.mb-xxl-4(data-aos="flip-left")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/t2a.jpg")
          .crd_hover_txt--body.nuevocolor
            h4.mb-3 Según tipo de certificación
            p.mb-0 La normativa aplicable depende de cada tipo de certificación, ya que estas tienen diferentes objetivos y estándares.
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-4.mb-xxl-4(data-aos="flip-left")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/t1a.jpg")
          .crd_hover_txt--body.nuevocolor
            h4.mb-3 Reglamentos de cada certificación
            p.mb-0 Con base en los reglamentos de cada certificación se elaboran las listas de chequeo a través de las cuales se evalúa el cumplimiento o incumplimiento por parte de la empresa agropecuaria de los parámetros definidos.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-4.mb-xxl-4(data-aos="flip-left")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/t3a.jpg")
          .crd_hover_txt--body.nuevocolor
            h4.mb-3 Acciones previas del solicitante
            p.mb-0.me-5 Es importante que el productor agropecuario solicitante conozca de antemano los procesos y subprocesos que se requieren para acceder a la certificación, la normativa, los reglamentos, los protocolos y los procedimientos.
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 3.2 Documentación
    p.mb-5(data-aos="fade-up-left") Otro de los aspectos que se analizan en el proceso de certificación es la documentación relacionada con el funcionamiento de la unidad productiva. Esta información debe estar registrada de una manera ordenada y conforme con los estándares exigidos por el organismo de certificación.
    .bloque-texto-g.fondo13.p-3.p-sm-4.p-md-5(data-aos="fade-up-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/imagen2.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p En términos generales, el componente documental es uno de los más importantes que se deben revisar en proceso de certificación ya que da cuenta de las actividades desarrolladas en cada una de las fases que conlleva la actividad productiva.
    p.my-5(data-aos="fade-up-left") Dentro de los principales documentos que se analizan en la inspección y que son generales a la mayoría de los estándares de certificación, están los siguientes:
    .row.justify-content-center(data-aos="fade-up-right")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.colsm-12.col-12.mb-4
        LineaTiempoD.color-secundario.fondolineatiempo 
          p(numero="1" titulo="Planos detallados de la finca") Ubicación geográfica, instalaciones, caminos, lotes, fuentes de agua, áreas protegidas, áreas de riesgo, bodegas o establos, entre otros elementos. 
          
          p(numero="2" titulo="Sistema de registro de producción") Por cada cultivo o explotación pecuaria presente en la empresa.
          
          p(numero="3" titulo="Evaluación de riesgos") Registro de todos los riesgos identificados en la unidad productiva y que puedan llegar a afectar la salud de los trabajadores o los consumidores finales de los productos (riesgos físicos, químicos, biológicos, etc.). Igualmente, incluir el historial del sitio donde se establece el sistema productivo.
          
          p(numero="4" titulo="Plan de gestión de riesgos") Además de la identificación de riesgos, presentar diseño y documentos de estrategias para mitigarlos, evitarlos o eliminarlos (garantizando que el predio es apto para la producción). Además, evidencia de las actividades de mitigación o eliminación del riesgo que se han implementado.

          p(numero="5" titulo="Gestión documental") Los documentos revisados en los procesos de revisión inicial se deben mantener por un periodo de dos años. Y los nuevos solicitantes deberán mantener registros de su actividad productiva por el tiempo que señale la normativa. Los registros dan cuenta de los puntos de control, por lo que la ausencia de un registro en determinado punto de control se considera como un incumplimiento.
          
          p(numero="6" titulo="Documentación de autoevaluación o auditoría interna") Las autoevaluaciones deberán incluir todos los puntos de control aplicables debidamente registrados en una lista de verificación que contenga comentarios sobre la evidencia observada, dejando claridad sobre los puntos de control no aplicables y no cumplidos. 
          
          p(numero="7" titulo="Documentación de actividades correctivas") Registros que den cuenta de la implementación de actividades correctivas desarrolladas a partir de la información recopilada en la auditoría interna. 

      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.colsm-12.col-12.mb-4
        img(src="@/assets/curso/tema3/imagen3.jpg")
    .row.justify-content-center(data-aos="fade-up-left")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.colsm-12.col-12.mb-4.mb-md-0
        img(src="@/assets/curso/tema3/imagen4.jpg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.colsm-12.col-12.mb-4
        LineaTiempoD.color-secundario.fondolineatiempo.margenlineatiempo
          p.ms-2(numero="8" titulo="Documentación aspectos de higiene") Registros para la evaluación de riesgos, procedimientos documentados para su implementación, registro de las capacitaciones al personal en este aspecto.
          
          p.ms-2(numero="9" titulo="Documentación seguridad y salud en el trabajo") Registros de actividades implementadas para el cumplimiento de exigencias en seguridad y salud en el trabajo, lo cual implica capacitaciones en primeros auxilios, servicios básicos, acceso al agua y áreas de descanso, entre otros aspectos.
          
          p.ms-2(numero="10" titulo="Documentación de actividades para la protección ambiental") Registros sobre actividades desarrolladas para la protección del ambiente (programas de gestión ambiental, identificación de impactos ambientales, disposición de residuos e implementación de protocolos para su manejo).  
          
          p.ms-2(numero="11" titulo="Trazabilidad") Documentación del recorrido del producto registrado hacia atrás. La información de la cosecha deberá poder vincular un lote de venta con los registros de producción o con las granjas de los productores específicos, en el caso de las certificaciones colectivas.

          p.ms-2(numero="12" titulo="Sanidad") Registro de la procedencia del material animal o vegetal empleado en la unidad productiva, asegurando que cumple con los requisitos sanitarios establecidos por la autoridad correspondiente.  
          
          p.ms-2(numero="13" titulo="Uso de insumos agropecuarios") Documentación sobre insumos agropecuarios empleados, teniendo especial cuidado de que estos no sean de uso restringido o tengan algún tipo de veto por parte de la autoridad sanitaria o la normativa internacional.
    .row.justify-content-center.mt-5(data-aos="fade-up-right")
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12.col-sm-12.col-12.mb-4
        .cajon.color-acento-contenido.px-4.pt-3.pb-1.mb-4.fondo16
          .row.justify-content-center.align-items-center
            .col-xxl-1.col-md-2.col-sm-2.col-3
              img.pb-3(src="@/assets/curso/tema3/imagen5.svg")
            .col-xxl-9.col-md-9.col-sm-9.col-9
              p Sin las evidencias documentales de las actividades realizadas, no es posible establecer la conformidad en el cumplimiento de las listas de chequeo establecidas por los diferentes estándares abordados en la producción agropecuaria certificada.
    .row.ampliar.px-5.fondo28
      .col-12
        separador
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade")
          h2 3.3 Inspección de procesos
        p(data-aos="fade-up-left") La inspección es la actividad central en el proceso de certificación y consiste en verificar o evaluar el cumplimiento de los requisitos establecidos, de acuerdo con el estándar que se esté manejando.
        p.mb-5(data-aos="fade-up-right") Se pueden conocer los elementos básicos para el desarrollo de inspecciones en el ámbito de la empresa en proceso de certificación, a través del siguiente video:
        figure.mb-5(data-aos="fade-up-left")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/PBsDv0I1KO4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        .row.justify-content-center(data-aos="fade-up-right")
          .col-xxl-6.col-xl-6.col-lg-6.col-md-12.col-sm-12.col-12.mb-4
            img(src="@/assets/curso/tema3/imagen6.jpg")
          .col-xxl-6.col-xl-6.col-lg-6.col-md-12.col-sm-12.col-12.mb-4
            .cajon.color-acento-contenido.px-4.pt-3.pb-1.mb-4.fondo17
              p Independientemente del estándar de certificación, en la inspección de las unidades productivas, se tienen en cuenta tres tipos de parámetros o criterios, los cuales se clasifican de acuerdo con su grado de criticidad o importancia dentro del proceso productivo: criterios críticos, criterios mayores, criterios menores. Con ellos, se construyen las listas de chequeo que se emplean durante la verificación; su conformidad o no conformidad es lo que, finalmente, permite saber si se otorga o no la certificación a la empresa agropecuaria.
        p.my-5(data-aos="fade-up-left") A continuación, se enuncia la definición sobre cada uno de los tres tipos de criterios o parámetros.
        .row.mb-5(data-aos="fade-up-right")
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img.p-3(src='@/assets/curso/tema3/avatar1.svg' alt='AvatarTop')
              .tarjeta.fondo18
                .p-4
                  h4.text-center Criterios críticos
                  p.text-center Son los que deben cumplirse como condición para la certificación. Generalmente, deben alcanzar, al menos, dos puntos, pues con menor puntaje no puede otorgarse la certificación, sino que se debe solicitar una nueva auditoría. En la mayoría de las certificaciones la nueva auditoría no puede realizarse antes de haber transcurrido tres meses desde la inicial.

          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img.p-3(src='@/assets/curso/tema3/avatar2.svg' alt='AvatarTop')
              .tarjeta.fondo18
                .p-4
                  h4.text-center Parámetros mayores
                  p.text-center Se deben alcanzar, al menos, dos puntos. Puntajes de 0 o 1 indican que se deben tomar medidas correctivas las cuales deben ser debidamente documentadas en un plazo de 28 días. En caso de no cumplir se niega la certificación.

          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img.p-3(src='@/assets/curso/tema3/avatar3.svg' alt='AvatarTop')
              .tarjeta.fondo18
                .p-4
                  h4.text-center Criterios menores
                  p.text-center Requieren, por lo menos, dos puntos, pues los puntajes menores requieren la presentación de un plan de mejora en un plazo no mayor a 28 días. Estas medidas se deben ejecutar antes de la auditoría de seguimiento. Si se incumple con alguno de estos dos compromisos no se obtiene la certificación.

        p.mt-5(data-aos="fade-up-left") Con base en los hallazgos del proceso de auditoría o inspección, el ente certificador evalúa los resultados para, posteriormente, emitir un concepto final en el cual se aprueba o se rechaza la certificación.
        p.mb-5(data-aos="fade-right") Los criterios definidos dependen del organismo certificador y, en términos generales, tras un proceso de evaluación, se pueden obtener los siguientes resultados:
        TabsA.color-acento-botones.mb-5(data-aos="fade")
          .tarjeta.fondo19.p-4(titulo="Otorgar la certificación")
            .row.justify-content-center.align-items-center
              .col-xl-2.col-md-2.col-sm-2.col-4.mb-3
                img(src='@/assets/curso/tema3/tarjeta1.svg')
              .col-xl-10.col-md-10.col-sm-10.col-12
                h4 Otorgar la certificación
                p Esta decisión aplica para certificaciones nuevas, renovación de la certificación (antes del vencimiento del certificado), reemisión de certificado para cambio de domicilio, cambio de razón social, ampliación o reducción de alcance u otro cambio que involucre una emisión de un nuevo certificado o una revisión del que está vigente. 
          .tarjeta.fondo19.p-4(titulo="Restaurar la certificación")
            .row.justify-content-center.align-items-center
              .col-xl-2.col-md-2.col-sm-2.col-4.mb-3
                img(src='@/assets/curso/tema3/tarjeta2.svg')
              .col-xl-10.col-md-10.col-sm-10.col-12
                h4 Restaurar la certificación
                p Esta decisión aplica para renovaciones de la certificación que han sobrepasado el plazo de vencimiento del certificado, pero que están dentro de los rangos de tiempo que dan margen de recuperarla. 
          .tarjeta.fondo19.p-4(titulo="Denegar la certificación")
            .row.justify-content-center.align-items-center
              .col-xl-2.col-md-2.col-sm-2.col-4.mb-3
                img(src='@/assets/curso/tema3/tarjeta3.svg')
              .col-xl-10.col-md-10.col-sm-10.col-12
                h4 Denegar la certificación
                p Cuando no se cuenta con evidencia suficiente para otorgar la certificación o se incumplen los compromisos establecidos posteriormente a la auditoría. 
          .tarjeta.fondo19.p-4(titulo="Mantener la certificación")
            .row.justify-content-center.align-items-center
              .col-xl-2.col-md-2.col-sm-2.col-4.mb-3
                img(src='@/assets/curso/tema3/tarjeta4.svg')
              .col-xl-10.col-md-10.col-sm-10.col-12
                h4 Mantener la certificación
                p Esta decisión aplica para mantenciones y auditorías extraordinarias, que no requieran emisión de certificado, se revisan todos los antecedentes del proceso de auditoría, dejándose una evidencia de esta revisión.

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
