// import components
import myHeader from "./components/myHeader"

// import filters
import {formatDate} from './assets/util'

// filters
const globalFilters = {
    date: formatDate
}

// components
const globalComponents = {
    myHeader
}

export default {
    install: function(Vue) {
        // 全局过滤器
        Object.keys(globalFilters).forEach(key => {
            Vue.filter(key, globalFilters[key])
        })

        // 全局组件
        Object.keys(globalComponents).forEach(key => {
            Vue.component(key, globalComponents[key])
        })

    }
}