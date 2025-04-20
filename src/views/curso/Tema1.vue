<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Desigualdades e Inecuaciones, valor absoluto'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/1.png", alt="")
      .col-lg-8
        p.mb-4  La #[strong Investigación de Operaciones (IO)], es una disciplina que aplica técnicas analíticas avanzadas para la toma de decisiones y la optimización de procesos en las organizaciones. Su origen se remonta a la Segunda Guerra Mundial, cuando se utilizó para mejorar la estrategia y la logística militar. Posteriormente, estas técnicas fueron adoptadas en el ámbito empresarial y gubernamental, para mejorar la eficiencia en la asignación de recursos y la planificación operativa.

        .bg-color-3.p-4.my-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En la actualidad, la IO se ha convertido en una herramienta fundamental para la gestión empresarial y la resolución de problemas complejos, en diversas industrias. A través del uso de modelos matemáticos, métodos estadísticos y herramientas computacionales, la IO permite a las empresas mejorar su competitividad, reducir costos, optimizar la producción y maximizar la utilización de sus recursos disponibles.

        p A continuación, se presentan una línea de tiempo con los hitos clave en la evolución de la Investigación de Operaciones:
        

    .row.align-items-start.mb-5
      .col-lg-8

        LineaTiempoD.large(data-aos="fade-right")
          p(numero="1" titulo="1940s") Se desarrollan los primeros modelos de IO aplicados a la planificación logística y militar durante la Segunda Guerra Mundial.
          p(numero="2" titulo="1950s") Se introduce la programación lineal y el método simplex, que permiten resolver problemas de optimización con restricciones.
          p(numero="3" titulo="1960s") La IO se convierte en una disciplina académica, con la creación de departamentos especializados en universidades de prestigio.
          p(numero="4" titulo="1970s") La IO se convierte en una disciplina académica, con la creación de departamentos especializados en universidades de prestigio.

        
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/3.png", alt="").mb-4.mb-lg-0
    

    .row.align-items-start.mb-5        
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/4.png", alt="").mb-4.mb-lg-0
      
      .col-lg-8
        LineaTiempoD.large(data-aos="fade-right")
          p(numero="5" titulo="1980s") Se desarrollan modelos avanzados de programación no lineal y heurísticas para problemas más complejos.
          p(numero="6" titulo="1990s") Se integran nuevas técnicas como la inteligencia artificial, los algoritmos genéticos y la optimización combinatoria.
          p(numero="7" titulo="2000s") Con el auge del Big Data, la IO se apoya en herramientas computacionales avanzadas para analizar grandes volúmenes de información.
          p(numero="8" titulo="2020s") La computación cuántica comienza a ser explorada como una solución para la resolución de problemas de optimización a gran escala.


    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Definición y objetivos en la administración de empresas


    .row.align-items-start.mb-5
      .col-lg-8
        p.mb-4 La Investigación de Operaciones se define como el uso de modelos matemáticos, técnicas de optimización y simulaciones computacionales, para analizar problemas administrativos complejos y formular estrategias óptimas para su resolución. Según Taha (2012), la IO proporciona un enfoque estructurado y científico para la toma de decisiones, lo que permite a las organizaciones mejorar la eficiencia y eficacia de sus procesos.

        p Los principales objetivos de la IO en la administración de empresas incluyen:
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/5.png", alt="").mb-4.mb-lg-0


    .bg-full-width.bg-color-info
      .px-4.px-md-5.pt-4.pt-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/info1.png', alt='', style="max-width: 730px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="17%" y="77%" numero="+")
                h5 1. Optimización de procesos
                p Identificar y eliminar ineficiencias en los procesos empresariales, para mejorar la productividad y minimizar desperdicios.

              .bg-color-white.box-shadow.p-3(x="17%" y="34%" numero="+")
                h5 2. Toma de decisiones basada en datos
                p Utilización de modelos cuantitativos para reducir la incertidumbre y mejorar la calidad de las decisiones estratégicas.
    
              .bg-color-white.box-shadow.p-3(x="49%" y="14%" numero="+")
                h5 3. Mejora en la planificación y control
                p Desarrollo de estrategias óptimas en la gestión empresarial, mediante modelos predictivos.
    
              .bg-color-white.box-shadow.p-3(x="80%" y="34%" numero="+")
                h5 4. Análisis y simulación de escenarios
                p Evaluación de distintas alternativas estratégicas, para determinar la opción más beneficiosa.
    
              .bg-color-white.box-shadow.p-3(x="82%" y="77%" numero="+")
                h5 5. Automatización de procesos
                p Implementación de herramientas computacionales para mejorar la velocidad y la precisión, en la toma de decisiones.
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/6.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 La IO es utilizada en sectores como la manufactura, el transporte, la salud, la logística, las telecomunicaciones y la administración pública, entre otros, para abordar problemas complejos de asignación de recursos, programación de actividades y optimización de redes.
    

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Importancia de la Investigación de Operaciones en la toma de decisiones empresariales
    

    p La Investigación de Operaciones juega un papel clave en la toma de decisiones empresariales, dado que permite a los administradores analizar múltiples escenarios, prever consecuencias y seleccionar la mejor alternativa basada en criterios cuantificables. Gracias a su enfoque basado en datos y técnicas matemáticas, la IO ayuda a reducir la subjetividad en la toma de decisiones y a mejorar la eficiencia operativa de las organizaciones.
    
    p #[strong Algunas de las aplicaciones más relevantes de la IO en la toma de decisiones empresariales, incluyen:]

    .bg-full-width-2.bg-fondo-2.mb-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
            
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/7.png', alt='')
          .col-lg-8
    
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/icono-1.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Gestión de la cadena de suministro
                p.text-center Diseño de turnos y distribución del trabajo de manera eficiente, para aumentar la productividad y mejorar el bienestar de los empleados.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/icono-2.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Gestión de inventarios
                p.text-center Implementación de modelos para determinar los niveles óptimos de stock y evitar, tanto el desabastecimiento como el exceso de inventario.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/icono-3.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Planificación de la producción
                p.text-center Asignación eficiente de recursos y optimización de la programación de la producción, para cumplir con la demanda y reducir los desperdicios.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/icono-4.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Optimización de rutas de transporte
                p.text-center Uso de algoritmos de búsqueda y optimización para reducir costos logísticos y tiempos de entrega, en la distribución de bienes y servicios.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/icono-5.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Programación y asignación de personal
                p.text-center Diseño de turnos y distribución del trabajo de manera eficiente, para aumentar la productividad y mejorar el bienestar de los empleados.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/icono-6.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Análisis de riesgos y simulaciones
                p.text-center Uso de modelos probabilísticos para prever impactos y desarrollar estrategias de mitigación, ante situaciones inciertas.

    .bg-full-width-2.bg-fondo-3
      .px-4.px-md-5.py-4
        .row.mb-5
          .col-lg-8
            p(data-aos="fade-left") El enfoque cuantitativo de la IO facilita la toma de decisiones estratégicas en entornos altamente competitivos y dinámicos. Al implementar herramientas de IO, las empresas pueden responder con mayor agilidad a los cambios del mercado, mejorar su eficiencia operativa y aumentar su rentabilidad.
        
            .bg-color-2.p-4
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/8.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 Además, la evolución tecnológica ha impulsado la aplicación de la IO en nuevas áreas, como la inteligencia artificial y el análisis de Big Data, permitiendo la automatización de procesos de toma de decisiones en tiempo real. Esto ha generado un impacto significativo en sectores como el comercio electrónico, la banca y la salud, donde la toma de decisiones basada en datos se ha convertido en un factor determinante para el éxito empresarial. 
        
          .col-lg-4
            figure
              img(src="@/assets/curso/tema1/9.png", data-aos="zoom-in")

        h2.mb-4 Big Data: #[strong transformación de la IO en la toma de decisiones]

        p El Big Data ha revolucionado la Investigación de Operaciones, al permitir el análisis de grandes volúmenes de datos en tiempo real. Su integración en la IO proporciona una ventaja competitiva al mejorar la precisión de los modelos predictivos y optimizar la toma de decisiones estratégicas. Las aplicaciones claves de Big Data en IO, incluyen:

        div.row.justify-content-center.align-items-stretch
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/tarjeta-1.svg"
                alt=""
                style="width: 90px"
              )
              h4.text-center.mb-4 Predicción de la demanda
              p.mb-0.text-center Análisis de patrones de consumo, para anticipar necesidades del mercado.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/tarjeta-2.svg"
                alt=""
                style="width: 90px"
              )
              h4.text-center.mb-4 Optimización en tiempo real
              p.mb-0.text-center Adaptación dinámica de estrategias operativas, frente a cambios del entorno.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/tarjeta-3.svg"
                alt=""
                style="width: 90px"
              )
              h4.text-center.mb-4 Análisis avanzado de clientes
              p.mb-0.text-center Segmentación precisa para personalizar productos y servicios.
        
    
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/tarjeta-4.svg"
                alt=""
                style="width: 90px"
              )
              h4.text-center.mb-4 Mejora de la eficiencia operativa
              p.mb-0.text-center Identificación de cuellos de botella y optimización de recursos, mediante análisis predictivos.


    h2.mb-4 Inteligencia Artificial (IA): innovación en la IO empresarial

    p La Inteligencia Artificial (IA) complementa y potencia la IO, al automatizar procesos y ofrecer capacidades avanzadas de aprendizaje y análisis. Sus aplicaciones en la toma de decisiones empresariales, incluyen:


    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-1.png")
            .col-lg-7
              h5 Automatización de decisiones
              p Sistemas que analizan grandes conjuntos de datos y toman decisiones operativas, en tiempo real.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-2.png")
            .col-lg-7
              h5 Modelos predictivos avanzados
              p Algoritmos de aprendizaje automático que identifican patrones complejos y sugieren estrategias óptimas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-3.png")
            .col-lg-7
              h5 Optimización de procesos
              p IA que ajusta continuamente operaciones para maximizar la rentabilidad y eficiencia.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-3.png")
            .col-lg-7
              h5 Gestión de riesgos
              p Herramientas que evalúan posibles escenarios y proponen planes de mitigación proactivos.
    
    p La combinación de Big Data y la Inteligencia Artificial en la Investigación de Operaciones, impulsa una toma de decisiones más ágil, precisa y estratégica. En sectores como el comercio electrónico, la banca y la salud, esta sinergia ha demostrado ser un factor determinante para el éxito empresarial, al mejorar la rentabilidad y responder eficazmente a los cambios del mercado.

    .bg-full-width.bg-color-4
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Integración del Big Data y la Inteligencia Artificial
            p.mb-4(data-aos="fade-right") La integración del Big Data y la Inteligencia Artificial (IA) está revolucionando la toma de decisiones en las organizaciones, permitiendo optimizar procesos, anticipar tendencias y mejorar la eficiencia operativa. En el PDF Integración del Big Data y la Inteligencia Artificial, se  analizan las aplicaciones clave de estas tecnologías en la Investigación de Operaciones, abordando su impacto en la optimización de la cadena de suministro, el mantenimiento predictivo, la personalización de la experiencia del cliente y la toma de decisiones estratégicas. A través de ejemplos prácticos, se explora cómo las empresas pueden aprovechar la automatización y el análisis de datos en tiempo real para obtener ventajas competitivas en un entorno dinámico y en constante evolución.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Integración del Big Data y la Inteligencia Artificial
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/10.png', alt='')
    


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=ArhP40Fwpyw" target="_blank" rel="noopener noreferrer") Rojas Lugo Mariana (2014). ¿Qué es la Investigación de Operaciones?

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
