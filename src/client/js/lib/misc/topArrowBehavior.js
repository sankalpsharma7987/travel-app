const $HEADER_SECTION_ELEMENT = document.querySelector('.header-section')
const $TOP_ARROW_ELEMENT = document.querySelector('.arrow-top');

/* Client Side Javascript. This function helps in providing smooth scrolling behavior when the svg top arrow is clicked to scroll the page to the top */

const stickyHeaderSection = ()=>{

    if (window.scrollY>0)
    {   
        $HEADER_SECTION_ELEMENT.classList.add('header-section-position');
        $TOP_ARROW_ELEMENT.classList.add('arrow-top-display');
    }
    else {
        $HEADER_SECTION_ELEMENT.classList.remove('header-section-position');
        $TOP_ARROW_ELEMENT.classList.remove('arrow-top-display');
    }

}

const scrollTopArrow = ()=>{

    window.scrollTo({top:0,behavior:'smooth'})
    
}

window.addEventListener('scroll',stickyHeaderSection);
$TOP_ARROW_ELEMENT.addEventListener('click',scrollTopArrow);

module.exports = { scrollTopArrow, stickyHeaderSection };