<h1 align="center">
  <a href="#"><img src="https://i.imgur.com/7rHvy0H.png" width="400"></a>
  <br>
  LinkedOut - Block your toxic LinkedIn feed.
  <br>
</h1>

<div><a href="https://chrome.google.com/webstore/detail/linkedout/fhmicjpcahmejkghojeafikfhlmkchpi" target="_blank"><img src="https://i.imgur.com/wupL5fG.png"></a></div>

## What is LinkedOut?
A chrome extension that will remove your LinkedIn feed's posts (and replace it with cat or dog pictures instead). 

However, not all LinkedIn posts were created equal. Some provide value and useful tips for recruiting or one's professional career. As a result, users can specify accounts whose posts they would like to see instead of blocking all posts.  

## Why was this built?
One of LinkedIn's most useful features are its abundance of job postings and networking opportunities with recruiters and connections. 

Many people go on LinkedIn to find job postings but instead see non-fulfilling content or others posting about their massive success. While it is warming to see so many people landing their dream jobs, [it can cause users to become dissatisfied with their own careers](https://bit.ly/2WW1cZk). 
Consequently, this extension was built to better the mental health and well-being of LinkedIn users. 
## Here's what your LinkedIn feed will look like
For cat people:
![Super cute cat LinkedIn feed](https://i.imgur.com/SWXYr6m.jpg)

For dog people:
![Super cute dog LinkedIn feed](https://i.imgur.com/GzmJ10v.jpg)

## Usage
Clicking on the extension icon in the top right of you Chrome browser will allow you to set whether you prefer cats or dogs on your feed as well as unblock certain accounts. Alternatively, you can right click the feature and clikc "Options" and an entire HTML page will pop up and you can edit your settings from there.

Note: The unblocking feature should be used sparingly to not defeat the purpose of this extension. It also only displays direct shares, not reposts.
## Contributing
If you would like to contribute or test an up to date version of this extension (that hasn't made it to the Chrome Store yet), follow these steps.
1. Download this repository as a ZIP file.
2. Unzip the file into any directory.
3. Click on the jigsaw puzzle icon in your Chrome browser located in the top right corner, and select "Manage Extensions".
4. Turn on Developer Mode in the top right of the extensions page
5. Click "Load Unpacked" in the top left of the page, and select your unzipped folder
6. Make sure the extension is turned on, and head to LinkedIn's homepage!
Note: If you already had LinkedIn's homepage on, you will need to refresh your page. Simply navigating to the homepage, or switching to another LinkedIn page and switching back to the homepage will not work. Extensions are only loaded into a webpage after a refresh (cmd+r on MacOS or ctrl+R on Windows). You may also see an error in the Extensions Page.
Note 2: I removed the `background.js` from git tracking because I began to use FireBase for tracking total number of times the extension was used, which meant revealing some sensitive API values. You can view the background.js right before I added FireBase code in the diff for [this commit](https://github.com/azc242/LinkedOut/commit/bbf156f06d08087b376e4622c4c33c8d347f5e1b).
## Bug Reports
If problems arise, please fill out this form: https://forms.gle/kNJD2cH72dWwF1TdA