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
    get listOfPrices(){
        return $$('.sc-f9ebbc4c-3')
    }

    get listOfSearchResults(){
        return $$('.sc-f8a8939a-0 .h-display-flex')
    }
    get itemPageObj(){
        return $('.sc-d5e91dca-3')
    }

    async addToCartButtonSelector (item)  {
        const addToCartButtonBase = '.sc-529a2ea7-0 button[id="addToCartButtonOrTextIdFor'
        const addToCartButtonFull = addToCartButtonBase.concat(item, '"]')
        return $(addToCartButtonFull)
    }
    get viewCartBTN(){
        return $('.sc-e487bf3b-1')
    }
    get checkOutButtons(){
        return $$('.sc-493c141a-2 .flfJAZ')
    }

    get cartSubTotal(){
        return $('.sc-93ec7147-3')
    }
    get changeQuantity(){
        return $('.sc-e78156cc-2')
    }
    }
    
    
    export default new TargetHomePageSelectors();