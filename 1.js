let user = {
  name: "Mike",
  friend: ["John", "Paul", "Jimmy"],
  families: [
    { name: "David", age: 20 },
    { name: "Ava", age: 25 },
  ],
  location: {
    region: "England",
    country: "United Kingdom",
  },
  aboutMe: {
    status: "Single",
    pet: "Dog",
  },
};
////////////////////
let {
  location: { region: region2 },
  aboutMe,
  friend: [friendName],
  families: [{ name: familyOneName }, { age: familyTwoAge }],
} = user;
//EX1
console.log(aboutMe); //{status: "Single", pet: "Dog",}
//EX2
console.log(region2); //England
//EX3
console.log(friendName); //John
//EX4
console.log(familyOneName, familyTwoAge); //David 25
///////////////////
