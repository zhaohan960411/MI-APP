export const CartsUrl = "http://localhost:3000/vue-cli-server/datas/Carts"
export default {
    /**
     * 通过用户的编号来获取carts信息
     * @param cb 返回的数据
     */
    GoodsInfo(cb) {
        fetch(CartsUrl).then(res => {
            res.json().then(data => {
                cb(data)
            })
        })
    },
}