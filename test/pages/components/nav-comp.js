class NavComponent{
    get NavMenu(){
        return $('.zak-primary-nav')
    }
    get NavMenuList(){
        return $$('.zak-primary-nav li[id*=menu]')
    }
}

export default new NavComponent();