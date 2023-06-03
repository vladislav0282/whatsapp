/* eslint-disable max-len */
// import {
//   Formik, Form, Field, ErrorMessage,
// } from 'formik'
// import { useMutation, useQueryClient } from '@tanstack/react-query'
// import { createReviewsFormValidationSchema } from '../helpers/validatorReviews'
// import { MESSAGE_OUTPUT } from '../../redux/constants'

// export function ChatForm({idMessage})

import {
  Formik, Form, Field, ErrorMessage,
} from 'formik'
import { useQueryClient, useMutation } from '@tanstack/react-query'
// import { useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
import { createReviewsFormValidationSchema } from '../helpers/validatorReviews'
// import { MESSAGE_OUTPUT, MESSAGE_INPUT } from '../../redux/constants'

// import { getIdMessage } from '../../redux/slices/idMessageSlice'

// import { MESSAGE_INPUT } from '../../redux/constants'

export function ChatForm() {
  const queryClient = useQueryClient()
  const initialValues = {
    chatId: '79252826386@c.us',
    message: '',
  }
  // const dispatch = useDispatch()

  // const navigate = useNavigate()
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: (values) => fetch('https://api.green-api.com/waInstance1101821330/sendMessage/41440d345aad43adbfb8c90da398a7d36d159eaa5a134fa8aa', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(values),
    }),
  })
  const submitHandler = async (values) => {
    await mutateAsync(values)
    queryClient.invalidateQueries('getAllOutputMessages')
  }

  return (
    <Formik
      initialValues={initialValues}
      validatorSchema={createReviewsFormValidationSchema}
      onSubmit={submitHandler}
    >
      <Form className="d-flex flex-row">
        <Field
          className="form-control"
          style={{ width: '300px', margin: '4px auto' }}
          name="message"
          type="text"
          placeholder="...текст"
        />
        <ErrorMessage component="p" className="error" name="text" />

        <button className="btn btn-success py-0 px-1 m-1" disabled={isLoading} type="submit">Отправить</button>
      </Form>
    </Formik>

  )
}
