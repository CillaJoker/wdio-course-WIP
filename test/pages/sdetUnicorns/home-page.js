import NavComponent from "./components/nav-comp"; 


class HomePage{
    async openHomePage(){
        await browser.url('/')
    }
    async openGetStarted(){
        await browser.url('/#get-started')
    }
    get NavComponent (){
        return NavComponent;
    }
}

export default new HomePage();