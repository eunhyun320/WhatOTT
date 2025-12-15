// 캐러셀 함수 통합
function setupCarousel(carouselSelector, wrapperSelector) {
    const carousel = document.querySelector(carouselSelector),
    firstImg = carousel.querySelectorAll("img")[0],
    arrowIcons = document.querySelectorAll(wrapperSelector + " i");

    const showHideIcons = () => {
        let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
        arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
        arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
    }

    arrowIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            let firstImgWidth = firstImg.clientWidth + 14;
            carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
            setTimeout(() => showHideIcons(), 60);
        });
    });
}

// 넷플릭스, 티빙, 웨이브 캐러셀 설정
setupCarousel(".carous", ".net-wrap");
setupCarousel(".tv-carous", ".tv-wrap");
setupCarousel(".wavve-carous", ".wavve-wrap");
setupCarousel(".dis-carous", ".dis-wrap");




//아래부분()
class Carousel {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.carousel = this.container.querySelector(".carousel");
        this.leftButton = this.container.querySelector(".fa-angle-left");
        this.rightButton = this.container.querySelector(".fa-angle-right");

        this.isDragStart = false;
        this.isDragging = false;
        this.prevPageX = 0;
        this.prevScrollLeft = 0;
        this.positionDiff = 0;

        this.init();
    }

    init() {
        this.leftButton.addEventListener("click", () => this.handleButtonClick("left"));
        this.rightButton.addEventListener("click", () => this.handleButtonClick("right"));

        this.carousel.addEventListener("mousedown", (e) => this.dragStart(e));
        document.addEventListener("mousemove", (e) => this.dragging(e));
        document.addEventListener("mouseup", () => this.dragStop());

        this.carousel.addEventListener("touchstart", (e) => this.dragStart(e));
        this.carousel.addEventListener("touchmove", (e) => this.dragging(e));
        this.carousel.addEventListener("touchend", () => this.dragStop());
    }

    handleButtonClick(direction) {
        let firstImgWidth = this.getFirstImageWidth() + 14;
        this.carousel.scrollLeft += direction === "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => this.showHideIcons(), 60);
    }

    getFirstImageWidth() {
        return this.carousel.querySelectorAll("img")[0].clientWidth;
    }

    showHideIcons() {
        let scrollWidth = this.carousel.scrollWidth - this.carousel.clientWidth;
        this.leftButton.style.display = this.carousel.scrollLeft === 0 ? "none" : "block";
        this.rightButton.style.display = this.carousel.scrollLeft === scrollWidth ? "none" : "block";
    }
    
    autoSlide() {
        if (this.carousel.scrollLeft - (this.carousel.scrollWidth - this.carousel.clientWidth) > -1 || this.carousel.scrollLeft <= 0) return;

        this.positionDiff = Math.abs(this.positionDiff);
        let firstImgWidth = this.getFirstImageWidth() + 14;
        let valDifference = firstImgWidth - this.positionDiff;

        if (this.carousel.scrollLeft > this.prevScrollLeft) {
            return this.carousel.scrollLeft += this.positionDiff > firstImgWidth / 3 ? valDifference : -this.positionDiff;
        }

        this.carousel.scrollLeft -= this.positionDiff > firstImgWidth / 3 ? valDifference : -this.positionDiff;
    }
 
    dragStart(e) {
        this.isDragStart = true;
        this.prevPageX = e.pageX || e.touches[0].pageX;
        this.prevScrollLeft = this.carousel.scrollLeft;
    }

    dragging(e) {
        if (!this.isDragStart) return;
        e.preventDefault();
        this.isDragging = true;
        this.carousel.classList.add("dragging");
        this.positionDiff = (e.pageX || e.touches[0].pageX) - this.prevPageX;
        this.carousel.scrollLeft = this.prevScrollLeft - this.positionDiff;
        this.showHideIcons();
    }

    dragStop() {
        this.isDragStart = false;
        this.carousel.classList.remove("dragging");

        if (!this.isDragging) return;
        this.isDragging = false;
        this.autoSlide();
    }
    
}


