<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Identificación del cliente ideal

    p.mb-4(data-aos="fade-right") En el entorno competitivo y dinámico del mercado actual, la identificación del cliente ideal es una estrategia crucial para el éxito de cualquier empresa. Conocer a fondo quiénes son los clientes más valiosos permite a las empresas no solo atraer y retener a esos clientes, sino también optimizar sus recursos y maximizar sus beneficios. La identificación del cliente ideal implica un análisis detallado y sistemático de las características, comportamientos y necesidades de los clientes actuales y potenciales, permitiendo así diseñar estrategias comerciales personalizadas y efectivas.
    
    .row.mb-4.fondo-1.p-4.justify-content-center.align-items-center
      .col-lg-6.col-md-8.col-12(data-aos="fade-right")
        p.mb-2 El concepto de cliente ideal, también conocido como Buyer Persona, es una representación detallada y semi-ficticia del cliente que mejor se ajusta a los productos o servicios ofrecidos por una empresa. Este perfil se construye a partir de datos demográficos, psicográficos y comportamentales recopilados a través de diversas fuentes como encuestas, entrevistas y análisis de comportamiento en línea. Según Revella (2020), la creación de Buyer Personas permite a las empresas alinear sus estrategias de marketing y ventas con las expectativas y necesidades reales de los clientes, facilitando así una conexión más efectiva y personalizada con su audiencia objetivo.
        p.mb-2 La relevancia de identificar al cliente ideal se ve reflejada en varios aspectos críticos del negocio, como el desarrollo de productos, la creación de contenido, la planificación de campañas de #[em marketing] y la mejora del servicio al cliente. Un estudio de la #[em Harvard Business Review] (2020) destaca que las empresas que implementan estrategias basadas en un profundo conocimiento de sus clientes pueden aumentar significativamente su retención y satisfacción, lo cual se traduce en un incremento en las ventas y la lealtad a la marca.
      .col-lg-4.col-md-4.col-12(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img_1.png', alt='')

    Separador
    #t_1_1.titulo-segundo.color-primario(data-aos="fade-right")
      h2 1.1 Definición del perfil de cliente

    .row.align-items-center.justify-content-center.mb-4
      .col-md-5(data-aos="fade-left") 
        img.mt-3(src='@/assets/curso/temas/tema1/img_2.png').mb-3
      .col-md-7(data-aos="fade-right") 
        p El perfil de cliente ideal, también conocido como Buyer Persona, es una representación semi-ficticia basada en datos y características reales de los clientes más valiosos para una empresa. Este perfil ayuda a las organizaciones a entender mejor las necesidades y comportamientos de sus clientes, permitiendo diseñar estrategias de marketing y ventas más efectivas.
        p.cajon.color-secundario.p-4 Existen varios tipos de perfiles de clientes, pero los más comunes son los clientes B2B (#[em Business to Business]) y B2C (#[em Business to Consumer]). Cada tipo de cliente tiene características y necesidades específicas que deben ser comprendidas y abordadas de manera diferente.
        p Para crear un perfil de cliente efectivo, es fundamental considerar varios factores:

    .row.align-items-center.justify-content-center.mb-4
      .col-md-6.col-lg.mb-3.mb-lg-0(data-aos="fade-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/ico-1A.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100
            .p-4
              h4.text-center Demográficos
              p Edad, género, nivel educativo, estado civil, entre otros.
      .col-md-6.col-lg.mb-3.mb-lg-0(data-aos="fade-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/ico-1B.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100
            .p-4
              h4.text-center Psicográficos
              p Intereses, valores, estilo de vida y personalidad.
      .col-md-6.col-lg.mb-3.mb-lg-0(data-aos="fade-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/ico-1C.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100
            .p-4
              h2.text-center Conductuales
              p Hábitos de compra, frecuencia de uso de productos o servicios, lealtad a la marca, entre otros.

    p.mb-2(data-aos="fade-down") Un estudio de la #[em Harvard Business Review] (2020) destaca la importancia de integrar datos tanto cualitativos como cuantitativos para una comprensión profunda del cliente.
    p.mb-4(data-aos="fade-down") Ejemplo: Una empresa de software educativo puede identificar a su cliente ideal como:


    .row.justify-content-center.align-items-center
      .col-12.col-md-10.d-none.d-sm-none.d-md-block(data-aos="zoom-in-down")
        ImagenInfografica.color-acento-botones.mb-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/info-1A.svg', alt='')
          .tarjeta.color-acento-contenido.p-3(x="12.5%" y="26%" numero="+")
            .h5.mb-2 Edad y género
            p 25-45 años
              | Género: Indiferente.
          .tarjeta.color-acento-contenido.p-3(x="70%" y="26%" numero="+")
            .h5.mb-2 Intereses
            p Innovación educativa, tecnologías de la información, enseñanza en línea.
          .tarjeta.color-acento-contenido.p-3(x="73%" y="57%" numero="+")
            .h5.mb-2 Conducta
            p Utiliza regularmente plataformas de e-learning, busca constantemente nuevas herramientas educativas, es activo en foros y comunidades educativas en línea.
          .tarjeta.color-acento-contenido.p-3(x="10%" y="57%" numero="+")
            .h5.mb-2 Nivel Educativo
            p Universitario.
      .col-12.d-block.d-md-none
        .row 
          .col-12.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/info-1B.svg', alt='')

    p.mb-4(data-aos="fade-down") Con esa información en esos niveles de detalle se va estableciendo un perfil de usuario que será requerido a la hora de hablar de clientes.

    Separador
    #t_1_2.titulo-segundo.color-primario(data-aos="fade-right")
      h2 1.2 Herramientas y técnicas para identificar clientes potenciales

    p.mb-4(data-aos="fade-down") Recolectar información de cada persona se vuelve un trabajo de gran esfuerzo sobre todo en la concepción, mantenimiento y análisis de los datos, es por eso que se recomienda usar herramientas para la identificación de los clientes potenciales y ganar terreno en el mercado de manera rápida y efectiva. Algunas de las herramientas más utilizadas para este tipo de trabajo son las siguientes: 

    div.mb-4
      b.fondo-2.px-3.py-1(data-aos="zoom-in-down") #[span ●] Para el análisis de mercado

    p.mb-4(data-aos="zoom-in-down") El análisis de mercado es una herramienta fundamental para identificar clientes potenciales. Este análisis incluye la evaluación de la competencia, la identificación de oportunidades de mercado y la comprensión de las tendencias del sector. Algunas de las herramientas que se pueden usar en este apartado son:

    p ##################
    p ##################

    p.mb-2(data-aos="fade-down") Google Trends es una herramienta integral de marketing digital que ofrece funciones avanzadas para realizar análisis de mercado. Esta plataforma permite a las empresas obtener una visión detallada de su industria, analizar a la competencia, identificar oportunidades de crecimiento y evaluar tendencias del mercado.
    p.mb-4(data-aos="fade-down") El paso a paso para usar Google Trends para análisis de mercado es el siguiente y se define a partir de un correo electrónico propio:

    .tarjeta--container.row.mb-5(data-aos="fade-down")
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/ico-2A.svg', alt='')
        h4.text-center 1.	Investigación de palabras clave
        p Utiliza Google Trends para identificar las palabras clave más relevantes en tu industria. Esto ayudará a entender qué términos están buscando los clientes potenciales y cómo puedes optimizar tu contenido para atraerlos. La palabra clave es la palabra o el grupo de palabras con las que los usuarios hacen las búsquedas en línea.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/ico-2B.svg', alt='')
        h4.text-center 2.	Análisis de la competencia
        p Google Trends permite comparar un sitio web con los de los competidores. Puedes ver qué palabras clave están utilizando, cuáles son sus páginas más populares y cómo están generando tráfico.
      .col-md.tarjeta.tarjeta--azul.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/ico-2C.svg', alt='')
        h4.text-center 3.	Tendencias del sector
        p La herramienta proporciona informes sobre tendencias de búsqueda y comportamiento del usuario, lo que te permite anticipar cambios en el mercado y ajustar tu estrategia en consecuencia.


    p.mb-4(data-aos="fade-down") #[b Ejemplo práctico:] suponga que una empresa vende software de gestión de proyectos. Se usa Google Trends para investigar las palabras clave "software de gestión de proyectos", "herramientas de colaboración en equipo" y "software de productividad". Con la búsqueda se descubre que los competidores principales están generando mucho tráfico a través de blogs educativos y comparaciones de productos. En ese momento se toma la decisión de crear contenido similar y optimizarlo para las palabras clave identificadas, además de lanzar una campaña de consecución de prospectos dirigida a las mismas.

    .row.mb-4.fondo-1.p-4.justify-content-center.align-items-center
      .col-lg-10.col-12
        div.mb-4
          b.fondo-2.px-3.py-1(data-aos="zoom-in-down") #[span ●] Para el uso en la generación y gestión de encuestas y entrevistas
      .col-lg-6.col-md-8.col-12(data-aos="fade-right")
        p.mb-2 Las encuestas y entrevistas son métodos efectivos para recopilar información directa de los clientes. Estas herramientas permiten obtener #[em insights] detallados sobre las preferencias, necesidades y problemas de los clientes. Según Kotler y Keller (2019), las encuestas bien diseñadas pueden proporcionar datos valiosos que son difíciles de obtener por otros medios. Las siguientes son algunas herramientas de referencia con las que se pueden hacer estos ejercicios: 
        ul.lista-ul
          li 
            i.fas.fa-angle-right
            | #[b SurveyMonkey:] plataforma para crear encuestas en línea con una amplia variedad de plantillas y opciones de personalización.
          li 
            i.fas.fa-angle-right
            | #[b Google Forms:] herramienta gratuita para diseñar encuestas y recopilar respuestas de manera sencilla y efectiva.
          li 
            i.fas.fa-angle-right
            | #[b Typeform:] permite crear encuestas y formularios interactivos y atractivos, mejorando la tasa de respuesta.
      .col-lg-4.col-md-4.col-12(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img_3.png', alt='')

    p.mb-2 Google Forms es una herramienta gratuita de Google que permite crear encuestas personalizadas para recopilar información valiosa de los clientes. Las encuestas pueden ser distribuidas a través de múltiples canales, como correo electrónico, redes sociales y sitios web, y los resultados se recopilan y analizan en tiempo real.
    p.mb-4 El siguiente es un ejemplo práctico de cómo Utilizar Google Forms para la elaboración de encuestas y entrevistas:

    .row.mb-4.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-10.col-12
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Diseño de la encuesta
              p Utilizando Google Forms, se diseña una encuesta que recoge datos demográficos, preferencias de producto, hábitos de compra y #[em feedback] general.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img_4.png', alt='')
          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/img_5.png', alt='')
            .col-md-6.text-start
              h4 Distribución de la encuesta
              p La encuesta se envía a la base de datos de clientes actuales y potenciales mediante correo electrónico o se publica en redes sociales y el sitio web de la empresa.
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Análisis de resultados
              p Google Forms proporciona herramientas de análisis que permiten visualizar los resultados de la encuesta a través de gráficos y tablas, facilitando la identificación de patrones y tendencias.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img_6.png', alt='')
          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/img_7.png', alt='')
            .col-md-6.text-start
              h4 Aplicación de #[em insights]
              p Los #[em insights] obtenidos de las encuestas se utilizan para ajustar la estrategia de #[em marketing], mejorar los productos o servicios y personalizar las campañas de comunicación.

    p.mb-2(data-aos="fade-right") #[b Ejemplo práctico:] una empresa que vende productos de belleza naturales decide utilizar Google Forms para entender mejor las preferencias de sus clientes. Se diseña una encuesta con preguntas sobre sus productos favoritos, frecuencia de compra, preocupaciones sobre ingredientes y preferencias de envase. La encuesta se envía a los seguidores en Instagram y a los suscriptores del boletín de noticias.
    p.mb-4(data-aos="fade-right") De los resultados, se descubre que una gran mayoría de los clientes prefieren productos con envases sostenibles y están interesados en ingredientes orgánicos. Con esta información, la empresa decide lanzar una nueva línea de productos con envases ecológicos y aumentar la transparencia sobre los ingredientes utilizados, además de ajustar las campañas de marketing para resaltar estos aspectos.



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
