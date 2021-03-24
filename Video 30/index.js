const person = {
    name: 'Lejla',
    age: 24
};

for (let key in person)
    console.log(key, person[key]);

// for-of

const colors = ['blue', 'green', 'pink'];

for (let color of colors)
    console.log(color);