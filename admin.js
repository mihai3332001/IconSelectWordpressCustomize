$.fn.customIconSelected = function() {
        this.each(function(){
        var obj = $(this);
        var obj_val= obj.val();
        var parent = obj.parent().parent();
        var input_icon = parent.children('#iconmoon_custom')
        var input_val = parent.children('#iconmoon_custom').val();
        if(obj_val == input_val) {
           obj.attr('selected', 'selected');
        }
        });
        return this;
    };

    $.fn.customIcon = function() {
            this.change(function() {
        var obj = $(this);
        var parent = obj.parent();
        var select_val = obj.children('option:selected').val();
        var input_icon = parent.children('#iconmoon_custom')
        var input_val = parent.children('#iconmoon_custom').val();
        if(input_val == 0) {
          $(input_icon).val(select_val).change();
        } else {
          $(input_icon).val(select_val).change();
        }
            });
            return this;
    };

    $.fn.selectedFontIcon = function() {
        this.each(function() {
             var obj = $(this);
        var obj_val= obj.val();
        var select_icon = obj.parents();
        var parent = obj.parent().parent();
        var input_icon = parent.children('#icon_select2')
        var input_val = parent.children('#icon_select2').val();
        if(input_val == obj_val) {
           obj.attr('selected', 'selected');
           if(obj_val == 'custom-icon') {  
              select_icon.find('#customize-control-eveline_frontpage_header_login_custom_icon').show();
               select_icon.find('#customize-control-eveline_frontpage_header_login_awesome_icon').hide();
           } else {
            select_icon.find('#customize-control-eveline_frontpage_header_login_awesome_icon').show(); 
            select_icon.find('#customize-control-eveline_frontpage_header_login_custom_icon').hide();      
           }

        } 
        });
    };

    $.fn.selectFontIcons = function() {
        this.change(function() {
             var obj = $(this);
        var select_icon = obj.parents();
        var parent = obj.parent();
        var select_val = obj.children('option:selected').val();
        var input_icon = parent.children('#icon_select2')
        var input_val = parent.children('#icon_select2').val();
        if(input_val === "custom-icon") {
            $(input_icon).val(select_val).change();
          select_icon.find('#customize-control-eveline_frontpage_header_login_custom_icon').hide();
         select_icon.find('#customize-control-eveline_frontpage_header_login_awesome_icon').show();
        } else if (input_val === "font-awesome") {
          var test = $(input_icon).val(select_val).change();
          //console.log(test);
          select_icon.find('#customize-control-eveline_frontpage_header_login_custom_icon').show();
            select_icon.find('#customize-control-eveline_frontpage_header_login_awesome_icon').hide();
        }
    });
        return this;
    };


    $.fn.fontAwesomeIcon = function() {
        this.change(function(){
        var obj = $(this);
        var parent = obj.parent();
        var select_val = obj.children('option:selected').val();
        var input_icon = parent.children('#icon_select')
        var input_val = parent.children('#icon_select').val();
        if(input_val == 0) {
          $(input_icon).val(select_val).change();
        } else {
          $(input_icon).val(select_val).change();
        }
        });
    };

    $.fn.fontAwesomeIconSelected = function() {
        this.each(function(){
        var obj = $(this);
        var obj_val= obj.val();
        var parent = obj.parent().parent();
        var input_icon = parent.children('#icon_select')
        var input_val = parent.children('#icon_select').val();
        if(obj_val == input_val) {
           obj.attr('selected', 'selected');
        } 
        });
    };

    $('#iconmoon').customIcon();
    $('#iconmoon option').customIconSelected();
    $('#icons-custom option').selectedFontIcon();
    $('#icons-custom').selectFontIcons();
    $('#combobox option').fontAwesomeIconSelected();
    $('#combobox').fontAwesomeIcon();
   
