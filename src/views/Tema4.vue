<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Regulaciones y normativas sobre la información del cliente

    .row.mb-4.justify-content-center.align-items-center(data-aos="fade-right")
      .col-12 
        figure
          img(src='@/assets/curso/temas/tema4/img_1.png', alt='')
    
    p.mb-4(data-aos="fade-left") En el mundo digital actual, donde la recopilación y el uso de datos personales son fundamentales para muchas estrategias comerciales, es esencial que las empresas cumplan con las regulaciones y normativas vigentes sobre la protección de la información del cliente. Estas leyes, como el Reglamento General de Protección de Datos (GDPR) en la Unión Europea y la Ley de Privacidad del Consumidor de California (CCPA) en los Estados Unidos, están diseñadas para salvaguardar la privacidad de los individuos y establecer directrices claras sobre cómo debe manejarse la información personal. Cumplir con estas regulaciones no solo ayuda a las empresas a evitar sanciones legales y proteger su reputación, sino que también refuerza la confianza del cliente al demostrar un compromiso con la transparencia y la seguridad en el manejo de sus datos.
    
    Separador
    #t_4_1.titulo-segundo.color-primario(data-aos="fade-right")
      h2 4.1 Protección de datos personales

    .row.mb-4.fondo-1.p-4.justify-content-center.align-items-center
      .col-12(data-aos="fade-right")
        p La protección de datos personales se refiere a las medidas legales y técnicas que garantizan la privacidad y seguridad de la información personal recopilada por las empresas. Estas medidas están diseñadas para evitar el uso indebido, la divulgación no autorizada y el acceso no permitido a los datos personales. En Colombia, la protección de datos personales está regulada por la Ley 1581 de 2012, también conocida como la Ley de Protección de Datos Personales. Esta normativa establece un marco legal para la recolección, almacenamiento, uso, circulación y eliminación de datos personales, garantizando los derechos de privacidad y control de los ciudadanos sobre su información personal. La ley define principios fundamentales como la legalidad, finalidad, libertad, veracidad, transparencia, acceso y circulación restringida, seguridad y confidencialidad, que deben ser respetados por todas las entidades que manejen datos personales. La Superintendencia de Industria y Comercio (SIC) es la autoridad encargada de velar por el cumplimiento de esta ley y de imponer sanciones en caso de infracciones. La ley también otorga a los individuos derechos específicos, como el acceso, actualización, rectificación y eliminación de sus datos personales, asegurando así una protección integral y efectiva de la información personal en el país. 

    .tarjeta.color-acento-contenido.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema4/compliant.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Ley 1582 de 2012
              p Se recomienda revisar la Ley 1582 de 2012.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981" target="_blank")
                span Enlace web
                i.fas.fa-file-code

    p.mb-4(data-aos="fade-left") Algunas reglamentaciones internacionales a tener en cuenta también para campañas de recolección de datos son las siguientes:

    .tarjeta--container.row.mb-5(data-aos="fade-down")
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema4/ico_2A.svg', alt='')
        h4.text-center Reglamento General de Protección de Datos (GDPR)
        p Una regulación de la Unión Europea que establece estándares estrictos para la protección de datos personales. Requiere el consentimiento explícito de los individuos para el procesamiento de sus datos y otorga a los ciudadanos varios derechos sobre sus datos, como el derecho al acceso, rectificación y eliminación.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema4/ico_2B.svg', alt='')
        h4.text-center Ley de Privacidad del Consumidor de California (CCPA)
        p Una regulación en los Estados Unidos que proporciona a los residentes de California derechos sobre sus datos personales, incluyendo el derecho a saber qué información se recopila, el derecho a solicitar la eliminación de datos y el derecho a optar por no vender sus datos.
      
    p.mb-4(data-aos="fade-left") Es de vital importancia el cumplimiento de esta normativa ya que su desconocimiento no exime de su cumplimiento y las leyes son claras en decir que cada persona es dueña de su información hasta que exprese lo contrario, ese cumplimiento exhaustivo tiene ventajas interesantes y detalles a tener en cuenta, los siguientes son los más representativos:

    .row.mb-4.fondo-1.p-4.justify-content-center.align-items-center
      .col-lg-10.col-12(data-aos="fade-right")
        ul.lista-ul--color
          li 
            i.fas.fa-user-cog
            | #[b Cumplimiento legal:] evitar sanciones y multas significativas impuestas por el incumplimiento de las regulaciones de protección de datos.
          li 
            i.fas.fa-user-cog
            | #[b Confianza del cliente:] aumentar la confianza del cliente al demostrar un compromiso con la privacidad y seguridad de sus datos.
          li 
            i.fas.fa-user-cog
            | #[b Reputación de la empresa:] mantener una buena reputación y evitar daños a la imagen de la empresa asociados con violaciones de datos y uso indebido de información personal.

    Separador
    #t_4_2.titulo-segundo.color-primario(data-aos="fade-right")
      h2 4.2 Consentimiento y transparencia en la recopilación de datos

    p.mb-2(data-aos="fade-left") El consentimiento y la transparencia son principios clave en la recopilación de datos personales. Las empresas deben informar claramente a los individuos sobre qué datos se están recopilando, cómo se utilizarán y con quién se compartirán. Además, deben obtener el consentimiento explícito de los individuos antes de recopilar sus datos.
    p.mb-4(data-aos="fade-left") Las siguientes son las prácticas recomendadas para el buen uso y aplicación de este importante detalle:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema4/img_4.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Políticas de privacidad claras
            p.mb-0 Redactar y publicar políticas de privacidad comprensibles que expliquen detalladamente las prácticas de recopilación y uso de datos.
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema4/img_5.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Consentimiento explícito
            p.mb-0 Utilizar formularios de consentimiento claros y específicos que permitan a los individuos aceptar o rechazar la recopilación de sus datos.
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema4/img_6.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Transparencia en el uso de datos
            p.mb-0 Informar a los clientes sobre cualquier cambio en las políticas de privacidad o el uso de sus datos, y proporcionar opciones para revisar y actualizar su consentimiento.

    .row.mb-4.p-4.justify-content-center.align-items-center
      .col-lg-10.col-12(data-aos="fade-right")
        p.cajon.color-secundario.p-4 #[b Ejemplo práctico:] una tienda en línea puede implementar un banner de #[cookies] que informe a los visitantes sobre el uso de #[cookies] en el sitio web, proporcionando opciones para aceptar todas las #[cookies], personalizar la configuración de #[cookies] o rechazar las #[cookies] no esenciales.

    Separador
    #t_4_3.titulo-segundo.color-primario(data-aos="fade-right")
      h2 4.3 Responsabilidades legales de las empresas en el manejo de información

    p.mb-2(data-aos="fade-left") Las empresas tienen la responsabilidad legal de proteger los datos personales que recopilan y manejan. Esto incluye implementar medidas de seguridad adecuadas, realizar evaluaciones de impacto sobre la privacidad y responder a las solicitudes de los individuos en relación con sus derechos sobre sus datos.
    p.mb-4(data-aos="fade-left") Las obligaciones clave a tener en cuenta de parte de la empresa y en general del tomador de datos de personas son las siguientes:

    .row.mb-4.fondo-1.p-4.justify-content-center.align-items-center
      .col-lg-10.col-12(data-aos="fade-right")
        ul.lista-ul--color
          li 
            i.fas.fa-user-cog
            | #[b Medidas de seguridad:] implementar controles de seguridad técnicos y organizativos para proteger los datos contra acceso no autorizado, pérdida o daño.
          li 
            i.fas.fa-user-cog
            | #[b Evaluaciones de impacto:] realizar evaluaciones de impacto sobre la privacidad (PIA) para identificar y mitigar riesgos asociados con el procesamiento de datos personales.
          li 
            i.fas.fa-user-cog
            | #[b Derechos de los individuos:] responder de manera oportuna y adecuada a las solicitudes de los individuos para acceder, rectificar o eliminar sus datos personales.
    
    p.mb-4(data-aos="fade-left") El incumplimiento de estos parámetros trae consigo los siguientes riesgos:

    .row.justify-content-center.align-items-center
      .col-12.col-md-10.d-none.d-sm-none.d-md-block(data-aos="zoom-in-down")
        ImagenInfografica.color-acento-botones.mb-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema4/info-4A.svg', alt='')
          .tarjeta.color-acento-contenido.p-3(x="22%" y="54%" numero="+")
            .h5.mb-2 Sanciones legales
            p Multas y sanciones significativas (millonarias) por parte de las autoridades de protección de datos.
          .tarjeta.color-acento-contenido.p-3(x="62%" y="16%" numero="+")
            .h5.mb-2 Daños a la reputación
            p Pérdida de confianza y daño a la reputación de la empresa debido a la percepción pública negativa.
          .tarjeta.color-acento-contenido.p-3(x="78%" y="69%" numero="+")
            .h5.mb-2 Acciones legales
            p Posibles demandas y acciones legales por parte de los individuos afectados.
      .col-12.d-block.d-md-none
        .row 
          .col-12.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/info-4B.svg', alt='')

    p.mb-4(data-aos="fade-left") Cumplir con las regulaciones y normativas sobre la información del cliente es esencial para cualquier empresa que recopile y maneje datos personales. Estas normativas no solo protegen los derechos y la privacidad de los individuos, sino que también ayudan a las empresas a construir relaciones de confianza con sus clientes y evitar sanciones legales y daños a su reputación. Implementar prácticas de protección de datos adecuadas, obtener consentimiento explícito y garantizar la transparencia en el uso de datos son pasos fundamentales para lograr el cumplimiento y la gestión responsable de la información del cliente.


</template>

<script>
export default {
  name: 'Tema4',
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
