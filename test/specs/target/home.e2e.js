import TargetHomePage from '../../pages/target/home-page'
import TargetHomePageValidators from '../../validators/target/targetHomePageValidators';
import { faker } from '@faker-js/faker';

describe('Target Home Page', () => {

    it('Access url, verify url and title', async () => {
        await TargetHomePage.openHomePage();
        await TargetHomePageValidators.verifyURL();
        await TargetHomePageValidators.verifyTitle();
    })
    it('Search w/ Trending Suggestion and verify text', async () => {
        await TargetHomePage.openHomePage();
        await TargetHomePage.searchWithTrendingSearch()
    })

    it('Search Random Content and verify text', async () => {
        const randomItem = faker.commerce.product()
        await TargetHomePage.openHomePage();
        await TargetHomePage.searchForRandomItem(randomItem)
        await TargetHomePageValidators.verifySearchItem(randomItem);
    })


})