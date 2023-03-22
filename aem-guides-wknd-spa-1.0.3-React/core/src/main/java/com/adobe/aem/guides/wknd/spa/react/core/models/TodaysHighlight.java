package com.adobe.aem.guides.wknd.spa.react.core.models;

import com.adobe.cq.export.json.ComponentExporter;

public interface TodaysHighlight extends ComponentExporter  {
    public String getCmpTitle();
    public String getDescription();
    public String getImage();
    public String gethighlightArchives();
    public String getLinkUrl();
}