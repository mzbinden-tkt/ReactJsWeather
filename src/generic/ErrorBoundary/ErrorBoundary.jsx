import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class ErrorBoundary extends PureComponent {
  static propTypes = {
    prop: PropTypes,
  }

  render() {
    return <div></div>
  }
}
