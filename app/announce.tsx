import { Screen, AppText, Button } from '../src/ui';
import { useState } from 'react';
export default function Announce(){const [on,setOn]=useState(false);return <Screen><AppText variant="title">List my organisation</AppText><AppText tone="secondary">Broadcast an organisation profile to nearby phones in the demo mesh.</AppText><AppText>{on?'Announcing':'Not announcing'}</AppText><Button label={on?'Stop announcing':'Announce'} onPress={()=>setOn(!on)}/></Screen>}
