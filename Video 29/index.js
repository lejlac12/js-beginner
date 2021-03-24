// for-in
const person = {
    name: 'Lejla',
    age: 24
};

for (let key in person)
    console.log(key, person[key]);

const colors = ['blue', 'green', 'pink'];

for (let index in colors)
    console.log(index, colors[index]);