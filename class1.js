//Question 1: 
//Q1 on Clicking the Button append hello to the page

//The Document method querySelector() returns the first Element within
//the document that matches the specified selector,
//or group of selectors. If no matches are found, null is returned.

//TO identify something in DOM

  let btn1 = document.getElementById("btn-1");
  let btn2 = document.querySelector("#btn-2");
  let btn3 = document.getElementsByClassName("btn-3");

  //querySelector

  console.log('Getting Selected by getElementbyID' , btn1);
  console.log('Getting Selected by querySelector' ,btn2);
