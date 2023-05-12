import addFormats from 'ajv-formats'
import { Validator } from 'express-json-validator-middleware'

const validator = new Validator()
addFormats(validator.ajv)

export default validator.validate
