import contactPageSelectors from "../selectors/contactPageSelectors";


class ContactPageValidators{
    async assertSuccessMessage(){
        await expect(contactPageSelectors.successMessage).toHaveText("Thanks for contacting us! We will be in touch with you shortly");
    }
}

export default new ContactPageValidators();