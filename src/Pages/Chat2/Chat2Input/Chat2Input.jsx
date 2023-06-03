import { useQuery } from '@tanstack/react-query'
// import { useDispatch } from 'react-redux'
import { greenApi } from '../../../API/GreenApi'
import { MESSAGE_INPUT } from '../../../redux/constants'
// import { getData } from '../../../redux/slices/dataSlice'
import styles from './chat2.module.css'
import { withQuery } from '../../../HOCs/withQuery'
import { Chat2ItemInput } from '../Chat2Item/Chat2ItemInput'

function Chat2Inner({ data }) {
  if (!data.length) {
    return (
      <div className={styles.emptyList}>
        <p>
          Input messages not found
          {' '}
          <i className="bi bi-emoji-frown" />
        </p>
      </div>
    )
  }

  return (
    <div>
      {data.map((msg) => (
        <Chat2ItemInput
          key={msg.idMessage}
          id={msg.idMessage}
          chatId={msg.chatId}
          textMessage={msg.textMessage}
        />
      ))}
    </div>
  )
}
const Chat2InnerWithQuery = withQuery(Chat2Inner)

export function Chat2Input() {
  const {
    data = [], isLoading, isError, error, refetch,
  } = useQuery({
    queryKey: [MESSAGE_INPUT],
    queryFn: () => greenApi.getAllInputMessages(),
  })
  console.log({ data })

  return (
    <Chat2InnerWithQuery
      data={data}
      isLoading={isLoading}
      isError={isError}
      error={error}
      refetch={refetch}
    />
  )
}
