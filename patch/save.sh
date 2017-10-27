#!/bin/sh

cd part1 || exit 1

NAME="code.txp"

if diff -q "$NAME" ../patch > /dev/null
then
    echo "Failed: no differences to save"
    exit 1
fi

if [ -z "$1" ]
then
    cat <<EOF
Usage: $0 <patch-name>

Save a patch
EOF
    exit 2
fi

PATCH_NAME="$( printf "../patch/%03d-$1.patch" $( ls ../patch/*.patch | wc -l ) )"

diff -Naur "../patch/$NAME" "$NAME" > "$PATCH_NAME"

cp -a "$NAME" ../patch || exit 4
