<template>
  <div>
    <h1>List of events waiting to be approved</h1>
      <div class="container-fluid">
      <div class="row">
        <div class="col-md-8 mx-auto">
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
import router from '../router';
export default {
  name: 'EventsToApprove',
   data() {
      return {
                    sortBy: "eventName",

             fields: [
        {
          label: "Event name",
          key: "eventName",
          sortable: true,
          class: "text-center",
        },
      {
          label: "Organized by",
          key: "organizedBy",
          sortable: true,
          class: "text-center",
        },
             ],
        items: [
          // { eventName: "aaaa", successfull: false, organizedBy:"Pera Petrovic",id:2 },
          // { eventName: "aaaa", successfull: 'Larsen', organizedBy: 'Shaw' },
          // { eventName: "aaaa", successfull: 'Geneva', organizedBy: 'Wilson' },
          // { eventName: "aaaa", successfull: 'Jami', organizedBy: 'Carney' }
        ]
      }
    },
    mounted(){
        if(localStorage.getItem("role")!="ADMIN")
        {
          router.push("/")
        }

      axios.get('/events/finished/unverified')
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

<style scoped>
</style>
