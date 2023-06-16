export class AuthError extends Error {
  constructor(message) {
    super(message);
    this.name = 'AuthError';
  }
}

export class UserError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UserError';
  }
}
