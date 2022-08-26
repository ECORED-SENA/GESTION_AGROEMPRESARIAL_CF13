<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span.text-white 2
      h1 Entidades certificadoras
    .bloque-texto-g.fondo6.p-3.p-sm-4.p-md-5(data-aos="fade-down-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/imagen1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p El auge de los procesos de certificación ha influido en la proliferación de entidades que se dedican a prestar este tipo de servicios en el mundo entero y a través de las cuales miles de empresas han conseguido adoptar estándares internacionales para el desarrollo de sus procesos productivos, con lo cual han logrado incursionar en mercados de diversas latitudes y acceder a los beneficios que ofrecen las economías más exigentes que existen en la actualidad.
    p.my-5(data-aos="fade-down-left") Para que una empresa adquiera la distinción de entidad certificadora requiere:
    .row.justify-content-center(data-aos="fade-down-right")
      .col-xxl-8.col-xl-8.col-lg-8.col-md-12.col-sm-12.col-12.mb-4
        AcordionA(tipo="b" clase-tarjeta="tarjeta fondo3")
          .row.align-items-center(titulo="Cumplimiento")
            .col-2.col-sm-2.col-lg-1.col-md-1.mb-4.mb-md-0
              img(src='@/assets/curso/tema2/acordeon1.svg')
            .col-md-10.col-sm-10.col-10.mb-4.mb-md-0.mb-lg-0
              p.mb-0 Cumplimiento de una serie de requisitos altamente exigentes.
          .row.align-items-center(titulo="Evaluación")
            .col-2.col-sm-2.col-lg-1.col-md-1.mb-4.mb-md-0
              img(src='@/assets/curso/tema2/acordeon2.svg')
            .col-md-10.col-sm-10.col-10.mb-4.mb-md-0
              p.mb-0 Ser evaluada, en el cumplimiento de tales requisitos, por una autoridad superior que recibe el nombre de organismo acreditador.
          .row.align-items-center(titulo="Aplicación de las normas")
            .col-2.col-sm-2.col-lg-1.col-md-1.mb-4.mb-md-0
              img(src='@/assets/curso/tema2/acordeon3.svg')
            .col-md-10.col-sm-10.col-10.mb-4.mb-md-0
              p.mb-0 Asumir y aplicar las normas técnicas (base de la certificación) establecidas por los organismos normalizadores.
          .row.align-items-center(titulo="Organismos normalizadores y acreditadores")
            .col-2.col-sm-2.col-lg-1.col-md-1.mb-4.mb-md-0
              img(src='@/assets/curso/tema2/acordeon4.svg')
            .col-md-10.col-sm-10.col-10.mb-4.mb-md-0
              p.mb-0 Los organismos normalizadores son distintos de los organismos acreditadores, pues los primeros avalan el funcionamiento idóneo de los segundos.
          .row.align-items-center(titulo="Función binaria de los organismos")
            .col-2.col-sm-2.col-lg-1.col-md-1.mb-4.mb-md-0
              img(src='@/assets/curso/tema2/acordeon5.svg')
            .col-md-10.col-sm-10.col-10.mb-4.mb-md-0
              p.mb-0 Incluso, existen casos en los que algunas entidades normalizadoras también pueden ser entidades certificadoras.
      .col-xxl-4.col-xl-4.col-lg-4.col-md-12.col-sm-12.col-12.mb-4
        img(src='@/assets/curso/tema2/imagen2.jpg')
    p.mb-5(data-aos="fade-down-right") Se invita a reafirmar la comprensión de la estructura de acción de las organizaciones acreditadoras, normalizadoras y su relación con las entidades candidatas en proceso de certificación, analizando el esquema que se muestra a continuación:
    .titulo-sexto.color-acento-botones(data-aos="fade")
      h5 Figura 2. 
      span Esquema del proceso de normalización/acreditación/certificación
    .row.justify-content-center(data-aos="fade-down-left")
      .col-xxl-7.col-xl-7.col-lg-7.col-md-12.col-sm-12.col-12.mb-4
        img(src='@/assets/curso/tema2/figura1.svg')
        p.fondo7.p-3.mb-0.my-3 Nota. Tomada de Miranda (s. f.).
      .col-xxl-5.col-xl-5.col-lg-5.col-md-12.col-sm-12.col-12.mb-4
        img(src='@/assets/curso/tema2/figura2.svg')
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.1 Tipos de entidades certificadoras
    p.mb-5(data-aos="fade-down-right") En primer lugar, vale la pena recordar que el ONAC (Organismo Nacional de Acreditación) es el encargado de acreditar a las entidades certificadoras en Colombia, por lo que sus alcances, actuaciones y procedimientos están debidamente sustentados ante la autoridad competente.
    .row.justify-content-center(data-aos="fade-down-left")
      .col-xxl-5.col-xl-5.col-lg-5.col-md-12.col-sm-12.col-12.mb-4
        .cajon.color-acento-contenido.p-4.mb-4.fondo8
          p Las entidades certificadoras se pueden clasificar de acuerdo con el tipo de certificación que emiten, la naturaleza de la certificación o el ámbito de aplicación. Sin embargo, para analizar lo relacionado con las certificaciones que se dan en el ámbito agropecuario se diferencian dos grandes grupos: primero, las que implementan las normas ISO (Internacional Organization for Standardization) y, en segundo lugar, las que implementan certificaciones netamente del ámbito agropecuario.
      .col-xxl-7.col-xl-7.col-lg-7.col-md-12.col-sm-12.col-12.mb-4
        img(src='@/assets/curso/tema2/imagen3.jpg')
    .row.justify-content-center.ampliar.px-5.fondo9.align-items-center
      .col-xxl-12
        p.mb-5(data-aos="fade-up-left") En el grupo de entidades correspondiente a las certificaciones netamente del ámbito agropecuario, el Ministerio de Agricultura y Desarrollo Rural ha reconocido como entidades certificadoras para la producción ecológica (Resolución 0187/2006) y autorizadas para administrar el uso del Sello de Alimento Ecológico del Ministerio de Agricultura y Desarrollo Rural, a las siguientes entidades:
        .row.justify-content-center(data-aos="fade-up-right")
          .col-xxl-10.col-xl-10.col-lg-10.col-md-12
            .titulo-sexto.color-acento-contenido
              h5 Tabla 1. 
              span Principales entidades certificadoras en el ámbito agropecuario en Colombia
            .tabla-b.color-acento-contenido.mb-5
              table
                caption Nota. Tomada del Ministerio de Agricultura y Desarrollo Rural (2022).
                tr.fondo13.text-white
                  th.mb-0.anchocol.bordetabla.text-center Organismo de certificación
                  th.mb-0.anchocol.bordetabla.text-center Acreditación ONAC (código)
                  th.mb-0.anchocol.sinborde.text-center Autorización de la autoridad competente
                tr
                  td.anchocol.bordetabla.text-center <i>Bcs Öko Garantie</i> Colombia S.A.S
                  td.anchocol.bordetabla.text-center 13-CPR-002
                  td.anchocol.text-center Resolución del Ministerio de Agricultura y Desarrollo Rural 438 de 2018.
                tr.fondo10
                  td.anchocol.bordetabla.text-center Certificadora Biotrópico S.A.S.
                  td.anchocol.bordetabla.text-center 12-CPR-002
                  td.anchocol.text-center Resolución del Ministerio de Agricultura y Desarrollo Rural 442 de 2018.
                tr
                  td.anchocol.bordetabla.text-center <i>Ceres Certification of Environmental Standards</i> Colombia S.A.S.
                  td.anchocol.bordetabla.text-center 14-CPR-001
                  td.anchocol.text-center Resolución del Ministerio de Agricultura y Desarrollo Rural 441 de 2018.
                tr.fondo10
                  td.anchocol.bordetabla.text-center Control Unión Perú Sucursal Colombia
                  td.anchocol.bordetabla.text-center 15-CPR-005
                  td.anchocol.text-center Resolución del Ministerio de Agricultura y Desarrollo Rural 440 de 2018.
                tr
                  td.anchocol.bordetabla.text-center Ecocert Colombia Ltda.
                  td.anchocol.bordetabla.text-center 10-CPR-006
                  td.anchocol.text-center Resolución del Ministerio de Agricultura y Desarrollo Rural 439 de 2018.
                tr.fondo10
                  td.anchocol.bordetabla.text-center Mayacert S.A.S
                  td.anchocol.bordetabla.text-center 18-CPR-001
                  td.anchocol.text-center Resolución del Ministerio de Agricultura y Desarrollo Rural 23 de 2019.
        .row.justify-content-center(data-aos="fade-up-left")
          .col-xxl-5.col-xl-5.col-lg-5.col-md-12.col-sm-12.col-12.mb-4
            h4.text-bold.fondo11.py-4.mb-0.text-white.pe-5.ps-3 Certificaciones públicas en Colombia
            p Además de las certificadoras anteriormente analizadas, en Colombia existen otro tipo de certificaciones que son de carácter público las cuales están a cargo del Instituto Colombiano Agropecuario como entidad certificadora. Dentro de estas las más reconocidas son la certificación en BPA (Buenas Prácticas Agrícolas), BPG (Buenas Prácticas Ganaderas), Buenas Prácticas Acuícolas y Granjas Avícolas Bioseguras. 
          .col-xxl-7.col-xl-7.col-lg-7.col-md-12.col-sm-12.col-12.mb-4
            img(src='@/assets/curso/tema2/imagen4.jpg')

        separador
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade")
          h2 2.2	Competencia y rango de acción
        p(data-aos="fade-up-left") Cada una de las entidades certificadoras tiene un alcance diferente, dependiendo de su naturaleza y del renglón de la economía en el cual se desempeñe. Así las cosas, existen entidades certificadoras especializadas en procesos primarios, en procesos de transformación, en manufactura, en estándares ISO, en la producción ecológica o en la producción orgánica.
        p.mb-5(data-aos="fade-up-right") En la siguiente tabla se presentan algunos organismos de certificación existentes y los alcances de la acreditación que ofrecen:
        .row.justify-content-center
          .col-xxl-10.col-xl-10.col-lg-10.col-md-12
            .titulo-sexto.color-acento-contenido
              h5 Tabla 2. 
              span Alcance de las empresas certificadoras en Colombia
            .tabla-b.color-acento-contenido.mb-5(data-aos="fade")
              table
                caption Nota. Adaptada del Ministerio de Agricultura y Desarrollo Rural (2022).
                tr
                  th.mb-0.anchocol1.bordetabla.fondo12.text-center Organismo de certificación
                  th.mb-0.bordetabla.anchocol1.fondo12.text-center Categorías de productos (alcance de la acreditación)
                tr.bordeabajo
                  td.anchocol.bordetabla.text-center  Instituto Colombiano de Normas Técnicas - Icontec.
                  <th rowspan="4">
                    p ISO 9001. Sistema de gestión de calidad.
                    p ISO 45001. Seguridad y salud laboral. 
                    p ISO 50001. Eficiencia energética. 
                    p ISO 14001. Sistemas de gestión medioambiental. 
                    p ISO 22000. Norma de seguridad alimentaria. 
                    p ISO 27001. Gestión para la seguridad de la información. 
                    p FSSC 22000. Requisito para ISO 22000 y otras regulaciones.
                  </th>
                tr.bordeabajo
                  td.anchocol.bordetabla.text-center  Grupo <i>Bureau Veritas Quality Internacional</i> (BVQI).
                tr.bordeabajo
                  td.anchocol.bordetabla.text-center  <i>Societé Genérale de Surveillance</i> (SGS).
                tr.bordeabajo
                  td.anchocol.bordetabla.text-center  <i>Lloyd’s Register</i>.
                tr.bordeabajo
                  td.anchocol.bordetabla.text-center Instituto Colombiano Agropecuario ICA.
                  td.anchocol Producción primaria agrícola y pecuaria.
                tr.bordeabajo
                  td.anchocol.bordetabla.text-center <i>Bcs Öko Garantie</i> Colombia S.A.S.
                  td.anchocol
                    p Productos agrícolas no transformados.
                    p Productos pecuarios no transformados. 
                    p Productos procesados destinados a la alimentación humana.
                tr.bordeabajo
                  td.anchocol.bordetabla.text-center Certificadora Biotrópico S.A.S.
                  td.anchocol
                    p Productos agrícolas.
                    p Productos agrícolas procesados.
                tr.bordeabajo
                  td.anchocol.bordetabla.text-center <i>Ceres Certification Of Environmental Standards Colombia S.A.S.</i>
                  td.anchocol
                    p Productos primarios agrícolas ecológicos.
                    p Productos primarios pecuarios ecológicos.
                    p Productos procesados destinados a la alimentación humana.
                tr.bordeabajo
                  td.anchocol.bordetabla.text-center Control Unión Perú Sucursal Colombia.
                  td.anchocol
                    p Productos agrícolas vegetales no transformados.
                    p Productos procesados destinados a la alimentación humana.                  
                tr.bordeabajo
                  td.anchocol.bordetabla.text-center Ecocert Colombia Ltda.
                  td.anchocol
                    p Productos primarios agrícolas ecológicos.
                    p Productos primarios pecuarios ecológicos.
                    p Productos procesados agrícolas ecológicos.
                    p Productos procesados pecuarios ecológicos.
                tr.bordeabajo
                  td.anchocol.bordetabla.text-center Mayacert S.A.S.
                  td.anchocol
                    p Productos primarios agrícolas ecológicos.
                    p Productos procesados agrícolas ecológicos.
                tr.bordeabajo
                  td.anchocol.bordetabla.text-center Natura Cert
                  td.anchocol Global G.A.P.
                tr
                  td.anchocol.bordetabla.text-center Instituto Colombiano de Normas Técnicas.
                  td.anchocol Global G.A.P.
</template>

<script>
export default {
  name: 'Tema2',
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
