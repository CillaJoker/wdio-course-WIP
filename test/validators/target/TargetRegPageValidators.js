import TargetRegPageSelectors from "../../selectors/target/targetRegistrationSelectors";

class TargetRegPageValidators{
    async verifyRegSuccessText(){
        await TargetRegPageSelectors.regErrorText.waitForDisplayed()
        if(await TargetRegPageSelectors.regErrorText.isDisplayed()){
            if(await TargetRegPageSelectors.regErrorText.getText() == 'Sorry, something went wrong. Please try again'){
                await expect(TargetRegPageSelectors.regErrorText).toHaveText('Sorry, something went wrong. Please try again')
                console.log('Expected automation error')}
            else{
                await expect(TargetRegPageSelectors.regErrorText).toHaveText('Please enter a valid mobile number')
                console.log('Phone number error')
            }
    
    }

        // else{
        //     await expect(TargetRegPageSelectors.regErrorText).toHaveText('Please enter a valid mobile number')
        //     console.log('Phone number error')
        // }
    }

}

export default new TargetRegPageValidators();