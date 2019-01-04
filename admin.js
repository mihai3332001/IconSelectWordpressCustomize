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
        var select_icon = obj.parents('li');
        console.log(select_icon);
        var parent = obj.parent().parent();
        var input_icon = parent.children('#icon_select2')
        var input_val = parent.children('#icon_select2').val();
        if(input_val == obj_val) {
           obj.attr('selected', 'selected');
           if(obj_val == 'custom-icon') {  
          select_icon.next().hide();
         select_icon.next().next().show();
           } else {
               select_icon.next().show();
        select_icon.next().next().hide();    
           }

        } 
        });
    };

    $.fn.selectFontIcons = function() {
        this.change(function(e) {
             var obj = $(this);
        var select_icon = obj.parents('li');
        var parent = obj.parent();
        var select_val = obj.children('option:selected').val();
        var input_icon = parent.children('#icon_select2')
        var input_val = parent.children('#icon_select2').val();
        var change_val = input_icon.val(select_val).change();
        console.log(select_icon);
        if(change_val.val() === "custom-icon") {    
          select_icon.next().hide();
         select_icon.next().next().show();
        } else if (change_val.val() === "font-awesome") {
         
          select_icon.next().show();
         select_icon.next().next().hide();
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

    $('.icons-custom option').selectedFontIcon();
    $('.icons-custom').selectFontIcons();
    $('.iconmoon').customIcon();
    $('.iconmoon option').customIconSelected();
    $('.combobox option').fontAwesomeIconSelected();
    $('.combobox').fontAwesomeIcon();
   
