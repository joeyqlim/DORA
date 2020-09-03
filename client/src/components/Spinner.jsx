import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

const Spinner = () => (
  <div>
    <Dimmer active inverted>
      <Loader size='medium' inline='centered'>Loading</Loader>
    </Dimmer>
  </div>
)

export default Spinner