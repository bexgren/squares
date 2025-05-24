import { url } from "./url";
export const fetchFromApi = async (setSquares, squares) => {
  try {
    const response = await fetch(`${url}/api/square/`);
    const data = await response.json();
    if (!data) {
      throw new Error("Something went wrong when fetching squares");
    }
    await setSquares(data);
    console.log(`Första fetchen - squares: ${typeof squares} - ${squares}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchPost = async (item) => {
  console.log(item);
  try {
    const response = await fetch(`${url}/api/square/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: item,
    });
    if (!response.ok) {
      throw new Error("Something went wrong with saving to api");
    }
    const data = await response.json();
    console.log(`Post successfull: ${data}`);
  } catch (error) {
    console.error(error);
  }
};

export const fetchPut = async (item) => {
  console.log(item);
  try {
    const response = await fetch(`${url}/api/square/0`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: item,
    });
    if (!response.ok) {
      throw new Error("Something went wrong with saving to api");
    }
    const data = await response.json();
    console.log(`Post successfull: ${data}`);
  } catch (error) {
    console.error(error);
  }
};
