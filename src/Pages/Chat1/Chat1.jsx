import { useQuery } from '@tanstack/react-query'
import { ChatForm } from './ChatForm'
import productDeteilStyle from './productDeteilStyle.module.css'
import { Chat1Output } from './Chat1Output/Chat1Output'
import { Chat1Input } from './Chat1Input/Chat1Input'
import { greenApi } from '../../API/GreenApi'
import Loader from '../../louder/Louder'
import { Chat1ItemOutput } from './Chat1Item/Chat1ItemOutput'

export function Chat1() {
  const {
    data, isLoading, isError, error, refetch,
  } = useQuery({
    queryKey: 'getAllOutputMessages',
    queryFn: () => greenApi.getAllOutputMessages(),
  })
  if (isLoading) return <Loader />
  if (isError) {
    return (
      <div className="d-flex flex-column justify-content-center">

        <p>
          Error happend:
          {' '}
          {error.message}
        </p>

        <button
          onClick={refetch}
          type="button"
          className="btn btn-primary"
        >
          Refetch
        </button>
      </div>
    )
  }
  console.log({ data })
  return (
    <div className={productDeteilStyle.cardLeft}>
      <div>
        <Chat1Output />
        {data.map((msg) => (
          <Chat1ItemOutput
            key={msg.idMessage}
            id={msg.idMessage}
            chatId={msg.chatId}
            textMessage={msg.textMessage}
          />
        ))}

        <Chat1Input />
      </div>
      <div className="d-flex flex-derection-row justify-content-center">
        <h5 className="p-1 m-1">
          Написать сообщение
          {' '}
          {/* {reviewsCount} */}
        </h5>
      </div>
      <div>
        <ChatForm />
      </div>
    </div>

  )
}
