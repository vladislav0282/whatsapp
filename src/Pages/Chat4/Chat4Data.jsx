/* eslint-disable max-len */
import { useEffect, useState } from 'react'

function Chat4Data() {
  const [data, setData] = useState('')

  const fetchData = async () => {
    const response = await fetch('https://api.green-api.com/waInstance1101821330/lastOutgoingMessages/41440d345aad43adbfb8c90da398a7d36d159eaa5a134fa8aa')
    const jsonData = await response.json()
    setData(jsonData)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h1>Messages</h1>
      <p>{data}</p>
    </div>
  )
}
export default Chat4Data
