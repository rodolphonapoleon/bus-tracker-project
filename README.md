<p align="center"><img width="150" src="https://res.cloudinary.com/napo05/image/upload/c_scale,w_150/v1635304579/SocialMediaLogo/trackerpic_zyoqf5.png" alt="pacman-logo"></p>
<h1 align="center">
bus-tracker
</h1>
<p align="center">An application tracking all the MBTA buses around MIT, and give their positions in real time<p>

## Description

The app tracks the route 1 of all MBTA buses in real time. Every 15 seconds, their positions are updated on a map (Mapbox map). Each bus is identified by a marker on the map.  

## Getting Started

### Installing

1. Create an account and get a free API Access Token at [https://www.mapbox.com/](https://www.mapbox.com/)
2. Clone the repo
  ```
  git@github.com:rodolphonapoleon/bus-tracker-project.git
  ```
3. Enter your Access Token in `script.js`
  ```
  mapboxgl.accessToken = 'YOUR ACCESS TOKEN'
  ```

### Executing application

* Open the comand line 
* Go to the directory where the files are located
* And simply open the html file with the command `open` 
```
open index.html
``` 
* 0r simply drag and drop the index.html file into the browser

## Support

For any problems or issues:
* Email : <rnapoleon@imajine.ht>

Let's keep in touch

[![LinkedIn Account](https://res.cloudinary.com/napo05/image/upload/c_scale,w_40/v1635287719/SocialMediaLogo/NicePng_linkedin-images-png_9192440_w8rfwf.png)](https://www.linkedin.com/in/rodolpho-richard-napoleon-30337113/)

[![Twitter Account](https://res.cloudinary.com/napo05/image/upload/c_scale,w_40/v1635289001/SocialMediaLogo/NicePng_metlife-logo-png_9274906_xn6ecf.png)](https://twitter.com/papinapo)

## Roadmap

* Get the marker color blue when a bus is heading to MIT and red when is going in the opposite direction.

## License

This project is licensed under the MIT License - see the LICENSE file for details
