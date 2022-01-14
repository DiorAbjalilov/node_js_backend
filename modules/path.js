const path = require("path");

// besname (fayil nomi)
// console.log(path.basename(__filename));

// basename (papka nomi)
// console.log(path.basename(__dirname));

// Extname (fayil kengaytmasi))
// console.log(path.extname(__filename));

// All name (Tepadagilarni barchasiga OBJ)
const pathObj = path.parse(__filename);
console.log(pathObj);

// String Convertsiya (String ko'rinishiga o'tlazadi)
console.log(path.join(__dirname, "dataBase", "mongodb", "db.js"));
