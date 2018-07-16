<template>
  <div class="home">
    <div id="condition" class="condition">
      开始地点:<input type="text" name="begin" />
      结束地点:<input type="text" name="end" />
      <input type="submit" name="search" />
    </div>
    <div id="allmap" class="allmap"></div>
  </div>
</template>

<script>
  import BMap from 'BMap'
  export default {
    name:'MapDemo',
    data () {
      return {
        type: 'tab',
        address_detail: null,
        center: {lng: 116.40387397, lat: 39.91488908}
      }
    },
    mounted () {
      this.ready()
    },
    methods: {
      ready () {
        let map = new BMap.Map('allmap')
        let point = new BMap.Point(this.center.lng, this.center.lat)
        map.centerAndZoom(point, 10)
        map.enableScrollWheelZoom(true)
        map.enableDoubleClickZoom(true)
        var geolocation = new BMap.Geolocation()
        geolocation.getCurrentPosition((r) => {
          if (r.point) {
            this.center.lng = r.longitude
            this.center.lat = r.latitude
            let markers = new BMap.Marker(r.point)
            map.addOverlay(markers)
            map.panTo(r.point)
            map.centerAndZoom(r.point, 16)
          }
        }, { enableHighAccuracy: true })
      }
    }
  }
</script>

<style scoped>
  #home{
  }
  #allmap{
    width: 40%;
    height: 400px;
    margin:0 auto;
  }
</style>
