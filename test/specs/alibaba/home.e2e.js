import AlibabaHomePage from '../../pages/alibaba/home-page'
import AlibabaHomePageValidators from '../../validators/alibaba/alibabaHomePageValidators';
import { faker } from '@faker-js/faker';

describe('Alibaba Home Page', () => {

    it('Access url, verify url and title', async () => {
        await AlibabaHomePage.openHomePage();
        await AlibabaHomePageValidators.verifyURL();
        await AlibabaHomePageValidators.verifyTitle();
    })

    it('Search Content and verify text', async () => {
        await AlibabaHomePage.openHomePage();
        await AlibabaHomePage.searchForRandomItem()
        await AlibabaHomePageValidators.verifySearchItem();
    })
})