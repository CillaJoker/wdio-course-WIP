import TargetHomePage from '../../pages/target/home-page'
import TargetHomePageValidators from '../../validators/target/targetHomePageValidators';
import TargetHomePageSelectors from '../../selectors/target/targetHomePageSelectors';
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

    it('Search Random Item and verify text', async () => {
        const randomItem = faker.commerce.product()
        await TargetHomePage.openHomePage();
        await TargetHomePage.searchForItem(randomItem)
        await TargetHomePageValidators.verifySearchItem(randomItem);
    }) 
    it('Search Random Item and Open registration', async () => {
        const randomItem = faker.commerce.product()
        await TargetHomePage.openHomePage();
        await TargetHomePage.searchForItem(randomItem)
        await TargetHomePage.openReg()
    })

    it('Search For Item, Add to cart, validate subtotal', async () => {
        const randomItem = faker.commerce.product()
        const firstItemPriceSelector = TargetHomePageSelectors.listOfPrices[0]
        await TargetHomePage.openHomePage();
        await TargetHomePage.searchForItem('macbook case')
        const firstItemPrice = await firstItemPriceSelector.getText()
        await TargetHomePage.OpenFirstItemAndAddToCart()
        await TargetHomePage.viewCartAfterAddingToCheckout()
        await TargetHomePageValidators.verifyCartSubTotal(firstItemPrice)
    }) 
    it('With an item in cart, update cart, validate the subtotal updated', async () => {
        await TargetHomePage.openHomePage();
        await TargetHomePage.clickViewCartIcon()
        const initialSubtotal = await TargetHomePageSelectors.cartSubTotal.getText()
        await TargetHomePage.updateCartQuant()
        await TargetHomePageValidators.verifyCartSubTotalChanged(initialSubtotal)
    }) 
    
})