<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") En un entorno empresarial altamente competitivo, la capacidad de identificar y analizar al cliente ideal es fundamental para el éxito de cualquier organización. Este componente formativo se centra en la construcción detallada de #[em buyer personas], una herramienta que permite a las empresas alinear sus estrategias comerciales con las expectativas y necesidades de sus clientes más valiosos. A través de la utilización de técnicas de segmentación de mercado y herramientas avanzadas de análisis, las organizaciones pueden personalizar sus ofertas y desarrollar estrategias de fidelización efectivas. Además, se aborda la importancia de la recopilación de información del cliente y el cumplimiento de regulaciones sobre protección de datos personales, asegurando así un enfoque ético y legal en el manejo de la información. Esta síntesis explora estos aspectos críticos, proporcionando un marco integral para optimizar las estrategias comerciales y mejorar la experiencia del cliente.

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente formativo de identificación y análisis del cliente ideal se presentan las ventajas de conocer a los clientes potenciales y sus reales usos en las estrategias comerciales. Se trabaja el cliente como cliente ideal, las herramientas para identificarlo y los portafolios de servicio que sirven a ese cliente ideal, también se presenta ejemplos y relaciones con los servicios y productos del sector financiero.")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
