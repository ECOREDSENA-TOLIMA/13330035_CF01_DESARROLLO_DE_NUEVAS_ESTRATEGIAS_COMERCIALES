<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Portafolio de servicios financieros

    .row.mb-4.justify-content-center.align-items-center(data-aos="fade-right")
      .col-12 
        figure
          img(src='@/assets/curso/temas/tema7/img_1.png', alt='')
    
    p.mb-5(data-aos="fade-left") Un #[b portafolio de servicios financieros] es un conjunto de productos y servicios ofrecidos por una entidad financiera para satisfacer las necesidades de sus clientes. En el contexto colombiano, este portafolio abarca una amplia gama de opciones que permiten a los individuos y empresas gestionar su dinero, invertir, y acceder a crédito, entre otras actividades financieras. A continuación, se detalla la composición típica de un portafolio de servicios financieros en Colombia:
    
    .row.mb-5.justify-content-center.align-items-center
      .col-12(data-aos="fade-right")
        div
          b.fondo-2.px-4.py-1(data-aos="zoom-in-down") #[span ●] Productos de ahorro y depósito

    p.mb-4(data-aos="fade-left") Estos productos están diseñados para ayudar a los clientes a guardar su dinero de manera segura y obtener rendimientos a través de intereses. Incluyen:

    .row.align-items-center.justify-content-center.mb-4
      .col-md-6.col-lg.mb-3.mb-lg-0(data-aos="fade-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema7/ico-1A.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100
            .p-4
              h4.text-center Cuentas de ahorro
              p Permiten a los clientes depositar dinero, que genera un interés modesto, y ofrecen acceso fácil a los fondos mediante cajeros automáticos y transferencias electrónicas.
      .col-md-6.col-lg.mb-3.mb-lg-0(data-aos="fade-down")
        .tarjeta-avatar 
          img(src='@/assets/curso/temas/tema7/ico-1B.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100
            .p-4
              h4.text-center Cuentas corrientes
              p Ofrecen flexibilidad para realizar pagos y transferencias, y suelen estar asociadas a chequeras. No suelen generar intereses, pero permiten manejar grandes volúmenes de dinero con facilidad.
      .col-md-6.col-lg.mb-3.mb-lg-0(data-aos="fade-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema7/ico-1C.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100
            .p-4
              h4.text-center Certificados de Depósito a Término (CDT)
              p Son inversiones a plazo fijo que generan intereses más altos que una cuenta de ahorros tradicional, a cambio de mantener el dinero depositado durante un período específico.

    .row.mb-5.justify-content-center.align-items-center
      .col-12(data-aos="fade-right")
        div
          b.fondo-2.px-4.py-1(data-aos="zoom-in-down") #[span ●] Productos de crédito

    p.mb-4(data-aos="fade-left") Los productos de crédito facilitan el acceso a financiamiento para individuos y empresas. Entre ellos se encuentran:

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-left")
      .col-md-6.col-lg.tarjeta--tabla.tarjetas.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-4.mb-2
            img(src='@/assets/curso/temas/tema7/ico-2A.svg' alt='AvatarTop')
        h4.text-center.mb-4 Préstamos personales
        p.text-center.mb-4 Ofrecen dinero en efectivo a los clientes para necesidades personales como la compra de bienes o el pago de deudas.
      .col-md-6.col-lg.tarjeta--tabla.tarjetas.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-4.mb-2
            img(src='@/assets/curso/temas/tema7/ico-2B.svg' alt='AvatarTop')
        h4.text-center.mb-4 Créditos hipotecarios
        p.text-center.mb-4 Proporcionan financiamiento para la compra de bienes inmuebles, con plazos y tasas de interés que varían según la entidad financiera.
      .col-md-6.col-lg.tarjeta--tabla.tarjetas.color-primario.p-4.p-md-3.p-lg-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema7/ico-2C.svg' alt='AvatarTop')
        h4.text-center Líneas de crédito
        p.text-center Permiten a los clientes acceder a un monto preaprobado de dinero que pueden utilizar según sus necesidades, pagando intereses solo sobre el monto utilizado.
      .col-md-6.col-lg.tarjeta--tabla.tarjetas.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema7/ico-2D.svg' alt='AvatarTop')
        h4.text-center Tarjetas de crédito
        p.text-center Ofrecen una forma de financiamiento a corto plazo para compras y pagos, con la posibilidad de pagar el saldo en su totalidad o en cuotas mensuales.

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-4.col-12(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema7/img_2.png', alt='')
      .col-lg-8.col-md-8.col-12(data-aos="fade-right")
        div.mb-4
          b.fondo-2.px-3.py-1(data-aos="zoom-in-down") #[span ●] Productos de inversión
        p Estos productos están diseñados para ayudar a los clientes a aumentar su riqueza mediante la inversión en diferentes activos:
        ul.lista-ul--color
          li 
            i.fas.fa-user-cog
            | #[b Fondos de inversión:] permiten a los clientes invertir en una cartera diversificada de activos, administrada por expertos. Estos fondos pueden ser de renta fija, renta variable, o mixtos.
          li 
            i.fas.fa-user-cog
            | #[b Acciones:] ofrecen la posibilidad de comprar participaciones en empresas, con el potencial de obtener rendimientos a través de dividendos y el aumento en el valor de las acciones.
          li 
            i.fas.fa-user-cog
            | #[b Bonos:] son instrumentos de deuda que generan intereses fijos, emitidos por gobiernos o empresas.
       
    .row.mb-4.justify-content-center.align-items-center
      .col-lg-10.col-12(data-aos="fade-right")
        div.mb-4
          b.fondo-2.px-3.py-1(data-aos="zoom-in-down") #[span ●] Seguros
        p Los seguros ofrecen protección financiera contra riesgos imprevistos. En Colombia, el portafolio de seguros típicamente incluye:
        .row.align-items-center.cajon.color-primario.p-4
          .col-md-2.col-10
            figure
              img(src='@/assets/curso/temas/tema7/img_3.svg', alt='')
          .col-md-10.col-12
            ul.lista-ul--color.mb-0
              li 
                i.fas.fa-user-cog
                | #[b Seguros de vida:] proporcionan una suma asegurada a los beneficiarios en caso de fallecimiento del titular.
              li 
                i.fas.fa-user-cog
                | #[b Seguros de salud:] cubren gastos médicos y hospitalarios.
              li 
                i.fas.fa-user-cog
                | #[b Seguros de automóviles:] protegen contra daños o pérdidas de vehículos.
              li
                i.fas.fa-user-cog
                | #[b Seguros de hogar:] ofrecen cobertura contra daños a la propiedad residencial. 
  
    .row.mb-4.justify-content-center.align-items-center
      .col-12(data-aos="fade-right")
        div
          b.fondo-2.px-3.py-1(data-aos="zoom-in-down") #[span ●] Servicios de asesoría financiera

    p.mb-4(data-aos="fade-left") Las entidades financieras en Colombia también ofrecen servicios de asesoría para ayudar a los clientes a tomar decisiones informadas sobre su dinero:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema7/img_4.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Planificación financiera
            p.mb-0 Asistencia en la elaboración de planes financieros a corto, mediano y largo plazo.
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema7/img_5.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Asesoría en inversiones
            p.mb-0 Orientación sobre cómo y dónde invertir para maximizar los rendimientos.
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema7/img_6.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Gestión de patrimonio
            p.mb-0 Servicios personalizados para clientes con grandes sumas de dinero, que buscan administrar sus activos de manera eficiente.


    p.mb-4(data-aos="fade-left") En el sistema financiero colombiano, la diversidad de entidades permite atender de manera efectiva las necesidades económicas de individuos y empresas. Cada tipo de entidad financiera ofrece un portafolio de servicios diseñado para satisfacer requerimientos específicos, desde la gestión de ahorros y la concesión de créditos hasta la administración de inversiones y la oferta de seguros. A continuación, se presenta una tabla que detalla los diferentes tipos de entidades financieras en Colombia y los servicios que cada una de ellas ofrece dentro de sus portafolios. Esta información proporciona una visión clara de cómo estas entidades contribuyen al desarrollo económico y al bienestar financiero de la sociedad.
    
    .row.mb-4.justify-content-center.align-items-center
      .col-12.col-md-11.col-lg-9(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
          p.pb-0.mb-0 <b>Tabla 2. </b> <em style="color:black">Servicios financieros</em>
        .tabla-b.color-acento-contenido.mb-5
          table
            thead
              tr.text-center.bg-header-table
                th Tipo de entidad financiera
                th Servicios prestados
            tbody
              tr
                th Bancos comerciales
                td 
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      | Cuentas de ahorro
                    li.mb-0
                      i.lista-ul__vineta
                      | Cuentas corrientes
                    li.mb-0
                      i.lista-ul__vineta
                      | Préstamos personales
                    li.mb-0
                      i.lista-ul__vineta
                      | Créditos hipotecarios
                    li.mb-0
                      i.lista-ul__vineta
                      | Tarjetas de crédito
                    li.mb-0
                      i.lista-ul__vineta
                      | Inversiones
                    li.mb-0
                      i.lista-ul__vineta
                      | Servicios de banca en línea
              tr
                th Bancos hipotecarios
                td 
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      | Créditos hipotecarios
                    li.mb-0
                      i.lista-ul__vineta
                      | Refinanciación de hipotecas
                    li.mb-0
                      i.lista-ul__vineta
                      | Asesoría en compra de vivienda
              tr
                th Corporaciones financieras
                td 
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      | Financiamiento empresarial
                    li.mb-0
                      i.lista-ul__vineta
                      | Créditos a mediano y largo plazo
                    li.mb-0
                      i.lista-ul__vineta
                      | Asesoría para proyectos de inversión
                    li.mb-0
                      i.lista-ul__vineta
                      | Emisión de bonos
              tr
                th Compañías de financiamiento comercial
                td 
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      | Arrendamiento financiero
                    li.mb-0
                      i.lista-ul__vineta
                      | Crédito para adquisición de bienes de capital
                    li.mb-0
                      i.lista-ul__vineta
                      | Financiamiento de proyectos comerciales
              tr
                th Cooperativas financieras
                td 
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      | Cuentas de ahorro
                    li.mb-0
                      i.lista-ul__vineta
                      | Préstamos personales
                    li.mb-0
                      i.lista-ul__vineta
                      | Créditos para vivienda
                    li.mb-0
                      i.lista-ul__vineta
                      | Servicios de inversión
                    li.mb-0
                      i.lista-ul__vineta
                      | Educación financiera
              tr
                th Cajas de compensación familiar
                td 
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      | Créditos para vivienda
                    li.mb-0
                      i.lista-ul__vineta
                      | Créditos educativos
                    li.mb-0
                      i.lista-ul__vineta
                      | Subsidios familiares
                    li.mb-0
                      i.lista-ul__vineta
                      | Programas de bienestar social
              tr
                th Entidades de microfinanzas
                td 
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      | Microcréditos
                    li.mb-0
                      i.lista-ul__vineta
                      | Cuentas de ahorro pequeñas
                    li.mb-0
                      i.lista-ul__vineta
                      | Servicios de capacitación financiera
                    li.mb-0
                      i.lista-ul__vineta
                      | Créditos grupales
              tr
                th Sociedades fiduciarias
                td 
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      | Administración de patrimonios
                    li.mb-0
                      i.lista-ul__vineta
                      | Fiducia mercantil e inmobiliaria
                    li.mb-0
                      i.lista-ul__vineta
                      | Cartera colectiva de inversión
                    li.mb-0
                      i.lista-ul__vineta
                      | Proyectos inmobiliarios
              tr
                th Fondos de pensiones y cesantías
                td 
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      | Planes de pensiones obligatorias
                    li.mb-0
                      i.lista-ul__vineta
                      | Planes de pensiones voluntarias
                    li.mb-0
                      i.lista-ul__vineta
                      | Administración de cesantías
                    li.mb-0
                      i.lista-ul__vineta
                      | Asesoría en planificación para el retiro
              tr
                th Aseguradoras
                td 
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      | Seguros de vida
                    li.mb-0
                      i.lista-ul__vineta
                      | Seguros de salud
                    li.mb-0
                      i.lista-ul__vineta
                      | Seguros de automóviles
                    li.mb-0
                      i.lista-ul__vineta
                      | Seguros de hogar
                    li.mb-0
                      i.lista-ul__vineta
                      | Seguros de responsabilidad civil

    p.mb-2(data-aos="fade-left") En Colombia, los portafolios de servicios financieros están regulados por la #[b Superintendencia Financiera de Colombia], que supervisa las actividades de las entidades financieras para asegurar la estabilidad del sistema financiero y la protección de los consumidores. Las entidades deben cumplir con normas estrictas en cuanto a transparencia, solvencia y gestión de riesgos.
    p.mb-4(data-aos="fade-left") Un portafolio bien estructurado permite a las entidades financieras diversificar sus fuentes de ingresos y a los clientes acceder a una variedad de servicios que cubran sus necesidades financieras. La competencia en el mercado colombiano ha llevado a las instituciones a innovar y mejorar continuamente sus ofertas, buscando fidelizar a los clientes y expandir su base de usuarios.


</template>

<script>
export default {
  name: 'Tema7',
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
