class HomePage{
    async openAbout(){
        await browser.url('/about/')
    }
}

export default new HomePage();