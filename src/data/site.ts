// Everything she will want to change lives in this one file.
export const profile = {
  name: 'Malory',
  tagline: 'Add a one-line intro here: who she is and what she recommends.',
  avatar: '', // e.g. '/avatar.jpg' after you put a photo in the public folder; blank shows her initial
};

// Her own shop (not an affiliate link). Replace '#' with the shop URL.
export const shop = {
  label: 'Shop my designs',
  note: 'Shirts, sweaters, mugs and more, made by me.',
  url: '#',
};

// Affiliate links, grouped by retailer. Replace each '#' with the link she sends.
export const sections = [
  {
    title: 'Amazon favorites',
    items: [
      { label: 'Amazon pick one', note: 'One short line about it.', url: '#' },
      { label: 'Amazon pick two', note: 'One short line about it.', url: '#' },
      { label: 'Amazon pick three', note: 'One short line about it.', url: '#' },
    ],
  },
  {
    title: 'Walmart favorites',
    items: [
      { label: 'Walmart pick one', note: 'One short line about it.', url: '#' },
      { label: 'Walmart pick two', note: 'One short line about it.', url: '#' },
      { label: 'Walmart pick three', note: 'One short line about it.', url: '#' },
    ],
  },
];

// Add her profiles when she has them, for example:
// { label: 'Instagram', url: 'https://instagram.com/handle' }
export const socials: { label: string; url: string }[] = [];
