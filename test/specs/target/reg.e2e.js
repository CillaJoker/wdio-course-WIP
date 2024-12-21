import TargetHomePage from '../../pages/target/home-page'
import TargetRegPage from '../../pages/target/reg-page'
import TargetRegPageValidators from '../../validators/target/TargetRegPageValidators';

describe('Target Registration Page', () => {

    it('Open Reg and register account', async () => {
        await TargetHomePage.openHomePage();
        await TargetHomePage.openReg();
        await TargetRegPage.inputRegInfo()
        await TargetRegPage.submitRegInfo()
        await TargetRegPageValidators.verifyRegSuccessText()
    })
    

})