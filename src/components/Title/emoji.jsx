import emoji from 'react-easy-emoji';

export const Emoji = ({ icons }) => (
  emoji(icons, {
    baseUrl: '//twemoji.maxcdn.com/2/svg/',
    ext: '.svg',
    size: '',
  })
);