import React from 'react';
import './AboutPro.css'
// import Jose from '../../img/Jose.jpg'
import Alejandro from '../../img/Alejandro.jpg'
import Bryan from '../../img/Bryan.jpg'
import Rodrigo from '../../img/Rodrigo.jpg'
import Julian from '../../img/Julian.jpg'
// import Brandon from '../../img/Brandon.jpg'
import Brian from '../../img/Brian.jpg'
import Leidy from '../../img/Leidy.jpg'

const GoogleButton = () => {

      const cardsData = [
    {
      name: 'Jose Franco',
      role: 'Programador Full Stack',
      socialMedia: [
        { icon: 'twitter', tooltip: 'Twitter', link: '#' },
        { icon: 'linkedin', tooltip: 'LinkedIn', link: '#' },
        { icon: 'github', tooltip: 'Github', link: '#'},
      ],
      // imageUrl: Jose
    },
    {
        name: 'Alejandro Prieto',
        role: 'Programador Full Stack',
        socialMedia: [
          { icon: 'twitter', tooltip: 'Twitter', link: '#' },
          { icon: 'linkedin', tooltip: 'LinkedIn', link: 'https://www.linkedin.com/in/luis-alejandro-prieto-torres-992600261/' },
          { icon: 'github', tooltip: 'Github', link: 'https://github.com/DETNAW11'},
        ],
        imageUrl: Alejandro
      },
      {
        name: 'Bryan Coaquila',
        role: 'Programador Full Stack',
        socialMedia: [
          { icon: 'twitter', tooltip: 'Twitter', link: '#' },
          { icon: 'linkedin', tooltip: 'LinkedIn', link: 'https://www.linkedin.com/in/bryan-fausto-coaguila-torres-ab9365181/ ' },
          { icon: 'github', tooltip: 'Github', link: 'https://github.com/bryan201429'},
        ],
        imageUrl: Bryan
      },
      {
        name: 'Rodrigo Amaya',
        role: 'Programador Full Stack',
        socialMedia: [
          { icon: 'twitter', tooltip: 'Twitter', link: '#' },
          { icon: 'linkedin', tooltip: 'LinkedIn', link: 'https://www.linkedin.com/in/rodrigo-augusto-amaya-9a04161b5' },
          { icon: 'github', tooltip: 'Github', link: '#'},
        ],
        imageUrl: Rodrigo
      },
      {
        name: 'Julian Tejeda',
        role: 'Programador Full Stack',
        socialMedia: [
          { icon: 'twitter', tooltip: 'Twitter', link: '#' },
          { icon: 'linkedin', tooltip: 'LinkedIn', link: 'https://www.linkedin.com/in/julian-tejada-079325198' },
          { icon: 'github', tooltip: 'Github', link: 'https://github.com/TomateComunista'},
        ],
        imageUrl: Julian
      },
      {
        name: 'Brandon Barrera',
        role: 'Programador Full Stack',
        socialMedia: [
          { icon: 'twitter', tooltip: 'Twitter', link: '#' },
          { icon: 'linkedin', tooltip: 'LinkedIn', link: '#' },
          { icon: 'github', tooltip: 'Github', link: '#'},
        ],
        // imageUrl: Brandon
      },
      {
        name: 'Brian Gelvez',
        role: 'Programador Full Stack',
        socialMedia: [
          { icon: 'instagram', tooltip: 'instagram', link: 'https://www.instagram.com/brian.gelvez/' },
          { icon: 'linkedin', tooltip: 'LinkedIn', link: 'https://www.linkedin.com/in/briangelvez97/' },
          { icon: 'github', tooltip: 'Github', link: '#'},
        ],
        imageUrl: Brian
      },
      {
        name: 'leidy Sánchez',
        role: 'Programador Full Stack',
        socialMedia: [
          { icon: 'twitter', tooltip: 'Twitter', link: '#' },
          { icon: 'linkedin', tooltip: 'LinkedIn', link: 'https://www.linkedin.com/in/leidy-johanna-s%C3%A1nchez-zamora-9370731a3/' },
          { icon: 'github', tooltip: 'Github', link: '#'},
        ],
        imageUrl: Leidy
      },
  ];

    // Definir los elementos SVG para los iconos
    const socialIcons = {
        twitter: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
          </svg>
        ),
        instagram: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
          </svg>
        ),
        facebook: (
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
        </svg>
        ),
        linkedin: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
          </svg>
        ),
        github: (
            <svg aria-hidden="true" height="24" version="1.1" viewBox="0 0 16 16" width="24">
                <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          ),
          
      };

      return (
        <div className='AboutProContainer'>
        <h1 className='titulo'>About Programmers</h1>
        <h2 className='subtitulo'>This is our great team of programmers, thanks for your passion and dedication, this project has been successfully consolidated.</h2>
        <div className='card-container'>
            
          {cardsData.map((card, index) => (
            <div key={index} className="card-client">
              <div className="user-picture">
                <img src={card.imageUrl} alt={`Image of ${card.name}`} />
              </div>
              <p className="name-client">
                {card.name}
                <span>{card.role}</span>
              </p>
              <div className="social-media">
                {card.socialMedia.map((social, idx) => (
                  <a key={idx} href={social.link}>
                    {socialIcons[social.icon]} {/* Mostrar el icono */}
                    <span className="tooltip-social">{social.tooltip}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        </div>
      );
    };
    

export default GoogleButton;