// 새로운 캐러셀 객체 생성
//넷플
const hororCarousel = new Carousel("horor-container");
const romanceCarousel = new Carousel("romance-container");
const actionCarousel = new Carousel("action-container");
const dramaCarousel = new Carousel("drama-container");

const medicalCarousel = new Carousel("medical-container");
const dramaromanceCarousel = new Carousel("dramaromance-container");
const thrillCarousel = new Carousel("thrill-container");
const dramaactionCarousel = new Carousel("dramaaction-container");

const funCarousel = new Carousel("fun-container");

const aniCarousel = new Carousel("ani-container");


//티빙
const tvhororCarousel = new Carousel("tvhoror-container");
const tvromanceCarousel = new Carousel("tvromance-container");
const tvcomicCarousel = new Carousel("tvcomic-container");
const tvSFCarousel = new Carousel("tvSF-container");

const tvfunromCarousel = new Carousel("tvfunrom-container");
const tvfuncomicCarousel = new Carousel("tvfuncomic-container");
const tvfunsurviveCarousel = new Carousel("tvfunsurvive-container");

const tvmovieaniCarousel = new Carousel("tvmovieani-container");
const tvtvdocuCarousel = new Carousel("tvtvdocu-container");

//웨이브
const wdactionCarousel = new Carousel("wdaction-container");
const wdhorrorCarousel = new Carousel("wdhorror-container");
const wdromanceCarousel = new Carousel("wdromance-container");
const wdcomedyCarousel = new Carousel("wdcomedy-container");
const wfunCarousel = new Carousel("wfun-container");

//디플
const ddhororCarousel = new Carousel("ddhoror-container");
const ddcomedyCarousel = new Carousel("ddcomedy-container");
const ddactionCarousel = new Carousel("ddaction-container");

const dkoreaCarousel = new Carousel("dkorea-container");

const drcomedyCarousel = new Carousel("drcomedy-container");
const ddmusicCarousel = new Carousel("ddmusic-container");
const ddmakingCarousel = new Carousel("ddmaking-container");
const ddetcCarousel = new Carousel("ddetc-container");

const daniCarousel = new Carousel("dani-container");








