/* eslint-disable max-classes-per-file */
class ServiceKeyError extends Error {
  constructor(message = 'Bad service key') {
    super(message);
    this.name = 'ServiceKeyError';
    this.status = 401;
  }
}

class BadMessageError extends Error {
  constructor(message = 'Bad message') {
    super(message);
    this.name = 'BadMessageError';
  }
}

module.exports = { ServiceKeyError, BadMessageError };
