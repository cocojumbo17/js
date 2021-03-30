//alert("Loaded")
//document.querySelector("h1").textContent = "Who are you?"
const persone = new Object({
    name: "Vasia",
    age: 22,
    phone: "800-455-356"
})

//console.log(`persone: ${persone}`)

const otherpersone = Object.create(persone)
otherpersone.name = "Kolia"

//console.log("otherpersone: " + otherpersone)

//function a() {
//    return "Name: " + this.name
//}

//console.log(a.call(persone))
//console.log(a())
const logger = {
    keys() {
        console.log(`keys: ${Object.keys(this)}`)
    },

    keysValues() {
        Object.keys(this).forEach((key) => {
            console.log(`"${key}": ${this[key]}`)
        })
    },
    withBorders(top = false, middle = false, bottom = false) {
        const ks = Object.keys(this)
        console.group(`${this.name} [${ks.length}]`)
        if (top)
            console.log('-----Start------')

        Object.keys(this).forEach((key,ind,arr) => {
            console.log(`"${key}": ${this[key]}`)
            if (middle && ind != arr.length-1)
                console.log('----------------')
        })
        if (bottom)
            console.log('------End-------')
        console.groupEnd()
    }
}
logger.keys.call(persone)
//logger.keys.call(otherpersone)
logger.keysValues.call(persone)
//logger.keysValues.call(otherpersone)
logger.withBorders.call(persone, true, true, true)
logger.withBorders.call(otherpersone, true, true, true)
