import { useEffect, useState } from 'react'
import lodash from 'lodash'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import gaara from './assets/images/gaara.jpg'
import guy from './assets/images/guy.jpg'
import hashirama from './assets/images/hashirama.jpg'
import itachi from './assets/images/itachi.jpg'
import kakashi from './assets/images/kakashi.jpg'
import madara from './assets/images/madara.jpg'
import minato from './assets/images/minato.jpg'
import nagato from './assets/images/nagato.jpg'
import naruto from './assets/images/naruto.jpg'
import obito from './assets/images/obito.jpg'
import sasuke from './assets/images/sasuke.jpg'
import tobirama from './assets/images/tobirama.jpg'

function App() {
  const characters = [
    { name: 'gaara', image: gaara },
    { name: 'guy', image: guy },
    { name: 'hashirama', image: hashirama },
    { name: 'itachi', image: itachi },
    { name: 'kakashi', image: kakashi },
    { name: 'madara', image: madara },
    { name: 'minato', image: minato },
    { name: 'nagato', image: nagato },
    { name: 'naruto', image: naruto },
    { name: 'obito', image: obito },
    { name: 'sasuke', image: sasuke },
    { name: 'tobirama', image: tobirama },
  ]

  const [score, setScore] = useState(0)
  const [result, setResult] = useState([])
  const [bestScore, setBestScore] = useState(0)
  const [array, setArray] = useState(characters)

  useEffect(() => {
    setResult(result)
  }, [result])

  useEffect(() => {
    setBestScore(score > bestScore ? score : bestScore)
  }, [score, bestScore])

  const click = (name) => {
    if (!result.includes(name)) {
      result.push(name)
      setScore(score + 1)
      setArray(lodash.shuffle(array))
    } else {
      setScore(0)
      setResult([])
    }
  }

  return (
    <div className='container min-w-full overflow-hidden'>
      <Header score={score} bestScore={bestScore} setScore={setScore} />
      <Main click={click} characters={array} />
      <Footer />
    </div>
  )
}

export default App
