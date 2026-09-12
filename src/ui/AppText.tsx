import { Text, type TextProps } from 'react-native';
import { color, type, TypeVariant } from './theme';
export function AppText({variant='body',tone='primary',style,...rest}:TextProps&{variant?:TypeVariant;tone?:'primary'|'secondary'|'muted'} ){const c=tone==='secondary'?color.textSecondary:tone==='muted'?color.textMuted:color.textPrimary;return <Text {...rest} style={[type[variant],{color:c},style]}/>}
