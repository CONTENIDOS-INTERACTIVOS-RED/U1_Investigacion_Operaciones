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
    

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.

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
