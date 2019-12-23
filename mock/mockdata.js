export const workOrders = [
  {
    id: '12345',
    location: 'Main Building',
    tags: ['Ac problem', 'urgent'],
    issueDetails: 'Water leaking out from the AC',
    createdBy: 'Sunil Perera',
    createdAt: '2th Aug',
    images: [{
      uri: 'https://www.thebetterindia.com/wp-content/uploads/2018/10/Representative-image-33.jpg',
    },
    {
      uri: 'https://i1.wp.com/thechargeronline.com/wp-content/uploads/2015/08/IMG_4794.jpg?fit=900%2C675&ssl=1',
    },
    ],
    status: 'Pending',
    comments: [
      {
        text: 'Im working on it',
        createdBy: 'Sunil Perera',
        createdAt: '2th Aug',
      },
      {
        text: 'Need bit more time',
        createdBy: 'John Doe',
        createdAt: '2th Aug',
      },
    ],
  },
  {
    id: '45678',
    location: 'Workshop area',
    tags: ['Road damage'],
    issueDetails: 'some damages to the surface of the road',
    createdBy: 'Jehan Dias',
    createdAt: '23th Aug',
    images: [
      'https://www.thebetterindia.com/wp-content/uploads/2018/10/Representative-image-33.jpg',
      'https://i1.wp.com/thechargeronline.com/wp-content/uploads/2015/08/IMG_4794.jpg?fit=900%2C675&ssl=1',
    ],
    status: 'Competed',
    comments: [
      {
        text: 'Im working on it',
        createdBy: 'Sunil Perera',
        createdAt: '2th Aug',
      },
      {
        text: 'Need bit more time',
        createdBy: 'John Doe',
        createdAt: '2th Aug',
      },
    ],
  },
  {
    id: '763871',
    location: 'Carbon Dioxide plant',
    tags: ['Leak'],
    issueDetails: 'oil separator is leacking',
    createdBy: 'Jehan Dias',
    createdAt: '23th Aug',
    images: [
      'https://www.thebetterindia.com/wp-content/uploads/2018/10/Representative-image-33.jpg',
      'https://i1.wp.com/thechargeronline.com/wp-content/uploads/2015/08/IMG_4794.jpg?fit=900%2C675&ssl=1',
    ],
    status: 'Completed',
    comments: [
      {
        text: 'Im working on it',
        createdBy: 'Sunil Perera',
        createdAt: '2th Aug',
      },
      {
        text: 'Need bit more time',
        createdBy: 'John Doe',
        createdAt: '2th Aug',
      },
    ],
  },
  {
    id: '321781',
    location: 'ASU',
    tags: ['Electriacal'],
    issueDetails: 'Remote transmeter failed',
    createdBy: 'Jehan Dias',
    createdAt: '23th Aug',
    images: [
      'https://www.thebetterindia.com/wp-content/uploads/2018/10/Representative-image-33.jpg',
      'https://i1.wp.com/thechargeronline.com/wp-content/uploads/2015/08/IMG_4794.jpg?fit=900%2C675&ssl=1',
    ],
    status: 'Competed',
    comments: [
      {
        text: 'Im working on it',
        createdBy: 'Sunil Perera',
        createdAt: '2th Aug',
      },
      {
        text: 'Need bit more time',
        createdBy: 'John Doe',
        createdAt: '2th Aug',
      },
    ],
  },
  {
    id: '12948216',
    location: 'LX 8752 VITT',
    tags: ['Leak'],
    issueDetails: 'PBC inlet leacking',
    createdBy: 'Jehan Dias',
    createdAt: '23th Aug',
    images: [
      'https://www.thebetterindia.com/wp-content/uploads/2018/10/Representative-image-33.jpg',
      'https://i1.wp.com/thechargeronline.com/wp-content/uploads/2015/08/IMG_4794.jpg?fit=900%2C675&ssl=1',
    ],
    status: 'On Hold',
    comments: [
      {
        text: 'Im working on it',
        createdBy: 'Sunil Perera',
        createdAt: '2th Aug',
      },
      {
        text: 'Need bit more time',
        createdBy: 'John Doe',
        createdAt: '2th Aug',
      },
    ],
  },
];

export const equipments = [
  {
    id: '1234',
    name: 'Ground Floor',
    items: [
      {
        id: '23232',
        name: 'Car Parking',
      },
      {
        id: '2748237',
        name: 'Lobby',
      },
    ],
    possibleIssues: [
      {
        name: 'Floor damage',
      },
      {
        name: 'Power failure',
      },
    ],
  },
  {
    id: '2345',
    name: 'First Floor',
    items: [
      {
        id: '32323',
        name: 'ETU',
      },
      {
        id: '282993',
        name: 'OPD',
      },
    ],
    possibleIssues: [
      {
        name: 'Oil leak',
      },
      {
        name: 'Motor burnt',
      },
      {
        name: 'Motor triped',
      },
      {
        name: 'cable damage',
      },
    ],
  },
  {
    id: '5677',
    name: 'Second Floor',
    items: [
      {
        id: '3434',
        name: 'Operation Theatre',
        items: [
          {
            id: '2983798273',
            name: 'Operation theatre 1',
            possibleIssues: [
              {
                name: 'Regulaor failed',
              },
              {
                name: 'Leak in rack',
              },
            ],
          },
          {
            id: '232323',
            name: 'Operation theatre 2',
            possibleIssues: [
              {
                name: 'Regulaor failed',
              },
              {
                name: 'Leak in rack',
              },
            ],
          },
        ],
      },
      {
        id: '1e0983',
        name: 'ICU 1',
      },
    ],
    possibleIssues: [
      {
        name: 'Regulaor failed',
      },
      {
        name: 'Leak in rack',
      },
    ],
  },
  {
    id: '28729874',
    name: 'Third Floor',
    possibleIssues: [
      {
        name: 'Regulaor failed',
      },
      {
        name: 'Leak in rack',
      },
    ],
  },
];

export const status = [
  {
    id: 1,
    name: 'Pending',
  },
  {
    id: 1,
    name: 'Planning',
  },
  {
    id: 1,
    name: 'On Hold',
  },
  {
    id: 1,
    name: 'Completed',
  },
];
