import { Color } from './ColorUtils'

describe('ColorUtils', () => {
    describe('addOpacity', () => {
        it('converts hex to rgba correctly with full hex codes', () => {
            expect(Color.addOpacity('#000000', 1)).toBe('rgba(0, 0, 0, 1)')
            expect(Color.addOpacity('#FFFFFF', 0.5)).toBe('rgba(255, 255, 255, 0.5)')
        })

        it('converts hex to rgba correctly with shorthand hex codes', () => {
            expect(Color.addOpacity('#000', 1)).toBe('rgba(0, 0, 0, 1)')
            expect(Color.addOpacity('#FFF', 0.5)).toBe('rgba(255, 255, 255, 0.5)')
        })

        it('returns null for invalid hex codes', () => {
            expect(Color.addOpacity('#GGG', 0.5)).toBeNull()
            expect(Color.addOpacity('#OOOO', 0.5)).toBeNull()
        })
    })

    describe('generateGradient', () => {
        it('generates linear gradient correctly', () => {
            expect(Color.generateGradient('#10182B', '#475467', '90deg')).toBe(
                'linear-gradient(90deg, #10182B, #475467)',
            )
            expect(Color.generateGradient('#FFF', '#000', '45deg')).toBe('linear-gradient(45deg, #FFF, #000)')
        })
    })
})
