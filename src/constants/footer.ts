import Instagram from '../assets/icons/inst.svg'
import Facebook from '../assets/icons/facebook.svg'
import Twitter from '../assets/icons/twitter.svg'

export const FOOTER_DATA = {
  top: [
    {
      title: 'Shopdoc',
      items: [
        { label: 'High quality and trusted medical shop service', url: '#' },
      ],
    },
    {
      title: 'About us',
      items: [
        { label: 'Who We Are', url: '#' },
        { label: 'Vision & Mission', url: '#' },
        { label: 'Core Values', url: '#' },
        { label: 'Quality Policy', url: '#' },
      ],
    },
    {
      title: 'FAQ',
      items: [{ label: 'FAQ', url: '#' }],
    },
    {
      title: 'Blog',
      items: [{ label: 'Blog', url: '#' }],
    },
    {
      title: 'Contact us',
      items: [
        { label: 'Get in touch is easy', url: '#' },
        { label: 'Follow us', url: '#' },
      ],
      social: [
        { icon: Instagram, url: 'https://instagram.com' },
        { icon: Twitter, url: 'https://twitter.com' },
        { icon: Facebook, url: 'https://facebook.com' },
      ],
    },
  ],
  bottom: 'Copyrights © 2021 Shopdoc. All Rights Reserved.',
}
