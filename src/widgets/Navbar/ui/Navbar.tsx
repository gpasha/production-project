import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { useCallback, useState } from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { LoginModal } from 'features/AuthByUsername'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const onOpenModal = useCallback(() => {
        setIsModalOpen(true)
    }, [])

    const onCloseModal = useCallback(() => {
        setIsModalOpen(false)
    }, [])

    return <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.navLinks}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onOpenModal}
            >
                {t('Войти')}
            </Button>
            <LoginModal isOpen={isModalOpen} onClose={onCloseModal} />
        </div>
    </div>
}
