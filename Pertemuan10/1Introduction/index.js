console.log('Hello All');

const name = 'Heru';
console.log(name);

const aboutMe = (about) => {
    const [name, nim] = about.split(', '); 
    return `Hi, nama saya ${name}\nNIM : ${nim}`;
};

console.log(aboutMe('Heru Purnomo, 535230031, main'));