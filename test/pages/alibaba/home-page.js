import AlibabaHomePageSelectors from "../../selectors/alibaba/alibabaHomePageSelectors";


class AlibabaHomePage{
    async openHomePage(){
        await browser.url('/')
    }
    

    async searchForRandomItem(){
        await AlibabaHomePageSelectors.searchButton.waitForDisplayed();
        await AlibabaHomePageSelectors.searchButton.click();
        await AlibabaHomePageSelectors.searchedForText.waitForDisplayed();
    }
}

export default new AlibabaHomePage();