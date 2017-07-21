console.log("main.js, yo!");

//start out by listing all of the variables from the HTML form that will be used in the program.
let height = document.getElementById("userHeight");
let character = document.getElementById("userCharacter");
let output = document.getElementById("grow-tree");

//this is weird because the HTML doesn't read spaces, I had to manually add spaces to the "space" variable. Its ugly, but it works!
let domSpace = "&nbsp&nbsp";

//this variable puts the space on the console.
let consoleSpace = " ";

// Once the user enters in a number, and a character, the user can either then just press the enter key (as long as the cursor is in one of the input fields), or click a button that is labeled "Grow your tree" and the tree should be shown in the console. This requires you to add an event listener to the button, as well as an event listener for the enter/return key.

//this code adds an event listener that tells the height and character to run the function growthattree when the enter key is pushed and released.
height.addEventListener('keyup', function (pushEnter) {
        //______.which tells javascript which key. 13 = enter. If I put other key codes, that key would work instead.
        if (pushEnter.which === 13) {
        growThatTree();
        }
    })

character.addEventListener('keyup', function (pushEnter) {
        if (pushEnter.which === 13) {
        growThatTree();
        }
    })

// Create a tree function that should build a pine tree out of a character in the Chrome dev tools console.
function growThatTree(){
		// The value for the height of the tree should be from user input in a <input type="text"> field in the DOM.
		height = Number(height.value);
		// The character to use should be from user input in a <input type="text"> field in the DOM.
		character = character.value;

		// If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.
		
        //this if statement puts all of the necessary must haves in order for the function to run.
        if ((height === 0 || character === "") || (height === 0 && character === "")){
            		alert("Please enter a value in both fields, Yo!");
            	};

        //this for loop tells the function to iterate through as many times as the user indicates height.
        for (let i = 0; i < height; i++){
            
            //because the index starts at 0, I have to add 1 so that the first star is printed to the DOM.
            let currentHeight = i + 1;

            //this variable names the number of spaces on the DOM needed before the user's selected character to make it look like a christmas tree.
            let addSpace = domSpace.repeat(height - currentHeight);

            //this identifies spaces for the console
            let clSpace = consoleSpace.repeat(height - currentHeight);
            
            //this variable is assigned to the number of characters that need to be repeated in each row. So, index + 1 (to start at 1 instead of 0) and each total amount of stars needed per line ends up equalling the current height of the current line - 1.
            let growth = character.repeat(i + 1 + currentHeight - 1);
    
            //each time the function runs, print each output to the DOM in succession.
            output.innerHTML += `<div>${addSpace}${growth}</div>`;
            console.log("", clSpace, growth);
        } ;   	

// It accepts a single object as an argument. The object should have two key/value pairs.
let treeStuff = {};

// A key that specifies the height of the pine tree.
treeStuff.height = height;
// A key that specifies which character to use to build the pine tree.
treeStuff.character = character;
console.log("treeStuff", treeStuff);

};

















