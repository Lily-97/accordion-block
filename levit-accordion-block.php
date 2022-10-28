<?php
/**
 * Plugin Name: Accordion Gutenberg Block
 * Plugin URI:
 * Description: Custom designed accordion Gutenberg block created by LeverageIT team
 * Version: 1.0.0
 * Requires at least: 5.9
 * Requires PHP: 7.4
 * Author: the LeverageIT team
 * Author URI: https://leverage.it
 * License: GPL v3 or later
 * License URI: https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain: levit-accordion-block
 * Domain Path: /languages
 * Network:
 * Update URI:
 *
 * @package levit-accordion-block
 */

// If this file is called directly, abort.
if (! defined('ABSPATH')) {
    exit;
}

if (!class_exists('LevitAccordionBlock')) :

    final class LevitAccordionBlock
    {

        public function __construct()
        {
            if (file_exists(plugin_dir_path( __FILE__ ) . 'assets/blocks/levit-accordion-block/index.php')) {
                require_once plugin_dir_path( __FILE__ ) . 'assets/blocks/levit-accordion-block/index.php';
            }

            add_filter( 'block_categories_all', [$this, 'addLeverageITCategory'], 10, 2);
        }

        public function addLeverageITCategory($categories, $post): array {
            $category_slugs = wp_list_pluck( $categories, 'slug' );
            return in_array( 'leverage-it', $category_slugs, true ) ? $categories : array_merge(
                $categories,
                [
                    [
                        'title' => __('Made by LeverageIT', 'levit-post-type-block'),
                        'slug'  => 'leverage-it',
                    ],
                ]
            );
        }
    }

    new LevitAccordionBlock();

endif;
