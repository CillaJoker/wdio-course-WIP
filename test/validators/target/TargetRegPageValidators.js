import TargetRegPageSelectors from "../../selectors/target/targetRegistrationSelectors";

class TargetRegPageValidators{
    async verifyRegSuccessText(){
        await expect(TargetRegPageSelectors.regErrorText).toHaveText('Sorry, something went wrong. Please try again')
    }

}

export default new TargetRegPageValidators();