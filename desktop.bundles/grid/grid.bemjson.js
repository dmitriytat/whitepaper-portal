module.exports = {
	block: 'page',
	title: 'Сетка',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'grid.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' }
	],
	scripts: [{ elem: 'js', url: 'grid.min.js' }],
	mods: { theme: 'islands' },
	mix: {
		block: 'theme',
		mods: { color: 'whitepaper-default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'museo' }
	},
	content: [
		{
			block: 'demo',
			content: [

				/* Menu */
				{
					block: 'new-menu',
					mix: { block: 'demo', elem: 'nav' }
				},
				/* /Menu */

				/* /Content */
				{
					elem: 'content',
					elemMods: { size: 'l' },
					content: [
						{
							block: 'text',
							mods: { size: 'xxxxl', weight: 'bold', font: 'sans' },
							mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
							content: 'Сетка'
						},
						{
							block: 'text',
							mods: { size: 'l' },
							mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
							content: [
								{
									elem: 'row',
									content: 'С помощью модифкаиций управляет ритмом и композицией (расположением '
								},
								{
									elem: 'row',
									content: 'блоков) внутри секций'
								}
							]
						},
						{
							block: 'text',
							mods: { size: 'xxxl', weight: 'bold'  },
							mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
							content: 'Блок tpl-grid'
						},
						{
							block: 'layout-list',
							mix: [
							{ block: 'tpl-grid', mods: { ratio: '1-1-1', 'col-gap': 'two-thirds', 'row-gap': 'full' } },
							{ block: 'decorator', mods: { 'indent-b': 'xxxl' } }
							],
							content: [
								{
									block: 'layout-item',
									content: [
									{
										elem: 'view',
										content: [
											{
												block: 'image',
												url: '/assets/i/grids/1-1.svg'
											}
										]
									},
									{
										elem: 'name',
										content: [
										{
											block: 'text',
											// tag: 'a',
											// attrs: {
											// 	href: 'https://codepen.io/yegorov/full/JWNLLO',
											// 	target: '_blank'
											// },
											mods: { size: 'm', view: 'primary', weight: 'bold' },
											content: "ratio: '1-1'"
										}]
									}]
								},
								{
									block: 'layout-item',
									content: [
									{
										elem: 'view',
										content: [
											{
												block: 'image',
												url: '/assets/i/grids/1-1-1.svg'
											}
										]
									},
									{
										elem: 'name',
										content: [
										{
											block: 'text',
											// tag: 'a',
											// attrs: {
											// 	href: 'https://codepen.io/yegorov/full/zZwjrR',
											// 	target: '_blank'
											// },
											mods: { size: 'm', view: 'primary', weight: 'bold' },
											content: "ratio: '1-1-1'"
										}]
									}]
								},
								{
									block: 'layout-item',
									content: [
									{
										elem: 'view',
										content: [
											{
												block: 'image',
												url: '/assets/i/grids/1-1-1-1.svg'
											}
										]
									},
									{
										elem: 'name',
										content: [
										{
											block: 'text',
											// tag: 'a',
											// attrs: {
											// 	href: 'https://codepen.io/yegorov/full/MpmGJE',
											// 	target: '_blank'
											// },
											mods: { size: 'm', view: 'primary', weight: 'bold' },
											content: "ratio: '1-1-1-1'"
										}]
									}]
								}
							],
						},
						{
							block: 'text',
							mods: { size: 'xxxl', weight: 'bold'  },
							mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
							content: 'Элемент Fraction'
						},
						{
							block: 'layout-list',
							mix: { block: 'tpl-grid', mods: { ratio: '1-1-1', 'col-gap': 'two-thirds', 'row-gap': 'full' } },
							content: [
								{
									block: 'layout-item',
									content: [
									{
										elem: 'view',
										content: [
											{
												block: 'image',
												url: '/assets/i/grids/9-3.svg'
											}
										]
									},
									{
										elem: 'name',
										content: [
											{
												block: 'text',
												mods: { size: 'm', view: 'primary', weight: 'bold' },
												content: [
													{
														elem: 'row',
														content: "col: '9'"
													}
												]
											},
											{
												block: 'text',
												mix: { block: 'decorator', mods: { 'indent-l': 'xxxxxxl' } },
												mods: { size: 'm', view: 'primary', weight: 'bold' },
												content: [

													{
														elem: 'row',
														content: "col: '3'"
													}
												]
											}
										]
									}]
								},
								{
									block: 'layout-item',
									content: [
									{
										elem: 'view',
										content: [
											{
												block: 'image',
												url: '/assets/i/grids/4-8.svg'
											}
										]
									},
									{
										elem: 'name',
										content: [
											{
												block: 'text',
												mods: { size: 'm', view: 'primary', weight: 'bold' },
												content: [

													{
														elem: 'row',
														content: "col: '4'"
													}
												]
											},
											{
												block: 'text',
												mix: { block: 'decorator', mods: { 'indent-l': 'xxxxxxl' } },
												mods: { size: 'm', view: 'primary', weight: 'bold' },
												content: [

													{
														elem: 'row',
														content: "col: '8'"
													}
												]
											}
										]
									}]
								},
								{
									block: 'layout-item',
									content: [
									{
										elem: 'view',
										content: [
											{
												block: 'image',
												url: '/assets/i/grids/7-5.svg'
											}
										]
									},
									{
										elem: 'name',
										content: [
											{
												block: 'text',
												mods: { size: 'm', view: 'primary', weight: 'bold' },
												content: [

													{
														elem: 'row',
														content: "col: '7'"
													}
												]
											},
											{
												block: 'text',
												mix: { block: 'decorator', mods: { 'indent-l': 'xxxxxxl' } },
												mods: { size: 'm', view: 'primary', weight: 'bold' },
												content: [

													{
														elem: 'row',
														content: "col: '5'"
													}
												]
											}
										]
									}]
								}
							]
						}
					]
				},
				/* /Content */

				/* Footer */
				{
					block: 'footer',
					mix: { block: 'demo', elem: 'footer' }
				}
				/* /Footer */
				
			]
		}
	]
};
