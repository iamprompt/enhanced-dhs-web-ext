import { edgeStyleOptions, fontSizeOptions, fontWeightsText, selectedOptions } from '../@types/options'

export const IconData = {
  default: {
    16: 'assets/icon/d_action_icon_default16.png',
    32: 'assets/icon/d_action_icon_default32.png',
    48: 'assets/icon/d_action_icon_default48.png',
  },
  light: {
    16: 'assets/icon/d_action_icon_dark16.png',
    32: 'assets/icon/d_action_icon_dark32.png',
    48: 'assets/icon/d_action_icon_dark48.png',
  },
  dark: {
    16: 'assets/icon/d_action_icon_light16.png',
    32: 'assets/icon/d_action_icon_light32.png',
    48: 'assets/icon/d_action_icon_light48.png',
  },
}

export const defaultOptions: selectedOptions = {
  fontFamily: 'Roboto',
  fontSize: 0,
  fontWeight: 400,
  fontColor: '#FFFFFF',
  noWatermark: true,
  fontPosition: 0,
  edgeStyle: {
    style: 'none',
    color: 'black',
  },
}

export const FontSizeOptions: fontSizeOptions = {
  normal: { text: 'Normal', classText: 'text-sm', plusSize: 0, textLocale: 'popupFontSizeNormalText' },
  large: { text: 'Large', classText: 'text-base', plusSize: 25, textLocale: 'popupFontSizeLargeText' },
  huge: { text: 'Huge', classText: 'text-xl', plusSize: 50, textLocale: 'popupFontSizeHugeText' },
}

export const EdgeStyleOptions: edgeStyleOptions = {
  none: { text: 'None', textLocale: 'popupEdgeNoneText' },
  outline: {
    text: 'Outline',
    textLocale: 'popupEdgeOutlineText',
    cssStyle: (color: string) =>
      `text-shadow: -3px -3px 0 ${color}, 0 -3px 0 ${color}, 3px -3px 0 ${color}, 3px 0 0 ${color}, 3px 3px 0 ${color}, 0 3px 0 ${color}, -3px 3px 0 ${color}, -3px 0 0 ${color};`,
  },
  dropShadow: {
    text: 'Drop Shadow',
    textLocale: 'popupEdgeDropShadowText',
    cssStyle: (color: string) => `text-shadow: ${color} 2px 2px 2.5px, ${color} 2px 2px 3.5px, ${color} 2px 2px 4.5px`,
  },
}

export const fontWeightText: fontWeightsText = {
  100: 'Thin',
  200: 'Extra Light',
  300: 'Light',
  400: 'Regular',
  500: 'Medium',
  600: 'Semi Bold',
  700: 'Bold',
  800: 'Extra Bold',
  900: 'Black',
}

export const colorOptions: string[] = [
  '#FFFFFF',
  '#000000',
  '#E50914',
  '#FCBE11',
  '#0000C8',
  '#FF01B3',
  '#00C800',
  '#009FDA',
]
