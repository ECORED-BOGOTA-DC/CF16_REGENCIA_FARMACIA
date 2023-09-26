<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Plan post consumo
    .row.justify-content-center.aling-items-center 
      figure(data-aos="fade-down")
        img(src="@/assets/curso/temas/tema5/img1.png", alt="Imágen decorativa") 
      p.mt-5(data-aos="fade-right") Cuando se presenta la situación de vencimiento o de utilización parcial de medicamentos e insumos médicos, es responsabilidad de la entidad, bien sea clínica, farmacia, centro de salud, laboratorio, etc., establecer el denominado protocolo o plan post consumo.
      p(data-aos="fade-right") Los planes post consumo de medicamentos vencidos incluyen mecanismos que deben cumplir con requisitos técnicos y de seguridad, para asegurar que los residuos sean manejados de forma segura y adecuada. Como los que se mencionan a continuación:
    .row.mt-5.tema5-bg1.p-4
      .col-8.col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/tema5/img2.png", alt="Imágen decorativa") 
      .col-lg-9.mt-5(data-aos="fade-left")
        ul.lista-ul--color.fa-ul2
          li 
            i.fas.fa-check
            | Contenedores seguros instalados en droguerías, IPS o centros comerciales, almacenes de grandes superficies. En la actualidad los más reconocidos son PUNTO AZUL y REMEDIAR.
          li 
            i.fas.fa-check
            | Recolección directa en centros de bienestar del adulto mayor. Recolección directa por parte del proveedor de los medicamentos.
          li 
            i.fas.fa-check
            | Recolección domiciliaria del residuo en los mismos vehículos que distribuyen el producto (ej. gases medicinales).
          li 
            i.fas.fa-check
            | Reunir los medicamentos vencidos, empaques y cajas, frascos y ampolletas en una bolsa resistente, preferiblemente de color rojo.
          li 
            i.fas.fa-check
            | Verificar que frascos y envases que contengan líquidos estén bien cerrados. Destruir parcialmente las etiquetas, cajas y marcas para evitar su falsificación.
          li 
            i.fas.fa-check
            | Revisar que no se encuentren mezclados los residuos post consumo con otros residuos, especialmente aquellos que no pueden ser entregados en los puntos de recolección.
          li 
            i.fas.fa-check
            | Deposite los residuos en el contenedor, verificando que pasen por el sistema de protección para evitar que sean extraídos y posteriormente falsificados.
          li 
            i.fas.fa-check
            | Si la bolsa en la que transportó los residuos tiene líquidos o sólidos relacionados con los medicamentos, se debe depositar también la bolsa, en caso contrario  se puede depositar en un contenedor para residuos de plástico que pueden ser reciclados.
    .row.my-5
      p(data-aos="fade-right") Para conocer otros aspectos de suma importancia, relativos al plan post consumo, se debe visualizar el siguiente recurso didáctico:
    .tarjeta.tarjeta--azul.p-4.tema5-bg2(data-aos="fade-down")
      SlyderA(tipo="b")
        .row
          .col-lg-6.mb-4.mb-lg-0
            p De acuerdo a la Resolución 0371 de 2009 “Por la cual se establecen los elementos que deben ser considerados en los Planes de Gestión de Devolución de Productos Posconsumo de Fármacos o Medicamentos Vencidos”; se generan los planes post consumo de  medicamentos de uso humano o veterinario, que se encuentran vencidos o parcialmente utilizados.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema5/img3.png', alt='Imágen decorativa' style="width:450px").m-auto
        .row
          .col-lg-6.mb-4.mb-lg-0
            p Los planes post consumo se desarrollan como parte de la responsabilidad social empresarial de los laboratorios productores, los cuales incluyen también los homeopáticos y fitoterapéuticos.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema5/img4.png', alt='Imágen decorativa' style="width:450px").m-auto
        .row
          .col-lg-6.mb-4.mb-lg-0
            p <b>Se consideran residuos por estar vencidos o parcialmente utilizados:</b> envases, empaques, cajas, frascos, ampolletas, medicamentos cuya fecha de vencimiento ya expiró, medicamentos parcialmente consumidos, inhaladores.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema5/img5.png', alt='Imágen decorativa' style="width:450px").m-auto
        .row
          .col-lg-6.mb-4.mb-lg-0
            p <b>No están contemplados en el plan post consumo:</b> jeringas, agujas, cuchillas y demás elementos corto punzantes. Residuos de gasas, algodones, telas, curaciones, residuos con riesgo biológico o infeccioso (restos de tejidos, fluidos corporales). Residuos que no están relacionados con medicamentos (empaques de jabones, frascos de champú, latas de plaguicidas domésticos).
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema5/img6.png', alt='Imágen decorativa' style="width:450px").m-auto
        .row
          .col-lg-6.mb-4.mb-lg-0
            p <b>En el artículo 13 de la Resolución 0371 – Prohibiciones”, se aclara que ninguna persona podrá:</b> desechar los fármacos o medicamentos vencidos en rellenos sanitarios. Entregar los fármacos o medicamentos vencidos para la disposición final  a personas o empresas que no cuente con las licencias o permisos ambientales. Ubicar centros de acopio en zonas residenciales.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema5/img7.png', alt='Imágen decorativa' style="width:450px").m-auto
        .row
          .col-lg-6.mb-4.mb-lg-0
            p <b>Ni podrá:</b> abandonar fármacos o medicamentos vencidos a cielo abierto tanto en zonas urbanas como rurales. Quemar fármacos o medicamentos vencidos. Verter fármacos o medicamentos vencidos a cuerpos de agua, sistemas de alcantarillado público, terrenos baldíos o cualquier otro sitio no autorizado.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema5/img8.png', alt='Imágen decorativa' style="width:450px").m-auto

</template>

<script>
export default {
  name: 'Tema5',
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
