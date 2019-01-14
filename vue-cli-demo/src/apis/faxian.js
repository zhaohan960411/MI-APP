export const FenUrl = "http://localhost:3001/vue-cli-server/data/faxian"
export default {
  /**
   * 通过用户的编号来获取carts信息
   * @param cb 返回的数据
   */
  getfaxian(cb) {
    fetch(FenUrl).then(res => {
      res.json().then(data => {
        cb(data)
      })
    })
  },

}
