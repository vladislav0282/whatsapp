/* eslint-disable max-len */
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik'
import { useMutation } from '@tanstack/react-query'
import { createReviewsFormValidationSchema } from '../helpers/validatorReviews'

export function Chat2Form() {
  const initialValues = {
    text: '',
  }

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: (data) => fetch('https://api.green-api.com/waInstance1101821330/lastIncomingMessages/41440d345aad43adbfb8c90da398a7d36d159eaa5a134fa8aa', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => res.json()),
  })

  const submitHandler = async (values) => {
    await mutateAsync(values)
    // QueryClient.invalidateQueries({ queryKey: [REVIEWS] })
  // navigate(`/products/${id}`)
  }

  return (
    <Formik
      initialValues={initialValues}
      validatorSchema={createReviewsFormValidationSchema}
      onSubmit={submitHandler}
    >
      <Form className="d-flex flex-row">
        {/* <Field name="author" placeholder="Author" type="text" />
            <ErrorMessage component="p" className="error" name="author" /> */}

        <Field
          className="form-control"
          style={{ width: '300px', margin: '4px auto' }}
          name="text"
          type="text"
          placeholder="...текст"
        />
        <ErrorMessage component="p" className="error" name="text" />

        {/* <Field name="rating" placeholder="Rating" type="text" />
            <ErrorMessage component="p" className="error" name="rating" /> */}

        <button className="btn btn-success py-0 px-1 m-1" disabled={isLoading} type="submit">Отправить</button>
      </Form>
    </Formik>

  )
}
