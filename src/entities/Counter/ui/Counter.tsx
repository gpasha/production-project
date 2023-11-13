import { Button } from 'shared/ui/Button'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../model/slice/CounterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { useTranslation } from 'react-i18next'

export const Counter = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const value = useSelector(getCounterValue)

    const increment = () => {
        dispatch(counterActions.increment())
    }

    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return <div>
        <h1 data-testid='counter-value'>{value}</h1>
        <Button
            data-testid='increment-btn'
            onClick={increment}
        >
            {t('Увеличить')}
        </Button>
        <Button
            data-testid='decrement-btn'
            onClick={decrement}
        >
            {t('Уменьшить')}
        </Button>
    </div>
}
