import { ref, onMounted, onUnmounted, watch } from 'vue'

export type PetEmotion = 'happy' | 'surprised' | 'blink' | 'excited' | 'angry'

interface BehaviorOptions {
  phrases: string[]
  distance: Ref<number>
  autoSpeech?: Ref<boolean>
}

export function usePetBehavior({ phrases, distance, autoSpeech }: BehaviorOptions) {
  const emotion = ref<PetEmotion>('happy')
  const speech = ref(phrases[0] || 'Hi!')
  const displayedSpeech = ref('')

  let typingTimer: any = null
  let emotionTimer: any = null
  let speechTimer: any = null

  const emotions: PetEmotion[] = ['happy', 'surprised', 'blink', 'excited']

  function typeText() {
    if (typingTimer) clearInterval(typingTimer)
    displayedSpeech.value = ''
    let charIndex = 0
    const targetText = speech.value

    typingTimer = setInterval(() => {
      if (charIndex < targetText.length) {
        displayedSpeech.value += targetText[charIndex]
        charIndex++
      } else {
        clearInterval(typingTimer)
      }
    }, 60)
  }

  function changeEmotion() {
    emotion.value = emotions[Math.floor(Math.random() * emotions.length)]
  }

  function changeSpeech() {
    if (autoSpeech && !autoSpeech.value) return
    speech.value = phrases[Math.floor(Math.random() * phrases.length)] || '...'
    typeText()
  }

  function say(text: string) {
    speech.value = text
    typeText()
  }

  function clearSpeech() {
    if (typingTimer) clearInterval(typingTimer)
    displayedSpeech.value = ''
  }

  onMounted(() => {
    typeText()

    emotionTimer = setInterval(() => {
      if (distance.value < 300) {
        changeEmotion()
      }
    }, 3000 + Math.random() * 3000)

    speechTimer = setInterval(() => {
      changeSpeech()
    }, 6000 + Math.random() * 4000)
  })

  watch(autoSpeech ?? ref(true), (enabled) => {
    if (enabled) changeSpeech()
  })

  onUnmounted(() => {
    if (emotionTimer) clearInterval(emotionTimer)
    if (speechTimer) clearInterval(speechTimer)
    if (typingTimer) clearInterval(typingTimer)
  })

  return {
    emotion,
    speech,
    displayedSpeech,
    say,
    clearSpeech,
    changeEmotion
  }
}

type Ref<T> = import('vue').Ref<T>
