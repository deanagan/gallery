<template>
  <section data-background-color="aquamarine">
    <b-card-group deck>
      <b-col>
        <b-card
          img-src="https://picsum.photos/300/300/?image=41"
          img-alt="Image"
          img-height="250px"
        >
        </b-card>
        <b-card
          img-src="https://picsum.photos/300/300/?image=41"
          img-alt="Image"
          img-height="250px"
        >
        </b-card>
      </b-col>

      <b-card img-src="https://picsum.photos/300/300/?image=41" img-alt="Image">
      </b-card>
    </b-card-group>
  </section>
</template>

<style scoped>
@import url("../../node_modules/bootstrap/dist/css/bootstrap.css");
@import url("../../node_modules/bootstrap-vue/dist/bootstrap-vue.css");

.card {
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
}
</style>
