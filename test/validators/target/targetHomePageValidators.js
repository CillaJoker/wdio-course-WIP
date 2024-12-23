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
    async verifyCartSubTotal(itemCost){
        const subtotalText = await TargetHomePageSelectors.cartSubTotal
        await expect(subtotalText).toHaveText(expect.stringContaining(itemCost))
    }
    async verifyCartSubTotalChanged(initialSubTotal){
        const subtotalText = await TargetHomePageSelectors.cartSubTotal
        await expect(subtotalText).not.toHaveText(expect.stringContaining(initialSubTotal))
    }
}

export default new TargetHomePageValidators();