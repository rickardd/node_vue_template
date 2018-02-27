import Api from '@/services/Api'

export default {
  createUser (credentials) {
    return Api().post('/user', credentials)
  },
  getUsers () {
    return Api().get('/user')
  },
  getUser (id) {
    return Api().get(`/user/${id}`)
  },
  updateUser (id, credentials) {
    return Api().put(`/user/${id}`, credentials)
  },
  deleteUser (id) {
    return Api().delete(`/user/${id}`)
  }
}
