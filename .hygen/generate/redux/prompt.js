module.exports = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the base name of reducer, action?',
        validate: answer => {
            if (answer !== '') {
                return true;
            }
        }
    }
];
