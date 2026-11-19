import { url } from "./url.js";
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

export const fetchDelete = async (object) => {
  try {
    const response = await fetch(`${url}/api/square/deleteall/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    });
    if (!response.ok) {
      const details = await response.text();
      throw new Error(
        `Delete request failed: HTTP ${response.status} ${response.statusText}${details ? ` - ${details}` : ""}`,
      );
    }
    const data = await response.json();
    console.log(`Delete successfull: ${data}`);
  } catch (error) {
    console.error(error);
  }
};
