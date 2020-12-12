<template>
  <div>
    <div class="container" id="s">
      <div class="row">
        <div class="col-md-5 mx-auto">
          <div>
            This is picure of location before cleanup:
            <br />
            <b-img
              :src="event.imgBeforeURL"
              fluid
              alt="Responsive image"
            ></b-img>
            <br />
            Event Description:
            <br />
            <p id="eventDesc">{{ event.eventDescription }}</p>
            <br />
            <b-button :disabled="!event.isFinished" size="lg"
              >I am going !</b-button
            >

            <p v-if="event.isFinished">
              This event is in progress. Organizator will upload results when
              location is cleaned
            </p>

            <div id="afterImage" class="file-upload-form">
              Upload an image of place after cleanup:
              <b-form-file
                class="mt-3"
                plain
                @change="previewImage"
                accept="image/*"
              />
            </div>
            <div class="image-preview" v-if="imageData.length > 0">
              <img class="preview" :src="imageData" />
            </div>

            <div id="teamImage" class="file-upload-form">
              Upload team picture:
              <b-form-file
                class="mt-3"
                plain
                @change="previewImage1"
                accept="image/*"
              />
            </div>
            <div class="image-preview" v-if="imageData.length > 0">
              <img class="preview" :src="imageData1" />
            </div>

                <ShareNetwork
    network="twitter"
    url="https://adoring-jackson-580734.netlify.app/#/event/1"
    title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
    description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
    hashtags="CleanWithUs"
  >
                  <b-button variant="success">    Share on Twitter</b-button> 

</ShareNetwork>
                <b-button @click="finishEvent" variant="success">Finish Event</b-button> 

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueHead from 'vue-head'
 
Vue.use(VueHead)
Vue.use(VueRouter)

import axios from "axios";
export default {
  props: ["id"],
  name: "SingleEvent",
  data() {
    return {
  head: {
    title: {
      inner: 'It will be a pleasure'
    },
    // Meta tags
    meta: [
      { name: 'application-name', content: 'Name of my application' },
      { name: 'description', content: 'A description of the page', id: 'desc' }, // id to replace intead of create element
      // ...
      // Twitter
      { name: 'twitter:title', content: 'Content Title' },
      // with shorthand
    ]},

      event: {
        eventName: "eventName",
        eventDescription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        imgBeforeURL: "https://picsum.photos/1024/400/?image=41",
        imgAfterURL: "",
        imgTeamURL: "",
        dateCreated: "",
        isFinished: true,
        organizedBy: "Pera petrovic",
        locationURL: null,
        locationString: "",
      },
        imageData: "",
        imageData1: "",

    };
  },
  mounted() {
    axios
      .get("/event/id", {
        params: {
          ID: 12345,
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods:{
finishEvent(){
// PUT NA BACK DA SE FINISHUJE
},




   previewImage: function (event) {
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
        this.cuurentImage = input.files[0];
        // console.log("aaaaaaaaaa");
        // console.log(this.cuurentImage);
      }
    },
    previewImage1: function (event) {
      let input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData1 = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
        this.cuurentImage1 = input.files[0];
        // console.log("aaaaaaaaaa");
        // console.log(this.cuurentImage);
      }
    },
  }
};
</script>

<style scoped>
#eventDesc {
  border-style: 1px solid black;
  color: black;
}

.file-upload-form,
.image-preview {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  /* padding: 20px; */
}
img.preview {
  width: 400px;
  background-color: grey;
  border: 1px solid red;
  padding: 7px;
}
</style>
