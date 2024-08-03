const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const pics = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];

/* Declaring the alternative text for each image file */

const texts = {
    'pic1.jpg' : 'Picture of an eye',
    'pic2.jpg' : 'Picture of waves',
    'pic3.jpg' : 'White and purple flowers',
    'pic4.jpg' : 'Egyption hierogylphs',
    'pic5.jpg' : 'Moth on a leaf'
}

/* Looping through images */

for (const image of pics) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', texts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}


/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const darkLight = btn.getAttribute('class');
    if (darkLight === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } 
    else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});


