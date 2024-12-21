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
        const firstInList = TargetHomePageSelectors.listOfTrending[0]
        await TargetHomePageSelectors.searchBar.waitForDisplayed;
        await TargetHomePageSelectors.searchBar.click();
        await firstInList.click();
        await TargetHomePageSelectors.searchedForText.waitForDisplayed();
        await TargetHomePageValidators.verifyFirstTrendingSearchItem(firstInList.getText());
    }
}

export default new TargetHomePage();