import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'
import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice'
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState'
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername'
import { Text, TextTheme } from 'shared/ui/Text/ui/Text'

interface LoginFormProps {
    className?: string
}

// eslint-disable-next-line react/display-name
export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { username, password, isLoading, error } = useSelector(getLoginState)

    const onChangeUsername = useCallback((name: string) => {
        dispatch(loginActions.setUsername(name))
    }, [dispatch])

    const onChangePassword = useCallback((password: string) => {
        dispatch(loginActions.setPassword(password))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, username, password])

    return <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t('Форма авторизации')} />
        {error && <Text theme={TextTheme.ERROR} text={t('Неверное имя пользователи или пароль')} />}
        <Input
            placeholder={t('Введите имя пользователя')}
            className={cls.input}
            autofocus
            value={username}
            onChange={onChangeUsername}
        />
        <Input
            type='password'
            placeholder={t('Введите пароль')}
            className={cls.input}
            value={password}
            onChange={onChangePassword}
        />
        <Button
            theme={ButtonTheme.OUTLINE}
            className={cls.loginBtn}
            onClick={onLoginClick}
            disabled={isLoading}
        >
            {t('Войти')}
        </Button>
    </div>
})
