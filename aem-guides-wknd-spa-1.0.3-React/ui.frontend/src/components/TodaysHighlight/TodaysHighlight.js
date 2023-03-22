import React from 'react'
import { MapTo } from '@adobe/aem-react-editable-components';
import './TodaysHighlight.scss'

const TodaysHighlightConfig = {
    emptyLabel: 'TodaysHighlight',
      isEmpty: function(props) {
        return !props || !props.title;
    }
};

const TodaysHighlight = (props) => {
console.log("todaysss",props);
    return (
        <>
            <div className=" fmc-Highlight__Container">
                <img className="fmc-Highlight__image" src={props?.fileReference} alt="image1" />
                <div className="fmc-primary">
                    <h3 className="fmc-primary__heading">{props?.title}</h3>
                    <div className="fmc-primary__description">
                        <p className="fmc-primary__description-text">{props?.description}</p>
                    </div>
                    <div className="fmc-primary__archive">
                        <a className="fmc-primary__archive-button fmc-text-button" href={props?.linkUrl+".html"}>{props?.highlightArchives}<span className=" fmc-chevron-filled-right fds-font--ford-icons__chevron-filled-right chevron-right-icon"></span></a>
                    </div>
                    <div className="fmc-primary__divider"></div>
                </div>
            </div>
        </>
     
  )
}


MapTo('wknd-spa-react/components/today-highlight')(TodaysHighlight, TodaysHighlightConfig);
