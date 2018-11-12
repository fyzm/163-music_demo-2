window.eventHub = {
  events:{
    //'羊城晚报':[fn],
    //'楚天都市报':[],
  },
  emit(eventName,data){//发布，找到那个函数，把那个桶里的函数，都call一遍
    for(let key in this.events){
      if(key === eventName){
        let fnList = this.events[key]
        fnList.map((fn)=>{
          fn.call(undefined,data)
        })
      }
    }
  },
  on(eventName,fn){//订阅，就是把函数放到桶里
    if(this.events[eventName] === undefined){
      this.events[eventName] = []
    }
    this.events[eventName].push(fn)
    // for(let key in this.events){
    //   if(key === eventName){
    //     if(this.events[key] === undefined){
    //       this.events[key] = []
    //     }
    //     this.events[key].push(fn)
    //   }
    // }
  }
}