//넷플 옵션 변경
function changeImages() {
    var selectElement = document.getElementById("changeImg");
    var hororContainer = document.getElementById("horor-container");
    var romanceContainer = document.getElementById("romance-container");
    var actionContainer = document.getElementById("action-container");
    var dramaContainer = document.getElementById("drama-container");
    var medicalContainer = document.getElementById("medical-container");
    var dramaromanceContainer = document.getElementById("dramaromance-container");
    var thrillContainer = document.getElementById("thrill-container");
    var dramaactionContainer = document.getElementById("dramaaction-container");
    var funContainer = document.getElementById("fun-container");
    var aniContainer = document.getElementById("ani-container");


    switch (selectElement.value) {
        case "m-horor":
            hororContainer.style.display = "block";
            romanceContainer.style.display = "none";
            actionContainer.style.display = "none";
            dramaContainer.style.display = "none";
            medicalContainer.style.display = "none";
            dramaromanceContainer.style.display = "none";
            thrillContainer.style.display = "none";
            dramaactionContainer.style.display = "none";
            funContainer.style.display = "none";
            aniContainer.style.display = "none";
            break;
        case "m-romance":
            hororContainer.style.display = "none";
            romanceContainer.style.display = "block";
            actionContainer.style.display = "none";
            dramaContainer.style.display = "none";
            medicalContainer.style.display = "none";
            dramaromanceContainer.style.display = "none";
            thrillContainer.style.display = "none";
            dramaactionContainer.style.display = "none";
            funContainer.style.display = "none";
            aniContainer.style.display = "none";
            break;
        case "m-action":
            hororContainer.style.display = "none";
            romanceContainer.style.display = "none";
            actionContainer.style.display = "block";
            dramaContainer.style.display = "none";
            medicalContainer.style.display = "none";
            dramaromanceContainer.style.display = "none";
            thrillContainer.style.display = "none";
            dramaactionContainer.style.display = "none";
            funContainer.style.display = "none";
            aniContainer.style.display = "none";
            break;
        case "m-drama":
            hororContainer.style.display = "none";
            romanceContainer.style.display = "none";
            actionContainer.style.display = "none";
            dramaContainer.style.display = "block";
            medicalContainer.style.display = "none";
            dramaromanceContainer.style.display = "none";
            thrillContainer.style.display = "none";
            dramaactionContainer.style.display = "none";
            funContainer.style.display = "none";
            aniContainer.style.display = "none";
            break;
        case "d-medical":
            hororContainer.style.display = "none";
            romanceContainer.style.display = "none";
            actionContainer.style.display = "none";
            dramaContainer.style.display = "none";
            medicalContainer.style.display = "block";
            dramaromanceContainer.style.display = "none";
            thrillContainer.style.display = "none";
            dramaactionContainer.style.display = "none";
            funContainer.style.display = "none";
            aniContainer.style.display = "none";
            break;
        case "d-romance":
            hororContainer.style.display = "none";
            romanceContainer.style.display = "none";
            actionContainer.style.display = "none";
            dramaContainer.style.display = "none";
            medicalContainer.style.display = "none";
            dramaromanceContainer.style.display = "block";
            thrillContainer.style.display = "none";
            dramaactionContainer.style.display = "none";
            funContainer.style.display = "none";
            aniContainer.style.display = "none";
            break;
        case "d-horor":
            hororContainer.style.display = "none";
            romanceContainer.style.display = "none";
            actionContainer.style.display = "none";
            dramaContainer.style.display = "none";
            medicalContainer.style.display = "none";
            dramaromanceContainer.style.display = "none";
            thrillContainer.style.display = "block";
            dramaactionContainer.style.display = "none";
            funContainer.style.display = "none";
            aniContainer.style.display = "none";
            break;
        case "d-action":
            hororContainer.style.display = "none";
            romanceContainer.style.display = "none";
            actionContainer.style.display = "none";
            dramaContainer.style.display = "none";
            medicalContainer.style.display = "none";
            dramaromanceContainer.style.display = "none";
            thrillContainer.style.display = "none";
            dramaactionContainer.style.display = "block";
            funContainer.style.display = "none";
            aniContainer.style.display = "none";
            break;
        case "fun":
            hororContainer.style.display = "none";
            romanceContainer.style.display = "none";
            actionContainer.style.display = "none";
            dramaContainer.style.display = "none";
            medicalContainer.style.display = "none";
            dramaromanceContainer.style.display = "none";
            thrillContainer.style.display = "none";
            dramaactionContainer.style.display = "none";
            funContainer.style.display = "block";
            aniContainer.style.display = "none";
            break;
        case "ani":
            hororContainer.style.display = "none";
            romanceContainer.style.display = "none";
            actionContainer.style.display = "none";
            dramaContainer.style.display = "none";
            medicalContainer.style.display = "none";
            dramaromanceContainer.style.display = "none";
            thrillContainer.style.display = "none";
            dramaactionContainer.style.display = "none";
            funContainer.style.display = "none";
            aniContainer.style.display = "block";
            break;
        
        default:
            hororContainer.style.display = "none";
            romanceContainer.style.display = "none";
            actionContainer.style.display = "none";
            dramaContainer.style.display = "none";
            medicalContainer.style.display = "none";
            dramaromanceContainer.style.display = "none";
            thrillContainer.style.display = "none";
            dramaactionContainer.style.display = "none";
            funContainer.style.display = "none";
            aniContainer.style.display = "none";

    }
}
var selectElement = document.getElementById("changeImg");
selectElement.addEventListener("change", changeImages);


