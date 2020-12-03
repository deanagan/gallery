<template>
  <div class="home">
    <div class="reveal">
      <div class="slides">
        <section
          v-for="place in getPlaces"
          :key="place"
          data-background-image="@/assets/logo.png"
        >
          <b-card-group deck>
            <div v-for="pic in place.images" :key="pic">
              <div>
                <b-card
                  v-bind:title="pic.title"
                  v-bind:img-src="pic.image"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                >
                  <b-card-text>{{ pic.description }} </b-card-text>
                </b-card>
              </div>
            </div>
          </b-card-group>
        </section>

        <!-- <div class="reveal">
      <div class="slides">
        <section
          v-for="place in getPlaces"
          :key="place"
          data-background-image="@/assets/logo.png"
        >
          {{ place.description }}

          <div class="image_block">
            <div class="row" v-if="place.images">
              <div class="column" v-for="pic in place.images" :key="pic">
                <img v-if="pic.image" v-bind:src="pic.image" />
                <div class="text-block">
                  <p>{{ pic.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </section> -->
      </div>
    </div>
  </div>
</template>

<script>
import Reveal from "reveal.js/dist/reveal";

export default {
  data() {
    return {
      getPlaces: {
        1: {
          description: "Chicago",
          images: [
            {
              title: "Photo",
              image: require("@/assets/chicago/jordan.jpg"),
              description: "Michael Jordan's Statue"
            },
            {
              title: "Photo",
              image: require("@/assets/chicago/skyline.jpg"),
              description: "Chicago Skyline"
            }
          ]
        },
        2: {
          description: "San Francisco",
          images: [
            {
              title: "Photo",
              image: require("@/assets/sanfrancisco/crooked-street.jpg"),
              description: "Lombard Street"
            },
            {
              title: "Photo",
              image: require("@/assets/sanfrancisco/tram.jpg"),
              description: "Trams"
            },
            {
              title: "Photo",
              image: require("@/assets/sanfrancisco/wharf.jpg"),
              description: "Wharf"
            }
          ]
        },
        3: {
          description: "Niagara Falls",
          images: [
            {
              title: "Photo",
              image: require("@/assets/niagara/maidofmist.jpg"),
              description: "Maid of the Mist"
            },
            {
              title: "Photo",
              image: require("@/assets/niagara/mistwalk.jpg"),
              description: "Mist Walk"
            },
            {
              title: "Photo",
              image: require("@/assets/niagara/nightfalls.jpg"),
              description: "Niagara at Night"
            },
            {
              title: "Photo",
              image: require("@/assets/niagara/terrapin.jpg"),
              description: "Terrapin Point"
            }
          ]
        }
      }
    };
  },
  components: {},
  mounted() {
    if (window.location.search.match(/print-pdf/gi)) {
      var link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = "../../node_modules/reveal.js/dist/print/pdf.css";
      document.getElementsByTagName("head")[0].appendChild(link);
    }

    Reveal.initialize({
      hash: true,

      // Learn about plugins: https:/revealjs.com/plugins/
      // plugins: [ RevealMarkdown, RevealHighlight, RevealNotes ],
      dependencies: [],
      width: 1280,
      height: 720,
      pdfSeparateFragments: false,
      pdfMaxPagesPerSlide: 1
    });
  }
};
</script>

<style scoped>
@import url("../../node_modules/reveal.js/dist/reveal.css");
@import url("../../node_modules/reveal.js/dist/theme/white.css");

@import "../../node_modules/bootstrap/dist/css/bootstrap.css";
@import "../../node_modules/bootstrap-vue/dist/bootstrap-vue.css";

.slideformat {
  padding: 20px;
}

.home {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  height: 100vh;
  padding-bottom: 50px;
}

.md_card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}

.md-card-content {
  text-align: center;
}

/* Three image containers (use 25% for four, and 50% for two, etc) */
.reveal .slides .row {
  display: flex-basis;
}

.reveal .slides .column {
  flex: 25%;
  padding: 2px;
}

.reveal .slides .image_block {
  padding: 5px;
  height: 400px;
  /* background: #eee; */
  display: flex;
}
.reveal .slides .image_block div {
  margin: auto;
}
.reveal .slides .image_block div img {
  max-width: 320px;
  max-height: 400px;
}
.reveal section img {
  border: none;
}
/* Bottom right text */
.reveal .text-block p {
  top: 5px;
  bottom: 20px;
  right: 20px;
  font-size: 0.4em;
  background-color: transparent;
  color: white;
  padding: 2px;
  margin: 0px, 0;
}
</style>
