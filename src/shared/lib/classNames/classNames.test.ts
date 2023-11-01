import { classNames } from './classNames'

describe('className', () => {
    test('with one param', () => {
        expect(classNames('someClass')).toBe('someClass')
    })
    test('with additional params', () => {
        const expected = 'someClass class1 class2'
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
    })
    test('with mods', () => {
        const expected = 'someClass class1 class2 expanded hovered'
        expect(classNames(
            'someClass',
            { expanded: true, hovered: true },
            ['class1', 'class2']
        )).toBe(expected)
    })
    test('with false mod', () => {
        const expected = 'someClass class1 class2 hovered'
        expect(classNames(
            'someClass',
            { expanded: false, hovered: true },
            ['class1', 'class2']
        )).toBe(expected)
    })
    test('with undefined mod', () => {
        const expected = 'someClass class1 class2 expanded'
        expect(classNames(
            'someClass',
            { expanded: true, hovered: undefined },
            ['class1', 'class2']
        )).toBe(expected)
    })
})
