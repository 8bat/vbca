#!/bin/sh
#
# Modify the part 1 .txp file to be more useful

modify() {
    sed "$@" \
	-e 's/\broom_2\b/bulls_gully/g' \
	-e 's/\broom_3\b/wellie_house/g' \
	-e 's/\broom_4\b/stream_end/g' \
	-e 's/\broom_5\b/small_hill/g' \
	-e 's/\broom_6\b/lost_in_the_forest/g' \
	-e 's/\broom_7\b/grate_gully/g' \
	-e 's/\broom_8\b/below_the_grate/g' \
	-e 's/\broom_9\b/crawling_over_cobbles/g' \
	-e 's/\broom_10\b/debris_room/g' \
	-e 's/\broom_11\b/low_room/g' \
	-e 's/\broom_12\b/log_chasm_room/g' \
	-e 's/\broom_13\b/rope_to_part_2/g' \
	-e 's/\broom_14\b/part_2_room/g' \
	-e 's/\broom_15\b/secret_hiding_place/g' \
	-e 's/\broom_16\b/habitat_cave/g' \
	-e 's/\broom_17\b/twee_chamber/g' \
	-e 's/\broom_18\b/avante_garde_room/g' \
	-e 's/\broom_19\b/live_space_invaders_room/g' \
	-e 's/\broom_20\b/dead_space_invaders_room/g' \
	-e 's/\broom_21\b/sloping_canyon/g' \
	-e 's/\broom_22\b/splendid_chamber/g' \
	-e 's/\broom_23\b/west_end_of_upper_floor/g' \
	-e 's/\broom_24\b/old_crack/g' \
	-e 's/\broom_25\b/vast_hall_east/g' \
	-e 's/\broom_26\b/hall_of_the_mountain_king/g' \
	-e 's/\broom_27\b/cemented_floor_room/g' \
	-e 's/\broom_28\b/y2_room/g' \
	-e 's/\broom_29\b/window_over_pit/g' \
	-e 's/\broom_30\b/censored_room/g' \
	-e 's/\broom_31\b/recent_rock_fall_cavern/g' \
	-e 's/\broom_32\b/high_dark_passage/g' \
	-e 's/\broom_33\b/bat_cave/g' \
	-e 's/\broom_34\b/hall_of_mists_west_fissure/g' \
	-e 's/\broom_35\b/hall_of_mists_west_end/g' \
	-e 's/\broom_36\b/west_end_of_passage/g' \
	-e 's/\broom_37\b/east_end_of_hall/g' \
	-e 's/\broom_38\b/small_low_cavern/g' \
	-e 's/\broom_39\b/batmobile/g' \
	-e 's/\broom_40\b/batcave_exit_tunnel/g' \
	-e 's/\broom_41\b/heart_of_gotham/g' \
	-e 's/\broom_42\b/outside_le_chat_noir/g' \
	-e 's/\broom_43\b/inside_le_chat_noir/g' \
	-e 's/\broom_44\b/sophisticated_parser_cave/g' \
	-e 's/\broom_45\b/swear_box/g' \
	-e 's/\broom_46\b/outside_art_gallery/g' \
	-e 's/\broom_47\b/outside_jewllers_shop/g' \
	-e 's/\broom_48\b/outside_gotham_museum/g' \
	-e 's/\broom_49\b/outside_gotham_library/g' \
	-e 's/\broom_50\b/outside_gotham_bank/g' \
	-e 's/\broom_51\b/inside_library/g' \
	-e 's/\broom_52\b/inside_art_gallery/g' \
	-e 's/\broom_53\b/study_area/g' \
	-e 's/\broom_54\b/inside_gotham_museum/g' \
	-e 's/\broom_55\b/inside_jewellers_shop/g' \
	-e 's/\broom_56\b/inside_gotham_bank/g' \
	-e 's/\broom_57\b/outside_gotham_infirmary/g' \
	-e 's/\broom_58\b/gotham_infirmary_foyer/g' \
	-e 's/\broom_59\b/outside_gotham_police_station/g' \
	-e 's/\broom_60\b/inside_gotham_police_station/g' \
	-e 's/\broom_61\b/behind_gotham_police_station/g' \
	-e 's/\broom_62\b/gotham_police_station_roof/g' \
	\
	-e 's/\bgame_flag_11\b/yesno_bull_roared/g' \
	-e 's/\bgame_flag_12\b/total_dead_space_invaders_and_yesno_gotham_theft/g' \
	-e 's/\bgame_flag_13\b/space_invaders_position_and_that_man_status/g' \
	-e 's/\b\(game_flag_1[45]\b.*\)/\1 ; unused/g' \
	-e 's/\b\(game_flag_2[1345]\b.*\)/\1 ; unused/g' \
	-e 's/\bgame_flag_16\b/yesno_silver_sold/g' \
	-e 's/\bgame_flag_17\b/yesno_moon_crystal_sold/g' \
	-e 's/\bgame_flag_18\b/wellie_house_door_status/g' \
	-e 's/\bgame_flag_19\b/yesno_got_booted/g' \
	-e 's/\bgame_flag_20\b/yesno_entered_batmobile/g' \
	-e 's/\bgame_flag_22\b/game_progress/g' \
	-e 's/\bgame_flag_26\b/yesno_done_part_1/g' \
	-e 's/\bgame_flag_27\b/yesno_rope_cut/g' \
	\
	-e 's/\b\(countdown_location_description_dark.*\)/\1 ; unused/' \
	\
	-e 's/\bobject_2_penn\b/object_2_penny/g' \
	-e 's/\bobject_3_bunc\b/object_3_keys/g' \
	-e 's/\bobject_6_bott\b/object_6_bottle/g' \
	-e 's/\bobject_7_well\b/object_7_wellies/g' \
	-e 's/\bobject_19_silv\b/object_19_silver/g' \
	-e 's/\bobject_22_tabl\b/object_22_table/g' \
	-e 's/\bobject_29_gobl\b/object_29_goblet/g' \
	-e 's/\bobject_30_pack\b/object_30_packet/g' \
	-e 's/\bobject_32_tiar\b/object_32_tiara/g' \
	-e 's/\bobject_33_valv\b/object_33_valve/g' \
	-e 's/\bobject_38_pict\b/object_38_pictures/g' \
	-e 's/\bobject_42_pell\b/object_42_pellet/g' \
	-e 's/\bobject_45_bott\b/object_45_bottle/g' \
	\
	-e 's/\bobject_1\b/object_1_bull/g' \
	-e 's/\bobject_9\b/object_9_bull/g' \
	-e 's/\bobject_10\b/object_10_grate_locked/g' \
	-e 's/\bobject_11\b/object_11_grate_open/g' \
	-e 's/\bobject_14\b/object_14_songbird/g' \
	-e 's/\bobject_17\b/object_17_log/g' \
	-e 's/\bobject_18\b/object_18_log_over_chasm/g' \
	-e 's/\bobject_20\b/object_20_python/g' \
	-e 's/\bobject_24\b/object_24_hint/g' \
	-e 's/\bobject_25\b/object_25_cord/g' \
	-e 's/\bobject_26\b/object_26_that_man_has_left/g' \
	-e 's/\bobject_27\b/object_27_red_button/g' \
	-e 's/\bobject_28\b/object_28_troll/g' \
	-e 's/\bobject_31\b/object_31_parser/g' \
	-e 's/\bobject_34\b/object_34_ladder/g' \
	-e 's/\bobject_35\b/object_35_searchlight/g' \
	-e 's/\bobject_36\b/object_36_desks/g' \
	-e 's/\bobject_43\b/object_43_art_critiquette/g' \
	-e 's/\bobject_44\b/object_44_hippies/g'
}

if [ -z "$1" ]
then modify
else modify -i "$1"
fi
