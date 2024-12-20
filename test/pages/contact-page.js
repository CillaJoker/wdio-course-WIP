
class ContactPage{
    async openContactPage(){
        await browser.url('/contact/')
    }
    async openGetStarted(){
        await browser.url('/#get-started')
    }

}

export default new ContactPage();