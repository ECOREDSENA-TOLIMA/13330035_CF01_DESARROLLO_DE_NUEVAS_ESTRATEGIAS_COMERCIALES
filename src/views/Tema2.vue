<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Recopilación de información del cliente

    p.mb-2(data-aos="fade-right") La recopilación de información del cliente es un proceso esencial que permite a las empresas conocer mejor a sus consumidores, sus preferencias, comportamientos y necesidades. Esta información es fundamental para diseñar estrategias de #[em marketing] y ventas efectivas, personalizar la oferta de productos y servicios, y mejorar la satisfacción y lealtad del cliente.
    p.mb-4(data-aos="fade-left") Los tipos de información relevante que se recomienda tener en cuenta y a su vez son recolectados de la investigación de mercados son:

    .row.mb-4.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-8.col-12
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Información demográfica")
            .col-12.mb-4.mb-md-0
              p Incluye datos cuantificables como la edad, género, nivel educativo, ocupación, estado civil y tamaño del hogar.
              p #[b ●	Importancia:] ayuda a segmentar el mercado y entender las características básicas de los clientes.
              p #[b ●	Ejemplo:] una empresa de productos para bebés puede recopilar información sobre la edad y el estado civil de sus clientes para identificar a padres primerizos.
          .row(titulo="Información psicográfica")
            .col-12.mb-4.mb-md-0
              p Incluye datos sobre los intereses, valores, estilos de vida, actitudes y personalidad de los clientes.
              p #[b ●	Importancia:] permite una segmentación más profunda y la creación de perfiles de cliente más detallados.
              p #[b ●	Ejemplo:] una marca de ropa deportiva puede recopilar información sobre los intereses en actividades al aire libre y la salud para diseñar campañas de #[em marketing] dirigidas a entusiastas del #[em fitness].
          .row(titulo="Información conductual")
            .col-12.mb-4.mb-md-0
              p Incluye datos sobre los hábitos de compra, frecuencia de uso de productos o servicios, lealtad a la marca y respuesta a las campañas de #[em marketing].
              p #[b ●	Importancia:] facilita la identificación de patrones de comportamiento y la personalización de ofertas.
              p #[b ●	Ejemplo:] una tienda en línea puede analizar el historial de compras de sus clientes para ofrecer recomendaciones personalizadas y promociones especiales. 
      .col-lg-4.col-8.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/tema2/img_1.png', alt='')

    p.mb-4(data-aos="fade-left") Hacer la recolección de esos datos de manera ejecutiva y eficiente requiere una planeación estratégica que se hace por medio de algunos métodos, los métodos más representativos son los siguientes: 

    TabsB.color-acento-botones.mb-5(data-aos="fade-left")
      .py-4.py-md-5(titulo="Encuestas y entrevistas" :icono="require('@/assets/curso/temas/tema2/ico_1A.svg')")
        .row.px-2
          .col-lg-5.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema2/img_2.png', alt='')
          .col-lg-7
            h4 Encuestas y entrevistas
            p Las encuestas y entrevistas son herramientas directas para obtener información de los clientes sobre sus preferencias, necesidades y experiencias.
            p #[b ●	Ejemplo:] una empresa de servicios financieros puede utilizar Google Forms para crear una encuesta que pregunte a los clientes sobre su satisfacción con los productos actuales y sus necesidades financieras futuras.
            p #[b ●	Ventajas:] permiten recopilar datos cualitativos y cuantitativos detallados directamente de los clientes.
            p #[b ●	Desventajas:] pueden tener tasas de respuesta bajas si no se diseñan y distribuyen correctamente.
      .py-4.py-md-5(titulo="Análisis de comportamiento en línea" :icono="require('@/assets/curso/temas/tema2/ico_1B.svg')")
        .row.px-2
          .col-lg-5.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema2/img_3.png', alt='')
          .col-lg-7
            h4 Análisis de comportamiento en línea
            p Involucra el seguimiento y análisis del comportamiento de los clientes en plataformas digitales, como sitios web, aplicaciones móviles y redes sociales.
            p #[b ●	Ejemplo:] utilizar herramientas como Google Analytics para monitorizar el tráfico web, identificar las páginas más visitadas y analizar el tiempo de permanencia en cada sección.
            p #[b ●	Ventajas:] proporciona datos en tiempo real y permite identificar patrones de comportamiento y tendencias.
            p #[b ●	Desventajas:] requiere herramientas y conocimientos técnicos para analizar y interpretar los datos de manera efectiva.
      .py-4.py-md-5(titulo="Uso de CRM" :icono="require('@/assets/curso/temas/tema2/ico_1C.svg')")
        .row.px-2
          .col-lg-5.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema2/img_4.png', alt='')
          .col-lg-7.mb-4
            h4 Uso de CRM (#[em Customer Relationship Management])
            p los sistemas CRM ayudan a gestionar las interacciones con los clientes, almacenar información detallada y analizar datos para mejorar las relaciones comerciales.
            p #[b ●	Ejemplo:] una empresa de telecomunicaciones puede utilizar un CRM para registrar todas las interacciones con los clientes, desde llamadas de servicio hasta ventas, y utilizar esta información para mejorar su atención al cliente y ofrecer productos personalizados.
            p #[b ●	Ventajas:] centraliza la información del cliente y facilita su acceso y análisis por parte de diferentes departamentos de la empresa.
            p #[b ●	Desventajas:] la implementación y mantenimiento de un sistema CRM puede ser costosa y requiere formación para su uso efectivo. 

    p.mb-4(data-aos="fade-right") La recopilación de información del cliente es una práctica esencial para cualquier empresa que busque entender mejor a sus consumidores y diseñar estrategias comerciales más efectivas. Mediante el uso de diversas técnicas y herramientas, las empresas pueden obtener #[em insights] valiosos que les permitan personalizar sus ofertas, mejorar la satisfacción del cliente y aumentar su competitividad en el mercado.


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
