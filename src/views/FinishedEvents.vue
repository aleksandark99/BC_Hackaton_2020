<template>
  <div>
      <div class="container-fluid">
      <div class="row">
        <div class="col-md-8 mx-auto">
          <h1>Here you can see list of all finished events so far</h1>
       <b-table style="background:white" responsive :fields="fields" :items="items" :sort-by.sync="sortBy">
      <template v-slot:cell(eventName)="data">
        <router-link :to="`/event/${data.item.eventId}`">{{
          data.value
        }}</router-link>
      </template>
    </b-table>
  </div>
      </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'FinishedEvents',
   data() {
      return {
                            sortBy: "eventName",

             fields: [
        {
          label: "Event name",
          key: "eventName",
          sortable: true,
          class: "text-left",
        },
        {
          label: "successfull",
          key: "successfull",
          sortable: true,
          class: "text-left",
        },  {
          label: "Organized by",
          key: "organizedBy",
          sortable: true,
          class: "text-left",
        },
             ],
        items: [
          { eventName: "aaaa", successfull: false, organizedBy:"Pera Petrovic",id:2 },
          { eventName: "aaaa", successfull: 'Larsen', organizedBy: 'Shaw' },
          { eventName: "aaaa", successfull: 'Geneva', organizedBy: 'Wilson' },
          { eventName: "aaaa", successfull: 'Jami', organizedBy: 'Carney' }
        ]
      }
    },
    mounted(){
      axios.get('/events/finished/verified')
  .then((response) => {
   this.items=response.data.events
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
