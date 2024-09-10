<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Servicios de las entidades financieras en Colombia

    .row.mb-4.justify-content-center.align-items-center(data-aos="fade-right")
      .col-12 
        figure
          img(src='@/assets/curso/temas/tema6/img_1.png', alt='') 
    
    p.mb-2(data-aos="fade-left") Una #[b entidad financiera] es una organización que ofrece servicios relacionados con el manejo, inversión y préstamo de dinero. Estas entidades son fundamentales para el funcionamiento del sistema económico, ya que facilitan la intermediación financiera, es decir, el flujo de fondos entre ahorradores e inversores. En Colombia, las entidades financieras están reguladas por la #[b Superintendencia Financiera de Colombia], lo que asegura su funcionamiento estable y su compromiso con las normas vigentes.
    p.mb-5(data-aos="fade-left") En Colombia, las entidades financieras se dividen en varias categorías, cada una con funciones específicas y productos financieros característicos:

    .row.mb-5.justify-content-center.align-items-center
      .col-12(data-aos="fade-right")
        h3
          span.fondo-2.px-4.py-1(data-aos="zoom-in-down") #[span ●] Bancos

    p.mb-4(data-aos="fade-left") Los bancos son las entidades financieras más conocidas y ofrecen una amplia gama de servicios financieros. Se clasifican en:
    
    .row.justify-content-center.align-items-center
      .col-lg-6(data-aos="fade-down")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema6/ico_1A.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul-2
            .p-4
              h4 Bancos comerciales
              p Proporcionan servicios bancarios generales, incluyendo cuentas de ahorro, cuentas corrientes, préstamos, créditos hipotecarios, y tarjetas de crédito.
      .col-lg-6(data-aos="fade-down")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema6/ico_1B.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul-2
            .p-4
              h4 Bancos hipotecarios
              p Se especializan en financiamiento para la adquisición de bienes inmuebles, ofreciendo créditos hipotecarios a largo plazo.

    p.mb-4(data-aos="fade-left") Los bancos son las entidades más populares, sin embargo en el mercado se encuentran otras varias entidades que prestan servicios financieros y se encuentran en el siguiente recurso:

    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-down")
      .col-12.p-5.tarjeta.fondo-6
        SlyderB(:datos="datosSlyder")

    p.mb-2(data-aos="fade-left") Las entidades financieras en Colombia están sujetas a un riguroso marco regulatorio que busca asegurar la estabilidad del sistema financiero y proteger los intereses de los consumidores. La #[b Superintendencia Financiera de Colombia] es el organismo encargado de supervisar y regular estas entidades, velando por el cumplimiento de normas en materia de solvencia, transparencia, y gestión de riesgos.
    p.mb-4(data-aos="fade-left") Las entidades financieras desempeñan un papel crucial en la economía, facilitando la circulación del dinero y el acceso al crédito, promoviendo el ahorro y la inversión, y contribuyendo al desarrollo económico y social del país. Su diversidad permite atender las necesidades de distintos sectores de la población, desde grandes empresas hasta pequeños emprendedores y familias.


</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Corporaciones financieras',
        texto:
          'Objetivo principal es promover el desarrollo industrial y comercial, ofreciendo crédito a empresas para la expansión y modernización de sus operaciones.',
        imagen: require('@/assets/curso/temas/tema6/img_2.png'),
      },
      {
        titulo: 'Compañías de financiamiento comercial',
        texto:
          'También conocidas como entidades de <em>leasing</em>, estas compañías ofrecen financiamiento para la adquisición de bienes de capital mediante el arrendamiento financiero. Son una opción popular para empresas que buscan adquirir equipos o maquinaria sin comprometer su flujo de caja.',
        imagen: require('@/assets/curso/temas/tema6/img_3.png'),
      },
      {
        titulo: 'Cooperativas financieras',
        texto:
          'Las cooperativas financieras son organizaciones sin ánimo de lucro que ofrecen servicios financieros a sus miembros. Estas entidades se caracterizan por su estructura de propiedad colectiva, donde los miembros son tanto clientes como propietarios. Ofrecen productos similares a los bancos, como cuentas de ahorro, préstamos, y servicios de inversión.',
        imagen: require('@/assets/curso/temas/tema6/img_4.png'),
      },
      {
        titulo: 'Cajas de compensación familiar',
        texto:
          'Aunque no son entidades financieras tradicionales, las cajas de compensación familiar en Colombia ofrecen servicios financieros a sus afiliados, incluyendo créditos para vivienda y educación, además de administrar subsidios y beneficios sociales.',
        imagen: require('@/assets/curso/temas/tema6/img_5.png'),
      },
      {
        titulo: 'Entidades de microfinanzas',
        texto:
          'Estas entidades se especializan en ofrecer servicios financieros a personas y pequeñas empresas que no tienen acceso a la banca tradicional. Su enfoque está en proporcionar microcréditos, ahorro, y otros servicios financieros adaptados a las necesidades de los sectores más vulnerables de la población.',
        imagen: require('@/assets/curso/temas/tema6/img_6.png'),
      },
      {
        titulo: 'Sociedades fiduciarias',
        texto:
          'Las sociedades fiduciarias administran patrimonios y recursos en beneficio de terceros. Ofrecen servicios de fiducia mercantil, fiducia inmobiliaria, y administración de carteras colectivas, entre otros. Su papel es gestionar activos de manera eficiente y transparente para maximizar el valor para sus clientes.',
        imagen: require('@/assets/curso/temas/tema6/img_7.png'),
      },
      {
        titulo: 'Fondos de pensiones y cesantías',
        texto:
          'Estos fondos administran el ahorro para la jubilación y las cesantías de los trabajadores. Ofrecen planes de pensiones voluntarias y obligatorias, buscando maximizar los rendimientos a largo plazo a través de inversiones diversificadas.',
        imagen: require('@/assets/curso/temas/tema6/img_8.png'),
      },
      {
        titulo: 'Aseguradoras',
        texto:
          'Las compañías de seguros ofrecen productos de protección financiera, cubriendo riesgos relacionados con la salud, la vida, los bienes, y la responsabilidad civil. En Colombia, las aseguradoras deben cumplir con regulaciones estrictas para garantizar la solvencia y protección de los asegurados.',
        imagen: require('@/assets/curso/temas/tema6/img_9.png'),
      },
    ],
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
