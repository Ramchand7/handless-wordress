<?php
/**
 * Plugin Name: custom plugin
 * Description: this is for a learniung plugin
 * Plugin URI: https://elementor.com/?utm_source=wp-plugins&utm_campaign=plugin-uri&utm_medium=wp-dash
 * Author: Ram
 * Version: 1.0

 *
 * Text Domain: Custom Plugin
 *

 *
 * Elementor is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 *
 * Elementor is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 */


 
 if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

define( 'custom_plugin_version', '1.1' );
define( 'custom_plugin_file', __FILE__ );


register_deactivation_hook( __FILE__, 'pluginprefix_deactivate' );

register_activation_hook( __FILE__, 'my_plugin_activate' );
function my_plugin_activate(){
 global $wpdb,$table_prefix;
}


add_shortcode('myshort_code',function(){
    return 'hello word custo plugin';
});


add_action('admin_menu',function(){
add_menu_page('My menu page','mymenu title','manage_options','mu-plugin-page','my_plugin_page_function','',6);





add_submenu_page('mu-plugin-page','sub page','submenu title','manage_options','submenu-page','my_plugin_submenu_page_function','');
});
function my_plugin_page_function(){
    echo 'hi';
}

function my_plugin_submenu_page_function(){
    echo 'hi 1';
}


function create_posttype() {
    $supports = array(
        'title', // post title
        'editor', // post content
        'author', // post author
        'thumbnail', // featured images
        'excerpt', // post excerpt
        'custom-fields', // custom fields
        'comments', // post comments
        'revisions', // post revisions
        'post-formats',
    );
    register_post_type( 'cars',
    // CPT Options
   
        
    array(
    'labels' => array(
    'name' => __( 'cars' ),
    'singular_name' => __( 'car' )
    ),
    'public' => true,
    'has_archive' => false,
    'rewrite' => array('slug' => 'cars'),
    'supports' => $supports,
    'hierarchical' => false,
    'taxonomies'=>array('category',"car_type")


    )
    );
    }
    // Hooking up our function to theme setup
    add_action( 'init', 'create_posttype' );

    function register_car_type(){
        $labels=array(
            'name'=>'cars111',
            'singular_namr'=>'Cars',
        );
        $options=array(
            'labels'=>$labels,
            'hierarchical'=>true,
            'rewrite' => array('slug' => 'car-type'),

        );

        register_taxonomy('car_type', array('cars'),$options);
    }
    
    add_action('init','register_car_type');