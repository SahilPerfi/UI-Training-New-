import React from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';

const CollegeManagementEditConfig= {
    emptyLabel: 'College Management',
      isEmpty: function(props) {
        return !props;
    }
};
const CollegeManagement = (props) => {
    console.log("props",props);
  return (
      <>
        <div>helloo</div>
        <div>{props.message}</div>
      </>
  
  )
}

MapTo('wknd-spa-react/components/college-management')(CollegeManagement, CollegeManagementEditConfig);
