function getAdmins (map) {
    for (user of map) {
        if (user[1] === "ADMIN") {
            console.log(`O usuário ${user[0]} é um administrador(a)`)
        }
    }
};

const users = new Map();

users.set('Stephany', 'SUDO');
users.set('Luiz', 'ADMIN');
users.set('Elvira', 'ADMIN');
users.set('Carolina', 'USER');
users.set('Guilherme', 'USER');

getAdmins(users);