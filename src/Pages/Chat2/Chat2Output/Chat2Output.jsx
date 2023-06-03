import { useQuery } from '@tanstack/react-query'
// import { useDispatch } from 'react-redux'
import { greenApi } from '../../../API/GreenApi'
import { MESSAGE_OUTPUT } from '../../../redux/constants'
// import { getData } from '../../../redux/slices/dataSlice'
import styles from './chat2.module.css'
import { withQuery } from '../../../HOCs/withQuery'
import { Chat2ItemOutput } from '../Chat2Item/Chat2ItemOutput'

function Chat2Inner({ data }) {
  if (!data.length) {
    return (
      <div className={styles.emptyList}>
        <p>
          Output messages not found
          {' '}
          <i className="bi bi-emoji-frown" />
        </p>
      </div>
    )
  }

  return (
    <div>
      {data.map((msg) => (
        <Chat2ItemOutput
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

export function Chat2Output({ id }) {
  // const dispatch = useDispatch()

  const {
    data = [], isLoading, isError, error, refetch,
  } = useQuery({
    queryKey: [MESSAGE_OUTPUT, id],
    queryFn: () => greenApi.getAllOutputMessages(),
    // .then((res) => {
    //   dispatch(getData(res))
    // }),
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

/* eslint-disable max-len */

// export function ReviewsForm({ id }) {
//   const token = useSelector(getTokenSelector)
//   const navigate = useNavigate()
//   const queryClient = useQueryClient()

//   useEffect(
//     () => {
//       if (!token) {
//         navigate('/signin')
//       }
//     },
//     [token],
//   )

//   const initialValues = {
//     text: '',
//   }

//   const {
//     mutateAsync, isLoading,
//   } = useMutation({
//     mutationFn: (values) => fetch(fetch(`https://api.react-learning.ru/products/review/${id}`, {
//       method: 'POST',
//       headers: {
//         authorization: `Bearer ${token}`,
//         'Content-type': 'application/json',
//       },
//       body: JSON.stringify(values),
//     }).then((res) => res.json)),
//   })

// const submitHandler = async (values) => {
//   await mutateAsync(values)
//   queryClient.invalidateQueries({ queryKey: [REVIEWS] })
//   // navigate(`/products/${id}`)
// }

//   return (
//     <Formik
//       initialValues={initialValues}
//       validatorSchema={createReviewsFormValidationSchema}
//       onSubmit={submitHandler}
//     >
//       <Form className="d-flex flex-row">
//         {/* <Field name="author" placeholder="Author" type="text" />
//         <ErrorMessage component="p" className="error" name="author" /> */}

//         <Field
//           className="form-control"
//           style={{ width: '300px', margin: '4px auto' }}
//           name="text"
//           type="text"
//           placeholder="Отзыв"
//         />
//         <ErrorMessage component="p" className="error" name="text" />

//         {/* <Field name="rating" placeholder="Rating" type="text" />
//         <ErrorMessage component="p" className="error" name="rating" /> */}

//         <button className="btn btn-success py-0 px-1 m-1" disabled={isLoading} type="submit">Отправить</button>
//       </Form>
//     </Formik>

//   )
// }
// import { useMutation, useQueryClient } from '@tanstack/react-query'
// import {
//   Formik, Form, Field, ErrorMessage,
// } from 'formik'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { useEffect } from 'react'
// import { getTokenSelector } from '../../../../redux/slices/tokenSlice'
// // import Loader from '../../../louder/Louder'
// import { createReviewsFormValidationSchema } from './helpers/validatorReviews'
// import { REVIEWS } from '../../../../redux/constants'
