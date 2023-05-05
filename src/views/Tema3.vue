<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Indicadores de gestión

    .row.mb-5
      .col-6.col-lg-2
        figure.my-5
          img(src="@/assets/curso/temas/tema3/img1.svg", alt="alt").img1-tm3
      
      .col-lg-6
        p Los Servicios Farmacéuticos Hospitalarios, en los diferentes niveles de complejidad, despliegan una gran actividad logística para garantizar la cobertura en el suministro de medicamentos y dispositivos médicos en cada uno de los servicios con pacientes hospitalizados, incluyendo los que se encuentran en observación de urgencias y/o quirófano.  La Política de Seguridad del Paciente, implementada por las instituciones prestadoras de servicios de salud, constantemente se hace la siguiente pregunta: 
    
      .col-lg-4
        .bloque-texto-b.color-secundario.p-3
          .bloque-texto-b__texto
            b ¿Cuáles son las prácticas seguras que realmente determinan minimizar los errores en el uso de medicamentos en los pacientes hospitalizados?
   
    .row.mb-5
      p A continuación, se presentan las respuestas a este interrogante; tomar nota atenta de los aspectos más relevantes de este punto.

    .row.mb-5
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul4")
        .row(titulo="Establecer y evaluar indicadores").p-4
          .col-md-7.my-3
            p Los procesos de gestión de la calidad han de establecer y evaluar, permanentemente, indicadores que permitan la mejora continua, basados en la evidencia científica y de acuerdo con el número de incidentes y eventos adversos que se presentan.
        
          .col-md-5
            figure
              img(src="@/assets/curso/temas/tema3/img2.svg", alt="alt")

        .row(titulo="Evidencia de impactos").p-4
          .col-md-7.my-3
            p Igualmente, los indicadores les permiten demostrar el impacto que tiene la implementación de prácticas seguras en el proceso de gestión de medicamentos, desde el momento de identificar la necesidad hasta su uso racional directamente en el paciente.
        
          .col-md-5
            figure
              img(src="@/assets/curso/temas/tema3/img3.svg", alt="alt")

        .row(titulo="Indicadores aplicados a procesos varios").p-4
          .col-md-7.my-3
            p El sistema de gestión de la calidad de los servicios farmacéuticos hospitalarios, utiliza indicadores aplicados a los procesos de almacenamiento, distribución / dispensación de medicamentos; sin embargo, esto no quiere decir que en los otros procesos no se identifiquen fallos.
        
          .col-md-5
            figure
              img(src="@/assets/curso/temas/tema3/img4.svg", alt="alt")

        .row(titulo="Ejemplos de fallos (indicadores)").p-4
          .col-md-7.my-3
            p Error de llenado de carro de unidosis. Precisión del llenado de los carros de unidosis. Exactitud del proceso de preparación y distribución de pedidos de medicamentos. Confiabilidad del inventario de medicamentos en el proceso de entradas y salidas.
        
          .col-md-5
            figure
              img(src="@/assets/curso/temas/tema3/img5.svg", alt="alt")

        .row(titulo="Oportunidad").p-4
          .col-md-7.my-3
            p Para los servicios farmacéuticos y farmacias, droguerías, los indicadores se relacionan más con la oportunidad en la entrega de medicamentos y/o dispositivos médicos; el manejo de pendientes; el registro, entre otros.
        
          .col-md-5
            figure
              img(src="@/assets/curso/temas/tema3/img6.svg", alt="alt")


    separador

    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1  Orientaciones desde la normatividad

    .row.mb-5
      .col-6.col-lg-1
        figure.my-5
          img(src="@/assets/curso/temas/tema3/img7.svg", alt="alt")        

      .col-lg-11
        p Garantizar la cobertura en el suministro de medicamentos y hacer viable la Política de Seguridad del Paciente, es uno de los grandes retos de las entidades prestadoras de servicios de salud y, sin lugar a dudas, de cada funcionario, sea del sector público o privado. También estos individuos, en calidad de garantes de los servicios de salud, han de encontrar soporte en lo protocolos y la normativa vigente.

        p Estos son algunos aspectos, de la norma vigente, que usted debe tener en cuenta, como soporte fundamental de su formación en regencia de farmacia y su accionar en servicio a pacientes y usuarios:

    .row.mb-5
      TabsA.color-acento-contenido
        .tarjeta.tarjeta--azul4.p-5(titulo="Resolución 1604 de 2013")
          .row
            .col-lg-8
              p En el capítulo de la Resolución 1604 de 2013, el Ministerio de Salud y Protección Social, establece los “lineamientos que se deben tener en cuenta para dar cumplimiento al mecanismo excepcional de entrega de medicamentos en un lapso no mayor a 48 horas en el lugar de residencia o trabajo del afiliado cuando éste lo autorice…”

              b Resolución 1604 de 2013.
            
            .col-lg-4
              figure
                img(src="@/assets/curso/temas/tema3/img8.svg", alt="alt")          

        .tarjeta.tarjeta--azul4.p-5(titulo="Cabida a reclamaciones")
          .row
            .col-lg-8
              p  “…como consecuencia de la entrega incompleta de los mismos [los medicamentos] al momento de la reclamación por parte del afiliado. Se entiende que el plazo establecido de 48 horas comprende el tiempo trascurrido después que el afiliado reclama los medicamentos”.

              b Resolución 1604 de 2013.

            .col-lg-4
              figure
                img(src="@/assets/curso/temas/tema3/img9.svg", alt="alt")          

        .tarjeta.tarjeta--azul4.p-5(titulo="Manejo de pendientes")
          .row
            .col-lg-8
              p De acuerdo a la anterior resolución, el manejo de pendientes de medicamentos o dispositivos médicos, no debe exceder a 48 horas posteriores a la solicitud por parte de usuario; esto con el fin primordial que el tratamiento prescrito inicie su acción farmacológica lo más pronto posible, evitando así el recrudecimiento de la afección y/o las posibles complicaciones. 
            
            .col-lg-4
              figure
                img(src="@/assets/curso/temas/tema3/img10.svg", alt="alt")          

        .tarjeta.tarjeta--azul4.p-5(titulo="Entidades administradoras comprometidas")
          .row
            .col-lg-8
              p En conclusión, todas las #[b EAPB (Entidades Administradoras de Planes de Beneficios)] deben utilizar diferentes estrategias para el manejo de pendientes como, por ejemplo, entrega a domicilio del medicamento, lo cual no ocasiona al paciente un nuevo desplazamiento.
            
            .col-lg-4
              figure
                img(src="@/assets/curso/temas/tema3/img11.svg", alt="alt")          

        .tarjeta.tarjeta--azul4.p-5(titulo="Otros casos comunes")
          .row
            .col-lg-8
              p En los casos de pacientes con enfermedades crónicas no transmisibles (hipertensos, diabéticos, etc.), se realizará la valoración por el médico o enfermera del programa y si se encuentra controlada, se podrá prescribir fórmulas hasta para los tres (3) meses siguientes, vale la pena aclarar que la entrega de los medicamentos será mensual.
            
            .col-lg-4
              figure
                img(src="@/assets/curso/temas/tema3/img12.svg", alt="alt")          


    separador

    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2  Principios del servicio farmacéutico

    .row.mb-5
      .col-6.col-lg-1
        figure
          img(src="@/assets/curso/temas/tema3/img13.svg", alt="alt")        

      .col-lg-11
        p Todo servicio farmacéutico ha de tener como guía permanente de sus actividades, los 
          spam.texto-azul #[b principios del servicio farmacéutico.]  
          |  Se trata de un compendio de criterios y orientaciones que favorecen el cumplimiento de la misión tanto en la atención como en el impacto sobre los pacientes, usuarios, familias y comunidad. Fueron establecidos en la resolución 1403 de 2007, artículo 4.

    .tarjeta.color-secundario.p-4.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-2
          img(src="@/assets/curso/temas/tema3/img14.svg").img14-tm3
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mt-3.texto-blanco Para conocer los principios del servicio farmacéutico, familiarizarse con ellos y hacer una asimilación conceptual de los mismos, en esta etapa de su proceso formativo, le invitamos a visitar el siguiente archivo. 
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span.texto-negro Descargar
                i.texto-negro.fas.fa-file-download





</template>

<script>
export default {
  name: 'Tema3',
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
