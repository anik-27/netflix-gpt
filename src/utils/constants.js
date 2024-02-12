export const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";
export const BACKGROUND_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_medium.jpg";
export const API_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const CARD_IMG_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en-US", value: "English" },
  { identifier: "zh-CN", value: "Chinese" },
  { identifier: "ru-RU", value: "Russian" },
  { identifier: "ja-JP", value: "Japenese" },
];

export const GPT_KEY = process.env.REACT_APP_GPT_KEY;
// console.log(process);

// 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
