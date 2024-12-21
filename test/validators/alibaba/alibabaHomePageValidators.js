import AlibabaHomePageSelectors from "../../selectors/alibaba/alibabaHomePageSelectors";

class AlibabaHomePageValidators{
    async verifyURL(){
        await expect(browser).toHaveUrl(expect.stringContaining('alibaba'))
    }
    async verifyTitle(){
        await expect(browser).toHaveTitle(expect.stringContaining('Alibaba.com'))
    }
    async verifySearchItem(){
        expect(await AlibabaHomePageSelectors.searchedForText).toHaveText((AlibabaHomePageSelectors.searchBarInput.getText()))
    }


}

export default new AlibabaHomePageValidators();