var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
var slidesCount = sliderImages.length;
var currentSlide = 1;
var slideNumberElement = document.getElementById('slide-number');
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

var paginationElement = document.createElement('ul');
paginationElement.setAttribute('id','pagination-ul');

for(var i = 1; i <= slidesCount; i++){
    var paginationItem = document.createElement('li');
    paginationItem.setAttribute('data-index',i);
    paginationItem.appendChild(document.createTextNode(i));
    paginationElement.appendChild(paginationItem);
}

document.getElementById('indicators').appendChild(paginationElement);

var paginationCreatedUL = document.getElementById('pagination-ul');
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

for(var i = 0; i < paginationBullets.length; i++){
    paginationBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        classChecker();
    }
}

classChecker();

function nextSlide() {
    if(nextButton.classList.contains('disabled')){
        return false;
    }
    currentSlide++;
    classChecker();
}

function prevSlide() {
    if(prevButton.classList.contains('disabled')){
        return false;
    }
    currentSlide--;
    classChecker();
}

function classChecker() {
    slideNumberElement.textContent = 'Slide # ' + (currentSlide) + ' of ' + (slidesCount);
    removeActiveClass();
    sliderImages[currentSlide - 1].classList.add('active');
    paginationCreatedUL.children[currentSlide - 1].classList.add('active');
}

function removeActiveClass() {
    sliderImages.forEach(function(img){
        img.classList.remove('active');
    });

    paginationBullets.forEach(function(bullet){
        bullet.classList.remove('active');
    });

    (currentSlide == 1) ? prevButton.classList.add('disabled'): prevButton.classList.remove('disabled');
    (currentSlide == slidesCount) ? nextButton.classList.add('disabled'): nextButton.classList.remove('disabled');
}