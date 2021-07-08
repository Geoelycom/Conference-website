// making use of the js import modules here
 import Data from './data.js';
//Mobile section. this includes the hambuger and the close button
const menuBtn = document.querySelector('.btn');
const menuClose = document.querySelector('.nav__close');
const dropDown = document.querySelector('.program-section');
menuBtn.addEventListener('click', () => {
	dropDown.style.display = 'flex';
})
menuClose.addEventListener('click', () => {
	dropDown.style.display = 'none';
})

//Acessing speakers from Data.js
const featuredSpeakers = Data.speakers;
// Acessing full data of speakers
const speakerWrap = document.querySelector('#speakers');
const implementSpeakers = () => {
	//console.log(speakerWrap);
featuredSpeakers.forEach((item) => {
	//create the details of all speakers
	const divContainer = document.createElement('div');
	divContainer.classList.add('speakers');
	//create speakersImage with the createElement method
	const speakerImageWrap = document.createElement('div');
	speakerImageWrap.classList.add('image-wrapper');
	const speakerImage = document.createElement('img');
	speakerImage.classList.add('speaker-image');
	speakerImage.src = item.speakerImage;
	speakerImage.alt = item.speakerName;
	speakerImageWrap.appendChild(speakerImage); //always do this after creating each section
	divContainer.appendChild(speakerImageWrap); // same here
	//creating the second div that wraps content wrapper
	const speakerContentWrapper = document.createElement('div');
	speakerContentWrapper.classList.add('content-wrapper');
	//creating speaker heading tag which encloses speaker name
	const speakerName = document.createElement('h4');
	speakerName.classList.add('speaker-name');
	speakerName.innerText = item.speakerName;
	speakerContentWrapper.appendChild(speakerName);
	//create h5 element which encloses the speaker position
	const speakerPosition = document.createElement('h5');
	speakerPosition.classList.add('speaker-position');
	speakerPosition.innerText = item.speakerPosition;
	speakerContentWrapper.appendChild(speakerPosition);
	//create the P tag which encloses the SpeakerBio
const speakerBio = document.createElement('p');
speakerBio.classList.add('speaker-Bio');
speakerBio.innerText = item.speakerBio;
speakerContentWrapper.appendChild(speakerBio);
divContainer.appendChild(speakerContentWrapper);
speakerWrap.appendChild(divContainer);
});
};
 implementSpeakers();