const getClient = (req,res) => {

  const {id} = req.params
  const {data} = req.query

  if(data) {
    res.json(
      {
      name: 'John',
      lastName: 'Johnson',
      age: '16',
      paramId: id,
      queryData: data
      }
    )
  } else {
    res.json(
      {
      name: 'John',
      lastName: 'Johnson',
      age: '16',
      paramId: id
      }
    )
  }
}

const getClients = (req,res) => {
  res.json({clients: [
    {
    name: 'John',
    lastName: 'Johnson',
    age: '16'
    },
    {
    name: 'Peter',
    lastName: 'Johnson',
    age: '18'
    }
  ]})
}

module.exports = { getClient, getClients }