var login = function () {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'bob' && password === 'secret') {
        ons.notification.alert('Congratulations!');
    } else {
        ons.notification.alert('Incorrect username or password.');
    }
};

document.addEventListener('init', function (event) {
    var page = event.target;

    if (page.id === 'login') {
        page.querySelector('#signup').onclick = function () {
            document.querySelector('#myNavigator').pushPage('signup.html', { data: { title: 'Page 2' } });
        };
        page.querySelector('#signin').onclick = function () {
            document.querySelector('#myNavigator').pushPage('menu.html', { data: { title: 'Page 2' } });
        };
    } else if (page.id === 'plan_list') {
        page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    } else if (page.id === 'menu'){
        page.querySelector('#make_plan').onclick = function () {
            document.querySelector('#myNavigator').pushPage('makeplan1.html', { data: { title: 'Make plan' } });
        };

        page.querySelector('#plan').onclick = function () {
            document.querySelector('#myNavigator').pushPage('search.html', { data: { title: 'search plan' } });
        };

        page.querySelector('#myplan').onclick = function () {
            document.querySelector('#myNavigator').pushPage('planlist.html', { data: { title: 'plan list' } });
        };
    }
});