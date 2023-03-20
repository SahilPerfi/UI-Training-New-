import React from 'react'
import { MapTo } from '@adobe/aem-react-editable-components';

const RegistrationConfig = {
    emptyLabel: 'Registration',
      isEmpty: function(props) {
        return !props;
    }
};
const Registration = (props) => {
    console.log("registration",props);
  return (
    <div>
      hello
    </div>
  )
}

MapTo('wknd-spa-react/components/registration')(Registration, RegistrationConfig);
