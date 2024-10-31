// import { useEffect, useState } from 'react'
// import lodash from 'lodash'
import Header from './components/Header'

function App() {
  // const [score, setScore] = useState(0)
  // const [result, setResult] = useState([])
  // const [bestScore, setBestScore] = useState(0)
  // const [array, setArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  // useEffect(() => {
  //   setResult(result)
  // }, [result])

  // useEffect(() => {
  //   setBestScore(score > bestScore ? score : bestScore)
  // }, [score, bestScore])

  // const click = (block) => {
  //   if (!result.includes(block)) {
  //     result.push(block)
  //     setScore(score + 1)
  //     setArray(lodash.shuffle(array))
  //   } else {
  //     setScore(0)
  //     setResult([])
  //   }
  // }

  return (
    <div className='container min-w-full'>
      <Header />
      <div className='wrapper'></div>
      {/* <div className='score'>Score: {score}</div> */}
      {/* <div className='score'>Best Score: {bestScore}</div> */}
      {/* <div className='cards'>
        {array.map((block) => {
          return (
            <div onClick={() => click(block)} key={block}>
              <img
                src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${block
                  .toString()
                  .padStart(3, '0')}.png`}
                alt=''
              />
            </div>
          )
        })}
      </div> */}
    </div>
  )
}

export default App
