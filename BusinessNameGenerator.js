// Business name generator
console.log("WELCOME! To the Business Name Generator\nEnter your adjectives,Shop name And Ltds...")
let obj1 = {
    I1: "Crazy",
    I2: "Amazing",
    I3: "Fire",
}
let obj2 = {
    O1: "Engine",
    O2: "Foods",
    O3: "Garments",
}
let obj3 = {
    p1: "Bros",
    p2: "Limited",
    p3: "Hub",
}
for (const string in obj1) {
    //     console.log(obj1[0]+obj2[0]+obj3[0])
    let s0 = obj1[string]
    for (const str in obj2) {
        let s1 = obj2[str]
        for (const st in obj3) {
            let s2 = obj3[st]
            let res = s0.I1
            console.log(`${s0} ${s1} ${s2}`)
        }
    }
}