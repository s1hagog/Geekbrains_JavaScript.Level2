
//Global

Vue.component('name-comp', {
    template: `<div class="comp"><input type="text" v-model.lazy="name"><br><p>Hello {{this.name}}</p><button>ok</button></div>`,
    data() {
        return {
            name: ''
        }
    }
}) ;


//Local

let localComp = {
    template: '<h1>Local Component # {{some_prop}}</h1>',
    props: ['some_prop']
};