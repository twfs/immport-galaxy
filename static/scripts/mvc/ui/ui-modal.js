define("mvc/ui/ui-modal",["exports"],function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=t.View=Backbone.View.extend({className:"ui-modal",optionsDefault:{container:"body",title:"ui-modal",cls:"ui-modal",body:"",backdrop:!0,height:null,width:null,xlarge:!1,closing_events:!1,closing_callback:null,title_separator:!0},buttonList:{},initialize:function(t){this.options=_.defaults(t||{},this.optionsDefault),$(this.options.container).prepend(this.el),t&&this.render()},show:function(t){var i=this;t&&(this.options=_.defaults(t,this.optionsDefault),this.render()),this.visible||(this.visible=!0,this.$el.fadeIn("fast")),this.options.closing_events&&($(document).on("keyup.ui-modal",function(t){27==t.keyCode&&i.hide(!0)}),this.$backdrop.on("click",function(){i.hide(!0)}))},hide:function(t){this.visible=!1,this.$el.fadeOut("fast"),this.options.closing_callback&&this.options.closing_callback(t),$(document).off("keyup.ui-modal"),this.$backdrop.off("click")},render:function(){var t=this;if(this.$el.html(this._template()),this.$header=this.$(".modal-header"),this.$dialog=this.$(".modal-dialog"),this.$body=this.$(".modal-body"),this.$footer=this.$(".modal-footer"),this.$backdrop=this.$(".modal-backdrop"),this.$buttons=this.$(".buttons"),"progress"==this.options.body&&(this.options.body=$('<div class="progress progress-striped active"><div class="progress-bar progress-bar-info" style="width:100%"/></div>')),this.$el.removeClass().addClass("modal").addClass(this.options.cls),this.$header.find(".title").html(this.options.title),this.$body.html(this.options.body),this.$buttons.empty(),this.buttonList={},this.options.buttons){var i=0;$.each(this.options.buttons,function(s,o){var e=$("<button/>").attr("id","button-"+i++).text(s).click(o);t.$buttons.append(e).append("&nbsp;"),t.buttonList[s]=e})}else this.$footer.hide();this.$backdrop[this.options.backdrop&&"addClass"||"removeClass"]("in"),this.$header[!this.options.title_separator&&"addClass"||"removeClass"]("no-separator"),this.$body.removeAttr("style"),this.options.height?(this.$body.css("height",this.options.height),this.$body.css("overflow","hidden")):this.$body.css("max-height",$(window).height()/2),this.options.width&&this.$dialog.css("width",this.options.width),this.options.xlarge&&this.$dialog.css("max-width","3000px")},getButton:function(t){return this.buttonList[t]},enableButton:function(t){this.getButton(t).prop("disabled",!1)},disableButton:function(t){this.getButton(t).prop("disabled",!0)},showButton:function(t){this.getButton(t).show()},hideButton:function(t){this.getButton(t).hide()},scrollTop:function(){return this.$body.scrollTop()},_template:function(){return'<div class="modal-backdrop fade"/><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="title"/></div><div class="modal-body"/><div class="modal-footer"><div class="buttons"/></div></div></div>'}});t.default={View:i}});