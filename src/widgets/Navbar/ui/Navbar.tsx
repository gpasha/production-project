/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
// import { BugButton } from 'app/providers/ErrorBoundary'
import { Modal } from 'shared/ui/Modal'
import { useCallback, useState } from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const onToggleModal = useCallback(() => {
        setIsModalOpen(prev => !prev)
    }, [])

    return <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.navLinks}>
            {/* <BugButton /> */}
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isModalOpen} onClose={onToggleModal}>
                lkasjfaksl fdja;lskdfj;as
            </Modal>
        </div>
    </div>
}
