import contactPage from "../../pages/sdetUnicorns/contact-page"
import contactPageSelectors from "../../selectors/sdetUnicorns/contactPageSelectors"
import contactPageValidators from "../../validators/contactPageValidators"
import { faker } from '@faker-js/faker';
import allureReporter from '@wdio/allure-reporter'


describe('Contact Message Test', () => {
    it('Send contact message and verify the success modal', async () => {
    //Open URL
        allureReporter.addFeature('Contact')
        allureReporter.addSeverity('minor')
        await contactPage.openContactPage()
        await contactPageSelectors.inputName.setValue(faker.person.fullName())
        await contactPageSelectors.inputEmail.setValue(faker.internet.email())
        await contactPageSelectors.inputPhone.setValue(faker.phone.number())
        await contactPageSelectors.inputMessage.setValue(faker.lorem.paragraphs(2))
        await contactPageSelectors.submit.click()
        await contactPageValidators.assertSuccessMessage()
        
    })

})