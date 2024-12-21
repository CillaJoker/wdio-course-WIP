import { faker } from '@faker-js/faker';
import TargetRegPageSelectors from "../../selectors/target/targetRegistrationSelectors";
class TargetRegPage{
    async inputRegInfo(){
        await TargetRegPageSelectors.emailField.waitForDisplayed();
        await TargetRegPageSelectors.emailField.setValue(faker.internet.email());
        await TargetRegPageSelectors.firstNameField.setValue(faker.person.firstName());
        await TargetRegPageSelectors.lastNameField.setValue(faker.person.lastName());
        await TargetRegPageSelectors.phoneNumberField.setValue(faker.phone.number());
        await TargetRegPageSelectors.passwordCheckbox.click();
        await TargetRegPageSelectors.passwordField.setValue(faker.internet.password());
    }
    async submitRegInfo(){
        await TargetRegPageSelectors.createAccount.click()
    }

}

export default new TargetRegPage();