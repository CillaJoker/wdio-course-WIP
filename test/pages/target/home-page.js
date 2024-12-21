import TargetHomePageSelectors from "../../selectors/target/targetHomePageSelectors";
import { faker } from '@faker-js/faker';
import TargetHomePageValidators from "../../validators/target/targetHomePageValidators";
class TargetHomePage{
    async openHomePage(){
        await browser.url('/')
    }
    

    async searchForRandomItem(randomItem){
        await TargetHomePageSelectors.searchBar.waitForDisplayed;
        await TargetHomePageSelectors.searchBar.setValue(randomItem);
        await TargetHomePageSelectors.searchButton.click();
        await TargetHomePageSelectors.searchedForText.waitForDisplayed();
    }
    async searchWithTrendingSearch(){
        await TargetHomePageSelectors.searchBar.waitForDisplayed();
        await TargetHomePageSelectors.searchBar.click();
        const firstInList = await TargetHomePageSelectors.listOfTrendingSearches[0]
        const firstInItem = await TargetHomePageSelectors.listOfTrendingSearchesBTNs[0]
        const firstInItemValue = await firstInItem.getValue()
        await firstInList.click();
        await TargetHomePageSelectors.searchedForText.waitForDisplayed();
        await TargetHomePageValidators.verifyFirstTrendingSearchItem(firstInItemValue);
    }
    async openReg(){
        await TargetHomePageSelectors.signInBTN.waitForDisplayed();
        await TargetHomePageSelectors.signInBTN.click();
        await TargetHomePageSelectors.createAccountBTN.waitForDisplayed();
        await TargetHomePageSelectors.createAccountBTN.click();
    }
}

export default new TargetHomePage();