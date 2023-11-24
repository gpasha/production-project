import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from 'app/App'
import { ThemeProvider } from 'app/providers/ThemeProvider/ui/ThemeProvider'
import './shared/config/i18n/i18n'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { Suspense } from 'react'
import { StoreProvider } from 'app/providers/StoreProvider'

render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <Suspense fallback={''}>
                        <App />
                    </Suspense>
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
