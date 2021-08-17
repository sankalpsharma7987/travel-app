const { invalidDestinationValue,validDestinationValue } = require('./fixtures/inputFieldsValue.js');
const { validateDestinationInput } = require('../src/client/js/lib/validation/validateDestinationInput');

const validateTextFieldResults = ()=>{
    test('Validate text field for destination',()=>{
        expect(validateDestinationInput(invalidDestinationValue)).toBeFalsy();
        expect(validateDestinationInput(validDestinationValue)).toBeTruthy();
    })
    
}



module.exports = { validateTextFieldResults };