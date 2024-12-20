import blogPage from "../pages/blog-page"
import blogPageValidators from "../validators/blogPageValidators"
import allureReporter from '@wdio/allure-reporter'

describe('Recent Blog Posts', () => {
    it('Get all recent posts, verify the length is >10 and assert the number of posts is 5', async () => {
        allureReporter.addFeature('Blog')
        allureReporter.addSeverity('minor')
        //Open URL
        await blogPage.openBlogPage()
        await blogPageValidators.validateRecentPostPreview()
        await blogPageValidators.validateRecentPostCount()
    })

})