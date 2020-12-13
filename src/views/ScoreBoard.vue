<template>
  <div >
    <h1>====Yearly Scoreboard====</h1>
        <h4>(Top 3 users will be rewarded for their contributon)</h4>
  <div class="container-fluid">
      <div class="row">
        <div class="col-md-8 mx-auto">
        <b-table style="border-style: solid;background:white" striped hover responsive :fields="fields" :items="items" :sort-by.sync="sortBy" >
      <template v-slot:cell(username)="data">
        <router-link :to="`/users/${data.item.username}`">{{
          data.value
        }}</router-link>
      </template>
    </b-table>
    <br>
    <br>
    <br>
        <h1>        Our sponsos, check them out !</h1>
    <br>
    <br>

<div>
  <b-card-group deck>
    <b-card title="We care about nature" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
        Greetings from team Garbage Collectors, have fun !
      </b-card-text>
  
    </b-card>

    <b-card title="We protect our environment" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
Safe and readily available water is important for public health, whether it is used for drinking, domestic use, food production or recreational purposes.  </b-card-text>

    </b-card>

    <b-card title="We like clean code and clean nature" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
 Improved water supply and sanitation, and better management of water resources, can boost countries’ economic growth and can contribute greatly to poverty reduction.      </b-card-text>
    
    </b-card>
  </b-card-group>
</div>
  <br>
  <br>
  <br>

        </div>
      </div>
  </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'ScoreBoard',
  data(){
    return{
            sortBy: "totalScore",

         fields: [
        {
              label: "Points",
          key: "totalScore",
          class: "text-center",
          sortable:true
        },
        {
          label: "User",
          key: "username",
          class: "text-left",
                    sortable:true

        },
             {
          label: "Number of events",
          key: "eventsOrganized",
          class: "text-left",
                              sortable:true

        },
             
      
        
        
        ],
        items:[],
    }
  },
  mounted(){
    
      axios.get('/scoreBoard')
  .then((response) => {
   this.items=response.data.scoreBoards
   console.log(response)
  }

  )
  .catch(function (error) {
    console.log(error);
  });



  }
};
</script>





<style scoped>

</style>
