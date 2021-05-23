<template>
    <div class="google-map-container">
        <div class="map-body">
            <div class="current-location-body">
                <h4>Current Location</h4>
                <div class="current-address">
                    <i class="fas fa fa-circle"></i>
                    <textarea v-model="address" placeholder="address"></textarea>
                    <button type="button">Pick Your Location</button>
                </div>
            </div>
        </div>
        <div class="map-container">
            <img @click="geolocate()" src="@/assets/icons/curr-location.png" alt="">
            <gmap-map :center='center' :zoom='12' map-type-id='terrain' style='width:100%;  height: 425px;' :options='{disableDefaultUI: true, zoomControl: true}'>
                <gmap-marker
                    :position='marker.position'
                    @click='center=marker.position'
                    ref="map"
                    :clickable="true"
                    :draggable="true"
                    @drag="updateCoordinates"
                    :icon="{ url: require('../../assets/icons/marker.png')}"
                    :title="'Drag Me'" 
                >
                </gmap-marker>
            </gmap-map>// 
        </div>
    </div>
</template>

<script >
import { Component, Vue } from 'vue-property-decorator';
import * as VueGoogleMaps from "vue2-google-maps";
import 'vuejs-google-maps/dist/vuejs-google-maps.css'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg',
    libraries: "places" // necessary for places input
  }
});

export default {
  name: "GoogleMap",
    data() {
        return {
            map: '',
            marker: '',
            center: {  lat: 95.508, lng: -73.587 },
            address: '',
        }
    },
    props: {
      latlngObj: Object,
    },
    computed: {
        google: VueGoogleMaps.gmapApi,
    },
    mounted() {
        setTimeout(() => {
           this.geolocate()
        }, 2000);
    },
    methods: {
        createMarker: function (latlng) {
        this.marker = new window.google.maps.Marker({
            setMap: this.map,
            position: latlng,
            animation: window.google.maps.Animation.DROP
        })
        },
        updateCoordinates(location) {
            this.center = {
                lat: location.latLng.lat(),
                lng: location.latLng.lng(),
            };
            this.getAddress(this.center)
        },
        geolocate: function () {
            let This = this
            navigator.geolocation.getCurrentPosition(position => {
                let latlng = new window.google.maps.LatLng(
                    parseFloat(position.coords.latitude),
                    parseFloat(position.coords.longitude)
                )
                This.center = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }
                this.createMarker(latlng)
                this.getAddress(latlng)
            })
        },
        getAddress(lating){
            const geocoder = new google.maps.Geocoder
            let This = this
            geocoder.geocode({'location': lating}, function(results, status) {
                if (status === 'OK') {
                    if (results[1]) {
                        This.address = results[1].formatted_address;
                    } else {
                        return false
                    }
                }
            })
        },
    }
}
</script>

<style scoped>
.current-location-body{
    background: #fff;
    border-radius: var(--md-radius);
    width: 385px;
    height: 425px;
    float: left;
    margin-right: 10px;
    padding: 35px;
}
.current-location-body h4{
    color: var(--font-navy);
    text-align: center;
    margin-bottom: 60px;
}
.current-address i{
    font-size: 13px;
    color: var(--main-green);
    margin-right: 10px;
    float: left;
    margin-top: 8px;
}
.current-address span{
    color: var(--font-navy);
    font-size: 14px;
    overflow: hidden;
    display: block;
    float: right;
    width: 90%;
    margin-bottom: 50px;
}
.current-address textarea{
    width: 90%;
    height: 80px;
    border: none;
    margin-bottom: 0px;
    outline-color: var(--active-green);
}
.current-address button{
    display: block;
    margin-top: 30px;
    background: var(--main-green);
    color: #fff;
    outline: none;
    border-radius: var(--sm-radius);
    width: 90%;
    margin: auto;
    height: 45px;
    border: none;
    cursor: pointer;
}
.current-address button:hover{
    opacity: 0.8;
}
.map-container{
    width: 60%;
    float: left;
    height: 425px;
    overflow: hidden;
    border-radius: var(--md-radius);
    position: relative;
}
.map-container img{
    position: absolute;
    bottom: 115px;
    z-index: 999;
    width: 55px;
    right: 3px;
    cursor: pointer;
}
</style>