<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5(data-aos="fade-down") Aquí comienza el estudio del componente formativo 
      span.colortextocontenido.text-bold Implementación de procesos de certificación de sistemas agropecuarios
      span , se espera que cada aprendiz tenga una experiencia satisfactoria. Para iniciar se invita a observar con atención el video que se muestra enseguida.  
      span.colortextocontenido.text-bold ¡Adelante!    
    figure.mb-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/qF_CnA1mY0o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
