const DUMMY_EVENTS = [
  {
    id: 'people-one',
    title: 'Programming for one people',
    description:
      'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
    location: 'Somestreet 25, 12345 San Somewhereo',
    date: '2021-05-12',
    image: 'image-one.jpg',
    isFeatured: false,
  },
  {
    id: 'people-two',
    title: 'Programming for two people',
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: 'New Wall Street 5, 98765 New Work',
    date: '2021-05-30',
    image: 'image-two.jpg',
    isFeatured: true,
  },
  {
    id: 'people-three',
    title: 'Programming for three people',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    location: 'My Street 12, 10115 Broke City',
    date: '2022-04-10',
    image: 'image-three.jpg',
    isFeatured: false,
  },
  {
    id: 'people-four',
    title: 'Programming for four people',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    location: 'My Street 12, 10115 Broke City',
    date: '2022-04-10',
    image: 'image-four.jpg',
    isFeatured: true,
  },
  {
    id: 'people-five',
    title: 'Programming for five people',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    location: 'My Street 12, 10115 Broke City',
    date: '2022-04-10',
    image: 'image-five.jpg',
    isFeatured: false,
  },
  {
    id: 'people-six',
    title: 'Programming for six people',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    location: 'My Street 12, 10115 Broke City',
    date: '2022-04-10',
    image: 'image-six.jpg',
    isFeatured: true,
  },
];

export function getAllPost() {
  return DUMMY_EVENTS;
}

export function getPostById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
