$(document).ready(function(){
  currentIndex = 0;
    // Upon page load, get the data from the server

    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        // yay! we have data!
        // console.log('returned data from server: ', data);
        // // var currentIndex = 0;
        // // var containers = $('.studentContainer');
        // // var numStudents = data.phirephiters.length;
        // console.log(numStudents);

        for (var i = 0; i < data.phirephiters.length; i++) {
          // console.log(.data.phirephiter.name.eq());
        // console.log(data.phirephiters[i].name);
        addingEveryoneWillyNilly(data.phirephiters[i]);
        addingColoredSelector();
        currentIndex;
        $('.studentContainer').hide();
        $('.studentContainer').eq(currentIndex).css("display", "inline-block");
        }

      }
    });//end ajax

    // append ONE persons info at DOM load
    function addingEveryoneWillyNilly(phirephiter) {
    $('#sliderContainer').append('<div class ="studentContainer"></div>');
    var $el = $('#sliderContainer').children().last();
    $el.append('<h2>Name: ' + phirephiter.name + '</h2>');
    $el.append('<img src ="' + phirephiter.imageURL + '" height = "300px" width = "300px"/>')
    $el.append('<h3>Git Hub User Name: ' + phirephiter.git_username + '</h3>');
    $el.append('<p> "' + phirephiter.shoutout + '"</p>')
} //ends adding willy nilly function

function addingColoredSelector(){
  $('#pickerContainer').append('<div class ="pickerButton"></div>');
}

// $('.pickerContainer').css("background-color", "white");
// $('.pickerContainer').eq(currentIndex).css("background-color", "black");


//UNHIDE A PERSON
// function unHidePerson() {
//   $('.studentContainer').this().css('display', 'block');
// }
//
// store the div in the object?

// function cyclePeople(inPerson){
//   var currentPerson = $('.studentContainer').eq(phirephiters[i]);
//   //     $('#sliderContainer').append('<div class ="studentContainer"></div>');
//   //     var $el = $('#sliderContainer').children().last();
//   //     $el.append('<h2>Name: ' + phirephiter.name + '</h2>');
//   //     $el.append('<img src ="' + phirephiter.imageURL + '" height = "300px" width = "300px"/>')
//   //     $el.append('<h3>Git Hub User Name: ' + phirephiter.git_username + '</h3>');
//   //     $el.append('<p> "' + phirephiter.shoutout + '"</p>')
// }


});

//images need to be wrapped with div tags

// On the DOM should be:
//
// One person's information
// A series of 18 (or the number of people in the data array) index points with the first person's
// index highlighted or called out in style differently than the others.
// A 'Next' button and a 'Previous' button
// Clicking on the Next button should navigate to the next person, clicking on the Previous button
// should navigate to the previous person. The highlighted index point should update also as you click through to other people.
// Person Display
//
// When a person is displayed, show their name, their Github link, and their piece of shoutout feedback.
// Only one person should be showcased at any given time.
//
// You will need to combine everything you learned this week to accomplish this task, and each of the challenges
// you have completed this week play a part in this task.
//
// Working Example
//
// Here is a similar example from Zeta so you can see the functionality. It's really ugly, however. The code is
// also minified (no cheating!):
//
// https://polar-ravine-37299.herokuapp.com/
//
// HARD MODE
// Include a fade out and fade in animation in-between transitioning people.
//
// PRO MODE
// Include a timer that moves to the next person if the user is not clicking on next or prev. If the user clicks on
// next or prev, the timer should be reset. The timer should transition between people every 10 seconds.
