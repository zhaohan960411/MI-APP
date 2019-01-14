export const AJAXURL2 = "http://localhost:3000/vue-cli-server/datas/everydaychoose"
export default {
    getNavData(cb) {
        fetch(AJAXURL2).then(res => {
            res.json().then(data => {
                cb(data)
            })
        })
    }
}