import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import { ReactNode, MouseEvent, useState, useRef, useEffect, useCallback, MutableRefObject } from 'react'
import { Portal } from 'shared/ui/Portal'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen: boolean
    onClose: () => void
    lazy?: boolean
}

const ANIMATION_DELAY = 200

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy
    } = props

    const [isClosing, setIsClosing] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    const timeRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

    const closeHandler = useCallback(() => {
        setIsClosing(true)
        timeRef.current = setTimeout(() => {
            setIsClosing(false)
            onClose()
        }, ANIMATION_DELAY)
    }, [onClose])

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        console.log('e.key: ', e.key)
        if (e.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation()
    }

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
            window.addEventListener('keydown', onKeyDown)
        }

        return () => {
            clearTimeout(timeRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    const mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    }

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
