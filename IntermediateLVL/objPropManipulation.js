var animal = {
    name: "animal's name",
    age: 23,
    color: "yellow"
};

animal.name = "Animal";
animal.age = 3;
animal.color = "red";
animal.barain = true;

console.log(animal);

delete animal.color;

console.log(animal);
