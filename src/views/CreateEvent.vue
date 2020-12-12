<template>
  <div>
          <div class="container" id="s">
      <div class="row">
        <div class="col-md-5 mx-auto">
    <div class="file-upload-form">
      Upload an image of place that needs our help:
      <b-form-file class="mt-3" plain @change="previewImage" accept="image/*" />
    </div>
    <div class="image-preview" v-if="imageData.length > 0">
      <img class="preview" :src="imageData" />
    </div>

    <div>

    </div>
<!--  -->
        
            <b-form-group id="input-group-1" label="Naziv:" label-for="input-1">
              <b-form-input id="input-1" 
              v-model="title" 
              required 
              placeholder="Enter event title">
              </b-form-input>
            </b-form-group>
  <places
    v-model="form.country.label"
    placeholder="Where are we going ?"
    @change="val => { form.country.data = val }"
    :options="{ countries: [] }">
  </places>

      <div>
   <b-form-textarea
        id="textarea-auto-height"
        placeholder="Auto height textarea"
        rows="5"
        max-rows="8"
        v-model="text"

      ></b-form-textarea>
  </div>
    <b-button @click="createEvent" variant="success">Create Event</b-button> 

    </div>
    </div>
    </div>


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
       text:"",
  title:"",
           form: {
        country: {
          label: null,
          data: {},
        },
      },
      imageData: "",
      curentImage: null,
      eventName:"",
      eventDescription:"",

    };
  },
  methods: {
    visitPlace(){
        // location.replace("https://www.google.com/maps/place/"+this.form.country.label.replace(/,/g, ' '));

        console.log(this.text)


    },
    createEvent() {
      console.log("aa")
      console.log(this.eventDescription)
      let formData = new FormData();
      formData.append("image", this.curentImage);
      formData.append("eventDescription", this.eventDescription);
      formData.append("eventName", this.title);
      formData.append("eventDescription", this.text);
      axios.post("user/event", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhIiwiZXhwIjoxNjA3NzY1MTI5LCJpYXQiOjE2MDc3MjkxMjl9.1UAXU0Ltjt4quMHsyx17Ate4q-t59dKomugtiZEf5IU",

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
        this.curentImage = input.files[0];
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
  width: 400px;
  background-color: white;
  border: 1px solid black;
  padding: 5px;
}
</style>
