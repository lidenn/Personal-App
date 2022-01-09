export const FoodFilters = ['Asian', 'Brunch', 'Italian', 'American'];
export const FoodRecs = [
  {
    name: 'Nongs Khao Man Gai',
    description: 'Portland`s iconic Hainan style chicken',
    address: '609 SE Ankeny St C, Portland, OR 97214',
    position: { lat: 45.52244, lng: -122.6594 },
    hours: [
      { MondayOpen: 10, MondayClose: 20 },
      { TuesdayOpen: 10, TuesdayClose: 20 },
      { WednesdayOpen: 10, WednesdayClose: 20 },
      { ThursdayOpen: 10, ThursdayClose: 20 },
      { FridayOpen: 10, FridayClose: 20 },
      { SaturdayOpen: 10, SaturdayClose: 20 },
      { SundayOpen: 10, SundayClose: 20 },
    ],
    recommendatedItem: 'Khao Man Gai',
    filters: ['Asian'],
    image:
      'https://www.oregonlive.com/resizer/Dw5EJ2rtjjKMe3DJBGo4quwPTg0=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.oregonlive.com/home/olive-media/width2048/img/ent_impact_dining/photo/nongjpg-9e374da76e688e68.jpg',
  },
  {
    name: 'Luc Lac',
    description: 'Vietnamese Food in a hip venue and late-night hours',
    address: '835 SW 2nd Ave, Portland, OR 97204',
    position: { lat: 45.522091, lng: -122.672318 },
    hours: [
      { MondayOpen: 11, MondayClose: 24 },
      { TuesdayOpen: 11, TuesdayClose: 24 },
      { WednesdayOpen: 11, WednesdayClose: 24 },
      { ThursdayOpen: 11, ThursdayClose: 24 },
      { FridayOpen: 11, FridayClose: 24 },
      { SaturdayOpen: 11, SaturdayClose: 24 },
      { SundayOpen: 11, SundayClose: 24 },
    ],
    recommendatedItem: 'Pork Vermicelli Bowl',
    filters: ['Asian'],
    image:
      'https://media-cdn.tripadvisor.com/media/photo-s/10/7b/70/9e/luc-lac-kitchen.jpg',
  },
  {
    name: 'Khao Moo Dang',
    description: 'Chinese/Thai fusion specializing in Pork Noodles',
    address: '3145 SE Hawthorne Blvd, Portland, OR',
    position: { lat: 45.5121, lng: -122.63329 },

    hours: [
      { MondayOpen: 11.5, MondayClose: 21 },
      { TuesdayOpen: 11.5, TuesdayClose: 21 },
      { WednesdayOpen: 11.5, WednesdayClose: 21 },
      { ThursdayOpen: 11.5, ThursdayClose: 21 },
      { FridayOpen: 11.5, FridayClose: 21 },
      { SaturdayOpen: 11.5, SaturdayClose: 21 },
      { SundayOpen: 11.5, SundayClose: 21 },
    ],
    recommendatedItem: 'Ba Mhee Pi-set',
    filters: ['Asian'],
    image:
      'https://cdn.vox-cdn.com/thumbor/4rODnZW06ztMAQT8s8e_JTfL0h8=/0x0:6016x3836/1200x800/filters:focal(2527x1437:3489x2399)/cdn.vox-cdn.com/uploads/chorus_image/image/65555765/shutterstock_1251709069.0.jpg',
  },
  {
    name: 'Afuri',
    description: 'Authentic Japanese Ramen Chain originating from Japan',
    address: '12555 SW 1st St, Beaverton, OR 97005',
    position: { lat: 45.48658, lng: -122.80574 },

    hours: [
      { MondayOpen: 16, MondayClose: 22 },
      { TuesdayOpen: 16, TuesdayClose: 22 },
      { WednesdayOpen: 16, WednesdayClose: 22 },
      { ThursdayOpen: 16, ThursdayClose: 22 },
      { FridayOpen: 16, FridayClose: 22 },
      { SaturdayOpen: 16, SaturdayClose: 22 },
      { SundayOpen: 16, SundayClose: 22 },
    ],
    recommendatedItem: 'Yuzu Tsukemen',
    filters: ['Asian'],
    image:
      'https://images.squarespace-cdn.com/content/574dcebcb09f9563a86c1191/1590084767715-KH2H4ABWDPYQK5U7WYVC/mesa013.jpg?format=1500w&content-type=image%2Fjpeg',
  },
  {
    name: 'Grassa',
    description: 'Variety of pasta with a hipster interior and casual prices',
    address: '1506 NW 23rd Ave, Portland, OR 97210',
    position: { lat: 45.53361, lng: -122.69853 },
    hours: [
      { MondayOpen: 11, MondayClose: 22 },
      { TuesdayOpen: 11, TuesdayClose: 22 },
      { WednesdayOpen: 11, WednesdayClose: 22 },
      { ThursdayOpen: 11, ThursdayClose: 22 },
      { FridayOpen: 11, FridayClose: 22 },
      { SaturdayOpen: 11, SaturdayClose: 22 },
      { SundayOpen: 11, SundayClose: 22 },
    ],
    recommendatedItem: 'Carbonara',
    filters: ['Italian'],
    image:
      'https://www.oregonlive.com/resizer/AcRRX8meVIf6LnuaQkgud2LGoA4=/1280x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/7JLFKNAKG5DTDISDWRU34PXE5E.jpg',
  },
  {
    name: 'Matt`s BBQ',
    description:
      'Texas Style BBQ in Portland. One of Portland`s best spots for BBQ',
    address: '4233 N Mississippi Ave, Portland, OR 97217',
    position: { lat: 45.55516178470179, lng: -122.67582163068317 },
    hours: [
      { MondayOpen: 11.5, MondayClose: 20 },
      { TuesdayOpen: 11.5, TuesdayClose: 20 },
      { WednesdayOpen: 11.5, WednesdayClose: 20 },
      { ThursdayOpen: 11.5, ThursdayClose: 20 },
      { FridayOpen: 11.5, FridayClose: 21 },
      { SaturdayOpen: 11.5, SaturdayClose: 21 },
      { SundayOpen: 11.5, SundayClose: 20 },
    ],
    recommendatedItem: 'Pork Spare Ribs',
    filters: ['American'],
    image:
      'https://cdn.vox-cdn.com/thumbor/Fi8qIeU9vnFvIsavIU4vLixD9ag=/0x229:960x732/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/10257681/27857761_955879567904513_6917326228512000320_n.jpg',
  },
];
export const neighborhoodRecs = [{}];
