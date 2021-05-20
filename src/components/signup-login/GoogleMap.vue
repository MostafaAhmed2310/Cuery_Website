<template>
    <div class="google-map-container">
         <gmap-map
      :center="center"
      :zoom="12"
      style="width:100%;  height: 400px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
    </div>
</template>

<script >
import { Component, Vue } from 'vue-property-decorator';
import * as VueGoogleMaps from "vue2-google-maps";
import 'vuejs-google-maps/dist/vuejs-google-maps.css'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBp5T7l6Ua7VVFnEE7rFVf1vDNCT8ltccI',
    libraries: "places" // necessary for places input
  }
});

export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },
 
  mounted() {
    this.geolocate();
  },
 
  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>

<style scoped>

</style>