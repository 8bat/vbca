.PHONY: clean default

INKER_DIR=../the_inker
TXTPAWS_DIR=../../converters/txtpaws
NGPAWS_DIR=../converters/ngPAWS

PART1_SOURCE=source/part1/spec.txt

default: part1
	@echo
	@echo "	Now go to file://$(shell pwd)/part1/index.html"
	@echo

clean:
	rm -rf part1

images: ${PART1_SOURCE}
	${INKER_DIR}/script/the_inker.pl --out=$@ $^

#
# Build process:
# 1. translate UnQuill output to txtpaws format
# 2. translate txtpaws format to ngPAWS format
# 3. translate ngPAWS format to JavaScript
# 4. copy static files into place
#

# UnQuill to txtpaws:
part1/code.txp: ${PART1_SOURCE}
	${INKER_DIR}/script/the_translator.pl --out=part1 --images=hires $^

# txtpaws to ngPAWS:
part1/code.sce: part1/code.txp
	cd part1 && ${TXTPAWS_DIR}/src/txtpaws -uk -CLEAN -QUIET code.txp > txtpaws.log

# ngPAWS to JavaScript:
part1/code.js: part1/code.sce
	NGPAWS_LIBPATH=${NGPAWS_DIR} ${NGPAWS_DIR}/ngpc $^ > part1/ngpaws.log

# copy static files:
part1/%.js: ${NGPAWS_DIR}/%.js
	cp -a $^ $@
part1/%.css: ${NGPAWS_DIR}/%.css
	cp -a $^ $@
part1/%.html: ${NGPAWS_DIR}/%.html
	cp -a $^ $@

# combine:
part1: part1/code.js part1/index.html part1/jquery.js part1/buzz.js part1/css.css
