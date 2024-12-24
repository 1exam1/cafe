## Правила и регламент

-   [Правила, рекомендации и порядок проведения](https://github.com/hexlet-college-students/exam-rules)

## Требования и рекомендации

-   Нельзя менять уже написанный код, тесты и другие файлы добавленные в проект
-   Помимо стандартной библиотеки, вы можете использовать все что импортировано. Что не импортировано, то не используется.
-   Выполняйте коммиты и пуши как можно чаще. Так вы будете видеть какие из тестов сработают, а какие нет.
-   Во время работы не забывайте запускать саму утилиту и `npm test`

## Задание

Ваша задача написать и экспортировать компонент, который делает запрос на получение списка с кафе и рендерит их в списке. Данные с кафе находятся по адресу **\_\_fixtures\_\_/cafes.js**.

Таблица должна иметь заглавие c полями, которые указаны в данных о пользователях (рассмотрите данные самостоятельно).

Пример использования:

```html
<CafesTable />
```

Результат:

```html
<div id="container" class="container m-3">
	<div class="cafesTable">
		<div class="controls">
			<select name="subway" id="subway">
				<option value="All" selected>Все</option>
				<option value="Московская">Московская</option>
				<option value="Арбат">Арбат</option>
				<option value="Парк Культуры">Парк Культуры</option>
				<option value="Красная Площадь">Красная Площадь</option>
				<option value="Театральная">Театральная</option>
			</select>
		</div>
		<ul class="cardsList">
			<li class="card">
				<img src="https://via.placeholder.com/150" alt="" />
				<h2>Name</h2>
				<p>decs</p>
				<p>Address</p>
				<p>Subway: Arbat</p>
				<p>8:00 - 20:00</p>
			</li>
		</ul>
	</div>
</div>
```

## Для запуска приложения

```bash
make run # запускается сервер и клиент
```

### 1 задача

В файле **src/FilterCafes.jsx** cоздайте и экспортируйте по умолчанию компонент \<FilterCafes/>, в котором есть блок \<div class = 'controls'>, содержащий \<select name="subway" id="subway">.

```html
<select name="subway" id="subway">
	<option value="All">Все</option>
</select>
```

### 2 задача

В файле **src/CafesTable.jsx** cоздайте и экспортируйте по умолчанию компонент \<CafesTable/>, в котором есть блок \<div class = 'cafesTable'>, содержащий Прошлый компонент, а сразу после него добавьте список

```html
<ul class="cardsList"></ul>
```

### 3 задача

В компоненте \<CafesTable/> используйте хук `useEffect()` для запроса на сервер за данными. Вам необходимо сделать `get` запрос на сервер по адресу `/cafes` и отрендерить список кафе в списке. Обратите внимание, что у некоторых карточек отсутствует картинка, в таком случае использвуйте https://via.placeholder.com/150
Пример верстки карточки для кафе:

```html
<li className="card">
	<img src="" alt="" />
	<h2>Name</h2>
	<p>decs</p>
	<p>Address</p>
	<p>Subway: Arbat</p>
	<p>8:00 - 20:00</p>
</li>
```

Добавьте следующий варианты выбора для выподающего списка:

```js
[
	{
		name: "Арбатская",
		code: "Arbat",
	},
	{
		name: "Александровский сад",
		code: "Alexanders Garden",
	},
	{
		name: "Московская",
		code: "Moscow",
	},
	{
		name: "Парк Культуры",
		code: "Culture",
	},
	{
		name: "Театральная",
		code: "Theater",
	},
];
```

Пример результата:

```html
<option value="Arbat">Арбатская</option>
```

### 4 задача

В файле **src/FilterCafes.jsx** экспортируйте по умолчанию компонент \<FilterCafes/>, который отвечает за управление отображаемыми кафе. Он должен при выборе метро отображать кафе только рядом с выбранным метро.

# Список доступных сайтов

-   [Javascript](https://developer.mozilla.org/ru/docs/Learn/JavaScript)
-   [Web development](https://developer.mozilla.org/en-US/docs/Learn)
-   [Node](https://nodejs.org/ru/docs)
-   [Hexlet](https://hexlet.io)
-   [NPM](https://docs.npmjs.com/)
-   [lodash](https://lodash.com/docs)
-   [Github](https://github.com/)
-   [Github Classrom](https://classroom.github.com/)
-   [Github Docs](https://docs.github.com/ru)
-   [ESLint](https://eslint.org/docs/latest/)
-   [React](https://react.dev/)
