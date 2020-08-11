import Vue from 'vue'

class Store{
    constructor(options){
        const {state={}, mutations={}} = options;
        this._vm = new Vue({
            data:{
                $$state:state
            }
        })
        this._mutations = mutations
    }
}
Store.prototype.commit = function(type, payload){
    if(this._mutations[type]){
        this._mutations[type](this.state, payload)
    }
}
Object.defineProperties(Store.prototype,{
    state:{
        get:function(){
            return this._vm._data.$$state
        }
    }
});
export default {Store}