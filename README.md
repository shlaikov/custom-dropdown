# Кастомный **"DropDown List"** на **AngularJS**.

<img src="https://avatars0.githubusercontent.com/u/139426?v=3&s=400" width="100px" title="AngularJS"/>
<img src="https://bower.io/img/bower-logo.svg" width="100px" title="Bower"/>
<img src="http://gruntjs.com/img/grunt-logo.png" width="70px" title="Grunt"/>



Готовая модель кастомного *"select"* списка на чистом AngularJS 1.
Также скоро буду выкладывать свои остальные работы в репозитории для примеров. В дальнейшем хочется сделать генератор [Yeoman](http://yeoman.io/) для различных кастомных DOM-элементов на AngularJS.<br><br>
Для сборки проекта использовал [Grunt](http://gruntjs.com/), [npm](https://www.npmjs.com/), [bower](https://bower.io/). Делал на фрилансе для компании [GetLooky](http://getlooky.ru) в январе 2015 года.


---

В данном примере использовал супер-героев из известного комикса MARVEL, чтобы
сделать более наглядно и креативно. Естественно, с `JSON` или со стороны сервера вы можете принимать всё, что угодно.<br>
<p align="left">
    <img src="app/custom_dropdown.gif" width="450px" title="example" />
</p>
<br>

### Пример использования элемента:
~~~html
<dropdown list="heroesData" selected="hero">
    <div class="dropdown-container" ng-class="{ show: listVisible }">
        <div class="dropdown-display" ng-click="show();" ng-class="{ clicked: listVisible }">
            <span ng-if="!isPlaceholder">{{display.Name +', ' + display.Alterego}}</span>
            <span class="placeholder" ng-if="isPlaceholder">Choose your hero...</span><i id="dropdown-icon" class="fa fa-angle-down"></i>
        </div>
        <div class="dropdown-list">
            <div>
                <div ng-repeat="hero in heroesData" ng-click="select(hero)" ng-class="{selected: isSelected(hero)}">
                    <img ng-src="{{hero.Image}}" alt="">
                    <label>{{'Hero: ' + hero.Name +', ' + hero.Alterego}}</label>
                    <span>{{'Species: ' + hero.Type}}</span>
                </div>
            </div>
        </div>
    </div>
</dropdown>
~~~
---


## Установка
Полная установка для стабильной работы.

### 1. Клонировать репозиторий:
`$ git clone https://github.com/shlaikov/custom-dropdown.git`

### 2. Установить Bower:
`$ npm install -g bower`

Компоненты для Bower:<br>
~~~
+--- bower_components
+---
    \
    |  +---  angular
    |  +---  angular-animate
    |  +---  angular-cookies
    |  +---  angular-mocks
    |  +---  bootstrap
    |  +---  jquery
~~~

### 3. Установить GruntJS:
`$ npm install -g grunt`

> Для запуска к `npm` менеджеру нужен сам `AngularJS` и к нему `jQuery`.

#
### После установки:

Запустить локальный сервер: <br>
`$ grunt server`

Создать уменьшенную сконвертированную версию в папку `/dist` <br>
`$ grunt build`

---

## Обратная связь

* Задать вопрос на [Stack Overflow](http://stackoverflow.com/questions/tagged/AngularJS).
* Мой [сайт](http://shlaikov.github.io/) с портфолио.
* Файл ошибок [GitHub Issues](https://github.com/shlaikov/custom_dropdown/issues).
* Подпишись в [Twitter](https://twitter.com/Shlaikov_Alexey).
* Подписывайтесь в [Instagram](https://www.instagram.com/alexey_shlaikov), ставьте лайки.

> Приветсвуются контрибьюторы и форки для улучшения репозитория.

### Другое:
- [AngularJS](https://angularjs.org/)
- [jQuery](http://jquery.com/)
- [Bootstrap](http://getbootstrap.com/)
- [JSON](http://www.json.org/)

## Лицензия
[MIT](LICENSE)