//티빙 옵션 변경
function changetvImages() {
    var selectElement = document.getElementById("changetvImg");
    var tvhororContainer = document.getElementById("tvhoror-container");
    var tvromanceContainer = document.getElementById("tvromance-container");
    var tvcomicContainer = document.getElementById("tvcomic-container");
    var tvSFContainer = document.getElementById("tvSF-container");

    var tvfunromContainer = document.getElementById("tvfunrom-container");
    var tvfuncomicContainer = document.getElementById("tvfuncomic-container");
    var tvfunsurviveContainer = document.getElementById("tvfunsurvive-container");

    var tvmovieaniContainer = document.getElementById("tvmovieani-container");
    var tvtvdocuContainer = document.getElementById("tvtvdocu-container");

    switch (selectElement.value) {
        case "d-horor":
            tvhororContainer.style.display = "block";
            tvromanceContainer.style.display = "none";
            tvcomicContainer.style.display = "none";
            tvSFContainer.style.display = "none";
            tvfunromContainer.style.display = "none";
            tvfuncomicContainer.style.display = "none";
            tvfunsurviveContainer.style.display = "none";
            tvmovieaniContainer.style.display = "none";
            tvtvdocuContainer.style.display = "none";
            break;

        case "d-romance":
            tvhororContainer.style.display = "none";
            tvromanceContainer.style.display = "block";
            tvcomicContainer.style.display = "none";
            tvSFContainer.style.display = "none";   
            tvfunromContainer.style.display = "none";
            tvfuncomicContainer.style.display = "none";
            tvfunsurviveContainer.style.display = "none";
            tvmovieaniContainer.style.display = "none";
            tvtvdocuContainer.style.display = "none";
            break;
            
        case "d-comic":
            tvhororContainer.style.display = "none";
            tvromanceContainer.style.display = "none";
            tvcomicContainer.style.display = "block";
            tvSFContainer.style.display = "none";
            tvfunromContainer.style.display = "none";
            tvfuncomicContainer.style.display = "none";
            tvfunsurviveContainer.style.display = "none";
            tvmovieaniContainer.style.display = "none";
            tvtvdocuContainer.style.display = "none";
            break;

        case "d-sf":
            tvhororContainer.style.display = "none";
            tvromanceContainer.style.display = "none";
            tvcomicContainer.style.display = "none";
            tvSFContainer.style.display = "block";
            tvfunromContainer.style.display = "none";
            tvfuncomicContainer.style.display = "none";
            tvfunsurviveContainer.style.display = "none";
            tvmovieaniContainer.style.display = "none";
            tvtvdocuContainer.style.display = "none";
            break;

        case "f-romance":
            tvhororContainer.style.display = "none";
            tvromanceContainer.style.display = "none";
            tvcomicContainer.style.display = "none";
            tvSFContainer.style.display = "none";
            tvfunromContainer.style.display = "block";
            tvfuncomicContainer.style.display = "none";
            tvfunsurviveContainer.style.display = "none";
            tvmovieaniContainer.style.display = "none";
            tvtvdocuContainer.style.display = "none";
            break;

        case "f-comic":
            tvhororContainer.style.display = "none";
            tvromanceContainer.style.display = "none";
            tvcomicContainer.style.display = "none";
            tvSFContainer.style.display = "none";
            tvfunromContainer.style.display = "none";
            tvfuncomicContainer.style.display = "block";
            tvfunsurviveContainer.style.display = "none";
            tvmovieaniContainer.style.display = "none";
            tvtvdocuContainer.style.display = "none";
            break;
            
        case "f-survive":
            tvhororContainer.style.display = "none";
            tvromanceContainer.style.display = "none";
            tvcomicContainer.style.display = "none";
            tvSFContainer.style.display = "none";
            tvfunromContainer.style.display = "none";
            tvfuncomicContainer.style.display = "none";
            tvfunsurviveContainer.style.display = "block";
            tvmovieaniContainer.style.display = "none";
            tvtvdocuContainer.style.display = "none";
            break;

        case "movieani":
            tvhororContainer.style.display = "none";
            tvromanceContainer.style.display = "none";
            tvcomicContainer.style.display = "none";
            tvSFContainer.style.display = "none";
            tvfunromContainer.style.display = "none";
            tvfuncomicContainer.style.display = "none";
            tvfunsurviveContainer.style.display = "none";
            tvmovieaniContainer.style.display = "block";
            tvtvdocuContainer.style.display = "none";
            break;

        case "tvdocu":
            tvhororContainer.style.display = "none";
            tvromanceContainer.style.display = "none";
            tvcomicContainer.style.display = "none";
            tvSFContainer.style.display = "none";
            tvfunromContainer.style.display = "none";
            tvfuncomicContainer.style.display = "none";
            tvfunsurviveContainer.style.display = "none";
            tvmovieaniContainer.style.display = "none";
            tvtvdocuContainer.style.display = "block";
            break;
        
        default:
            tvhororContainer.style.display = "none";
            tvromanceContainer.style.display = "none";
            tvcomicContainer.style.display = "none";
            tvSFContainer.style.display = "none";  
            tvfunromContainer.style.display = "none";
            tvfuncomicContainer.style.display = "none";
            tvfunsurviveContainer.style.display = "none";
            tvmovieaniContainer.style.display = "none";
            tvtvdocuContainer.style.display = "none";

    }
}
var selectElement = document.getElementById("changetvImg");
selectElement.addEventListener("change", changetvImages);

