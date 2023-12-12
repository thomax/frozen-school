// @ts-nocheck
import FrozenClassroom from '../locations/thomax/FrozenClassroom.svelte'
import HallWay from '../locations/HenningT05/HallWay.svelte'
import StrangeOffice from '../locations/philiptorrissen/StrangeOffice.svelte'
import Room404 from '../locations/thomax/Room404.svelte'
import Bibliotek from '../locations/aakonHO-IN/Bibliotek.svelte'
import Toilets from '../locations/teodororjansen/Toilets.svelte'
import LockerRoom from '../locations/NicolaiHindenes/LockerRoom.svelte'
import Cafeteria from '../locations/shimarikuyo/Cafeteria.svelte'
import DarkHallway from '../locations/thomax/DarkHallway.svelte'
import TaskLibrary from '../locations/aakonHO-IN/TaskLibrary.svelte'
import Toilet1 from '../locations/teodororjansen/toilet1.svelte'
import Kitchen from '../locations/ruimatsiur/Kitchen.svelte'
import Fridge from '../locations/ruimatsiur/Fridge.svelte'
import apple from '../locations/ruimatsiur/apple.svelte'
import banana from '../locations/ruimatsiur/banana.svelte'
import sinkRoom from '../locations/teodororjansen/sinkRoom.svelte'
import Classroom3 from '../locations/jonabarona/Classroom3.svelte'
import LockerWithFireplace from '../locations/jscode1003/LockerWithFireplace.svelte'

import Fire from '../locations/jscode1003/Fire.svelte'

import SnowballArena from '../locations/thomax/SnowballFight/SnowballArena.svelte'

const roomNotFoundId = '404'

const locationsConfig = [
  {
    id: 'fc307',
    title: 'Frozen Classrom 307',
    author: 'thomax',
    component: FrozenClassroom
  },
  {
    id: 'hall',
    title: 'Hallway',
    author: 'HenningT05',
    component: HallWay
  },
  {
    id: 'dh',
    title: 'Dark Hallway',
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
    id: 'lr',
    title: 'Locker Room',
    author: 'NicolaiHindenes',
    component: LockerRoom
  },
  {
    id: 'toi',
    title: 'Toilets',
    author: 'teodororjansen',
    component: Toilets
  },
  {
    id: 'toi1',
    title: 'toilet1',
    author: 'teodororjansen',
    component: Toilet1
  },
  {
    id: 'sink',
    title: 'sinkRoom',
    author: 'teodororjansen',
    component: sinkRoom
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
  },
  {
    id: 'tl',
    title: 'Task to Library',
    author: 'aakonHO-IN',
    component: TaskLibrary,
  },
  {
    id: 'norcl',
    title: 'Classroom 3',
    author: 'jonabarona',
    component: Classroom3
  },
  {

    id: 'ki',
    title: 'Kitchen',
    author: 'ruimatsiur',
    component: Kitchen

  },
  {
    id: 'fi',
    title: 'Fridge',
    author: 'ruimatsiur',
    component: Fridge
  },
  {
    id: 'ba',
    title: 'banana',
    author: 'ruimatsiur',
    component: banana
  },
    {
    id: 'ap',
    title: 'apple',
    author: 'ruimatsiur',
    component: apple
  },
  {
    id: 'fire',
    title: 'Fire',
    author: 'jscode1003',
    component: Fire
  },
  {
    id: 'sbf',
    title: 'Snowball Fight',
    author: 'thomax',
    component: SnowballArena
  }

]

export function getLocationConfig(id) {
  const config = locationsConfig.find(config => config.id === id)
  // if no matching config, return 404 config
  return config || locationsConfig.find(config => config.id === roomNotFoundId)
}
