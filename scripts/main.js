console.log('you is kind. you is smart. you is important.')

const myPet = {
    name: "Rosie",
    species: "dog",
    nicknames: [
        "Roslyn J DizzleButt",
        "Rosita Bonita",
        "Ol Graybeard"
    ],
    age: "2 years",
    favoriteToys: [
    ],
    bark: function (passersby) {
        window.alert(`WOOF! WOOF! at ${passersby}`)
    },
    run: function () {
        window.alert('zoo0oo0mies')
    },
    sleep: function () {
        window.alert('snuggle time')
    },
    play: function (toy) {
        if (toy.includes("squeaky")) {
            this.favoriteToys.push(toy);
            window.alert(`Rosie loves to play with her ${myPet.favoriteToys}`);
        }
    }
}

myPet.bark("amazon delivery man")
myPet.run()
myPet.sleep()
myPet.play("squeaky ball")

console.log(myPet);