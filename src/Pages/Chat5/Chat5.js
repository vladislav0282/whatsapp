import { useQuery } from '@tanstack/react-query'
import { greenApi } from '../../API/GreenApi'
import Loader from '../../louder/Louder'

export function Chat5() {
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

  return (
    <>
      <h1>Chat5</h1>

      <div>
        {data.map((msg) => (
          <Chat5
            key={msg.idMessage}
            idMessage={msg.idMessage}
            timestamp={msg.timestamp}
            outgoing={msg.type}
          />
        ))}
      </div>
    </>

  )
}
