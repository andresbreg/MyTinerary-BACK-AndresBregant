const City = require('../models/City')

const filterCities = async (req,res) => {
  
  const { startsWith } = req.query
  try {
    const cities = await City.find({ name: new RegExp('^' + startsWith, 'i') })
    res.json(cities);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cities', error: error.message })
  }
}

module.exports = filterCities