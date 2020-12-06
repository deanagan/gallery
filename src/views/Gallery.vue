<template>
  <div class="gallery">
    <div class="reveal">
      <div class="slides">
        <section v-for="(pets, index) in getPets" :key="index">
          <div>
            <b-card-group columns>
              <b-card
                v-bind:title="pets.description"
                title-tag="h5"
                v-bind:img-src="pets.images[0].image"
                img-alt="Image"
                img-top
              >
                <b-card-text text-tag="h6">
                  <p>{{ pets.funFact }}</p>
                </b-card-text>
              </b-card>

              <!-- spacer only -->
              <b-card>
                <div class=".px-2"></div>
              </b-card>

              <b-card v-bind:header="pets.header" header-tag="h5">
                <blockquote class="blockquote mb-0" header-tag="h6">
                  <p>
                    {{ pets.petSpeed }}
                  </p>
                  <footer class="blockquote-footer">
                    {{ pets.fastestHuman }}
                    <cite title="Source Title">Wikipedia</cite>
                  </footer>
                </blockquote>
              </b-card>

              <b-card
                v-bind:title="pets.funFact2"
                title-tag="h6"
                v-bind:img-src="pets.images[1].image"
                img-alt="Image"
                img-top
              >
                <b-card-text text-tag="h6">
                  {{ pets.funFact2Text }}
                </b-card-text>
              </b-card>

              <b-card>
                <b-card-title>Title</b-card-title>
                <b-card-text text-tag="h6">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </b-card-text>
                <b-card-text class="small text-muted" text-tag="h6"
                  >Last updated 3 mins ago</b-card-text
                >
              </b-card>

              <b-card
                img-src="https://picsum.photos/400/200/?image=41"
                img-alt="Image"
                img-top
              >
                <b-card-text text-tag="h6">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first.
                </b-card-text>
              </b-card>
            </b-card-group>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Reveal from "reveal.js/dist/reveal";

export default {
  data() {
    return {
      getCompanyLogo: require("@/assets/company.png"),
      getLogo: require("@/assets/logo.png"),
      getPets: {
        1: {
          header: "Cat Fact!",
          petSpeed: "Cats can run up to 48.28 kilometers per hour!",
          fastestHuman: "Usain Bolt was clocked at 44.72km/h, ",
          description: "Cats are well known for their playful nature.",
          funFact:
            "Cats have more bones than humans - many of which are in their tail!",
          funFact2: "Cats sleep up to 18 hours a day",
          funFact2Text:
            "Cats are one of the top sleepers in the animal kingdom, spending about 16 to 20 hours a day sleeping irrespective of their ages.",
          images: [
            {
              title: "Scratchie",
              image: require("@/assets/cats/cat1.png"),
              description: "Always curious."
            },
            {
              title: "Phineas",
              image: require("@/assets/cats/cat2.png"),
              description: "Smart and playful"
            },
            {
              title: "Flynn",
              image: require("@/assets/cats/cat3.png"),
              description: "Playful"
            },
            {
              title: "Greg",
              image: require("@/assets/cats/cat4.png"),
              description: "Quick and Agile"
            }
          ]
        },
        2: {
          description: "Dogs, man's best friend.",
          images: [
            {
              title: "Abby",
              image: require("@/assets/dogs/dog1.png"),
              description: "Always sleep but always happy."
            },
            {
              title: "Trixie and Ferb",
              image: require("@/assets/dogs/dog2.png"),
              description: "Dynamic duo, playful."
            },
            {
              title: "Coco",
              image: require("@/assets/dogs/dog3.png"),
              description: "Smart and obedient."
            },
            {
              title: "Shelby",
              image: require("@/assets/dogs/dog4.png"),
              description: "Loyal."
            },
            {
              title: "Penny",
              image: require("@/assets/dogs/dog5.png"),
              description: "Cheeky."
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
      width: 960,
      height: 700,
      pdfSeparateFragments: false,
      pdfMaxPagesPerSlide: 1,
      embedded: false,
      center: true
    });
  }
};
</script>

<style scoped>
@import url("../../node_modules/reveal.js/dist/reveal.css");
@import url("../../node_modules/reveal.js/dist/theme/white.css");

@import url("../../node_modules/bootstrap/dist/css/bootstrap.css");
@import url("../../node_modules/bootstrap-vue/dist/bootstrap-vue.css");

.gallery {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  height: 100vh;
  width: 100vw;
  margin-left: 0px;
  border-left: 0px;
  padding-bottom: 30px;
  max-width: 100%;
}

.reveal h6 {
  text-transform: none;
}
.reveal p {
  text-align: center;
}

.reveal .print-pdf .stretch {
  max-width: 100%;
  max-height: 100%;
}

.card-body {
  padding-top: 0;
  padding-left: 2px;
  padding-right: 2px;
}
</style>
