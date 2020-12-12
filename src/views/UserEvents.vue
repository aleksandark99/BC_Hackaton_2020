<template>
  <div>
    <!-- this is where all events will be shown -->
    <div class="container-fluid">
      <div class="row">
        <b-card-group class="col-md-3" v-for="n in events" v-bind:key="n.id">
          <b-card
            :title="n.eventName"
            :img-src="n.imageURLstart"
            tag="article"
            style="max-width: 20rem"
            class="mb-2 cardFix d-flex flex-column"
            align="center"
            img-height="200"
          >
            <b-card-text>
              {{ n.eventDescription.slice(0, 150) }}
              <br />
              <p style="color: blue">Check event for more ...</p>
            </b-card-text>

            <b-button class="bt" @click="goToEvent(n.eventId)" variant="primary"
              >Check event</b-button
            >
          </b-card>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router/index.js'
import axios from 'axios'
export default {
  name: "UserEvents",
    props: ["id"],

  data() {
    return {
      events: [
        {
          eventId: 1,
          imageURL: "https://picsum.photos/1024/400/?image=41",
          eventName: "evet name",
          eventDescription: "description of this event bla bla ",
        },
        {
          eventId: 3,
          imageURL: "https://picsum.photos/1024/400/?image=41",
          eventName: "evet name2",
          eventDescription: "description of this event bla bla ",
        },
        {
          eventId: 2,
          imageURL: "https://picsum.photos/1024/400/?image=41",
          eventName: "evet name3",
          eventDescription:
            "description of this event event event  eventevent event event event bla bla ",
        },
        {
          eventId: 2,
          imageURL: "https://picsum.photos/1024/400/?image=41",
          eventName: "evet name3",
          eventDescription:
            "description of this event event event  eventevent event event event bla bla ",
        },
        {
          eventId: 2,
          imageURL: "https://picsum.photos/1024/400/?image=41",
          eventName: "evet name3",
          eventDescription:
            "description of this event event event  eventevent event event event bla bla ",
        },
      ],
    };
  },
  mounted() {

    // ucitaj evente sa backa

axios.get('/events/user/'+this.id)
  .then((response) => {
   this.events=response.data.events
  }

  )
  .catch(function (error) {
    console.log(error);
  });

  },
  methods:{
    goToEvent(id){
      router.push('/event/'+ id)

    }
  }
};
</script>

<style>
.cardFix {
  margin: 0 auto;
  float: none;
}
.card-body {
  display: flex;
  flex-direction: column;
}
.bt {
  margin-top: auto;
}
</style>
