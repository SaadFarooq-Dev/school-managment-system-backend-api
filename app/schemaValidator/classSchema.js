 const classSchema = {
  type: "object",
  required: ['name', 'classTeacherId', 'courses'],
  properties: {
    name: {
      type: 'string',
      minLength: 2,
      maxLength: 255,
    },
    classTeacherId: {
      type: 'string',
      minLength: 5
    },
    courses: {
      type: 'array',
      items: { type: 'string' },
      uniqueItems: true,
      minItems: 1
    }
  }
}
export const getClassSchema = (bool)=> {
 if (bool) {
  return classSchema
 }
 delete classSchema.required
 classSchema.additionalProperties = false
 return {...classSchema}
}
