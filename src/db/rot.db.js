const { RotationModel } = require('../models')

/**
 * This function makes db create request to save original text
 * 
 * @param {object} content original and rot13 string
 * @returns db response
 */
const fetch = async (originalString, rotNumber) => {
  try {
    const res = await RotationModel.findOne({ originalString, rotNumber });
    return res;
  } catch(e) {
    throw new Error(e.message)
  }
}

/**
 * This function makes db create request to save original text
 * 
 * @param {object} content original and rot13 string
 * @returns db response
 */
const save = async (content) => {
  try {
    const res = await RotationModel.create(content);
    return res;
  } catch(e) {
    throw new Error(e.message)
  }
}

module.exports = {
  fetch,  
  save
}