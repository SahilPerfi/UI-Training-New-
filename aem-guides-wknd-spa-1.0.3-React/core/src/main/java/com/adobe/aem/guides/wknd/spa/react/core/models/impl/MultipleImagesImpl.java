package com.adobe.aem.guides.wknd.spa.react.core.models.impl;

import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;

import com.adobe.aem.guides.wknd.spa.react.core.models.MultipleImages;

@Model(adaptables = SlingHttpServletRequest.class, adapters = { MultipleImages.class,
    ComponentExporter.class }, resourceType = MultipleImagesImpl.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class MultipleImagesImpl implements MultipleImages {

    @ValueMapValue
    private String textTitle;
    private String text;

    static final String RESOURCE_TYPE = "wknd-spa-react/components/multiple-images";

    @Override 
    public String getTextTitle(){
        return textTitle;
    }

    @Override
    public String getImage(){
        return image;
    }

    
    @ValueMapValue(name = "fileReference")
    private String image;

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}   