//웨이브 옵션 변경
function changewavveImages() {
    var selectElement = document.getElementById("changewavveImg");
    var wdactionContainer = document.getElementById("wdaction-container");
    var wdhorrorContainer = document.getElementById("wdhorror-container");
    var wdromanceContainer = document.getElementById("wdromance-container");
    var wdcomedyContainer = document.getElementById("wdcomedy-container");
    var wfunContainer = document.getElementById("wfun-container");

    switch (selectElement.value) {
        case "wd-action":
            wdactionContainer.style.display = "block";
            wdhorrorContainer.style.display = "none";
            wdromanceContainer.style.display = "none";
            wdcomedyContainer.style.display = "none";
            wfunContainer.style.display = "none";
            break;

        case "wd-horror":
            wdactionContainer.style.display = "none";
            wdhorrorContainer.style.display = "block";
            wdromanceContainer.style.display = "none";
            wdcomedyContainer.style.display = "none";
            wfunContainer.style.display = "none";
            break;

        case "wd-romance":
            wdactionContainer.style.display = "none";
            wdhorrorContainer.style.display = "none";
            wdromanceContainer.style.display = "block";
            wdcomedyContainer.style.display = "none";
            wfunContainer.style.display = "none";
            break;

        case "wd-comedy":
            wdactionContainer.style.display = "none";
            wdhorrorContainer.style.display = "none";
            wdromanceContainer.style.display = "none";
            wdcomedyContainer.style.display = "block";
            wfunContainer.style.display = "none";
            break;

        case "w-fun":
            wdactionContainer.style.display = "none";
            wdhorrorContainer.style.display = "none";
            wdromanceContainer.style.display = "none";
            wdcomedyContainer.style.display = "none";
            wfunContainer.style.display = "block";
            break;

        default:
            wdactionContainer.style.display = "none";
            wdhorrorContainer.style.display = "none";
            wdromanceContainer.style.display = "none";
            wdcomedyContainer.style.display = "none";
            wfunContainer.style.display = "none";
    }
}

var selectElement = document.getElementById("changewavveImg");
selectElement.addEventListener("change", changewavveImages);

