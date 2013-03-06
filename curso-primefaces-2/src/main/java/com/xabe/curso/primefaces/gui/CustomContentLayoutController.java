package com.xabe.curso.primefaces.gui;

import java.io.Serializable;

import javax.annotation.PostConstruct;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import javax.faces.context.FacesContext;

import org.primefaces.extensions.model.layout.LayoutOptions;

@ManagedBean  
@ViewScoped  
public class CustomContentLayoutController implements Serializable {  
  
    private static final long serialVersionUID = 20120925L;  
  
    private LayoutOptions layoutOptions;  
  
    @PostConstruct  
    protected void initialize() {  
        layoutOptions = new LayoutOptions();  
  
        // options for all panes  
        LayoutOptions panes = new LayoutOptions();  
        panes.addOption("slidable", false);  
        panes.addOption("spacing", 6);  
        layoutOptions.setPanesOptions(panes);  
  
        // north pane  
        LayoutOptions north = new LayoutOptions();  
        north.addOption("resizable", false);  
        north.addOption("closable", false);  
        north.addOption("size", 100);  
        north.addOption("spacing_open", 0);  
        layoutOptions.setNorthOptions(north);  
  
        // south pane  
        LayoutOptions south = new LayoutOptions();  
        layoutOptions.setSouthOptions(south);  
  
        // west pane  
        LayoutOptions west = new LayoutOptions();  
        west.addOption("size", "50%");   
        layoutOptions.setWestOptions(west);  
  
        //center
        LayoutOptions center = new LayoutOptions();  
        center.addOption("size", "50%");   
        layoutOptions.setCenterOptions(center);  
  
    }  
  
    public LayoutOptions getLayoutOptions() {  
        return layoutOptions;  
    }  
  
  
    public String clickMe() {  
        FacesMessage msg =  
            new FacesMessage(FacesMessage.SEVERITY_INFO, "Nice to see that an action works in nested layouts.", null);  
        FacesContext.getCurrentInstance().addMessage(null, msg);  
  
        return null;  
    }  
}  
