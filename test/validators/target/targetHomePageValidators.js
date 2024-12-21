import TargetHomePageSelectors from "../../selectors/target/targetHomePageSelectors";

class TargetHomePageValidators{
    async verifyURL(){
        await expect(browser).toHaveUrl(expect.stringContaining('target'))
    }
    async verifyTitle(){
        await expect(browser).toHaveTitle(expect.stringContaining('Target : Expect More. Pay Less.'))
    }
    async verifySearchItem(item){
        await expect(TargetHomePageSelectors.searchedForText).toHaveText(expect.stringContaining(`${item}`))
    }
    async verifyFirstTrendingSearchItem(item){
        await expect(TargetHomePageSelectors.searchedForText).toHaveText(expect.stringContaining(`${item}`))
    }
    
}

export default new TargetHomePageValidators();