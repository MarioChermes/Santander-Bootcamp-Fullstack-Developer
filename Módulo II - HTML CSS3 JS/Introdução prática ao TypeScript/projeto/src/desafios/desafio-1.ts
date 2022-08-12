// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";

// Resposta 1
let employee1 =  {
    code: 10,
    name: 'Jhon'
};

// Resposta 2
let employee2: {code: number, name: string} = {
    code: 10,
    name: 'Jhon'
};

// Resposta 3
interface employee {
    code: number,
    name: string
}

let employee3: employee = {
    code: 10,
    name: 'Jhon'
};
