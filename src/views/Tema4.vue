<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span.text-white 4
      h1 Seguimiento a procesos de certificación
    p(data-aos="fade-down-left") La obtención de la certificación para los procesos que se llevan a cabo dentro de la unidad productiva, independientemente del estándar escogido, implica un gran compromiso que se debe respetar en todo momento por parte del productor.
    .bloque-texto-g.fondo6.p-3.p-sm-4.p-md-5(data-aos="fade-down-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/imagen1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Debido al nivel de exigencia que demanda conseguir una certificación, es importante desarrollar mecanismos internos que permitan a la empresa agropecuaria mantener los estándares y exigencias, para evitar que en determinado momento se pueda llegar a perder este beneficio.
    p.my-5(data-aos="fade-down-left") Para que esto sea posible es necesario diseñar estrategias enfocadas en:
    SlyderF(data-aos="fade-down-right").mb-5(columnas="col-lg-6 col-xl-4 col-md-6")
      .tarjeta-avatar.sizecrd
        img(src='@/assets/curso/tema4/avatar1.svg')
        .tarjeta.fondo20.sombracrd
          .text-dark.p-4
            p.text-center.mx-1 El mantenimiento de la calidad. 

      .tarjeta-avatar.sizecrd
        img(src='@/assets/curso/tema4/avatar2.svg')
        .tarjeta.fondo20.sombracrd
          .text-dark.p-4
            p.text-center La identificación de oportunidades de mejora.

      .tarjeta-avatar.sizecrd
        img(src='@/assets/curso/tema4/avatar3.svg')
        .tarjeta.fondo20.sombracrd
          .text-dark.p-4
            p.text-center La capacitación permanente a los equipos de trabajo.

      .tarjeta-avatar.sizecrd
        img(src='@/assets/curso/tema4/avatar4.svg')
        .tarjeta.fondo20.sombracrd
          .text-dark.pb-2.pt-3.px-3
            p.text-center El establecimiento de protocolos y procedimientos que faciliten la estandarización de las actividades que tienen lugar en la empresa agropecuaria.

      .tarjeta-avatar.sizecrd
        img(src='@/assets/curso/tema4/avatar5.svg')
        .tarjeta.fondo20.sombracrd
          .text-dark.p-4
            p.text-center La implementación de herramientas de seguimiento para la detección de fallas.

      .tarjeta-avatar.sizecrd
        img(src='@/assets/curso/tema4/avatar6.svg')
        .tarjeta.fondo20.sombracrd
          .text-dark.p-4
            p.text-center La implementación de las correspondientes medidas correctivas, como parte de un sistema de control interno. 
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 4.1 Herramientas de seguimiento
    p(data-aos="fade-down-left") Se entiende por herramientas de seguimiento a todos aquellos instrumentos procedimentales o materiales que, en el marco de la certificación, favorecen llevar un control de procesos, actividades, mejoras, compromisos, capacitación, archivo documental, entre otras.
    p.mb-5(data-aos="fade-down-right") Los mecanismos más empleados en el seguimiento a los procesos de certificación son:
    .tarjeta.fondo20.tarjeta--azul.p-4.mb-5(data-aos="fade-down-left")
      SlyderA(tipo="b")
        .row
          .col-xxl-4.col-xl-5.col-lg-6.col-md-12.col-sm-12.col-12.mb-4.mb-md-0
            h5.ms-4.mt-3.mb-5 Definición de un plan de acción
            p.ms-4 La empresa debe contar con un plan de acción enfocado en el mantenimiento de la certificación en que se definan las actividades específicas que debe desarrollar cada uno de los colaboradores, de acuerdo con su nivel de competencia. Al asignar responsabilidades, en lo relacionado con el mantenimiento de la certificación, es más probable que todos los equipos de trabajo se sientan comprometidos con este propósito y los asuman como un reto personal.
        
          .col-xxl-7.col-xl-6.col-lg-5.col-md-12.col-sm-12.col-12
            img.mt-3.ms-lg-5(src='@/assets/curso/tema4/slider1.png')
        .row
          .col-xxl-4.col-xl-5.col-lg-6.col-md-12.col-sm-12.col-12.mb-4.mb-md-0
            h5.ms-4.mt-3.mb-5 Definir indicadores relacionados con los puntos críticos
            p.ms-4 Es necesario establecer objetivos claros y medibles que den cuenta de la ejecución de determinadas tareas que pueden resultar críticas en los procesos de auditoría externa, como el diligenciamiento de registros de producción, acciones para minimizar riesgos, capacitaciones en seguridad y salud en el trabajo o elaboración de planes de manejo de residuos sólidos, por ejemplo.
        
          .col-xxl-7.col-xl-6.col-lg-5.col-md-12.col-sm-12.col-12
            img.mt-3.ms-lg-5(src='@/assets/curso/tema4/slider2.png')
        .row
          .col-xxl-4.col-xl-5.col-lg-6.col-md-12.col-sm-12.col-12.mb-4.mb-md-0
            h5.ms-4.mt-3.mb-5 Reuniones periódicas
            p.ms-4 Una de las fuentes primarias de información sobre el comportamiento de los Puntos Críticos y Criterios de Cumplimiento (PCCC) en la unidad productiva son los colaboradores. El desarrollo de reuniones periódicas en las cuales se evalúe el comportamiento de estos PCCC es clave para detectar aspectos por mejorar y recoger propuestas del equipo de trabajo para atender estas situaciones. 
          .col-xxl-7.col-xl-6.col-lg-5.col-md-12.col-sm-12.col-12
            img.mt-3.ms-lg-5(src='@/assets/curso/tema4/slider3.png')
        .row
          .col-xxl-4.col-xl-5.col-lg-6.col-md-12.col-sm-12.col-12.mb-4.mb-md-0
            h5.ms-4.mt-3.mb-5 Auditorías internas periódicas
            p.ms-4 El fortalecimiento de un equipo de auditoría interna es otro elemento fundamental para mantener los altos estándares de certificación, puesto que este ejercicio permite identificar fallas en el sistema que se pueden corregir antes de que se presenten en el proceso de auditoría externa. En las actividades de auditoría, además de los procesos, es fundamental involucrar también la revisión de infraestructura, equipos, maquinaria y herramientas. 
        
          .col-xxl-7.col-xl-6.col-lg-5.col-md-12.col-sm-12.col-12
            img.mt-3.ms-lg-5(src='@/assets/curso/tema4/slider4.png')
        .row
          .col-xxl-4.col-xl-5.col-lg-6.col-md-12.col-sm-12.col-12.mb-4.mb-md-0
            h5.ms-4.mt-3.mb-5 Procesos de capacitación y reentrenamiento
            p.ms-4 Es fundamental mantener una cultura de mejora continua en lo relacionado con la capacitación y formación de los equipos de trabajo de la empresa agropecuaria para mantener al personal preparado con miras a la atención de eventualidades. 
        
          .col-xxl-7.col-xl-6.col-lg-5.col-md-12.col-sm-12.col-12
            img.mt-3.ms-lg-5(src='@/assets/curso/tema4/slider5.png')
        .row
          .col-xxl-4.col-xl-5.col-lg-6.col-md-12.col-sm-12.col-12.mb-4.mb-md-0
            h5.ms-4.mt-3.mb-5 Documentación y actualización
            p.ms-4 Un proceso de seguimiento a la certificación no estaría completo sin una debida actualización y revisión de la información más reciente relacionada con la normatividad aplicable a la unidad productiva, ya que constantemente está evolucionando y adaptándose a las nuevas tendencias.
          .col-xxl-7.col-xl-6.col-lg-5.col-md-12.col-sm-12.col-12
            img.mt-3.ms-lg-5(src='@/assets/curso/tema4/slider6.png')
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-down-left")
      h2 4.2 Verificación de actividades
    p(data-aos="fade-down-right") En muchas ocasiones no basta con la implementación de los mecanismos de control en las unidades productivas, sino que es necesario desarrollar alternativas que permitan verificar que, efectivamente, se están realizando las actividades previstas en los manuales de funciones, en los protocolos y manuales de procedimientos.     
    p.mb-5(data-aos="fade-down-left") Para efectuar de manera exitosa la verificación de las actividades, son recomendables:
    TabsA.color-acento-botones.mb-5(data-aos="fade-down-right")
      .tarjeta.fondo19.p-4(titulo="Mecanismos de control interno")
        .row.justify-content-center.align-items-center
          .col-xl-2.col-md-2.col-sm-2.col-4.mb-3
            img(src='@/assets/curso/tema4/tarjeta1.svg')
          .col-xl-10.col-md-10.col-sm-10.col-12
            h4 Mecanismos de control interno
            p En la empresa agropecuaria es necesario establecer un sistema de control interno que se encargue de verificar que las actividades, operaciones y actuaciones, así como los procedimientos administrativos, se lleven a cabo de acuerdo con la normatividad, la ley, las metas y los objetivos previstos. 
      .tarjeta.fondo19.p-4(titulo="Manuales de funciones")
        .row.justify-content-center.align-items-center
          .col-xl-2.col-md-2.col-sm-2.col-4.mb-3
            img(src='@/assets/curso/tema4/tarjeta2.svg')
          .col-xl-10.col-md-10.col-sm-10.col-12
            h4 Manuales de funciones
            p El manual de funciones da los lineamientos a los colaboradores de la empresa para la ejecución de sus actividades. Son herramientas que procuran la evaluación de las gestiones de la unidad productiva por parte de los organismos de certificación.
      .tarjeta.fondo19.p-4(titulo="Diligenciamiento de registros y <br/>trazabilidad")
        .row.justify-content-center.align-items-center
          .col-xl-2.col-md-2.col-sm-2.col-4.mb-3
            img(src='@/assets/curso/tema4/tarjeta3.svg')
          .col-xl-10.col-md-10.col-sm-10.col-12
            h4 Diligenciamiento de registros y trazabilidad
            p Toda la información que se genera al interior de la unidad productiva se debe recopilar en los registros establecidos, para tener control sobre entradas y salidas, así como contar con una fuente de verificación de las actividades realizadas. Por medio de los registros, igualmente, es posible obtener la trazabilidad y revisar la evolución de los productos de la unidad productiva durante cada una de sus etapas.
    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 4.3 Sanciones
    .row.justify-content-center(data-aos="fade-down-left")
      .col-xxl-5.col-xl-5.col-lg-5.col-md-12.mb-4
        p La certificación de unidades productivas agropecuarias es bastante exigente y es un proceso que demanda gran cantidad de tiempo y recursos para que se lleve a feliz término; por ello, es importante implementar todo lo que sea posible para mantenerla y evitar que sea revocada por el organismo competente.
        .cajon.color-acento-contenido.px-4.pt-3.pb-1.mb-4.fondo14
          p Si bien las sanciones son situaciones no deseadas, es importante conocer cuáles son las causales por las que se puede suspender o retirar una certificación, indistintamente del estándar de certificación escogido.
      .col-xxl-7.col-xl-7.col-lg-7.col-md-12.mb-4
        img(src='@/assets/curso/tema4/imagen2.jpg')
    .row.justify-content-center(data-aos="fade-down-right")
      .col-xxl-4.col-xl-4.col-lg-4.col-md-12.mb-4
        img(src='@/assets/curso/tema4/imagen3.jpg')   
      .col-xxl-8.col-xl-8.col-lg-8.col-md-12.mb-4
        p.mb-4 Los motivos de suspensión de certificación, generalmente, son los que se detallan a continuación:
        ul.lista-ul.ms-3
          li 
            i.fas.fa-angle-right
            | El sistema de gestión certificado ha dejado de cumplir de forma persistente o grave con los requisitos, por ejemplo: resultado de auditoría no recomendado o una no conformidad crítica.
          li 
            i.fas.fa-angle-right
            | Falta de respuesta a las no conformidades dentro del tiempo establecido, casos de retiro, uso inapropiado de marcas y referencias de certificación.
          li 
            i.fas.fa-angle-right
            | El cliente certificado no permite la realización de las auditorías de seguimiento o de renovación en la periodicidad requerida, o se niega a recibir una auditoría no anunciada (en algunos programas de certificación es un requisito obligatorio).
          li 
            i.fas.fa-angle-right
            | Cambios significativos que afectan, directamente, su sistema de gestión o por un accidente grave.
          li 
            i.fas.fa-angle-right
            | Casos de actividad ilícita por parte de la organización certificada.
          li 
            i.fas.fa-angle-right
            | Incumplimiento en los acuerdos de la propuesta económica.
          li 
            i.fas.fa-angle-right
            | El cliente certificado ha pedido, voluntariamente, una suspensión.
    .row.justify-content-center(data-aos="fade-down-left")
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12.col-sm-12.col-12
        .cajon.color-acento-contenido.px-4.pt-3.pb-1.mb-4.fondo16
          p Durante la suspensión, la certificación se invalida de forma temporal, pero se retoma cuando se resuelve el motivo que la originó.
    p.mb-4.mt-3(data-aos="fade-down-right") Por otro lado, se puede presentar el retiro de la certificación y es común que la causa esté en los mismos motivos por los que se da una suspensión; entre los más comunes están:

    .row.mb-5.justify-content-center(data-aos="fade")
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12
        .row.justify-content-center
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema4/avatar2-1.svg')
              .tarjeta.fondo21
                .p-4
                  h4.text-center Incumplimientos o faltas de alta gravedad
                  p.text-center Es el incumplimiento o falta grave a los requisitos de la certificación otorgada y, de no haberse resuelto en los tiempos establecidos, existen esquemas de certificación o estándares en los que se establecen casos muy puntuales donde se puede retirar la certificación de forma inmediata debido a la gravedad de la situación.

          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema4/avatar2-2.svg')
              .tarjeta.fondo21
                .p-4
                  h4.text-center Solicitud de retiro por parte de la empresa
                  p.text-center Por otra parte, la organización certificada puede solicitar la cancelación de la certificación por decisión corporativa, por declarar cierre de operaciones o de relaciones comerciales.

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
