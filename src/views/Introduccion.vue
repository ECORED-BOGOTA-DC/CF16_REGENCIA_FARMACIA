<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-5
      .col-lg-8
        p El uso racional de medicamentos y dispositivos médicos es una responsabilidad no sólo del sector farmacéutico, sino de todos los actores del sistema general de salud; por tanto, la atención oportuna y segura durante la prescripción, dispensación y/o venta de medicamentos, productos cosméticos y dispositivos médicos, se relaciona directamente con las necesidades individuales y colectivas en un territorio especifico.

        p En Colombia, se evidencia la inadecuada propagación de la automedicación y la venta de medicamentos sin prescripción médica, como una acción ligada a la tradición cultural; en este sentido el suministrador de tiendas y droguerías recomienda el uso indiscriminado de medicamentos, al igual que es muy común la recomendación por parte de familiares y amigos o vecinos.

      .col-lg-4
        figure.my-4
          img(src="@/assets/curso/temas/introduccion/img1.svg", alt="alt") 


    .row.mb-5
      .col-lg-2
        figure.my-4
          img(src="@/assets/curso/temas/introduccion/img2.png", alt="alt") 

      .col-lg-10.mb-5
        p  Por todo lo anterior, se hace necesario priorizar estrategias orientadas al fomento de la cultura del uso adecuado de los medicamentos, la adherencia al tratamiento médico y la correcta disposición final de los medicamentos parcialmente utilizados o vencidos, tanto de uso humano como veterinario; esto con el fin de disminuir en parte  la resistencia a los antibióticos, las futuras alergias medicamentosas y la contaminación ambiental, situación que en el marco de la  salud pública, representa un alto grado de  alarma en Colombia y en el Mundo.

        p Un punto de partida clave es la segura dispensación, informada y la atención satisfactoria en la entrega de productos farmacéuticos según protocolos y normatividad legal vigente.

      p ¡Muchos éxitos en este proceso de aprendizaje!

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
