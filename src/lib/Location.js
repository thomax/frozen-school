// @ts-nocheck
import { getLocationConfig } from "./config/locationsConfig"

export class Location {

  static locationsById = {}

  static getLocation(id) {
    let aLocation = Location.locationsById[id]
    if (!aLocation) {
      const config = getLocationConfig(id)
      aLocation = new Location(config)
      Location.locationsById[id] = aLocation
    }
    return aLocation
  }

  constructor(config) {
    const {id, title, description, author, component} = config
    this.id = id
    this.title = title
    this.description = description
    this.author = author
    this.component = component
  }
}