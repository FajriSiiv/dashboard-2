import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import youtube from "../images/icon-youtube.svg";

export const dataMedsos = [
  {
    id: 1,
    medsos: "facebook",
    name: "@nathanf",
    follower: "1987",
    today: {
      inslight: true,
      follow: 12,
    },
    iconSvg: facebook,
  },
  {
    id: 2,

    medsos: "twitter",
    name: "@rachelll123",
    follower: "2187",
    today: {
      inslight: true,
      follow: 152,
    },
    iconSvg: twitter,
  },
  {
    id: 3,
    medsos: "instagram",
    name: "@siiv1231",
    follower: "19213",
    today: {
      inslight: false,
      follow: 122,
    },
    iconSvg: instagram,
  },
  {
    id: 4,

    medsos: "youtube",
    name: "@enterhahsd",
    follower: "832",
    today: {
      inslight: true,
      follow: 121,
    },
    iconSvg: youtube,
  },
];

export const dataPageViews = [
  {
    id: 1,
    overview: {
      views: 12373,
      percent: 95,
      inslight: true,
    },
    likes: {
      like: 1233,
      percent: 14,
      inslight: false,
    },
    icon: facebook,
  },
  {
    id: 2,
    overview: {
      views: 237012,
      percent: 32,
      inslight: true,
    },
    likes: {
      like: 25234,
      percent: 34,
      inslight: false,
    },
    icon: instagram,
  },
  {
    id: 3,
    overview: {
      views: 20305,
      percent: 72,
      inslight: false,
    },
    likes: {
      like: 523,
      percent: 84,
      inslight: false,
    },
    icon: twitter,
  },
  {
    id: 4,
    overview: {
      views: 5712,
      percent: 23,
      inslight: false,
    },
    likes: {
      like: 719,
      percent: 74,
      inslight: true,
    },
    icon: youtube,
  },
];
