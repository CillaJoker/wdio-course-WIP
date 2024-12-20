import homePage from "../pages/home-page"
import allureReporter from '@wdio/allure-reporter'

describe('Navigation Menu', () => {
    it('Get text of all menu items and assert them', async () => {
    //Open URL
        await homePage.openHomePage()
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
        ]
        const actualLinks = []
        await homePage.NavComponent.NavMenu.waitForDisplayed();
        const navLinks = await homePage.NavComponent.NavMenuList
        
        for(const link of navLinks){
            actualLinks.push(await link.getText())
        }

        await expect(expectedLinks).toEqual(actualLinks)

    })

})