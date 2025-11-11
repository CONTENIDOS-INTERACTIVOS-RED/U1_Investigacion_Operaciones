<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Metodología de la Investigación de Operaciones'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      
      .bg-color-2.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema3/1.png', alt='')
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") La metodología de la Investigación de Operaciones (IO), ofrece un marco detallado y sistemático para resolver problemas organizacionales complejos. Esta metodología se basa en el método científico, lo que garantiza que las soluciones propuestas sean objetivas, replicables y eficaces. A continuación, se describen en profundidad, las fases del proceso, sin el uso de software especializado, para enfatizar el razonamiento y los métodos analíticos tradicionales.



      #t_3_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.1] Fases del proceso de Investigación de Operaciones


      p Cada fase se presenta con mayor detalle, explicando conceptos clave, actividades específicas, herramientas analíticas y ejemplos prácticos para su comprensión y aplicación.

      .row.align-items-center.mb-5#lineaTiempo1
        .col-lg-8.order-2.order-lg-1
      
          LineaTiempoD.color-primario.large(data-aos="fade-right")
            div(numero="1" titulo="Fase 1")
              h5.mb-3 Definición y formulación del problema.
              ul.lista-ul--color.color-dark.mb-4
                li.mb-3
                  i.fas.fa-arrow-circle-right
                  | #[strong Objetivo.] Comprender a fondo el problema organizacional, sus causas, consecuencias y delimitarlo adecuadamente.

                li.mb-3
                  i.fas.fa-arrow-circle-right
                  | #[strong Actividades claves:]
                  ul.ps-3.mt-1
                    li 
                      i.fas.fa-dot-circle
                      | Realización de entrevistas con partes interesadas.
                    li
                      i.fas.fa-dot-circle
                      | Identificación clara de objetivos, restricciones y criterios de éxito.
                    li
                      i.fas.fa-dot-circle
                      | Análisis de procesos existentes y recopilación de datos históricos.

                li.mb-3
                  i.fas.fa-arrow-circle-right
                  | #[strong Herramientas analíticas.] Diagramas de flujo, mapas de procesos, árbol de problemas.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Ejemplo detallado.] Una cadena de supermercados detecta altos costos logísticos. Después de entrevistas y análisis de procesos, se identifica que el problema radica en rutas de distribución ineficientes y horarios poco optimizados.

            div(numero="2" titulo="Fase 2")
              h5.mb-3 Modelación del problema.
              ul.lista-ul--color.color-dark.mb-4
                li.mb-3
                  i.fas.fa-arrow-circle-right
                  | #[strong Objetivo.] Crear un modelo matemático o lógico que represente la situación real.

                li.mb-3
                  i.fas.fa-arrow-circle-right
                  | #[strong Actividades claves:]
                  ul.ps-3.mt-1
                    li 
                      i.fas.fa-dot-circle
                      | Definición de variables de decisión (por ejemplo, número de camiones, horarios de entrega).
                    li
                      i.fas.fa-dot-circle
                      | Formulación de la función objetivo (minimización de costos o maximización de eficiencia).
                    li
                      i.fas.fa-dot-circle
                      | Establecimiento de restricciones (capacidad de almacenamiento, horarios laborales, demanda diaria).

                li.mb-3
                  i.fas.fa-arrow-circle-right
                  | #[strong Herramientas analíticas.] Ecuaciones matemáticas, diagramas causa-efecto.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Ejemplo detallado.] Modelar un problema de asignación de rutas para reducir el consumo de combustible, definiendo la función objetivo como la minimización de kilómetros recorridos.

            div(numero="3" titulo="Fase 3")
              h5.mb-3 Búsqueda y evaluación de alternativas de solución.
              ul.lista-ul--color.color-dark.mb-4
                li.mb-3
                  i.fas.fa-arrow-circle-right
                  | #[strong Objetivo.] Identificar, evaluar y seleccionar las mejores alternativas de solución.

                li.mb-3
                  i.fas.fa-arrow-circle-right
                  | #[strong Actividades claves:]
                  ul.ps-3.mt-1
                    li 
                      i.fas.fa-dot-circle
                      | Generación de diferentes estrategias para abordar el problema.
                    li
                      i.fas.fa-dot-circle
                      | Evaluación de alternativas mediante criterios establecidos (costo, tiempo, factibilidad).
                    li
                      i.fas.fa-dot-circle
                      | Comparación y priorización de soluciones mediante análisis multicriterio.

                li.mb-3
                  i.fas.fa-arrow-circle-right
                  | #[strong Herramientas analíticas.] Matriz de decisión, análisis costo-beneficio.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Ejemplo detallado.] Evaluar diferentes combinaciones de rutas de distribución y tiempos de entrega para reducir costos logísticos.

        .col-lg-4.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema3/2.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      

      .row.align-items-center.mb-5#lineaTiempo1
        .col-lg-8.order-2
      
          LineaTiempoD.color-primario.large(data-aos="fade-right")
            div(numero="4" titulo="Fase 4")
              h5.mb-3 Validación del modelo y pruebas de sensibilidad.
              ul.lista-ul--color.color-dark.mb-4
                li.mb-3
                  i.fas.fa-arrow-circle-right
                  | #[strong Objetivo.] Comprobar que el modelo representa fielmente la situación real y es robusto ante variaciones en los datos.

                li.mb-3
                  i.fas.fa-arrow-circle-right
                  | #[strong Actividades claves:]
                  ul.ps-3.mt-1
                    li 
                      i.fas.fa-dot-circle
                      | Comparación de los resultados del modelo con datos históricos.
                    li
                      i.fas.fa-dot-circle
                      | Análisis de sensibilidad para probar la robustez del modelo.
                    li
                      i.fas.fa-dot-circle
                      | Ajuste del modelo si se detectan desviaciones significativas.

                li.mb-3
                  i.fas.fa-arrow-circle-right
                  | #[strong Herramientas analíticas.] Pruebas de consistencia, evaluación de escenarios.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Ejemplo detallado.] Validar el modelo de rutas calculando si las soluciones propuestas reducen los costos operativos en un 10 % como se había estimado.

            div(numero="5" titulo="Fase 5")
              h5.mb-3 Implementación, seguimiento y mejora continua.
              ul.lista-ul--color.color-dark.mb-4
                li.mb-3
                  i.fas.fa-arrow-circle-right
                  | #[strong Objetivo.] Aplicar la solución en el entorno real y monitorear su efectividad para realizar mejoras continuas.

                li.mb-3
                  i.fas.fa-arrow-circle-right
                  | #[strong Actividades claves:]
                  ul.ps-3.mt-1
                    li 
                      i.fas.fa-dot-circle
                      | Desarrollo de un plan de acción detallado.
                    li
                      i.fas.fa-dot-circle
                      | Capacitación a las partes involucradas.
                    li
                      i.fas.fa-dot-circle
                      | Evaluación de resultados obtenidos y actualización del modelo ante nuevas condiciones.

                li.mb-3
                  i.fas.fa-arrow-circle-right
                  | #[strong Herramientas analíticas.] Indicadores de rendimiento, informes de seguimiento.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Ejemplo detallado.] Implementar nuevas rutas logísticas y monitorear semanalmente los costos para confirmar que la reducción proyectada se cumple.

        .col-lg-4.order-1
          figure
            img(src="@/assets/curso/tema3/4.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      
      
      #t_3_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.2] Uso del método científico en la resolución de problemas organizacionales


      p El método científico se aplica para garantizar soluciones basadas en datos, eliminando suposiciones subjetivas.

      p El desarrollo del método científico en IO, es:

      .bg-full-width.bg-fondo-5
        .px-4.px-md-5.pb-md-3
          .row.justify-content-center.mb-5
            .col-lg-8
      
              SlyderF(columnas="col-12 col-lg-6")
                .bordes.bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/5.svg' alt='Observación' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Observación
                  p.text-center Recopilación sistemática de datos sobre el problema.
                  p.text-center.mb-0 #[strong Ejemplo.] La empresa observa que los camiones regresan con espacio no utilizado.

                .bordes.bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/6.svg' alt='Formulación de hipótesis' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Formulación de hipótesis
                  p.text-center Planteamiento de explicaciones o soluciones potenciales.
                  p.text-center.mb-0 #[strong Ejemplo.] "Optimizar el llenado de los camiones reducirá el número de viajes semanales".

                .bordes.bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/7.svg' alt='Experimentación' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Experimentación
                  p.text-center Pruebas y experimentos controlados sin software, utilizando cálculos manuales.
                  p.text-center.mb-0 #[strong Ejemplo.] Ajustar manualmente el plan de carga y medir los cambios en los costos semanales.

                .bordes.bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/8.svg' alt='Análisis de Resultados' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Análisis de Resultados
                  p.text-center Evaluar los datos obtenidos frente a la hipótesis inicial.
                  p.text-center.mb-0 #[strong Ejemplo.] Comprobar si la reducción en el número de viajes se traduce en disminuciones de costos.

                .bordes.bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/9.svg' alt='Conclusión' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Conclusión
                  p.text-center Validar o reformular la hipótesis inicial.
                  p.text-center.mb-0 #[strong Ejemplo.] Si los resultados son positivos, formalizar la estrategia de carga optimizada.

                .bordes.bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/10.svg' alt='Comunicación y retroalimentación' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Comunicación y retroalimentación
                  p.text-center Presentar resultados y recibir comentarios para futuras mejoras.
      
            .col-lg-4
              figure
                img(src='@/assets/curso/tema3/11.png', alt='')
      
      .bg-full-width.bg-color-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-white #[b Recuerde:] 
              p.mb-0.text-white La metodología de Investigación de Operaciones, fundamentada en el método científico, ofrece una estructura sólida para abordar y resolver problemas administrativos complejos. El desarrollo básico de cada fase refuerza el entendimiento profundo de los procesos involucrados y garantiza soluciones prácticas y sostenibles. 
      

      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/39452" target="_blank" rel="noopener noreferrer") Martínez Salazar, I. A. & Vértiz Camarón, G. (2015). Investigaciones de operaciones: ( ed.). Grupo Editorial Patria.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=syAglylSd7c" target="_blank" rel="noopener noreferrer") Acercar Ingeniería (2014, 7 de julio). Entrevista Jorge Vera - Jefe de Programa - Investigación Operativa [Video]. YouTube.

              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.desmos.com/?lang=es" target="_blank" rel="noopener noreferrer") Desmos - Simulaciones de optimización.
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              ' ¿Qué beneficios ofrece la aplicación de modelos probabilísticos en la Investigación de Operaciones?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Generan resultados exactos en entornos predecibles.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Analizan escenarios inciertos y permiten una toma de decisiones flexible.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Eliminan la necesidad de herramientas computacionales.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Se utilizan únicamente en el sector financiero.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              'La programación lineal se utiliza exclusivamente para resolver problemas de maximización.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'Completa el texto: "La Investigación de Operaciones utiliza ____________ para analizar problemas administrativos, aplica ____________ para evaluar decisiones y se apoya en ____________ para representar situaciones complejas."',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Modelos matemáticos, técnicas estadísticas, simulaciones computacionales',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Técnicas estadísticas, simulaciones computacionales, modelos matemáticos',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Simulaciones computacionales, eficiencia operativa, recursos humanos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Procesos administrativos, desarrollo de productos, clientes estratégicos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'A cuál fase corresponde la siguiente descripción: "Se desarrolla un modelo matemático para representar la situación real y se evalúa su precisión"?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Modelación',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Validación',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Implementación',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Análisis',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              'A cuál fase corresponde la siguiente descripción: "Se desarrolla un plan de acción para aplicar la solución y se evalúa su efectividad"?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Implementación',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Validación',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Modelación',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Análisis',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
