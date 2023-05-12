export const courseSchema = {
  type: 'object',
  required: ['name'],
  properties: {
    name: {
      type: 'string',
      minLength: 4,
      maxLength: 64
    }
  }
}
