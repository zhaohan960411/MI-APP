export const AJAXURL = "http://localhost:3000/vue-cli-server/datas/hotsall"
export default {
    getHotSallData(cb) {
        fetch(AJAXURL).then(res => {
            res.json().then(data => {
                cb(data)
            })
        })
    }
}