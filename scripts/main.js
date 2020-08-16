// ****ADDING AN IMAGE CHANGER****

// store reference to <img> element in myImage variable
let myImage = document.querySelector('img');

// make myImage's onclick event handler property equal to an anonymous function
myImage.onclick = function() { 
    // retrieve value of the image's 'src' attribute
    let mySrc = myImage.getAttribute('src');
    if (mySrc == 'images/turtle1.png') {
        myImage.setAttribute('src', 'images/kangaroo.png');
    } else {
        myImage.setAttribute('src', 'images/turtle1.png');
    }
}

// ****ADDING A PERSONALIZED WELCOME MESSAGE

// store references to new button inside variables
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    // display dialog box, ask user to enter data, and stores in myName after user clicks OK
    let myName = prompt('Please enter your name.');
    if (!myName) { // if name has no value, prompt again
        setUserName();
    }
    // allows us to store data in the browswer and retrieve it later
    localStorage.setItem('name', myName);
    myHeading.textContent = 'You, ' + myName + ', are not a turtle...';
}

if (!localStorage.getItem('name')) { // check whether 'name' data exists
    setUserName(); // create 'name' data
} else {
    let storedName = localStorage.getItem('name'); // retrieve stored name
    myHeading.textContent = 'You,' + storedName + ', are not a turtle...';
}

myButton.onclick = function() {
    setUserName();
}
