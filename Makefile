.PHONY: clean default platforms

INKER_DIR=../the_inker
UNQUILL_DIR=../converters/unquill-0.11.0
TXTPAWS_DIR=../../converters/txtpaws
NGPAWS_DIR=../converters/ngPAWS

PART1_SNAPSHOT=source/part1/snapshots/spec.sna

PLUGINS=
PLUGINS+=${NGPAWS_DIR}/plugins/backCompat_lib/beep2.jsp
PLUGINS+=${NGPAWS_DIR}/plugins/backCompat_lib/backCompatQuill.jsp
PLUGINS+=${NGPAWS_DIR}/plugins/backCompat_lib/quill_condacts/*.jsp
PLUGINS+=${NGPAWS_DIR}/plugins/hide_anykey_lib/hide_anykey_lib.jsp
PLUGINS+=${NGPAWS_DIR}/plugins/clickableLists_lib/clickableLists_lib.jsp
PLUGINS+=${NGPAWS_DIR}/plugins/delay_lib/delay_lib.jsp
PLUGINS+=${NGPAWS_DIR}/plugins/autosave_lib/autosave.jsp
PLUGINS+=${NGPAWS_DIR}/plugins/autosave_lib/autoload.jsp
PLUGINS+=${NGPAWS_DIR}/plugins/autosave_lib/hasautosave.jsp
PLUGINS+=${NGPAWS_DIR}/plugins/autosave_lib/autoloadatend.jsp
PLUGINS+=${NGPAWS_DIR}/plugins/longdescription_lib/longdescription_lib.jsp
PLUGINS+=${NGPAWS_DIR}/plugins/typeAction_lib/typeAction_lib.jsp
PLUGINS+=${NGPAWS_DIR}/plugins/listSavedGames_lib/listsavedgames.jsp
PLUGINS+=${NGPAWS_DIR}/plugins/turnConditions_lib/*.jsp
PLUGINS+=${NGPAWS_DIR}/plugins/testing/replay_lib/replay.jsp
PLUGINS+=${NGPAWS_DIR}/plugins/testing/isend_lib/*.jsp
PLUGINS+=${NGPAWS_DIR}/plugins/panels/*/*.jsp
PLUGINS+=${NGPAWS_DIR}/plugins/panels/*.jsp
PLUGINS+=${NGPAWS_DIR}/plugins/watchFlag_lib/watchFlag.jsp

SOURCE_IMAGES=$(shell git ls-files hires | sed -e 's/hires\//location/')
DAT_IMAGES=$(SOURCE_IMAGES:%=part1/dat/%)
EMPTY_IMAGES=$(SOURCE_IMAGES:%=part1/%)

default: part1
	@echo
	@echo "	Now go to file://$(shell pwd)/part1/index.html"
	@echo

clean:
	rm -rf part1

images: ${PART1_SNAPSHOT}
	${INKER_DIR}/script/the_inker.pl --out=$@ $^

#
# Build process:
# 1. translate UnQuill output to aws format
# 2. translate txtpaws format to ngPAWS format
# 3. translate ngPAWS format to JavaScript
# 4. copy static files into place
#

# Binary to UnQuill:
src/part1.txt: ${PART1_SNAPSHOT}
	-mkdir src
	${UNQUILL_DIR}/unquill -O$@ -TZ $^

# UnQuill to txtpaws:
src/part1.txp: src/part1.txt
	${INKER_DIR}/script/the_translator.pl --out=src --images=hires $^
	mv src/code.txp $@
	-rm -rf part1
	mkdir part1
	rm -rf src/*.svg src/dat
	./script/process-txp.sh $@

compare:
	-mkdir compare

source/part1/decompiled/%.txt: source/part1/snapshots/%.*
	${UNQUILL_DIR}/unquill -O$@ -TZ $^

compare/%.txp: source/part1/decompiled/%.txt
	${INKER_DIR}/script/the_difference.pl --platform=$* $^
	mv adventure/code.txp $@
	./script/process-txp.sh $@

src/%-part1.txp: source/part1/decompiled/%.txt
	${INKER_DIR}/script/the_translator.pl --platform=$* $^
	mv adventure/code.txp $@
	./script/process-txp.sh $@

compares: compare compare/c64.txp compare/cpc.txp compare/spec+3.txp compare/spec.txp

platforms: src/c64-part1.txp src/cpc-part1.txp src/spec+3-part1.txp src/spec-part1.txp

build:
	mkdir -p build

part1/code.txp: build src/part1.txp
	mkdir -p part1/dat
	cp -a src/part1.txp $@

# txtpaws to ngPAWS:
part1/code.sce: part1/code.txp part1/jsl $(EMPTY_IMAGES) $(DAT_IMAGES)
	cd part1 && ${TXTPAWS_DIR}/src/txtpaws -uk -CLEAN -QUIET code.txp > txtpaws.log

# ngPAWS to JavaScript:
part1/code.js: part1/code.sce
	NGPAWS_LIBPATH=${NGPAWS_DIR} ${NGPAWS_DIR}/compiler/ngpc $^ > part1/ngpaws.log
	cat local/$@ >> $@

# copy static files:
part1/%.js: ${NGPAWS_DIR}/installation_aux_files/%.js
	cp -a $^ $@
part1/%.css: ${NGPAWS_DIR}/installation_aux_files/%.css
	cp -a $^ $@
	cat ${NGPAWS_DIR}/plugins/panels/*.css ${NGPAWS_DIR}/plugins/panels/*/*.css >> $@
	cat local/$@ >> $@
part1/%.html: ${NGPAWS_DIR}/installation_aux_files/%.html
	sed \
		-e 's/<title>.*<\/title>/<title>The Very Big Cave Adventure<\/title>/g' \
		-e 's/<\/head>/<link href="https:\/\/fonts.googleapis.com\/css?family=Fondamento|Ruge+Boogie" rel="stylesheet">\n<link href="backwards-compatibility.css" rel="stylesheet" type="text\/css" \/>\n<\/head>/' \
		-e "s/<div class='wrapper'>/<div class='wrapper paper ink'>/" \
		-e "s/<div class='graphics'>/<div class='color-as-paper graphics'>/" \
		-e 's/<input.*/<table class="input-table"><tr><td class="panels-wrapper unclicked watch-flag-1"><span class="arrow">\&gt;<\/span><div class="panels paper color-as-paper"><div class="condact-info hide-on-click ink" data-condact="INVEN"><\/div><div class="suggestions-wrapper bright ink-white">Suggestions:<div class="suggestions hide-on-click" data-message="2000"><\/div><\/div><a class="navigation back">\&#x2b05;<\/a><a class="navigation forward">\&#x27a1;<\/a><\/div><\/div><td><input aria-live="polite" title="Type instructions in here (some instructions are also clickable)" type="text" class="prompt" \/><\/table>/' \
		$^ > $@

part1/jsl: ${PLUGINS}
	-mkdir $@
	cp -a $^ $@
	sed -i -e 's/30/13/g' $@/longdescription_lib.jsp

part1/dat/location19.svg: hires/19.svg
	cp -a $^ $@
	./script/kill-space-invaders.pl

part1/dat/location%.svg: hires/%.svg
	cp -a $^ $@

part1/location%.svg: hires/%.svg
	touch $@

# combine:
part1: part1/code.js part1/index.html part1/jquery.js part1/buzz.js part1/css.css part1/backwards-compatibility.css $(DEST_IMAGES)
	cp -a local/part1/dat/* part1/dat/
