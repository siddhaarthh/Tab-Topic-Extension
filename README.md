# Tab-Topic-Extension

In this project we have created the chrome extension which shows topic of current tab.
![alt text](<Readme Images/chrome image extension.png>)

STEPS OF PROJECT BUILDING:-

1. We first created manifest.json file which is required or main part to build our chrome extension.
    -> In this we firstly defined manifest-version, name of extension and all the required things to successfully run the extension.
    ![alt text](<Readme Images/manifestJSON.png>)

2. Then we created popup.html file which show our container and contain button which when clicked it shows output.
    ![alt text](<Readme Images/popupHTML.png>)

3. Then we created popup.css file here we did the styling of our html code.
    ![alt text](<Readme Images/popupCSS.png>)

4. Then we created popup.js file here we listen the click event of button with the help of event listenor and fetch the current topic from the tab and displayed it on paragraph tag.
    ![alt text](<Readme Images/popupJS.png>)

5. For icons we have created an folder named as images in which we insert the same image of different sizes of 16, 48 and 128 px.
    ![alt text](<Readme Images/icons.png>)

STEPS TO FOLLOW TO RUN EXTENSION ON OUR PC:-

1. Go to Github and do fork my repository link: https://github.com/siddhaarthh/Tab-Topic-Extension 
    ![alt text](<Readme Images/github1ST.png>)
2. Go to Code button and copy the link shown their. 
    ![alt text](<Readme Images/codeLINK.png>)
3. Open Gitbash in your pc and type command git clone ("link copied in step 2").
4. Now Go to Google Chrome on your pc.
5. Select an option of load extension rendering on left side of screen.
    ![alt text](<Readme Images/LOadExtension.png>)
6. Select our folder Tab-Topic-Extension from our pc.
7. Now you are able to see the Extension named as "Chrome Ext". Click on it and you can see the Extension is running.
    ![alt text](<Readme Images/chrome image extension.png>)
