#!/usr/bin/perl

use warnings;
use strict;

use File::Slurp;

my $original = read_file('hires/19.svg');

my $fade = <<END
  <rect id="fade-1" fill="#000000" stroke="#000000" x="RECT_X" y="RECT_Y" width="330" height="375">
    <animate attributeType="XML" attributeName="fill-opacity" from="0" to="1" dur="0.25s" begin="0s" fill="freeze" />
  </rect>
  <path id="bang-1" stroke="#ffffff" d="M PATH_X,PATH_Y l 120,120 m 40,0 v -120 m 160,0 l -120,120 m 0,60 h 120m 0,180 l -120,-120 m -40,0 v 120 m -160,0 l 120,-120 m 0,-60 h -120">
    <animate attributeType="XML" attributeName="stroke-opacity" from="0" to="1" dur="0.25s" begin="0s" fill="freeze" />
    <animate attributeType="XML" attributeName="stroke-opacity" from="1" to="0" dur="1s" begin="0.25s" fill="freeze" />
  </path>

END
;

foreach my $n ( 1..8 ) {

    my $modified = $original;

    my ( $rect_x, $rect_y );
    if ( $n < 5 ) {
        $rect_y = 30;
        $rect_x = 550 * ($n-1) + 120;
    } else {
        $rect_y = 430;
        $rect_x = 550 * ($n-5) + 400;
    }

    my ( $path_x, $path_y ) = ( $rect_x+5, $rect_y+5 );

    foreach my $n ( 1..($n-1) ) {
        $modified =~ s/\n *<path id="invader-$n".*\n//;
    }

    $modified =~ s/<\/svg>/$fade<\/svg>/;
    $modified =~ s/RECT_X/$rect_x/;
    $modified =~ s/RECT_Y/$rect_y/;
    $modified =~ s/PATH_X/$path_x/;
    $modified =~ s/PATH_Y/$path_y/;
    write_file( "part1/dat/location19-$n.svg", $modified );

}
