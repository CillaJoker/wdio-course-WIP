class ContactPageSelectors{
get inputName (){
   return $('.contact-name input')
}
get inputEmail (){
    return $('.contact-email input')
 }
 get inputPhone (){
    return $('.contact-phone input')
 }
 get inputMessage (){
    return $('.contact-message textarea')
 }
 get submit (){
    return $('.evf-submit')
 }
 get successMessage (){
    return $('.everest-forms')
 }
}


export default new ContactPageSelectors();