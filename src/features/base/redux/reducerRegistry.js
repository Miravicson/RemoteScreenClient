import { combineReducers } from 'redux'

/**
 * A registry for Redux reducers, allowing features to register themselves
 *
 */

class ReducerRegistry {
  /**
   * Creates a ReducerRegistry instance.
   */
  _elements = {}
  combineReducers(additional = {}) {
    return combineReducers({
      ...this._elements,
      ...additional,
    })
  }
  register(name, reducer) {
    this._elements[name] = reducer
  }
}

export default new ReducerRegistry()
