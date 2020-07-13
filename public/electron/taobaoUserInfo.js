const storage = require('electron-json-storage')

const taobaoUserInfo = async (event, { id, password }) => {
  storage.set('taobaoUserInfo', { id, password }, (error) => {
    if (error) throw new Error(error)
  })
}

module.exports = taobaoUserInfo
