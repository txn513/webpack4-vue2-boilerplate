<template>
    <div class="home">
        home
        <async></async>  
    </div>
</template>
<script>
import _ from 'lodash'
_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 });
export default {
    components: {
        'async': () => import(/* webpackChunkName: "async" */ '../components/async.vue')
    }
}
</script>
