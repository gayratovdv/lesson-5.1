let day = Number(prompt("1 dan 7 gacha son kiriting..."));
let dayName;

switch (day) {
    case 1:
        dayName = "Sunday"
        break;
    case 2:
        dayName = "Monday"
        break;
    case 3:
        dayName = "Tuesday"
        break;
    case 4:
        dayName = "Wednesday"
        break;
    case 5:
        dayName = "Thursday"
        break;
    case 6:
        dayName = "Firday"
        break;
    case 7:
        dayName = "Saturday"
        break;
    default:
        dayName = "Invalid day"
}

alert(dayName);