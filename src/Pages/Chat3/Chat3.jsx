import { useQuery } from '@tanstack/react-query'
import { MESSAGE_3 } from '../../redux/constants'
import { greenApi } from '../../API/GreenApi'
import { withQuery } from '../../HOCs/withQuery'
import productDeteilStyle from './productDeteilStyle.module.css'
import { Chat3Form } from './Chat3Form'
import { Chat3ItemOutput } from './Chat3ItemOutput'

function Chat3Inner({ data }) {
  return (
    <div>
      <h1>Chat3</h1>
      <h3> Input messages</h3>
      {data.map((msg) => (
        <Chat3ItemOutput
          key={msg.idMessage}
          id={msg.idMessage}
          chatId={msg.chatId}
          textMessage={msg.textMessage}
        />

      ))}
      <h3>Output messages</h3>
      <div className={productDeteilStyle.cardLeft}>
        <div className="d-flex flex-derection-row justify-content-center">
          <h5 className="p-1 m-1">
            Написать сообщение
            {' '}
          </h5>
        </div>
        <div>
          <Chat3Form />
        </div>
      </div>
    </div>

  )
}

const Chat3InnerWithQuery = withQuery(Chat3Inner)

export function Chat3() {
  const {
    data,
    isError,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [MESSAGE_3],
    queryFn: () => greenApi.getAllOutputMessages(),
  })

  console.log({ data })
  return (

    <Chat3InnerWithQuery
      data={data}
      isLoading={isLoading}
      isError={isError}
      error={error}
      refetch={refetch}
    />

  )
}
