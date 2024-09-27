//Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:

//   Use at least one array.
// Use at least two classes.
// Your menu should have the options to create, view, and delete elements.

//Classes like menu for like DnD was my idea for this project 

//Menu Rpg 



//RpgClasses
    //Type
    //Role

 class RpgClasses{
    constructor(Type, Role){
      this.Type = Type;
      this.Role = Role;  
    }
}

// Menu Class
class Menu {
    constructor() {
        // Array to store RPG classes
        this.class = [];
    }

    //add class 
    // prompt for a Type
    // prompt for a Role
    //create new class and push Class into array
    addClass() {
        let classType = prompt("Enter the Type of Class example Fighter:");
        let classRole1 = prompt("Enter the Role of the Class example Tank:");
        this.class.push(new RpgClasses(classType, classRole1));
        console.log(`Class added: ${classType}, Role: ${classRole1}`);
    }
    //remove class
    deleteClass() {
        let classIndex = prompt("Enter class index to DELETE:");
        this.class.splice(classIndex, 1);
    }
//note to self always check for proper cap's usage 
    //view class
    viewClass() {
        let displayClass = '';
        for(let i=0; i < this.class.length; i++){
            displayClass += `
            ${i}) ${this.class[i].Type} ${this.class[i].Role}`
        }

        alert(`
            Class List:
            ---------------
            ${displayClass}
            `);

    }

    // start the menu
    start(){
        let selection = this.showMainMenu();
        
        while(selection !== "0"){
            switch(selection){

                case "1": this.addClass();
                break;

                case "2": this.deleteClass();
                break;

                case "3": this.viewClass();
                break;

                default: selection = "0";
            }
            selection = this.showMainMenu();
        }
        alert("Exiting Menu. . . ");
    }




        //see a menu
        showMainMenu() {
            return prompt(`
                Main Menu:
                --------------
                0) Exit Menu
                1) Add Class
                2) Delete Class
                3) View all Classes
                `);
        }
    }


//instantiate the menu and invoke the start method 

//let RpgClasses1 = new RpgClasses("Fighter","Tank");
//console.log(RpgClasses1);

let menu = new Menu();

menu.start();

//really like to make my struggle worst by making it classes for rpg as well had to comb trhought the code alot lol was fun tho 