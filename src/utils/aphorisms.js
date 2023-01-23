var osmosis = require("osmosis");
var fs = require("fs");


function getAphorism() {
  osmosis
    .get("www.dgmlive.com/")
    .find("#app-body > div > div > p")
    .set("aphorism")
    .data(function (listing) {
      let aphorism = listing.aphorism;

      let file = fs.readFileSync("aphorisms.json");
      let data = JSON.parse(file);

      data.push(aphorism);

      fs.writeFileSync("aphorisms.json", JSON.stringify(data));
    })
    .log(console.log)
    .error(console.log)
    .debug(console.log);
}

setInterval(getAphorism, 10000);