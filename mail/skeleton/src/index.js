const Router = require('./router.js');
const Compose = require('./compose.js');
const Inbox = require('./inbox.js');
const Sent = require('./sent.js');
let routes = {
    compose: Compose,
    inbox: Inbox,
    sent: Sent
};
document.addEventListener('DOMContentLoaded', () =>{
    let navItems = Array.from(document.querySelectorAll('.sidebar-nav li'));
    
    let content = document.querySelector('.content');
    router = new Router(content, routes);
    router.start();

    window.location.hash = '#inbox'
    navItems.forEach((navItem) =>{
        navItem.addEventListener('click', () =>{
            let name = navItem.innerText;
            name = name.toLowerCase();
            window.location.hash = name;
        });
    });
});
