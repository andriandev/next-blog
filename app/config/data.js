const DUMMY_POSTS = [
  {
    id: 1,
    slug: 'people-one',
    title: 'Programming for one people',
    description:
      'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
    image: 'image-one.jpg',
  },
  {
    id: 2,
    slug: 'people-two',
    title: 'Programming for two people',
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    image: 'image-two.jpg',
  },
  {
    id: 3,
    slug: 'people-three',
    title: 'Programming for three people',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    image: 'image-three.jpg',
  },
  {
    id: 4,
    slug: 'people-four',
    title: 'Programming for four people',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    image: 'image-four.jpg',
  },
  {
    id: 5,
    slug: 'people-five',
    title: 'Programming for five people',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    image: 'image-five.jpg',
  },
  {
    id: 6,
    slug: 'people-six',
    title: 'Programming for six people',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    image: 'image-six.jpg',
  },
  {
    id: 7,
    slug: 'people-seven',
    title: 'Programming for seven people',
    description:
      'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
    image: 'image-seven.jpg',
  },
  {
    id: 8,
    slug: 'people-eight',
    title: 'Programming for eight people',
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    image: 'image-eight.jpg',
  },
  {
    id: 9,
    slug: 'people-nine',
    title: 'Programming for nine people',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    image: 'image-nine.jpg',
  },
  {
    id: 10,
    slug: 'people-ten',
    title: 'Programming for ten people',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    image: 'image-ten.jpg',
  },
  {
    id: 11,
    slug: 'people-eleven',
    title: 'Programming for eleven people',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    image: 'image-eleven.jpg',
  },
  {
    id: 12,
    slug: 'people-twelve',
    title: 'Programming for twelve people',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    image: 'image-twelve.jpg',
  },
  {
    id: 13,
    slug: 'people-thirteen',
    title: 'Programming for thirteen people',
    description:
      'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
    image: 'image-one.jpg',
  },
  {
    id: 14,
    slug: 'people-fourteen',
    title: 'Programming for fourteen people',
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    image: 'image-two.jpg',
  },
  {
    id: 15,
    slug: 'people-fiveteen',
    title: 'Programming for fiveteen people',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    image: 'image-three.jpg',
  },
  {
    id: 16,
    slug: 'people-sixteen',
    title: 'Programming for sixteen people',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    image: 'image-four.jpg',
  },
  {
    id: 17,
    slug: 'people-seventeen',
    title: 'Programming for seventeen people',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    image: 'image-five.jpg',
  },
  {
    id: 18,
    slug: 'people-eighteen',
    title: 'Programming for eighteen people',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    image: 'image-six.jpg',
  },
  {
    id: 19,
    slug: 'people-nineteen',
    title: 'Programming for nineteen people',
    description:
      'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
    image: 'image-seven.jpg',
  },
  {
    id: 20,
    slug: 'people-twenty',
    title: 'Programming for twenty people',
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    image: 'image-eight.jpg',
  },
  {
    id: 21,
    slug: 'people-twenty-one',
    title: 'Programming for twenty one people',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    image: 'image-nine.jpg',
  },
  {
    id: 22,
    slug: 'people-twenty-two',
    title: 'Programming for twenty two people',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    image: 'image-ten.jpg',
  },
  {
    id: 23,
    slug: 'people-twenty-three',
    title: 'Programming for twenty three people',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    image: 'image-eleven.jpg',
  },
  {
    id: 24,
    slug: 'people-twenty-four',
    title: 'Programming for twenty four people',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    image: 'image-twelve.jpg',
  },
];

const limitPostPerPage = 6;

export function getAllPost(page = 1, limit = limitPostPerPage) {
  const limitPost = limit * page;
  const offsetPost = (page - 1) * limit;
  return DUMMY_POSTS.slice(offsetPost, limitPost);
}

export function getPostBySlug(slug) {
  return DUMMY_POSTS.find((event) => event.slug === slug);
}

export function getPageCount(limit = limitPostPerPage) {
  const pageCount = DUMMY_POSTS.length / limit;
  return Math.ceil(pageCount);
}
