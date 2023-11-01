import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from 'app/App'
import { ThemeProvider } from 'app/providers/ThemeProvider/ui/ThemeProvider'
import './shared/config/i18n/i18n'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { Suspense } from 'react'

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <Suspense fallback={''}>
                    <App />
                </Suspense>
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root')
)
