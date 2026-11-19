import { url } from "./url";
export const fetchFromApi = async (setSquares, squares) => {
  try {
    const response = await fetch(`${url}/api/square/`);
    const data = await response.json();
    if (!data) {
      throw new Error("Something went wrong when fetching squares");
    }
    await setSquares(data);
    console.log(
      `Första fetchen - squares (${url}/api/square/): ${typeof squares} - ${squares}`,
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchPost = async (item) => {
  try {
    const response = await fetch(`${url}/api/square/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
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
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
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

export const fetchDelete = async () => {
  try {
    const response = await fetch(`${url}/api/deleteall/square/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Id: 0,
        Color: "rgb(123,123,123)",
        X: 0,
        Y: 0,
      }),
    });
    if (!response.ok) {
      throw new Error("Something went wrong with saving to api (delete)");
    }
    const data = await response.json();
    console.log(`Delete successfull: ${data}`);
  } catch (error) {
    console.error(error);
  }
};
