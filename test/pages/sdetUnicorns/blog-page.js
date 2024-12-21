import blogPageSelectors from "../../selectors/sdetUnicorns/blogPageSelectors";

class BlogPage{
    async openBlogPage(){
        await browser.url('/blog')
    }

}

export default new BlogPage();

