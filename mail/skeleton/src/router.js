class Router{
    constructor(node,routes){
        this.node = node;
        this.routes = routes;
    }
}
Router.prototype.start = function(){
    this.render();
    window.addEventListener('hashchange', () =>{
        this.render();
    });
}
Router.prototype.render = function(){
    this.node.innerHTML = "";
    let yeehaw = this.activeRoute();
    let para = document.createElement('p');
    para.innerHTML = yeehaw;
    this.node.appendChild(para);
}
Router.prototype.activeRoute = function(){
   
    let hash = window.location.hash.substr(1);
    let comp = this.routes[hash];
    return comp;
}

module.exports = Router;
