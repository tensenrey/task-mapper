import { users } from "./payload.js";
import { mapper } from "./mapper.js";
import { _payload } from "./assert_payload.js";

const array = mapper(users);

// default checks

if (Array.isArray(array) === false) {
  throw new Error("is not array");
}

if (array.length !== 4) {
  throw new Error("array with uncurrect return value size");
}

const MALE_NAMES = []
const FEMALE_NAMES = []
const UNKNOWN_NAMES = []

array.map((el) => {
  if (el.gender === "male") return MALE_NAMES.push(el);
  if (el.gender === "female") return FEMALE_NAMES.push(el);
  return UNKNOWN_NAMES.push(el);
});

if (MALE_NAMES.length !== 2) {
  throw new Error("array with uncurrect return value size");
}

if (FEMALE_NAMES.length !== 1) {
  throw new Error("array with uncurrect return value size");
}

if (UNKNOWN_NAMES.length !== 1) {
  throw new Error("array with uncurrect return value size");
}

// dynamic check

for(const item of array) {
  if (item.name[0] !== item.name[0].toUpperCase()) {
    throw new Error("uncurrect name");
  }

  if (item.info.lastUpdate !== new Date(item.info.lastUpdate).toUTCString()) {
    throw new Error("uncurrect last update date");
  }

  if (typeof item.age !== "number") {
    throw new Error("uncurrect age");
  }
}

// contains check (only first item)

console.log(JSON.stringify(array[1]),  JSON.stringify(_payload))

console.log("Success");
