<template>
  <b-container fluid>
    <div class="report">
      <div class="reveal">
        <div class="slides">
          <section
            v-for="(place, index) in getPlaces"
            :key="index"
            v-bind:data-background="getSlideBackground"
            data-background-size="100%"
          >
            <b-card-group columns>
              <div v-for="(pic, index) in place.images" :key="index">
                <div>
                  <b-card
                    v-bind:title="pic.title"
                    title-tag="h6"
                    v-bind:img-src="pic.image"
                    img-alt="Image"
                    style="max-width: 20rem;"
                    class="pl-3 mb-2 lb-0 bg-info"
                    align="left"
                  >
                    <b-card-text text-tag="h6"
                      >{{ pic.description }}
                    </b-card-text>
                  </b-card>
                </div>
              </div>
            </b-card-group>
          </section>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import Reveal from "reveal.js/dist/reveal";

export default {
  data() {
    return {
      getSlideBackground: require("@/assets/background.jpg"),
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
      width: 1060,
      height: 700,
      pdfSeparateFragments: false,
      pdfMaxPagesPerSlide: 1,
      embedded: true,
      center: true
    });
  }
};
</script>

<style scoped>
@import url("../../node_modules/reveal.js/dist/reveal.css");
@import url("../../node_modules/reveal.js/dist/theme/black.css");

@import url("../../node_modules/bootstrap/dist/css/bootstrap.css");
@import url("../../node_modules/bootstrap-vue/dist/bootstrap-vue.css");

.report {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  height: 100vh;
  width: 1000px;
  margin-left: 0px;
  border-left: 0px;
  padding-bottom: 10px;
}

.reveal h6 {
  text-transform: none;
}
</style>
