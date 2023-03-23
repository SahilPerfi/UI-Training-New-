import React from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';
import './TextImageMultifield.scss';


const TextImageMultifieldEditConfig = {
    emptyLabel: 'TextImage',
      isEmpty: function(props) {
        return !props || !props.title;
    }
};

const TextImageMultifield = (props) => {
    console.log(props);
  return (
    <>
      <div className='textImage_heading'>{props.textTitle}</div>
      <div className='textImage'> 
        <div className='textImage_text'>{props.text}</div>
        <img src={props.fileReference} alt="Image" />
      </div>
    </>
  )
}

MapTo('wknd-spa-react/components/textimage-multifield')(TextImageMultifield, TextImageMultifieldEditConfig);
