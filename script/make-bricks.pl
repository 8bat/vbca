#!/usr/bin/perl
#
# Generate a semi-random brick pattern for room 1
#
# The pattern gets darker towards the bottom (simulating dirt kicked up from the ground)
# ... and darker still towards the bottom-right (because of the bottom-right pixel in the original)

use warnings;
use strict;

my $make_full_svg = 0;

print <<END
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg viewBox="0 0 64 24" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g>
      <rect fill="#000000" stroke="none" x="0" y="0" width="64" height="24" />
END
    if $make_full_svg;

foreach my $y ( 0..12 ) {
    foreach my $x ( 0..16 ) {
        my $h = 28 + 10 * rand()**2;
        my $s = 23 + 10 * rand()**2;
        my $l = 34 + 10 * rand()**2;
        if ( $y > 7 ) {
            $l -= ( $y - 7 ) * 5;
            if ( $x > 12 ) {
                $l -= ( $x - 12 ) * 4;
            }
        }

        printf(
            qq{      <rect x="%.2f" y="%.2f" fill="hsl(%.2f,%.2f%%,%.2f%%)" width="3.5" height="1.5" />\n},
            $x*4 - ($y%2)*2,
            $y*2 - 0.5,
            $h,
            $s,
            $l
        );
    }
}
print <<END
  </g>
</svg>
END
    if $make_full_svg;
