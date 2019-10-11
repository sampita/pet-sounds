console.log('you is strong. you is smart. you is blessed.')

const myPet = {
    name: "Rosie",
    species: "dog",
    nicknames: [
        "Roslyn J DizzleButt",
        "Rosita Bonita",
        "Ol Graybeard"
    ],
    age: "2 years",
    bark: function (passersby) {
        window.alert(`WOOF! WOOF! at ${passersby}`)
    },
    run: function () {
        window.alert('zoo0oo0mies')
    },
    sleep: function () {
        window.alert('snuggle time')
    },
}

myPet.bark()
myPet.run()
myPet.sleep()