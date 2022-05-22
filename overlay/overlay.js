// Cerate an inquirer promp to select the holiday
// Selected holiday will generate the select holiday card HTML 
// When the user selects the card it will then move tp the preview 

const generateCard = require("./generateHoliday");
const inquirer = require("inquirer");
const fs = require("fs");


function initApp() {

    function selectHoliday() {
        inquirer.prompt([
            
            {
               type: "list",
               name: "holiday",
               message: "Select Holiday",
               choices: [
                    "Martin Luther King, Jr. Day",
                    "Memorial Day",
                    "Juneteenth",
                    "Independence Day",
                    "Labor Day",
                    "Veterans Day",
                    "Thanksgiving Day",
                    "Christmas Day",
                    "New Year's Eve",
                    "Mother's Day",
                    "Easter",
                    "Halloween",
                    "Father's Day",
                    "Valentine's Day",
                    "Saint Patrick's Day"
               ] 
            }
            
        ]).then(choice => {
            switch(choice.holiday) {
                case "Martin Luther King, Jr. Day": ;
                break;
                case "Memorial Day": generateMemDay();
                break;
                case "Juneteenth": generateJune();
                break;
                case "Independence Day": generateIndDay();
                break;
                case "Labor Day": generateLaborDay();
                break;
                case "Veterans Day": generateVetDay();
                break;
                case "Christmas Day": generateXmas();
                break;
                case "New Year's Eve": generateNYE();
                break;
                case "Mother's Day": generateMomDay();
                break;
                case "Easter": generateEaster();
                break;
                case "Halloween": generateHalloween();
                break;
                case "Father's Day": generateDadDay();
                break;
                case "Valentine's Day": generateValDay();
                break;
                case "Saint Patrick's Day": generateStPat();
                break;
                default: generateHolidayCard();
            }
        });

        function generateMlk() {
            fs.writeFileSync("./thumbnail.html", generateCard(), "utf-8");
        };
    }
    
    selectHoliday();

}
initApp();