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
                  <footer v-if="pets.factSource" class="blockquote-footer">
                    {{ pets.fastestHuman }}
                    <cite title="Source Title">{{ pets.factSource }}</cite>
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
                <b-card-title title-tag="h5">{{ pets.funFact3 }}</b-card-title>
                <b-card-text text-tag="h6">
                  {{ pets.funFact3Detail }}
                </b-card-text>
                <b-card-text class="text-muted" text-tag="h6">{{
                  pets.funFact3Source
                }}</b-card-text>
              </b-card>

              <b-card
                v-bind:img-src="pets.images[2].image"
                img-alt="Image"
                img-top
              >
                <b-card-text text-tag="h6">
                  {{ pets.funFact4 }}
                </b-card-text>
              </b-card>
              <b-card
                v-if="pets.images[3]"
                v-bind:img-src="pets.images[3].image"
                img-alt="Image"
                img-top
              >
                <b-card-text text-tag="h6">
                  {{ pets.funFact4 }}
                </b-card-text>
              </b-card>
            </b-card-group>
          </div>
        </section>

        <Content
          v-bind:character="content.character"
          v-bind:ship="content.ship"
          v-bind:collage="content.collage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Reveal from "reveal.js/dist/reveal";
import Content from "@/components/Content";

export default {
  data() {
    return {
      content: {
        character: {
          img: require("@/assets/images/char1.png"),
          description: "character"
        },
        ship: {
          img: require("@/assets/images/ship1.png"),
          description: "character"
        },
        collage: {
          img: require("@/assets/images/collage1.png"),
          description: "character"
        }
      },
      getCompanyLogo: require("@/assets/company.png"),
      getLogo: require("@/assets/logo.png"),
      getPets: {
        1: {
          header: "Cat Fact!",
          petSpeed: "Cats can run up to 48.28 kilometers per hour!",
          fastestHuman: "Usain Bolt was clocked at 44.72km/h",
          factSource: "World Records",
          description: "Cats are well known for their playful nature.",
          funFact:
            "Cats have more bones than humans - many of which are in their tail!",
          funFact2: "Cats sleep up to 18 hours a day",
          funFact2Text:
            "Cats are one of the top sleepers in the animal kingdom, spending about 16 to 20 hours a day sleeping irrespective of their ages.",

          funFact3: "Cats navigate using the sunlight.",
          funFact3Detail:
            "How a lost cat can find its way back home without a map remains a mystery to many people today. A cat is able to walk a long distance from its new home back to the former foster owner without getting lost. ",
          funFact3Source: "Source: worldatlas.com",
          funFact4:
            "Cats not only spend most of the day sleeping but also dream in their sleep. Like humans, cats experience Rapid Eye Movement sleep, a stage where most dreaming occurs. Their dreams do not differ with that of humans since they also dream about day-to-day activities.",
          images: [
            {
              image: require("@/assets/cats/cat1.png")
            },
            {
              image: require("@/assets/cats/cat2.png")
            },
            {
              image: require("@/assets/cats/cat3.png")
            }
          ]
        },
        2: {
          header: "Greyhounds",
          petSpeed:
            "Greyhounds are excellent long distance runners and can keep a speed of 35mph for up to 7 miles. ",
          description: "Dogs, man's best friend and most loyal companion.",
          factSource: "",
          funFact:
            "According to the Washington Post, for eight months during 1990 a blind man named Bill Irwin hiked the Appalachian Trail with his guide dog, Orient helping him along the way.",
          funFact2: "The Ewoks in Star Wars were based on a dog",
          funFact2Text: "It was George Lucas' family dog",
          images: [
            {
              image: require("@/assets/dogs/dog1.png")
            },
            {
              image: require("@/assets/dogs/dog2.png")
            },
            {
              image: require("@/assets/dogs/dog3.png")
            },
            {
              image: require("@/assets/dogs/dog4.png")
            },
            {
              image: require("@/assets/dogs/dog5.png")
            }
          ]
        }
      }
    };
  },
  components: { Content },
  mounted() {
    if (window.location.search.match(/print-pdf/gi)) {
      var link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = "../../node_modules/reveal.js/dist/print/pdf.css";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    Reveal = this.Reveal;
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

.reveal h5 {
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
