<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Importancia de la información en la estrategia comercial

    .row.mb-4.justify-content-center.align-items-center(data-aos="fade-right")
      .col-12 
        figure
          img(src='@/assets/curso/temas/tema3/img_1.png', alt='')

    p.mb-4(data-aos="fade-left") En el entorno empresarial actual, la información se ha convertido en uno de los activos más valiosos para cualquier organización. La capacidad de recopilar, analizar y utilizar datos sobre los clientes y el mercado puede marcar la diferencia entre el éxito y el fracaso de una empresa. La información precisa y detallada permite a las empresas tomar decisiones más informadas, personalizar sus ofertas y desarrollar estrategias comerciales que realmente resuenen con sus clientes. Este enfoque basado en datos no solo mejora la eficiencia operativa y la competitividad, sino que también aumenta la satisfacción y lealtad del cliente al ofrecer experiencias más relevantes y personalizadas. La integración de la información en la estrategia comercial es, por tanto, esencial para impulsar el crecimiento sostenible y mantener una ventaja competitiva en el mercado.

    Separador
    #t_3_1.titulo-segundo.color-primario(data-aos="fade-right")
      h2 3.1 Análisis de datos para la toma de decisiones

    p.mb-4(data-aos="fade-left") El análisis de datos implica procesar y examinar grandes volúmenes de información para identificar patrones, tendencias y relaciones que pueden guiar la toma de decisiones empresariales. Este proceso permite convertir datos brutos en #[em insights] valiosos y accionables.

    .row.mb-4.p-4.justify-content-center.align-items-center
      .col-lg-10.col-12
      .col-lg-7.col-md-8.col-12(data-aos="fade-right")
        div.mb-4
          b.fondo-2.px-3.py-1(data-aos="zoom-in-down") #[span ●] Importancia
        ul.lista-ul
          li 
            i.fas.fa-angle-right
            | #[b Identificación de oportunidades:] permite descubrir nuevas oportunidades de mercado, como segmentos de clientes desatendidos o tendencias emergentes.
          li 
            i.fas.fa-angle-right
            | #[b Optimización de recursos:] ayuda a asignar los recursos de manera más eficiente, dirigiéndolos hacia áreas con mayor potencial de retorno.
          li 
            i.fas.fa-angle-right
            | #[b Mejora de la competitividad:] proporciona una ventaja competitiva al permitir decisiones informadas y basadas en datos, en lugar de suposiciones o intuiciones.
        .cajon.color-primario.p-4
          p #[b Ejemplo práctico:] Una empresa minorista puede analizar los datos de ventas para identificar productos de alta demanda en diferentes épocas del año. Utilizando estos #[em insights], la empresa puede ajustar sus inventarios y campañas de #[em marketing] estacional para maximizar las ventas durante los períodos pico.
      .col-lg-5.col-md-4.col-12(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/img_2.png', alt='')

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
