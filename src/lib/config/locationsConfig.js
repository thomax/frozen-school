// @ts-nocheck
import FrozenClassroom from '../locations/thomax/FrozenClassroom.svelte'
import DarkHallway from '../locations/thomax/DarkHallway.svelte'
import StrangeOffice from '../locations/philiptorrissen/StrangeOffice.svelte'
import Room404 from '../locations/thomax/Room404.svelte'
import Bibliotek from '../locations/aakonHO-IN/Bibliotek.svelte'
import Toilets from '../locations/teodororjansen/Toilets.svelte'
import EmptyRoom from '../locations/NicolaiHindenes/EmptyRoom.svelte'
import Cafeteria from '../locations/shimarikuyo/Cafeteria.svelte'

import LockerWithFireplace from '../locations/jscode1003/LockerWithFireplace.svelte'
const roomNotFoundId = '404'

const locationsConfig = [
  {
    id: 'fc307',
    title: 'Frozen Classrom 307',
    author: 'thomax',
    component: FrozenClassroom
  },
  {
    id: 'dh',
    title: 'Dark frozen hallway',
    author: 'thomax',
    component: DarkHallway
  },
  {
    id: 'so',
    title: 'Strange office',
    author: 'philiptorrissen',
    component: StrangeOffice
  },
  {
    id: 'em',
    title: 'Empty room',
    author: 'NicolaiHindenes',
    componenet: EmptyRoom
  },
  {
    id: 'toi',
    title: 'Toilets',
    author: 'teodororjansen',
    component: Toilets
  },
  {
    id: '404',
    title: 'A room named 404',
    component: Room404
  },
  {
    id: 'bi',
    title: 'Bibliotek',
    author: 'aakonHO-IN',
    component: Bibliotek,
  },
  {
    id: 'lf',
    title: 'Locker with fireplace',
    author: 'jscode1003',
    component: LockerWithFireplace
  },
  {
    id: 'caf',
    title: 'Cafeteria',
    author: 'shimarikuyo',
    component: Cafeteria
  }
]

export function getLocationConfig(id) {
  const config = locationsConfig.find(config => config.id === id)
  // if no matching config, return 404 config
  return config || locationsConfig.find(config => config.id === roomNotFoundId)
}
