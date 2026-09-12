import { Link } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { Screen, AppText, Button } from '../src/ui';

export default function Home() {
  return <Screen><View style={s.wrap}><AppText variant="display">OffGrid</AppText><AppText variant="body" tone="secondary">Talk without the internet. This build includes the offline-first app shell and a local mesh simulator.</AppText><Link href="/nearby" asChild><Button label="Talk to people nearby" /></Link><Link href="/directory" asChild><Button label="Get help" kind="secondary" /></Link><Link href="/announce" asChild><Button label="List my organisation" kind="secondary" /></Link><AppText variant="meta" tone="muted">Demo build: real phone-to-phone mesh is not enabled yet.</AppText></View></Screen>;
}
const s=StyleSheet.create({wrap:{gap:20,paddingTop:32}});
