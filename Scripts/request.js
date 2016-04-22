/**
 * Created by devon on 2016-03-23.
 */
(function(){
    "use strict";

    // Add DOM objects to array
    var domObjects = new Array();
    domObjects.push(document.getElementById("bio"));
    domObjects.push(document.getElementById("project-1"));
    domObjects.push(document.getElementById("project-2"));
    domObjects.push(document.getElementById("project-3"));
    var index = 0;
    console.log(domObjects);

    // Create XHR object
    var request = new XMLHttpRequest();
    request.open('GET', '../paragraphs.json', true);
    request.addEventListener('readystatechange', function() {

        if (request.readyState === 4){

            console.log('Inside XHR If.');

            // Put JSON object into a variable
            var paragraphs = new Object();
            paragraphs = JSON.parse(request.responseText);

            // Read object items into an array
            var paragraphsArray = new Array();
            paragraphsArray = paragraphs.data;

            // Create counter variable
            var paragraphsLength = paragraphsArray.length;

            // Loop through domObjects and insert string data
            for(var i = 0; i < paragraphsLength; i++){
                domObjects[index].innerHTML = paragraphsArray[i];
                index++;
            }
        }
    });
    request.send();
})();