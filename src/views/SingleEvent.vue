<template>
  <div>
       <div class="container" id="s">
      <div class="row">
        <div class="col-md-5 mx-auto">
  <div>
      This is picure of location before cleanup:
      <br>
  <b-img :src="event.imgBeforeURL" fluid alt="Responsive image"></b-img>
  <br>
    Event Description: 
    <br>
    <p id="eventDesc">{{event.eventDescription}}</p>
    <br>
    <p v-if="event.isFinished">This event is in progress. Organizator will upload results when location is cleaned</p>
</div>


  </div>
  </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
      props: ["id"],
  name: 'SingleEvent',
  data(){
      return{
          event:{
            eventName:"eventName",
            eventDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            imgBeforeURL:"https://picsum.photos/1024/400/?image=41",
            imgAfterURL:"",
            imgTeamURL:"",
            dateCreated:'',
            isFinished:true,
            organizedBy:'Pera petrovic'
          }
      }
  },
  mounted(){
    axios.get('/event/id', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }
};
</script>

<style scoped>
#eventDesc{
  border-style: solid;
  background: gray;
  color: blue;
}
</style>
