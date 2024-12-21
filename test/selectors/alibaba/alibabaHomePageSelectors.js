class AlibabaHomePageSelectors{

    get searchButton(){
        return $('.fy23-icbu-search-bar-inner-button')
    }
    get searchedForText(){
        return $('.seb-refine-result_all')
    }
    get searchBarInput(){
        return $('.search-bar-input')
    }
    }
    
    
    export default new AlibabaHomePageSelectors();