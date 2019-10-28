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

//---------------------------//NAVIGATION//---------------------------
//nav
// let services = document.getElementsByTagName('a')[0];
// services.textContent = 'Services';
// let product = document.getElementsByTagName('a')[1];
// product.textContent = 'Product';
// let vision = document.getElementsByTagName('a')[2];
// vision.textContent = 'Vision';
// let features = document.getElementsByTagName('a')[3];
// features.textContent = 'Features';
// let about = document.getElementsByTagName('a')[4];
// about.textContent = 'About';
// let contact = document.getElementsByTagName('a')[5];
// contact.textContent = 'Contact';
const navigation = document.querySelectorAll('a');
navigation[0].textContent = siteContent["nav"]["nav-item-1"];
navigation[1].textContent = siteContent["nav"]["nav-item-2"];
navigation[2].textContent = siteContent["nav"]["nav-item-3"];
navigation[3].textContent = siteContent["nav"]["nav-item-4"];
navigation[4].textContent = siteContent["nav"]["nav-item-5"];
navigation[5].textContent = siteContent["nav"]["nav-item-6"];

//logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


//---------------------------HEADER SECTION---------------------------
// let headerText = document.getElementsByTagName('h1')[0];
// headerText.textContent = "DOM is Awesome!";

// let btnText = document.getElementsByTagName("button")[0];
// btnText.textContent = "Get started";






//---------------------------BODY TOP---------------------------
const featuresBody = document.getElementsByTagName('h4')[0];
featuresBody.textContent = "Features";
//
// const featuresText = document.getElementsByTagName('p')[0];
// featuresText.setAttribute('src', siteContent['main-content']['features-content']);

const aboutBody = document.getElementsByTagName('h4')[1];
aboutBody.textContent = "About";
//
// const featuresText = document.getElementsByTagName('p')[0];
// featuresText.setAttribute('src', siteContent['main-content']['features-content']);



const headerLogo = document.getElementById('cta-img');
headerLogo.setAttribute('src', siteContent['cta']['img-src']);
headerLogo.style.width = "300px";


//---------------------------BODY BOTTOM---------------------------

const bodyLogo = document.getElementById('middle-img');
bodyLogo.setAttribute('src', siteContent['main-content']['middle-img-src']);


const servicesBody = document.getElementsByTagName('h4')[2];
servicesBody.textContent = "Services";
//
// const featuresText = document.getElementsByTagName('p')[0];
// featuresText.setAttribute('src', siteContent['main-content']['features-content']);
//
const productBody = document.getElementsByTagName('h4')[3];
productBody.textContent = "Product";
//
// const featuresText = document.getElementsByTagName('p')[0];
// featuresText.setAttribute('src', siteContent['main-content']['features-content']);
//
const visionBody = document.getElementsByTagName('h4')[4];
visionBody.textContent = "Vision";
//
// const featuresText = document.getElementsByTagName('p')[0];
// featuresText.setAttribute('src', siteContent['main-content']['features-content']);


//---------------------------FOOTER---------------------------



const contactTitle = document.getElementsByClassName('.contact');
console.log(contactTitle);
// contactTitle.textContent = siteContent();

//====== Footer Info ======//
// const footerText = document.getElementsByTagName('footer, p')[0];
// footerText.setAttribute('src', siteContent['footer']['copyright']);

const footerText = document.getElementsByTagName('footer, p');
footerText.textContent = siteContent['footer']['copyright'];

  // //======Unecessary Footer Element ======//
  // // 1- Create Element
  // const newFooterTitle = document.createElement('h1');
  // // 2- Add Content
  // newFooterTitle.textContent = 'Footer';
  // // 3- Select Target Parent Element
  // const secondaryContent = document.querySelector('footer');
  // // 4- Add Element To Parent
  // secondaryContent.append(newFooterTitle);








