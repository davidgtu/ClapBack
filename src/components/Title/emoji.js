import emoji from 'react-easy-emoji';

export const Emoji = ({ icon }) => (
  emoji(icon, {
    baseUrl: '//twemoji.maxcdn.com/2/svg/',
    ext: '.svg',
    size: '',
  })
);