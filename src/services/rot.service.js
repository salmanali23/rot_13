const { RotationDb } = require('../db')
const { stringRotator } = require('../utils/rot-converter')

/**
 * Get the rot string on the base of original string in db
 * 
 * @param {string} content original string
 * @returns the db response after saving it into the db
 */
const getRotation = async (originalString, rotNumber) => {
  try {
    return await RotationDb.fetch(originalString, rotNumber)
  } catch(e) {
    throw new Error(e.message)
  }
}

/**
 * Save the original and rot string in db
 * 
 * @param {string} originalString original string
 * @param {string} rotString rot string
 * @param {string} rotNumber rot number
 * 
 * @returns the db response after saving it into the db
 */
const saveEncryption = async (originalString, rotString, rotNumber) => {
  try {
    const content = { originalString, rotString, rotNumber }
    return await RotationDb.save(content)
  } catch(e) {
    throw new Error(e.message)
  }
}

/**
 * Encrypting the plain text into given rot number cypher
 * 
 * @param {string} inputString the orignal input string
 * @returns the rot13 cipher in the form of a plain text
 */
const encrypt = (inputString, rotNumber) => {
  const cypher = stringRotator(inputString, rotNumber);
  return cypher;
}

module.exports = {
  getRotation,
  saveEncryption,
  encrypt
}