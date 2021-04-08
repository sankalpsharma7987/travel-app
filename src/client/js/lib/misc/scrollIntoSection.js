const scrollIntoSection = (sectionSelector)=>{

    let sectionName = document.querySelector(sectionSelector);
    
    sectionName.scrollIntoView({behavior:'smooth'});

}

module.exports = { scrollIntoSection };