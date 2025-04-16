import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import router from './router.ts'
import MainLayout from './pages/layout.tsx'
import { Provider } from 'react-redux'
import { store } from './state/store.ts'
import '@ant-design/v5-patch-for-react-19';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <MainLayout>
        <RouterProvider router={router} />
      </MainLayout>
    </Provider>
  </StrictMode>,
)
