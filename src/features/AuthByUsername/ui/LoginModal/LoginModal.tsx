import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginModal.module.scss'
import { Modal } from 'shared/ui/Modal'
import { LoginFormAsync } from '../LoginForm/LoginFormAsync'
import { Suspense } from 'react'
import { Loader } from 'shared/ui/Loader'

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const LoginModal = (props: LoginModalProps) => {
    const {
        className,
        isOpen,
        onClose
    } = props

    return <Modal
        lazy
        className={classNames(cls.LoginModal, {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
    >
        <Suspense fallback={<Loader />}>
            <LoginFormAsync onSuccess={onClose} />
        </Suspense>
    </Modal>
}
