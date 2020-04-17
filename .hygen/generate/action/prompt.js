module.exports = [
    {
        type: 'input',
        name: 'actionName',
        message: 'What is the action name?',
        validate: answer => {
            if (answer !== '') {
                return true;
            }
        }
    }
];
