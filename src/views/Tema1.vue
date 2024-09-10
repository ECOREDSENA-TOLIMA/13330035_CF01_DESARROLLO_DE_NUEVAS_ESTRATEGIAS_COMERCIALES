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
      .col-lg-6.order-lg-1.order-2.col-12(data-aos="fade-right")
        p.mb-2 El concepto de cliente ideal, también conocido como #[em buyer persona], es una representación detallada y semi-ficticia del cliente que mejor se ajusta a los productos o servicios ofrecidos por una empresa. Este perfil se construye a partir de datos demográficos, psicográficos y comportamentales recopilados a través de diversas fuentes como encuestas, entrevistas y análisis de comportamiento en línea. Según Revella (2020), la creación de #[em buyer personas] permite a las empresas alinear sus estrategias de #[em marketing] y ventas con las expectativas y necesidades reales de los clientes, facilitando así una conexión más efectiva y personalizada con su audiencia objetivo.
        p.mb-2 La relevancia de identificar al cliente ideal se ve reflejada en varios aspectos críticos del negocio, como el desarrollo de productos, la creación de contenido, la planificación de campañas de #[em marketing] y la mejora del servicio al cliente. Un estudio de la #[em Harvard Business Review] (2020) destaca que las empresas que implementan estrategias basadas en un profundo conocimiento de sus clientes pueden aumentar significativamente su retención y satisfacción, lo cual se traduce en un incremento en las ventas y la lealtad a la marca.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img_1.png', alt='')

    Separador
    #t_1_1.titulo-segundo.color-primario(data-aos="fade-right")
      h2 1.1 Definición del perfil de cliente

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-left") 
        img.mt-3(src='@/assets/curso/temas/tema1/img_2.png').mb-3
      .col-lg-7(data-aos="fade-right") 
        p El perfil de cliente ideal, también conocido como #[em buyer persona], es una representación semi-ficticia basada en datos y características reales de los clientes más valiosos para una empresa. Este perfil ayuda a las organizaciones a entender mejor las necesidades y comportamientos de sus clientes, permitiendo diseñar estrategias de #[em marketing] y ventas más efectivas.
        p.cajon.color-secundario.p-4 Existen varios tipos de perfiles de clientes, pero los más comunes son los clientes B2B (#[em Business to Business]) y B2C (#[em Business to Consumer]). Cada tipo de cliente tiene características y necesidades específicas que deben ser comprendidas y abordadas de manera diferente.
        p Para crear un perfil de cliente efectivo, es fundamental considerar varios factores:

    .row.h-100.justify-content-center.mb-4
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
              h4.text-center Conductuales
              p Hábitos de compra, frecuencia de uso de productos o servicios, lealtad a la marca, entre otros.

    p.mb-2(data-aos="fade-down") Un estudio de la #[em Harvard Business Review] (2020) destaca la importancia de integrar datos tanto cualitativos como cuantitativos para una comprensión profunda del cliente.
    p.mb-4(data-aos="fade-down") Ejemplo: Una empresa de #[em software] educativo puede identificar a su cliente ideal como:

    .row.justify-content-center.align-items-center
      .col-12.col-md-10.d-none.d-sm-none.d-md-block(data-aos="zoom-in-down")
        ImagenInfografica.color-acento-botones.mb-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/info-1A.svg', alt='')
          .tarjeta.color-acento-contenido.p-3(x="12.5%" y="26%" numero="+")
            //- .h5.mb-2 Edad y género
            p.mb-0 25-45 años
            | Género: Indiferente.
          .tarjeta.color-acento-contenido.p-3(x="70%" y="26%" numero="+")
            //- .h5.mb-2 Intereses
            p Innovación educativa, tecnologías de la información, enseñanza en línea.
          .tarjeta.color-acento-contenido.p-3(x="73%" y="57%" numero="+")
            //- .h5.mb-2 Conducta
            p Utiliza regularmente plataformas de #[em e-learning], busca constantemente nuevas herramientas educativas, es activo en foros y comunidades educativas en línea.
          .tarjeta.color-acento-contenido.p-3(x="10%" y="57%" numero="+")
            //- .h5.mb-2 Nivel Educativo
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

    h3.mb-4
      span.fondo-2.px-3.py-1(data-aos="zoom-in-down") #[span ●] Para el análisis de mercado

    p.mb-4(data-aos="zoom-in-down") El análisis de mercado es una herramienta fundamental para identificar clientes potenciales. Este análisis incluye la evaluación de la competencia, la identificación de oportunidades de mercado y la comprensión de las tendencias del sector. Algunas de las herramientas que se pueden usar en este apartado son:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img_8.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Google Trends
            p.mb-0 Permite ver las tendencias de búsqueda en Google, lo que ayuda a identificar intereses y comportamientos del mercado en tiempo real.
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img_9.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 SEMrush
            p.mb-0 Ofrece análisis de la competencia, búsqueda de palabras clave y estudios de mercado para identificar oportunidades y amenazas en el sector.
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img_10.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Statista
            p.mb-0 Proporciona estadísticas y estudios de mercado sobre diversas industrias y mercados globales.

    p.mb-2(data-aos="fade-down") Google Trends es una herramienta integral de #[em marketing] digital que ofrece funciones avanzadas para realizar análisis de mercado. Esta plataforma permite a las empresas obtener una visión detallada de su industria, analizar a la competencia, identificar oportunidades de crecimiento y evaluar tendencias del mercado.
    p.mb-4(data-aos="fade-down") El paso a paso para usar Google Trends para análisis de mercado es el siguiente y se define a partir de un correo electrónico propio:

    .tarjeta--container.row.mb-5(data-aos="fade-down")
      .col-lg.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/ico-2A.svg', alt='')
        h4.text-center 1.	Investigación de palabras clave
        p Utiliza Google Trends para identificar las palabras clave más relevantes en tu industria. Esto ayudará a entender qué términos están buscando los clientes potenciales y cómo puedes optimizar tu contenido para atraerlos. La palabra clave es la palabra o el grupo de palabras con las que los usuarios hacen las búsquedas en línea.
      .col-lg.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/ico-2B.svg', alt='')
        h4.text-center 2.	Análisis de la competencia
        p Google Trends permite comparar un sitio web con los de los competidores. Puedes ver qué palabras clave están utilizando, cuáles son sus páginas más populares y cómo están generando tráfico.
      .col-lg.tarjeta.tarjeta--azul.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/ico-2C.svg', alt='')
        h4.text-center 3.	Tendencias del sector
        p La herramienta proporciona informes sobre tendencias de búsqueda y comportamiento del usuario, lo que te permite anticipar cambios en el mercado y ajustar tu estrategia en consecuencia.


    p.mb-4(data-aos="fade-down") #[b Ejemplo práctico:] suponga que una empresa vende #[em software] de gestión de proyectos. Se usa Google Trends para investigar las palabras clave "#[em software] de gestión de proyectos", "herramientas de colaboración en equipo" y "#[em software] de productividad". Con la búsqueda se descubre que los competidores principales están generando mucho tráfico a través de #[em blogs] educativos y comparaciones de productos. En ese momento se toma la decisión de crear contenido similar y optimizarlo para las palabras clave identificadas, además de lanzar una campaña de consecución de prospectos dirigida a las mismas.

    .row.mb-4.p-4.justify-content-center.align-items-center
      .col-lg-10.col-12
        h3.mb-4
          span.fondo-2.px-3.py-1(data-aos="zoom-in-down") #[span ●] Para el uso en la generación y gestión de encuestas y entrevistas
      .col-lg-6.col-12.order-lg-1.order-2(data-aos="fade-right")
        p.mb-2 Las encuestas y entrevistas son métodos efectivos para recopilar información directa de los clientes. Estas herramientas permiten obtener #[em insights] detallados sobre las preferencias, necesidades y problemas de los clientes. Según Kotler y Keller (2019), las encuestas bien diseñadas pueden proporcionar datos valiosos que son difíciles de obtener por otros medios. Las siguientes son algunas herramientas de referencia con las que se pueden hacer estos ejercicios: 
        ul.lista-ul--color
          li 
            i.fas.fas.fa-user-cog
            p.mb-0 #[b SurveyMonkey:] plataforma para crear encuestas en línea con una amplia variedad de plantillas y opciones de personalización.
          li 
            i.fas.fas.fa-user-cog
            p.mb-0 #[b Google Forms:] herramienta gratuita para diseñar encuestas y recopilar respuestas de manera sencilla y efectiva.
          li 
            i.fas.fas.fa-user-cog
            p.mb-0 #[b Typeform:] permite crear encuestas y formularios interactivos y atractivos, mejorando la tasa de respuesta.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-right")
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
    p.mb-4(data-aos="fade-right") De los resultados, se descubre que una gran mayoría de los clientes prefieren productos con envases sostenibles y están interesados en ingredientes orgánicos. Con esta información, la empresa decide lanzar una nueva línea de productos con envases ecológicos y aumentar la transparencia sobre los ingredientes utilizados, además de ajustar las campañas de #[em marketing] para resaltar estos aspectos.

    .row.mb-4.p-4.justify-content-center.align-items-center
      .col-lg-5.col-12.mb-lg-0.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img_11.png', alt='')
      .col-lg-7.col-12(data-aos="fade-right")
        strong.text-1.mb-3(data-aos="zoom-in-down") #[span ●] ¿Qué es un #[em insight]?
        .cajon.color-primario.p-4.mb-3.mt-3
          p.mb-0 Un #[em insight] es una comprensión profunda y reveladora sobre los comportamientos, necesidades, motivaciones o actitudes de los consumidores. Es una verdad oculta que, una vez descubierta, proporciona una nueva perspectiva y puede guiar la toma de decisiones estratégicas en #[em marketing], desarrollo de productos y otras áreas empresariales.
        p #[b Ejemplo de #[em insight]:] una empresa de alimentos puede descubrir que sus consumidores compran ciertos productos no solo por su sabor, sino porque les evocan recuerdos nostálgicos de su infancia. Este #[em insight] puede llevar a la empresa a desarrollar campañas de #[em marketing] que se centren en la nostalgia y los momentos familiares, aumentando así la conexión emocional con la marca.

    .row.mb-4.align-items-center
      .col-12(data-aos="fade-right")
        h3(data-aos="zoom-in-down")
          span.fondo-2.px-3.py-1 #[span ●] Para el uso en el análisis de comportamiento en redes sociales y plataformas digitales

        //- div.fondo-2(data-aos="zoom-in-down")
        //-   ul.lista-ul--color
        //-     li.mb-0 
        //-       i.ps-3 #[span(style="color:#000000") ●]
        //-       b.py-1 Para el uso en el análisis de comportamiento en redes sociales y plataformas digitales

    p.mb-2(data-aos="fade-right") El análisis de comportamiento en redes sociales y plataformas digitales es una técnica moderna y poderosa para identificar clientes potenciales. Al estudiar las interacciones y preferencias de los usuarios en plataformas como Facebook, Instagram, LinkedIn, y otros, las empresas pueden identificar patrones de comportamiento y segmentar a los clientes de manera más precisa.
    p.mb-4(data-aos="fade-right") Para el caso puntual de las redes sociales, cada red social tiene su propia herramienta de gestión de estadísticas con las que se obtiene información de valor, adicionalmente se pueden usar algunas de las siguientes herramientas que aportan a esa caracterización:

    .row.justify-content-center.mb-5
      .col-lg-10.col-12.position-relative
        .avatar
          figure
            img(src="@/assets/curso/temas/tema1/ico-3.svg", alt="alt").img250
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/ico-3A.svg", alt="alt").img100
            .col
              h5 Hootsuite
              p Plataforma de gestión de redes sociales que permite monitorear y analizar la actividad de los usuarios en múltiples redes sociales.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/ico-3B.svg", alt="alt").img100
            .col
              h5 Sprout Social
              p Ofrece análisis detallados de las interacciones en redes sociales y ayuda a identificar tendencias y comportamientos de los usuarios.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/ico-3C.svg", alt="alt").img100
            .col
              h5 BuzzSumo
              p Herramienta que permite analizar el contenido más compartido en redes sociales y entender qué tipo de contenido atrae a la audiencia.
    
    p.mb-2(data-aos="fade-right") #[b Ejemplo:] una tienda en línea de productos de belleza puede utilizar herramientas de análisis de redes sociales para identificar a personas que siguen cuentas relacionadas con el cuidado de la piel y la belleza, interactúan con contenido sobre maquillaje y publican reseñas de productos de belleza.

    Separador
    #t_1_3.titulo-segundo.color-primario(data-aos="fade-right")
      h2 1.3 Segmentación de mercados

    p.mb-4(data-aos="fade-right") La segmentación de mercados es un proceso estratégico en el que se divide un mercado heterogéneo en grupos más pequeños y homogéneos, conocidos como segmentos, que comparten características similares. Este enfoque permite a las empresas adaptar sus estrategias de #[em marketing] y ventas para satisfacer de manera más efectiva las necesidades y preferencias de cada grupo específico. Según Kotler y Keller (2019), la segmentación de mercados es esencial para identificar oportunidades de mercado, mejorar la satisfacción del cliente y maximizar la eficiencia en el uso de recursos. Los principales tipos de segmentación de mercados son los siguientes:

    .row.justify-content-center.align-items-center
      .col-12.col-md-10.d-none.d-sm-none.d-md-block(data-aos="zoom-in-down")
        ImagenInfograficaB.color-acento-botones.mb-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/info-2A.svg', alt='')
          div.p-3(x="20%" y="17%" numero="+" tooltip="Clic para ver información")
            .h5.mb-2 Segmentación demográfica
            p Basada en características cuantificables de la población, como la edad, género, ingresos, nivel educativo, ocupación, estado civil, entre otras.
            p #[b Ejemplo:] una empresa de productos de belleza puede segmentar su mercado en función del género y la edad, ofreciendo productos específicos para mujeres jóvenes y hombres mayores.
          div.p-3(x="80%" y="17%" numero="+" tooltip="Clic para ver información")
            .h5.mb-2 Segmentación geográfica
            p Basada en la ubicación de los clientes, como país, región, ciudad, vecindario o clima.
            p #[b Ejemplo:] una marca de ropa puede lanzar diferentes líneas de productos dependiendo del clima de cada región, como ropa de invierno para el norte y ropa ligera para el sur.
          div.p-3(x="80%" y="69%" numero="+" tooltip="Clic para ver información")
            .h5.mb-2 Segmentación psicográfica
            p Basada en el estilo de vida, personalidad, valores, intereses y actitudes de los clientes.
            p #[b Ejemplo:] una empresa de alimentos saludables puede segmentar su mercado en consumidores preocupados por su salud y aquellos interesados en tendencias de alimentación como el veganismo o la alimentación orgánica.
          div.p-3(x="20%" y="69%" numero="+" tooltip="Clic para ver información")
            .h5.mb-2 Segmentación conductual
            p Basada en el comportamiento de compra de los clientes, como hábitos de compra, lealtad a la marca, uso del producto y beneficios buscados.
            p #[b Ejemplo:] un proveedor de servicios de #[em streaming] puede segmentar su mercado en función de los hábitos de visualización de los usuarios, ofreciendo recomendaciones personalizadas basadas en el historial de visualización.
      .col-12.d-block.d-md-none
        .row 
          .col-12.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/info-1B.svg', alt='')

    p.mb-4(data-aos="fade-right") Hacer segmentación de mercados es de gran importancia por temas logísticos y económicos de las empresas, son muchos los factores que se trabajan en relación a beneficios empresariales, los siguientes son solo algunos de esos beneficios:

    .row.mb-5.justify-content-center.h-100(data-aos="fade-left")
      .col-md-6.col-lg.tarjeta--tabla.tarjetas.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/ico-4A.svg' alt='AvatarTop')
        h5.text-center Eficiencia en el uso de recursos
        p.text-center Permite a las empresas enfocar sus esfuerzos y recursos en los segmentos más rentables y con mayor potencial de crecimiento.
      .col-md-6.col-lg.tarjeta--tabla.tarjetas.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/ico-4B.svg' alt='AvatarTop')
        h5.text-center Personalización del #[em marketing]
        p.text-center Facilita la creación de estrategias de #[em marketing] personalizadas que resuenan mejor con las necesidades y deseos específicos de cada segmento.
      .col-md-6.col-lg.tarjeta--tabla.tarjetas.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/ico-4C.svg' alt='AvatarTop')
        h5.text-center Mejora de la satisfacción del cliente
        p.text-center Al abordar las necesidades específicas de cada segmento, se puede mejorar significativamente la satisfacción y lealtad del cliente.
      .col-md-6.col-lg.tarjeta--tabla.tarjetas.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/ico-4D.svg' alt='AvatarTop')
        h5.text-center Identificación de oportunidades de mercado
        p.text-center Ayuda a descubrir nichos de mercado no atendidos o subatendidos que pueden ser explotados para obtener una ventaja competitiva.

    .row.mb-4.fondo-1.align-items-center
      .col-lg-4.col-md-8.col-12(data-aos="fade-right")
        h3
          span.fondo-2.px-3.py-1(data-aos="zoom-in-down") #[span ●] Técnicas de segmentación

    p.mb-4(data-aos="fade-right") La segmentación de mercados es una estrategia fundamental que permite a las empresas dividir su mercado total en segmentos más pequeños y homogéneos para diseñar y aplicar estrategias de #[em marketing] más efectivas. Existen diversas técnicas de segmentación que las empresas pueden utilizar para identificar y clasificar a sus clientes en grupos específicos. A continuación, se presentan las técnicas más comunes y efectivas para la segmentación de mercados.
    
    TabsA.color-acento-botones.mb-5
      .tarjeta.color-secundario.p-4(titulo="Segmentación demográfica")
        h4 Segmentación demográfica
        p La segmentación demográfica divide el mercado en segmentos basados en variables demográficas tales como edad, género, ingresos, nivel educativo, ocupación, estado civil y tamaño de la familia.
        p #[b Ejemplo práctico:] una empresa de productos de cuidado personal puede segmentar su mercado en función del género y la edad, ofreciendo una línea de productos anti-envejecimiento para mujeres mayores de 40 años y una línea de productos para el acné dirigida a adolescentes.
      .tarjeta.color-secundario.p-4(titulo="Segmentación geográfica")
        h4 Segmentación geográfica
        p La segmentación geográfica clasifica a los clientes en función de su ubicación geográfica, como país, región, ciudad, vecindario o clima. Esta técnica permite a las empresas ajustar sus estrategias de #[em marketing] según las características y necesidades de cada área geográfica.
        p #[b Ejemplo práctico:] una cadena de restaurantes puede utilizar la segmentación geográfica para ofrecer menús adaptados a los gustos locales, como platos de mariscos en regiones costeras y platos más pesados en zonas frías.
      .tarjeta.color-secundario.p-4(titulo="Segmentación psicográfica")
        h4 Segmentación psicográfica
        p La segmentación psicográfica se basa en aspectos psicológicos y de estilo de vida de los consumidores, como sus intereses, valores, actitudes y personalidad. Esta técnica permite una comprensión más profunda de los comportamientos y motivaciones de los clientes.
        p #[b Ejemplo práctico:] una empresa de ropa deportiva puede segmentar su mercado en función del estilo de vida de los consumidores, ofreciendo productos específicos para aquellos interesados en el fitness, el yoga o los deportes extremos.
      .tarjeta.color-secundario.p-4(titulo="Segmentación conductual")
        h4 Segmentación conductual
        p La segmentación conductual clasifica a los consumidores según su comportamiento en relación con los productos o servicios, como hábitos de compra, lealtad a la marca, frecuencia de uso y beneficios buscados. Esta técnica se centra en cómo los clientes interactúan con los productos y servicios.
        p #[b Ejemplo práctico:] una empresa de #[em software] puede segmentar su mercado en función de la frecuencia de uso del producto, ofreciendo paquetes básicos para usuarios ocasionales y paquetes premium para usuarios avanzados que requieren más funcionalidades.
      .tarjeta.color-secundario.p-4(titulo="Segmentación por beneficios")
        h4 Segmentación por beneficios
        p La segmentación por beneficios divide a los consumidores en grupos basados en los beneficios específicos que buscan al comprar un producto o servicio. Esta técnica se enfoca en identificar las necesidades y deseos clave de los clientes.
        p #[b Ejemplo práctico:] una empresa de productos de limpieza puede segmentar su mercado según los beneficios buscados, ofreciendo productos específicos para aquellos que buscan rapidez y eficacia, productos ecológicos para quienes valoran la sostenibilidad y productos de lujo para quienes buscan una experiencia de limpieza premium.
      .tarjeta.color-secundario.p-4(titulo="Segmentación multivariable")
        h4 Segmentación multivariable
        p La segmentación multivariable utiliza múltiples variables demográficas, geográficas, psicográficas y conductuales para crear segmentos de mercado más detallados y precisos. Esta técnica permite una segmentación más completa y específica.
        p #[b Ejemplo práctico:] un minorista en línea puede utilizar una combinación de variables para segmentar su mercado, como edad, ingresos, ubicación geográfica e intereses, para ofrecer recomendaciones de productos personalizadas y campañas de #[em marketing] dirigidas.
    
    p.mb-4(data-aos="fade-right") Las técnicas de segmentación sostienen una importancia manifiesta y en su estudio se recomienda tenerlas en cuenta, algunos motivos que resaltan la importancia del uso y aplicación de esas técnicas son las siguientes:

    .row.h-100.mb-5.justify-content-center(data-aos="fade-left")
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4.text-center Eficiencia en la estrategia de #[em marketing]
              p Permite a las empresas diseñar campañas de #[em marketing] más efectivas y eficientes, dirigidas a segmentos específicos del mercado.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/ico-5A.png')})`}")
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4.text-center Mejora de la satisfacción del cliente
              p Al entender mejor las necesidades y deseos de los distintos segmentos, las empresas pueden ofrecer productos y servicios que realmente satisfagan las expectativas de sus clientes.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/ico-5B.png')})`}")
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4.text-center Identificación de nuevas oportunidades
              p Ayuda a descubrir nichos de mercado que pueden ser explotados para obtener una ventaja competitiva.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/ico-5C.png')})`}")
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4.text-center Optimización de recursos
              p Permite una asignación más eficiente de los recursos de #[em marketing] y ventas, enfocándose en los segmentos más rentables y con mayor potencial de crecimiento.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/ico-5D.png')})`}")

    p.mb-5(data-aos="fade-right") La segmentación de mercados es una técnica poderosa que permite a las empresas conocer mejor a sus clientes y adaptar sus estrategias de #[em marketing] y ventas para satisfacer de manera más efectiva las necesidades específicas de cada segmento. Al utilizar diversas técnicas de segmentación, las empresas pueden identificar oportunidades de mercado, mejorar la satisfacción del cliente y optimizar sus recursos para maximizar sus beneficios.


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    indicadorTarjetaSlide: true,
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
