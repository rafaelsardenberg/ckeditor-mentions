# CKEditor Mentions Jquery Plugin

Increase the quality of your text areas including this easy configurable feature. It was created according with similar features in Twitter and Slack. 

It provides suggestions according to what it's typed after the "@". Thus, the user could receive suggestions while writing his text and achieve the desired typed result easily. 

[Get it from Github](https://github.com/rafaelsardenberg/ckeditor_mentions_jquery_plugin)

Created by [Rafael Sardenberg](https://www.facebook.com/rafael.sardenberg.3) - [LICO Innovations](http://www.lico.nl/)

# Instructions

First, add the Javascript and CSS files to your system:

    <script src="jquery.js"></script>
    <script src="call.js"></script>
    <script src="mentions.js"></script>
    <script src="ckeditor/ckeditor.js"></script>
    <link rel="stylesheet" type="text/css" href="mentions.css">

In your HTML file, create a unordered list with id equal "users_mentions_list" and their list items should have id equal "user_mentions".
PS.: If you want to change these ids and keep the plugin working is just changing the file mentions.js. Find(Crtl + F) the word "user_mentions_list" and "user_mentions" and just substitute for the change wanted.

Each of list item must present the class "hide" which is defined in the CSS file as display: none and also must present a tabindex="0".

For design issues, it's recommended that the unordered list must be placed below the CKEditor text area.

By the end, just call the mentions feature passing the id of the text area inside a script file:

$('#editor1').mentions();
