# frozen-school

Et kodeprosjekt for IT2@vika-vgs 2023/2024.

## Konseptet: En skole på vintern
  - Du sovnet i timen, våkner opp midt på natta og det er...
  - ...kuldestress!
  - En temperatur-indikator teller nådeløst nedover, og når den kommer til 0 er du død
  - Du kommer til å dø av kulde, målet er bare å overleve lengst mulig
  - Elevene i prosjektet har individuelt ansvar for egne rom ("Location") og UI-et tilbyr en måte å navigere fra rom til rom. Hvert rom har en egen utfordring, og er håpet er at de er designet på en slik måte at de tilbyr "replayability" - de kan spilles på nytt.

This is a mystery/exploration sort of game where the player tries to avoid a frozen death for as long as possible. Built in a modular fashion, so plugging in new `Location` components is easy.

## Interne API-er

### Oppdatere location

Bruk denne når du skal navigere til en ny location. Verdien på location er en string som må matche med id-en til en av objektene i `locationsConfig.js`.

```js
import {goToLocation} from './lib/dataStores/locationStore'
goToLocation('someLocation')
```

### Oppdatere gameState

`gameState` kan være én av tre verdier: `welcome`, `gameRunning` eller `gameOver`. 

```js
import {setGameState} from './lib/dataStores/stateStore.js'
setGameState('gameOver')
```

### Oppdatere character

```js
import {updateCharacter} from './lib/dataStores/characterStore.js'
const char = {temperature: 26}
updateCharacter(char)
```


## Utvikling

Kjør appen i dev-mode med `npm run dev`

## What's with the Express server?

Will use this for recording high-scores? Maybe also serving the app, we'll see.