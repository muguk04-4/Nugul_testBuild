monogatari.characters ({
	'b': {
		name: 'Birdrone',
		color: '#FF0000',
		directory: 'test',
		sprites: {
			normal: 'birdrone.png'
		}
	},
});

monogatari.assets ('music', {
	'chapter1_theme' : 'chapter1_theme.mp3'
});

monogatari.script ({
	// 챕터1 시작
	'chapter1': [
		'play music main_theme with volume 5 loop',
    'show scene scene_test1 with fadeIn with duration 3s',

    'y 나 소환하면서 새소리 브금 추가하기',
		'show character y normal fadeIn with duration 3s',
		'play music chapter1_theme with volume 5 loop',

		'y 나 천천히 사라지면서 새소리만 남기',
		'hide character y with fadeOut with duration 6s',
		'stop music main_theme',

		'y 나 소환되면서 효과음 뿅',
		'show character y normal',
		'play sound click1 with volume 50',

		'y 나 좌, 새 우',
		'show character y normal at left',
		'show character b normal at right',
		'b 애옹',
		'y 나 우, 새 좌',
		'show character b normal at left',
		'show character y normal at right',
		'b 애옹',
		'y 나 새 합체',
		'b 애옹?',
		'show character y normal at center',
		'show character b normal at center',

		'y 배경 바꾸기',
		'show scene scene_test2 with fadeIn with duration 3s',

		'y {{player.name}}님, 하이루',
		'end'
	],
});