function  login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'bob' && password === 'secret') {
        ons.notification.alert('Congratulations!');
    } else {
        ons.notification.alert('Incorrect username or password.');
    }
};
/*
function change() {
    change.querySelector('#myNavigation').pushPage(('login.html'), { data: { title: 'Page 2' } });
};
*/
document.addEventListener('init', function (event) {
    var page = event.target;

    if (page.id === 'login') {
        page.querySelector('#signup').onclick = function () {
            document.querySelector('#myNavigator').pushPage('signup.html', { data: { title: 'Page 2' } });
        };
        page.querySelector('#signin').onclick = function () {
            document.querySelector('#myNavigator').pushPage('menu.html', { data: { title: 'Page 2' } });
        };
    }

    if (page.id = 'plan_list') {
        page.querySelector('#plan1').onclick = function () {
            document.querySelector('#myNavigator').pushPage('login.html', { data: { title: 'Page 2' } });
        };
        page.querySelector('#plan2').onclick = function () {
            document.querySelector('#myNavigator').pushPage('login.html', { data: { title: 'Page 2' } });
        };
        page.querySelector('#plan3').onclick = function () {
            document.querySelector('#myNavigator').pushPage('makeplan1.html', { data: { title: 'Page 2' } });
        };
    } else if (page.id = 'make_plan1') {
        page.querySelector('#place1').onclick = function () {
            document.querySelector('#myNavigator').pushPage('login.html', { data: { title: 'place1' } });
        };
        page.querySelector('#place2').onclick = function () {
            document.querySelector('#myNavigator').pushPage('login.html', { data: { title: 'place 2' } });
        };
    }
});