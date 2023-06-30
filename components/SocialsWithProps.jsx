import Socials from '@catho/quantum/Socials';

const socialList = [
  {
    name: 'facebook',
    url: 'https://facebook.com',
    title: 'facebook title of the purpose of this icon',
  },
  {
    name: 'twitter',
    url: 'https://twitter.com',
    title: 'twitter title of the purpose of this icon',
  },
  {
    name: 'youtube',
    url: 'https://youtube.com',
    title: 'youtube title of the purpose of this icon',
  },
];

const SocialsWithProps = () => <Socials items={socialList} />;

export default SocialsWithProps;
