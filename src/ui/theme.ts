export const color={canvas:'#000000',surface:'#15171B',raised:'#1F2228',borderStrong:'#5F6772',textPrimary:'#ECEEF1',textSecondary:'#A9B0BA',textMuted:'#8A929E',primaryFill:'#E6E9EE',textOnFill:'#0B0C0E'} as const;
export const type={display:{fontSize:34,lineHeight:40,fontWeight:'600' as const},title:{fontSize:22,lineHeight:28,fontWeight:'600' as const},body:{fontSize:17,lineHeight:22,fontWeight:'400' as const},bodyStrong:{fontSize:17,lineHeight:22,fontWeight:'600' as const},secondary:{fontSize:15,lineHeight:21,fontWeight:'400' as const},meta:{fontSize:13,lineHeight:18,fontWeight:'400' as const}} as const;
export type TypeVariant=keyof typeof type;
export const radius=12;
