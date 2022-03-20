monogatari.script ({
	// 챕터1 시작
	'chapter1': [
		'play music main_theme with volume 5 loop',
    'show scene scene_test1 with fadeIn with duration 3s',

    'y 나 소환',
		'show character y normal fadeIn with duration 3s',

		'y 나 천천히 사라지기',
		'hide character y with fadeOut with duration 10s',

		'y 나 소환되면서 효과음 뿅',
		'show character y normal',
		'play sound click1 with volume 50',

		'y 나 좌로 1보',
		'show character y normal at left',
		'y 나 우로 2보',
		'show character y normal at right',
		'y 나 좌로 1보',
		'show character y normal at center',

		'y 배경 바꾸기~',
		'show scene scene_test2 with fadeIn with duration 3s',

		'y {{player.name}}님, 테스트를 시작합니다',
	],
});