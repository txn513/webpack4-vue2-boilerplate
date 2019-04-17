<template>
    <div>test</div>
</template>
<script>
import _ from 'lodash'
_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 });
console.log(_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }))
export default {
    
}
</script>
