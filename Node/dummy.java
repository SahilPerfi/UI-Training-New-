<?xml version="1.0" encoding="UTF-8"?><jcr:root xmlns:sling="http://sling.apache.org/jcr/sling/1.0" xmlns:granite="http://www.adobe.com/jcr/granite/1.0" xmlns:cq="http://www.day.com/jcr/cq/1.0" xmlns:jcr="http://www.jcp.org/jcr/1.0" xmlns:nt="http://www.jcp.org/jcr/nt/1.0" jcr:primaryType="nt:unstructured" jcr:title="User Registration Comp" sling:resourceType="cq/gui/components/authoring/dialog"> <content jcr:primaryType="nt:unstructured" sling:resourceType="granite/ui/components/coral/foundation/container"> 
<items jcr:primaryType="nt:unstructured"> <tabs jcr:primaryType="nt:unstructured" sling:resourceType="granite/ui/components/coral/foundation/tabs" maximized="{Boolean}true"> <items jcr:primaryType="nt:unstructured"> <title jcr:primaryType="nt:unstructured" jcr:title="title" sling:resourceType="granite/ui/components/coral/foundation/container" margin="{Boolean}true"> <items jcr:primaryType="nt:unstructured"> <columns jcr:primaryType="nt:unstructured" sling:resourceType="granite/ui/components/coral/foundation/fixedcolumns" margin="{Boolean}true"> <items jcr:primaryType="nt:unstructured"> <column jcr:primaryType="nt:unstructured" sling:resourceType="granite/ui/components/coral/foundation/container"> <items jcr:primaryType="nt:unstructured"> <name jcr:primaryType="nt:unstructured" sling:resourceType="granite/ui/components/coral/foundation/form/textfield" fieldDescription="Name field of Model" fieldLabel="Name" name="./name" /> <username jcr:primaryType="nt:unstructured" sling:resourceType="granite/ui/components/coral/foundation/form/textfield" fieldDescription="Username field of Model" fieldLabel="UserName" name="./username" /> 
                                        <mail jcr:primaryType="nt:unstructured" 
                                            sling:resourceType="granite/ui/components/coral/foundation/form/textfield" 
                                            fieldDescription="mail field of Model" 
                                            fieldLabel="Mail" 
                                            name="./mail" /> 
                                        </items> 
                                    </column> 
                                </items> 
                            </columns> 
                        </items> 
                    </title> 
                    <educational jcr:primaryType="nt:unstructured" 
                        jcr:title="Education Info" 
                        sling:resourceType="granite/ui/components/coral/foundation/container" 
                        margin="{Boolean}true"> 
                        <items jcr:primaryType="nt:unstructured"> 
                            <columns jcr:primaryType="nt:unstructured" 
                                sling:resourceType="granite/ui/components/coral/foundation/fixedcolumns" 
                                margin="{Boolean}true"> 
                                <items jcr:primaryType="nt:unstructured"> 
                                    <column jcr:primaryType="nt:unstructured" 
                                        sling:resourceType="granite/ui/components/coral/foundation/container"> 
                                        <items jcr:primaryType="nt:unstructured"> 
                                            <mobileno jcr:primaryType="nt:unstructured" 
                                                sling:resourceType="granite/ui/components/coral/foundation/form/numberfield" 
                                                fieldDescription="Name field of Model" 
                                                fieldLabel="Mobile no."
                                                name="./mobileno" 
                                                maxlength="10" 
                                                step="number" /> 
                                            <password jcr:primaryType="nt:unstructured" 
                                                sling:resourceType="granite/ui/components/coral/foundation/form/textfield" 
                                                fieldDescription="Username field of Model" 
                                                fieldLabel="Set Password" 
                                                name="./password" /> 
                                            <address jcr:primaryType="nt:unstructured" 
                                                sling:resourceType="granite/ui/components/coral/foundation/form/textfield" 
                                                fieldDescription="mail field of Model" 
                                                fieldLabel="Address of User" 
                                                name="./address" /> 
                                            <image jcr:primaryType="nt:unstructured" 
                                                sling:resourceType="cq/gui/components/authoring/dialog/fileupload" 
                                                autoStart="{Boolean}false" 
                                                class="cq-droptarget" 
                                                fieldLabel="Image" 
                                                fileReferenceParameter="./fileReference" 
                                                mimeTypes="[image/gif,image/jpeg,image/png,image/tiff,image/svg+xml]" 
                                                multiple="{Boolean}true" 
                                                name="./file" 
                                                title="Upload Profile Picture" 
                                                uploadUrl="${suffix.path}" 
                                                useHTML5="{Boolean}true" 
                                                required="{Boolean}true" /> 
                                        </items> 
                                    </column> 
                                </items> 
                            </columns> 
                        </items> 
                    </educational> 
                </items> 
            </tabs> 
        </items> 
    </content>
</jcr:root>