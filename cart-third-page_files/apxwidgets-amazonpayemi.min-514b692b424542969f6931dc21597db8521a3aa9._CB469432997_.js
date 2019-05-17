(function(){var f=PaymentsPortal2.modules.define;f("components/AmazonPayEMIComponent","component jQuery lang css-utils events/InstrumentRowSelectedEvent public-event-registry continuable AUI!P".split(" "),function(f,g,k,c,d,l,m,h){return f.extend(m,{initialize:function(a,b){this.currentInstrumentId=b.data.instrumentId;(this.isAmazonPayEMIDisplayable=b.data.isDisplayable)&&l.register(d);this.bindToEvents()},_isAmazonPayBalanceSelected:function(){return this.widget.get("apbCheckboxSelected")},_isAmazonPayEmiAvailable:function(){return!this._isAmazonPayBalanceSelected()&&
this.isAmazonPayEMIDisplayable},_getAmazonPayEMIContainer:function(){return this.getDOMElementsByPrefix("amazonPayEMIContainer")},_getInstrumentSelectionInputElement:function(){return this.getDOMElement("instrumentRowSelection-"+this.currentInstrumentId)},_onInstrumentSelected:function(){this._getAmazonPayEMIContainer().addClass("pmts-selected");this._getInstrumentSelectionInputElement().prop("checked",!0)},_onInstrumentDeselected:function(){this._getAmazonPayEMIContainer().removeClass("pmts-selected")},
_amazonPayEMIOptionClicked:function(a){this._isAmazonPayBalanceSelected()||this.widget.trigger(d,{instrumentId:this.currentInstrumentId})},_showAmazonPayEMIDisabledWrapper:function(){c.showElement(this.getDOMElement("amazonCreditUnavailableMessage"))},_showAmazonPayEMIDropdownWrapper:function(a){c.showElement(this.getDOMElement("amazonPayEMIDropdown"))},_hideAmazonPayEMIDisabledWrapper:function(){c.hideElement(this.getDOMElement("amazonCreditUnavailableMessage"))},_hideAmazonPayEMIDropdownWrapper:function(a){c.hideElement(this.getDOMElement("amazonPayEMIDropdown"))},
_showAmazonPayEMINoCostEMIAvailableWrapper:function(){c.showElement(this.getDOMElement("noCostEMIStringRow"))},_hideAmazonPayEMINoCostEMIAvailableWrapper:function(){c.hideElement(this.getDOMElement("noCostEMIStringRow"))},_getAmazonPayEMIInstallmentHiddenInput:function(a){return this.getDOMElement("amazonPayEMISelectionHiddenInput-"+a).add(this.getDOMElement("amazonPayEMISelectionHiddenInput-"))},_getPrimaryViewButtonDisplay:function(a){return this.getDOMElement("amazonPayEMIOfferButtonText-"+a).add(this.getDOMElement("amazonPayEMIOfferButtonText-"))},
_getAmazonPayEMIInstallmentTouchLink:function(a){return this.getDOMElement("amazonPayEMIMobileTouchLink-"+a).add(this.getDOMElement("amazonPayEMIMobileTouchLink-"))},_triggerBackingInstrumentSelectedEvent:function(a,b){this.widget.trigger("backingInstrumentSelected",{instrumentId:a,errors:b})},closeAmazonPayEMIInstallmentsSecondaryPopover:function(a){h.when("a-secondary-view").execute(function(b){b&&(b=b.get("amazonPayEMISecondaryPopover-"+a))&&b.hide()});this._triggerBackingInstrumentSelectedEvent(this.currentInstrumentId,
null)},_updateInstallmentOptionsAccordionStateToLastSelectedInstallment:function(a){a=this.currentInstrumentId;var b=this._getAmazonPayEMIInstallmentHiddenInput(a)[0].value;g("[data-a-accordion-name='installmentOptionsAccordion-"+a+"'] [data-a-accordion-row-name='"+("installmentOptionAccordionRow-"+a+b)+"'] a").click()},_chooseInstallmentButtonClick:function(a){var b=this.currentInstrumentId,e=g(a.currentTarget).find("input");b===e.data("instrumentid").toString()&&(this._getAmazonPayEMIInstallmentHiddenInput(b).val(e.data("financialofferid")),
e=this._getPrimaryViewButtonDisplay(b),a=g(a.currentTarget).find(".a-section").html(),e.html(a),b=b.split(".").join("-"),this.installmentSelected=!0,this._hideAmazonPayEMINoCostEMIAvailableWrapper(),this.closeAmazonPayEMIInstallmentsSecondaryPopover(b))},_isInstrumentSelected:function(){return this._getAmazonPayEMIContainer().hasClass("pmts-selected")},_getAmazonPayEMIHeading:function(){return this.getDOMElement("amazonPayEMIHeading")},_toggleAmazonPayEMIOption:function(a){this._isAmazonPayBalanceSelected()&&
(this._showAmazonPayEMIDisabledWrapper(),this._hideAmazonPayEMIDropdownWrapper(),this._hideAmazonPayEMINoCostEMIAvailableWrapper(),this._getAmazonPayEMIHeading().addClass("pmts-disabled-section"),this._getInstrumentSelectionInputElement().prop("disabled",!0));this._isAmazonPayBalanceSelected()||(this._hideAmazonPayEMIDisabledWrapper(),this._showAmazonPayEMINoCostEMIAvailableWrapper(),this._getAmazonPayEMIHeading().removeClass("pmts-disabled-section"),this._getInstrumentSelectionInputElement().prop("disabled",
!1));this._isInstrumentSelected()&&!this._isAmazonPayEmiAvailable()&&(this._onInstrumentDeselected(),this._getInstrumentSelectionInputElement().prop("checked",!1),this.widget.trigger(d,{}),this.setContinuable(!1),this.widget.trigger("PaymentPlanSelected",{isValid:!1}))},bindToEvents:function(){var a=this;this.getDOMElementsByPrefix("amazonPayEMIContainer").click(k.bind(this._amazonPayEMIOptionClicked,this));a.widget.on(d,this,function(a){a.instrumentId!==this.currentInstrumentId||this._isAmazonPayBalanceSelected()?
(this._onInstrumentDeselected(),this._hideAmazonPayEMIDropdownWrapper(),this._isAmazonPayBalanceSelected()||this._showAmazonPayEMINoCostEMIAvailableWrapper()):(this._onInstrumentSelected(),this._showAmazonPayEMIDropdownWrapper(),this._showAmazonPayEMINoCostEMIAvailableWrapper(),this._hideAmazonPayEMIDisabledWrapper(),this.installmentSelected&&(this._triggerBackingInstrumentSelectedEvent(this.currentInstrumentId,null),this._hideAmazonPayEMINoCostEMIAvailableWrapper()))});a.widget.on("apbSelectionChanged",
a,function(a){this.isAmazonPayEMIDisplayable&&this._toggleAmazonPayEMIOption(a)});h.when("A").execute(function(b){b.on("a:popover:afterHide:amazonPayEMISecondaryPopover-"+this.currentInstrumentId,function(a){this._updateInstallmentOptionsAccordionStateToLastSelectedInstallment(a)});b.declarative("chooseInstallmentButton","click",function(b){a._chooseInstallmentButtonClick(b.$event)})})}})})})();