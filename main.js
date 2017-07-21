console.log("main.js, yo!");



// Once the user enters in a number, and a character, the user can either then just press the enter key (as long as the cursor is in one of the input fields), or click a button that is labeled "Grow your tree" and the tree should be shown in the console. This requires you to add an event listener to the button, as well as an event listener for the enter/return key.




let height = document.getElementById("userHeight");
let character = document.getElementById("userCharacter");
let output = document.getElementById("grow-tree");
let space = "&nbsp&nbsp"

// Create a tree function that should build a pine tree out of a character in the Chrome dev tools console.



function growThatTree(){
		// The value for the height of the tree should be from user input in a <input type="text"> field in the DOM.
		height = Number(height.value);
		// The character to use should be from user input in a <input type="text"> field in the DOM.
		character = character.value;

		// If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.
		if ((height === 0 || character === "") || (height === 0 && character === "")){
            		alert("Please enter a value in both fields, Yo!");
            	};
        for (let i = 0; i < height; i++){

            let currentHeight = i + 1;
            let addSpace = space.repeat(height - currentHeight);
            let growth = character.repeat(i + 1 + currentHeight - 1);
    
            output.innerHTML += `<div>${addSpace}${growth}</div>`;
           
        } ;   	

// It accepts a single object as an argument. The object should have two key/value pairs.
let treeStuff = {};

// A key that specifies the height of the pine tree.
treeStuff.height = height;
// A key that specifies which character to use to build the pine tree.
treeStuff.character = character;
console.log("treeStuff", treeStuff);


	// output.innerHTML = "";

};



// document.onkeydown=function(){
//     if(window.event.keyCode=='13'){
//         submitForm();
//     }
// }

// function submitForm(){
//     document.submitForm.submit();
//     document.submitForm.method='post';
// }
















