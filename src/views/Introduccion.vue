<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-4.mb-lg-0
        .bg-color-1.p-4.brounded.h-100
          p.mb-0 Esta unidad tiene como propósito ofrecer una comprensión profunda de los fundamentos y aplicaciones de la Investigación de Operaciones (IO). A lo largo del desarrollo, se analizará por qué la IO es fundamental en la toma de decisiones empresariales y para qué resulta esencial en la optimización de procesos organizacionales. Desde su origen en la estrategia y logística militar, durante la Segunda Guerra Mundial, hasta su consolidación como herramienta clave en la gestión moderna, la IO ha evolucionado para responder a los retos de entornos empresariales globalizados y competitivos.
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/intro/1.png", alt="").mx-auto
      .col-lg-4.mb-4.mb-lg-0
        .bg-color-2.p-4.brounded.h-100
          p.mb-0 Se profundizará en cómo la IO, mediante modelos matemáticos, técnicas estadísticas y herramientas computacionales, permite optimizar recursos, reducir costos y mejorar la eficiencia operativa. Esta disciplina se convierte, por tanto, en un componente indispensable para anticipar escenarios, resolver problemas complejos y adaptar estrategias en organizaciones que buscan mantenerse competitivas.

    p A lo largo de la unidad, se explorarán tres ejes temáticos claves:

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.py-4
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/intro/2.svg"
                alt=""
                style="width: 90px"
              )
              h4.text-center Primer eje
              p.mb-0.text-center Se definirá el concepto y los objetivos de la IO, destacando su relevancia en sectores como manufactura, transporte, salud y telecomunicaciones.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/intro/3.svg"
                alt=""
                style="width: 90px"
              )
              h4.text-center Segundo eje
              p.mb-0.text-center Se analizarán los modelos determinísticos y probabilísticos, resaltando sus aplicaciones prácticas y su valor en entornos dinámicos.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/intro/4.svg"
                alt=""
                style="width: 90px"
              )
              h4.text-center Tercer eje
              p.mb-0.text-center Se presentará una metodología basada en el método científico, que garantiza soluciones objetivas, replicables y alineadas con los objetivos estratégicos de las organizaciones.
        
        
</template>
