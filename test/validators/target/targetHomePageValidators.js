import TargetHomePageSelectors from "../../selectors/target/targetHomePageSelectors";

class TargetHomePageValidators{
    async verifyURL(){
        await expect(browser).toHaveUrl(expect.stringContaining('target'))
    }
    async verifyTitle(){
        await expect(browser).toHaveTitle(expect.stringContaining('Target : Expect More. Pay Less.'))
    }
    async verifySearchItem(text){
        expect(await TargetHomePageSelectors.searchedForText).toHaveText(text)
    }
    async verifyFirstTrendingSearchItem(item){
        expect(await TargetHomePageSelectors.searchedForText).toHaveText(item)
    }

}

export default new TargetHomePageValidators();