import { ScrollView, View, StyleSheet } from 'react-native';
export function Screen({children,scroll=true}:{children:React.ReactNode;scroll?:boolean}){return scroll?<ScrollView style={s.fill} contentContainerStyle={s.content}>{children}</ScrollView>:<View style={s.fill}>{children}</View>}
const s=StyleSheet.create({fill:{flex:1,backgroundColor:'#000'},content:{padding:16,gap:16}});
