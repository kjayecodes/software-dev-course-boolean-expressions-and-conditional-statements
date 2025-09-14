/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasWeapon = false;
const hasPotion = true; 

console.log("Welcome to the Adventure Game!"); // Introduction
console.log("You wake up in a dark forest."); // Setting the scene
console.log("There are four items in front of you: a torch, a map, a weapon, and a potion."); // Presenting items
console.log("You can only choose two items to take with you."); // Limiting choices

// Player chooses items
const item1 = readline.question("Choose your first item (torch/map/weapon/potion): ");
const item2 = readline.question("Choose your second item (torch/map/weapon/potion): ");
console.log(`You have chosen: ${item1} and ${item2}`); // Confirming choices
console.log("You see two paths: one leads to the mountains, the other to the village."); // Presenting choices
const choice = readline.question("Do you go to the 'mountains' or the 'village'? "); // Getting user input

// Conditional statements based on player choices and items

if (choice === "mountains" && hasTorch && hasMap) { 
  console.log("You safely navigate through the dark mountains."); 
} else if (choice === "mountains" && (!hasTorch || !hasMap)) {
  if (hasPotion) {
  console.log("You stumble in the dark and get injured, but you use your potion to heal and push forward through the mountains!");
  } else {
  console.log("It's too dangerous to proceed without both a torch and a map. You decide to turn back.");
  }
} else if (choice === "village" && hasWeapon && hasMap) {
  console.log("You arrive at the village and fend off attackers with your weapon. You survive!");
} else if (choice === "village" && (!hasWeapon || !hasMap)) {
  if (hasPotion) {
  console.log("You are attacked upon arrival and badly hurt, but you drink your potion, heal, and barely escape!");
  } else {
  console.log("You are attacked upon arrival and cannot defend yourself. The journey ends here.");
  }
} else {
  console.log("You wander aimlessly, unsure of where to go...");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/