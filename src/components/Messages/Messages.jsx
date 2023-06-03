// import { NavLink } from 'react-router-dom'

import { useQuery } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import { greenApi } from '../../API/GreenApi'
import { getSettings } from '../../redux/slices/getSettings'

function Messages() {
  const dispatch = useDispatch()

  const {
    data, isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['getSettings'],
    queryFn: () => greenApi.getSettings(),
  })
  dispatch(getSettings(data))

  if (isLoading) return <p>Загружается</p>
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
    <div>
      <h1>Messages</h1>
    </div>
  )
}

export default Messages
