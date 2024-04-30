This is a Demo/Example Javascript Script that is designed to be imported into nationaltrust visitation web pages.

Its purpose is to grab the postcode of the location on the page e.g Packwood Lane, Lapworth, Warwickshire, B94 6AT

Then using that postcode and a Weather API, get the current and forecast weather for that area for that 7-day period along with temperature and an icon.
This is for the idea that if the weather is displayed next to the location it may increase the number of visitors for that location.

The written and proposed method of A/B testing is a crude one yet potentially effective where upon triggering the script, there is a 50% chance the 
weather forecast will not be displayed and when the sign-up button is clicked (it's just a console.log at the minute however it could be expanded into...)
another API could be fired off sending information to my/our database with the information that someone has clicked the call to action and whether or not
the weather graphic was active.

The data from this in my opinion will conclude its effectiveness.

Also in terms of its actual implementation... I would upload the script to an AWS s3 bucket and then use Cloudfront distribution

Example of what it looks like: ![image](https://github.com/BenjaminChambers1/GoodGrowth/assets/51539083/4834b3fd-7132-4134-a7d8-bc12fe195155)

Example of alert: ![image](https://github.com/BenjaminChambers1/GoodGrowth/assets/51539083/40313460-ade7-4cf0-9137-d2481be22a17)
