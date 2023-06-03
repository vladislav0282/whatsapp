import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import App from './App'
import Messages from './components/Messages/Messages'
import Main from './components/Main/Main'
import { store } from './redux/store'
import { Chat1 } from './Pages/Chat1/Chat1'
import { Chat2 } from './Pages/Chat2/Chat2'
import { Chat3 } from './Pages/Chat3/Chat3'
import Chat4Form from './Pages/Chat4/Chat4Form'
import { Chat5 } from './Pages/Chat5/Chat5'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'messages',
        element: <Messages />,
      },
      {
        path: 'chat1',
        element: <Chat1 />,
      },
      {
        path: 'chat2',
        element: <Chat2 />,
      },
      {
        path: 'chat3',
        element: <Chat3 />,
      },
      {
        path: 'chat4',
        element: <Chat4Form />,
      },
      {
        path: 'chat5',
        element: <Chat5 />,
      },
    ],
  },
])

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
