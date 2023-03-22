package com.adobe.aem.guides.wknd.spa.react.core.models.impl;

import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;

import com.adobe.aem.guides.wknd.spa.react.core.models.TodaysHighlight;

@Model(adaptables = SlingHttpServletRequest.class, adapters = { TodaysHighlight.class,
    ComponentExporter.class }, resourceType = TodaysHighlightImpl.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class TodaysHighlightImpl implements TodaysHighlight {

    @ValueMapValue
    private String cmpTitle;
    private String linkUrl;
    private String highlightArchives;
    private String description;
    private String cmpImage;

    static final String RESOURCE_TYPE = "wknd-spa-react/components/today-highlight";


    @Override 
    public String getCmpTitle(){
        return cmpTitle;
    }

    @Override 
    public String getLinkUrl(){
        return linkUrl;
    }

    @Override 
    public String gethighlightArchives(){
        return highlightArchives;
    }

    @Override 
    public String getDescription(){
        return description;
    }


    @Override
    public String getImage(){
        return cmpImage;
    }

    
    @ValueMapValue(name = "fileReference")
    private String image;

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}