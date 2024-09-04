<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Portafolio de productos y servicios

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-5.col-md-4.col-12(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema5/img_1.png', alt='')
      .col-lg-7.col-md-8.col-12(data-aos="fade-right")
        p El portafolio de productos y servicios es una colección organizada de todos los productos y servicios que una empresa ofrece al mercado. Este portafolio incluye tanto los productos actuales como los nuevos desarrollos, y abarca todas las categorías y líneas de productos. Un portafolio bien gestionado permite a las empresas equilibrar su oferta, optimizar recursos y maximizar las oportunidades de crecimiento y rentabilidad.
        p La importancia de este portafolio radica en 3 pilares:
        ul.lista-ul--color
          li 
            i.fas.fas.fa-user-cog
            | #[b Diversificación del riesgo:] un portafolio diversificado ayuda a mitigar el riesgo, ya que el desempeño de la empresa no depende de un solo producto o línea de productos.
          li 
            i.fas.fas.fa-user-cog
            | #[b Alineación estratégica:] permite a la empresa alinear sus productos y servicios con su estrategia corporativa, asegurando que cada oferta contribuye a los objetivos a largo plazo.
          li 
            i.fas.fas.fa-user-cog
            | #[b Respuesta al mercado:] facilita una respuesta rápida y eficaz a las demandas y tendencias del mercado, permitiendo la adaptación de la oferta según las necesidades de los clientes.

    .row.mb-4.justify-content-center.align-items-center
      .col-md-10.col-12(data-aos="fade-right")
        .cajon.color-secundario.p-4.mb-3.mt-3
          p.mb-0 La correcta gestión del portafolio de productos y servicios es una pieza clave en la estrategia comercial de cualquier empresa. Un portafolio bien definido y equilibrado puede significar la diferencia entre el éxito y el fracaso en un mercado competitivo. A continuación, se detallan las razones por las cuales la gestión del portafolio es crucial para la estrategia comercial.



</template>

<script>
export default {
  name: 'Tema5',
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
