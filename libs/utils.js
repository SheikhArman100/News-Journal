export const getRandomNumber=()=> {
  // Generate a random number between 1 and 60 (both inclusive)
  return Math.floor(Math.random() * 60) + 1;
}
export const getHeadline = async () => {
  const data = await fetch(`${process.env.HOST_URL}/api/headline`, {
    next: {
      revalidate: 21600000,
    },
  });
  const headline = await data.json();

  return headline;
};
export const getNews = async () => {
  const data = await fetch(`${process.env.HOST_URL}/api/news`, {
    next: {
      revalidate: 21600000,
    },
  });
  const news = await data.json();

  return news;
};

export const getOpinions = async () => {
  const data = await fetch(`${process.env.HOST_URL}/api/opinion`, {
    next: {
      revalidate: 21600000,
    },
  });
  const opinions = await data.json();

  return opinions;
};

