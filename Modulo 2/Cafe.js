let gostodeCafe

console.log("voce gosta de cafe")
process.stdin.once("data", function (data) {
gostodeCafe = data.toString().trim()
processamento(gostodeCafe)
process.exit()

})
function processamento (gostodeCafe) {

    if(gostodeCafe.toLowerCase() == "sim") {
        console.log("cafe é bom")}
        else {
            console.log("como viver sem")}
    } 