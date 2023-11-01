import React, { type ReactNode, type ErrorInfo, Suspense } from 'react'
import { PageError } from 'widgets/PageError'

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    // eslint-disable-next-line @typescript-eslint/space-before-function-paren
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    // eslint-disable-next-line @typescript-eslint/space-before-function-paren
    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    // eslint-disable-next-line @typescript-eslint/space-before-function-paren
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo)
    }

    // eslint-disable-next-line @typescript-eslint/space-before-function-paren
    render() {
        const { hasError } = this.state
        const { children } = this.props
        if (hasError) {
            // return null
            // You can render any custom fallback UI
            return <Suspense fallback={''}>
                <PageError />
            </Suspense>
        }

        return children
    }
}

export default ErrorBoundary
