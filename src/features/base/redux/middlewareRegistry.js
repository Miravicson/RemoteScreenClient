import { applyMiddleware } from 'redux'

/**
 * A registry for Redux middleware, allowing features to register their
 * middleware without needing to create additional inter-feature dependencies
 */

class MiddlewareRegistry {
  _elements = []

  _applyMiddleware(...additional) {
    const middlewares = [...this._elements, ...additional]
    return applyMiddleware(...middlewares)
  }

  register(middleware) {
    this._elements.push(middleware)
  }
}


/**
 * The public singleton instance of the MiddlewareRegistry class.
 */

export default new MiddlewareRegistry();