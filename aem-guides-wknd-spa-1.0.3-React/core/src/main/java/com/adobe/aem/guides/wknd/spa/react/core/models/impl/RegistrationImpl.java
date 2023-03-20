package com.adobe.aem.guides.wknd.spa.react.core.models.impl;

import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;

import com.adobe.aem.guides.wknd.spa.react.core.models.Registration;

@Model(adaptables = SlingHttpServletRequest.class, adapters = { Registration.class,
    ComponentExporter.class }, resourceType = RegistrationImpl.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class RegistrationImpl implements Registration {

    static final String RESOURCE_TYPE = "wknd-spa-react/components/registration";

    @ValueMapValue private String firstName;
    @ValueMapValue private String lastName;
    @ValueMapValue private String DOB;
    @ValueMapValue private String feedback;

    @Override
    public String getFirstName(){
        return firstName;
    }
    @Override
    public String getLastName(){
        return lastName;
    }
    @Override
    public String getDateOfBirth(){
        return DOB;
    }
    @Override
    public String getFeedback(){
        return feedback;
    }
    @Override
    public String getExportedType(){
        return RESOURCE_TYPE;
    }
}