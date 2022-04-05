monogatari.characters ({
	'b': {
		name: 'Birdrone',
		color: '#FF0000',
		directory: 'test',
		sprites: {
			normal: 'birdrone.png'
		}
	},

	'w': {
		name: '웨이터',
		color: '#FF0000',
		directory: 'test',
		sprites: {
			normal: 'developer.png'
		}
	},
});

monogatari.assets ('music', {
	'chapter1_theme' : 'chapter1_theme.mp3'
});

monogatari.script ({
	// 챕터 선택지
	'choose_chapter1_or_testscene' :[
		{
			'Choice': {
				'Dialog': 'y 테스트씬 or 챕터1(그림 테스트)',
				'Yes': {
					'Text': '테스트씬',
					'Do': 'jump testScene'
				},
				'No': {
					'Text': '챕터1',
					'Do': 'jump chapter1'
				},
			}
		}
	],
	
	// 테스트씬
	'testScene': [
		'stop music main_theme',
		'강성찬과 여름이 아무도 없는 레스토랑에서 전세를 낸 듯 테이블에 앉아있다. 여름은 주위를 둘러보며 예쁜 레스토랑 내부를 구경하며 감탄하고 있다.',

		'(브금) 조용하고 잔잔한 피아노곡이 들리는 레스토랑 음악',
		'(효과음) 웨이터가 구두를 신고 다가오는 소리 (타일 밟는 소리)',

		'w 주문하시겠습니까?',
		'kang 스테이키로 부탁합니다.',
		'w 네, 스테이크는 어떤 걸로 해드릴까요?',
		'kang (고민하며) 추천..! 추천메뉴가 뭐죠?',
		'w 요즘 잘 나가는 티본 스테이크로 해드릴까요?',
		'kang (긁적이며) 아.. 네.',
		'w 안심, 채끝살로 준비해드리겠습니다. 와인은 어떻게 해드릴까요?',
		'kang (여름의 눈치를 보며) 그...그것도 추천으로.',
		'me (입을 막으며 푸흐흐 웃는 소리)',
		'w 독일 와인, 러시아 와인 종류로 추천드립니다.',
		'kang 단 걸 좋아하니, 단걸로 부탁합니다.',
		'w 메인이 좀 기름지니까, 기름기를 좀 잡아줄 수 있는 걸로 드릴까요? 독일 리즐링 화이트와인쪽으로 준비해드리겠습니다.',
		'kang (엉성하게 웃는다) 아, 알겠습니다.',
		'w 잠시만 기다려주시면 음식 준비해드리겠습니다.',
		
		'(효과음) 웨이터가 구두를 신고 멀어지는 소리 (타일 밟는 소리)',

		'익숙하지 않은 듯한 성찬의 바보같은 모습을 본 여름은 웃음을 참다가 결국 크게 웃어버린다. 성찬은 부끄러운 듯 얼굴을 붉히며 당황한다.',

		'me (웃으며) 큭..큭하하하! 하하하! 웃겨라!',
		'kang  왜 자꾸 웃습니까.',
		'me (크게 웃는 소리 / 재미있다는 듯 눈물을 닦으며 놀리듯) 그냥, 우리 대표님 추천 좋아하시나보다~',

		'(효과음) 웨이터가 구두를 신고 다가오는 소리 (타일 밟는 소리)',
		'(효과음) 카트를 끌고 오는 소리',

		'me (큭큭 거리며 웃는다)',

		'(효과음) 접시들을 테이블에 올려놓는 소리 (빵을 담아 놓는 나무재질 바구니 / 잼그릇과 잼칼 / 스프 2접시)',

		'kang 한여름씨. 그렇게 웃기십니까?',
		'me ((효과음) 잼칼 가볍게 드는 소리 / 잼칼을 들어올려 빵에 잼을 바른다) 하하하. 대표님도 귀여운 구석이 있네요? 직원들이 이런 모습을 보면 깬다고 할걸요? (빵을 살짝 입에 물고) 완전 상남자스타일인 줄 알던데.',
		'kang ...여름씨한텐 어떤데요? 저같은 타입, 별롭니까?',
		'me (사레들린 기침) / ((효과음) 급하게 물 마시는 소리 / 물마시고 잘못들었다는 듯이) ...뭐라구요?',
		'kang ….여름씨는 귀여운 남자 어떤데요?',
		'me ...무슨 뜻이에요?',
		'kang (고민하다가 결심한 듯) 전, 여름씨가 좋아하는 타입이 저였으면 ..',
		'me ((효과음) 식기를 탁 놓는 소리 / 식기를 내려놓으며 O.L) 어! 대표님, 그거 완전 고백멘트였어요! 저라서 다행이지, 누가 들으면 오해한다고요! 소문이라도 나면 어쩌려고 그러세요?',

		'kang ...오해하라고 하는 말입니다. (반응이 없자) 장난치는 거 아닙니다. 내가 무슨 말을 하고 있는 지 충분히 알고 있어요. 소문나면 여름씨가 낙하산이라고 손가락질 받을거라는 것도 잘 알고, 여름씨가 저에게 관심없다는 것도.. (고민하다가) ...알아요.',
		'me (조용히 낮게 발끈하며) 그걸 아는 사람이..!',
		'kang (O.L) 이기적이라고 생각할 수도 있는데, 그냥 오늘은 제 마음만 전하고 싶었습니다. 내가 이런 마음이니까… 그냥..',
		'me (크게 들숨, 날숨) 알겠어요.',
		'kang (잘못들었다는 듯) 네?',
		'me ((효과음) 숟가락 들어올리는 소리 / 숟가락을 들며) 알았으니까 밥이나 먹어요. 오늘 아무것도 못 먹었을 거 아녜요?',
		'kang (밝게 웃는 호) 네.',

		'(효과음) 식기가 부딪히며 달그락 거리는 소리',

		'성찬쿤과 여름쨩이 식사하며 식기를 부딪히는 소리와 레스토랑 실내음악만이 울려퍼져 공간을 메운다.'
	],

	// 챕터1 (캐릭터, 배경, 사운드 테스트용)
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

		'y {{player.name}}님, 테스트용 씬을 시작하겠습니다.',
		'stop music chapter1_theme'
	],
});