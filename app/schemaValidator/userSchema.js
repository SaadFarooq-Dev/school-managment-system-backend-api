import { userRole } from "../constants/enum.js";

export const userSchema = {
  type: "object",
  required: ['name', 'email', 'password', 'role'],
  properties: {
    name: {
      type: 'string',
      minLength: 2
    },
    email: {
      type: 'string',
      format: 'email',
      minLength: 5
    },
    password: {
      type: 'string',
      minLength: 5
    },
    role: {
      type: 'string',
      enum: userRole,
    }
  }
}
