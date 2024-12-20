import blogPageSelectors from "../selectors/blogPageSelectors";


class BlogPageValidators{
    async validateRecentPostCount(){
        const listOfPosts = await blogPageSelectors.listOfPosts
        await expect(listOfPosts).toHaveLength(5);
    }

    async validateRecentPostPreview(){
        const listOfPosts = await blogPageSelectors.listOfPosts
        for(const post of listOfPosts){
            const text = await post.getText();
            await expect(text.length).toBeGreaterThan(10)
        }
    }
}

export default new BlogPageValidators();