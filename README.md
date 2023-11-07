# frozen-school

Et kodeprosjekt for IT2@vika-vgs 2023/2024.

## Konseptet: En skole på vintern
  - du sovnet i timen, våkner opp midt på natta og det er...
  - ...kuldestress!
  - du kommer til å dø av kulde, målet er bare å overleve lengst mulig
  - tidsspesifikke missions?

This is a mystery/exploration sort of game where the player tries to avoid a frozen death for as long as possible. Built in a modular fashion, so plugging in new `Locations` should be easy.

## Interne API-er

### Oppdatere location

Bruk denne når du skal navigere til en ny location

```js
import {goToLocation} from './lib/dataStores/locationStore'
goToLocation('someLocation')
```

### Oppdatere appState

```js
import {setState} from './lib/dataStores/stateStore.js'
setState(nextState)
```

### Oppdatere character

```js
import {setState} from './lib/dataStores/characterStore.js'
const update = {temperature: 26}
updateCharacter(update)
```


## Utvikling

Kjør appen i dev-mode med `npm run dev`

## What's with the Express server?

Will use this for recording high-scores? Maybe also serving the app, we'll see.