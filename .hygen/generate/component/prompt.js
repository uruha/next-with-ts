module.exports = [
    {
        type: 'select',
        name: 'type',
        message: 'What is the component type?',
        choices: ['pages', 'default']
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the component name?',
        validate: answer => {
            if (answer !== '') {
                return true;
            }
        }
    }
];
