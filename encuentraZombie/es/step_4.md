## Retrieve the marker data

+ You can decide where your points of interest will be by creating a [Zombie apocalypse survival map](https://projects.raspberrypi.org/en/projects/zombie-apocalypse-map){:target="_blank"}. Here is an example map we created for a zombie game in the local park. The data for this map was copied from the **console**.

![Map with data](images/map-precreated.png)

```html
51.90769026213801 -2.068905830383301 zombie.png
51.91174087287536 -2.0681333541870117 hospital.png
51.91054955470073 -2.0736265182495117 weapons.png
51.909305255309874 -2.0733261108398438 weapons.png
51.91070839895001 -2.077016830444336 weapons.png
51.90954352807475 -2.0659875869750977 weapons.png
```

+ You will also need to copy the emoji files you used when you created the map, and paste them into the same directory as the `index.html` file for your game. We used the following emojis, but you may have chosen different ones on your map.
![Hospital](images/hospital.png) ![Weapons](images/weapons.png) ![Zombie](images/zombie.png)

+ Locate the line of code `var zombie_map;`. Below it, on a blank line, create a new variable called `data`, and set it equal to the data you copied from the console. Pasting in your data might make your editor complain and highlight the lines of code in a strange way, so put a backtick (\`) at the start and the end of the data you pasted. This will tell JavaScript that what you pasted is a string split over multiple lines.

[[[generic-javascript-create-variable]]]

+ We want to handle each marker separately, so let's add some code on the following line to split up the data into separate lines. Each individual line is data for one marker, so we will split the data wherever the invisible newline character `\n` is detected.

```JavaScript
var markers = data.split("\n");
```

[[[generic-javascript-split-string]]]

We end up with an **array** of marker data which we will plot onto the map in the next step.

--- collapse ---
---
title: End result
---
```JavaScript
var data = `51.90769026213801 -2.068905830383301 zombie.png
51.91174087287536 -2.0681333541870117 hospital.png
51.91054955470073 -2.0736265182495117 weapons.png
51.909305255309874 -2.0733261108398438 weapons.png
51.91070839895001 -2.077016830444336 weapons.png
51.90954352807475 -2.0659875869750977 weapons.png`;
var markers = data.split("\n");
```
--- /collapse ---
