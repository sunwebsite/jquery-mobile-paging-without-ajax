jquery-mobile-paging
====================

jquery mobile paging for long list view with show more option

To view long list of records under jquerymobile performance will be very slow. This plugin will be useful for viewing limited records under the list view and avoid the performance issue of jquery mobile listview.

Usage:
======

Include the plugin to your HTML
`````javascript
<script src="mobilePaging.js"></script>
`````

HTML:
=====
`````html
<ul id="lview" data-role="listview">
</ul>
`````

Javascript:
===========
`````javascript
$("#lview").mobilePaging({count: 20, listvalues: arr});  
`````

Here,
==========================================================
count is number of items to display on the page.
==========================================================
listvalues are value array of the list. can be like below.
==========================================================
`````javascript
var arr = ["start", "after start", "3 start" , "4", "5", "6", "7" , "24", "15" , "2", "3" , "4", "5", "6", "7" , "24", "15" , "2", "3" , "4", "5", "6", "7" , "24", "15" , "2", "3" , "4", "5", "6", "7" , "24", "15" , "2", "3" , "4", "5", "6", "7" , "24", "15" , "2", "3" , "4", "5", "6", "7" , "24", "15" , "2", "3" , "4", "5", "6", "7" , "24", "15" , "2", "3" , "4", "5", "6", "7" , "24", "15" , "2", "3" , "4", "5", "6", "7" , "24", "15" , "2", "3" , "4", "5", "6", "7" , "24", "15" , "2", "3" , "4", "5", "6", "7" , "24", "15" , "2", "3" , "4", "5", "6", "7" , "24", "15" , "2", "3" , "4", "5", "6", "7" , "24", "15" , "2", "3" , "4", "5", "6", "7" , "24", "15" , "2", "3" , "4", "5", "6", "7" , "24", "15" , "2", "3" , "4", "5", "6", "7" , "24", "15" , "2", "3" , "4", "5", "6", "7" , "24", "15" , "2", "3" , "4", "5", "6", "7" , "24", "15" , "2", "3" , "4", "5", "6", "7" , "24", "15" , "2", "3" , "4", "5", "6", "7" , "before final", "final" ];
`````
