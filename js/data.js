export const questions = [
  {
    number: '01',
    question: ' 불의 섬에 입성했다. 가장 먼저 생활공간이자 방어해야하는 기지를 선택해야 한다.',
    choices: [
      { text: '다른 팀에 노출될 가능성도 높지만 우리가 침투하기에도 유리한 섬 중앙 기지', value: 'c' },
      { text: '우리가 침입하러 가기에는 멀지만 다른팀이 오기에도 험해 방어에 유리한 바닷가 절벽 기지', value: 'f' }
    ]
  },
  {
    number: '02',
    question: '기지를 선택했다. 그 다음으로 할 일은',
    choices: [
      { text: '내부정비', value: '' },
      { text: '외부파악', value: '' }
    ]
  },
  {
    number: '03',
    question: '공격할 상대팀을 결정해야 한다.',
    choices: [
      { text: '강한 팀부터', value: '' },
      { text: '약한 팀부터', value: '' }
    ]
  },
  {
    number: '04',
    question: '기지전을 알리는 사이렌이 언제 울릴지 모른다',
    choices: [
      { text: '전원 24시간 출동체제', value: '' },
      { text: '돌아가며 불침번제', value: '' }
    ]
  },
  {
    number: '05',
    question: '사이렌이 울렸다 - <br/> 상대 기지의 깃발을 뽑아 함락시켜야 한다! ',
    choices: [
      { text: '모든인원이 뛰어나가 전력으로 상대 기지를 함락해 빠르게 상황을 끝낸다', value: 'a' },
      { text: '혹시 모를 상황을 대비해 인원을 나눠 대응한다', value: 'd' }
    ]
  },
  {
    number: '06',
    question: '다른 팀과 연합을 맺었다. <br/> 함께 또 다른 팀을 공격하러 갈때 나는',
    choices: [
      { text: '등뒤를 믿고 전력으로 공격한다', value: 'u' },
      { text: '영원한 동지는 없다 - 함께 공격하지만 연합한 팀에 대한 경계도 늦추지 않는다', value: 's' }
    ]
  },
  {
    number: '07',
    question: '한정된 자원을 보급받을 수 있다. 우리팀의 선택은',
    choices: [
      { text: '식량', value: 'm' },
      { text: '무기', value: 'w' }
    ]
  },
  {
    number: '08',
    question: '길에서 우연히 다른 팀과 길에서 마주쳐서 협상을 진행하려 한다.',
    choices: [
      { text: '우리 팀이 세운 플랜에서 조금 어긋나더라도 타협한 후 돌아가서 통보한다', value: '' },
      { text: '원하는 바를 온전히 얻지 못한다면 결렬한 후 돌아가서 팀원들과 의논한다', value: '' }
    ]
  },
  {
    number: '09',
    question: '연합한 팀의 방어를 돕기 위해 열심히 뛰어왔으나 이미 승기가 기운 상태!',
    choices: [
      { text: '우리가 인력을 더 하면 뒤집을 수 있다. 연합을 돕는다', value: '' },
      { text: '이 상황에서 방어를 돕는 건 의미 없다. 상대팀의 기지를 빨리 함락시키는게 돕는거다', value: '' }
    ]
  },
  {
    number: '10',
    question: '릴레이로 어떤 미션을 완수해야 하고, <br/>팀원 중 내가 가장 능력이 뛰어날 때(의리게임)',
    choices: [
      { text: '내가 첫번째 선수로 출전해 최대한 적게 남긴다', value: '' },
      { text: '내가 마지막에 출전해 팀원들이 남긴 몫을 깔끔하게 마무리한다', value: '' }
    ]
  },
]
export const results = [
  {
    title: 'firefighter',
    character: '/images/result_firefighter.png',
    results: [
      ': 지옥을 본 자들',
      ': 불굴의 정신력'
    ],
    keywords: ['', ''],
  },
  {
    title: 'police',
    character: '/images/result_police.png',
    results: [
      ': 밤낮 없는 자들',
      ': 끈질긴 잠복'
    ],
    keywords: ['', ''],
  },
  {
    title: 'guard',
    character: '/images/result_guard.png',
    results: [
      ': 죽기 위해 사는 자들',
      ': 빈틈없는 관찰력'
    ],
    keywords: ['', ''],
  },
  {
    title: 'soldier',
    character: '/images/result_soldier.png',
    results: [
      ': 살아남아야 하는 자들',
      ': 일상이 전시 상황'
    ],
    keywords: ['', ''],
  },
  {
    title: 'athlete',
    character: '/images/result_athlete.png',
    results: [
      ': 운동에 미친 자들',
      ': 태극기의 무게'
    ],
    keywords: ['', ''],
  },
  {
    title: 'stunt',
    character: '/images/result_stunt.png',
    results: [
      ': 두려움을 잊은 자들',
      ': 한계없는 변신'
    ],
    keywords: ['', ''],
  }
]
export const mbtis = {
  caum: 0,
  cdsw: 0,
  cdsm: 0,
  faum: 1,
  fauw: 1,
  fdum: 2,
  fduw: 2,
  fdsw: 2,
  casm: 3,
  casw: 3,
  fasw: 3,
  fasm: 4,
  fdsm: 4,
  cauw: 5,
  cdum: 5,
  cduw: 5
}
