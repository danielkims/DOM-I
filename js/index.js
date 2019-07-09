const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Nav Text
const displayTags= document.querySelectorAll('a')

displayTags[0].setAttribute('class', '.nav-item-1')
displayTags[0].innerText = "Services"
displayTags[1].setAttribute('class', '.nav-item-2')
displayTags[1].innerText = "Product"
displayTags[2].setAttribute('class', '.nav-item-3')
displayTags[2].innerText = "Vision"
displayTags[3].setAttribute('class', '.nav-item-4')
displayTags[3].innerText = "Features"
displayTags[4].setAttribute('class', '.nav-item-5')
displayTags[4].innerText = "About"
displayTags[5].setAttribute('class', '.nav-item-6')
displayTags[5].innerText = "Contact"

displayTags.forEach(link => link.style.color = 'green')

// Nav Items
const newDTags = document.createElement('a');
const mainNav = document.querySelector('nav');
newDTags.innerText = 'Reviews'
newDTags.href = '#'
mainNav.prepend(newDTags)
newDTags.style.color = 'green'

const dTags2 = document.createElement('a')
const nav2 = document.querySelector('nav')
dTags2.innerText = 'Preview'
dTags2.href = '#'
nav2.append(dTags2)
nav2.style.color = 'green'

// Header
let heading = document.querySelector('h1')
heading.textContent = siteContent['cta']['h1']

let onlyButton = document.querySelector('button')
onlyButton.innerText = "Get Started"

let secondLogo = document.querySelector('#cta-img')
secondLogo.setAttribute('src', siteContent['cta']['img-src'])

//Main Body
let mainBody = document.querySelectorAll('.text-content')

mainBody[0].querySelector('h4').textContent = siteContent['main-content']['features-h4']
mainBody[0].querySelector('p').textContent = siteContent['main-content']['features-content']
mainBody[1].querySelector('h4').textContent = siteContent['main-content']['about-h4']
mainBody[1].querySelector('p').textContent = siteContent['main-content']['about-content']
mainBody[2].querySelector('h4').textContent = siteContent['main-content']['services-h4']
mainBody[2].querySelector('p').textContent = siteContent['main-content']['services-content']
mainBody[3].querySelector('h4').textContent = siteContent['main-content']['product-h4']
mainBody[3].querySelector('p').textContent = siteContent['main-content']['product-content']
mainBody[4].querySelector('h4').textContent = siteContent['main-content']['vision-h4']
mainBody[4].querySelector('p').textContent = siteContent['main-content']['vision-content']

let thirdLogo = document.querySelector('#middle-img')
thirdLogo.setAttribute('src', siteContent['main-content']['middle-img-src'])

//Contact Section

let contactInfo = document.querySelector('.contact')

contactInfo.getElementsByTagName('h4')[0].textContent = siteContent['contact']['contact-h4']
contactInfo.getElementsByTagName('p')[0].textContent = siteContent['contact']['address']
contactInfo.getElementsByTagName('p')[1].textContent = siteContent['contact']['phone']
contactInfo.getElementsByTagName('p')[2].textContent = siteContent['contact']['email']

let footer = document.querySelector('footer')
footer.innerText = "Copyright Great Idea! 2018"

