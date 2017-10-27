#!/bin/sh

cd part1 || exit 1

for PATCH in ../patch/*.patch
do
    patch --quiet -p0 < "$PATCH" || exit 2
done