//디플 옵션 변경
function changedisImages() {
    var selectElement = document.getElementById("changedisImg");
    var ddhororContainer = document.getElementById("ddhoror-container");
    var ddcomedyContainer = document.getElementById("ddcomedy-container");
    var ddactionContainer = document.getElementById("ddaction-container");
    var dkoreaContainer = document.getElementById("dkorea-container");
    var drcomedyContainer = document.getElementById("drcomedy-container");
    var ddmusicContainer = document.getElementById("ddmusic-container");
    var ddmakingContainer = document.getElementById("ddmaking-container");
    var ddetcContainer = document.getElementById("ddetc-container");
    var daniContainer = document.getElementById("dani-container");

    switch (selectElement.value) {
        case "dd-horor":
            ddhororContainer.style.display = "block";
            ddcomedyContainer.style.display = "none";
            ddactionContainer.style.display = "none";
            dkoreaContainer.style.display = "none";
            drcomedyContainer.style.display = "none";
            ddmusicContainer.style.display = "none";
            ddmakingContainer.style.display = "none";
            ddetcContainer.style.display = "none";
            daniContainer.style.display = "none";
            break;

        case "dd-comedy":
            ddhororContainer.style.display = "none";
            ddcomedyContainer.style.display = "block";
            ddactionContainer.style.display = "none";
            dkoreaContainer.style.display = "none";
            drcomedyContainer.style.display = "none";
            ddmusicContainer.style.display = "none";
            ddmakingContainer.style.display = "none";
            ddetcContainer.style.display = "none";
            daniContainer.style.display = "none";
            break;

        case "dd-action":
            ddhororContainer.style.display = "none";
            ddcomedyContainer.style.display = "none";
            ddactionContainer.style.display = "block";
            dkoreaContainer.style.display = "none";
            drcomedyContainer.style.display = "none";
            ddmusicContainer.style.display = "none";
            ddmakingContainer.style.display = "none";
            ddetcContainer.style.display = "none";
            daniContainer.style.display = "none";
            break;

        case "d-korea":
            ddhororContainer.style.display = "none";
            ddcomedyContainer.style.display = "none";
            ddactionContainer.style.display = "none";
            dkoreaContainer.style.display = "block";
            drcomedyContainer.style.display = "none";
            ddmusicContainer.style.display = "none";
            ddmakingContainer.style.display = "none";
            ddetcContainer.style.display = "none";
            daniContainer.style.display = "none";
            break;

        case "dr-comedy":
            ddhororContainer.style.display = "none";
            ddcomedyContainer.style.display = "none";
            ddactionContainer.style.display = "none";
            dkoreaContainer.style.display = "none";
            drcomedyContainer.style.display = "block";
            ddmusicContainer.style.display = "none";
            ddmakingContainer.style.display = "none";
            ddetcContainer.style.display = "none";
            daniContainer.style.display = "none";
            break;
        case "dd-music":
            ddhororContainer.style.display = "none";
            ddcomedyContainer.style.display = "none";
            ddactionContainer.style.display = "none";
            dkoreaContainer.style.display = "none";
            drcomedyContainer.style.display = "none";
            ddmusicContainer.style.display = "block";
            ddmakingContainer.style.display = "none";
            ddetcContainer.style.display = "none";
            daniContainer.style.display = "none";
            break;
        case "dd-making":
            ddhororContainer.style.display = "none";
            ddcomedyContainer.style.display = "none";
            ddactionContainer.style.display = "none";
            dkoreaContainer.style.display = "none";
            drcomedyContainer.style.display = "none";
            ddmusicContainer.style.display = "none";
            ddmakingContainer.style.display = "block";
            ddetcContainer.style.display = "none";
            daniContainer.style.display = "none";
            break;
        case "dd-etc":
            ddhororContainer.style.display = "none";
            ddcomedyContainer.style.display = "none";
            ddactionContainer.style.display = "none";
            dkoreaContainer.style.display = "none";
            drcomedyContainer.style.display = "none";
            ddmusicContainer.style.display = "none";
            ddmakingContainer.style.display = "none";
            ddetcContainer.style.display = "block";
            daniContainer.style.display = "none";
            break;
        case "d-ani":
            ddhororContainer.style.display = "none";
            ddcomedyContainer.style.display = "none";
            ddactionContainer.style.display = "none";
            dkoreaContainer.style.display = "none";
            drcomedyContainer.style.display = "none";
            ddmusicContainer.style.display = "none";
            ddmakingContainer.style.display = "none";
            ddetcContainer.style.display = "none";
            daniContainer.style.display = "block";
            break;

        default:
            ddhororContainer.style.display = "none";
            ddcomedyContainer.style.display = "none";
            ddactionContainer.style.display = "none";
            dkoreaContainer.style.display = "none";
            drcomedyContainer.style.display = "none";
            ddmusicContainer.style.display = "none";
            ddmakingContainer.style.display = "none";
            ddetcContainer.style.display = "none";
            daniContainer.style.display = "none";
    }
}
var selectElement = document.getElementById("changedisImg");
selectElement.addEventListener("change", changedisImages);

