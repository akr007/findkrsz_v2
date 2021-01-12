const filterContainer = document.querySelector(".project-filter"),
      filterBtns = filterContainer.children,
      totalFilterBtn = filterBtns.length,
      projectItems = document.querySelector(".project-items").children,
      totalProjectItem = projectItems.length;

for(let i=0;i<totalFilterBtn;i++) {
    filterBtns[i].addEventListener("click", function(){
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");
        for(let j=0;j<totalProjectItem;j++) {
            if(filterValue === projectItems[j].getAttribute("data-category")){
                projectItems[j].classList.remove("hide");
                projectItems[j].classList.add("show");
            } else {
                projectItems[j].classList.remove("show");
                projectItems[j].classList.add("hide");
            }
            if(filterValue === "all") {
                projectItems[j].classList.remove("hide");
                projectItems[j].classList.add("show");
            }
        }
    });
}

const lightbox = document.querySelector(".lightbox"),
      lightboxImg = lightbox.querySelector(".lightbox-img"),
      lightboxText = lightbox.querySelector(".caption-text"),
      lightboxCounter = lightbox.querySelector(".caption-counter"),
      lightboxLink = lightbox.querySelector(".caption-link"),
      lightboxClose = lightbox.querySelector(".lightbox-close");


let itemIndex = 0;

for(let i=0;i<totalProjectItem;i++) {
    projectItems[i].addEventListener("click", function(){
        itemIndex=i;
        changeItem();
        toggleLightbox();
    });
}

function changeItem() {
    imgSrc = projectItems[itemIndex].querySelector(".project-img img").getAttribute("src");
    lightboxImg.src = imgSrc;
    lightboxText.innerHTML = projectItems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML = (itemIndex+1) + " of " + totalProjectItem;
    lightlink = projectItems[itemIndex].querySelector(".project-info .icon a").getAttribute("href");
    lightboxLink.setAttribute("href", lightlink);
    lightboxLink.setAttribute("target", "_blank"); 
}

function toggleLightbox() {
    lightbox.classList.toggle("open");
}

function nextItem() {
    if(itemIndex === totalProjectItem-1) {
        itemIndex = 0;
    } else {
        itemIndex++;
    }
    changeItem();
}

function prevItem() {
    if(itemIndex === 0) {
        itemIndex=totalProjectItem-1;
    } else {
        itemIndex--;
    }
    changeItem();
}

lightbox.addEventListener("click", function(e) {
    if(e.target === lightboxClose || e.target === lightbox) {
        toggleLightbox();
    }
})