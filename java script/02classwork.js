const playerName = prompt("Enter character name");

if (playerName === "" ){
    alert(`Please enter a name`);
} else console.log("Chosen name:", playerName);

while (true) {
    playerClass = prompt("Enter your class (Mage or Warrior):");
    playerClass = playerClass.toLowerCase();
    
    if (playerClass === "mage") {
        console.log("Chosen class:", playerClass);
        break;
    } else if (playerClass === "warrior") {
        console.log("Chosen class:", playerClass);
        break;
    } else {
        alert("Invalid class! Please enter 'Mage' or 'Warrior'.");
    }
}

while (true) {
    quest1 = prompt(`You need a weapon for your journey. Please choose between a Staff or a Sword ${playerName} the ${playerClass}!`);
    quest1 = quest1.toLowerCase();
    
    if (quest1 === "staff") {
        console.log(`Chosen weapon:`, quest1);
        break;
    } else if (quest1 === "sword") {
        console.log(`Chosen weapon:`, quest1);
        break;
    } else {
        alert(`Invalid choice! Please type 'Staff' or 'Sword'.`);
    }
}

while (true) {
    quest2 = prompt(`Shortly after leaving your village, you come to a fork in the road. You must choose a path. The path to the left is dangerous but more rewarding. The path to the right is safer and less rewarding. Choose wisely ${playerName} the ${playerClass}!`);
    quest2 = quest2.toLowerCase();
    
    if (quest2 === "left") {
        console.log(`Chosen path:`, quest2);
        alert(`You enter the dark forest where danger lurks around every corner.`);
        
        var fightOrRun = prompt("You encounter a bear! Do you want to fight or run?");
        fightOrRun = fightOrRun.toLowerCase();
        console.log("Fight choice:", fightOrRun);

        if (fightOrRun === "fight") {
            alert(`You decide to fight the bear. It's a tough battle, but you manage to defeat it.`);
        } else if (fightOrRun === "run") {
            alert(`You decide to run away from the bear. You escape, but you lose some valuable items in the process.`);
        } else {
            alert(`Invalid choice! Please type 'Fight' or 'Run'.`);
        }

        break;
    } else if (quest2 === "right") {
        console.log("Chosen path:", quest2);
        alert(`You walk around the dark forest, avoiding the most dangerous enemies.`);
        
        var fightOrRun = prompt("You encounter a frog! Do you want to fight or run?");
        fightOrRun = fightOrRun.toLowerCase();
        console.log("Fight choice",fightOrRun);

        if (fightOrRun === "fight") {
            alert(`You decide to fight the frog. It's a quick battle, and you emerge victorious.`);
        } else if (fightOrRun === "run") {
            alert(`You decide to run away from the frog. You aren't sure why you ran, but you did.`);
        } else {
            alert(`Invalid choice! Please type 'Fight' or 'Run'.`);
        }
        
        break;
    } else {
        alert(`Invalid choice! Please choose 'Left' or 'Right'.`);
    }
}

let shillings = 5; 

while (true) {
    quest3 = prompt(`The paths through the forest and around the forest merge. You come upon a village and enter the tavern. The bartender offers you an ale for 1 shilling or a whiskey for 2 shillings. You have ${shillings} in your coin pouch.`);
    quest3 = quest3.toLowerCase();
    
    if (quest3 === "ale" && shillings >= 1) {
        console.log("Chosen drink:", quest3);
        alert("You spent 1 shilling on ale. You have " + (shillings - 1) + " shillings left.");
        shillings -= 1;
        console.log("Shillings remaining:", shillings);
        break;
    } else if (quest3 === "whiskey" && shillings >= 2) {
        console.log("Chosen drink:", quest3);
        alert("You spent 2 shillings on whiskey. You have " + (shillings - 2) + " shillings left.");
        shillings -= 2;
        console.log("Shillings remaining:", shillings);
        break;
    } else if (quest3 === "ale" || quest3 === "whiskey") {
        alert("You don't have enough shillings for that drink.");
    } else {
        alert("Invalid drink! Please enter 'ale' or 'whiskey'.");
    }
}

  let story = `Welcome, ${playerName} the ${playerClass}!\n`;
  story += `You armed yourself with a ${quest1} and set out on your journey.\n`;
  story += `You faced a fork in the road and chose the path to the ${quest2}.\n`;
  if (quest2 === "left") {
      story += `On the left path, you encountered a bear. You decided to ${fightOrRun}.\n`;
  } else if (quest2 ==="right") {
      story += `On the right path, you encountered a frog. You decided to ${fightOrRun}.\n`
  }
  story += `You entered the tavern and bought a ${quest3}.\n`;
  story += "The adventure continues...";

  alert(story);
