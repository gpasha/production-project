import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useState } from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const authData = useSelector(getUserAuthData)
    const dispatch = useDispatch()

    const onOpenModal = useCallback(() => {
        setIsModalOpen(true)
    }, [])

    const onCloseModal = useCallback(() => {
        setIsModalOpen(false)
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (authData) {
        return <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.navLinks}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                </Button>
            </div>
        </div>
    }

    return <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.navLinks}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onOpenModal}
            >
                {t('Войти')}
            </Button>
            {isModalOpen && <LoginModal isOpen={isModalOpen} onClose={onCloseModal} />}
        </div>
    </div>
})
