export const getRandomNumber = () => {
  // Generate a random number between 1 and 60 (both inclusive)
  return Math.floor(Math.random() * 60) + 1;
};
export const getHeadline = async () => {
  try {
    const data = await fetch(`${process.env.HOST_URL}/api/headline`, {
      next: {
        revalidate: 3600,
      },
    });
    const headline = await data.json();

    return headline;
  } catch (error) {
    console.log(error);
  }
};
export const getNews = async () => {
  try {
    const data = await fetch(`${process.env.HOST_URL}/api/news`, {
      next: {
        revalidate: 3600,
      },
    });
    const news = await data.json();

    return news;
  } catch (error) {
    console.log(error);
  }
};

export const getOpinions = async () => {
  try {
    const data = await fetch(`${process.env.HOST_URL}/api/opinion`, {
      next: {
        revalidate: 3600,
      },
    });
    const opinions = await data.json();

    return opinions;
  } catch (error) {
    console.log(error);
  }
};

export const getCultures = async () => {
  try {
    const data = await fetch(`${process.env.HOST_URL}/api/culture`, {
      next: {
        revalidate: 3600,
      },
    });
    const cultures = await data.json();

    return cultures;
  } catch (error) {
    console.log(error);
  }
};

export const getLifestyles = async () => {
  try {
    const data = await fetch(`${process.env.HOST_URL}/api/lifestyle`, {
      next: {
        revalidate: 3600,
      },
    });
    const lifestyles = await data.json();

    return lifestyles;
  } catch (error) {
    console.log(error);
  }
};

export const getSports = async () => {
  try {
    const data = await fetch(`${process.env.HOST_URL}/api/sports`, {
      next: {
        revalidate: 3600,
      },
    });
    const sports = await data.json();

    return sports;
  } catch (error) {
    console.log(error);
  }
};
