//fetch data from API
export const getAllSites = async () => {
  //make fetch request and store response
  try {
    const response = await fetch(
      `https://kontests.net/api/v1/sites`
    );
    const data = await response.json();
      return data;
  } catch (error) {
    console.log(error);
  }
};


export const getAllContests = async () => {
    //make fetch request and store response
    try {
      const response = await fetch(
        `https://kontests.net/api/v1/all`
      );
      const data = await response.json();
        return data;
    } catch (error) {
      console.log(error);
    }
  };

  export const getAllCodeForces = async () => {
    //make fetch request and store response
    try {
      const response = await fetch(
        `https://kontests.net/api/v1/codeforces`
      );
      const data = await response.json();
        return data;
    } catch (error) {
      console.log(error);
    }
  };

  export const getAllHackerEarth = async () => {
    //make fetch request and store response
    try {
      const response = await fetch(
        `https://kontests.net/api/v1/hacker_earth`
      );
      const data = await response.json();
        return data;
    } catch (error) {
      console.log(error);
    }
  };

  export const getAllHackerRank = async () => {
    //make fetch request and store response
    try {
      const response = await fetch(
        `https://kontests.net/api/v1/hacker_rank`
      );
      const data = await response.json();
        return data;
    } catch (error) {
      console.log(error);
    }
  };
