import axios from 'axios'

let baseUrl = 'https://fullstackopen-cicd-server.onrender.com/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const update = async (object) => {
  let response = await axios.put(`${baseUrl}/${object.id}`, object)
  return response.data
}

export default {
  getAll,
  createNew,
  update
}