<template>
  <div class="s">
    <div class="container" >
      <div class="row">
        <div class="col-md-6 mx-auto">
          <div>
            <div style="border-style: ridge;border-color: #f7ffe6; margin-bottom:5px; padding:25px; ">
            <h1>{{event.eventName}}</h1>
            <h2 v-show="event.finished">This event was {{suc}}</h2>
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
            <p id="eventDesc">{{ event.eventDescription.slice(1) }}</p>
            <br />
            <p>            <b-icon-globe2/>
This event is taking place in: </p>
              <a :href="event.locationURL" target="_blank">{{event.locationString}}</a>
              <br>
                <div id="posleEventa" v-show="event.finished">
                         This is picure of location after cleanup:
            <br />
            <b-img
              :src="event.imgAfterURL"
              fluid
              alt="Responsive image"
            ></b-img>
            <br />
              This is picure of team that helped us clean this place:
            <br />
            <b-img
              :src="event.imgTeamURL"
              fluid
              alt="Responsive image"
            ></b-img>
            <br />
                </div>



            <b-button @click="ConfirmPresence" v-show="isUser&&!event.finished" :disabled="event.going" class="bottomM" variant="success"
              >I am going !</b-button
            >
            <p v-if="!event.finished">
              This event is in progress. Organizator will upload results when
              location is cleaned
            </p>
            <div v-show="isOrganizator&&!event.finished" id="afterImage" class="file-upload-form"><br><br><br>

              Upload an image of place after cleanup:
              <b-form-file
                class="mt-3"
                plain
                @change="previewImage"
                accept="image/*"
              />
            </div>
            <div v-show="isOrganizator&&!event.finished" class="image-preview" v-if="imageData.length > 0">
              <img class="preview" :src="imageData" />
            </div>

            <div v-show="isOrganizator&&!event.finished" id="teamImage" class="file-upload-form">
              Upload team picture:
              <b-form-file
                class="mt-3"
                plain
                @change="previewImage1"
                accept="image/*"
              />
            </div>
            <div class="image-preview" v-if="imageData1.length > 0">
              <img class="preview" :src="imageData1" />
            </div>
              <p v-if="!event.finished">Number of people going: {{numOfppl}}</p>
    <p v-if="event.finished">Number of people that helped: {{numOfppl}}</p>

                <ShareNetwork
    network="twitter"
    :url=thisURL
    :title=event.eventName
    :description=event.eventDescription
    hashtags="CleanWithUs"
  >   

                  <b-button  class="bottomM" variant="info">    Share on Twitter</b-button> 

</ShareNetwork>
<br class="bottomM">
                <b-button v-show="isOrganizator&&!event.finished" @click="finishEvent" variant="danger">Finish Event</b-button> 

          </div>
          <div v-show="isAdmin" id="adminovPosao">
            <b-button  v-show="event.finished&&!event.verified" @click="verifyEvent(true)" class="bottomM" variant="success">    Event was successfual</b-button> 
              <b-button v-show="event.finished&&!event.verified" @click="verifyEvent(false)" class="bottomM" variant="danger">  Event Failed</b-button> 
          </div>
        </div>          </div>

      </div>
    </div>
  </div>
</template>

<script>


import axios from "axios";
export default {
  props: ["id"],
  name: "SingleEvent",
  data() {
    return {
      jjjjj:0,
      numOfppl:0,
      suc:"",
      curentImage: null,
      curentImage1: null,


      isAdmin:false,
      isUser:false,
      isOrganizator:false,
     


  thisURL:"",

      event: {
        eventName: "eventName",
        // eventDescription:
        //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
      .get("/event/goingNumber/"+this.id,{
          headers: {

                        "Authorization": "Bearer "+ localStorage.getItem("jwt"),
          }}
          )
      .then((res) => {
        this.numOfppl=res.data.usersNum;

      })

  .catch(function (error) {
    console.log(error);
  });









    this.putRoles();
    this.userRole=localStorage.getItem("role"),
    this.thisURL="https://garbagecollectors.netlify.app"+this.$router.currentRoute.path;
    axios
      .get("/event/"+this.id,{
          headers: {

                        "Authorization": "Bearer "+ localStorage.getItem("jwt"),
          }}
          )
      .then((response) => {
this.event=response.data 
this.isOrganizator=response.data.organizedByThisUser
console.log(response.data)
console.log(this.isOrganizator+"AAAAAAAAAAAAA")

if(response.data.succesful==true){
    this.suc="Successful"
  }else{
        this.suc="NOT Successful"

  }
}

  )
  .catch(function (error) {
    console.log(error);
  });


  },
  methods:{
    ConfirmPresence(){
      this.numOfppl+=1
       axios.post("/user/confirmePresence",  JSON.stringify({
             eventId: this.id,
          }), {
          headers: {
              "Content-Type": "application/json",
            "Authorization": "Bearer "+ localStorage.getItem("jwt"),

          },
        })
        .then((res) => {
          console.log(res);
          this.event.going=true;

        })
        .catch((res) => {
          console.log(res);
        });

    },
finishEvent(){


    var formData = new FormData();
      formData.append("afterImage", this.curentImage);
      formData.append("teamImage", this.curentImage);
      formData.append("id",this.id)

      console.log(this.curentImage)
      console.log(this.curentImage1)

 axios.post("/user/finish/event", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": "Bearer "+ localStorage.getItem("jwt"),

          },
        })
        .then((res) => {
          console.log(res);
                  this.$router.push("/")

        })
        .catch((res) => {
          console.log(res);
          alert("In orderd to finish event you must upload all pictures")
        });


},
verifyEvent(isSucessful){
  if(isSucessful==true){
this.jjjjj=42;
  }
 axios.post("/event/verify",  JSON.stringify({
             credit: this.jjjjj,
             eventId: this.id,
           successfull: isSucessful
          }), {
          headers: {
              "Content-Type": "application/json",
            "Authorization": "Bearer "+ localStorage.getItem("jwt"),

          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((res) => {
          console.log(res);
        });
        this.$router.push("/")

},
putRoles(){
    if(localStorage.getItem("role")=="ADMIN"){
      this.isAdmin=true;
    }
    else if(localStorage.getItem("role")=="USER"){
      this.isUser=true
    }

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

      }
    },
    previewImage1: function (event) {
      var input = event.target;
      console.log("AAAAAAAAAA")
      console.log(event.target)
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
  /* border-style: 1px solid black;
  color: black;
    white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
}
.bottomM{
    margin-top: 20px;

  margin-bottom: 10px;
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

#descP
{
  width: 100px;

}
#s{
height: 100%;}
</style>
