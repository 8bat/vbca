#!/usr/bin/perl

use warnings;
use strict;

my @lines_7_8 = (
    q{l 50,-65 l 70,-25 l 70,10 l 45,70},
    q{l 25,-45 l 70,-25 l 70,5 l 50,35},
    q{l 40,-55 l 55,-35 l 45,-10 h 35 l 40,30 l 35,35},
    q{l -20,-20 l -50,-15 l -80,5 l -45,45},
);

my @lines_6_8 = (
    q{l 45,-55 l 60,-20 l 60,5 l 35,60},
    q{l 20,-40 l 60,-20 l 60,5 l 45,30},
    q{l 35,-45 l 45,-30 l 40,-10 h 30 l 35,25 l 30,30},
    q{l -15,-15 l -45,-15 l -70,5 l -35,40},
);

my @lines_4_8 = (
    q{l 30,-35 l 40,-15 l 40,5 l 25,40},
    q{l 15,-25 l 40,-15 l 40,5 l 30,20},
    q{l 25,-30 l 30,-20 l 25,-5 h 20 l 25,15 l 20,20},
    q{l -10,-10 l -30,-10 l -45,5 l -25,25},
);

my @lines_3_8 = (
    q{l 20,-30 l 30,-10 l 30,5 l 20,30},
    q{l 10,-20 l 30,-10 h 30 l 20,15},
    q{l 15,-25 l 25,-15 l 20,-5 h 15 l 15,15 l 15,15},
    q{l -10,-10 l -20,-5 h -35 l -20,20},
);

my @curves_7_8 = (
    q{c 0,0 40,-45 50,-60 c 15,-15 40,-20 70,-25 c 25,0 60,0 70,10 c 20,10 45,70 45,70},
    q{c 0,0 35,-45 45,-50 c 10,-10 40,-30 50,-35 c 15,-5 30,-10 45,-10 c 10,0 25,0 35,0 c 10,0 35,20 45,25 c 10,5 30,30 30,30},
    q{c 0,-10 20,-35 25,-45 c 10,-10 55,-25 70,-25 c 20,0 60,0 70,10 c 15,10 25,15 40,30},
    q{c 0,0 -10,-10 -17.5,-17.5 c -10,-10 -40,-15 -50,-15 c -15,0 -65,5 -78.75,8.75 c -15,5 -45,45 -45,45}
);

my @curves_6_8 = map( { my $ret = $_; $ret =~ s/([-0-9.]+)/sprintf("%d",$1*6\/7)/ge; $ret } @curves_7_8 );
my @curves_5_8 = map( { my $ret = $_; $ret =~ s/([-0-9.]+)/sprintf("%d",$1*5\/7)/ge; $ret } @curves_7_8 );
my @curves_4_8 = map( { my $ret = $_; $ret =~ s/([-0-9.]+)/sprintf("%d",$1*4\/7)/ge; $ret } @curves_7_8 );
my @curves_3_8 = map( { my $ret = $_; $ret =~ s/([-0-9.]+)/sprintf("%d",$1*3\/7)/ge; $ret } @curves_7_8 );
my @curves_2_8 = map( { my $ret = $_; $ret =~ s/([-0-9.]+)/sprintf("%d",$1*2\/7)/ge; $ret } @curves_7_8 );
my @curves_1_8 = map( { my $ret = $_; $ret =~ s/([-0-9.]+)/sprintf("%d",$1*1\/7)/ge; $ret } @curves_7_8 );

my %patterns = (
    map( { $lines_7_8[$_] => $curves_7_8[$_] } 0..3 ),
    map( { $lines_6_8[$_] => $curves_6_8[$_] } 0..3 ),
    map( { $lines_4_8[$_] => $curves_4_8[$_] } 0..3 ),
    map( { $lines_3_8[$_] => $curves_3_8[$_] } 0..3 ),
);

my $pattern = join( '|', keys %patterns );

my $cobble_number = 1;
while (<>) {
    s/  <path id="line-([0-9]*)" class="line" fill="none" stroke="#([0-9a-f]*)" d="M ([0-9.,]*) ($pattern)" \/>/  <path id="cobble-$cobble_number" fill="none" stroke="#$2" stroke-linecap="round" d="M $3 $patterns{$4}" \/>/ && ++$cobble_number;
    print;
}
