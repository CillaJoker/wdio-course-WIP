import targetHomePageSelectors from "../../selectors/target/targetHomePageSelectors";
import TargetHomePageSelectors from "../../selectors/target/targetHomePageSelectors";
import TargetHomePageValidators from "../../validators/target/targetHomePageValidators";
class TargetHomePage{
    async openHomePage(){
        await browser.url('/')
    }
    

    async searchForItem(item){
        await TargetHomePageSelectors.searchBar.waitForDisplayed;
        await TargetHomePageSelectors.searchBar.setValue(item);
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
    async OpenFirstItemAndAddToCart(){
        const firstSearchResult = TargetHomePageSelectors.listOfSearchResults[0]
        await firstSearchResult.scrollIntoView()
        await firstSearchResult.click()
        await TargetHomePageSelectors.itemPageObj.waitForDisplayed()
        const itemNumber = await TargetHomePageSelectors.itemPageObj.getAttribute('childorstandalonetcin')
        const addToCartBTN = await TargetHomePageSelectors.addToCartButtonSelector(itemNumber)
        await addToCartBTN.waitForDisplayed()
        await addToCartBTN.click()
    }
    async viewCartAfterAddingToCheckout(){
        const viewCartBtn = await TargetHomePageSelectors.checkOutButtons[1]
        await viewCartBtn.waitForDisplayed()
        await viewCartBtn.click()
    }
    async clickViewCartIcon(){
        await TargetHomePageSelectors.viewCartBTN.waitForDisplayed()
        await TargetHomePageSelectors.viewCartBTN.click()
    }
    async updateCartQuant(){
        await TargetHomePageSelectors.changeQuantity.waitForDisplayed()
        await TargetHomePageSelectors.changeQuantity.selectByIndex(3)
    }
}

export default new TargetHomePage();