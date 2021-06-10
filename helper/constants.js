const HttpCode = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
};

const Difficulty = {
  EASY: "easy",
  NORMAL: "normal",
  HARD: "hard",
};
const Category = {
  STUFF: "stuff",
  FAMILY: "family",
  HEALTH: "health",
  Learning: "learning",
  LEISURE: "leisure",
  WORK: "work",
};

const Type = {
  TASK: "task",
  CHALLENGE: "challenge",
};

module.exports = {
  Type,
  HttpCode,
  Difficulty,
  Category,
};
