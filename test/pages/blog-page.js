import blogPageSelectors from "../selectors/blogPageSelectors";

class BlogPage{
    async openBlogPage(){
        await browser.url('/blog')
    }

}

export default new BlogPage();

