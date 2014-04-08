ckeditor_mentions
=================

Increase the quality of your text areas including this feature. It was created according with twitter and slack similar features.

Get it from Github

View Demo 

Test it yourself using this jsFiddle Demo

Created by Rafael Sardenberg - LICO Innovations

Instructions

First, add the Javascript and CSS files to your system. 

tag:
<script src="jquery.js"></script>
<script src="call.js"></script>
<script src="mentions.js"></script>
<script src="ckeditor/ckeditor.js"></script>
<link rel="stylesheet" type="text/css" href="mentions.css">

In your HTML file, create a unordered list with id equal "users_mentions_list" and their list items should have id equal "user_mentions".
PS.: If you want to change these ids and keeps the plugin working is just change the file mentions.js. Find(Crtl + F) the word "user_mentions_list" and "user_mentions" and just substitute for the change wanted.

Each of list item must present the class "hide" which is defined in the CSS file as display: none and also must present a tabindex="0".

For design issues, it's recommended that the unordered list must be placed below the CKEditor text area.

By the end, just call the mentions feature inside a script file:

$('#editor1').mentions();
