<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p El servicio al cliente debe considerar la satisfacción del usuario, las técnicas de servicio, los indicadores de gestión, la gestión integral de residuos de salud y el plan post consumo. Estos aspectos son fundamentales para brindar un servicio de calidad y garantizar la satisfacción del usuario. Asimismo, se destacan los principios éticos y el manejo adecuado de la información en el contexto de los servicios farmacéuticos. Establecer y evaluar indicadores es esencial para medir el desempeño y mejorar la calidad del servicio.

    p.mb-5 En resumen, el mapa conceptual presenta los elementos clave relacionados con la evaluación de la satisfacción del usuario en los servicios farmacéuticos, abordando aspectos como la atención al cliente, la entrega de productos, la gestión de residuos, los principios éticos y el manejo de la información, así como la importancia de establecer indicadores y principios del servicio. Este componente formativo profundiza en estos temas relevantes, los cuales se pueden apreciar en el siguiente esquema.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Resumes que a través del mapa conceptual se hace sobre los temas abordados en el componente formativo, para este caso se presentaron los elementos principales que tienen que ver con la evaluación de la satisfacción del cliente en el servicio farmacéutico.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