//첫 화면에서 안보이게 할것들
window.onload = function () {

    //넷플릭스
    var romanceContainer = document.getElementById("romance-container");
    romanceContainer.style.display = "none";
    var actionContainer = document.getElementById("action-container");
    actionContainer.style.display = "none";
    var dramaContainer = document.getElementById("drama-container");
    dramaContainer.style.display = "none";
    var medicalContainer = document.getElementById("medical-container");
    medicalContainer.style.display = "none";
    var dramaromanceContainer = document.getElementById("dramaromance-container");
    dramaromanceContainer.style.display = "none";
    var thrillContainer = document.getElementById("thrill-container");
    thrillContainer.style.display = "none";
    var dramaactionContainer = document.getElementById("dramaaction-container");
    dramaactionContainer.style.display = "none";
    var funContainer = document.getElementById("fun-container");
    funContainer.style.display = "none";
    var aniContainer = document.getElementById("ani-container");
    aniContainer.style.display = "none";

    //티빙
    var tvromanceContainer = document.getElementById("tvromance-container");
    tvromanceContainer.style.display = "none";
    var tvcomicContainer = document.getElementById("tvcomic-container");
    tvcomicContainer.style.display = "none";
    var tvSFContainer = document.getElementById("tvSF-container");
    tvSFContainer.style.display = "none";
    var tvfunromContainer = document.getElementById("tvfunrom-container");
    tvfunromContainer.style.display = "none";
    var tvfuncomicContainer = document.getElementById("tvfuncomic-container");
    tvfuncomicContainer.style.display = "none";
    var tvfunsurviveContainer = document.getElementById("tvfunsurvive-container");
    tvfunsurviveContainer.style.display = "none";
    var tvmovieaniContainer = document.getElementById("tvmovieani-container");
    tvmovieaniContainer.style.display = "none";
    var tvtvdocuContainer = document.getElementById("tvtvdocu-container");
    tvtvdocuContainer.style.display = "none";
    
    
    //웨이브
    var wdhorrorContainer = document.getElementById("wdhorror-container");
    wdhorrorContainer.style.display = "none";
    var wdromanceContainer = document.getElementById("wdromance-container");
    wdromanceContainer.style.display = "none";
    var wdcomedyContainer = document.getElementById("wdcomedy-container");
    wdcomedyContainer.style.display = "none";
    var wfunContainer = document.getElementById("wfun-container");
    wfunContainer.style.display = "none";

    //디플
    var ddcomedyContainer = document.getElementById("ddcomedy-container");
    ddcomedyContainer.style.display = "none";
    var ddactionContainer = document.getElementById("ddaction-container");
    ddactionContainer.style.display = "none";
    var dkoreaContainer = document.getElementById("dkorea-container");
    dkoreaContainer.style.display = "none";
    var drcomedyContainer = document.getElementById("drcomedy-container");
    drcomedyContainer.style.display = "none";
    var ddmusicContainer = document.getElementById("ddmusic-container");
    ddmusicContainer.style.display = "none";
    var ddmakingContainer = document.getElementById("ddmaking-container");
    ddmakingContainer.style.display = "none";
    var ddetcContainer = document.getElementById("ddetc-container");
    ddetcContainer.style.display = "none";
    var daniContainer = document.getElementById("dani-container");
    daniContainer.style.display = "none";
};





