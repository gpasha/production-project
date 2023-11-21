import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'
import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions, loginReducer } from '../../../AuthByUsername/model/slice/loginSlice'
import { loginByUsername } from '../..//model/services/loginByUsername/loginByUsername'
import { Text, TextTheme } from 'shared/ui/Text/ui/Text'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const initialReducers: ReducersList = {
    loginForm: loginReducer
}
export interface LoginFormProps {
    className?: string
}

// eslint-disable-next-line react/display-name
const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginIsLoading)
    const error = useSelector(getLoginError)

    const onChangeUsername = useCallback((name: string) => {
        dispatch(loginActions.setUsername(name))
    }, [dispatch])

    const onChangePassword = useCallback((password: string) => {
        dispatch(loginActions.setPassword(password))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, username, password])

    return <DynamicModuleLoader
        removeAfterUnmount={true}
        reducers={initialReducers}
    >
        <div className={classNames(cls.LoginForm, {}, [className])}>
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
    </DynamicModuleLoader>
})

export default LoginForm
