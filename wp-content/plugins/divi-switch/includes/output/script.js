jQuery(document).ready(function($){        $unformattednum = $('#et-info-phone').text();
        $formattednum = $unformattednum.replace(/-|\s/g,"");
        $("#et-info-phone").wrapInner("<a href=tel:" + $formattednum + "></a>");
                function ds_setup_collapsible_submenus_parent_cickable() {
        var top_level_link = '.et_mobile_menu .menu-item-has-children > a';
        $(top_level_link).after('<span class="menu-closed"></span>');
        $(top_level_link).each(function () {
        $(this).next().next('.sub-menu').toggleClass('menu-hide', 1000);
        });
        $(top_level_link + '+ span').on('click', function (event) {
        event.preventDefault();
        $(this).toggleClass('menu-open');
        $(this).next('.sub-menu').toggleClass('menu-hide', 1000);
        });
        }

        setTimeout(function () {
        ds_setup_collapsible_submenus_parent_cickable();
        }, 300);
        });