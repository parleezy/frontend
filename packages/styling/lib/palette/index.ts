import { AlphaColor, alphaColor } from './_alpha'
import { BrandColor, brandColor } from './_brand'
import { ErrorColor, errorColor } from './_error'
import { GreyColor, greyColor } from './_grey'
import { SuccessColor, successColor } from './_success'
import { WarningColor, warningColor } from './_warning'

export interface Palette {
    alpha: AlphaColor
    brand: BrandColor
    error: ErrorColor
    grey: GreyColor
    success: SuccessColor
    warning: WarningColor
}

export const palette: Palette = {
    alpha: alphaColor,
    brand: brandColor,
    error: errorColor,
    grey: greyColor,
    success: successColor,
    warning: warningColor,
}
