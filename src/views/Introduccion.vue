<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4(data-aos="fade-down") En el entorno competitivo y dinámico del mercado actual, la identificación del cliente ideal es una estrategia crucial para el éxito de cualquier empresa. Conocer a fondo quiénes son los clientes más valiosos permite a las empresas no solo atraer y retener a esos clientes sino también optimizar sus recursos y maximizar sus beneficios. La identificación del cliente ideal implica un análisis detallado y sistemático de las características, comportamientos y necesidades de los clientes actuales y potenciales, permitiendo así diseñar estrategias comerciales personalizadas y efectivas.


    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
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
