var TextareaView = IPython.WidgetView.extend({
  
    // Called when view is rendered.
    render : function(){
        this.$el
            .html('')
            .addClass(this.model.comm.comm_id);
        this.$textbox = $('<textarea />')
            .attr('rows', 5)
            .appendTo(this.$el);
        this.update(); // Set defaults.
    },
    
    // Handles: Backend -> Frontend Sync
    //          Frontent -> Frontend Sync
    update : function(){
        if (!this.user_invoked_update) {
            this.$textbox.val(this.model.get('value'));
        }
    },
    
    events: {"keyup textarea" : "handleChanging",
            "paste textarea" : "handleChanging",
            "cut textarea" : "handleChanging"},
    
    // Handles and validates user input.
    handleChanging: function(e) { 
        this.user_invoked_update = true;
        this.model.set('value', e.target.value);
        this.model.apply(this);
        this.user_invoked_update = false;
    },
});

IPython.notebook.widget_manager.register_widget_view('TextareaView', TextareaView);
