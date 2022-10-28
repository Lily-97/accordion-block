<?php

// If this file is called directly, abort.
if (! defined('ABSPATH')) {
	exit;
}

class RegisterLevitAccordionBlock {

    public function __construct()
    {
        add_action('init', [$this, 'register_block']);
    }

    public function register_block()
    {
        register_block_type_from_metadata( __DIR__, [
//            'render_callback' => 'gutenberg_examples_dynamic_render_callback'
        ] );
    }

    public function render_block($args)
    {

    }
}
new RegisterLevitAccordionBlock();