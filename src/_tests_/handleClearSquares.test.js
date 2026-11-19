import assert from "node:assert/strict";
import { afterEach, test } from "node:test";
import { handleClearSquares } from "../util/handleClearSquares.js";
import { url } from "../util/url.js";

const originalFetch = globalThis.fetch;
const originalLog = console.log;

afterEach(() => {
  globalThis.fetch = originalFetch;
  console.log = originalLog;
});

test("resets the UI to one placeholder and sends it to the delete-all endpoint", async () => {
  let squares;
  let request;
  globalThis.fetch = async (requestUrl, options) => {
    request = { url: requestUrl, options };
    return { ok: true, json: async () => ({}) };
  };
  console.log = () => {};

  await handleClearSquares({
    setSquares: (value) => {
      squares = value;
    },
  });

  const placeholder = {
    id: 0,
    color: "rgb(123,123,123)",
    x: 0,
    y: 0,
  };
  assert.deepEqual(squares, [placeholder]);
  assert.equal(request.url, `${url}/api/square/deleteall/`);
  assert.equal(request.options.method, "PUT");
  assert.equal(request.options.headers["Content-Type"], "application/json");
  assert.deepEqual(JSON.parse(request.options.body), placeholder);
});

test("logs the HTTP status and response body when delete-all fails", async () => {
  let loggedError;
  globalThis.fetch = async () => ({
    ok: false,
    status: 400,
    statusText: "Bad Request",
    text: async () => '{"title":"Bad Request","detail":"Invalid square"}',
  });
  console.log = () => {};
  const originalError = console.error;
  console.error = (error) => { loggedError = error; };

  try {
    await handleClearSquares({ setSquares: () => {} });
    assert.match(loggedError.message, /HTTP 400 Bad Request/);
    assert.match(loggedError.message, /Invalid square/);
  } finally {
    console.error = originalError;
  }
});
