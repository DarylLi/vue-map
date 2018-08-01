export function loadingMap(type,key) {
  return new Promise(function(resolve, reject) {
    window.onload = function() {
      type=='baidu'?resolve(BMap):resolve(AMap)
    }
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = type=='baidu'?("http://api.map.baidu.com/api?v=2.0&ak=" + key + "&callback=init"):("https://webapi.amap.com/maps?v=1.4.5&key=" + key + "&plugin=AMap.Autocomplete,AMap.PlaceSearch,AMap.Geocoder,AMap.MapType,AMap.Driving,AMap.DistrictSearch");
    script.onerror = reject;
    document.head.appendChild(script);
  })
}
