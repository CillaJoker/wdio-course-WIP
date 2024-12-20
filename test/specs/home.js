import aboutPage from "../pages/about-page"
import homePage from "../pages/home-page"
import homePageSelectors from "../selectors/homePageSelectors"
import homePageValidators from "../validators/homePageValidators"
import allureReporter from '@wdio/allure-reporter'

describe('Home', () => {
    before(async() => {
        console.log('THIS IS FOR SETUP BEFORE ANY TESTING STARTS')
 
    })
    beforeEach(async() => {
        console.log('THIS IS HAPPENING BEFORE EACH TEST')
        await homePage.openHomePage()    
    })

    it('Open URL & assert title', async () => {
        allureReporter.addEpic('TopJourney')
        allureReporter.addSeverity('critical')
        await homePageValidators.assertHomeTitleText()
    })
    it('Open About Page & assert URL', async () => {
        allureReporter.addEpic('TopJourney')
        allureReporter.addSeverity('critical')
        await aboutPage.openAbout()
        await homePageValidators.assertAboutPageURL()
})
    it('Click Get Started Button & assert URL contains get-started text', async () => {
        allureReporter.addEpic('TopJourney')
        allureReporter.addSeverity('critical')
        await homePageSelectors.btnGetStarted.click();
        await homePageValidators.assertGetStartedURLText()
})    

    it('Click Logo Button & assert URL DOES NOT CONTAIN get-started text', async () => {
        allureReporter.addEpic('TopJourney')
        allureReporter.addSeverity('critical')
        await homePage.openGetStarted() 
        await homePageSelectors.sdetULogo.click();
        await homePageValidators.assertNOGetStartedURLText()
})

    it('Find Header Element & assert text', async () => {
        allureReporter.addEpic('TopJourney')
        allureReporter.addSeverity('critical')
        await homePageValidators.assertHeadingElementText()
})
after(async() => {
    console.log('THIS IS FOR CLEANUP AFTER ALL TESTING ENDS')

})
afterEach(async() => {
    console.log('THIS IS HAPPENING AFTER EACH TEST')
    await homePage.openHomePage()    
})
                    
})