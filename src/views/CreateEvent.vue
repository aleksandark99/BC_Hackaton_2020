<template>
  <div>
    <div class="file-upload-form">
      Upload an image of place that needs our help:
      <b-form-file class="mt-3" plain @change="previewImage" accept="image/*" />
    </div>
    <div class="image-preview" v-if="imageData.length > 0">
      <img class="preview" :src="imageData" />
    </div>

    <div>

    </div>
    <b-button @click="createEvent" variant="success">Button</b-button> 
<!--  -->
<template>
  <places
    v-model="form.country.label"
    placeholder="Where are we going ?"
    @change="val => { form.country.data = val }"
    :options="{ countries: [] }">
  </places>
    <b-button @click="visitPlace" variant="success">Create Event</b-button> 
</template>



  </div>
</template>

<script>
import axios from "axios";
import Places from 'vue-places'

export default {
  name: "CreateEvent",
  components:{
Places
  },

  data() {
    return {
           form: {
        country: {
          label: null,
          data: {},
        },
      },
      imageData: "",
      cuurentImage: null,
      eventName:"",
      eventDescription:"",

    };
  },
  methods: {
    visitPlace(){
        // var aaa = "https://www.google.com/maps/"+this.form.country.label
        location.replace("https://www.google.com/maps/place/"+this.form.country.label.replace(/,/g, ' '));
        // console.log(this.form.country.label)

    },
    createEvent() {
      let formData = new FormData();
      formData.append("image", this.cuurentImage);
      axios.post("upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((res) => {
          console.log(res);
        });
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
    
  },

};
</script>

<style scoped>
.file-upload-form,
.image-preview {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding: 20px;
}
img.preview {
  width: 200px;
  background-color: white;
  border: 1px solid #ddd;
  padding: 5px;
}
</style>
