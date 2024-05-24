// Packages
import { ThemeInterface } from '@thedeveloperkit/styling'

// Hooks
import { ElementCoordinates } from '@/hooks/useElementCoordinates'

export class FormStyles {
    private _baseInput(theme: ThemeInterface): string {
        return `
            flex-grow: 1;
            width: 100%;
            font-size: ${theme.typography.body.size.sm};
            line-height: ${theme.typography.body.height.sm};
        `
    }

    get Input() {
        return {
            container: (theme: ThemeInterface): string => {
                return `
                    display: flex;
                    align-items: center;
                    border-radius: ${theme.layout.radius.md};
                    transition: ${theme.animation.css.transition.all};
                    height: ${theme.layout.height.lg};
                    border: 1px solid ${theme.color.border.primary.base};
                
                    &:focus-within {
                        background: ${theme.color.background.primary.hover};
                    }
                `
            },
            input: (theme: ThemeInterface): string => {
                return `
                    ${this._baseInput(theme)};
                    border-radius: ${theme.layout.radius.sm};
                    padding: 0 ${theme.layout.spacing.xl};
                    height: ${theme.layout.height.lg};
                `
            },
            textarea: (theme: ThemeInterface): string => {
                return `
                    width: 100%;
                    height: 100%;
                    padding: ${theme.layout.spacing.md};
                    outline: none;
                    border: none;
                    border-radius: ${theme.layout.radius.sm};
                    font-family: ${theme.typography.font.family.primary};
                    flex-grow: 1;
                    font-size: ${theme.typography.body.size.sm};
                    line-height: ${theme.typography.body.height.sm};
                    background: transparent;
                    resize: none;
                `
            },
            root: (theme: ThemeInterface): string => {
                return `    
                    width: 100%;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                    gap: ${theme.layout.spacing.md};
                    color: ${theme.typography.font.color.tertiary};`
            },
        }
    }

    get InsetInput() {
        return {
            container: (theme: ThemeInterface): string => {
                return `
                    display: flex;
                    flex-direction: column;
                    gap: ${theme.layout.spacing.xxs};
                    flex-grow: 1;
                `
            },
            input: (theme: ThemeInterface): string => {
                return this._baseInput(theme)
            },
            root: (theme: ThemeInterface): string => {
                return `    
                    width: 100%;
                    padding: ${theme.layout.spacing.md} ${theme.layout.spacing.lg};
                    display: flex;
                    border-radius: ${theme.layout.radius.sm};
                    transition: ${theme.animation.css.transition.all};
                    gap: ${theme.layout.spacing.lg};
                    overflow: hidden;
                    text-align: left;
                
                    &:focus-within {
                        background: ${theme.color.background.primary.hover};
                    }
                `
            },
        }
    }

    get Selects() {
        return {
            content: (theme: ThemeInterface): string => {
                return `
                    flex-grow: 1;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    height: ${theme.layout.height.lg};
                    gap: ${theme.layout.spacing.md};
                `
            },
            dropdown: ($below: boolean, $coordinates: ElementCoordinates | null, theme: ThemeInterface): string => {
                const belowCSS = () => {
                    if ($below) {
                        return `               
                            top: ${$coordinates && $coordinates.bottomLeft.bottom - $coordinates.height + 1}px;
                            left: ${$coordinates && $coordinates.topLeft.left}px;
                            width: ${$coordinates && $coordinates.width}px;
                            border-bottom-left-radius: 0;
                            border-bottom-right-radius: 0;
                            transform: translateY(-100%);
                            flex-direction: column-reverse;
                        `
                    } else {
                        return `
                            top: ${$coordinates && $coordinates.bottomLeft.bottom - 1}px;
                            left: ${$coordinates && $coordinates.bottomLeft.left}px;
                            width: ${$coordinates && $coordinates.width}px;
                            box-shadow: ${theme.effect.shadow.sm};
                            border-top-left-radius: 0;
                            border-top-right-radius: 0;
                        `
                    }
                }

                return `
                    position: fixed;
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    background: ${theme.color.background.primary.base};
                    border: 1px solid ${theme.color.border.primary.base};
                    border-radius: ${theme.layout.radius.md};

                    @media (min-width: ${theme.layout.breakpoint.tablet}) {
                        ${belowCSS()}
                    }
                `
            },
            input: (theme: ThemeInterface): string => {
                return this._baseInput(theme)
            },
            mobile: (theme: ThemeInterface): string => {
                return `
                    max-height: 70vh;
                    overflow: hidden;
                    background: ${theme.color.background.primary.base};
                    width: 100vw;
                `
            },
            root: ($active: boolean, $below: boolean, theme: ThemeInterface): string => {
                const activeCSS = () => {
                    if ($active) {
                        return $below
                            ? `               
                                border-top-left-radius: 0;
                                border-top-right-radius: 0;
                                box-shadow: ${theme.effect.shadow.sm};
                            `
                            : `
                                border-bottom-left-radius: 0;
                                border-bottom-right-radius: 0;
                            `
                    }
                }

                return `
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    text-align: left;
                    background: ${theme.color.background.primary.base};
                    border-radius: ${theme.layout.radius.md};
                    border: 1px solid ${theme.color.border.primary.base};
                    min-height: ${theme.layout.height.lg};

                    @media (min-width: ${theme.layout.breakpoint.tablet}) {
                        ${activeCSS()}
                    }

           
                `
            },
            trigger: (theme: ThemeInterface): string => {
                return `    
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 30px;
                    height: ${theme.layout.height.lg};
                
                    svg {
                        color: ${theme.color.alpha.black[50]};
                    }
                `
            },
        }
    }
}
