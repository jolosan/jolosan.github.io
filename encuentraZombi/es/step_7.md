## Test the GPS

You probably want to test whether your player icon moves around as you move around, and to do this you'll need to go outside. This could be pretty inconvenient while holding a computer, so let's upload the web page to the internet so that you can access it on your phone!

### Important safety notes
Don't forget that when you upload things to the internet, anyone can see them. If you've centered the map on the latitude and longitude of your house, anyone who accesses the web page can see exactly where you live. It is safer to set up your zombie map in a communal area such as a park or a town centre so that you are not giving away your personal data.

For the GPS to work, you will need to enable the location services on your phone. Be aware that this means that your phone will track your exact position. It is never a good idea to post your exact location in public on the internet, so to be safe, disable the location services again after you have played the zombie game to make sure no other apps can use your location data. Your location will only be used by the zombie game in the web page you have created—you know exactly what this code does, because you wrote it!

### Upload your code
You can upload your zombie game onto any service that offers web hosting. You may already have some hosting available to you, in which case feel free to use that. We chose to use [GitHub Pages](https://pages.github.com/){:target="_blank"} because it is a trustworthy service and easy to use. To get started with it, follow these steps:

+ Sign up for a [GitHub account](https://github.com/join){:target="_blank"}

+ Visit the [instructions page](https://pages.github.com/){:target="_blank"}, and click on **Project site** and **Start from scratch**

![Github pages](images/github-pages.png)

+ Follow the instructions to create an index file as described, but instead of typing `<h1>Hello</h1>`, paste in the code from your `index.html` file before committing it

+ You will also need to click on the **Upload files** button and upload the emoji files you are using

+ Finally, follow Step 4 on the instructions page to set up your master branch as a GitHub Pages site, and then view your page by typing the address into a browser.

## Restrict your API key
Now that you have put your code online, your Google Maps API key is visible to everyone. Someone could take it and use it without your permission. You can stop this from happening by restricting where it can be used, so that it can only be used on your website.

+ Head back over to the [Google APIs console](https://console.developers.google.com/flows/enableapi?apiid=picker&credential=client_key){:target="_blank"} and click on **Select a project** at the top left of the page.

![Select a project](images/select-a-project.png)

+ Select the project you made when you set up your API key. This might still be called **My project** if you didn't change its name.

+ Click on **Credentials** on the left, then click on your API key.

![Select a project](images/credentials.png)

+ Under **Key restriction**, select **HTTP referrers** and in the box, add the base URL of your website, with a `*` at each end. For example, my code was hosted at `http://lawsie.github.io/`, so I put `*lawsie.github.io/*`. Click **Save**.

![Key restriction](images/key-restriction.png)

+ Your key should now only work on your website, and not anywhere else. Note that if you now try to look at the map on your computer, it will not work because the request is not coming from your website. You might want to create an extra API key that is unrestricted, and ONLY use that key on your private computer for testing.
