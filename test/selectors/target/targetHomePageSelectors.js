class TargetHomePageSelectors{
    get searchBar(){
        return $('.sc-4596e520-2')
    }
    get searchButton(){
        return $('.sc-4596e520-3')
    }
    get searchedForText(){
        return $('.h-margin-l-x2')
    }
    get listOfTrendingSearches(){
        return $$('.sc-bd5d6398-0')
    }
    get listOfTrendingSearchesBTNs(){
        return $$('.sc-bd5d6398-0 button')
    }
    get signInBTN(){
        return $('.h-margin-r-x3')
    }
    get createAccountBTN(){
        return $('.sc-ddc722c0-0.sc-3d5333d1-0.flfJAZ.jaKlHa.h-whiteSpace-normal.h-margin-b-tight')
    }
    }
    
    
    export default new TargetHomePageSelectors();