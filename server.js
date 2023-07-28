const express = require('express');
const { faker } = require('@faker-js/faker')

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const createUser = () => {
    const newUser = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
    return newUser;
};

const createCompany = () => {
    const newCompany = {
        name: faker.company.name(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country(),
        },
    };
    return newCompany;
};

app.post("/api/users/new", (req, res) => {
    let newUSer = createUser();
    res.json({ user: newUSer });
});

app.post("/api/companies/new", (req, res) => {
    let newCompany = createCompany();
    res.json({ company: newCompany });
});

app.post("/api/user/company", (req, res) => {
    let newUser = createUser();
    let newCompany = createCompany();
    res.json({
        user: newUser,
        company: newCompany,
    });
});

const server = app.listen(8000, () =>
    console.log(`El servidr está funcionando en el puerto ${server.address().port}!`)
)
