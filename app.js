//vnav bar
const navigationHeight=document.querySelector('nav').offsetHeight;
document.documentElement.style.setProperty('--scroll-padding',navigationHeight-2+"px");
const dateToday = new Date();
document.getElementById("get-current-year").innerHTML=dateToday.getFullYear()
//accordion
document.addEventListener('alpine:init', () => {
  Alpine.store('accordion', {
    tab: 0
  });
  
  Alpine.data('accordion', (idx) => ({
    init() {
      this.idx = idx;
    },
    idx: -1,
    handleClick() {
      this.$store.accordion.tab = this.$store.accordion.tab === this.idx ? 0 : this.idx;
    },
    handleRotate() {
      return this.$store.accordion.tab === this.idx ? 'rotate-180' : '';
    },
    handleToggle() {
      return this.$store.accordion.tab === this.idx ? `max-height: ${this.$refs.tab.scrollHeight}px` : '';
    }
  }));
})
//Modal box appear 
const modalbg = document.getElementById('modal-bg');
const modalSwitch = document.getElementById('modal-switch');
const modalBox = document.getElementById('modal-box');
const modalClose = document.getElementById('modal-close');
const modalImg=document.getElementById('modal-img');
const modalTitle=document.getElementById('modal-title');
const modalRole=document.getElementById('modal-role');
const modalDesc=document.getElementById('modal-desc');
var teamCard=document.getElementsByClassName('team-btn')
modalbg.addEventListener("click", function() {
    modalBox.classList.add('hidden')
    modalbg.classList.add('hidden')
});
modalClose.addEventListener("click", function() {
    modalBox.classList.add('hidden')
    modalbg.classList.add('hidden')
});
for(var i=0; i<teamCard.length;i++){
    var teamMember =teamCard[i]
    teamMember.addEventListener('click',teamCardClicked)
}
function teamCardClicked(event){
    var teamBtn= event.target
    var teamCard=teamBtn.parentElement.parentElement
    var title=teamCard.getElementsByClassName('text-center')[0]
    var teamName=title.getElementsByClassName('team-name')[0].innerText
    var teamRole=title.getElementsByClassName('team-role')[0].innerText
    var teamBackground=title.getElementsByClassName('team-background')[0].innerHTML
    var teamImageSrc=teamCard.getElementsByClassName('team-img')[0].src
    modalTitle.innerText=teamName
    modalRole.innerText=teamRole
    modalDesc.innerHTML=teamBackground
    modalImg.src=teamImageSrc
    console.log(teamName,teamRole,teamBackground,teamImageSrc)
    modalBox.classList.remove('hidden')
    modalbg.classList.remove('hidden')
}

// navigation bar appear and add the sticky
window.addEventListener("scroll", function() {
    var sections = document.querySelectorAll("section");
    var navLinks = document.querySelectorAll(".nav-links");
    var currentPosition = window.scrollY + 150;
    sections.forEach(function(section) {
      var sectionTop = section.offsetTop;
      var id = section.getAttribute("id");
      if (currentPosition >= sectionTop) {
          navLinks.forEach(function(link){
              link.classList.remove("active");
              if(link.getAttribute("data-section") === id){
                  link.classList.add("active");
              }
          });
      }
    });
});

const header=document.querySelector("nav");
const sectionOne = document.querySelector('.home-hero');
const options = {
  rootMargin:'-40% 0px 0px 0px'
};

const observer = new IntersectionObserver(function
    (entries, observer){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
     header.classList.add("nav-scrolled");
    //  alert("scrolled the bish")
   }else{
     header.classList.remove("nav-scrolled");
     
   }
    console.log(entry);
    });
}, options);

observer.observe(sectionOne);