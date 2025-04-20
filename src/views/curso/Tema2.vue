<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Introducción a los modelos de Investigación de Operaciones'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 Los modelos de Investigación de Operaciones (IO), son representaciones simplificadas de sistemas reales que permiten analizar, comprender y resolver, problemas complejos en las organizaciones. Estos modelos son fundamentales para la optimización de recursos, mejora de procesos y toma de decisiones estratégicas. Se utilizan para describir situaciones, identificar problemas y evaluar posibles soluciones.
      
      
          .bg-color-1.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/1.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Estos modelos no solo representan procesos, sino que también permiten a los tomadores de decisiones anticipar resultados, explorar diferentes escenarios y seleccionar la mejor alternativa basada en datos cuantitativos. En contextos de alta competencia y mercados dinámicos, contar con modelos efectivos, puede marcar la diferencia entre el éxito y el fracaso organizacional.
      
          p(data-aos="fade-left") A través del uso de técnicas analíticas avanzadas, simulaciones computacionales y análisis cuantitativo, los modelos de IO permiten formular estrategias óptimas que incrementan la eficiencia organizacional. Se emplean herramientas modernas como Inteligencia Artificial y Big Data, para mejorar la precisión de los resultados y adaptarse a los cambios del entorno.
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")



      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Componentes principales de un modelo en IO
      
      p La construcción de un modelo en IO, se basa en tres componentes principales:

      TabsC.color-acento-contenido.mb-5
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Decisiones" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Decisiones
              p Se usa la ecuación y= m x + b, donde m= 2 y b = 1. Se eligen dos puntos: para x =  0, y=1; para x=1, y=3. Graficando los puntos (0,1) y (1,3) y uniéndolos con una recta, se obtiene la representación de la función.
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/tab-1.png', alt='')
      
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Variables" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Variables
              p Son los factores que afectan el resultado del modelo. Pueden ser controladas (variables de decisión) o externas (parámetros). Por ejemplo, la demanda del mercado, costos de producción, tiempos de entrega y disponibilidad de recursos. La identificación precisa de estas variables es clave para garantizar resultados fiables.
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/tab-2.png', alt='')
      
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Relaciones" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Relaciones
              p Representan las conexiones entre las variables y las decisiones, a menudo mediante ecuaciones o inecuaciones. Estas relaciones describen cómo cambian los resultados cuando se alteran las decisiones o variables. Una representación clara de estas conexiones asegura que el modelo refleje adecuadamente el sistema real.
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/tab-3.png', alt='')
      

      .bg-full-width.bg-color-5.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-white Cada uno de estos componentes se interrelaciona para crear una estructura coherente que permite la simulación y el análisis de escenarios múltiples, fomentando decisiones informadas y estratégicas. 
      


      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Tipos de modelos en Investigación de Operaciones

      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
        .col-lg-8

          p(data-aos="fade-left").mb-4 Los modelos de Investigación de Operaciones (IO), son herramientas fundamentales que permiten representar, analizar y resolver problemas complejos en las organizaciones. Se clasifican principalmente en determinísticos y probabilísticos, en función del grado de certeza de las variables y parámetros involucrados (Hillier & Lieberman, 2010). Esta clasificación es esencial para elegir el enfoque adecuado al enfrentar problemas empresariales, logísticos y estratégicos.
      
          .bg-color-2.p-4(data-aos="fade-left")
            p.mb-0 Además, la comprensión y aplicación de estos modelos permite a las organizaciones mejorar la eficiencia, reducir costos y optimizar procesos. La correcta selección del tipo de modelo influye en la toma de decisiones estratégicas, adaptándose a la complejidad y naturaleza de cada problema (Taha, 2012).
      
      
      h2(data-aos="flip-up").mb-4 Modelos determinísticos

      p Los modelos determinísticos suponen que todos los datos y variables son conocidos y constantes, lo que permite obtener resultados exactos bajo las mismas condiciones iniciales (Taha, 2012).

      .row.align-items-center.mb-5
        .col-lg-8.order-2.order-lg-1
      
          LineaTiempoD.color-primario.large(data-aos="fade-right")
            div(numero="1" titulo="Características") 
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Resultados completamente predecibles y reproducibles.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | No existe incertidumbre en las variables o parámetros.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Requieren información precisa y completa.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Modelan relaciones lineales o no lineales con soluciones exactas.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | La resolución se logra mediante métodos analíticos exactos, como el método simplex o programación dinámica.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Proporcionan soluciones únicas para cada conjunto de datos.

            div(numero="2" titulo="Ejemplos de aplicación") 
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Programación lineal]. Para optimizar recursos y maximizar beneficios o minimizar costos, en procesos productivos.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Método del camino crítico (CPM)]. Planificación y control de proyectos.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Problemas de transporte y redes]. Optimización de rutas y distribución, para minimizar costos.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Asignación de recursos]. Distribución óptima en operaciones logísticas y productivas.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Planificación de la producción]. Asignación eficiente de maquinaria y mano de obra.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Diseño de redes eléctricas]. Minimización de costos en el tendido de cables.
              
              
            div(numero="3" titulo="Ventajas") 
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Genera soluciones exactas y comprobables.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Fácil interpretación y aplicación en entornos estables.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Requiere menor capacidad computacional.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Alta aplicabilidad en problemas operativos cotidianos.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Permite simulaciones rápidas para diferentes escenarios.

            div(numero="4" titulo="Limitaciones") 
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Escasa flexibilidad frente a cambios o incertidumbres.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | No adecuado para entornos dinámicos o impredecibles.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Puede simplificar excesivamente problemas complejos, ignorando elementos claves del entorno.


            div(numero="5" titulo="Aplicaciones avanzadas") 
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Optimización de carteras financieras] con rendimientos predecibles.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Planeación de la producción] en industrias manufactureras con demanda estable.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Gestión de proyectos de construcción], donde las actividades son secuenciales y predecibles.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Optimización de redes de telecomunicaciones], para reducir el tiempo de transmisión.

    
        .col-lg-4.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema2/5.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0


      h2(data-aos="flip-up").mb-4 Modelos probabilísticos

      p Los modelos probabilísticos reconocen que algunas variables son inciertas y están representadas mediante distribuciones de probabilidad. Son esenciales para tomar decisiones robustas, en entornos volátiles y complejos.

      .bg-full-width.bg-fondo-slider.mb-5#Slyder1
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slide-1.png" alt="Características de modelos probabilísticos")
              .col-lg-7
                h5 Características
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Incorporan variables aleatorias y técnicas estadísticas.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Los resultados se expresan en términos probabilísticos.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Simulan múltiples escenarios para analizar el impacto.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Aptos para situaciones donde los datos son inciertos o incompletos.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Requieren herramientas computacionales avanzadas, como simulaciones de Monte Carlo y análisis bayesiano.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Permiten la modelización de incertidumbres en parámetros clave, como costos, demanda y tiempos de entrega.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slide-2.png" alt="Ejemplos de aplicación de modelos probabilísticos")
              .col-lg-7
                h5 Ejemplos de aplicación
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Teoría de colas: Administración de tiempos de espera en servicios al cliente.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Simulaciones de Monte Carlo: Evaluación de riesgos financieros y proyecciones.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Modelos de inventario estocástico: Optimización de niveles de stock con demanda incierta.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Análisis de riesgos: Evaluación de probabilidades en proyectos e inversiones.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Gestión de cadenas de suministro: Predicción de interrupciones y variaciones en la demanda.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Optimización de redes de distribución: Evaluación de rutas logísticas, frente a riesgos operativos.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slide-3.png" alt="Ventajas de modelos probabilísticos")
              .col-lg-7
                h5 Ventajas
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Flexibilidad para adaptarse a entornos inciertos.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Permite el análisis detallado de riesgos y toma de decisiones bajo incertidumbre.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Facilita el diseño de estrategias robustas frente a escenarios adversos.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Útil para modelar procesos de negocios modernos, como marketing digital y comercio electrónico.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Mejora la capacidad de respuesta ante cambios bruscos del mercado.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slide-4.png" alt="Limitaciones de modelos probabilísticos")
              .col-lg-7
                h5 Limitaciones
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Mayor complejidad matemática y computacional.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Requiere habilidades avanzadas de estadística y simulación.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Elevados recursos computacionales para simulaciones extensas.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Resultados interpretativos que pueden ser complejos de traducir en acciones concretas.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slide-5.png" alt="Aplicaciones avanzadas de modelos probabilísticos")
              .col-lg-7
                h5 Aplicaciones avanzadas
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Optimización de portafolios de inversión, considerando la volatilidad del mercado.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Análisis de demanda en retail, adaptándose a tendencias cambiantes.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Evaluación de proyectos de inversión, en mercados internacionales con alta volatilidad.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Planificación de redes logísticas internacionales, en entornos cambiantes.


      h2(data-aos="flip-up").mb-4 Importancia en la toma de decisiones

      p La selección adecuada entre un modelo determinístico o probabilístico, influye directamente en la efectividad de las decisiones empresariales:

      TabsC.color-acento-contenido.mb-5
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Modelos determinísticos" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Modelos determinísticos
              p Se recomiendan para entornos controlados y decisiones de corto plazo, con información completa. Ideales para empresas con operaciones estables, donde los parámetros claves son predecibles.
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/tab-2-1.png', alt='')
      
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Modelos probabilísticos" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Modelos probabilísticos
              p Esenciales para mercados volátiles, permitiendo estrategias adaptativas y una gestión efectiva del riesgo. Se utilizan ampliamente en entornos tecnológicos y de innovación, donde la incertidumbre es una constante.
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/tab-2-2.png', alt='')
      

      
      
      .row.mb-5
        .col-lg-5
          figure
            img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in")
        .col-lg-7
          p(data-aos="fade-left").mb-4 Además, los modelos probabilísticos aportan un marco robusto para la gestión de riesgos financieros, planificación estratégica y operaciones globales, mientras que los determinísticos ofrecen resultados óptimos para decisiones tácticas y operativas inmediatas.
      
          .bg-color-2.p-4(data-aos="fade-left")
            p.mb-0 La comprensión profunda de ambos tipos de modelos, garantiza la formulación de estrategias empresariales robustas, alineadas con los objetivos estratégicos y adaptadas a los desafíos del entorno (Hillier & Lieberman, 2010).
      
      

      .titulo-figura.mb-2
        h5 Tabla 1. 
        span Comparación de modelos determinísticos y probabilísticos en Investigación de Operaciones 
      

      .tabla-a.color-acento-botones.mb-5 
        table
          caption Leyenda de la tabla
          thead
            tr
              th.bg-color-5.text-white Aspecto
              th.bg-color-5.text-white Modelo determinístico
              th.bg-color-5.text-white Modelo probabilístico
          tbody
            tr
              td #[strong Características]
              td
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | Variables y parámetros conocidos y constantes.
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | Resultados exactos y predecibles.
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | Relación lineal o no lineal con soluciones exactas.
                
              td
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | Incluye variables aleatorias e inciertas.
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | Resultados expresados en términos probabilísticos.
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | Simula múltiples escenarios para analizar el impacto.

            tr

              td #[strong Limitaciones]

              td
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | Soluciones exactas y comprobables.
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | Fácil interpretación en entornos estables.
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | Menor complejidad computacional.
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | Ideal para problemas operativos cotidianos.

              td
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | Flexible ante entornos inciertos.
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | Permite análisis detallado de riesgos.
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | Mejora la capacidad de respuesta ante cambios bruscos.
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | Modela procesos complejos modernos, como comercio electrónico.

            tr

              td #[strong Ejemplos sectoriales]

              td
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | Manufactura. Optimización de producción en fábricas con demanda estable.

                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | Telecomunicaciones. Diseño de redes con parámetros predecibles.

                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | Logística. Asignación eficiente de vehículos para rutas fijas.

                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | Energía. Planificación de redes eléctricas.

              td
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | Salud. Gestión de emergencias hospitalarias con flujos de pacientes inciertos.

                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | Retail. Optimización de inventarios en tiendas con demanda fluctuante.
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | Finanzas. Análisis de portafolios de inversión con riesgos variables.

                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | Transporte. Planificación de rutas en mercados volátiles.


            tr
              td #[strong Herramientas tecnológicas]
              td
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | LINGO: Para problemas de programación lineal.
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | Gurobi Optimizer. Modelos matemáticos complejos.
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | Excel Solver. Optimización básica y programación lineal.
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | CPLEX. Programación entera y mixta.
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | GeoGebra para resolver problemas de programación lineal, interpretando los resultados obtenidos.
              td
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | Python (SciPy, Pandas, NumPy). Modelado probabilístico y simulaciones.
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | R (simEd, simPop). Simulaciones estadísticas.
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | AnyLogic. Simulación de procesos en tiempo real.
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | MATLAB. Modelos estocásticos y simulaciones avanzadas.



      #t_2_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.3] Desarrollo y aplicación de modelos en problemas administrativos
      

      p La aplicación de modelos de Investigación de Operaciones (IO) en problemas administrativos, permite optimizar procesos, tomar decisiones basadas en datos y mejorar la eficiencia organizacional. A continuación, se presenta un paso a paso detallado y desarrollado para aplicar modelos determinísticos y probabilísticos, incluyendo ejemplos completos y su resolución detallada.

      .bg-full-width.bg-color-2.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              p.mb-4(data-aos="fade-right") La aplicación de modelos determinísticos y probabilísticos en la investigación de operaciones permite optimizar la toma de decisiones en diferentes contextos empresariales e industriales. En el PDF #[strong Modelos determinístico y probabilístico], se analizan casos prácticos donde se emplean estos modelos para resolver problemas de optimización en la producción y la gestión de inventarios. A través del modelo determinístico, se estudia cómo maximizar la rentabilidad en una empresa manufacturera mediante la asignación eficiente de recursos. Por otro lado, el modelo probabilístico aborda la incertidumbre en la demanda de productos, permitiendo a una tienda minorista calcular el inventario óptimo para minimizar costos y maximizar utilidades. Este material proporciona herramientas fundamentales para comprender la formulación, resolución e implementación de modelos cuantitativos en la toma de decisiones estratégicas.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Modelos determinístico y probabilístico
      
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/7.png', alt='')



      .bg-full-width-2.bg-fondo-4.mb-lg-5
        .px-4.px-md-5
          p Conclusiones generales:

          .row.justify-content-center.align-items-stretch.mb-5
            .col-lg-6.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/8.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Predicción de la demanda
                  p.mb-0 Ofrecen soluciones exactas y son ideales para entornos predecibles.
            .col-lg-6.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/9.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Modelos probabilísticos
                  p.mb-0 Permiten manejar la incertidumbre y optimizar decisiones en entornos dinámicos.

          
      



      .bg-full-width.border-top.color-primario.d-none
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=XBywDSGuKAw" target="_blank" rel="noopener noreferrer") Administración en línea. (2023). Historia del Marketing
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
