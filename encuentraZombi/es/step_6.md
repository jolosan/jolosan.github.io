## Display your current position

Let's display the player's current position on the map.

+ Inside the `initMap()` function, after you create the map, add some code to use HTML5 geolocation to find the player's current position:

```javascript
if(navigator.geolocation) {
    navigator.geolocation.watchPosition(set_my_position);
}
else {
    alert("Geolocation doesn't work in your browser");
}
```

This code checks whether the player's location can be found using the web browser. If it cannot be found, a pop-up box will appear with a message. If it can, we set up code to `watchPosition`. This code will constantly monitor the position of the device, and will call the function `set_my_position` whenever the position of the device changes.

+ To be able to display the player's position on the map, we need to write the `set_my_position` function. After the closing bracket of the `initMap()` function, create a new function called `set_my_position`.

[[[generic-javascript-create-a-function]]]

+ This function needs the current latitude and longitude by the `watchPosition` comand we set up. Add an **argument** called `position` in the function's brackets so that this data will be automatically passed to it.

`function set_my_position(position){`

+ The latitude can be found within the function as `position.coords.latitude`, and the longitude as `position.coords.longitude`. Following the same process as you did in the previous step, create a LatLng object called `pos` inside the `set_my_position` function. The object should contain the latitude and longitude values.

```JavaScript
var pos = new google.maps.LatLng(###, ###);
```

+ Still inside the function, create a marker which is situated at the LatLng object's position. You can do this the same way you created markers in the previous step. However, you should choose a different icon for this marker. we chose to represent the player as a smiley face, but you can choose any emoji you like. Don't forget to copy and paste the emoji image file you want to use into the same folder as your `index.html` code.

![Player emoji](images/player.png)

+ Save your code and refresh the internet browser. If a message pops up asking whether the browser can use your location data, press **Allow**. You should see your player emoji appear wherever you currently are.

![Where you are on the map](images/location-map.png)

+ You might want to adjust the `zoom` value in your map at this stage if it is a little too far out to see the locations of the icons clearly. Using a larger value will zoom in on the map.
