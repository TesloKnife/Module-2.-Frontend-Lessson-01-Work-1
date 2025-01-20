import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

export const App = () => {
	// Императивный стиль - получение текущего года через вызов метода
	const nowYear = new Date().getFullYear(); // Текущий год

	// Декларативный стиль - определение состояния компонента
	const [count, setCount] = useState(0);

	// Декларативный стиль - описание структуры интерфейса
	return React.createElement(
		React.Fragment,
		null,
		// div с логотипами
		React.createElement(
			'a',
			{ href: 'https://vite.dev', target: '_blank' },
			React.createElement('img', {
				src: viteLogo,
				className: 'logo',
				alt: 'Vite logo',
			}),
		),
		React.createElement(
			'a',
			{ href: 'https://react.dev', target: '_blank' },
			React.createElement('img', {
				src: reactLogo,
				className: 'logo react',
				alt: 'React logo',
			}),
		),
		// Заголовок
		React.createElement('h1', null, 'Vite + React'),
		// Карточка с кнопкой
		React.createElement(
			'div',
			{ className: 'card' },
			React.createElement(
				'button',
				{ onClick: () => setCount((count) => count + 1) },
				`count is ${count}`,
			),
			React.createElement(
				'p',
				null,
				'Edit ',
				React.createElement('code', null, 'src/App.jsx'),
				' and save to test HMR',
			),
		),
		// Подсказка
		React.createElement(
			'p',
			{ className: 'read-the-docs' },
			'Click on the Vite and React logos to learn more',
		),
		// Текущий год
		React.createElement('p', null, `Текущий год: ${nowYear}`),
	);
};
