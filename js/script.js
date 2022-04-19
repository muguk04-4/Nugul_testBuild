/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
	'main_theme' : 'main_theme.mp3',
	'chapter1_theme' : 'chapter1_theme.mp3',
	'testScene_theme' : 'testScene_theme.mp3'
});

// Define the voice files used in the game.
monogatari.assets ('voices', {
	'scene1-nugul-1-1' : 'scene1-nugul-1-1.mp3'
});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
	'click1' : 'click1.mp3',
	'highhill_tap' : '104051_highhill_tap.mp3',
	'doldol' : '304131_doldoldol.mp3',
	'dol_tap' : '304132_doldoldol_hilltap.mp3',
	'dish_drop' : '404141_dish_drop.mp3',
	'metal_dish' : '404144_metal_dish.mp3'
});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'scene_test1' : 'scene_test1.jpg',
	'scene_test2' : 'scene_test2.jpg',
	'testScene' : 'testScene.png',
});


// Define the Characters
monogatari.characters ({
	'y': {
		name: '실험용 개발자 리승넨',
		color: '#AF6000',
		directory: 'test',
		sprites: {
			normal: 'developer.png'
		}
	},
	// 메인 캐릭터들
	'me': {
		name: '한여름',
		color: '#FF82FF',
	},
	'kang': {
		name: '강성찬',
		color: '#14D3FF',
		directory: 'test',
		sprites: {
			normal_R: 'kang_normal_R.png',
			normal_L: 'kang_normal_L.png'
		}
	},
	'lee': {
		name: '이연호',
		color: '#FFC314'
	},
	'han': {
		name: '한도율',
		color: '#5AD18F'
	},
	'sa': {
		name: '사예찬',
		color: '#CD3861'
	},
	// 서브, 지나가던 행인
	
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene #f7f6f6 with fadeIn',
		'y hi',

		{
			'Input': {
				'Text': '이름이 뭐야?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': '이름 쓰라고!!!'
			}
		},
		
		'play music main_theme with volume 5 loop',
		'play voice scene1-nugul-1-1',
		'y 더빙 테스트3 과 유저 이름:{{player.name}}',
		'play voice scene1-nugul-1-1',
		'y 더빙 테스트 1번 더',

		{
			'Choice': {
				'Dialog': 'y 모노가타리 문서 읽어봤니?',
				'Yes': {
					'Text': '엉(호감도 기능 테스트)',
					'Do': 'jump 엉'
				},
				'No': {
					'Text': '아닝(그림 기능 테스트)',
					'Do': 'jump 아닝'
				},
			}
		}
	],

	'엉': [
		'w 계속 넘기면 -100이였던 B의 호감도가 100씩 상승합니다',
		'stop music main_theme',
		'y 배경음 종료 테스트',
		'y 호감도 증가 후 90이상일 시 B_ending',

		function(){
			this.storage().player.B += 100;
		},
		{'Conditional' : {
			'Condition': function(){
				if(parseInt(this.storage().player.B) > 90){
					return "B";
				}
			},
			'B' : 'jump B_ending',
		}},
		
		'jump 엉'
	],

	'아닝': [
		'y 그럼 이거 읽어봐',
		'show message Help',

		'y 테스트용 화면으로 이동합니다.',
		'jump choose_chapter1_or_testscene'
	],

	'B_ending':[
		'y B는 너를 사랑해',
		'y end시 플레이어 정보가 초기화됩니다.',
		'end'
	],
	

});