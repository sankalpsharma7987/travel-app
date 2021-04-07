const $HEADER_SECTION_ELEMENT = document.querySelector('.header-section');
const $HEADER_NAVIGATION_ELEMENT = document.querySelector('.header-navigation');
const $TOP_ARROW_ELEMENT = document.querySelector('.arrow-top');

/* Client Side Javascript. This function helps in providing smooth scrolling behavior when the svg top arrow is clicked to scroll the page to the top */

const stickyHeaderSection = ()=>{

    //Change formatting after the window has scrolled over the navigation section
    
    if (window.scrollY>50) 
    {   
        $HEADER_SECTION_ELEMENT.classList.add('header-section-position');
        $HEADER_NAVIGATION_ELEMENT.classList.add('header-navigation-display');
        $TOP_ARROW_ELEMENT.classList.add('arrow-top-display');
    }
    else {
        $HEADER_SECTION_ELEMENT.classList.remove('header-section-position');
        $HEADER_NAVIGATION_ELEMENT.classList.remove('header-navigation-display');
        $TOP_ARROW_ELEMENT.classList.remove('arrow-top-display');
    }

}

const scrollTopArrow = ()=>{

    window.scrollTo({top:0,behavior:'smooth'})
    
}

window.addEventListener('scroll',stickyHeaderSection);
$TOP_ARROW_ELEMENT.addEventListener('click',scrollTopArrow);

module.exports = { scrollTopArrow, stickyHeaderSection };