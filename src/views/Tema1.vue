<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span.text-white 1
      h1 Fases del proceso de certif<span style="margin-left: 1px;">i</span>cación
    p(data-aos="fade-down") La certificación de unidades productivas agropecuarias es un proceso que se da de manera secuencial, en el cual es necesario seguir algunos procedimientos establecidos que dependen, principalmente, de la clase de certificación, de lo que se pretenda conseguir con ella y del sistema productivo en el que se esté implementando.
    .row.justify-content-center(data-aos="fade-up")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.col-sm-12.col-12
        p Son tres, las macrofases que, generalmente, se deben dar para la certificación de una unidad productiva, donde es evidente que la mayoría de las tareas y responsabilidades están a cargo del productor, la empresa o la asociación de productores que desea acceder al beneficio: 
          span.fondo1.text-bold fase cero, fase de implementación y fase de sostenimiento.
        .cajon.color-acento-contenido.p-4.mb-4.fondo2
          p Es necesario que los interesados en la certificación tengan un conocimiento previo sobre las exigencias y los requisitos que se deben cumplir, puesto que todas las actividades que se desarrollen dentro del predio deben darse en función de ello.
      .col-xxl-6.col-xl-6.col-lg-12.col-md-12.col-sm-12.col-12
        img(src='@/assets/curso/tema1/imagen1.jpg')
    p.my-5(data-aos="fade-down") Ahora, se debe analizar la siguiente estructura, la cual muestra las acciones o necesidades de cada una de las tres grandes fases; e identificar cuáles de ellas son responsabilidad del productor y cuáles están a cargo de la entidad certificadora:
    .row.ampliar.px-5.fondo26
      .col-12
        .row.justify-content-center.mb-5(data-aos="fade-up")
          .col-xxl-3.col-xl-3.col-lg-3.col-md-6.col-sm-6.col-8.mb-3
            img(src='@/assets/curso/tema1/imagen2.jpg')
          .col-xxl-9.col-xl-9.col-lg-9.col-md-12.col-sm-12.col-12.mb-5.mb-md-0
            LineaTiempoD.color-secundario.fondolineatiempo
              p(numero="1" titulo="Fase cero") 

                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | <p><span style="font-weight:700">Información preliminar:</span> 
                    | se debe tener claridad sobre qué tipo de certificación se requiere y qué beneficios puede tener para la empresa agropecuaria.</p> 
                  li
                    i.fas.fa-angle-right
                    | <p><span style="font-weight:700">Adecuaciones y mejoras:</span> 
                    | una vez definida la certificación deseada, se deben realizar las adecuaciones y mejoras al interior de la unidad productiva, para lo cual es necesario conocer la norma y cumplir con las disposiciones y regulaciones que se estipulan.</p>
                  li 
                    i.fas.fa-angle-right
                    | <p><span style="font-weight:700">Aspectos legales:</span>
                    | conocimiento de normatividad relacionada con explotación agropecuaria que se certificará y aspectos legales que se derivan del ejercicio productivo: contratación del personal, el uso del suelo, manejo de residuos sólidos y concesiones de aguas, entre otros. </p>
                  li 
                    i.fas.fa-angle-right
                    | <p><span style="font-weight:700">Auditoría interna:</span>
                    | el productor debe realizar una evaluación previa de las condiciones de su unidad productiva con el fin de estimar los avances o las dificultades que se tienen para cumplir con las exigencias del proceso de certificación.</p>
              
              p(numero="2" titulo="Fase de implementación") 
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | <p><span style="font-weight:700">Solicitud formal:</span> 
                    | la persona, empresa o unidad productiva que desea certificarse, eleva una petición por escrito ante el organismo correspondiente.</p> 
                  li
                    i.fas.fa-angle-right
                    | <p><span style="font-weight:700">Proceso contractual:</span> 
                    | es necesario cumplir con cada uno de los requisitos exigidos por la empresa certificadora y se formaliza con un contrato legal firmado entre las partes.</p>
                  li 
                    i.fas.fa-angle-right
                    | <p><span style="font-weight:700">Auditoría externa:</span>
                    | realizada por un evaluador externo a la unidad productiva, es el encargado de las labores de inspección por parte de la empresa certificadora.</p>
                  li 
                    i.fas.fa-angle-right
                    | <p><span style="font-weight:700">Concepto:</span>
                    | emitido por el evaluador sobre el cumplimiento de los requisitos de la certificación solicitada e, igualmente, recomendaciones que se consideren pertinentes. </p>
              
              p(numero="3" titulo="Fase de sostenimiento")
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | <p><span style="font-weight:700">Auditoría interna:</span> 
                    | evaluación de las condiciones de la unidad productiva con base en concepto del evaluador y las recomendaciones presentadas, para cumplir con exigencias del proceso de certificación.</p> 
                  li
                    i.fas.fa-angle-right
                    | <p><span style="font-weight:700">Mejora continua:</span> 
                    | la certificación no concluye con la obtención del certificado, sino que es el comienzo de otra serie de procesos y acciones para mantenerla.</p>
        separador
        #solicitud.titulo-segundo.color-acento-contenido(data-aos="fade")
          h2 1.1 Solicitud
        p.mb-5(data-aos="fade-down") Una vez se ha adelantado el proceso de preauditoría y se ha determinado que la unidad productiva cumple con los requisitos de la lista de chequeo, se puede hacer la solicitud. Este es un proceso formal en el cual la persona, empresa o unidad productiva que desea certificarse, eleva una petición por escrito ante el organismo correspondiente.
        .row.justify-content-center(data-aos="fade-up")
          .col-xxl-5.col-xl-5.col-lg-5.col-md-12.col-sm-12.col-12
            p Entre las empresas más conocidas para la certificación de explotaciones agropecuarias en Colombia, están:
            ul.lista-ul.ms-3
              li 
                i.fas.fa-angle-right
                | El Instituto Colombiano Agropecuarios (ICA).
              li
                i.fas.fa-angle-right
                | El Instituto Colombiano de Normas Técnicas (Icontec).
              li 
                i.fas.fa-angle-right
                | Mayacert, Ecocert, Ceres (Certification of Environmental Standards Colombia S.A.S.).
              li 
                i.fas.fa-angle-right
                | Biotrópico.     
          .col-xxl-7.col-xl-7.col-lg-7.col-md-12.col-sm-12.col-12
            img(src='@/assets/curso/tema1/imagen3.jpg')

        p.my-5(data-aos="fade-down") Vale la pena resaltar que estas compañías están avaladas por el Organismo Nacional de Acreditación de Colombia (ONAC) y el Ministerio de Agricultura y Desarrollo Rural.
        .row.justify-content-center(data-aos="fade-up")
          .col-xxl-7.col-xl-7.col-lg-7.col-md-12.col-sm-12.col-12.mb-4
            img(src='@/assets/curso/tema1/imagen4.jpg')
          .col-xxl-5.col-xl-5.col-lg-5.col-md-12.col-sm-12.col-12
            .cajon.color-acento-contenido.p-4.mb-4.fondo2
              p Una vez se escoge la certificadora, se procede a realizar la solicitud, para lo cual cada empresa tiene sus protocolos y procedimientos.
              p Es de suma importancia establecer un contacto inicial con la empresa o contar con asesoría profesional al respecto del proceso de certificación.
        p.my-5(data-aos="fade-left") En el caso de la certificación en BPA del ICA, de acuerdo con la normativa, a la solicitud escrita se le deben anexar los siguientes documentos:
        SlyderF(data-aos="fade-down").mb-5(columnas="col-lg-6 col-xl-4 col-md-6")
          .tarjeta-avatar.sizecrd
            img(src='@/assets/curso/tema1/slider1.svg')
            .tarjeta.fondoavatar.sombracrd
              .text-dark.p-4
                p.text-center Certificado de existencia y representación legal de la cámara de comercio (persona jurídica). 

          .tarjeta-avatar.sizecrd
            img(src='@/assets/curso/tema1/slider2.svg')
            .tarjeta.fondoavatar.sombracrd
              .text-dark.p-4
                p.text-center Acreditar propiedad, tenencia o posesión del predio. 

          .tarjeta-avatar.sizecrd
            img(src='@/assets/curso/tema1/slider3.svg')
            .tarjeta.fondoavatar.sombracrd
              .text-dark.p-4
                p.text-center Acreditar asistencia técnica profesional a la unidad productiva. 

          .tarjeta-avatar.sizecrd
            img(src='@/assets/curso/tema1/slider4.svg')
            .tarjeta.fondoavatar.sombracrd
              .text-dark.p-4
                p.text-center Croquis de llegada y plano de la finca indicando las áreas destinadas a la producción. 

          .tarjeta-avatar.sizecrd
            img(src='@/assets/curso/tema1/slider5.svg')
            .tarjeta.fondoavatar.sombracrd
              .text-dark.p-5
                p.text-center Certificado de uso del suelo.

          .tarjeta-avatar.sizecrd
            img(src='@/assets/curso/tema1/slider6.svg')
            .tarjeta.fondoavatar.sombracrd
              .text-dark.p-4
                p.text-center Análisis microbiológico de las aguas utilizadas en el predio. 

          .tarjeta-avatar.sizecrd
            img(src='@/assets/curso/tema1/slider7.svg')
            .tarjeta.fondoavatar.sombracrd
              .text-dark.p-4
                p.text-center Permiso de uso de aguas o radicado de solicitud (Decreto 3930 de 2010 del Ministerio de Ambiente).
        p.mt-5 En el caso de la certificación orgánica, en el documento de solicitud y dependiendo de la certificadora, se debe responder un cuestionario que, por lo general, aborda los siguientes temas: 
    .row.justify-content-center(data-aos="fade-up")
      .titulo-sexto.color-acento-botones.ms-4(data-aos="fade")
        h5 Figura 1. 
        span Generalidades de consideración para solicitud de proceso de certificación
      .col-xxl-5.col-xl-5.col-lg-5.col-md-12.col-sm-12.col-12.mb-4
        img(src='@/assets/curso/tema1/figura1.svg')
      .col-xxl-7.col-xl-7.col-lg-7.col-md-12.col-sm-12.col-12.mb-4
        ul.lista-ul
          li 
            i.fas.fa-angle-right
            | Datos generales del productor agropecuario. 
          li
            i.fas.fa-angle-right
            | Información general del sistema productivo. 
          li
            i.fas.fa-angle-right
            | Indicar si ya se ha certificado o si es la primera vez. 
          li
            i.fas.fa-angle-right
            | Anexar un plano o mapa de la finca. 
          li
            i.fas.fa-angle-right
            | Explicar por cada lote los cultivos establecidos y los agroinsumos usados en los últimos 5 años.
          li
            i.fas.fa-angle-right
            | Procedencia de semillas. 
          li
            i.fas.fa-angle-right
            | Indicar qué tipo de maquinaria se emplea, si es propia o alquilada, y su procedencia.
          li
            i.fas.fa-angle-right
            | Procedencia del agua para uso en la unidad productiva. 
          li
            i.fas.fa-angle-right
            | Información sobre riesgos de contaminación química. 
          li
            i.fas.fa-angle-right
            | Información sobre tipo de fertilizantes empleados. 
          li
            i.fas.fa-angle-right
            | Información sobre las prácticas para el manejo integrado de plagas y enfermedades.
          li
            i.fas.fa-angle-right
            | Indicar el uso de agroquímicos prohibidos en los últimos 5 años. 
          li
            i.fas.fa-angle-right
            | Determinar posibles riesgos de contaminación. 
          li
            i.fas.fa-angle-right
            | Información sobre el tipo de transporte de la cosecha y las medidas para prevenir la contaminación. 
          li
            i.fas.fa-angle-right
            | Estimación de los rendimientos de cosecha. 
          li
            i.fas.fa-angle-right
            | Anexar el plan de manejo de la unidad productiva.

    p.mb-5(data-aos="fade-down") Para que la solicitud de certificación sea aceptada es necesario cumplir con cada uno de los requisitos exigidos por la empresa certificadora, lo cual conlleva un dedicado trabajo de preparación que precisa de la participación de todos los colaboradores de la unidad productiva sin excepción. 
    separador
    #documentacion.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.2 Documentación 
    p.mt-5(data-aos="fade-down") Dentro de los procesos de certificación es fundamental una correcta gestión documental, por medio de la cual se sistematice, organice y almacene toda la información concerniente a la unidad productiva y a los subprocesos que tienen lugar dentro de ella.
    p.mb-5(data-aos="fade-up") En lo relacionado con la documentación para procesos de certificación, tenga presente los siguientes aspectos clave:
    .row.justify-content-center(data-aos="fade-down")
      .col-xxl-4.col-xl-4.col-lg-4.col-md-12.col-sm-12.col-12.mb-4
        img(src='@/assets/curso/tema1/imagen5.jpg')
      .col-xxl-8.col-xl-8.col-lg-8.col-md-12.col-sm-12.col-12
        LineaTiempoD.color-secundario.fondolineatiempo
          p(numero="1" titulo="Tipo de documentación") Respecto a los documentos que se manejan en un sistema productivo certificado están, principalmente, los de tipo legal y aquellos en los cuales se registra toda la actividad operativa de la finca. 
          
          p(numero="2" titulo="Documentación soporte") En cuanto a lo normativo, es necesario contar con los documentos que den cuenta del cumplimiento de los requisitos legales para el ejercicio de la actividad productiva independientemente de su naturaleza, extensión, capacidad productiva o sector al que pertenezca. 
          
          p(numero="3" titulo="Documentación con información detallada") En los procesos de auditoría este es uno de los aspectos que se analizan en detalle debido a los riesgos que puede tener para la salud humana, o el aseguramiento de la calidad cualquier descuido en el cumplimiento de la reglamentación vigente.

          p(numero="4" titulo="Documentación enmarcada en lo normativo") Igualmente, existen requisitos normativos que se relacionan directamente con los estándares internacionales hacia los cuales se orienta el proceso de certificación.
    p.my-5(data-aos="fade-up") Las siguientes, son algunas consideraciones legales para la actividad productiva agropecuaria, soportadas en documentación formal:

    .row.justify-content-center(data-aos="fade-down")
      .col-xxl-8.col-xl-8.col-lg-8.col-md-12.col-sm-12.col-12
        AcordionA(tipo="b" clase-tarjeta="tarjeta fondo3")
          .row.align-items-center(titulo="Uso del suelo")
            .col-2.col-sm-2.col-lg-2.col-md-1.mb-md-0.p-lg-4
              img(src='@/assets/curso/tema1/acordeon1.svg')
            .col-md-10.col-sm-10.col-10.mb-md-0.mb-lg-0
              p.mb-0 Se debe tener claridad sobre los usos del suelo permitidos en la zona en la cual se desarrolla la actividad productiva.
          .row.align-items-center(titulo="Concesión de aguas")
            .col-2.col-sm-2.col-lg-2.col-md-1.mb-md-0.p-lg-4
              img(src='@/assets/curso/tema1/acordeon2.svg')
            .col-md-10.col-sm-10.col-10.mb-md-0
              p.mb-0 Se debe tramitar la solicitud ante la autoridad ambiental competente para el uso de las fuentes de agua. 
          .row.align-items-center(titulo="Permisos ambientales")
            .col-2.col-sm-2.col-lg-2.col-md-1.mb-md-0.p-lg-4
              img(src='@/assets/curso/tema1/acordeon3.svg')
            .col-md-10.col-sm-10.col-10.mb-md-0
              p.mb-0 Es necesario contar con los permisos para aprovechamiento forestal u obras de infraestructura entre otros. 
          .row.align-items-center(titulo="Manejo de residuos sólidos")
            .col-2.col-sm-2.col-lg-2.col-md-1.mb-md-0.p-lg-4
              img(src='@/assets/curso/tema1/acordeon4.svg')
            .col-md-10.col-sm-10.col-10.mb-md-0
              p.mb-0 Se debe contar con un plan de manejo de residuos sólidos debidamente avalado.
          .row.align-items-center(titulo="Seguridad y salud en el trabajo")
            .col-2.col-sm-2.col-lg-2.col-md-1.mb-md-0.p-lg-4
              img(src='@/assets/curso/tema1/acordeon5.svg')
            .col-md-10.col-sm-10.col-10.mb-4.mb-md-0
              p.mb-0 Es importante cumplir con lo recomendado por la normativa en relación con el bienestar de los trabajadores. 
          .row.align-items-center(titulo="Normatividad ICA")
            .col-2.col-sm-2.col-lg-2.col-md-1.mb-md-0.p-lg-4
              img(src='@/assets/curso/tema1/acordeon6.svg')
            .col-md-10.col-sm-10.col-10.mb-md-0
              p.mb-0 Cada una de las explotaciones que se desee certificar debe cumplir con la normatividad del ICA que aplique.
      .col-xxl-4.col-xl-4.col-lg-4.col-md-12.col-sm-12.col-12
        img(src='@/assets/curso/tema1/imagen6.jpg')
    .row.justify-content-center.mt-5(data-aos="fade-up")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.col-sm-12.col-12.mb-4
        img(src='@/assets/curso/tema1/imagen7.jpg')
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.col-sm-12.col-12
        p Además de los requisitos normativos, en los procesos productivos certificados es fundamental el manejo de registros que den cuenta de que los procesos llevados a cabo en la unidad productiva se han efectuado de acuerdo con lo estipulado en cada uno de los protocolos.
        .cajon.color-acento-contenido.p-4.mb-4.fondo2
          p Un correcto manejo de los registros facilita las actividades de seguimiento y permite tener trazabilidad sobre cada uno de los procesos que tienen lugar en la unidad agropecuaria, lo cual es fundamental para asegurar la calidad y preservar la salud de las personas.
    p.mb-5(data-aos="fade-down") Para la certificación orgánica, por ejemplo, según lo presentado por la firma auditora Ceres Colombia, en lo que respecta a la documentación, para lo cual es fundamental cumplir con las siguientes acciones:
    .row.ampliar.px-5.fondo23
      .col-xxl-12
        SlyderF(data-aos="fade-up").mb-5(columnas="col-lg-6 col-xl-4 col-md-6")
          .tarjeta-avatar.sizecrd1
            img(src='@/assets/curso/tema1/slider2-1.png')
            .tarjeta.fondoavatar2.sombracrd
              .text-dark.p-4
                p.text-center Se debe llevar un diario de producción, en el cual se registran las principales actividades en cada lote.

          .tarjeta-avatar.sizecrd1
            img(src='@/assets/curso/tema1/slider2-2.png')
            .tarjeta.fondoavatar2.sombracrd
              .text-dark.p-4
                p.text-center Se deben archivar las facturas de la compra de fertilizantes, plaguicidas, semillas etc. 

          .tarjeta-avatar.sizecrd1
            img(src='@/assets/curso/tema1/slider2-3.png')
            .tarjeta.fondoavatar2.sombracrd
              .text-dark.p-4
                p.text-center Se deben documentar las cantidades cosechadas de cada cultivo.

          .tarjeta-avatar.sizecrd1
            img(src='@/assets/curso/tema1/slider2-4.png')
            .tarjeta.fondoavatar2.sombracrd
              .text-dark.p-4
                p.text-center La finca necesita, como mínimo, un sistema simple de contabilidad de la venta de productos orgánicos. 

          .tarjeta-avatar.sizecrd1
            img(src='@/assets/curso/tema1/slider2-5.png')
            .tarjeta.fondoavatar2.sombracrd
              .text-dark.p-4
                p.text-center Adicionalmente, JAS (certificación orgánica japonesa) exige la documentación del control de cada lote vendido: antes de vender un lote con el logotipo JAS, el productor tiene que revisar si los requerimientos de JAS se han cumplido en cada paso de la producción.
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/imagen8.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p En el caso de la certificación orgánica para fincas cafeteras, en lo relacionado con la documentación que se revisa por parte de la firma auditora, se debe tener en cuenta:
        ul.lista-ul
          li.mb-0.mt-2
            i.fas.fa-angle-right
            | Plan de manejo orgánico del sistema productivo. 
          li.mb-0
            i.fas.fa-angle-right
            | Diagrama de flujo del sistema productivo. 
          li.mb-0 
            i.fas.fa-angle-right
            | Mapa detallado de la finca. 
          li.mb-0 
            i.fas.fa-angle-right
            | Registros: personal, planillas de jornales, afiliaciones a salud, compra de insumos, ventas, etc. 
          li 
            i.fas.fa-angle-right
            | Documentación del sistema de control interno.
    separador
    #alistamiento.titulo-segundo.color-acento-contenido(data-aos="fade-up")
      h2 1.3 Alistamiento
    p.mb-5(data-aos="fade-down") La fase de alistamiento consiste en la 
      span.text-bold.colortextocontenido preparación de los elementos necesarios 
      span para desarrollar el proceso de certificación, conforme con los lineamientos de la empresa auditora, especialmente en lo relacionado con la formalización del contrato entre las partes y el pago del valor de la inspección.
    .row.justify-content-center(data-aos="fade-up")
      .col-xxl-8.col-xl-8.col-lg-8.col-md-12.col-sm-12.col-12.my-4
        p Se debe seguir con atención los pasos que se explican y detallan a continuación; así se tendrá un mejor reconocimiento de las generalidades relacionadas con el contrato y el pago de comisiones, en el proceso de certificación:
        #carouselExampleIndicators2.carousel.slide(data-bs-ride='carousel')
          .carousel-indicators
            button.active(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
            button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='1' aria-label='Slide 2')
            button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='2' aria-label='Slide 3')
            button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='3' aria-label='Slide 4')
            button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='4' aria-label='Slide 5')
            button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='5' aria-label='Slide 6')
            button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='6' aria-label='Slide 7')
          .carousel-inner
            .carousel-item.active.altocarrusel.fondo25
              .row
                .col-md-2.col-sm-1.col-1
                .col-md-4.col-sm-6.col-11
                  h5.mt-4.ms-5.ms-sm-4.ms-md-0 Hecha la solicitud
              .row.justify-content-center.align-items-center.mb-4
                .col-xxl-2.col-xl-2.col-lg-2.col-md-2.col-sm-0.col-0.ps-5
                  img.nomostrar(src='@/assets/curso/tema1/carrusel1.svg')
                .col-xxl-8.col-xl-8.col-lg-8.col-md-8.col-sm-9.col-10.pe-4
                  p.ms-5.ms-sm-2.mb-0 Después de realizar la solicitud, la firma auditora la estudia y establece los términos en los que se dará el proceso de certificación para, posteriormente, emitir una cotización al productor solicitante.
            .carousel-item.altocarrusel.fondo25
              .row
                .col-md-2.col-sm-1.col-1
                .col-md-5.col-sm-6.col-11
                  h5.mt-4.ms-5.ms-sm-4.ms-md-0 Acordado y aceptado el valor
              .row.justify-content-center.align-items-center.mb-4
                .col-xxl-2.col-xl-2.col-lg-2.col-md-2.col-sm-0.col-0.ps-5
                  img.nomostrar(src='@/assets/curso/tema1/carrusel2.svg')
                .col-xxl-8.col-xl-8.col-lg-8.col-md-8.col-sm-9.col-10.pe-4
                  p.ms-5.ms-sm-2.mb-0 Si el productor acepta el valor estipulado por la empresa auditora, envía una comunicación escrita, firma el contrato y consigna el 50% del valor de la inspección.
            .carousel-item.altocarrusel.fondo25
              .row
                .col-md-2.col-sm-1.col-1
                .col-md-5.col-sm-6.col-8
                  h5.mt-4.ms-5.ms-sm-4.ms-md-0 Realizar o no la inspección
              .row.justify-content-center.align-items-center.mb-4
                .col-xxl-2.col-xl-2.col-lg-2.col-md-2.col-sm-0.col-0.ps-5
                  img.nomostrar(src='@/assets/curso/tema1/carrusel3.svg')
                .col-xxl-8.col-xl-8.col-lg-8.col-md-8.col-sm-9.col-10.pe-4.ps-0
                  p.ms-5.ms-sm-3.mb-0 En caso de que el solicitante no cumpla con la documentación exigida en los plazos establecidos, no se realiza el pago del valor de la inspección o no se entrega la información completa sobre la unidad productiva; la empresa certificadora no realizará la inspección.
            .carousel-item.altocarrusel.fondo25
              .row
                .col-md-2.col-sm-1.col-1
                .col-md-5.col-sm-6.col-8
                  h5.mt-4.ms-4.ms-sm-4.ms-md-0 ¿Quién asume los costos? 
              .row.justify-content-center.align-items-center.mb-4
                .col-xxl-2.col-xl-2.col-lg-2.col-md-2.col-sm-0.col-0.ps-5
                  img.nomostrar(src='@/assets/curso/tema1/carrusel4.svg')
                .col-xxl-8.col-xl-8.col-lg-8.col-md-8.col-sm-9.col-10.pe-4.ps-0
                  p.ms-5.ms-sm-3.mb-0 Las certificaciones, como cualquier otro servicio, tienen un costo que debe ser asumido por el productor.
            .carousel-item.altocarrusel.fondo25
              .row
                .col-md-2.col-sm-1.col-1
                .col-md-5.col-sm-6.col-8
                  h5.mt-4.ms-4.ms-sm-4.ms-md-0 ¿Quién solicita el servicio?
              .row.justify-content-center.align-items-center.mb-4
                .col-xxl-2.col-xl-2.col-lg-2.col-md-2.col-sm-0.col-0.ps-5
                  img.nomostrar(src='@/assets/curso/tema1/carrusel5.svg')
                .col-xxl-8.col-xl-8.col-lg-8.col-md-8.col-sm-9.col-10.pe-4.ps-0
                  p.ms-5.ms-sm-3.mb-0 La solicitud del servicio se puede realizar a título individual o de forma colectiva, como es el caso de las certificaciones que se entregan a las asociaciones de agricultores, los cuales desarrollan su actividad productiva en diferentes predios. 
            .carousel-item.altocarrusel.fondo25
              .row
                .col-md-2.col-sm-1.col-1
                .col-md-5.col-sm-6.col-8
                  h5.mt-4.ms-5.ms-sm-4.ms-md-0 Certificaciones sin costo
              .row.justify-content-center.align-items-center.mb-4
                .col-xxl-2.col-xl-2.col-lg-2.col-md-2.col-sm-0.col-0.ps-5
                  img.nomostrar(src='@/assets/curso/tema1/carrusel6.svg')
                .col-xxl-8.col-xl-8.col-lg-8.col-md-8.col-sm-9.col-10.pe-4.ps-0
                  p.ms-5.ms-sm-3.mb-0 En el caso de las certificaciones del ICA (en BPA, BPG, granjas bioseguras, por ejemplo) no se registra ningún costo.
            .carousel-item.altocarrusel.fondo25
              .row
                .col-md-2.col-sm-0.col-1
                .col-md-5.col-sm-9.col-11
                  h5.mt-4.ms-5.ms-sm-4.ms-md-0 Habiendo firmado el contrato
              .row.justify-content-center.align-items-center.mb-4
                .col-xxl-2.col-xl-2.col-lg-2.col-md-2.col-sm-0.col-0.ps-5
                  img.nomostrar(src='@/assets/curso/tema1/carrusel7.svg')
                .col-xxl-8.col-xl-8.col-lg-8.col-md-8.col-sm-9.col-10.pe-4.ps-0
                  p.ms-5.ms-sm-3.mb-0 Después de efectuada la firma del contrato y de hacerse efectivo el pago de las comisiones de la certificación, la firma auditora establece las fechas en las que se hará la visita de inspección y las condiciones para llevar a cabo este importante procedimiento.
          button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide='prev')
            span.carousel-control-prev-icon(aria-hidden='true')
            span.visually-hidden Previous
          button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide='next')
            span.carousel-control-next-icon(aria-hidden='true')
            span.visually-hidden Next        
      .col-xxl-4.col-xl-4.col-lg-4.col-md-12.col-sm-12.col-12
        img(src='@/assets/curso/tema1/imagen9.jpg')
    separador
    #interna.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.4 Auditoría interna
    .row.ampliar.px-5.fondo27
      .col-12
        .row.justify-content-center(data-aos="fade-down")
          .col-xxl-5.col-xl-5.col-lg-5.col-md-12.col-sm-12.col-12.mb-4
            p El productor debe realizar una evaluación previa de las condiciones de su unidad productiva, con el fin de estimar los avances o las dificultades que se tienen para cumplir con las exigencias del proceso de certificación. Para ello debe, en lo posible, contar con orientación profesional.
            p Aquí se debe profundizar en los elementos y acciones fundamentales para el desarrollo de la auditoría interna, en procesos de certificación; para ello se debe observar con atención el video que se presenta.
          .col-xxl-7.col-xl-7.col-lg-7.col-md-12.col-sm-12.col-12
            img(src='@/assets/curso/tema1/imagen10.jpg')
        figure.my-5(data-aos="fade-up")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/-69AgRp3_IA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        separador
        #externa.titulo-segundo.color-acento-contenido(data-aos="fade-down")
          h2 1.5 Auditoría externa
        .row.justify-content-center(data-aos="fade-up")
          .col-xxl-6.col-xl-6.col-lg-6.col-md-12.col-sm-12.col-12
            p Cuando la auditoría interna se realiza con criterio y se asume con el rigor que requiere, tiene un alto porcentaje de ser exitosa. La auditoría externa, como su nombre lo indica, es realizada por un evaluador externo a la unidad productiva el cual es encargado de las labores de inspección por parte de la empresa certificadora.
            p.fondo4.p-4 Las personas encargadas el proceso de evaluación cuentan con la idoneidad, experiencia y criterio suficientes para emitir un concepto sobre el cumplimiento de los requisitos de la certificación solicitada, e, igualmente, hacer las recomendaciones que se consideren pertinentes. 
          .col-xxl-6.col-xl-6.col-lg-6.col-md-12.col-sm-12.col-12
            img(src='@/assets/curso/tema1/imagen11.jpg')
        p.my-5 Los subprocesos que comprende la auditoría externa de las unidades productivas agropecuarias son, principalmente, los siguientes:
        .row.justify-content-center(data-aos="fade-down")
          .col-xxl-8.col-xl-8.col-lg-8.col-md-12.col-sm-12.col-12.mb-4
            AcordionA(tipo="b" clase-tarjeta="tarjeta fondo3")
              .row.align-items-center(titulo="<p style='font-size: 18px; font-weight: 700;'>Inspección externa</p>")
                .col-3.col-sm-3.col-lg-2.col-md-2.mb-4.mb-md-0
                  img(src='@/assets/curso/tema1/acordeon2-1.svg')
                .col-md-10.col-sm-9.col-9.mb-4.mb-md-0.mb-lg-0
                  p.mb-0 Requiere de un plan de auditoría y de un auditor ajeno a la unidad productiva.
              .row.align-items-center(titulo="<p style='font-size: 18px; font-weight: 700;'>Reporte de inspección</p>")
                .col-3.col-sm-3.col-lg-2.col-md-2.mb-4.mb-md-0
                  img(src='@/assets/curso/tema1/acordeon2-2.svg')
                .col-md-10.col-sm-9.col-9.mb-4.mb-md-0
                  p.mb-0 El reporte se firma por las partes y se entrega copia al solicitante - productor.
              .row.align-items-center(titulo="<p style='font-size: 18px; font-weight: 700;'>Acciones de mejora</p>")
                .col-3.col-sm-3.col-lg-2.col-md-2.mb-4.mb-md-0
                  img(src='@/assets/curso/tema1/acordeon2-3.svg')
                .col-md-10.col-sm-9.col-9.mb-4.mb-md-0
                  p.mb-0 Dentro del reporte se especifican las actividades que requieren especial atención.
              .row.align-items-center(titulo="<p style='font-size: 18px; font-weight: 700;'>Nueva inspección</p>")
                .col-3.col-sm-3.col-lg-2.col-md-2.mb-4.mb-md-0
                  img(src='@/assets/curso/tema1/acordeon2-4.svg')
                .col-md-10.col-sm-9.col-9.mb-4.mb-md-0
                  p.mb-0 Se dan plazos razonables para las adecuaciones necesarias para cumplir con la normatividad.
              .row.align-items-center(titulo="<p style='font-size: 18px; font-weight: 700;'>Certificación de decisión</p>")
                .col-3.col-sm-3.col-lg-2.col-md-2.mb-4.mb-md-0
                  img(src='@/assets/curso/tema1/acordeon2-5.svg')
                .col-md-10.col-sm-9.col-9.mb-4.mb-md-0
                  p.mb-0 Se define si la unidad productiva cumple con los requisitos para acceder a la certificación.
          .col-xxl-4.col-xl-4.col-lg-4.col-md-12.col-sm-12.col-12
            img(src='@/assets/curso/tema1/imagen12.jpg')
        separador
        #mejora.titulo-segundo.color-acento-contenido(data-aos="fade-up")
          h2 1.6 Mejora continua
        .row.justify-content-center(data-aos="fade-down")
          .col-xxl-6.col-xl-6.col-lg-6.col-md-12.col-sm-12.col-12.mb-4
            img(src='@/assets/curso/tema1/imagen13.jpg')
          .col-xxl-6.col-xl-6.col-lg-6.col-md-12.col-sm-12.col-12
            p La certificación de las unidades productivas agropecuarias no concluye con la obtención del certificado, sino que, por el contrario este es el comienzo de otra serie de procesos en los cuales el solicitante deberá hacer todo lo que esté a su alcance para mantenerla.
            .row.justify-content-start
              .col-md-7.col-lg-10.col-xl-8.mb-4.col-sm-9.col-11.col-xxl-7
                h4.p-3.fondotitulo.text-white.mb-0 ¿Mantener la certificación?
            p Asegurar la sostenibilidad de la certificación de la unidad productiva requiere de un esfuerzo constante de mejora continua en el cual el productor debe mantener la calidad y eficiencia en todos los ítems evaluados, porque el sello puede ser revocado si no se cumple con los criterios establecidos.
    .row.justify-content-center.ampliar.px-5.fondo5.align-items-center(data-aos="fade-up")
      .col-xxl-12
        p.my-5 Como todos los procesos de mejora continua, este se basa en el ciclo PHVA - 
          span.text-bold planear, hacer, verificar, actuar
          span , el cual, básicamente consiste en:
      .col-xxl-6.col-xl-6.col-lg-6.col-md-8.col-sm-10.col-12

        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/imagen14.png')

          .tarjeta.sombratarjeta.fondotarjeta.p-3(x="27.5%" y="16%" numero="+")
            h4 1. Planear
            p Identificar oportunidades de mejora y planear cómo llevarlas a cabo. 

          .tarjeta.sombratarjeta.fondotarjeta.p-3(x="79%" y="22%" numero="+")
            h4 2. Hacer
            p Llevar a cabo las actividades de mejora planeadas en la etapa anterior.  

          .tarjeta.sombratarjeta.fondotarjeta.p-3(x="21%" y="67%" numero="+")
            h4 3. Verificar
            p Evaluar los impactos de las actividades de mejora implementadas. 

          .tarjeta.sombratarjeta.fondotarjeta.p-3(x="75%" y="72%" numero="+")
            h4 4. Actuar
            p Tomar medidas que permitan mejorar continuamente los procesos. 

        
    .row.justify-content-center.my-5(data-aos="fade-down")
      .col-xxl-7.col-xl-7.col-lg-7.col-md-12.col-sm-12.col-12
        p Para que la mejora continua se convierta en una realidad dentro de la unidad productiva, es necesario y fundamental:
        ul.lista-ul
          li 
            i.fas.fa-angle-right
            | Fortalecer el componente de auditoría interna.
          li 
            i.fas.fa-angle-right
            | Mantener el rigor de los procesos y procedimientos que se llevan a cabo para la ejecución de las actividades operativas.
          li 
            i.fas.fa-angle-right
            | Capacitar al personal en aspectos relacionados con la certificación obtenida.
          li 
            i.fas.fa-angle-right
            | Favorecer la recordación del resultado de la certificación y de los compromisos adquiridos con ella.
          li 
            i.fas.fa-angle-right
            | Desde el quehacer diario de cada rol, contribuir al mantenimiento de la calidad y a la identificación de oportunidades de mejora al interior de la empresa.     
      .col-xxl-5.col-xl-5.col-lg-5.col-md-12.col-sm-12.col-12
        img(src='@/assets/curso/tema1/imagen15.jpg')


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
