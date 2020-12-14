<template>
  <section>
    <b-card-group deck>
      <b-col>
        <b-card
          v-bind:img-src="character.img"
          img-alt="Image"
          img-height="250px"
          v-bind:title="character.description"
          title-tag="h5"
        >
        </b-card>
        <b-card
          v-bind:img-src="ship.img"
          img-alt="Image"
          img-height="250px"
          v-bind:title="ship.description"
          title-tag="h5"
        >
        </b-card>
      </b-col>

      <b-card
        v-bind:img-src="collage.img"
        img-alt="Image"
        v-bind:title="collage.description"
        title-tag="h5"
      >
      </b-card>
    </b-card-group>
  </section>
</template>

<script>
export default {
  props: ["character", "ship", "collage"]
};
</script>

<style scoped>
@import url("../../node_modules/bootstrap/dist/css/bootstrap.css");
@import url("../../node_modules/bootstrap-vue/dist/bootstrap-vue.css");

.card {
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border: none;
}
</style>
