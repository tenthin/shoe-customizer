import React from 'react'

const socialLinks = [
  {name:'Facebook', icon:'fa-square-facebook', url:'https://facebook.com'},
  {name:'X', icon:'fa-x-twitter',url:'https://x.com'},
  {name:'Instagram',icon:'fa-square-instagram',url:'https://instagram.com'},
  {name:'LinkedIn',icon:'fa-linkedin',url:'https://linkedin.com'}
]

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-inner-section row">
        <div className="column column-1">
          <h6>H+ Sport is a fictitious brand created by <a href='http//:lynda.com/'>lynda.com</a> solely for the purpose of training. All products and people associated with H+ Sport are also fictitious. Any resemblance to real brands, products, or people is purely coincidental. Information provided about the product is also fictitious and should not be construed to be representative of actual products on the market in a similar product category.</h6>
        </div>
        <div className="column column-2">
        <iframe
        src="https://www.youtube.com/embed/LKafSYIwUfM?feature=oembed"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
        </div>
        <div className="column column-3">
          <div className="social-media-button-container">
            {socialLinks.map((platform) => (
              <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              aria-label={platform.name}
              className={`icon-link ${platform.name.toLowerCase()}`}
              >
                <i className={`fa-brands ${platform.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer