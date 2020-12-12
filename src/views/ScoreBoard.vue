<template>
  <div>
    <h1>===Yearly Scoreboard====</h1>
        <b-table responsive :fields="fields" :items="items" :sort-by.sync="sortBy" >
      <template v-slot:cell(username)="data">
        <router-link :to="`/users/${data.item.username}`">{{
          data.value
        }}</router-link>
      </template>
    </b-table>
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
          class: "text-left",
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





<style>
</style>
