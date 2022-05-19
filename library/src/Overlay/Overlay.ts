import { IOverlay } from "./IOverlay";

export class Overlay implements IOverlay {
    baseInsertDiv: HTMLDivElement;
    currentElement: HTMLDivElement;

    constructor() { }

    /**
     * Create a clickable div with text and onclick functions
     * @param baseInsertDiv the parent div element that this overlay will be inserted into 
     * @param overlayDivId the id for the base div of the overlay 
     * @param overlayDivClass the html class you are applying 
     * @param overlayHtmlElement the created html element you are applying
     * @param overlayClickEvent the event listener you are applying to your custom element     
     */
    createNewOverlayElement(baseInsertDiv: HTMLDivElement, applyOnCreation: boolean, overlayDivId?: string, overlayDivClass?: string, overlayHtmlElement?: HTMLElement, overlayClickEvent?: EventListener) {
        this.baseInsertDiv = baseInsertDiv;

        // check for a pre existing element and make a new element for the scope of this method
        let preExistingElement = document.getElementById(overlayDivId) as HTMLDivElement;

        // an overlay may already exist inside its parent so lets check if not we will make a new one
        if (!this.baseInsertDiv.contains(preExistingElement)) {
            this.currentElement = document.createElement('div');
            this.currentElement.id = overlayDivId;
        } else {
            this.currentElement = preExistingElement;
        }

        // While this overlay has child elements remove them so we can add the new ones
        while (this.currentElement.lastChild) {
            this.currentElement.removeChild(this.currentElement.lastChild);
        }

        // if the user passes a custom html elements add them in
        if (overlayHtmlElement) {
            this.currentElement.appendChild(overlayHtmlElement);
        }

        // if the user passes click functionality then add an event listener to it
        if (overlayClickEvent) {
            this.addOverlayOnClickEvent(overlayClickEvent);
        }

        // If the overlay has any previous classes remove them so we can set the new ones
        this.updateOverlayClasses(overlayDivClass);

        // create into the baseInsertDiv and run any show functionality
        if(applyOnCreation){
            this.applyNewElement();
        }
    }

    /**
     * Apply the current overlay element into the baseInsertDiv and run any show functionality
     */
    applyNewElement() {
        this.beforeShowOverlay();
        this.baseInsertDiv.appendChild(this.currentElement);
        this.afterShowOverlay();
    }

    /**
     * Add an on click event to an overlay 
     * @param overlayClickEvent the on click event to be activated
     */
    addOverlayOnClickEvent(overlayClickEvent: EventListener) {
        // capture the element context 
        let elementContext = this.currentElement

        // add the new event listener 
        elementContext.addEventListener('click', function onOverlayClick(event: Event) {
            overlayClickEvent(event);
            elementContext.removeEventListener('click', onOverlayClick);
        });

        // assign the updated context
        this.currentElement = elementContext;
    }

    /**
     * Update all classes on an overlay 
     * @param overlayDivClass a string of html classes you wish to apply to an overlay  
     */
    updateOverlayClasses(overlayDivClass: string) {
        // If the overlay has any previous classes remove them so we can set the new ones
        let cl = this.currentElement.classList;
        for (let i = cl.length - 1; i >= 0; i--) {
            cl.remove(cl[i]);
        }

        this.currentElement.classList.add(overlayDivClass);
    }

    /**
     * hide the overlay by setting a hiddenState class and runs any onHideOverlay functionality 
     */
    hideOverlay() {
        this.beforeHideOverlay();
        this.updateOverlayClasses('hiddenState');
        this.afterHideOverlay();
    }

    /**
     * Update an overlays div html contents 
     * @param htmlContent a string of html content you wish to replace into you div
     */
    updateOverlayContents(htmlContent: string) {
        this.currentElement.innerHTML = htmlContent;
    }

    /**
     * An override function that users can pass in custom functionality for before an overlay is shown 
     */
    beforeShowOverlay() { }

    /**
     * An override function that users can pass in custom functionality for after an overlay has shown 
     */
    afterShowOverlay() { }

    /**
     * An override function that users can pass in custom functionality for before an overlay is hidden 
     */
    beforeHideOverlay() { }

    /**
     * An override function that users can pass in custom functionality for after an overlay has hidden
     */
    afterHideOverlay() { }
}