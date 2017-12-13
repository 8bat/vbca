// This file is (C) Carlos Sanchez 2014, released under the MIT license


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////// GLOBAL VARIABLES AND CONSTANTS ///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// CONSTANTS 
var VOCABULARY_ID = 0;
var VOCABULARY_WORD = 1;
var VOCABULARY_TYPE = 2;

var WORDTYPE_VERB = 0;
var WORDTYPE_NOUN = 1
var WORDTYPE_ADJECT = 2;
var WORDTYPE_ADVERB = 3;
var WORDTYPE_PRONOUN = 4;
var WORDTYPE_CONJUNCTION = 5;
var WORDTYPE_PREPOSITION = 6;

var TIMER_MILLISECONDS  = 40;

var RESOURCE_TYPE_IMG = 1;
var RESOURCE_TYPE_SND = 2;

var PROCESS_RESPONSE = 0;
var PROCESS_DESCRIPTION = 1;
var PROCESS_TURN = 2;

var DIV_TEXT_SCROLL_STEP = 40;


// Aux
var SET_VALUE = 255; // Value assigned by SET condact
var EMPTY_WORD = 255; // Value for word types when no match is found (as for  sentences without adjective or name)
var MAX_WORD_LENGHT = 10;  // Number of characters considered per word
var FLAG_COUNT = 256;  // Number of flags
var NUM_CONNECTION_VERBS = 14; // Number of verbs used as connection, from 0 to N - 1
var NUM_CONVERTIBLE_NOUNS = 20;
var NUM_PROPER_NOUNS = 50; // Number of proper nouns, can't be used as pronoun reference
var EMPTY_OBJECT = 255; // To remark there is no object when the action requires a objno parameter
var NO_EXIT = 255;  // If an exit does not exist, its value is this value
var MAX_CHANNELS = 17; // Number of SFX channels
var RESOURCES_DIR='dat/';


//Attributes
var ATTR_LIGHT=0;			// Object produces light
var ATTR_WEARABLE=1;		// Object is wearable
var ATTR_CONTAINER=2;       // Object is a container
var ATTR_NPC=3;             // Object is actually an NPC
var ATTR_CONCEALED = 4; /// Present but not visible
var ATTR_EDIBLE = 5;   /// Can be eaten
var ATTR_DRINKABLE=6;
var ATTR_ENTERABLE = 7;
var ATTR_FEMALE = 8;
var ATTR_LOCKABLE = 9;
var ATTR_LOCKED = 10;
var ATTR_MALE = 11;
var ATTR_NEUTER=12;
var ATTR_OPENABLE =13;
var ATTR_OPEN=14;
var ATTR_PLURALNAME = 15;
var ATTR_TRANSPARENT=16;
var ATTR_SCENERY=17;
var ATTR_SUPPORTER = 18;
var ATTR_SWITCHABLE=19;
var ATTR_ON  =20;
var ATTR_STATIC  =21;



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////// INTERNAL STRINGS ///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// General messages & strings
var STR_NEWLINE = '<br />';
var STR_PROMPT_START = '<span class="feedback">&gt; ';
var STR_PROMPT_END = '</span>';
var STR_RAMSAVE_FILENAME = 'RAMSAVE_SAVEGAME';
var STR_SAVEGAME_PREFIX = 'ngpaws_savegame_';



// Runtime error messages
var STR_WRONG_SYSMESS = 'WARNING: System message requested does not exist.'; 
var STR_WRONG_LOCATION = 'WARNING: Location requested does not exist.'; 
var STR_WRONG_MESSAGE = 'WARNING: Message requested does not exist.'; 
var STR_WRONG_PROCESS = 'WARNING: Process requested does not exist.' 
var STR_RAMLOAD_ERROR= 'WARNING: You can\'t restore game as it has not yet been saved.'; 
var STR_RUNTIME_VERSION  = 'ngPAWS runtime (C) 2014 Carlos Sanchez.  Released under {URL|http://www.opensource.org/licenses/MIT| MIT license}.\nBuzz sound libray (C) Jay Salvat. Released under the {URL|http://www.opensource.org/licenses/MIT| MIT license} \n jQuery (C) jQuery Foundation. Released under the {URL|https://jquery.org/license/| MIT license}.';
var STR_TRANSCRIPT = 'To copy the transcript to your clipboard, press Ctrl+C, then press Enter';

var STR_INVALID_TAG_SEQUENCE = 'Invalid tag sequence: ';
var STR_INVALID_TAG_SEQUENCE_EMPTY = 'Invalid tag sequence.';
var STR_INVALID_TAG_SEQUENCE_BADPARAMS = 'Invalid tag sequence: bad parameters.';
var STR_INVALID_TAG_SEQUENCE_BADTAG = 'Invalid tag sequence: unknown tag.';
var STR_BADIE = 'You are using a very old version of Internet Explorer. Some features of this product won\'t be avaliable, and other may not work properly. For a better experience please upgrade your browser or install some other one like Firefox, Chrome or Opera.\n\nIt\'s up to you to continue but be warned your experience may be affected.';
var STR_INVALID_OBJECT = 'WARNING: Trying to access object that does not exist'


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////     FLAGS     ///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var FLAG_LIGHT = 0;
var FLAG_OBJECTS_CARRIED_COUNT = 1;
var FLAG_AUTODEC2 = 2; 
var FLAG_AUTODEC3 = 3;
var FLAG_AUTODEC4 = 4;
var FLAG_AUTODEC5 = 5;
var FLAG_AUTODEC6 = 6;
var FLAG_AUTODEC7 = 7;
var FLAG_AUTODEC8 = 8;
var FLAG_AUTODEC9 = 9;
var FLAG_AUTODEC10 = 10;
var FLAG_ESCAPE = 11;
var FLAG_PARSER_SETTINGS = 12;
var FLAG_PICTURE_SETTINGS = 29
var FLAG_SCORE = 30;
var FLAG_TURNS_LOW = 31;
var FLAG_TURNS_HIGH = 32;
var FLAG_VERB = 33;
var FLAG_NOUN1 =34;
var FLAG_ADJECT1 = 35;
var FLAG_ADVERB = 36;
var FLAG_MAXOBJECTS_CARRIED = 37;
var FLAG_LOCATION = 38;
var FLAG_TOPLINE = 39;   // deprecated
var FLAG_MODE = 40;  // deprecated
var FLAG_PROTECT = 41;   // deprecated
var FLAG_PROMPT = 42; 
var FLAG_PREP = 43;
var FLAG_NOUN2 = 44;
var FLAG_ADJECT2 = 45;
var FLAG_PRONOUN = 46;
var FLAG_PRONOUN_ADJECT = 47;
var FLAG_TIMEOUT_LENGTH = 48;
var FLAG_TIMEOUT_SETTINGS = 49; 
var FLAG_DOALL_LOC = 50;
var FLAG_REFERRED_OBJECT = 51;
var FLAG_MAXWEIGHT_CARRIED = 52;
var FLAG_OBJECT_LIST_FORMAT = 53;
var FLAG_REFERRED_OBJECT_LOCATION = 54;
var FLAG_REFERRED_OBJECT_WEIGHT = 55;
var FLAG_REFERRED_OBJECT_LOW_ATTRIBUTES = 56;
var FLAG_REFERRED_OBJECT_HIGH_ATTRIBUTES = 57;
var FLAG_EXPANSION1 = 58;
var FLAG_EXPANSION2 = 59;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////// SPECIAL LOCATIONS ///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var LOCATION_WORN = 253;
var LOCATION_CARRIED = 254;
var LOCATION_NONCREATED = 252;
var LOCATION_HERE = 255;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////  SYSTEM MESSAGES  ///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



var SYSMESS_ISDARK = 0;
var SYSMESS_YOUCANSEE = 1;
var SYSMESS_PROMPT0 = 2;
var SYSMESS_PROMPT1 = 3;
var SYSMESS_PROMPT2 = 4
var SYSMESS_PROMPT3= 5;
var SYSMESS_IDONTUNDERSTAND = 6;
var SYSMESS_WRONGDIRECTION = 7
var SYSMESS_CANTDOTHAT = 8;
var SYSMESS_YOUARECARRYING = 9;
var SYSMESS_WORN = 10;
var SYSMESS_CARRYING_NOTHING = 11;
var SYSMESS_AREYOUSURE = 12;
var SYSMESS_PLAYAGAIN = 13;
var SYSMESS_FAREWELL = 14;
var SYSMESS_OK = 15;
var SYSMESS_PRESSANYKEY = 16;
var SYSMESS_TURNS_START = 17;
var SYSMESS_TURNS_CONTINUE = 18;
var SYSMESS_TURNS_PLURAL = 19;
var SYSMESS_TURNS_END = 20;
var SYSMESS_SCORE_START= 21;
var SYSMESS_SCORE_END =22;
var SYSMESS_YOURENOTWEARINGTHAT = 23;
var SYSMESS_YOUAREALREADYWEARINGTHAT = 24;
var SYSMESS_YOUALREADYHAVEOBJECT = 25;
var SYSMESS_CANTSEETHAT = 26;
var SYSMESS_CANTCARRYANYMORE = 27;
var SYSMESS_YOUDONTHAVETHAT = 28;
var SYSMESS_YOUAREALREADYWAERINGOBJECT = 29;
var SYSMESS_YES = 30;
var SYSMESS_NO = 31;
var SYSMESS_MORE = 32;
var SYSMESS_CARET = 33;
var SYSMESS_TIMEOUT=35;
var SYSMESS_YOUTAKEOBJECT = 36;
var SYSMESS_YOUWEAROBJECT = 37;
var SYSMESS_YOUREMOVEOBJECT = 38;
var SYSMESS_YOUDROPOBJECT = 39;
var SYSMESS_YOUCANTWEAROBJECT = 40;
var SYSMESS_YOUCANTREMOVEOBJECT = 41;
var SYSMESS_CANTREMOVE_TOOMANYOBJECTS = 42;
var SYSMESS_WEIGHSTOOMUCH = 43;
var SYSMESS_YOUPUTOBJECTIN = 44;
var SYSMESS_YOUCANTTAKEOBJECTOUTOF = 45;
var SYSMESS_LISTSEPARATOR = 46;
var SYSMESS_LISTLASTSEPARATOR = 47;
var SYSMESS_LISTEND = 48;
var SYSMESS_YOUDONTHAVEOBJECT = 49;
var SYSMESS_YOUARENOTWEARINGOBJECT = 50;
var SYSMESS_PUTINTAKEOUTTERMINATION = 51;
var SYSMESS_THATISNOTIN = 52;
var SYSMESS_EMPTYOBJECTLIST = 53;
var SYSMESS_FILENOTFOUND = 54;
var SYSMESS_CORRUPTFILE = 55;
var SYSMESS_IOFAILURE = 56;
var SYSMESS_DIRECTORYFULL = 57;
var SYSMESS_LOADFILE = 58;
var SYSMESS_FILENOTFOUND = 59;
var SYSMESS_SAVEFILE = 60;
var SYSMESS_SORRY = 61;
var SYSMESS_NONSENSE_SENTENCE = 62;
var SYSMESS_NPCLISTSTART = 63;
var SYSMESS_NPCLISTCONTINUE = 64;
var SYSMESS_NPCLISTCONTINUE_PLURAL = 65;
var SYSMESS_INSIDE_YOUCANSEE = 66;
var SYSMESS_OVER_YOUCANSEE = 67;
var SYSMESS_YOUPUTOBJECTON = 68;
var SYSMESS_YOUCANTTAKEOBJECTFROM = 69;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////// GLOBAL VARS //////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Parser vars
var last_player_orders = [];   // Store last player orders, to be able to restore it when pressing arrow up
var last_player_orders_pointer = 0;
var parser_word_found;
var player_order_buffer = '';
var player_order = ''; // Current player order
var previous_verb = EMPTY_WORD;
var previous_noun = EMPTY_WORD;
var previous_adject = EMPTY_WORD;
var pronoun_suffixes = [];


//Settings
var graphicsON = true; 
var soundsON = true; 
var interruptDisabled = false;
var showWarnings = true;

// waitkey commands callback function
var waitkey_callback_function = [];
var waitkey_turn_requested = false;
var waitkey_order_requested = false;

//PAUSE
var inPause=false;
var pauseRemainingTime = 0;



// Transcript
var inTranscript = false;
var transcript = '';


// Block
var inBlock = false;
var unblock_process = null;


// END
var inEND = false;

//QUIT
var inQUIT = false;

//ANYKEY
var inAnykey = false;

//GETKEY
var inGetkey = false;
var getkey_return_flag = null;

// Status flags
var done_flag;
var describe_location_flag;
var in_response;
var success;
var debug_flag = false;
var worn_items_have_weight = false;

// doall control
var doall_flag;
var process_in_doall;
var entry_for_doall	= '';
var current_process;

// rescan control
var rescan_flag;
var rescan_from;


var timeout_progress = 0;
var ramsave_value = null;
var num_objects;

var text_classes = {};

// The flags
var flags = new Array();


// The sound channels
var soundChannels = [];
var soundLoopCount = [];

//The last free object attribute
var nextFreeAttr = 22;

//Autocomplete array
var autocomplete = new Array();
var autocompleteStep = 0;
var autocompleteBaseWord = '';

// Might add a condact some day that converts these to C64 colors or something:
var legacyColors = [ 'black', 'blue', 'red', 'magenta', 'lime', 'cyan', 'yellow', 'white' ];
var legacyColors = [ 'black', 'blue', 'red', 'magenta', 'lime', 'cyan', 'yellow', 'white' ];

// PROCESSES

interruptProcessExists = false;

function pro000()
{
process_restart=true;
pro000_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p000e0000:
	{
 		if (skiprescan('p000e0000')) break p000e0000;
 		if (skipdoall('p000e0000')) break p000e0000;
 		ACChook(0);
		if (done_flag) break pro000_restart;
		{}

	}

	// _ _
	p000e0001:
	{
 		if (skiprescan('p000e0001')) break p000e0001;
 		if (skipdoall('p000e0001')) break p000e0001;
 		ACChook(1);
		if (done_flag) break pro000_restart;
		{}

	}

	// RELOAD _
	p000e0002:
	{
 		if (skiprescan('p000e0002')) break p000e0002;
 		if (skipdoall('p000e0002')) break p000e0002;
 		if (in_response)
		{
			if (!CNDverb(156)) break p000e0002;
 		}
 		ACCautoload();
 		ACCdesc();
		break pro000_restart;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_GAMES _
	p000e0003:
	{
 		if (skiprescan('p000e0003')) break p000e0003;
 		if (skipdoall('p000e0003')) break p000e0003;
 		if (in_response)
		{
			if (!CNDverb(157)) break p000e0003;
 		}
 		ACClistsavedgames();
 		ACCdone();
		break pro000_restart;
		{}

	}

	// TRANSCRIPT _
	p000e0004:
	{
 		if (skiprescan('p000e0004')) break p000e0004;
 		if (skipdoall('p000e0004')) break p000e0004;
 		if (in_response)
		{
			if (!CNDverb(158)) break p000e0004;
 		}
 		ACCtranscript(0);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// REPLAY _
	p000e0005:
	{
 		if (skiprescan('p000e0005')) break p000e0005;
 		if (skipdoall('p000e0005')) break p000e0005;
 		if (in_response)
		{
			if (!CNDverb(159)) break p000e0005;
 		}
 		ACCreplay();
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_N _
	p000e0006:
	{
 		if (skiprescan('p000e0006')) break p000e0006;
 		if (skipdoall('p000e0006')) break p000e0006;
 		if (in_response)
		{
			if (!CNDverb(1)) break p000e0006;
 		}
		if (!CNDpresent(20)) break p000e0006;
 		ACCwriteln(2);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_N _
	p000e0007:
	{
 		if (skiprescan('p000e0007')) break p000e0007;
 		if (skipdoall('p000e0007')) break p000e0007;
 		if (in_response)
		{
			if (!CNDverb(1)) break p000e0007;
 		}
		if (!CNDat(26)) break p000e0007;
 		ACCgoto(27);
 		ACCbackcmd(3);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// VB_S _
	p000e0008:
	{
 		if (skiprescan('p000e0008')) break p000e0008;
 		if (skipdoall('p000e0008')) break p000e0008;
 		if (in_response)
		{
			if (!CNDverb(2)) break p000e0008;
 		}
		if (!CNDpresent(1)) break p000e0008;
 		ACCwriteln(4);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_S _
	p000e0009:
	{
 		if (skiprescan('p000e0009')) break p000e0009;
 		if (skipdoall('p000e0009')) break p000e0009;
 		if (in_response)
		{
			if (!CNDverb(2)) break p000e0009;
 		}
		if (!CNDpresent(9)) break p000e0009;
 		ACCwriteln(5);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_S _
	p000e0010:
	{
 		if (skiprescan('p000e0010')) break p000e0010;
 		if (skipdoall('p000e0010')) break p000e0010;
 		if (in_response)
		{
			if (!CNDverb(2)) break p000e0010;
 		}
		if (!CNDat(2)) break p000e0010;
		if (!CNDabsent(7)) break p000e0010;
 		ACCwriteln(6);
 		ACCpause(100);
 		function anykey00001() 
		{
		ACCrescan('p000e0010');
		}
 		function anykey00000() 
		{
 		ACCwriteln(7);
 		ACCpause(25);
 		waitKey(anykey00001);
		}
 		waitKey(anykey00000);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// VB_S _
	p000e0011:
	{
 		if (skiprescan('p000e0011')) break p000e0011;
 		if (skipdoall('p000e0011')) break p000e0011;
 		if (in_response)
		{
			if (!CNDverb(2)) break p000e0011;
 		}
		if (!CNDat(2)) break p000e0011;
		if (!CNDcarried(7)) break p000e0011;
		if (!CNDnotworn(7)) break p000e0011;
 		ACCwriteln(8);
		{}

	}

	// VB_S _
	p000e0012:
	{
 		if (skiprescan('p000e0012')) break p000e0012;
 		if (skipdoall('p000e0012')) break p000e0012;
 		if (in_response)
		{
			if (!CNDverb(2)) break p000e0012;
 		}
		if (!CNDat(2)) break p000e0012;
		if (!CNDnotworn(7)) break p000e0012;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_S _
	p000e0013:
	{
 		if (skiprescan('p000e0013')) break p000e0013;
 		if (skipdoall('p000e0013')) break p000e0013;
 		if (in_response)
		{
			if (!CNDverb(2)) break p000e0013;
 		}
		if (!CNDat(2)) break p000e0013;
 		ACCgoto(4);
 		ACCbackcmd(9);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// VB_E _
	p000e0014:
	{
 		if (skiprescan('p000e0014')) break p000e0014;
 		if (skipdoall('p000e0014')) break p000e0014;
 		if (in_response)
		{
			if (!CNDverb(3)) break p000e0014;
 		}
		if (!CNDat(28)) break p000e0014;
		if (!CNDlt(22,4)) break p000e0014;
 		ACCwriteln(10);
 		ACCpause(200);
 		function anykey00003() 
		{
 		ACCwriteln(12);
 		ACClet(22,4);
 		ACCdone();
		}
 		function anykey00002() 
		{
 		ACCwriteln(11);
 		ACCpause(55);
 		waitKey(anykey00003);
		}
 		waitKey(anykey00002);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// VB_E _
	p000e0015:
	{
 		if (skiprescan('p000e0015')) break p000e0015;
 		if (skipdoall('p000e0015')) break p000e0015;
 		if (in_response)
		{
			if (!CNDverb(3)) break p000e0015;
 		}
		if (!CNDat(28)) break p000e0015;
		if (!CNDeq(116,255)) break p000e0015;
 		ACCminus(30,10);
 		ACClet(116,50);
		{}

	}

	// VB_E _
	p000e0016:
	{
 		if (skiprescan('p000e0016')) break p000e0016;
 		if (skipdoall('p000e0016')) break p000e0016;
 		if (in_response)
		{
			if (!CNDverb(3)) break p000e0016;
 		}
		if (!CNDat(28)) break p000e0016;
 		ACCgoto(30);
 		ACCbackcmd(13);
 		ACClet(22,5);
 		ACCdestroy(19);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// VB_ENTE _
	p000e0017:
	{
 		if (skiprescan('p000e0017')) break p000e0017;
 		if (skipdoall('p000e0017')) break p000e0017;
 		if (in_response)
		{
			if (!CNDverb(48)) break p000e0017;
 		}
		if (!CNDat(1)) break p000e0017;
 		ACCsynonym(3,255);
		{}

	}

	// VB_E _
	p000e0018:
	{
 		if (skiprescan('p000e0018')) break p000e0018;
 		if (skipdoall('p000e0018')) break p000e0018;
 		if (in_response)
		{
			if (!CNDverb(3)) break p000e0018;
 		}
		if (!CNDat(1)) break p000e0018;
		if (!CNDzero(22)) break p000e0018;
 		ACCwriteln(14);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_E _
	p000e0019:
	{
 		if (skiprescan('p000e0019')) break p000e0019;
 		if (skipdoall('p000e0019')) break p000e0019;
 		if (in_response)
		{
			if (!CNDverb(3)) break p000e0019;
 		}
		if (!CNDat(1)) break p000e0019;
 		ACCgoto(3);
 		ACCbackcmd(15);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// VB_W _
	p000e0020:
	{
 		if (skiprescan('p000e0020')) break p000e0020;
 		if (skipdoall('p000e0020')) break p000e0020;
 		if (in_response)
		{
			if (!CNDverb(4)) break p000e0020;
 		}
		if (!CNDpresent(20)) break p000e0020;
 		ACCwriteln(16);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_W _
	p000e0021:
	{
 		if (skiprescan('p000e0021')) break p000e0021;
 		if (skipdoall('p000e0021')) break p000e0021;
 		if (in_response)
		{
			if (!CNDverb(4)) break p000e0021;
 		}
		if (!CNDat(26)) break p000e0021;
 		ACCgoto(16);
 		ACCbackcmd(17);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// VB_W _
	p000e0022:
	{
 		if (skiprescan('p000e0022')) break p000e0022;
 		if (skipdoall('p000e0022')) break p000e0022;
 		if (in_response)
		{
			if (!CNDverb(4)) break p000e0022;
 		}
		if (!CNDat(12)) break p000e0022;
		if (!CNDabsent(18)) break p000e0022;
 		ACCwriteln(18);
 		ACCpause(100);
 		function anykey00007() 
		{
 		ACCdesc();
		}
 		function anykey00006() 
		{
 		ACCwriteln(20);
 		ACCpause(100);
 		waitKey(anykey00007);
		}
 		function anykey00005() 
		{
 		ACCcls();
 		ACCpause(150);
 		waitKey(anykey00006);
		}
 		function anykey00004() 
		{
 		ACCwriteln(19);
 		ACCpause(25);
 		waitKey(anykey00005);
		}
 		waitKey(anykey00004);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// VB_W _
	p000e0023:
	{
 		if (skiprescan('p000e0023')) break p000e0023;
 		if (skipdoall('p000e0023')) break p000e0023;
 		if (in_response)
		{
			if (!CNDverb(4)) break p000e0023;
 		}
		if (!CNDpresent(18)) break p000e0023;
 		ACCgoto(34);
 		ACCbackcmd(21);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// VB_W _
	p000e0024:
	{
 		if (skiprescan('p000e0024')) break p000e0024;
 		if (skipdoall('p000e0024')) break p000e0024;
 		if (in_response)
		{
			if (!CNDverb(4)) break p000e0024;
 		}
		if (!CNDat(3)) break p000e0024;
 		ACCwriteln(22);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_W _
	p000e0025:
	{
 		if (skiprescan('p000e0025')) break p000e0025;
 		if (skipdoall('p000e0025')) break p000e0025;
 		if (in_response)
		{
			if (!CNDverb(4)) break p000e0025;
 		}
		if (!CNDat(4)) break p000e0025;
		if (!CNDisat(14,252)) break p000e0025;
 		ACCwriteln(23);
 		ACCpause(80);
 		function anykey00009() 
		{
 		ACCwriteln(25);
 		ACCdone();
		}
 		function anykey00008() 
		{
 		ACCwriteln(24);
 		ACCpause(100);
 		waitKey(anykey00009);
		}
 		waitKey(anykey00008);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// VB_W _
	p000e0026:
	{
 		if (skiprescan('p000e0026')) break p000e0026;
 		if (skipdoall('p000e0026')) break p000e0026;
 		if (in_response)
		{
			if (!CNDverb(4)) break p000e0026;
 		}
		if (!CNDat(4)) break p000e0026;
 		ACCwriteln(26);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_W _
	p000e0027:
	{
 		if (skiprescan('p000e0027')) break p000e0027;
 		if (skipdoall('p000e0027')) break p000e0027;
 		if (in_response)
		{
			if (!CNDverb(4)) break p000e0027;
 		}
		if (!CNDat(33)) break p000e0027;
 		ACCwriteln(27);
		{}

	}

	// VB_CLIM _
	p000e0028:
	{
 		if (skiprescan('p000e0028')) break p000e0028;
 		if (skipdoall('p000e0028')) break p000e0028;
 		if (in_response)
		{
			if (!CNDverb(9)) break p000e0028;
 		}
		if (!CNDpresent(34)) break p000e0028;
 		ACCgoto(62);
 		ACCbackcmd(28);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// VB_CLIM _
	p000e0029:
	{
 		if (skiprescan('p000e0029')) break p000e0029;
 		if (skipdoall('p000e0029')) break p000e0029;
 		if (in_response)
		{
			if (!CNDverb(9)) break p000e0029;
 		}
		if (!CNDat(8)) break p000e0029;
 		ACCclear(0);
 		ACCgoto(7);
 		ACCbackcmd(29);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// DESCEND _
	p000e0030:
	{
 		if (skiprescan('p000e0030')) break p000e0030;
 		if (skipdoall('p000e0030')) break p000e0030;
 		if (in_response)
		{
			if (!CNDverb(10)) break p000e0030;
 		}
		if (!CNDeq(22,1)) break p000e0030;
		if (!CNDpresent(11)) break p000e0030;
 		ACCcls();
 		ACCwriteln(30);
 		ACCanykey();
 		function anykey00010() 
		{
 		ACCgoto(8);
 		ACCbackcmd(31);
 		ACCdesc();
		}
 		waitKey(anykey00010);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// DESCEND _
	p000e0031:
	{
 		if (skiprescan('p000e0031')) break p000e0031;
 		if (skipdoall('p000e0031')) break p000e0031;
 		if (in_response)
		{
			if (!CNDverb(10)) break p000e0031;
 		}
		if (!CNDpresent(11)) break p000e0031;
 		ACCset(0);
 		ACCgoto(8);
 		ACCbackcmd(32);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// DESCEND _
	p000e0032:
	{
 		if (skiprescan('p000e0032')) break p000e0032;
 		if (skipdoall('p000e0032')) break p000e0032;
 		if (in_response)
		{
			if (!CNDverb(10)) break p000e0032;
 		}
		if (!CNDpresent(25)) break p000e0032;
 		ACCgoto(13);
 		ACCbackcmd(33);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// INSPECT NN_BUIL
	p000e0033:
	{
 		if (skiprescan('p000e0033')) break p000e0033;
 		if (skipdoall('p000e0033')) break p000e0033;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0033;
			if (!CNDnoun1(14)) break p000e0033;
 		}
		if (!CNDat(1)) break p000e0033;
 		ACCwriteln(34);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INSPECT NN_BOTT
	p000e0034:
	{
 		if (skiprescan('p000e0034')) break p000e0034;
 		if (skipdoall('p000e0034')) break p000e0034;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0034;
			if (!CNDnoun1(18)) break p000e0034;
 		}
 		ACCwriteln(35);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INSPECT NN_BUNC
	p000e0035:
	{
 		if (skiprescan('p000e0035')) break p000e0035;
 		if (skipdoall('p000e0035')) break p000e0035;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0035;
			if (!CNDnoun1(19)) break p000e0035;
 		}
 		ACCwriteln(36);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INSPECT NN_FOOD
	p000e0036:
	{
 		if (skiprescan('p000e0036')) break p000e0036;
 		if (skipdoall('p000e0036')) break p000e0036;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0036;
			if (!CNDnoun1(21)) break p000e0036;
 		}
 		ACCwriteln(37);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INSPECT NN_BOMB
	p000e0037:
	{
 		if (skiprescan('p000e0037')) break p000e0037;
 		if (skipdoall('p000e0037')) break p000e0037;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0037;
			if (!CNDnoun1(24)) break p000e0037;
 		}
 		ACCwriteln(38);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INSPECT NN_CAGE
	p000e0038:
	{
 		if (skiprescan('p000e0038')) break p000e0038;
 		if (skipdoall('p000e0038')) break p000e0038;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0038;
			if (!CNDnoun1(29)) break p000e0038;
 		}
 		ACCwriteln(39);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INSPECT NN_SPRI
	p000e0039:
	{
 		if (skiprescan('p000e0039')) break p000e0039;
 		if (skipdoall('p000e0039')) break p000e0039;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0039;
			if (!CNDnoun1(32)) break p000e0039;
 		}
		if (!CNDat(3)) break p000e0039;
 		ACCcls();
 		ACCwriteln(40);
 		ACClet(28,1);
 		ACCpause(100);
 		function anykey00011() 
		{
 		ACCgoto(1);
 		ACCbackcmd(41);
 		ACCdesc();
		}
 		waitKey(anykey00011);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// INSPECT NN_HOLE
	p000e0040:
	{
 		if (skiprescan('p000e0040')) break p000e0040;
 		if (skipdoall('p000e0040')) break p000e0040;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0040;
			if (!CNDnoun1(166)) break p000e0040;
 		}
		if (!CNDat(27)) break p000e0040;
 		ACCwriteln(42);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INSPECT _
	p000e0041:
	{
 		if (skiprescan('p000e0041')) break p000e0041;
 		if (skipdoall('p000e0041')) break p000e0041;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0041;
 		}
		if (!CNDat(38)) break p000e0041;
 		ACCwriteln(43);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INSPECT NN_CHAR
	p000e0042:
	{
 		if (skiprescan('p000e0042')) break p000e0042;
 		if (skipdoall('p000e0042')) break p000e0042;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0042;
			if (!CNDnoun1(36)) break p000e0042;
 		}
		if (!CNDat(20)) break p000e0042;
 		ACCwriteln(44);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INSPECT NN_SORB
	p000e0043:
	{
 		if (skiprescan('p000e0043')) break p000e0043;
 		if (skipdoall('p000e0043')) break p000e0043;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0043;
			if (!CNDnoun1(39)) break p000e0043;
 		}
		if (!CNDat(10)) break p000e0043;
 		ACCcls();
 		ACCwriteln(45);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INSPECT NN_SORB
	p000e0044:
	{
 		if (skiprescan('p000e0044')) break p000e0044;
 		if (skipdoall('p000e0044')) break p000e0044;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0044;
			if (!CNDnoun1(39)) break p000e0044;
 		}
		if (!CNDat(22)) break p000e0044;
 		ACCwriteln(46);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INSPECT NN_SORB
	p000e0045:
	{
 		if (skiprescan('p000e0045')) break p000e0045;
 		if (skipdoall('p000e0045')) break p000e0045;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0045;
			if (!CNDnoun1(39)) break p000e0045;
 		}
		if (!CNDat(21)) break p000e0045;
		if (!CNDpresent(16)) break p000e0045;
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// INSPECT NN_SORB
	p000e0046:
	{
 		if (skiprescan('p000e0046')) break p000e0046;
 		if (skipdoall('p000e0046')) break p000e0046;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0046;
			if (!CNDnoun1(39)) break p000e0046;
 		}
		if (!CNDat(61)) break p000e0046;
 		ACClet(2,2);
 		ACCcreate(34);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// INSPECT NN_LETT
	p000e0047:
	{
 		if (skiprescan('p000e0047')) break p000e0047;
 		if (skipdoall('p000e0047')) break p000e0047;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0047;
			if (!CNDnoun1(46)) break p000e0047;
 		}
		if (!CNDat(22)) break p000e0047;
 		ACCwriteln(47);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INSPECT NN_CRAC
	p000e0048:
	{
 		if (skiprescan('p000e0048')) break p000e0048;
 		if (skipdoall('p000e0048')) break p000e0048;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0048;
			if (!CNDnoun1(49)) break p000e0048;
 		}
 		ACCwriteln(48);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INSPECT NN_TRIN
	p000e0049:
	{
 		if (skiprescan('p000e0049')) break p000e0049;
 		if (skipdoall('p000e0049')) break p000e0049;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0049;
			if (!CNDnoun1(59)) break p000e0049;
 		}
 		ACCwriteln(49);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INSPECT NN_FENC
	p000e0050:
	{
 		if (skiprescan('p000e0050')) break p000e0050;
 		if (skipdoall('p000e0050')) break p000e0050;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0050;
			if (!CNDnoun1(61)) break p000e0050;
 		}
		if (!CNDat(3)) break p000e0050;
 		ACCwriteln(50);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INSPECT NN_DINO
	p000e0051:
	{
 		if (skiprescan('p000e0051')) break p000e0051;
 		if (skipdoall('p000e0051')) break p000e0051;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0051;
			if (!CNDnoun1(62)) break p000e0051;
 		}
 		ACCwriteln(51);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INSPECT NN_COIN
	p000e0052:
	{
 		if (skiprescan('p000e0052')) break p000e0052;
 		if (skipdoall('p000e0052')) break p000e0052;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0052;
			if (!CNDnoun1(63)) break p000e0052;
 		}
		if (!CNDat(33)) break p000e0052;
 		ACCwriteln(52);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INSPECT NN_PARS
	p000e0053:
	{
 		if (skiprescan('p000e0053')) break p000e0053;
 		if (skipdoall('p000e0053')) break p000e0053;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0053;
			if (!CNDnoun1(73)) break p000e0053;
 		}
		if (!CNDat(44)) break p000e0053;
 		ACCwriteln(53);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INSPECT NN_GOBL
	p000e0054:
	{
 		if (skiprescan('p000e0054')) break p000e0054;
 		if (skipdoall('p000e0054')) break p000e0054;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0054;
			if (!CNDnoun1(74)) break p000e0054;
 		}
		if (!CNDpresent(28)) break p000e0054;
 		ACCwriteln(54);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INSPECT NN_CURT
	p000e0055:
	{
 		if (skiprescan('p000e0055')) break p000e0055;
 		if (skipdoall('p000e0055')) break p000e0055;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0055;
			if (!CNDnoun1(75)) break p000e0055;
 		}
		if (!CNDpresent(28)) break p000e0055;
 		ACCwriteln(55);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INSPECT NN_CURT
	p000e0056:
	{
 		if (skiprescan('p000e0056')) break p000e0056;
 		if (skipdoall('p000e0056')) break p000e0056;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0056;
			if (!CNDnoun1(75)) break p000e0056;
 		}
		if (!CNDat(44)) break p000e0056;
 		ACCwriteln(56);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INSPECT NN_CHAI
	p000e0057:
	{
 		if (skiprescan('p000e0057')) break p000e0057;
 		if (skipdoall('p000e0057')) break p000e0057;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0057;
			if (!CNDnoun1(76)) break p000e0057;
 		}
		if (!CNDpresent(28)) break p000e0057;
 		ACCwriteln(57);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INSPECT NN_SOPH
	p000e0058:
	{
 		if (skiprescan('p000e0058')) break p000e0058;
 		if (skipdoall('p000e0058')) break p000e0058;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0058;
			if (!CNDnoun1(77)) break p000e0058;
 		}
		if (!CNDat(44)) break p000e0058;
 		ACCwriteln(58);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INSPECT NN_TROL
	p000e0059:
	{
 		if (skiprescan('p000e0059')) break p000e0059;
 		if (skipdoall('p000e0059')) break p000e0059;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0059;
			if (!CNDnoun1(78)) break p000e0059;
 		}
		if (!CNDpresent(28)) break p000e0059;
 		ACCwriteln(59);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INSPECT NN_PACK
	p000e0060:
	{
 		if (skiprescan('p000e0060')) break p000e0060;
 		if (skipdoall('p000e0060')) break p000e0060;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0060;
			if (!CNDnoun1(79)) break p000e0060;
 		}
		if (!CNDpresent(30)) break p000e0060;
		if (!CNDpresent(28)) break p000e0060;
		if (!CNDabsent(31)) break p000e0060;
 		ACCcreate(31);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// INSPECT NN_BOOK
	p000e0061:
	{
 		if (skiprescan('p000e0061')) break p000e0061;
 		if (skipdoall('p000e0061')) break p000e0061;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0061;
			if (!CNDnoun1(81)) break p000e0061;
 		}
		if (!CNDat(51)) break p000e0061;
 		ACCwriteln(60);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INSPECT NN_PAIN
	p000e0062:
	{
 		if (skiprescan('p000e0062')) break p000e0062;
 		if (skipdoall('p000e0062')) break p000e0062;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0062;
			if (!CNDnoun1(82)) break p000e0062;
 		}
		if (!CNDat(52)) break p000e0062;
 		ACCwriteln(61);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INSPECT NN_HIPP
	p000e0063:
	{
 		if (skiprescan('p000e0063')) break p000e0063;
 		if (skipdoall('p000e0063')) break p000e0063;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0063;
			if (!CNDnoun1(84)) break p000e0063;
 		}
		if (!CNDat(54)) break p000e0063;
 		ACCwriteln(62);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INSPECT NN_SIDE
	p000e0064:
	{
 		if (skiprescan('p000e0064')) break p000e0064;
 		if (skipdoall('p000e0064')) break p000e0064;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0064;
			if (!CNDnoun1(163)) break p000e0064;
 		}
		if (!CNDat(18)) break p000e0064;
 		ACCwriteln(63);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INSPECT NN_MIRR
	p000e0065:
	{
 		if (skiprescan('p000e0065')) break p000e0065;
 		if (skipdoall('p000e0065')) break p000e0065;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0065;
			if (!CNDnoun1(162)) break p000e0065;
 		}
		if (!CNDat(18)) break p000e0065;
 		ACCwriteln(64);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_ATTA NN_MIRR
	p000e0066:
	{
 		if (skiprescan('p000e0066')) break p000e0066;
 		if (skipdoall('p000e0066')) break p000e0066;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0066;
			if (!CNDnoun1(162)) break p000e0066;
 		}
		if (!CNDat(18)) break p000e0066;
 		ACCwriteln(65);
 		ACCpause(50);
 		function anykey00012() 
		{
 		ACCwriteln(66);
 		ACCdone();
		}
 		waitKey(anykey00012);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// INSPECT NN_BUBB
	p000e0067:
	{
 		if (skiprescan('p000e0067')) break p000e0067;
 		if (skipdoall('p000e0067')) break p000e0067;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0067;
			if (!CNDnoun1(87)) break p000e0067;
 		}
		if (!CNDat(57)) break p000e0067;
 		ACCwriteln(67);
 		ACCpause(10);
 		function anykey00017() 
		{
 		ACCcreate(33);
 		ACCdone();
		}
 		function anykey00016() 
		{
 		ACCwriteln(71);
 		ACCpause(10);
 		waitKey(anykey00017);
		}
 		function anykey00015() 
		{
 		ACCwriteln(70);
 		ACCpause(10);
 		waitKey(anykey00016);
		}
 		function anykey00014() 
		{
 		ACCwriteln(69);
 		ACCpause(10);
 		waitKey(anykey00015);
		}
 		function anykey00013() 
		{
 		ACCwriteln(68);
 		ACCpause(10);
 		waitKey(anykey00014);
		}
 		waitKey(anykey00013);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// VB_GET CANISTER
	p000e0068:
	{
 		if (skiprescan('p000e0068')) break p000e0068;
 		if (skipdoall('p000e0068')) break p000e0068;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0068;
			if (!CNDnoun1(88)) break p000e0068;
 		}
		if (!CNDisat(39,252)) break p000e0068;
 		ACCplace(39,50);
 		ACClet(5,20);
		{}

	}

	// INSPECT CANISTER
	p000e0069:
	{
 		if (skiprescan('p000e0069')) break p000e0069;
 		if (skipdoall('p000e0069')) break p000e0069;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0069;
			if (!CNDnoun1(88)) break p000e0069;
 		}
		if (!CNDpresent(33)) break p000e0069;
 		ACCwriteln(72);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INSPECT NN_BAT
	p000e0070:
	{
 		if (skiprescan('p000e0070')) break p000e0070;
 		if (skipdoall('p000e0070')) break p000e0070;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0070;
			if (!CNDnoun1(89)) break p000e0070;
 		}
		if (!CNDpresent(39)) break p000e0070;
 		ACCwriteln(73);
 		ACCpause(75);
 		function anykey00022() 
		{
 		ACCwriteln(78);
 		ACCdone();
		}
 		function anykey00021() 
		{
 		ACCwriteln(77);
 		ACCpause(75);
 		waitKey(anykey00022);
		}
 		function anykey00020() 
		{
 		ACCwriteln(76);
 		ACCpause(50);
 		waitKey(anykey00021);
		}
 		function anykey00019() 
		{
 		ACCwriteln(75);
 		ACCpause(50);
 		waitKey(anykey00020);
		}
 		function anykey00018() 
		{
 		ACCwriteln(74);
 		ACCpause(50);
 		waitKey(anykey00019);
		}
 		waitKey(anykey00018);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// INSPECT NN_SEAR
	p000e0071:
	{
 		if (skiprescan('p000e0071')) break p000e0071;
 		if (skipdoall('p000e0071')) break p000e0071;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0071;
			if (!CNDnoun1(90)) break p000e0071;
 		}
		if (!CNDat(62)) break p000e0071;
 		ACCwriteln(79);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INSPECT NN_DOG
	p000e0072:
	{
 		if (skiprescan('p000e0072')) break p000e0072;
 		if (skipdoall('p000e0072')) break p000e0072;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0072;
			if (!CNDnoun1(94)) break p000e0072;
 		}
		if (!CNDat(51)) break p000e0072;
 		ACCwriteln(80);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INSPECT NN_BOX
	p000e0073:
	{
 		if (skiprescan('p000e0073')) break p000e0073;
 		if (skipdoall('p000e0073')) break p000e0073;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0073;
			if (!CNDnoun1(98)) break p000e0073;
 		}
		if (!CNDpresent(41)) break p000e0073;
 		ACCwriteln(81);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INSPECT NN_DESK
	p000e0074:
	{
 		if (skiprescan('p000e0074')) break p000e0074;
 		if (skipdoall('p000e0074')) break p000e0074;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0074;
			if (!CNDnoun1(99)) break p000e0074;
 		}
		if (!CNDat(53)) break p000e0074;
		if (!CNDabsent(41)) break p000e0074;
 		ACCcreate(41);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// INSPECT NN_SIGN
	p000e0075:
	{
 		if (skiprescan('p000e0075')) break p000e0075;
 		if (skipdoall('p000e0075')) break p000e0075;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0075;
			if (!CNDnoun1(151)) break p000e0075;
 		}
		if (!CNDat(22)) break p000e0075;
 		ACCwriteln(82);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INSPECT NN_WELL
	p000e0076:
	{
 		if (skiprescan('p000e0076')) break p000e0076;
 		if (skipdoall('p000e0076')) break p000e0076;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0076;
			if (!CNDnoun1(201)) break p000e0076;
 		}
 		ACCwriteln(83);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INSPECT NN_BELT
	p000e0077:
	{
 		if (skiprescan('p000e0077')) break p000e0077;
 		if (skipdoall('p000e0077')) break p000e0077;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0077;
			if (!CNDnoun1(221)) break p000e0077;
 		}
		if (!CNDpresent(40)) break p000e0077;
 		ACCwriteln(84);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INSPECT _
	p000e0078:
	{
 		if (skiprescan('p000e0078')) break p000e0078;
 		if (skipdoall('p000e0078')) break p000e0078;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0078;
 		}
		if (!CNDat(15)) break p000e0078;
 		ACCsynonym(48,255);
		{}

	}

	// INSPECT _
	p000e0079:
	{
 		if (skiprescan('p000e0079')) break p000e0079;
 		if (skipdoall('p000e0079')) break p000e0079;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0079;
 		}
 		ACCwriteln(85);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_DRAW NN_BUIL
	p000e0080:
	{
 		if (skiprescan('p000e0080')) break p000e0080;
 		if (skipdoall('p000e0080')) break p000e0080;
 		if (in_response)
		{
			if (!CNDverb(15)) break p000e0080;
			if (!CNDnoun1(14)) break p000e0080;
 		}
		if (!CNDat(1)) break p000e0080;
		if (!CNDzero(22)) break p000e0080;
 		ACCwriteln(86);
		{}

	}

	// VB_DRAW NN_GRAT
	p000e0081:
	{
 		if (skiprescan('p000e0081')) break p000e0081;
 		if (skipdoall('p000e0081')) break p000e0081;
 		if (in_response)
		{
			if (!CNDverb(15)) break p000e0081;
			if (!CNDnoun1(26)) break p000e0081;
 		}
		if (!CNDpresent(10)) break p000e0081;
		if (!CNDpresent(3)) break p000e0081;
 		ACCswap(10,11);
 		ACCset(19);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// VB_DRAW NN_GRAT
	p000e0082:
	{
 		if (skiprescan('p000e0082')) break p000e0082;
 		if (skipdoall('p000e0082')) break p000e0082;
 		if (in_response)
		{
			if (!CNDverb(15)) break p000e0082;
			if (!CNDnoun1(26)) break p000e0082;
 		}
		if (!CNDpresent(10)) break p000e0082;
		if (!CNDabsent(3)) break p000e0082;
 		ACCwriteln(87);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_DRAW NN_AIRL
	p000e0083:
	{
 		if (skiprescan('p000e0083')) break p000e0083;
 		if (skipdoall('p000e0083')) break p000e0083;
 		if (in_response)
		{
			if (!CNDverb(15)) break p000e0083;
			if (!CNDnoun1(37)) break p000e0083;
 		}
		if (!CNDat(20)) break p000e0083;
		if (!CNDzero(17)) break p000e0083;
		if (!CNDabsent(15)) break p000e0083;
 		ACCcreate(15);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// VB_DRAW NN_LETT
	p000e0084:
	{
 		if (skiprescan('p000e0084')) break p000e0084;
 		if (skipdoall('p000e0084')) break p000e0084;
 		if (in_response)
		{
			if (!CNDverb(15)) break p000e0084;
			if (!CNDnoun1(46)) break p000e0084;
 		}
		if (!CNDat(22)) break p000e0084;
		if (!CNDnotcarr(23)) break p000e0084;
		if (!CNDcarried(3)) break p000e0084;
 		ACCwriteln(88);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_DRAW NN_LETT
	p000e0085:
	{
 		if (skiprescan('p000e0085')) break p000e0085;
 		if (skipdoall('p000e0085')) break p000e0085;
 		if (in_response)
		{
			if (!CNDverb(15)) break p000e0085;
			if (!CNDnoun1(46)) break p000e0085;
 		}
		if (!CNDat(22)) break p000e0085;
		if (!CNDcarried(23)) break p000e0085;
 		ACCcreate(25);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// VB_DRAW NN_CAN
	p000e0086:
	{
 		if (skiprescan('p000e0086')) break p000e0086;
 		if (skipdoall('p000e0086')) break p000e0086;
 		if (in_response)
		{
			if (!CNDverb(15)) break p000e0086;
			if (!CNDnoun1(53)) break p000e0086;
 		}
		if (!CNDpresent(21)) break p000e0086;
 		ACCwriteln(89);
 		ACClet(28,5);
 		ACCpause(10);
 		function anykey00023() 
		{
		ACCrescan('p000e0086');
		}
 		waitKey(anykey00023);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// VB_DRAW NN_CAN
	p000e0087:
	{
 		if (skiprescan('p000e0087')) break p000e0087;
 		if (skipdoall('p000e0087')) break p000e0087;
 		if (in_response)
		{
			if (!CNDverb(15)) break p000e0087;
			if (!CNDnoun1(53)) break p000e0087;
 		}
		if (!CNDpresent(21)) break p000e0087;
		if (!CNDpresent(14)) break p000e0087;
 		ACCwriteln(90);
		{}

	}

	// VB_DRAW NN_CAN
	p000e0088:
	{
 		if (skiprescan('p000e0088')) break p000e0088;
 		if (skipdoall('p000e0088')) break p000e0088;
 		if (in_response)
		{
			if (!CNDverb(15)) break p000e0088;
			if (!CNDnoun1(53)) break p000e0088;
 		}
		if (!CNDpresent(21)) break p000e0088;
		if (!CNDabsent(14)) break p000e0088;
 		ACCwriteln(91);
 		ACCcreate(14);
 		ACCpause(50);
 		function anykey00024() 
		{
		ACCrescan('p000e0088');
		}
 		waitKey(anykey00024);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// VB_DRAW NN_CAN
	p000e0089:
	{
 		if (skiprescan('p000e0089')) break p000e0089;
 		if (skipdoall('p000e0089')) break p000e0089;
 		if (in_response)
		{
			if (!CNDverb(15)) break p000e0089;
			if (!CNDnoun1(53)) break p000e0089;
 		}
		if (!CNDpresent(21)) break p000e0089;
 		ACCwriteln(92);
 		ACCcreate(14);
		{}

	}

	// VB_DRAW NN_CAN
	p000e0090:
	{
 		if (skiprescan('p000e0090')) break p000e0090;
 		if (skipdoall('p000e0090')) break p000e0090;
 		if (in_response)
		{
			if (!CNDverb(15)) break p000e0090;
			if (!CNDnoun1(53)) break p000e0090;
 		}
		if (!CNDpresent(20)) break p000e0090;
		if (!CNDpresent(21)) break p000e0090;
 		ACCpause(50);
 		function anykey00026() 
		{
 		ACCwriteln(94);
 		ACCdestroy(20);
		ACCrescan('p000e0090');
		}
 		function anykey00025() 
		{
 		ACCwriteln(93);
 		ACCpause(100);
 		waitKey(anykey00026);
		}
 		waitKey(anykey00025);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// VB_DRAW NN_CUPB
	p000e0091:
	{
 		if (skiprescan('p000e0091')) break p000e0091;
 		if (skipdoall('p000e0091')) break p000e0091;
 		if (in_response)
		{
			if (!CNDverb(15)) break p000e0091;
			if (!CNDnoun1(57)) break p000e0091;
 		}
		if (!CNDat(16)) break p000e0091;
 		ACCwriteln(95);
		{}

	}

	// VB_DRAW NN_CUPB
	p000e0092:
	{
 		if (skiprescan('p000e0092')) break p000e0092;
 		if (skipdoall('p000e0092')) break p000e0092;
 		if (in_response)
		{
			if (!CNDverb(15)) break p000e0092;
			if (!CNDnoun1(57)) break p000e0092;
 		}
		if (!CNDat(18)) break p000e0092;
		if (!CNDisat(23,252)) break p000e0092;
 		ACCcreate(23);
 		ACCcreate(24);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// VB_DRAW CANISTER
	p000e0093:
	{
 		if (skiprescan('p000e0093')) break p000e0093;
 		if (skipdoall('p000e0093')) break p000e0093;
 		if (in_response)
		{
			if (!CNDverb(15)) break p000e0093;
			if (!CNDnoun1(88)) break p000e0093;
 		}
		if (!CNDat(52)) break p000e0093;
		if (!CNDpresent(33)) break p000e0093;
		if (!CNDle(5,5)) break p000e0093;
 		ACCwriteln(96);
 		ACClet(6,16);
 		ACCminus(1,1);
 		ACCcreate(38);
 		ACCget(38);
		if (!success) break pro000_restart;
 		ACCanykey();
 		function anykey00028() 
		{
 		ACCdesc();
		}
 		function anykey00027() 
		{
 		ACCgoto(41);
 		ACCnoback();
 		ACClet(113,100);
 		ACClet(28,8);
 		ACCpause(5);
 		waitKey(anykey00028);
		}
 		waitKey(anykey00027);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// VB_DRAW CANISTER
	p000e0094:
	{
 		if (skiprescan('p000e0094')) break p000e0094;
 		if (skipdoall('p000e0094')) break p000e0094;
 		if (in_response)
		{
			if (!CNDverb(15)) break p000e0094;
			if (!CNDnoun1(88)) break p000e0094;
 		}
		if (!CNDpresent(33)) break p000e0094;
 		ACCwriteln(97);
		{}

	}

	// VB_DRAW NN_BOX
	p000e0095:
	{
 		if (skiprescan('p000e0095')) break p000e0095;
 		if (skipdoall('p000e0095')) break p000e0095;
 		if (in_response)
		{
			if (!CNDverb(15)) break p000e0095;
			if (!CNDnoun1(98)) break p000e0095;
 		}
		if (!CNDpresent(41)) break p000e0095;
 		ACCwriteln(98);
 		ACCcreate(42);
		{}

	}

	// VB_NO _
	p000e0096:
	{
 		if (skiprescan('p000e0096')) break p000e0096;
 		if (skipdoall('p000e0096')) break p000e0096;
 		if (in_response)
		{
			if (!CNDverb(17)) break p000e0096;
 		}
		if (!CNDgt(111,1)) break p000e0096;
		if (!CNDpresent(1)) break p000e0096;
 		ACCwriteln(99);
 		ACCpause(90);
 		function anykey00030() 
		{
 		ACCdestroy(1);
 		ACCprompt(70);
		ACCrescan('p000e0096');
		}
 		function anykey00029() 
		{
 		ACCwriteln(100);
 		ACCpause(25);
 		waitKey(anykey00030);
		}
 		waitKey(anykey00029);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// VB_WATE NN_PELL
	p000e0097:
	{
 		if (skiprescan('p000e0097')) break p000e0097;
 		if (skipdoall('p000e0097')) break p000e0097;
 		if (in_response)
		{
			if (!CNDverb(22)) break p000e0097;
			if (!CNDnoun1(112)) break p000e0097;
 		}
		if (!CNDpresent(42)) break p000e0097;
		if (!CNDpresent(45)) break p000e0097;
 		ACCdestroy(42);
 		ACCcreate(43);
 		ACCswap(45,6);
 		ACCwriteln(101);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_YES _
	p000e0098:
	{
 		if (skiprescan('p000e0098')) break p000e0098;
 		if (skipdoall('p000e0098')) break p000e0098;
 		if (in_response)
		{
			if (!CNDverb(23)) break p000e0098;
 		}
		if (!CNDpresent(1)) break p000e0098;
 		ACCwriteln(102);
 		ACCprompt(70);
		{}

	}

	// VB_THRO NN_BOMB
	p000e0099:
	{
 		if (skiprescan('p000e0099')) break p000e0099;
 		if (skipdoall('p000e0099')) break p000e0099;
 		if (in_response)
		{
			if (!CNDverb(25)) break p000e0099;
			if (!CNDnoun1(24)) break p000e0099;
 		}
		if (!CNDpresent(9)) break p000e0099;
		if (!CNDpresent(8)) break p000e0099;
 		ACClet(28,4);
 		ACCpause(8);
 		function anykey00031() 
		{
 		ACCwriteln(103);
 		ACCdestroy(8);
 		ACCdestroy(9);
		ACCrescan('p000e0099');
		}
 		waitKey(anykey00031);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// VB_SPEL NN_TRIN
	p000e0100:
	{
 		if (skiprescan('p000e0100')) break p000e0100;
 		if (skipdoall('p000e0100')) break p000e0100;
 		if (in_response)
		{
			if (!CNDverb(27)) break p000e0100;
			if (!CNDnoun1(59)) break p000e0100;
 		}
 		ACCwriteln(104);
		{}

	}

	// VB_LIGH NN_LAMP
	p000e0101:
	{
 		if (skiprescan('p000e0101')) break p000e0101;
 		if (skipdoall('p000e0101')) break p000e0101;
 		if (in_response)
		{
			if (!CNDverb(28)) break p000e0101;
			if (!CNDnoun1(20)) break p000e0101;
 		}
		if (!CNDpresent(4)) break p000e0101;
 		ACCswap(0,4);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// COMMODORE _
	p000e0102:
	{
 		if (skiprescan('p000e0102')) break p000e0102;
 		if (skipdoall('p000e0102')) break p000e0102;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0102;
 		}
		if (!CNDat(10)) break p000e0102;
 		ACCclear(0);
 		ACClet(28,9);
 		ACCpause(20);
 		function anykey00032() 
		{
 		ACCgoto(3);
 		ACCbackcmd(105);
 		ACCdesc();
		}
 		waitKey(anykey00032);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// COMMODORE _
	p000e0103:
	{
 		if (skiprescan('p000e0103')) break p000e0103;
 		if (skipdoall('p000e0103')) break p000e0103;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0103;
 		}
		if (!CNDat(3)) break p000e0103;
		if (!CNDgt(22,1)) break p000e0103;
 		ACCset(0);
 		ACClet(28,9);
 		ACCpause(20);
 		function anykey00033() 
		{
 		ACCgoto(10);
 		ACCbackcmd(106);
 		ACCcls();
 		ACCdesc();
		}
 		waitKey(anykey00033);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// COMMODORE _
	p000e0104:
	{
 		if (skiprescan('p000e0104')) break p000e0104;
 		if (skipdoall('p000e0104')) break p000e0104;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0104;
 		}
 		ACCwrite(107);
 		ACCpause(80);
 		function anykey00034() 
		{
 		ACCwriteln(108);
 		ACCdone();
		}
 		waitKey(anykey00034);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// VB_SPRI _
	p000e0105:
	{
 		if (skiprescan('p000e0105')) break p000e0105;
 		if (skipdoall('p000e0105')) break p000e0105;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0105;
 		}
		if (!CNDat(3)) break p000e0105;
 		ACCcls();
 		ACCwriteln(109);
 		ACClet(28,1);
 		ACCpause(100);
 		function anykey00035() 
		{
 		ACCgoto(1);
 		ACCbackcmd(110);
 		ACCdesc();
		}
 		waitKey(anykey00035);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// VB_LEFT _
	p000e0106:
	{
 		if (skiprescan('p000e0106')) break p000e0106;
 		if (skipdoall('p000e0106')) break p000e0106;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0106;
 		}
		if (!CNDat(19)) break p000e0106;
		if (!CNDlt(113,9)) break p000e0106;
 		ACCwriteln(111);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_LEFT _
	p000e0107:
	{
 		if (skiprescan('p000e0107')) break p000e0107;
 		if (skipdoall('p000e0107')) break p000e0107;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0107;
 		}
		if (!CNDat(19)) break p000e0107;
 		ACCwriteln(112);
 		ACCminus(113,1);
 		ACClet(5,5);
		{}

	}

	// VB_RIGH _
	p000e0108:
	{
 		if (skiprescan('p000e0108')) break p000e0108;
 		if (skipdoall('p000e0108')) break p000e0108;
 		if (in_response)
		{
			if (!CNDverb(34)) break p000e0108;
 		}
		if (!CNDat(19)) break p000e0108;
		if (!CNDgt(113,11)) break p000e0108;
 		ACCwriteln(113);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_RIGH _
	p000e0109:
	{
 		if (skiprescan('p000e0109')) break p000e0109;
 		if (skipdoall('p000e0109')) break p000e0109;
 		if (in_response)
		{
			if (!CNDverb(34)) break p000e0109;
 		}
		if (!CNDat(19)) break p000e0109;
 		ACCwriteln(114);
 		ACCplus(113,1);
 		ACClet(5,5);
		{}

	}

	// VB_FIRE _
	p000e0110:
	{
 		if (skiprescan('p000e0110')) break p000e0110;
 		if (skipdoall('p000e0110')) break p000e0110;
 		if (in_response)
		{
			if (!CNDverb(35)) break p000e0110;
 		}
		if (!CNDat(19)) break p000e0110;
 		ACCwriteln(115);
 		ACCpause(25);
 		function anykey00036() 
		{
		ACCrescan('p000e0110');
		}
 		waitKey(anykey00036);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// VB_FIRE _
	p000e0111:
	{
 		if (skiprescan('p000e0111')) break p000e0111;
 		if (skipdoall('p000e0111')) break p000e0111;
 		if (in_response)
		{
			if (!CNDverb(35)) break p000e0111;
 		}
		if (!CNDat(19)) break p000e0111;
		if (!CNDzero(5)) break p000e0111;
 		ACClet(5,5);
		{}

	}

	// VB_FIRE _
	p000e0112:
	{
 		if (skiprescan('p000e0112')) break p000e0112;
 		if (skipdoall('p000e0112')) break p000e0112;
 		if (in_response)
		{
			if (!CNDverb(35)) break p000e0112;
 		}
		if (!CNDat(19)) break p000e0112;
		if (!CNDeq(212,0)) break p000e0112;
 		ACCwriteln(116);
 		ACCplus(212,1);
 		ACCextern(117);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_FIRE _
	p000e0113:
	{
 		if (skiprescan('p000e0113')) break p000e0113;
 		if (skipdoall('p000e0113')) break p000e0113;
 		if (in_response)
		{
			if (!CNDverb(35)) break p000e0113;
 		}
		if (!CNDat(19)) break p000e0113;
		if (!CNDchance(50)) break p000e0113;
 		ACCwriteln(118);
 		ACCplus(212,1);
 		ACCextern(119);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_FIRE _
	p000e0114:
	{
 		if (skiprescan('p000e0114')) break p000e0114;
 		if (skipdoall('p000e0114')) break p000e0114;
 		if (in_response)
		{
			if (!CNDverb(35)) break p000e0114;
 		}
		if (!CNDat(19)) break p000e0114;
 		ACCwriteln(120);
		{}

	}

	// VB_DROP NN_ZX81
	p000e0115:
	{
 		if (skiprescan('p000e0115')) break p000e0115;
 		if (skipdoall('p000e0115')) break p000e0115;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0115;
			if (!CNDnoun1(41)) break p000e0115;
 		}
		if (!CNDat(52)) break p000e0115;
 		ACCsynonym(41,255);
		{}

	}

	// VB_ZX81 _
	p000e0116:
	{
 		if (skiprescan('p000e0116')) break p000e0116;
 		if (skipdoall('p000e0116')) break p000e0116;
 		if (in_response)
		{
			if (!CNDverb(41)) break p000e0116;
 		}
		if (!CNDat(52)) break p000e0116;
		if (!CNDcarried(16)) break p000e0116;
		if (!CNDnotzero(27)) break p000e0116;
 		ACCwriteln(121);
 		ACClet(6,16);
 		ACCanykey();
 		function anykey00038() 
		{
 		ACCdesc();
		}
 		function anykey00037() 
		{
 		ACCgoto(41);
 		ACCnoback();
 		ACClet(113,50);
 		ACClet(28,8);
 		ACCpause(5);
 		waitKey(anykey00038);
		}
 		waitKey(anykey00037);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// VB_ATTA NN_BUIL
	p000e0117:
	{
 		if (skiprescan('p000e0117')) break p000e0117;
 		if (skipdoall('p000e0117')) break p000e0117;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0117;
			if (!CNDnoun1(14)) break p000e0117;
 		}
		if (!CNDat(3)) break p000e0117;
 		ACCplus(18,1);
		{}

	}

	// VB_ATTA NN_BUIL
	p000e0118:
	{
 		if (skiprescan('p000e0118')) break p000e0118;
 		if (skipdoall('p000e0118')) break p000e0118;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0118;
			if (!CNDnoun1(14)) break p000e0118;
 		}
		if (!CNDat(3)) break p000e0118;
		if (!CNDeq(18,1)) break p000e0118;
 		ACCwriteln(122);
		{}

	}

	// VB_ATTA NN_BUIL
	p000e0119:
	{
 		if (skiprescan('p000e0119')) break p000e0119;
 		if (skipdoall('p000e0119')) break p000e0119;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0119;
			if (!CNDnoun1(14)) break p000e0119;
 		}
		if (!CNDat(3)) break p000e0119;
		if (!CNDeq(18,2)) break p000e0119;
 		ACCwriteln(123);
		{}

	}

	// VB_ATTA NN_BUIL
	p000e0120:
	{
 		if (skiprescan('p000e0120')) break p000e0120;
 		if (skipdoall('p000e0120')) break p000e0120;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0120;
			if (!CNDnoun1(14)) break p000e0120;
 		}
		if (!CNDat(3)) break p000e0120;
		if (!CNDeq(18,3)) break p000e0120;
 		ACCwriteln(124);
 		ACCpause(250);
 		function anykey00039() 
		{
 		ACCscore();
 		ACCturns();
 		ACCend();
		}
 		waitKey(anykey00039);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// VB_ATTA _
	p000e0121:
	{
 		if (skiprescan('p000e0121')) break p000e0121;
 		if (skipdoall('p000e0121')) break p000e0121;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0121;
 		}
		if (!CNDnotzero(8)) break p000e0121;
 		ACClet(28,21);
 		ACCpause(50);
 		function anykey00040() 
		{
		ACCrescan('p000e0121');
		}
 		waitKey(anykey00040);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// VB_ATTA _
	p000e0122:
	{
 		if (skiprescan('p000e0122')) break p000e0122;
 		if (skipdoall('p000e0122')) break p000e0122;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0122;
 		}
		if (!CNDnotzero(7)) break p000e0122;
 		ACClet(28,21);
 		ACCpause(25);
 		function anykey00041() 
		{
		ACCrescan('p000e0122');
		}
 		waitKey(anykey00041);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// VB_CATC NN_PENN
	p000e0123:
	{
 		if (skiprescan('p000e0123')) break p000e0123;
 		if (skipdoall('p000e0123')) break p000e0123;
 		if (in_response)
		{
			if (!CNDverb(45)) break p000e0123;
			if (!CNDnoun1(16)) break p000e0123;
 		}
		if (!CNDat(1)) break p000e0123;
		if (!CNDpresent(2)) break p000e0123;
 		ACCplace(9,2);
 		ACClet(22,1);
 		ACCdestroy(2);
 		ACCwriteln(125);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_CATC NN_BOTT
	p000e0124:
	{
 		if (skiprescan('p000e0124')) break p000e0124;
 		if (skipdoall('p000e0124')) break p000e0124;
 		if (in_response)
		{
			if (!CNDverb(45)) break p000e0124;
			if (!CNDnoun1(18)) break p000e0124;
 		}
		if (!CNDatgt(0)) break p000e0124;
		if (!CNDatlt(3)) break p000e0124;
		if (!CNDcarried(6)) break p000e0124;
 		ACCswap(6,45);
 		ACCok();
		break pro000_restart;
		{}

	}

	// VB_CATC NN_BOTT
	p000e0125:
	{
 		if (skiprescan('p000e0125')) break p000e0125;
 		if (skipdoall('p000e0125')) break p000e0125;
 		if (in_response)
		{
			if (!CNDverb(45)) break p000e0125;
			if (!CNDnoun1(18)) break p000e0125;
 		}
		if (!CNDcarried(6)) break p000e0125;
 		ACCwriteln(126);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_CATC NN_BOTT
	p000e0126:
	{
 		if (skiprescan('p000e0126')) break p000e0126;
 		if (skipdoall('p000e0126')) break p000e0126;
 		if (in_response)
		{
			if (!CNDverb(45)) break p000e0126;
			if (!CNDnoun1(18)) break p000e0126;
 		}
		if (!CNDcarried(45)) break p000e0126;
 		ACCwriteln(127);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_CATC _
	p000e0127:
	{
 		if (skiprescan('p000e0127')) break p000e0127;
 		if (skipdoall('p000e0127')) break p000e0127;
 		if (in_response)
		{
			if (!CNDverb(45)) break p000e0127;
 		}
 		ACCwriteln(128);
		{}

	}

	// VB_EAT NN_FOOD
	p000e0128:
	{
 		if (skiprescan('p000e0128')) break p000e0128;
 		if (skipdoall('p000e0128')) break p000e0128;
 		if (in_response)
		{
			if (!CNDverb(47)) break p000e0128;
			if (!CNDnoun1(21)) break p000e0128;
 		}
		if (!CNDpresent(5)) break p000e0128;
 		ACCwriteln(129);
 		ACCdestroy(5);
		{}

	}

	// VB_EAT NN_SORB
	p000e0129:
	{
 		if (skiprescan('p000e0129')) break p000e0129;
 		if (skipdoall('p000e0129')) break p000e0129;
 		if (in_response)
		{
			if (!CNDverb(47)) break p000e0129;
			if (!CNDnoun1(39)) break p000e0129;
 		}
		if (!CNDat(22)) break p000e0129;
 		ACCwriteln(130);
		{}

	}

	// VB_ENTE NN_BUIL
	p000e0130:
	{
 		if (skiprescan('p000e0130')) break p000e0130;
 		if (skipdoall('p000e0130')) break p000e0130;
 		if (in_response)
		{
			if (!CNDverb(48)) break p000e0130;
			if (!CNDnoun1(14)) break p000e0130;
 		}
		if (!CNDat(41)) break p000e0130;
 		ACCwriteln(131);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_ENTE NN_CAGE
	p000e0131:
	{
 		if (skiprescan('p000e0131')) break p000e0131;
 		if (skipdoall('p000e0131')) break p000e0131;
 		if (in_response)
		{
			if (!CNDverb(48)) break p000e0131;
			if (!CNDnoun1(29)) break p000e0131;
 		}
		if (!CNDpresent(12)) break p000e0131;
 		ACCwriteln(132);
 		ACCpause(100);
 		function anykey00049() 
		{
 		ACCdesc();
		}
 		function anykey00048() 
		{
 		ACCwriteln(138);
 		ACCpause(100);
 		waitKey(anykey00049);
		}
 		function anykey00047() 
		{
 		ACCwriteln(137);
 		ACCpause(100);
 		waitKey(anykey00048);
		}
 		function anykey00046() 
		{
 		ACCwriteln(136);
 		ACCpause(100);
 		waitKey(anykey00047);
		}
 		function anykey00045() 
		{
 		ACCcls();
 		ACCpause(200);
 		waitKey(anykey00046);
		}
 		function anykey00044() 
		{
 		ACCwriteln(135);
 		ACCpause(200);
 		waitKey(anykey00045);
		}
 		function anykey00043() 
		{
 		ACCwriteln(134);
 		ACCpause(100);
 		waitKey(anykey00044);
		}
 		function anykey00042() 
		{
 		ACCwriteln(133);
 		ACCpause(100);
 		waitKey(anykey00043);
		}
 		waitKey(anykey00042);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// VB_ENTE NN_SPRI
	p000e0132:
	{
 		if (skiprescan('p000e0132')) break p000e0132;
 		if (skipdoall('p000e0132')) break p000e0132;
 		if (in_response)
		{
			if (!CNDverb(48)) break p000e0132;
			if (!CNDnoun1(32)) break p000e0132;
 		}
		if (!CNDat(3)) break p000e0132;
 		ACCcls();
 		ACCwriteln(139);
 		ACClet(28,1);
 		ACCpause(100);
 		function anykey00050() 
		{
 		ACCgoto(1);
 		ACCbackcmd(140);
 		ACCdesc();
		}
 		waitKey(anykey00050);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// VB_ENTE _
	p000e0133:
	{
 		if (skiprescan('p000e0133')) break p000e0133;
 		if (skipdoall('p000e0133')) break p000e0133;
 		if (in_response)
		{
			if (!CNDverb(48)) break p000e0133;
 		}
		if (!CNDat(46)) break p000e0133;
		if (!CNDnotzero(5)) break p000e0133;
		if (!CNDcarried(16)) break p000e0133;
 		ACClet(5,6);
		{}

	}

	// VB_ENTE _
	p000e0134:
	{
 		if (skiprescan('p000e0134')) break p000e0134;
 		if (skipdoall('p000e0134')) break p000e0134;
 		if (in_response)
		{
			if (!CNDverb(48)) break p000e0134;
 		}
		if (!CNDat(46)) break p000e0134;
		if (!CNDnotzero(5)) break p000e0134;
		if (!CNDcarried(33)) break p000e0134;
 		ACClet(5,6);
		{}

	}

	// VB_ENTE _
	p000e0135:
	{
 		if (skiprescan('p000e0135')) break p000e0135;
 		if (skipdoall('p000e0135')) break p000e0135;
 		if (in_response)
		{
			if (!CNDverb(48)) break p000e0135;
 		}
		if (!CNDat(46)) break p000e0135;
		if (!CNDnotzero(5)) break p000e0135;
 		ACCgoto(52);
 		ACCbackcmd(141);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// VB_ENTE _
	p000e0136:
	{
 		if (skiprescan('p000e0136')) break p000e0136;
 		if (skipdoall('p000e0136')) break p000e0136;
 		if (in_response)
		{
			if (!CNDverb(48)) break p000e0136;
 		}
		if (!CNDat(46)) break p000e0136;
 		ACCwriteln(142);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_ENTE _
	p000e0137:
	{
 		if (skiprescan('p000e0137')) break p000e0137;
 		if (skipdoall('p000e0137')) break p000e0137;
 		if (in_response)
		{
			if (!CNDverb(48)) break p000e0137;
 		}
		if (!CNDat(15)) break p000e0137;
 		ACCwriteln(143);
 		ACCpause(150);
 		function anykey00052() 
		{
 		ACCdone();
		}
 		function anykey00051() 
		{
 		ACCwriteln(144);
 		ACCpause(50);
 		waitKey(anykey00052);
		}
 		waitKey(anykey00051);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// VB_ENTE _
	p000e0138:
	{
 		if (skiprescan('p000e0138')) break p000e0138;
 		if (skipdoall('p000e0138')) break p000e0138;
 		if (in_response)
		{
			if (!CNDverb(48)) break p000e0138;
 		}
		if (!CNDat(38)) break p000e0138;
		if (!CNDzero(20)) break p000e0138;
 		ACCclear(0);
 		ACCgoto(39);
 		ACCbackcmd(145);
 		ACCdestroy(26);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// VB_ENTE _
	p000e0139:
	{
 		if (skiprescan('p000e0139')) break p000e0139;
 		if (skipdoall('p000e0139')) break p000e0139;
 		if (in_response)
		{
			if (!CNDverb(48)) break p000e0139;
 		}
		if (!CNDat(38)) break p000e0139;
 		ACCwriteln(146);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_ENTE _
	p000e0140:
	{
 		if (skiprescan('p000e0140')) break p000e0140;
 		if (skipdoall('p000e0140')) break p000e0140;
 		if (in_response)
		{
			if (!CNDverb(48)) break p000e0140;
 		}
 		ACCwriteln(147);
		{}

	}

	// VB_PLUG _
	p000e0141:
	{
 		if (skiprescan('p000e0141')) break p000e0141;
 		if (skipdoall('p000e0141')) break p000e0141;
 		if (in_response)
		{
			if (!CNDverb(50)) break p000e0141;
 		}
 		ACCwriteln(148);
		{}

	}

	// VB_WAVE _
	p000e0142:
	{
 		if (skiprescan('p000e0142')) break p000e0142;
 		if (skipdoall('p000e0142')) break p000e0142;
 		if (in_response)
		{
			if (!CNDverb(54)) break p000e0142;
 		}
		if (!CNDat(29)) break p000e0142;
 		ACCwriteln(149);
		{}

	}

	// VB_WAVE NN_ROD
	p000e0143:
	{
 		if (skiprescan('p000e0143')) break p000e0143;
 		if (skipdoall('p000e0143')) break p000e0143;
 		if (in_response)
		{
			if (!CNDverb(54)) break p000e0143;
			if (!CNDnoun1(30)) break p000e0143;
 		}
		if (!CNDat(12)) break p000e0143;
		if (!CNDcarried(13)) break p000e0143;
 		ACCwriteln(150);
 		ACCdestroy(13);
		{}

	}

	// VB_DRAW NN_CURT
	p000e0144:
	{
 		if (skiprescan('p000e0144')) break p000e0144;
 		if (skipdoall('p000e0144')) break p000e0144;
 		if (in_response)
		{
			if (!CNDverb(15)) break p000e0144;
			if (!CNDnoun1(75)) break p000e0144;
 		}
		if (!CNDpresent(28)) break p000e0144;
 		ACCwriteln(151);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_DRAW NN_CURT
	p000e0145:
	{
 		if (skiprescan('p000e0145')) break p000e0145;
 		if (skipdoall('p000e0145')) break p000e0145;
 		if (in_response)
		{
			if (!CNDverb(15)) break p000e0145;
			if (!CNDnoun1(75)) break p000e0145;
 		}
		if (!CNDat(44)) break p000e0145;
 		ACCwriteln(152);
		{}

	}

	// VB_KISS NN_TRIN
	p000e0146:
	{
 		if (skiprescan('p000e0146')) break p000e0146;
 		if (skipdoall('p000e0146')) break p000e0146;
 		if (in_response)
		{
			if (!CNDverb(60)) break p000e0146;
			if (!CNDnoun1(59)) break p000e0146;
 		}
 		ACCwriteln(153);
 		ACCpause(100);
 		function anykey00054() 
		{
 		ACCpaper(0);
 		ACCcls();
 		ACCborder(0);
 		ACCwriteln(154);
		ACCrescan('p000e0146');
		}
 		function anykey00053() 
		{
 		ACCpaper(3);
 		ACCcls();
 		ACCborder(3);
 		ACCcls();
 		ACCpause(200);
 		waitKey(anykey00054);
		}
 		waitKey(anykey00053);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// VB_PRES NN_BUTT
	p000e0147:
	{
 		if (skiprescan('p000e0147')) break p000e0147;
 		if (skipdoall('p000e0147')) break p000e0147;
 		if (in_response)
		{
			if (!CNDverb(65)) break p000e0147;
			if (!CNDnoun1(66)) break p000e0147;
 		}
		if (!CNDat(39)) break p000e0147;
 		ACCpause(50);
 		function anykey00055() 
		{
 		ACCgoto(40);
 		ACCnoback();
 		ACCdesc();
		}
 		waitKey(anykey00055);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// VB_ATTA NN_TRIN
	p000e0148:
	{
 		if (skiprescan('p000e0148')) break p000e0148;
 		if (skipdoall('p000e0148')) break p000e0148;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0148;
			if (!CNDnoun1(59)) break p000e0148;
 		}
 		ACCcls();
 		ACCpause(50);
 		function anykey00058() 
		{
 		ACCscore();
 		ACCturns();
 		ACCend();
		}
 		function anykey00057() 
		{
 		ACCwriteln(156);
 		ACCpause(250);
 		waitKey(anykey00058);
		}
 		function anykey00056() 
		{
 		ACCwriteln(155);
 		ACCpause(50);
 		waitKey(anykey00057);
		}
 		waitKey(anykey00056);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// VB_FUCK _
	p000e0149:
	{
 		if (skiprescan('p000e0149')) break p000e0149;
 		if (skipdoall('p000e0149')) break p000e0149;
 		if (in_response)
		{
			if (!CNDverb(67)) break p000e0149;
 		}
 		ACCgoto(45);
 		ACCnoback();
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// VB_WASH NN_MOUT
	p000e0150:
	{
 		if (skiprescan('p000e0150')) break p000e0150;
 		if (skipdoall('p000e0150')) break p000e0150;
 		if (in_response)
		{
			if (!CNDverb(68)) break p000e0150;
			if (!CNDnoun1(69)) break p000e0150;
 		}
		if (!CNDat(45)) break p000e0150;
 		ACCgoto(1);
 		ACCnoback();
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// VB_LIFT NN_GYMS
	p000e0151:
	{
 		if (skiprescan('p000e0151')) break p000e0151;
 		if (skipdoall('p000e0151')) break p000e0151;
 		if (in_response)
		{
			if (!CNDverb(71)) break p000e0151;
			if (!CNDnoun1(70)) break p000e0151;
 		}
 		ACCwriteln(157);
		{}

	}

	// VB_LIFT NN_PETT
	p000e0152:
	{
 		if (skiprescan('p000e0152')) break p000e0152;
 		if (skipdoall('p000e0152')) break p000e0152;
 		if (in_response)
		{
			if (!CNDverb(71)) break p000e0152;
			if (!CNDnoun1(72)) break p000e0152;
 		}
 		ACCwriteln(158);
 		ACCpause(100);
 		function anykey00059() 
		{
 		ACCend();
		}
 		waitKey(anykey00059);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// VB_PARS _
	p000e0153:
	{
 		if (skiprescan('p000e0153')) break p000e0153;
 		if (skipdoall('p000e0153')) break p000e0153;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0153;
 		}
		if (!CNDpresent(28)) break p000e0153;
 		ACCwriteln(159);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_GOBL _
	p000e0154:
	{
 		if (skiprescan('p000e0154')) break p000e0154;
 		if (skipdoall('p000e0154')) break p000e0154;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0154;
 		}
		if (!CNDpresent(28)) break p000e0154;
 		ACCwriteln(160);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_CURT _
	p000e0155:
	{
 		if (skiprescan('p000e0155')) break p000e0155;
 		if (skipdoall('p000e0155')) break p000e0155;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0155;
 		}
		if (!CNDpresent(28)) break p000e0155;
 		ACCwriteln(161);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_CHAI _
	p000e0156:
	{
 		if (skiprescan('p000e0156')) break p000e0156;
 		if (skipdoall('p000e0156')) break p000e0156;
 		if (in_response)
		{
			if (!CNDverb(76)) break p000e0156;
 		}
		if (!CNDpresent(28)) break p000e0156;
 		ACCwriteln(162);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_SOPH _
	p000e0157:
	{
 		if (skiprescan('p000e0157')) break p000e0157;
 		if (skipdoall('p000e0157')) break p000e0157;
 		if (in_response)
		{
			if (!CNDverb(77)) break p000e0157;
 		}
		if (!CNDpresent(28)) break p000e0157;
 		ACCwriteln(163);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_TROL _
	p000e0158:
	{
 		if (skiprescan('p000e0158')) break p000e0158;
 		if (skipdoall('p000e0158')) break p000e0158;
 		if (in_response)
		{
			if (!CNDverb(78)) break p000e0158;
 		}
		if (!CNDpresent(28)) break p000e0158;
 		ACCwriteln(164);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_BEHI _
	p000e0159:
	{
 		if (skiprescan('p000e0159')) break p000e0159;
 		if (skipdoall('p000e0159')) break p000e0159;
 		if (in_response)
		{
			if (!CNDverb(80)) break p000e0159;
 		}
		if (!CNDpresent(28)) break p000e0159;
 		ACCwriteln(165);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_SCOR _
	p000e0160:
	{
 		if (skiprescan('p000e0160')) break p000e0160;
 		if (skipdoall('p000e0160')) break p000e0160;
 		if (in_response)
		{
			if (!CNDverb(85)) break p000e0160;
 		}
 		ACCscore();
		{}

	}

	// VB_EXTI NN_LAMP
	p000e0161:
	{
 		if (skiprescan('p000e0161')) break p000e0161;
 		if (skipdoall('p000e0161')) break p000e0161;
 		if (in_response)
		{
			if (!CNDverb(90)) break p000e0161;
			if (!CNDnoun1(20)) break p000e0161;
 		}
 		ACCswap(0,4);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// VB_EXTI NN_SEAR
	p000e0162:
	{
 		if (skiprescan('p000e0162')) break p000e0162;
 		if (skipdoall('p000e0162')) break p000e0162;
 		if (in_response)
		{
			if (!CNDverb(90)) break p000e0162;
			if (!CNDnoun1(90)) break p000e0162;
 		}
		if (!CNDat(62)) break p000e0162;
 		ACCwriteln(166);
		{}

	}

	// VB_EXTI NN_SEAR
	p000e0163:
	{
 		if (skiprescan('p000e0163')) break p000e0163;
 		if (skipdoall('p000e0163')) break p000e0163;
 		if (in_response)
		{
			if (!CNDverb(90)) break p000e0163;
			if (!CNDnoun1(90)) break p000e0163;
 		}
		if (!CNDat(62)) break p000e0163;
		if (!CNDnotzero(6)) break p000e0163;
		if (!CNDnoteq(113,255)) break p000e0163;
 		ACCwriteln(167);
 		ACCplus(6,20);
 		ACCset(113);
		{}

	}

	// VB_BUY NN_NEWS
	p000e0164:
	{
 		if (skiprescan('p000e0164')) break p000e0164;
 		if (skipdoall('p000e0164')) break p000e0164;
 		if (in_response)
		{
			if (!CNDverb(93)) break p000e0164;
			if (!CNDnoun1(92)) break p000e0164;
 		}
		if (!CNDatgt(45)) break p000e0164;
		if (!CNDatlt(51)) break p000e0164;
		if (!CNDnotat(47)) break p000e0164;
		if (!CNDnotat(48)) break p000e0164;
		if (!CNDnotat(49)) break p000e0164;
 		ACCset(19);
 		ACCwriteln(168);
 		ACCanykey();
 		function anykey00061() 
		{
 		ACCgoto(41);
 		ACCnoback();
 		ACCdesc();
		}
 		function anykey00060() 
		{
 		ACClet(28,3);
 		ACCpause(100);
 		waitKey(anykey00061);
		}
 		waitKey(anykey00060);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// VB_DOG _
	p000e0165:
	{
 		if (skiprescan('p000e0165')) break p000e0165;
 		if (skipdoall('p000e0165')) break p000e0165;
 		if (in_response)
		{
			if (!CNDverb(94)) break p000e0165;
 		}
		if (!CNDat(51)) break p000e0165;
 		ACCwriteln(169);
		{}

	}

	// VB_CUT NN_ROPE
	p000e0166:
	{
 		if (skiprescan('p000e0166')) break p000e0166;
 		if (skipdoall('p000e0166')) break p000e0166;
 		if (in_response)
		{
			if (!CNDverb(95)) break p000e0166;
			if (!CNDnoun1(96)) break p000e0166;
 		}
		if (!CNDat(52)) break p000e0166;
		if (!CNDle(5,5)) break p000e0166;
 		ACCset(27);
 		ACClet(5,4);
 		ACCwriteln(170);
		{}

	}

	// VB_GET NN_PENN
	p000e0167:
	{
 		if (skiprescan('p000e0167')) break p000e0167;
 		if (skipdoall('p000e0167')) break p000e0167;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0167;
			if (!CNDnoun1(16)) break p000e0167;
 		}
		if (!CNDpresent(1)) break p000e0167;
		if (!CNDpresent(2)) break p000e0167;
 		ACCwriteln(171);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_GET NN_PENN
	p000e0168:
	{
 		if (skiprescan('p000e0168')) break p000e0168;
 		if (skipdoall('p000e0168')) break p000e0168;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0168;
			if (!CNDnoun1(16)) break p000e0168;
 		}
 		ACCget(2);
		if (!success) break pro000_restart;
 		ACCok();
		break pro000_restart;
		{}

	}

	// VB_GET NN_BOTT
	p000e0169:
	{
 		if (skiprescan('p000e0169')) break p000e0169;
 		if (skipdoall('p000e0169')) break p000e0169;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0169;
			if (!CNDnoun1(18)) break p000e0169;
 		}
		if (!CNDpresent(45)) break p000e0169;
 		ACCget(45);
		if (!success) break pro000_restart;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_GET NN_LAMP
	p000e0170:
	{
 		if (skiprescan('p000e0170')) break p000e0170;
 		if (skipdoall('p000e0170')) break p000e0170;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0170;
			if (!CNDnoun1(20)) break p000e0170;
 		}
		if (!CNDpresent(0)) break p000e0170;
 		ACCget(0);
		if (!success) break pro000_restart;
 		ACCok();
		break pro000_restart;
		{}

	}

	// VB_GET NN_WATE
	p000e0171:
	{
 		if (skiprescan('p000e0171')) break p000e0171;
 		if (skipdoall('p000e0171')) break p000e0171;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0171;
			if (!CNDnoun1(22)) break p000e0171;
 		}
		if (!CNDatgt(0)) break p000e0171;
		if (!CNDatlt(3)) break p000e0171;
		if (!CNDcarried(6)) break p000e0171;
 		ACCswap(6,45);
 		ACCok();
		break pro000_restart;
		{}

	}

	// VB_DRIN NN_WATE
	p000e0172:
	{
 		if (skiprescan('p000e0172')) break p000e0172;
 		if (skipdoall('p000e0172')) break p000e0172;
 		if (in_response)
		{
			if (!CNDverb(161)) break p000e0172;
			if (!CNDnoun1(22)) break p000e0172;
 		}
		if (!CNDcarried(45)) break p000e0172;
 		ACCwriteln(172);
		{}

	}

	// VB_GET NN_CAGE
	p000e0173:
	{
 		if (skiprescan('p000e0173')) break p000e0173;
 		if (skipdoall('p000e0173')) break p000e0173;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0173;
			if (!CNDnoun1(29)) break p000e0173;
 		}
		if (!CNDnotat(3)) break p000e0173;
 		ACCget(12);
		if (!success) break pro000_restart;
 		ACCok();
		break pro000_restart;
		{}

	}

	// VB_GET NN_CRYS
	p000e0174:
	{
 		if (skiprescan('p000e0174')) break p000e0174;
 		if (skipdoall('p000e0174')) break p000e0174;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0174;
			if (!CNDnoun1(38)) break p000e0174;
 		}
		if (!CNDnotat(3)) break p000e0174;
 		ACCget(15);
		if (!success) break pro000_restart;
 		ACCok();
		break pro000_restart;
		{}

	}

	// VB_GET NN_SORB
	p000e0175:
	{
 		if (skiprescan('p000e0175')) break p000e0175;
 		if (skipdoall('p000e0175')) break p000e0175;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0175;
			if (!CNDnoun1(39)) break p000e0175;
 		}
		if (!CNDat(22)) break p000e0175;
 		ACCwriteln(173);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_GET NN_LOG
	p000e0176:
	{
 		if (skiprescan('p000e0176')) break p000e0176;
 		if (skipdoall('p000e0176')) break p000e0176;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0176;
			if (!CNDnoun1(43)) break p000e0176;
 		}
		if (!CNDpresent(17)) break p000e0176;
		if (!CNDisnotgettable(17)) break p000e0176;
 		ACCwriteln(174);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_GET NN_LOG
	p000e0177:
	{
 		if (skiprescan('p000e0177')) break p000e0177;
 		if (skipdoall('p000e0177')) break p000e0177;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0177;
			if (!CNDnoun1(43)) break p000e0177;
 		}
		if (!CNDpresent(17)) break p000e0177;
		if (!CNDisgettable(17)) break p000e0177;
 		ACCget(17);
		if (!success) break pro000_restart;
 		ACCdestroy(18);
 		ACCok();
		break pro000_restart;
		{}

	}

	// VB_GET NN_BIRD
	p000e0178:
	{
 		if (skiprescan('p000e0178')) break p000e0178;
 		if (skipdoall('p000e0178')) break p000e0178;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0178;
			if (!CNDnoun1(44)) break p000e0178;
 		}
 		ACCbeep2(100,25);
 		function anykey00063() 
		{
 		ACCdone();
		}
 		function anykey00062() 
		{
 		ACCwriteln(175);
 		ACCbeep2(100,20);
 		waitKey(anykey00063);
		}
 		waitKey(anykey00062);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// VB_GET NN_BARS
	p000e0179:
	{
 		if (skiprescan('p000e0179')) break p000e0179;
 		if (skipdoall('p000e0179')) break p000e0179;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0179;
			if (!CNDnoun1(52)) break p000e0179;
 		}
		if (!CNDnotat(3)) break p000e0179;
 		ACCget(19);
		if (!success) break pro000_restart;
 		ACCok();
		break pro000_restart;
		{}

	}

	// VB_GET NN_TABL
	p000e0180:
	{
 		if (skiprescan('p000e0180')) break p000e0180;
 		if (skipdoall('p000e0180')) break p000e0180;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0180;
			if (!CNDnoun1(55)) break p000e0180;
 		}
		if (!CNDnotat(3)) break p000e0180;
 		ACCget(22);
		if (!success) break pro000_restart;
 		ACCok();
		break pro000_restart;
		{}

	}

	// VB_GET NN_PARS
	p000e0181:
	{
 		if (skiprescan('p000e0181')) break p000e0181;
 		if (skipdoall('p000e0181')) break p000e0181;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0181;
			if (!CNDnoun1(73)) break p000e0181;
 		}
		if (!CNDpresent(28)) break p000e0181;
 		ACCwriteln(176);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_GET NN_GOBL
	p000e0182:
	{
 		if (skiprescan('p000e0182')) break p000e0182;
 		if (skipdoall('p000e0182')) break p000e0182;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0182;
			if (!CNDnoun1(74)) break p000e0182;
 		}
		if (!CNDpresent(28)) break p000e0182;
 		ACCwriteln(177);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_GET NN_GOBL
	p000e0183:
	{
 		if (skiprescan('p000e0183')) break p000e0183;
 		if (skipdoall('p000e0183')) break p000e0183;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0183;
			if (!CNDnoun1(74)) break p000e0183;
 		}
		if (!CNDnotat(3)) break p000e0183;
 		ACCget(29);
		if (!success) break pro000_restart;
 		ACCok();
		break pro000_restart;
		{}

	}

	// VB_GET NN_SOPH
	p000e0184:
	{
 		if (skiprescan('p000e0184')) break p000e0184;
 		if (skipdoall('p000e0184')) break p000e0184;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0184;
			if (!CNDnoun1(77)) break p000e0184;
 		}
		if (!CNDpresent(28)) break p000e0184;
 		ACCwriteln(178);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_GET NN_BOOK
	p000e0185:
	{
 		if (skiprescan('p000e0185')) break p000e0185;
 		if (skipdoall('p000e0185')) break p000e0185;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0185;
			if (!CNDnoun1(81)) break p000e0185;
 		}
		if (!CNDat(51)) break p000e0185;
 		ACCwriteln(179);
 		ACCset(19);
 		ACCanykey();
 		function anykey00065() 
		{
 		ACCgoto(49);
 		ACCnoback();
 		ACCdesc();
		}
 		function anykey00064() 
		{
 		ACClet(28,3);
 		ACCpause(100);
 		waitKey(anykey00065);
		}
 		waitKey(anykey00064);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// VB_GET NN_PAIN
	p000e0186:
	{
 		if (skiprescan('p000e0186')) break p000e0186;
 		if (skipdoall('p000e0186')) break p000e0186;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0186;
			if (!CNDnoun1(82)) break p000e0186;
 		}
		if (!CNDat(52)) break p000e0186;
 		ACCset(112);
		{}

	}

	// VB_GET NN_PAIN
	p000e0187:
	{
 		if (skiprescan('p000e0187')) break p000e0187;
 		if (skipdoall('p000e0187')) break p000e0187;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0187;
			if (!CNDnoun1(82)) break p000e0187;
 		}
		if (!CNDnotat(3)) break p000e0187;
		if (!CNDnotat(52)) break p000e0187;
		if (!CNDpresent(38)) break p000e0187;
		if (!CNDnotcarr(38)) break p000e0187;
 		ACCminus(1,1);
 		ACCget(38);
		if (!success) break pro000_restart;
 		ACCok();
		break pro000_restart;
		{}

	}

	// VB_GET NN_HIPP
	p000e0188:
	{
 		if (skiprescan('p000e0188')) break p000e0188;
 		if (skipdoall('p000e0188')) break p000e0188;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0188;
			if (!CNDnoun1(84)) break p000e0188;
 		}
		if (!CNDat(54)) break p000e0188;
 		ACCwriteln(180);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_GET NN_HIPP
	p000e0189:
	{
 		if (skiprescan('p000e0189')) break p000e0189;
 		if (skipdoall('p000e0189')) break p000e0189;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0189;
			if (!CNDnoun1(84)) break p000e0189;
 		}
		if (!CNDat(33)) break p000e0189;
 		ACCwriteln(181);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_GET NN_BUBB
	p000e0190:
	{
 		if (skiprescan('p000e0190')) break p000e0190;
 		if (skipdoall('p000e0190')) break p000e0190;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0190;
			if (!CNDnoun1(87)) break p000e0190;
 		}
		if (!CNDat(57)) break p000e0190;
 		ACCwriteln(182);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_GET NN_DOG
	p000e0191:
	{
 		if (skiprescan('p000e0191')) break p000e0191;
 		if (skipdoall('p000e0191')) break p000e0191;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0191;
			if (!CNDnoun1(94)) break p000e0191;
 		}
		if (!CNDat(51)) break p000e0191;
 		ACCwriteln(183);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_GET NN_FILE
	p000e0192:
	{
 		if (skiprescan('p000e0192')) break p000e0192;
 		if (skipdoall('p000e0192')) break p000e0192;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0192;
			if (!CNDnoun1(97)) break p000e0192;
 		}
		if (!CNDat(54)) break p000e0192;
 		ACCset(112);
		{}

	}

	// VB_WEAR NN_TIAR
	p000e0193:
	{
 		if (skiprescan('p000e0193')) break p000e0193;
 		if (skipdoall('p000e0193')) break p000e0193;
 		if (in_response)
		{
			if (!CNDverb(103)) break p000e0193;
			if (!CNDnoun1(220)) break p000e0193;
 		}
		if (!CNDat(55)) break p000e0193;
 		ACCset(112);
		{}

	}

	// VB_GET NN_TIAR
	p000e0194:
	{
 		if (skiprescan('p000e0194')) break p000e0194;
 		if (skipdoall('p000e0194')) break p000e0194;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0194;
			if (!CNDnoun1(220)) break p000e0194;
 		}
		if (!CNDat(55)) break p000e0194;
 		ACCset(112);
		{}

	}

	// VB_GET NN_CAGE
	p000e0195:
	{
 		if (skiprescan('p000e0195')) break p000e0195;
 		if (skipdoall('p000e0195')) break p000e0195;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0195;
			if (!CNDnoun1(29)) break p000e0195;
 		}
		if (!CNDat(3)) break p000e0195;
		if (!CNDpresent(12)) break p000e0195;
		if (!CNDnotcarr(12)) break p000e0195;
 		ACCwriteln(184);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_GET NN_CRYS
	p000e0196:
	{
 		if (skiprescan('p000e0196')) break p000e0196;
 		if (skipdoall('p000e0196')) break p000e0196;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0196;
			if (!CNDnoun1(38)) break p000e0196;
 		}
		if (!CNDat(3)) break p000e0196;
		if (!CNDpresent(15)) break p000e0196;
		if (!CNDnotcarr(15)) break p000e0196;
 		ACCwriteln(185);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_GET NN_BARS
	p000e0197:
	{
 		if (skiprescan('p000e0197')) break p000e0197;
 		if (skipdoall('p000e0197')) break p000e0197;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0197;
			if (!CNDnoun1(52)) break p000e0197;
 		}
		if (!CNDat(3)) break p000e0197;
		if (!CNDpresent(19)) break p000e0197;
		if (!CNDnotcarr(19)) break p000e0197;
 		ACCwriteln(186);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_GET NN_TABL
	p000e0198:
	{
 		if (skiprescan('p000e0198')) break p000e0198;
 		if (skipdoall('p000e0198')) break p000e0198;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0198;
			if (!CNDnoun1(55)) break p000e0198;
 		}
		if (!CNDat(3)) break p000e0198;
		if (!CNDpresent(22)) break p000e0198;
		if (!CNDnotcarr(22)) break p000e0198;
 		ACCwriteln(187);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_GET NN_GOBL
	p000e0199:
	{
 		if (skiprescan('p000e0199')) break p000e0199;
 		if (skipdoall('p000e0199')) break p000e0199;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0199;
			if (!CNDnoun1(74)) break p000e0199;
 		}
		if (!CNDat(3)) break p000e0199;
		if (!CNDpresent(29)) break p000e0199;
		if (!CNDnotcarr(29)) break p000e0199;
 		ACCwriteln(188);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_GET NN_PAIN
	p000e0200:
	{
 		if (skiprescan('p000e0200')) break p000e0200;
 		if (skipdoall('p000e0200')) break p000e0200;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0200;
			if (!CNDnoun1(82)) break p000e0200;
 		}
		if (!CNDat(3)) break p000e0200;
		if (!CNDpresent(38)) break p000e0200;
		if (!CNDnotcarr(38)) break p000e0200;
 		ACCwriteln(189);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_GET NN_FILE
	p000e0201:
	{
 		if (skiprescan('p000e0201')) break p000e0201;
 		if (skipdoall('p000e0201')) break p000e0201;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0201;
			if (!CNDnoun1(97)) break p000e0201;
 		}
		if (!CNDat(3)) break p000e0201;
		if (!CNDpresent(37)) break p000e0201;
		if (!CNDnotcarr(37)) break p000e0201;
 		ACCwriteln(190);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_GET NN_TIAR
	p000e0202:
	{
 		if (skiprescan('p000e0202')) break p000e0202;
 		if (skipdoall('p000e0202')) break p000e0202;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0202;
			if (!CNDnoun1(220)) break p000e0202;
 		}
		if (!CNDat(3)) break p000e0202;
		if (!CNDpresent(32)) break p000e0202;
		if (!CNDnotcarr(32)) break p000e0202;
 		ACCwriteln(191);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_GET NN_ART
	p000e0203:
	{
 		if (skiprescan('p000e0203')) break p000e0203;
 		if (skipdoall('p000e0203')) break p000e0203;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0203;
			if (!CNDnoun1(160)) break p000e0203;
 		}
		if (!CNDpresent(43)) break p000e0203;
 		ACCwriteln(192);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_GET _
	p000e0204:
	{
 		if (skiprescan('p000e0204')) break p000e0204;
 		if (skipdoall('p000e0204')) break p000e0204;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0204;
 		}
 		ACCautog();
		if (!success) break pro000_restart;
 		ACCok();
		break pro000_restart;
		{}

	}

	// VB_DROP NN_PENN
	p000e0205:
	{
 		if (skiprescan('p000e0205')) break p000e0205;
 		if (skipdoall('p000e0205')) break p000e0205;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0205;
			if (!CNDnoun1(16)) break p000e0205;
 		}
		if (!CNDat(1)) break p000e0205;
		if (!CNDpresent(2)) break p000e0205;
 		ACCplace(9,2);
 		ACClet(22,1);
 		ACCdestroy(2);
 		ACCwriteln(193);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_DROP NN_PENN
	p000e0206:
	{
 		if (skiprescan('p000e0206')) break p000e0206;
 		if (skipdoall('p000e0206')) break p000e0206;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0206;
			if (!CNDnoun1(16)) break p000e0206;
 		}
		if (!CNDat(1)) break p000e0206;
		if (!CNDabsent(2)) break p000e0206;
		if (!CNDzero(22)) break p000e0206;
 		ACCwriteln(194);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_DROP NN_BOTT
	p000e0207:
	{
 		if (skiprescan('p000e0207')) break p000e0207;
 		if (skipdoall('p000e0207')) break p000e0207;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0207;
			if (!CNDnoun1(18)) break p000e0207;
 		}
		if (!CNDpresent(45)) break p000e0207;
 		ACCdrop(45);
		if (!success) break pro000_restart;
 		ACCok();
		break pro000_restart;
		{}

	}

	// VB_DROP NN_LAMP
	p000e0208:
	{
 		if (skiprescan('p000e0208')) break p000e0208;
 		if (skipdoall('p000e0208')) break p000e0208;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0208;
			if (!CNDnoun1(20)) break p000e0208;
 		}
		if (!CNDpresent(0)) break p000e0208;
 		ACCdrop(0);
		if (!success) break pro000_restart;
 		ACCok();
		break pro000_restart;
		{}

	}

	// VB_DROP NN_FOOD
	p000e0209:
	{
 		if (skiprescan('p000e0209')) break p000e0209;
 		if (skipdoall('p000e0209')) break p000e0209;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0209;
			if (!CNDnoun1(21)) break p000e0209;
 		}
		if (!CNDpresent(14)) break p000e0209;
		if (!CNDpresent(5)) break p000e0209;
 		ACCwriteln(195);
 		ACCdestroy(14);
 		ACCdestroy(5);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_DROP NN_BOMB
	p000e0210:
	{
 		if (skiprescan('p000e0210')) break p000e0210;
 		if (skipdoall('p000e0210')) break p000e0210;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0210;
			if (!CNDnoun1(24)) break p000e0210;
 		}
		if (!CNDpresent(8)) break p000e0210;
 		ACCink(4);
 		ACClet(28,4);
 		ACCpause(8);
 		function anykey00071() 
		{
 		ACCend();
		}
 		function anykey00070() 
		{
 		ACCwriteln(199);
 		ACCpause(200);
 		waitKey(anykey00071);
		}
 		function anykey00069() 
		{
 		ACCwriteln(198);
 		ACCpause(200);
 		waitKey(anykey00070);
		}
 		function anykey00068() 
		{
 		ACCwriteln(197);
 		ACCpause(200);
 		waitKey(anykey00069);
		}
 		function anykey00067() 
		{
 		ACCcls();
 		ACCpause(200);
 		waitKey(anykey00068);
		}
 		function anykey00066() 
		{
 		ACCwriteln(196);
 		ACCpause(100);
 		waitKey(anykey00067);
		}
 		waitKey(anykey00066);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// VB_DROP NN_ROD
	p000e0211:
	{
 		if (skiprescan('p000e0211')) break p000e0211;
 		if (skipdoall('p000e0211')) break p000e0211;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0211;
			if (!CNDnoun1(30)) break p000e0211;
 		}
		if (!CNDcarried(13)) break p000e0211;
		if (!CNDat(3)) break p000e0211;
 		ACCwriteln(200);
 		ACCautod();
		if (!success) break pro000_restart;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_DROP NN_CAGE
	p000e0212:
	{
 		if (skiprescan('p000e0212')) break p000e0212;
 		if (skipdoall('p000e0212')) break p000e0212;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0212;
			if (!CNDnoun1(29)) break p000e0212;
 		}
		if (!CNDnotat(3)) break p000e0212;
 		ACCdrop(12);
		if (!success) break pro000_restart;
 		ACCok();
		break pro000_restart;
		{}

	}

	// VB_DROP NN_CAGE
	p000e0213:
	{
 		if (skiprescan('p000e0213')) break p000e0213;
 		if (skipdoall('p000e0213')) break p000e0213;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0213;
			if (!CNDnoun1(29)) break p000e0213;
 		}
		if (!CNDcarried(12)) break p000e0213;
 		ACCwriteln(201);
 		ACCwriteln(202);
 		ACCdrop(12);
		if (!success) break pro000_restart;
 		ACCplus(30,1);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_DROP NN_CRYS
	p000e0214:
	{
 		if (skiprescan('p000e0214')) break p000e0214;
 		if (skipdoall('p000e0214')) break p000e0214;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0214;
			if (!CNDnoun1(38)) break p000e0214;
 		}
		if (!CNDnotat(3)) break p000e0214;
 		ACCdrop(15);
		if (!success) break pro000_restart;
 		ACCok();
		break pro000_restart;
		{}

	}

	// VB_DROP NN_CRYS
	p000e0215:
	{
 		if (skiprescan('p000e0215')) break p000e0215;
 		if (skipdoall('p000e0215')) break p000e0215;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0215;
			if (!CNDnoun1(38)) break p000e0215;
 		}
		if (!CNDcarried(15)) break p000e0215;
 		ACCdrop(15);
		if (!success) break pro000_restart;
 		ACCwriteln(203);
 		ACCwriteln(204);
 		ACCplus(30,30);
 		ACCset(17);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_DROP NN_LOG
	p000e0216:
	{
 		if (skiprescan('p000e0216')) break p000e0216;
 		if (skipdoall('p000e0216')) break p000e0216;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0216;
			if (!CNDnoun1(43)) break p000e0216;
 		}
		if (!CNDat(7)) break p000e0216;
		if (!CNDcarried(17)) break p000e0216;
 		ACCdrop(17);
		if (!success) break pro000_restart;
 		ACCwriteln(205);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_DROP NN_LOG
	p000e0217:
	{
 		if (skiprescan('p000e0217')) break p000e0217;
 		if (skipdoall('p000e0217')) break p000e0217;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0217;
			if (!CNDnoun1(43)) break p000e0217;
 		}
		if (!CNDcarried(17)) break p000e0217;
		if (!CNDat(12)) break p000e0217;
 		ACCcreate(18);
 		ACCdrop(17);
		if (!success) break pro000_restart;
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// VB_DROP NN_BARS
	p000e0218:
	{
 		if (skiprescan('p000e0218')) break p000e0218;
 		if (skipdoall('p000e0218')) break p000e0218;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0218;
			if (!CNDnoun1(52)) break p000e0218;
 		}
		if (!CNDnotat(3)) break p000e0218;
 		ACCdrop(19);
		if (!success) break pro000_restart;
 		ACCok();
		break pro000_restart;
		{}

	}

	// VB_DROP NN_BARS
	p000e0219:
	{
 		if (skiprescan('p000e0219')) break p000e0219;
 		if (skipdoall('p000e0219')) break p000e0219;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0219;
			if (!CNDnoun1(52)) break p000e0219;
 		}
		if (!CNDcarried(19)) break p000e0219;
 		ACCdrop(19);
		if (!success) break pro000_restart;
 		ACCwriteln(206);
 		ACCwriteln(207);
 		ACCplus(30,10);
 		ACCset(116);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_DROP NN_TABL
	p000e0220:
	{
 		if (skiprescan('p000e0220')) break p000e0220;
 		if (skipdoall('p000e0220')) break p000e0220;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0220;
			if (!CNDnoun1(55)) break p000e0220;
 		}
		if (!CNDnotat(3)) break p000e0220;
 		ACCdrop(22);
		if (!success) break pro000_restart;
 		ACCok();
		break pro000_restart;
		{}

	}

	// VB_DROP NN_TABL
	p000e0221:
	{
 		if (skiprescan('p000e0221')) break p000e0221;
 		if (skipdoall('p000e0221')) break p000e0221;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0221;
			if (!CNDnoun1(55)) break p000e0221;
 		}
		if (!CNDcarried(22)) break p000e0221;
 		ACCdrop(22);
		if (!success) break pro000_restart;
 		ACCwriteln(208);
 		ACCwriteln(209);
 		ACCplus(30,10);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_DROP NN_GOBL
	p000e0222:
	{
 		if (skiprescan('p000e0222')) break p000e0222;
 		if (skipdoall('p000e0222')) break p000e0222;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0222;
			if (!CNDnoun1(74)) break p000e0222;
 		}
		if (!CNDnotat(3)) break p000e0222;
 		ACCdrop(29);
		if (!success) break pro000_restart;
 		ACCok();
		break pro000_restart;
		{}

	}

	// VB_DROP NN_GOBL
	p000e0223:
	{
 		if (skiprescan('p000e0223')) break p000e0223;
 		if (skipdoall('p000e0223')) break p000e0223;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0223;
			if (!CNDnoun1(74)) break p000e0223;
 		}
		if (!CNDcarried(29)) break p000e0223;
 		ACCdrop(29);
		if (!success) break pro000_restart;
 		ACCwriteln(210);
 		ACCwriteln(211);
 		ACCplus(30,20);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_DROP NN_PAIN
	p000e0224:
	{
 		if (skiprescan('p000e0224')) break p000e0224;
 		if (skipdoall('p000e0224')) break p000e0224;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0224;
			if (!CNDnoun1(82)) break p000e0224;
 		}
		if (!CNDnotat(3)) break p000e0224;
		if (!CNDnotat(52)) break p000e0224;
 		ACCdrop(38);
		if (!success) break pro000_restart;
 		ACCplus(1,1);
 		ACCok();
		break pro000_restart;
		{}

	}

	// VB_DROP NN_PAIN
	p000e0225:
	{
 		if (skiprescan('p000e0225')) break p000e0225;
 		if (skipdoall('p000e0225')) break p000e0225;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0225;
			if (!CNDnoun1(82)) break p000e0225;
 		}
		if (!CNDat(3)) break p000e0225;
		if (!CNDcarried(38)) break p000e0225;
 		ACCdrop(38);
		if (!success) break pro000_restart;
 		ACCwriteln(212);
 		ACCplus(1,1);
 		ACCplus(30,30);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_DROP NN_FILE
	p000e0226:
	{
 		if (skiprescan('p000e0226')) break p000e0226;
 		if (skipdoall('p000e0226')) break p000e0226;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0226;
			if (!CNDnoun1(97)) break p000e0226;
 		}
		if (!CNDnotat(3)) break p000e0226;
 		ACCdrop(37);
		if (!success) break pro000_restart;
 		ACCok();
		break pro000_restart;
		{}

	}

	// VB_DROP NN_FILE
	p000e0227:
	{
 		if (skiprescan('p000e0227')) break p000e0227;
 		if (skipdoall('p000e0227')) break p000e0227;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0227;
			if (!CNDnoun1(97)) break p000e0227;
 		}
		if (!CNDcarried(37)) break p000e0227;
 		ACCdrop(37);
		if (!success) break pro000_restart;
 		ACCwriteln(213);
 		ACCwriteln(214);
 		ACCplus(30,10);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_DROP NN_ALL
	p000e0228:
	{
 		if (skiprescan('p000e0228')) break p000e0228;
 		if (skipdoall('p000e0228')) break p000e0228;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0228;
			if (!CNDnoun1(136)) break p000e0228;
 		}
		if (!CNDat(3)) break p000e0228;
 		ACCwriteln(215);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_DROP NN_ALL
	p000e0229:
	{
 		if (skiprescan('p000e0229')) break p000e0229;
 		if (skipdoall('p000e0229')) break p000e0229;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0229;
			if (!CNDnoun1(136)) break p000e0229;
 		}
 		ACCdropall();
 		ACCok();
		break pro000_restart;
		{}

	}

	// VB_DROP NN_TIAR
	p000e0230:
	{
 		if (skiprescan('p000e0230')) break p000e0230;
 		if (skipdoall('p000e0230')) break p000e0230;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0230;
			if (!CNDnoun1(220)) break p000e0230;
 		}
		if (!CNDnotat(3)) break p000e0230;
 		ACCdrop(32);
		if (!success) break pro000_restart;
 		ACCok();
		break pro000_restart;
		{}

	}

	// VB_DROP NN_TIAR
	p000e0231:
	{
 		if (skiprescan('p000e0231')) break p000e0231;
 		if (skipdoall('p000e0231')) break p000e0231;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0231;
			if (!CNDnoun1(220)) break p000e0231;
 		}
		if (!CNDworn(32)) break p000e0231;
 		ACCremove(32);
		if (!success) break pro000_restart;
		{}

	}

	// VB_DROP NN_TIAR
	p000e0232:
	{
 		if (skiprescan('p000e0232')) break p000e0232;
 		if (skipdoall('p000e0232')) break p000e0232;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0232;
			if (!CNDnoun1(220)) break p000e0232;
 		}
		if (!CNDcarried(32)) break p000e0232;
 		ACCdrop(32);
		if (!success) break pro000_restart;
 		ACCwriteln(216);
 		ACCwriteln(217);
 		ACCplus(30,20);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_DROP _
	p000e0233:
	{
 		if (skiprescan('p000e0233')) break p000e0233;
 		if (skipdoall('p000e0233')) break p000e0233;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0233;
 		}
 		ACCautod();
		if (!success) break pro000_restart;
 		ACCok();
		break pro000_restart;
		{}

	}

	// VB_REMO _
	p000e0234:
	{
 		if (skiprescan('p000e0234')) break p000e0234;
 		if (skipdoall('p000e0234')) break p000e0234;
 		if (in_response)
		{
			if (!CNDverb(102)) break p000e0234;
 		}
 		ACCautor();
		if (!success) break pro000_restart;
 		ACCok();
		break pro000_restart;
		{}

	}

	// VB_WEAR _
	p000e0235:
	{
 		if (skiprescan('p000e0235')) break p000e0235;
 		if (skipdoall('p000e0235')) break p000e0235;
 		if (in_response)
		{
			if (!CNDverb(103)) break p000e0235;
 		}
		if (!CNDisautogettable()) break p000e0235;
 		ACCautog();
		if (!success) break pro000_restart;
		{}

	}

	// VB_WEAR _
	p000e0236:
	{
 		if (skiprescan('p000e0236')) break p000e0236;
 		if (skipdoall('p000e0236')) break p000e0236;
 		if (in_response)
		{
			if (!CNDverb(103)) break p000e0236;
 		}
 		ACCautow();
		if (!success) break pro000_restart;
 		ACCok();
		break pro000_restart;
		{}

	}

	// VB_I _
	p000e0237:
	{
 		if (skiprescan('p000e0237')) break p000e0237;
 		if (skipdoall('p000e0237')) break p000e0237;
 		if (in_response)
		{
			if (!CNDverb(104)) break p000e0237;
 		}
 		ACCinven();
		break pro000_restart;
		{}

	}

	// VB_L NN_BEHI
	p000e0238:
	{
 		if (skiprescan('p000e0238')) break p000e0238;
 		if (skipdoall('p000e0238')) break p000e0238;
 		if (in_response)
		{
			if (!CNDverb(105)) break p000e0238;
			if (!CNDnoun1(80)) break p000e0238;
 		}
		if (!CNDpresent(28)) break p000e0238;
 		ACCwriteln(218);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_L NN_BEHI
	p000e0239:
	{
 		if (skiprescan('p000e0239')) break p000e0239;
 		if (skipdoall('p000e0239')) break p000e0239;
 		if (in_response)
		{
			if (!CNDverb(105)) break p000e0239;
			if (!CNDnoun1(80)) break p000e0239;
 		}
		if (!CNDat(44)) break p000e0239;
 		ACCwriteln(219);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ _
	p000e0240:
	{
 		if (skiprescan('p000e0240')) break p000e0240;
 		if (skipdoall('p000e0240')) break p000e0240;
 		ACChook(220);
		if (done_flag) break pro000_restart;
		{}

	}

	// VB_L _
	p000e0241:
	{
 		if (skiprescan('p000e0241')) break p000e0241;
 		if (skipdoall('p000e0241')) break p000e0241;
 		if (in_response)
		{
			if (!CNDverb(105)) break p000e0241;
 		}
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// VB_QUIT _
	p000e0242:
	{
 		if (skiprescan('p000e0242')) break p000e0242;
 		if (skipdoall('p000e0242')) break p000e0242;
 		if (in_response)
		{
			if (!CNDverb(106)) break p000e0242;
 		}
 		ACCquit();
 		function anykey00072() 
		{
 		ACCscore();
 		ACCturns();
 		ACCend();
		}
 		waitKey(anykey00072);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// VB_SAVE _
	p000e0243:
	{
 		if (skiprescan('p000e0243')) break p000e0243;
 		if (skipdoall('p000e0243')) break p000e0243;
 		if (in_response)
		{
			if (!CNDverb(107)) break p000e0243;
 		}
		if (!CNDatgt(25)) break p000e0243;
		if (!CNDatlt(30)) break p000e0243;
		if (!CNDeq(22,4)) break p000e0243;
 		ACCwriteln(221);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_SAVE _
	p000e0244:
	{
 		if (skiprescan('p000e0244')) break p000e0244;
 		if (skipdoall('p000e0244')) break p000e0244;
 		if (in_response)
		{
			if (!CNDverb(107)) break p000e0244;
 		}
 		ACClet(7,2);
 		ACCwriteln(222);
		{}

	}

	// VB_LOAD _
	p000e0245:
	{
 		if (skiprescan('p000e0245')) break p000e0245;
 		if (skipdoall('p000e0245')) break p000e0245;
 		if (in_response)
		{
			if (!CNDverb(108)) break p000e0245;
 		}
 		ACClet(8,2);
 		ACCwriteln(223);
		{}

	}

	// VB_WAIT _
	p000e0246:
	{
 		if (skiprescan('p000e0246')) break p000e0246;
 		if (skipdoall('p000e0246')) break p000e0246;
 		if (in_response)
		{
			if (!CNDverb(109)) break p000e0246;
 		}
 		ACCwriteln(224);
		{}

	}

	// VB_WAIT _
	p000e0247:
	{
 		if (skiprescan('p000e0247')) break p000e0247;
 		if (skipdoall('p000e0247')) break p000e0247;
 		if (in_response)
		{
			if (!CNDverb(109)) break p000e0247;
 		}
		if (!CNDat(41)) break p000e0247;
		if (!CNDgt(6,8)) break p000e0247;
 		ACClet(6,8);
		{}

	}

	// VB_Y2 _
	p000e0248:
	{
 		if (skiprescan('p000e0248')) break p000e0248;
 		if (skipdoall('p000e0248')) break p000e0248;
 		if (in_response)
		{
			if (!CNDverb(150)) break p000e0248;
 		}
 		ACCwriteln(225);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_TEXT _
	p000e0249:
	{
 		if (skiprescan('p000e0249')) break p000e0249;
 		if (skipdoall('p000e0249')) break p000e0249;
 		if (in_response)
		{
			if (!CNDverb(152)) break p000e0249;
 		}
 		ACClet(28,19);
 		ACCpause(255);
 		function anykey00073() 
		{
 		ACCdesc();
		}
 		waitKey(anykey00073);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// VB_IGNO _
	p000e0250:
	{
 		if (skiprescan('p000e0250')) break p000e0250;
 		if (skipdoall('p000e0250')) break p000e0250;
 		if (in_response)
		{
			if (!CNDverb(165)) break p000e0250;
 		}
		if (!CNDpresent(28)) break p000e0250;
 		ACCwriteln(226);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VB_FART _
	p000e0251:
	{
 		if (skiprescan('p000e0251')) break p000e0251;
 		if (skipdoall('p000e0251')) break p000e0251;
 		if (in_response)
		{
			if (!CNDverb(164)) break p000e0251;
 		}
 		ACCbeep2(100,25);
 		function anykey00076() 
		{
 		ACCend();
		}
 		function anykey00075() 
		{
 		ACCwriteln(227);
 		ACCanykey();
 		waitKey(anykey00076);
		}
 		function anykey00074() 
		{
 		ACCbeep2(100,20);
 		waitKey(anykey00075);
		}
 		waitKey(anykey00074);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// VB_GRAP _
	p000e0252:
	{
 		if (skiprescan('p000e0252')) break p000e0252;
 		if (skipdoall('p000e0252')) break p000e0252;
 		if (in_response)
		{
			if (!CNDverb(153)) break p000e0252;
 		}
 		ACClet(28,19);
 		ACCpause(1);
 		function anykey00077() 
		{
 		ACCdesc();
		}
 		waitKey(anykey00077);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// VB_SPIT _
	p000e0253:
	{
 		if (skiprescan('p000e0253')) break p000e0253;
 		if (skipdoall('p000e0253')) break p000e0253;
 		if (in_response)
		{
			if (!CNDverb(154)) break p000e0253;
 		}
 		ACCwriteln(228);
 		ACCpause(40);
 		function anykey00078() 
		{
 		ACCwriteln(229);
 		ACCdone();
		}
 		waitKey(anykey00078);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// VB_TAPE _
	p000e0254:
	{
 		if (skiprescan('p000e0254')) break p000e0254;
 		if (skipdoall('p000e0254')) break p000e0254;
 		if (in_response)
		{
			if (!CNDverb(155)) break p000e0254;
 		}
		if (!CNDnotzero(8)) break p000e0254;
 		ACCload();
		break pro000_restart;
		{}

	}

	// VB_TAPE _
	p000e0255:
	{
 		if (skiprescan('p000e0255')) break p000e0255;
 		if (skipdoall('p000e0255')) break p000e0255;
 		if (in_response)
		{
			if (!CNDverb(155)) break p000e0255;
 		}
		if (!CNDnotzero(7)) break p000e0255;
 		ACCsave();
		break pro000_restart;
		{}

	}

	// _ _
	p000e0256:
	{
 		if (skiprescan('p000e0256')) break p000e0256;
 		if (skipdoall('p000e0256')) break p000e0256;
		if (!CNDpresent(28)) break p000e0256;
		if (!CNDabsent(31)) break p000e0256;
 		ACCwriteln(230);
 		ACCpause(50);
 		function anykey00079() 
		{
		ACCrescan('p000e0256');
		}
 		waitKey(anykey00079);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// _ _
	p000e0257:
	{
 		if (skiprescan('p000e0257')) break p000e0257;
 		if (skipdoall('p000e0257')) break p000e0257;
		if (!CNDpresent(31)) break p000e0257;
 		ACCwriteln(231);
 		ACCpause(50);
 		function anykey00080() 
		{
		ACCrescan('p000e0257');
		}
 		waitKey(anykey00080);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// _ _
	p000e0258:
	{
 		if (skiprescan('p000e0258')) break p000e0258;
 		if (skipdoall('p000e0258')) break p000e0258;
		if (!CNDpresent(28)) break p000e0258;
		if (!CNDchance(50)) break p000e0258;
 		ACCwriteln(232);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ _
	p000e0259:
	{
 		if (skiprescan('p000e0259')) break p000e0259;
 		if (skipdoall('p000e0259')) break p000e0259;
		if (!CNDpresent(28)) break p000e0259;
 		ACCwriteln(233);
		{}

	}

	// _ _
	p000e0260:
	{
 		if (skiprescan('p000e0260')) break p000e0260;
 		if (skipdoall('p000e0260')) break p000e0260;
 		ACChook(234);
		if (done_flag) break pro000_restart;
		{}

	}


}
}

function pro001()
{
process_restart=true;
pro001_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p001e0000:
	{
 		if (skiprescan('p001e0000')) break p001e0000;
 		if (skipdoall('p001e0000')) break p001e0000;
 		ACChook(235);
		if (done_flag) break pro001_restart;
		{}

	}

	// _ _
	p001e0001:
	{
 		if (skiprescan('p001e0001')) break p001e0001;
 		if (skipdoall('p001e0001')) break p001e0001;
		if (!CNDat(0)) break p001e0001;
 		ACCbclear(12,5);
		{}

	}

	// _ _
	p001e0002:
	{
 		if (skiprescan('p001e0002')) break p001e0002;
 		if (skipdoall('p001e0002')) break p001e0002;
		if (!CNDislight()) break p001e0002;
 		ACClistobj();
 		ACClistnpc(getFlag(38));
		{}

	}

	// _ _
	p001e0003:
	{
 		if (skiprescan('p001e0003')) break p001e0003;
 		if (skipdoall('p001e0003')) break p001e0003;
		if (!CNDat(1)) break p001e0003;
		if (!CNDturnlt(5)) break p001e0003;
		if (!CNDhasautosave()) break p001e0003;
 		ACCwriteln(236);
		{}

	}

	// _ _
	p001e0004:
	{
 		if (skiprescan('p001e0004')) break p001e0004;
 		if (skipdoall('p001e0004')) break p001e0004;
		if (!CNDturngt(5)) break p001e0004;
		if (!CNDislight()) break p001e0004;
 		ACCset(243);
		{}

	}

	// _ _
	p001e0005:
	{
 		if (skiprescan('p001e0005')) break p001e0005;
 		if (skipdoall('p001e0005')) break p001e0005;
		if (!CNDatgt(39)) break p001e0005;
		if (!CNDnotat(44)) break p001e0005;
		if (!CNDnotzero(6)) break p001e0005;
		if (!CNDlt(6,8)) break p001e0005;
 		ACCclear(243);
		{}

	}

	// _ _
	p001e0006:
	{
 		if (skiprescan('p001e0006')) break p001e0006;
 		if (skipdoall('p001e0006')) break p001e0006;
		if (!CNDisnotat(26,252)) break p001e0006;
 		ACCclear(243);
		{}

	}

	// _ _
	p001e0007:
	{
 		if (skiprescan('p001e0007')) break p001e0007;
 		if (skipdoall('p001e0007')) break p001e0007;
		if (!CNDnotzero(243)) break p001e0007;
 		ACCautosave();
 		ACCclear(243);
		{}

	}

	// _ _
	p001e0008:
	{
 		if (skiprescan('p001e0008')) break p001e0008;
 		if (skipdoall('p001e0008')) break p001e0008;
		if (!CNDturngt(35)) break p001e0008;
		if (!CNDzero(61)) break p001e0008;
		if (!CNDisat(8,252)) break p001e0008;
		if (!CNDworn(7)) break p001e0008;
		if (!CNDat(1)) break p001e0008;
 		ACCpause(25);
 		function anykey00081() 
		{
 		ACCwriteln(237);
		ACCrescan('p001e0008');
		}
 		waitKey(anykey00081);
		done_flag=true;
		break pro001_restart;
		{}

	}

	// _ _
	p001e0009:
	{
 		if (skiprescan('p001e0009')) break p001e0009;
 		if (skipdoall('p001e0009')) break p001e0009;
		if (!CNDisnotlight()) break p001e0009;
		if (!CNDcarried(4)) break p001e0009;
		if (!CNDzero(60)) break p001e0009;
 		ACCset(60);
 		ACCpause(50);
 		function anykey00083() 
		{
		ACCrescan('p001e0009');
		}
 		function anykey00082() 
		{
 		ACCwriteln(238);
 		ACCpause(20);
 		waitKey(anykey00083);
		}
 		waitKey(anykey00082);
		done_flag=true;
		break pro001_restart;
		{}

	}

	// _ _
	p001e0010:
	{
 		if (skiprescan('p001e0010')) break p001e0010;
 		if (skipdoall('p001e0010')) break p001e0010;
		if (!CNDat(22)) break p001e0010;
		if (!CNDpresent(14)) break p001e0010;
		if (!CNDpresent(21)) break p001e0010;
 		ACCwriteln(239);
		{}

	}

	// _ _
	p001e0011:
	{
 		if (skiprescan('p001e0011')) break p001e0011;
 		if (skipdoall('p001e0011')) break p001e0011;
		if (!CNDatgt(7)) break p001e0011;
		if (!CNDatlt(63)) break p001e0011;
 		ACCset(61);
 		ACCprompt(0);
		{}

	}

	// _ _
	p001e0012:
	{
 		if (skiprescan('p001e0012')) break p001e0012;
 		if (skipdoall('p001e0012')) break p001e0012;
		if (!CNDatgt(45)) break p001e0012;
		if (!CNDatlt(51)) break p001e0012;
		if (!CNDnotat(47)) break p001e0012;
		if (!CNDnotat(48)) break p001e0012;
		if (!CNDnotat(49)) break p001e0012;
		if (!CNDzero(113)) break p001e0012;
		if (!CNDnotzero(5)) break p001e0012;
		if (!CNDlt(5,20)) break p001e0012;
 		ACCwriteln(240);
 		ACCdone();
		break pro001_restart;
		{}

	}

	// _ _
	p001e0013:
	{
 		if (skiprescan('p001e0013')) break p001e0013;
 		if (skipdoall('p001e0013')) break p001e0013;
		if (!CNDatgt(45)) break p001e0013;
		if (!CNDatlt(51)) break p001e0013;
		if (!CNDnotat(47)) break p001e0013;
		if (!CNDnotat(48)) break p001e0013;
		if (!CNDnotat(49)) break p001e0013;
		if (!CNDle(113,50)) break p001e0013;
 		ACCwriteln(241);
		{}

	}


}
}

function pro002()
{
process_restart=true;
pro002_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p002e0000:
	{
 		if (skiprescan('p002e0000')) break p002e0000;
 		if (skipdoall('p002e0000')) break p002e0000;
		if (!CNDeq(31,0)) break p002e0000;
		if (!CNDeq(32,0)) break p002e0000;
 		ACCability(6,5);
		{}

	}

	// _ _
	p002e0001:
	{
 		if (skiprescan('p002e0001')) break p002e0001;
 		if (skipdoall('p002e0001')) break p002e0001;
 		ACChook(242);
		if (done_flag) break pro002_restart;
		{}

	}

	// _ _
	p002e0002:
	{
 		if (skiprescan('p002e0002')) break p002e0002;
 		if (skipdoall('p002e0002')) break p002e0002;
		if (!CNDat(25)) break p002e0002;
 		ACClet(113,10);
		{}

	}

	// _ _
	p002e0003:
	{
 		if (skiprescan('p002e0003')) break p002e0003;
 		if (skipdoall('p002e0003')) break p002e0003;
		if (!CNDat(52)) break p002e0003;
		if (!CNDlt(5,20)) break p002e0003;
		if (!CNDgt(5,6)) break p002e0003;
		if (!CNDzero(113)) break p002e0003;
 		ACClet(5,6);
		{}

	}

	// _ _
	p002e0004:
	{
 		if (skiprescan('p002e0004')) break p002e0004;
 		if (skipdoall('p002e0004')) break p002e0004;
		if (!CNDat(52)) break p002e0004;
		if (!CNDlt(5,5)) break p002e0004;
		if (!CNDzero(113)) break p002e0004;
 		ACClet(5,6);
		{}

	}

	// _ _
	p002e0005:
	{
 		if (skiprescan('p002e0005')) break p002e0005;
 		if (skipdoall('p002e0005')) break p002e0005;
 		ACCset(29);
		{}

	}

	// _ _
	p002e0006:
	{
 		if (skiprescan('p002e0006')) break p002e0006;
 		if (skipdoall('p002e0006')) break p002e0006;
		if (!CNDat(0)) break p002e0006;
 		ACClet(28,8);
 		ACCpause(5);
 		function anykey00084() 
		{
		ACCrescan('p002e0006');
		}
 		waitKey(anykey00084);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0007:
	{
 		if (skiprescan('p002e0007')) break p002e0007;
 		if (skipdoall('p002e0007')) break p002e0007;
		if (!CNDat(0)) break p002e0007;
 		ACCgoto(63);
 		ACCnoback();
 		ACCdesc();
		break pro002_restart;
		{}

	}

	// _ _
	p002e0008:
	{
 		if (skiprescan('p002e0008')) break p002e0008;
 		if (skipdoall('p002e0008')) break p002e0008;
 		ACCclear_suggestions();
		{}

	}

	// _ _
	p002e0009:
	{
 		if (skiprescan('p002e0009')) break p002e0009;
 		if (skipdoall('p002e0009')) break p002e0009;
		if (!CNDcarried(2)) break p002e0009;
		if (!CNDat(1)) break p002e0009;
 		ACCsuggest(243);
		{}

	}

	// _ _
	p002e0010:
	{
 		if (skiprescan('p002e0010')) break p002e0010;
 		if (skipdoall('p002e0010')) break p002e0010;
		if (!CNDcarried(13)) break p002e0010;
		if (!CNDat(12)) break p002e0010;
 		ACCsuggest(244);
		{}

	}

	// _ _
	p002e0011:
	{
 		if (skiprescan('p002e0011')) break p002e0011;
 		if (skipdoall('p002e0011')) break p002e0011;
		if (!CNDpresent(21)) break p002e0011;
		if (!CNDabsent(14)) break p002e0011;
		if (!CNDisnotat(20,252)) break p002e0011;
 		ACCsuggest(245);
		{}

	}

	// _ _
	p002e0012:
	{
 		if (skiprescan('p002e0012')) break p002e0012;
 		if (skipdoall('p002e0012')) break p002e0012;
		if (!CNDpresent(14)) break p002e0012;
		if (!CNDcarried(5)) break p002e0012;
 		ACCsuggest(246);
		{}

	}

	// _ _
	p002e0013:
	{
 		if (skiprescan('p002e0013')) break p002e0013;
 		if (skipdoall('p002e0013')) break p002e0013;
		if (!CNDpresent(33)) break p002e0013;
 		ACCsuggest(247);
		{}

	}

	// _ _
	p002e0014:
	{
 		if (skiprescan('p002e0014')) break p002e0014;
 		if (skipdoall('p002e0014')) break p002e0014;
		if (!CNDat(41)) break p002e0014;
		if (!CNDgt(6,8)) break p002e0014;
 		ACCsuggest(248);
		{}

	}

	// _ _
	p002e0015:
	{
 		if (skiprescan('p002e0015')) break p002e0015;
 		if (skipdoall('p002e0015')) break p002e0015;
		if (!CNDatgt(0)) break p002e0015;
		if (!CNDatlt(3)) break p002e0015;
		if (!CNDcarried(6)) break p002e0015;
 		ACCsuggest(249);
		{}

	}

	// _ _
	p002e0016:
	{
 		if (skiprescan('p002e0016')) break p002e0016;
 		if (skipdoall('p002e0016')) break p002e0016;
		if (!CNDpresent(42)) break p002e0016;
		if (!CNDpresent(45)) break p002e0016;
 		ACCsuggest(250);
		{}

	}

	// _ _
	p002e0017:
	{
 		if (skiprescan('p002e0017')) break p002e0017;
 		if (skipdoall('p002e0017')) break p002e0017;
		if (!CNDcarried(17)) break p002e0017;
		if (!CNDat(12)) break p002e0017;
 		ACCsuggest(251);
		{}

	}

	// _ _
	p002e0018:
	{
 		if (skiprescan('p002e0018')) break p002e0018;
 		if (skipdoall('p002e0018')) break p002e0018;
		if (!CNDat(3)) break p002e0018;
		if (!CNDcarried(12)) break p002e0018;
 		ACCsuggest(252);
		{}

	}

	// _ _
	p002e0019:
	{
 		if (skiprescan('p002e0019')) break p002e0019;
 		if (skipdoall('p002e0019')) break p002e0019;
		if (!CNDat(3)) break p002e0019;
		if (!CNDcarried(15)) break p002e0019;
 		ACCsuggest(253);
		{}

	}

	// _ _
	p002e0020:
	{
 		if (skiprescan('p002e0020')) break p002e0020;
 		if (skipdoall('p002e0020')) break p002e0020;
		if (!CNDat(3)) break p002e0020;
		if (!CNDcarried(19)) break p002e0020;
 		ACCsuggest(254);
		{}

	}

	// _ _
	p002e0021:
	{
 		if (skiprescan('p002e0021')) break p002e0021;
 		if (skipdoall('p002e0021')) break p002e0021;
		if (!CNDat(3)) break p002e0021;
		if (!CNDcarried(22)) break p002e0021;
 		ACCsuggest(255);
		{}

	}

	// _ _
	p002e0022:
	{
 		if (skiprescan('p002e0022')) break p002e0022;
 		if (skipdoall('p002e0022')) break p002e0022;
		if (!CNDat(3)) break p002e0022;
		if (!CNDcarried(29)) break p002e0022;
 		ACCsuggest(256);
		{}

	}

	// _ _
	p002e0023:
	{
 		if (skiprescan('p002e0023')) break p002e0023;
 		if (skipdoall('p002e0023')) break p002e0023;
		if (!CNDat(3)) break p002e0023;
		if (!CNDcarried(38)) break p002e0023;
 		ACCsuggest(257);
		{}

	}

	// _ _
	p002e0024:
	{
 		if (skiprescan('p002e0024')) break p002e0024;
 		if (skipdoall('p002e0024')) break p002e0024;
		if (!CNDat(3)) break p002e0024;
		if (!CNDcarried(37)) break p002e0024;
 		ACCsuggest(258);
		{}

	}

	// _ _
	p002e0025:
	{
 		if (skiprescan('p002e0025')) break p002e0025;
 		if (skipdoall('p002e0025')) break p002e0025;
		if (!CNDat(3)) break p002e0025;
		if (!CNDcarried(32)) break p002e0025;
 		ACCsuggest(259);
		{}

	}

	// _ _
	p002e0026:
	{
 		if (skiprescan('p002e0026')) break p002e0026;
 		if (skipdoall('p002e0026')) break p002e0026;
		if (!CNDat(3)) break p002e0026;
		if (!CNDworn(32)) break p002e0026;
 		ACCsuggest(260);
		{}

	}

	// _ _
	p002e0027:
	{
 		if (skiprescan('p002e0027')) break p002e0027;
 		if (skipdoall('p002e0027')) break p002e0027;
		if (!CNDat(40)) break p002e0027;
 		ACClet(5,40);
		{}

	}

	// _ _
	p002e0028:
	{
 		if (skiprescan('p002e0028')) break p002e0028;
 		if (skipdoall('p002e0028')) break p002e0028;
		if (!CNDat(40)) break p002e0028;
		if (!CNDcarried(16)) break p002e0028;
 		ACCplace(39,50);
 		ACClet(5,20);
		{}

	}

	// _ _
	p002e0029:
	{
 		if (skiprescan('p002e0029')) break p002e0029;
 		if (skipdoall('p002e0029')) break p002e0029;
		if (!CNDat(40)) break p002e0029;
 		ACCanykey();
 		function anykey00090() 
		{
 		ACCclear(6);
 		ACCclear(19);
 		ACCclear(113);
 		ACCclear(0);
 		ACCgoto(41);
 		ACCnoback();
 		ACCdesc();
		}
 		function anykey00089() 
		{
 		ACCbeep2(100,200);
 		waitKey(anykey00090);
		}
 		function anykey00088() 
		{
 		ACCbeep2(250,30);
 		waitKey(anykey00089);
		}
 		function anykey00087() 
		{
 		ACCcls();
 		ACCwriteln(263);
 		ACCbeep2(250,20);
 		waitKey(anykey00088);
		}
 		function anykey00086() 
		{
 		ACCwriteln(262);
 		ACCanykey();
 		waitKey(anykey00087);
		}
 		function anykey00085() 
		{
 		ACCwriteln(261);
 		ACCanykey();
 		waitKey(anykey00086);
		}
 		waitKey(anykey00085);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0030:
	{
 		if (skiprescan('p002e0030')) break p002e0030;
 		if (skipdoall('p002e0030')) break p002e0030;
		if (!CNDatgt(39)) break p002e0030;
		if (!CNDnotat(44)) break p002e0030;
		if (!CNDnotat(45)) break p002e0030;
		if (!CNDgt(5,20)) break p002e0030;
 		ACClet(5,40);
		{}

	}

	// _ _
	p002e0031:
	{
 		if (skiprescan('p002e0031')) break p002e0031;
 		if (skipdoall('p002e0031')) break p002e0031;
		if (!CNDatgt(39)) break p002e0031;
		if (!CNDnotat(44)) break p002e0031;
		if (!CNDnotat(45)) break p002e0031;
		if (!CNDlt(5,20)) break p002e0031;
		if (!CNDgt(5,6)) break p002e0031;
 		ACClet(5,20);
		{}

	}

	// _ _
	p002e0032:
	{
 		if (skiprescan('p002e0032')) break p002e0032;
 		if (skipdoall('p002e0032')) break p002e0032;
		if (!CNDat(63)) break p002e0032;
 		ACCanykey();
 		function anykey00091() 
		{
 		ACCgoto(1);
 		ACCnoback();
 		ACCprompt(70);
 		ACCdesc();
		}
 		waitKey(anykey00091);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0033:
	{
 		if (skiprescan('p002e0033')) break p002e0033;
 		if (skipdoall('p002e0033')) break p002e0033;
		if (!CNDat(0)) break p002e0033;
 		ACClet(111,1);
		{}

	}

	// _ _
	p002e0034:
	{
 		if (skiprescan('p002e0034')) break p002e0034;
 		if (skipdoall('p002e0034')) break p002e0034;
		if (!CNDpresent(1)) break p002e0034;
 		ACCplus(111,1);
		{}

	}

	// _ _
	p002e0035:
	{
 		if (skiprescan('p002e0035')) break p002e0035;
 		if (skipdoall('p002e0035')) break p002e0035;
		if (!CNDpresent(1)) break p002e0035;
		if (!CNDgt(111,1)) break p002e0035;
 		ACCpause(50);
 		function anykey00092() 
		{
 		ACCwriteln(264);
 		ACCprompt(68);
		ACCrescan('p002e0035');
		}
 		waitKey(anykey00092);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0036:
	{
 		if (skiprescan('p002e0036')) break p002e0036;
 		if (skipdoall('p002e0036')) break p002e0036;
		if (!CNDat(6)) break p002e0036;
		if (!CNDzero(61)) break p002e0036;
 		ACCprompt(69);
		{}

	}

	// _ _
	p002e0037:
	{
 		if (skiprescan('p002e0037')) break p002e0037;
 		if (skipdoall('p002e0037')) break p002e0037;
		if (!CNDat(5)) break p002e0037;
		if (!CNDzero(61)) break p002e0037;
 		ACCprompt(70);
		{}

	}

	// _ _
	p002e0038:
	{
 		if (skiprescan('p002e0038')) break p002e0038;
 		if (skipdoall('p002e0038')) break p002e0038;
		if (!CNDat(2)) break p002e0038;
		if (!CNDzero(61)) break p002e0038;
		if (!CNDabsent(1)) break p002e0038;
 		ACCprompt(70);
		{}

	}

	// _ _
	p002e0039:
	{
 		if (skiprescan('p002e0039')) break p002e0039;
 		if (skipdoall('p002e0039')) break p002e0039;
		if (!CNDat(8)) break p002e0039;
		if (!CNDeq(22,1)) break p002e0039;
 		ACCwriteln(265);
 		ACClet(22,2);
		{}

	}

	// _ _
	p002e0040:
	{
 		if (skiprescan('p002e0040')) break p002e0040;
 		if (skipdoall('p002e0040')) break p002e0040;
		if (!CNDat(8)) break p002e0040;
 		ACCset(0);
		{}

	}

	// _ _
	p002e0041:
	{
 		if (skiprescan('p002e0041')) break p002e0041;
 		if (skipdoall('p002e0041')) break p002e0041;
		if (!CNDpresent(0)) break p002e0041;
 		ACClet(10,2);
		{}

	}

	// _ _
	p002e0042:
	{
 		if (skiprescan('p002e0042')) break p002e0042;
 		if (skipdoall('p002e0042')) break p002e0042;
		if (!CNDzero(0)) break p002e0042;
 		ACClet(10,2);
 		ACCclear(60);
		{}

	}

	// _ _
	p002e0043:
	{
 		if (skiprescan('p002e0043')) break p002e0043;
 		if (skipdoall('p002e0043')) break p002e0043;
		if (!CNDatgt(9)) break p002e0043;
		if (!CNDzero(10)) break p002e0043;
 		ACCwriteln(266);
 		ACCscore();
 		ACCturns();
 		ACCend();
		break pro002_restart;
		{}

	}

	// _ _
	p002e0044:
	{
 		if (skiprescan('p002e0044')) break p002e0044;
 		if (skipdoall('p002e0044')) break p002e0044;
		if (!CNDat(19)) break p002e0044;
		if (!CNDeq(5,1)) break p002e0044;
		if (!CNDlt(212,8)) break p002e0044;
 		ACCwriteln(267);
 		ACCpause(25);
 		function anykey00095() 
		{
 		ACClet(5,5);
		ACCrescan('p002e0044');
		}
 		function anykey00094() 
		{
 		ACCwriteln(269);
 		ACCpause(100);
 		waitKey(anykey00095);
		}
 		function anykey00093() 
		{
 		ACCwriteln(268);
 		ACCpause(100);
 		waitKey(anykey00094);
		}
 		waitKey(anykey00093);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0045:
	{
 		if (skiprescan('p002e0045')) break p002e0045;
 		if (skipdoall('p002e0045')) break p002e0045;
		if (!CNDat(19)) break p002e0045;
		if (!CNDlt(212,8)) break p002e0045;
		if (!CNDnotzero(5)) break p002e0045;
		if (!CNDchance(5)) break p002e0045;
 		ACCwriteln(270);
 		ACCpause(25);
 		function anykey00098() 
		{
 		ACClet(5,5);
		ACCrescan('p002e0045');
		}
 		function anykey00097() 
		{
 		ACCwriteln(272);
 		ACCpause(100);
 		waitKey(anykey00098);
		}
 		function anykey00096() 
		{
 		ACCwriteln(271);
 		ACCpause(100);
 		waitKey(anykey00097);
		}
 		waitKey(anykey00096);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0046:
	{
 		if (skiprescan('p002e0046')) break p002e0046;
 		if (skipdoall('p002e0046')) break p002e0046;
		if (!CNDat(19)) break p002e0046;
		if (!CNDeq(212,8)) break p002e0046;
 		ACCcls();
 		ACCwriteln(273);
 		ACCpause(250);
 		function anykey00099() 
		{
 		ACCgoto(20);
 		ACCnoback();
 		ACCclear(113);
 		ACCclear(5);
 		ACCdesc();
		}
 		waitKey(anykey00099);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0047:
	{
 		if (skiprescan('p002e0047')) break p002e0047;
 		if (skipdoall('p002e0047')) break p002e0047;
		if (!CNDat(21)) break p002e0047;
		if (!CNDisat(16,252)) break p002e0047;
		if (!CNDpresent(0)) break p002e0047;
 		ACCanykey();
 		function anykey00100() 
		{
 		ACCwriteln(274);
 		ACCcreate(16);
		ACCrescan('p002e0047');
		}
 		waitKey(anykey00100);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0048:
	{
 		if (skiprescan('p002e0048')) break p002e0048;
 		if (skipdoall('p002e0048')) break p002e0048;
		if (!CNDat(50)) break p002e0048;
		if (!CNDnotzero(19)) break p002e0048;
 		ACCpause(75);
 		function anykey00102() 
		{
 		ACCwriteln(276);
 		ACCclear(19);
		ACCrescan('p002e0048');
		}
 		function anykey00101() 
		{
 		ACCwriteln(275);
 		ACCpause(100);
 		waitKey(anykey00102);
		}
 		waitKey(anykey00101);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0049:
	{
 		if (skiprescan('p002e0049')) break p002e0049;
 		if (skipdoall('p002e0049')) break p002e0049;
		if (!CNDat(46)) break p002e0049;
		if (!CNDnotzero(19)) break p002e0049;
 		ACCpause(128);
 		function anykey00104() 
		{
		ACCrescan('p002e0049');
		}
 		function anykey00103() 
		{
 		ACCwriteln(277);
 		ACCclear(19);
 		ACCpause(100);
 		waitKey(anykey00104);
		}
 		waitKey(anykey00103);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0050:
	{
 		if (skiprescan('p002e0050')) break p002e0050;
 		if (skipdoall('p002e0050')) break p002e0050;
		if (!CNDat(22)) break p002e0050;
		if (!CNDlt(22,3)) break p002e0050;
		if (!CNDnotcarr(13)) break p002e0050;
		if (!CNDpresent(14)) break p002e0050;
 		ACCwriteln(278);
 		ACClet(22,3);
		{}

	}

	// _ _
	p002e0051:
	{
 		if (skiprescan('p002e0051')) break p002e0051;
 		if (skipdoall('p002e0051')) break p002e0051;
		if (!CNDat(28)) break p002e0051;
		if (!CNDeq(22,5)) break p002e0051;
 		ACCwriteln(279);
 		ACClet(22,6);
		{}

	}

	// _ _
	p002e0052:
	{
 		if (skiprescan('p002e0052')) break p002e0052;
 		if (skipdoall('p002e0052')) break p002e0052;
		if (!CNDat(25)) break p002e0052;
		if (!CNDeq(22,4)) break p002e0052;
 		ACClet(22,3);
		{}

	}

	// _ _
	p002e0053:
	{
 		if (skiprescan('p002e0053')) break p002e0053;
 		if (skipdoall('p002e0053')) break p002e0053;
 		ACCdestroy(24);
		{}

	}

	// _ _
	p002e0054:
	{
 		if (skiprescan('p002e0054')) break p002e0054;
 		if (skipdoall('p002e0054')) break p002e0054;
		if (!CNDat(31)) break p002e0054;
 		ACClet(6,10);
		{}

	}

	// _ _
	p002e0055:
	{
 		if (skiprescan('p002e0055')) break p002e0055;
 		if (skipdoall('p002e0055')) break p002e0055;
		if (!CNDpresent(28)) break p002e0055;
		if (!CNDeq(6,5)) break p002e0055;
 		ACCwriteln(280);
		{}

	}

	// _ _
	p002e0056:
	{
 		if (skiprescan('p002e0056')) break p002e0056;
 		if (skipdoall('p002e0056')) break p002e0056;
		if (!CNDpresent(28)) break p002e0056;
		if (!CNDeq(6,3)) break p002e0056;
 		ACCwriteln(281);
 		ACCcreate(30);
		{}

	}

	// _ _
	p002e0057:
	{
 		if (skiprescan('p002e0057')) break p002e0057;
 		if (skipdoall('p002e0057')) break p002e0057;
		if (!CNDpresent(28)) break p002e0057;
		if (!CNDeq(6,1)) break p002e0057;
 		ACCwriteln(282);
 		ACCpause(50);
 		function anykey00105() 
		{
 		ACCwriteln(283);
 		ACCcreate(30);
		ACCrescan('p002e0057');
		}
 		waitKey(anykey00105);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0058:
	{
 		if (skiprescan('p002e0058')) break p002e0058;
 		if (skipdoall('p002e0058')) break p002e0058;
		if (!CNDat(49)) break p002e0058;
		if (!CNDnotzero(19)) break p002e0058;
 		ACCpause(50);
 		function anykey00106() 
		{
 		ACCwriteln(284);
 		ACCclear(19);
		ACCrescan('p002e0058');
		}
 		waitKey(anykey00106);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0059:
	{
 		if (skiprescan('p002e0059')) break p002e0059;
 		if (skipdoall('p002e0059')) break p002e0059;
		if (!CNDat(52)) break p002e0059;
		if (!CNDeq(5,5)) break p002e0059;
 		ACCpause(100);
 		function anykey00109() 
		{
 		ACCwriteln(286);
 		ACClet(113,1);
		ACCrescan('p002e0059');
		}
 		function anykey00108() 
		{
 		ACClet(28,7);
 		ACCpause(5);
 		waitKey(anykey00109);
		}
 		function anykey00107() 
		{
 		ACCcls();
 		ACCwriteln(285);
 		ACCanykey();
 		waitKey(anykey00108);
		}
 		waitKey(anykey00107);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0060:
	{
 		if (skiprescan('p002e0060')) break p002e0060;
 		if (skipdoall('p002e0060')) break p002e0060;
		if (!CNDat(52)) break p002e0060;
		if (!CNDeq(5,1)) break p002e0060;
 		ACClet(28,8);
 		ACCpause(5);
 		function anykey00111() 
		{
 		ACCscore();
 		ACCturns();
 		ACCend();
		}
 		function anykey00110() 
		{
 		ACCwriteln(287);
 		ACCpause(250);
 		waitKey(anykey00111);
		}
 		waitKey(anykey00110);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0061:
	{
 		if (skiprescan('p002e0061')) break p002e0061;
 		if (skipdoall('p002e0061')) break p002e0061;
		if (!CNDat(41)) break p002e0061;
		if (!CNDeq(6,8)) break p002e0061;
 		ACCcls();
 		ACCwriteln(288);
		{}

	}

	// _ _
	p002e0062:
	{
 		if (skiprescan('p002e0062')) break p002e0062;
 		if (skipdoall('p002e0062')) break p002e0062;
		if (!CNDat(41)) break p002e0062;
		if (!CNDeq(6,8)) break p002e0062;
		if (!CNDeq(113,255)) break p002e0062;
 		ACCpause(50);
 		function anykey00112() 
		{
 		ACCwriteln(289);
		ACCrescan('p002e0062');
		}
 		waitKey(anykey00112);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0063:
	{
 		if (skiprescan('p002e0063')) break p002e0063;
 		if (skipdoall('p002e0063')) break p002e0063;
		if (!CNDat(41)) break p002e0063;
		if (!CNDlt(6,8)) break p002e0063;
		if (!CNDnotzero(6)) break p002e0063;
 		ACCcls();
 		ACCwriteln(290);
 		ACCpause(50);
 		function anykey00113() 
		{
 		ACCwriteln(291);
		ACCrescan('p002e0063');
		}
 		waitKey(anykey00113);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0064:
	{
 		if (skiprescan('p002e0064')) break p002e0064;
 		if (skipdoall('p002e0064')) break p002e0064;
		if (!CNDat(41)) break p002e0064;
		if (!CNDle(6,8)) break p002e0064;
		if (!CNDnotzero(6)) break p002e0064;
 		ACCanykey();
 		function anykey00114() 
		{
 		ACCgoto(33);
 		ACCnoback();
 		ACCcreate(40);
 		ACCset(20);
 		ACCset(0);
 		ACCdesc();
		}
 		waitKey(anykey00114);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0065:
	{
 		if (skiprescan('p002e0065')) break p002e0065;
 		if (skipdoall('p002e0065')) break p002e0065;
		if (!CNDatgt(39)) break p002e0065;
		if (!CNDnotat(44)) break p002e0065;
		if (!CNDnotat(45)) break p002e0065;
		if (!CNDnotat(41)) break p002e0065;
		if (!CNDle(6,8)) break p002e0065;
		if (!CNDnotzero(6)) break p002e0065;
 		ACCpause(25);
 		function anykey00115() 
		{
 		ACCwriteln(292);
		ACCrescan('p002e0065');
		}
 		waitKey(anykey00115);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0066:
	{
 		if (skiprescan('p002e0066')) break p002e0066;
 		if (skipdoall('p002e0066')) break p002e0066;
		if (!CNDatgt(39)) break p002e0066;
		if (!CNDnotat(44)) break p002e0066;
		if (!CNDnotat(45)) break p002e0066;
		if (!CNDeq(6,1)) break p002e0066;
 		ACCplace(26,41);
		{}

	}

	// _ _
	p002e0067:
	{
 		if (skiprescan('p002e0067')) break p002e0067;
 		if (skipdoall('p002e0067')) break p002e0067;
		if (!CNDat(41)) break p002e0067;
		if (!CNDpresent(26)) break p002e0067;
 		ACCpause(200);
 		function anykey00116() 
		{
 		ACCscore();
 		ACCturns();
 		ACCend();
		}
 		waitKey(anykey00116);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0068:
	{
 		if (skiprescan('p002e0068')) break p002e0068;
 		if (skipdoall('p002e0068')) break p002e0068;
		if (!CNDat(41)) break p002e0068;
		if (!CNDeq(6,16)) break p002e0068;
		if (!CNDlt(113,255)) break p002e0068;
 		ACCanykey();
 		function anykey00117() 
		{
 		ACCwriteln(293);
		ACCrescan('p002e0068');
		}
 		waitKey(anykey00117);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0069:
	{
 		if (skiprescan('p002e0069')) break p002e0069;
 		if (skipdoall('p002e0069')) break p002e0069;
		if (!CNDnotzero(112)) break p002e0069;
		if (!CNDle(6,8)) break p002e0069;
 		ACCcls();
 		ACClet(28,1);
 		ACCpause(255);
 		function anykey00119() 
		{
 		ACCend();
		}
 		function anykey00118() 
		{
 		ACCwriteln(294);
 		ACCanykey();
 		waitKey(anykey00119);
		}
 		waitKey(anykey00118);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0070:
	{
 		if (skiprescan('p002e0070')) break p002e0070;
 		if (skipdoall('p002e0070')) break p002e0070;
		if (!CNDnotzero(112)) break p002e0070;
		if (!CNDat(54)) break p002e0070;
 		ACClet(28,1);
 		ACCpause(255);
 		function anykey00120() 
		{
 		ACCwriteln(295);
 		ACCclear(112);
		ACCrescan('p002e0070');
		}
 		waitKey(anykey00120);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0071:
	{
 		if (skiprescan('p002e0071')) break p002e0071;
 		if (skipdoall('p002e0071')) break p002e0071;
		if (!CNDnotzero(112)) break p002e0071;
		if (!CNDat(55)) break p002e0071;
 		ACClet(28,1);
 		ACCpause(255);
 		function anykey00121() 
		{
 		ACCwriteln(296);
 		ACCclear(112);
		ACCrescan('p002e0071');
		}
 		waitKey(anykey00121);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0072:
	{
 		if (skiprescan('p002e0072')) break p002e0072;
 		if (skipdoall('p002e0072')) break p002e0072;
		if (!CNDat(41)) break p002e0072;
		if (!CNDeq(19,255)) break p002e0072;
 		ACCpause(50);
 		function anykey00122() 
		{
 		ACCwriteln(297);
 		ACCclear(19);
		ACCrescan('p002e0072');
		}
 		waitKey(anykey00122);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0073:
	{
 		if (skiprescan('p002e0073')) break p002e0073;
 		if (skipdoall('p002e0073')) break p002e0073;
		if (!CNDat(56)) break p002e0073;
 		ACCset(19);
 		ACCanykey();
 		function anykey00125() 
		{
 		ACCgoto(50);
 		ACCnoback();
 		ACCdesc();
		}
 		function anykey00124() 
		{
 		ACClet(28,3);
 		ACCpause(100);
 		waitKey(anykey00125);
		}
 		function anykey00123() 
		{
 		ACCwriteln(298);
 		ACCanykey();
 		waitKey(anykey00124);
		}
 		waitKey(anykey00123);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0074:
	{
 		if (skiprescan('p002e0074')) break p002e0074;
 		if (skipdoall('p002e0074')) break p002e0074;
		if (!CNDpresent(28)) break p002e0074;
		if (!CNDpresent(43)) break p002e0074;
 		ACCdestroy(43);
 		ACCdestroy(28);
 		ACCdestroy(31);
 		ACCanykey();
 		function anykey00127() 
		{
 		ACCwriteln(299);
		ACCrescan('p002e0074');
		}
 		function anykey00126() 
		{
 		ACClet(28,4);
 		ACCpause(20);
 		waitKey(anykey00127);
		}
 		waitKey(anykey00126);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0075:
	{
 		if (skiprescan('p002e0075')) break p002e0075;
 		if (skipdoall('p002e0075')) break p002e0075;
		if (!CNDat(5)) break p002e0075;
		if (!CNDzero(2)) break p002e0075;
 		ACCanykey();
 		function anykey00128() 
		{
 		ACCwriteln(300);
		ACCrescan('p002e0075');
		}
 		waitKey(anykey00128);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0076:
	{
 		if (skiprescan('p002e0076')) break p002e0076;
 		if (skipdoall('p002e0076')) break p002e0076;
		if (!CNDat(19)) break p002e0076;
		if (!CNDzero(2)) break p002e0076;
		if (!CNDpresent(0)) break p002e0076;
 		ACCanykey();
 		function anykey00129() 
		{
 		ACCwriteln(301);
		ACCrescan('p002e0076');
		}
 		waitKey(anykey00129);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0077:
	{
 		if (skiprescan('p002e0077')) break p002e0077;
 		if (skipdoall('p002e0077')) break p002e0077;
		if (!CNDat(14)) break p002e0077;
		if (!CNDcarried(12)) break p002e0077;
 		ACCdestroy(12);
		{}

	}

	// _ _
	p002e0078:
	{
 		if (skiprescan('p002e0078')) break p002e0078;
 		if (skipdoall('p002e0078')) break p002e0078;
		if (!CNDat(14)) break p002e0078;
		if (!CNDcarried(15)) break p002e0078;
 		ACCdestroy(15);
		{}

	}

	// _ _
	p002e0079:
	{
 		if (skiprescan('p002e0079')) break p002e0079;
 		if (skipdoall('p002e0079')) break p002e0079;
		if (!CNDat(14)) break p002e0079;
		if (!CNDcarried(19)) break p002e0079;
 		ACCdestroy(19);
		{}

	}

	// _ _
	p002e0080:
	{
 		if (skiprescan('p002e0080')) break p002e0080;
 		if (skipdoall('p002e0080')) break p002e0080;
		if (!CNDat(14)) break p002e0080;
		if (!CNDcarried(22)) break p002e0080;
 		ACCdestroy(22);
		{}

	}

	// _ _
	p002e0081:
	{
 		if (skiprescan('p002e0081')) break p002e0081;
 		if (skipdoall('p002e0081')) break p002e0081;
		if (!CNDat(14)) break p002e0081;
		if (!CNDcarried(29)) break p002e0081;
 		ACCdestroy(29);
		{}

	}

	// _ _
	p002e0082:
	{
 		if (skiprescan('p002e0082')) break p002e0082;
 		if (skipdoall('p002e0082')) break p002e0082;
		if (!CNDat(14)) break p002e0082;
		if (!CNDcarried(32)) break p002e0082;
 		ACCdestroy(32);
		{}

	}

	// _ _
	p002e0083:
	{
 		if (skiprescan('p002e0083')) break p002e0083;
 		if (skipdoall('p002e0083')) break p002e0083;
		if (!CNDat(14)) break p002e0083;
		if (!CNDcarried(37)) break p002e0083;
 		ACCdestroy(37);
		{}

	}

	// _ _
	p002e0084:
	{
 		if (skiprescan('p002e0084')) break p002e0084;
 		if (skipdoall('p002e0084')) break p002e0084;
		if (!CNDat(14)) break p002e0084;
		if (!CNDcarried(38)) break p002e0084;
 		ACCdestroy(38);
		{}

	}

	// _ _
	p002e0085:
	{
 		if (skiprescan('p002e0085')) break p002e0085;
 		if (skipdoall('p002e0085')) break p002e0085;
		if (!CNDat(14)) break p002e0085;
		if (!CNDzero(26)) break p002e0085;
 		ACCset(26);
 		ACCscore();
 		ACCwriteln(302);
 		ACCsave();
		break pro002_restart;
		{}

	}

	// _ _
	p002e0086:
	{
 		if (skiprescan('p002e0086')) break p002e0086;
 		if (skipdoall('p002e0086')) break p002e0086;
		if (!CNDat(60)) break p002e0086;
 		ACCset(19);
 		ACCanykey();
 		function anykey00131() 
		{
 		ACCgoto(59);
 		ACCnoback();
 		ACCdesc();
		}
 		function anykey00130() 
		{
 		ACClet(28,3);
 		ACCpause(100);
 		waitKey(anykey00131);
		}
 		waitKey(anykey00130);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0087:
	{
 		if (skiprescan('p002e0087')) break p002e0087;
 		if (skipdoall('p002e0087')) break p002e0087;
		if (!CNDat(59)) break p002e0087;
		if (!CNDnotzero(19)) break p002e0087;
 		ACCpause(128);
 		function anykey00133() 
		{
 		ACCwriteln(304);
 		ACCclear(19);
		ACCrescan('p002e0087');
		}
 		function anykey00132() 
		{
 		ACCwriteln(303);
 		ACCpause(128);
 		waitKey(anykey00133);
		}
 		waitKey(anykey00132);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0088:
	{
 		if (skiprescan('p002e0088')) break p002e0088;
 		if (skipdoall('p002e0088')) break p002e0088;
		if (!CNDat(58)) break p002e0088;
 		ACCset(19);
 		ACCanykey();
 		function anykey00135() 
		{
 		ACCgoto(46);
 		ACCnoback();
 		ACCdesc();
		}
 		function anykey00134() 
		{
 		ACClet(28,3);
 		ACCpause(100);
 		waitKey(anykey00135);
		}
 		waitKey(anykey00134);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0089:
	{
 		if (skiprescan('p002e0089')) break p002e0089;
 		if (skipdoall('p002e0089')) break p002e0089;
		if (!CNDat(43)) break p002e0089;
 		ACCanykey();
 		function anykey00138() 
		{
 		ACCgoto(42);
 		ACCnoback();
 		ACCset(19);
 		ACCdesc();
		}
 		function anykey00137() 
		{
 		ACCpause(100);
 		waitKey(anykey00138);
		}
 		function anykey00136() 
		{
 		ACCwriteln(305);
 		ACClet(28,3);
 		ACCanykey();
 		waitKey(anykey00137);
		}
 		waitKey(anykey00136);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0090:
	{
 		if (skiprescan('p002e0090')) break p002e0090;
 		if (skipdoall('p002e0090')) break p002e0090;
		if (!CNDat(42)) break p002e0090;
		if (!CNDnotzero(19)) break p002e0090;
 		ACCpause(128);
 		function anykey00139() 
		{
 		ACCwriteln(306);
 		ACCclear(19);
		ACCrescan('p002e0090');
		}
 		waitKey(anykey00139);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0091:
	{
 		if (skiprescan('p002e0091')) break p002e0091;
 		if (skipdoall('p002e0091')) break p002e0091;
 		ACClet(2,1);
		{}

	}


}
}

last_process = 2;
// This file is (C) Carlos Sanchez 2014, released under the MIT license

// This function is called first by the start() function that runs when the game starts for the first time
var h_init = function()
{
}


// This function is called last by the start() function that runs when the game starts for the first time
var h_post =  function()
{
}

// This function is called when the engine tries to write any text
var h_writeText =  function (text)
{
	return text;
}

//This function is called every time the user types any order
var h_playerOrder = function(player_order)
{
	return player_order;
}

// This function is called when an order needs to be displayed in the text window.  Supports the runInSerial interface
var h_copyOrderToTextWindow = function(player_order)
{
	last_player_orders.push(player_order);
	last_player_orders_pointer = 0;
	clearInputWindow();
	writelnText(STR_PROMPT_START + player_order + STR_PROMPT_END, false);
}

// This function is called after an order has been split into words, but before those words have been looked up in the vocabulary
var h_mangleWords = function(words)
{
	return words;
}

// This function is called on a word that will be displayed to the user.  Whatever h_mangleWords() does, this should undo it again:
var h_displayWord = function(word)
{
	return word;
}

// This function is called when ngPAWS is about to start describing locations.  Supports the runInSerial interface
var h_descriptionLoop_init = function ()
{
}

// This function is called every time a location is described, just after the location text is written
var h_description_init =  function ()
{
}

// This function is called every time a location is described, just after the process 1 is executed
var h_description_post = function()
{
}

// This function is called after ngPAWS has finished describing locations.  Supports the runInSerial interface
var h_descriptionLoop_post = function()
{
}

// This function is called every time an object or NPC is listed
var h_listText = function(locno,container_objno,objno)
{
	return getObjectText(objno);
}

// this function is called when the savegame object has been created, in order to be able to add more custom properties
var h_saveGame = function(savegame_object)
{
	return savegame_object;
}


// this function is called after the restore game function has restored the standard information in savegame, in order to restore any additional data included in a patched (by h_saveGame) savegame.
var h_restoreGame = function(savegame_object)
{
}

// this funcion is called before writing a message about player order beeing impossible to understand
var h_invalidOrder = function(player_order)
{
}

// this function is called when a sequence tag is found giving a chance for any hook library to provide a response
// tagparams receives the params inside the tag as an array  {XXXX|nn|mm|yy} => ['XXXX', 'nn', 'mm', 'yy']
var h_sequencetag = function (tagparams)
{
	return '';
}

// this function is called when an {ACTION} sequence tag is clicked
var h_sequenceAction = function(text) {
	orderEnteredLoop(text);
}

var h_executeOrder = function()
{
	callProcess(PROCESS_RESPONSE); // Response table
	if (!done_flag && !describe_location_flag)
	{
		if (CNDmove(FLAG_LOCATION))
		{
			describe_location_flag = true;
			return
		}
		if (getFlag(FLAG_VERB)<NUM_CONNECTION_VERBS)
			writeSysMessage(SYSMESS_WRONGDIRECTION);
		else
			writeSysMessage(SYSMESS_CANTDOTHAT);
		ACCnewline();
	}
}

// this function is called from certain points in the response or process tables via the HOOK condact. Depending on the string received it can do something or not.
// it's designed to allow direct javascript code to take control in the start database just installing a plugin library (avoiding the wirter need to enter code to activate the library)
var h_code = function(str)
{
	return false;
}


// this function is called from the keydown evente handler used by block and other functions to emulate a pause or waiting for a keypress. It is designed to allow plugin condacts or
// libraries to attend those key presses and react accordingly. In case a hook function decides that the standard keydown functions should not be processed, the hook function should return false.
// Also, any h_keydown replacement should probably do the same.
var h_keydown = function (event)
{
	return true;
}


// this function is called every time a process is called,  either by the internall loop of by the PROCESS condact, just before running it.
var h_preProcess = function(procno)
{

}

// this function is called every time a process is called just after the process exits (no matter which DONE status it has), either by the internall loop of by the PROCESS condact
var h_postProcess= function (procno)
{

}

// this function is called when the game is about to restart.  Passing the boolean {false} value as an argument will stop the default callback from refreshing the page.
function h_restart(restart)
{
	if ( restart !== false ) location.reload();
	inEND = false;
}
// This file is (C) Carlos Sanchez 2014, and is released under the MIT license
 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////// CONDACTS ///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function ACCdesc()
{
	describe_location_flag = true;
	ACCbreak(); // Cancel doall loop
}


function ACCdone()
{
	done_flag = true;
}

function CNDat(locno)
{
  return (loc_here()==locno);
}

function CNDnotat(locno)
{
	 return (loc_here()!=locno);
}


function CNDatgt(locno)
{
	 return (loc_here()>locno);
}


function CNDatlt(locno)
{
	 return (loc_here()<locno);
}

function CNDpresent(objno)
{
	var loc = getObjectLocation(objno);
	if (loc == loc_here()) return true;
	if (loc == LOCATION_WORN) return true;
	if (loc == LOCATION_CARRIED) return true;
	if ( (!bittest(getFlag(FLAG_PARSER_SETTINGS),7)) && (objectIsContainer(loc) || objectIsSupporter(loc))  &&  (loc<=last_object_number)  && (CNDpresent(loc)) )  // Extended context and object in another object that is present
	{
		if (objectIsSupporter(loc)) return true;  // On supporter
		if ( objectIsContainer(loc) && objectIsAttr(loc, ATTR_OPENABLE) && objectIsAttr(loc, ATTR_OPEN)) return true; // In a openable & open container
		if ( objectIsContainer(loc) && (!objectIsAttr(loc, ATTR_OPENABLE)) ) return true; // In a not openable container
	}
	return false;
}

function CNDabsent(objno)
{
	return !CNDpresent(objno);
}

function CNDworn(objno)
{
	return (getObjectLocation(objno) == LOCATION_WORN);
}

function CNDnotworn(objno)
{
	return !CNDworn(objno);
}

function CNDcarried(objno)
{
	return (getObjectLocation(objno) == LOCATION_CARRIED);	
}

function CNDnotcarr(objno)
{
	return !CNDcarried(objno);
}


function CNDchance(percent)
{
	 var val = Math.floor((Math.random()*101));
	 return (val<=percent);
}

function CNDzero(flagno)
{
	return (getFlag(flagno) == 0);
}

function CNDnotzero(flagno)
{
	 return !CNDzero(flagno)
}


function CNDeq(flagno, value)
{
	return (getFlag(flagno) == value);
}

function CNDnoteq(flagno,value)
{
	return !CNDeq(flagno, value);
}

function CNDgt(flagno, value)
{
	return (getFlag(flagno) > value);
}

function CNDlt(flagno, value)
{
	return (getFlag(flagno) < value);
}


function CNDadject1(wordno)
{
	return (getFlag(FLAG_ADJECT1) == wordno);
}

function CNDadverb(wordno)
{
	return (getFlag(FLAG_ADVERB) == wordno);
}


function CNDtimeout()
{
	 return bittest(getFlag(FLAG_TIMEOUT_SETTINGS),7);
}


function CNDisat(objno, locno)
{
	return (getObjectLocation(objno) == locno);

}


function CNDisnotat(objno, locno)
{
	return !CNDisat(objno, locno);
}



function CNDprep(wordno)
{
	return (getFlag(FLAG_PREP) == wordno);
}




function CNDnoun2(wordno)
{
	return (getFlag(FLAG_NOUN2) == wordno);
}

function CNDadject2(wordno)
{
	return (getFlag(FLAG_ADJECT2) == wordno);
}

function CNDsame(flagno1,flagno2)
{
	return (getFlag(flagno1) == getFlag(flagno2));
}


function CNDnotsame(flagno1,flagno2)
{
	return (getFlag(flagno1) != getFlag(flagno2));
}

function ACCinven()
{
	var count = 0;
	writeSysMessage(SYSMESS_YOUARECARRYING);
	ACCnewline();
	var listnpcs_with_objects = !bittest(getFlag(FLAG_PARSER_SETTINGS),3);
	var i;
	for (i=0;i<num_objects;i++)
	{
		if ((getObjectLocation(i)) == LOCATION_CARRIED)
		{
			
			if ((listnpcs_with_objects) || (!objectIsNPC(i)))
			{
				writeText(h_listText(LOCATION_CARRIED,undefined,i));
				if ((objectIsAttr(i,ATTR_SUPPORTER))  || (  (objectIsAttr(i,ATTR_TRANSPARENT))  && (objectIsAttr(i,ATTR_CONTAINER))))  ACClistat(i, i);
				ACCnewline();
				count++;
			}
		}
		if (getObjectLocation(i) == LOCATION_WORN)
		{
			if (listnpcs_with_objects || (!objectIsNPC(i)))
			{
				writeText(h_listText(LOCATION_CARRIED,undefined,i));
				writeSysMessage(SYSMESS_WORN);
				count++;
				ACCnewline();
			}
		}
	}
	if (!count) 
	{
		 writeSysMessage(SYSMESS_CARRYING_NOTHING);
		 ACCnewline();
	}

	if (!listnpcs_with_objects)
	{
		var numNPC = getNPCCountAt(LOCATION_CARRIED);
		if (numNPC)	ACClistnpc(LOCATION_CARRIED);
	}
	done_flag = true;
}

function desc()
{
	describe_location_flag = true;
}


function ACCquit()
{
	inQUIT = true;
	writeSysMessage(SYSMESS_AREYOUSURE);
}


function ACCend()
{
	$('.input').hide();
	inEND = true;
	writeSysMessage(SYSMESS_PLAYAGAIN);
	done_flag = true;
}


function done()
{
	done_flag = true;
}

function ACCok()
{
	writeSysMessage(SYSMESS_OK);
	done_flag = true;
}



function ACCramsave()
{
	ramsave_value = getSaveGameObject();
	var savegame_object = getSaveGameObject();	
	savegame =   JSON.stringify(savegame_object);
	localStorage.setItem(STR_SAVEGAME_PREFIX + STR_RAMSAVE_FILENAME, savegame);
}

function ACCramload()
{
	if (ramsave_value==null) 
	{
		var json_str = localStorage.getItem(STR_SAVEGAME_PREFIX + STR_RAMSAVE_FILENAME);
		if (json_str)
		{
			savegame_object = JSON.parse(json_str.trim());
			restoreSaveGameObject(savegame_object);
			ACCdesc();
			focusInput();
			return;
		}
		else
		{
			writeText (STR_RAMLOAD_ERROR); 
			done_flag = true; 
			return;
		}
	}
	restoreSaveGameObject(ramsave_value);
	ACCdesc();
}

function ACCsave()
{
	var savegame_object = getSaveGameObject();	
	savegame =   JSON.stringify(savegame_object);
	filename = prompt(getSysMessageText(SYSMESS_SAVEFILE),'');
	if ( filename !== null ) localStorage.setItem(STR_SAVEGAME_PREFIX + filename.toUpperCase(), savegame);
	ACCok();
}

 
function ACCload() 	
{
	var json_str;
	filename = prompt(getSysMessageText(SYSMESS_LOADFILE),'');
	if ( filename !== null ) json_str = localStorage.getItem(STR_SAVEGAME_PREFIX + filename.toUpperCase());
	if (json_str)
	{
		savegame_object = JSON.parse(json_str.trim());
		restoreSaveGameObject(savegame_object);
	}
	else
	{
		writeSysMessage(SYSMESS_FILENOTFOUND);
		done_flag = true; return;
	}
	ACCdesc();
	focusInput();
}



function ACCturns()
{
	var turns = getFlag(FLAG_TURNS_HIGH) * 256 +  getFlag(FLAG_TURNS_LOW);
	writeSysMessage(SYSMESS_TURNS_START);
	writeText(turns + '');
	writeSysMessage(SYSMESS_TURNS_CONTINUE);
	if (turns > 1) writeSysMessage(SYSMESS_TURNS_PLURAL);
	writeSysMessage(SYSMESS_TURNS_END);
}

function ACCscore()
{
	var score = getFlag(FLAG_SCORE);
	writeSysMessage(SYSMESS_SCORE_START);
	writeText(score + '');
	writeSysMessage(SYSMESS_SCORE_END);
}


function ACCcls()
{
	clearScreen();
}

function ACCdropall()
{
	// Done in two different loops cause PAW did it like that, just a question of retro compatibility
	var i;
	for (i=0;i<num_objects;i++)	if (getObjectLocation(i) == LOCATION_CARRIED)setObjectLocation(i, getFlag(FLAG_LOCATION));
	for (i=0;i<num_objects;i++)	if (getObjectLocation(i) == LOCATION_WORN)setObjectLocation(i, getFlag(FLAG_LOCATION));
}


function autogetObject()
{
	var objno = findMatchingObject(loc_here());
	if (objno != EMPTY_OBJECT) return objno;
	objno =findMatchingObject(LOCATION_CARRIED);
	if (objno != EMPTY_OBJECT) return objno;
	objno =findMatchingObject(LOCATION_WORN);
	if (objno != EMPTY_OBJECT) return objno;
	if (!bittest(getFlag(FLAG_PARSER_SETTINGS),7))  // Extended context for objects
	for (var i=0; i<num_objects;i++) // Try to find it in present containers/supporters
	{
		if (CNDpresent(i) && (isAccesibleContainer(i) || objectIsAttr(i, ATTR_SUPPORTER)) )  // If there is another object present that is an accesible container or a supporter
		{
			objno =findMatchingObject(i);
			if (objno != EMPTY_OBJECT) return objno;
		}
	}
	return objno;
}
function autodropObject()
{
	var objno =findMatchingObject(LOCATION_CARRIED);
	if (objno != EMPTY_OBJECT) return objno;
	objno =findMatchingObject(LOCATION_WORN);
	if (objno != EMPTY_OBJECT) return objno;
	return findMatchingObject(loc_here());
}

function ACCautog()
{
	var objno = autogetObject();
	if (objno != EMPTY_OBJECT) { ACCget(objno); return; };
	success = false;
	writeSysMessage(SYSMESS_CANTSEETHAT);
	ACCnewtext();
	ACCdone();
}

function ACCautod()
{
	var objno = autodropObject();
	if (objno != EMPTY_OBJECT) { ACCdrop(objno); return; };
	success = false;
	writeSysMessage(SYSMESS_YOUDONTHAVETHAT);
	ACCnewtext();
	ACCdone();
}


function ACCautow()
{
	var objno =findMatchingObject(LOCATION_CARRIED);
	if (objno != EMPTY_OBJECT) { ACCwear(objno); return; };
	objno =findMatchingObject(LOCATION_WORN);
	if (objno != EMPTY_OBJECT) { ACCwear(objno); return; };
	objno =findMatchingObject(loc_here());
	if (objno != EMPTY_OBJECT) { ACCwear(objno); return; };
	success = false;
	writeSysMessage(SYSMESS_YOUDONTHAVETHAT);
	ACCnewtext();
	ACCdone();
}


function ACCautor()
{
	var objno =findMatchingObject(LOCATION_WORN);
	if (objno != EMPTY_OBJECT) { ACCremove(objno); return; };
	objno =findMatchingObject(LOCATION_CARRIED);
	if (objno != EMPTY_OBJECT) { ACCremove(objno); return; };
	objno =findMatchingObject(loc_here());
	if (objno != EMPTY_OBJECT) { ACCremove(objno); return; };
	success = false;
	writeSysMessage(SYSMESS_YOURENOTWEARINGTHAT);
	ACCnewtext();
	ACCdone();
}



function ACCpause(value)
{
 if (value == 0) value = 256;
 pauseRemainingTime = debug_flag ? 0 : Math.floor(value /50 * 1000);	
 inPause = true;
 showAnykeyLayer();
} 

function ACCgoto(locno)
{
 	setFlag(FLAG_LOCATION,locno);
}

function ACCmessage(mesno)
{
	writeMessage(mesno);
	ACCnewline();
}


function ACCremove(objno)
{
	success = false; 
	setFlag(FLAG_REFERRED_OBJECT, objno);
	setReferredObject(objno);
	var locno = getObjectLocation(objno);
	switch (locno)
	{
		case LOCATION_CARRIED:  
		case loc_here():
			writeSysMessage(SYSMESS_YOUARENOTWEARINGOBJECT);
			ACCnewtext();
			ACCdone();
			return;
			break;

		case LOCATION_WORN:
			if (
				(getFlag(FLAG_OBJECTS_CARRIED_COUNT) >= getFlag(FLAG_MAXOBJECTS_CARRIED)) ||
				(!worn_items_have_weight && getLocationObjectsWeight(LOCATION_CARRIED) + getObjectWeight(objno) > getFlag(FLAG_MAXWEIGHT_CARRIED))
			)
			{
				writeSysMessage(SYSMESS_CANTREMOVE_TOOMANYOBJECTS);
				ACCnewtext();
				ACCdone();
				return;
			}
			setObjectLocation(objno, LOCATION_CARRIED);
			writeSysMessage(SYSMESS_YOUREMOVEOBJECT);
			success = true;
			break;

		default: 
			writeSysMessage(SYSMESS_YOUARENOTWEARINGTHAT);
			ACCnewtext();
			ACCdone();
			return;
			break;
	}
}


function getMessage(objno)  // The message that will be displayed if you ACCget() an object
{
	var locno = getObjectLocation(objno);
	switch (locno)
	{
		case LOCATION_CARRIED:
		case LOCATION_WORN:
			return SYSMESS_YOUALREADYHAVEOBJECT;
		default:
			if  (locno == loc_here() || ((locno<=last_object_number) && (CNDpresent(locno))) )    // If it's not here, carried or worn but it present, that means that bit 7 of flag 12 is cleared, thus you can get objects from present containers/supporters
			{
				if (getFlag(FLAG_OBJECTS_CARRIED_COUNT) >= getFlag(FLAG_MAXOBJECTS_CARRIED))
				{
					return SYSMESS_CANTCARRYANYMORE;
				}
				var weight = 0;
				weight += getObjectWeight(objno);
				weight +=  getLocationObjectsWeight(LOCATION_CARRIED);
				weight +=  getLocationObjectsWeight(LOCATION_WORN);
				if (weight > getFlag(FLAG_MAXWEIGHT_CARRIED))
				{
					return SYSMESS_WEIGHSTOOMUCH;
				}
				return SYSMESS_YOUTAKEOBJECT;
			}
			else
			{
				return SYSMESS_CANTSEETHAT;
			}
	}
}

function CNDisgettable(objno)
{
	return getMessage(objno) == SYSMESS_YOUTAKEOBJECT;
}

function CNDisnotgettable(objno)
{
	return getMessage(objno) != SYSMESS_YOUTAKEOBJECT;
}

function CNDisautogettable()
{
	var objno = autogetObject();
	return objno != EMPTY_OBJECT && getMessage(objno) == SYSMESS_YOUTAKEOBJECT;
}

function CNDisnotautogettable()
{
	var objno = autogetObject();
	return objno == EMPTY_OBJECT || getMessage(objno) == SYSMESS_YOUTAKEOBJECT;
}

 function ACCget(objno)
 {
 	success = false; 
	setFlag(FLAG_REFERRED_OBJECT, objno);
	setReferredObject(objno);
	var message = getMessage(objno);
	writeSysMessage(message);
	switch ( message )
	{
		case SYSMESS_YOUTAKEOBJECT:
			setObjectLocation(objno, LOCATION_CARRIED);
			success = true;
			return;
		case SYSMESS_CANTCARRYANYMORE:
			doall_flag = false;
			// FALL THROUGH
		default:
			ACCnewtext();
			ACCdone();
			return;
	}
 }

function ACCdrop(objno)
{
	success = false; 
	setFlag(FLAG_REFERRED_OBJECT, objno);
	setReferredObject(objno);
	var locno = getObjectLocation(objno);
	switch (locno)
	{
		case loc_here():  
			writeSysMessage(SYSMESS_YOUDONTHAVEOBJECT);
			ACCnewtext();
			ACCdone();
			return;
			break;


		case LOCATION_WORN:
		case LOCATION_CARRIED:  
			setObjectLocation(objno, loc_here());
			writeSysMessage(SYSMESS_YOUDROPOBJECT);
			success = true;
			break;

		default: 
			writeSysMessage(SYSMESS_YOUDONTHAVETHAT);
			ACCnewtext();
			ACCdone();
			return;
			break;
	}
}

function ACCwear(objno)
{
	success = false; 
	setFlag(FLAG_REFERRED_OBJECT, objno);
	setReferredObject(objno);
	var locno = getObjectLocation(objno);
	switch (locno)
	{
		case LOCATION_WORN:  
			writeSysMessage(SYSMESS_YOUAREALREADYWAERINGOBJECT);
			ACCnewtext();
			ACCdone();
			return;
			break;

		case loc_here():  
			writeSysMessage(SYSMESS_YOUDONTHAVEOBJECT);
			ACCnewtext();
			ACCdone();
			return;
			break;


		case LOCATION_CARRIED:  
			if (!objectIsWearable(objno))
			{
				writeSysMessage(SYSMESS_YOUCANTWEAROBJECT);
				ACCnewtext();
				ACCdone();
				return;
			}
			setObjectLocation(objno, LOCATION_WORN);
			writeSysMessage(SYSMESS_YOUWEAROBJECT);
			success = true;
			break;

		default: 
			writeSysMessage(SYSMESS_YOUDONTHAVETHAT);
			ACCnewtext();
			ACCdone();
			return;
			break;
	}
}



function ACCdestroy(objno)
{
	setObjectLocation(objno, LOCATION_NONCREATED);
}


function ACCcreate(objno)
{
	setObjectLocation(objno, loc_here());
}


function ACCswap(objno1,objno2)
{
	var locno1 = getObjectLocation (objno1);
	var locno2 = getObjectLocation (objno2);
	ACCplace (objno1,locno2);
	ACCplace (objno2,locno1);
	setReferredObject(objno2);
}


function ACCplace(objno, locno)
{
	setObjectLocation(objno, locno);
}

function ACCset(flagno)
{
	setFlag(flagno, SET_VALUE);
}

function ACCclear(flagno)
{
	setFlag(flagno,0);
}

function ACCplus(flagno,value)
{
	var newval = getFlag(flagno) + value;
	setFlag(flagno, newval);
}

function ACCminus(flagno,value)
{
    var newval = getFlag(flagno) - value;
    if (newval < 0) newval = 0;
	setFlag(flagno, newval);
}

function ACClet(flagno,value)
{
	setFlag(flagno,value);
}

function ACCnewline()
{
	writeText(STR_NEWLINE);
}

function ACCprint(flagno)
{
	writeText(getFlag(flagno) +'');
}

function ACCsysmess(sysno)
{
	writeSysMessage(sysno);
}

function ACCcopyof(objno,flagno)
{
	setFlag(flagno, getObjectLocation(objno))
}

function ACCcopyoo(objno1, objno2)
{
	setObjectLocation(objno2,getObjectLocation(objno1));
	setReferredObject(objno2);
}

function ACCcopyfo(flagno,objno)
{
	setObjectLocation(objno, getFlag(flagno));
}

function ACCcopyff(flagno1, flagno2)
{
	setFlag(flagno2, getFlag(flagno1));
}

function ACCadd(flagno1, flagno2)
{
	var newval = getFlag(flagno1) + getFlag(flagno2);
	setFlag(flagno2, newval);
}

function ACCsub(flagno1,flagno2)
{
	var newval = getFlag(flagno2) - getFlag(flagno1);
	if (newval < 0) newval = 0;
	setFlag(flagno2, newval);
}


function CNDparse()
{
	return (!getLogicSentence());
}


function ACClistat(locno, container_objno)   // objno is a container/suppoter number, used to list contents of objects
{
  var listingContainer = false;
  if (arguments.length > 1) listingContainer = true;
  var objscount =  getObjectCountAt(locno);
  var concealed_or_scenery_objcount = getObjectCountAtWithAttr(locno, [ATTR_CONCEALED, ATTR_SCENERY]);  
  objscount = objscount - concealed_or_scenery_objcount;
  if (!listingContainer) setFlag(FLAG_OBJECT_LIST_FORMAT, bitclear(getFlag(FLAG_OBJECT_LIST_FORMAT),7)); 
  if (!objscount) return;
  var continouslisting = bittest(getFlag(FLAG_OBJECT_LIST_FORMAT),6);
  if (listingContainer) 
  	{
  		writeText(' (');
  		if (objectIsAttr(container_objno, ATTR_SUPPORTER)) writeSysMessage(SYSMESS_OVER_YOUCANSEE); else if (objectIsAttr(container_objno, ATTR_CONTAINER)) writeSysMessage(SYSMESS_INSIDE_YOUCANSEE);
  		continouslisting = true;  // listing contents of container always continuous
  	}
  
  if (!listingContainer)
  {
    setFlag(FLAG_OBJECT_LIST_FORMAT, bitset(getFlag(FLAG_OBJECT_LIST_FORMAT),7)); 
    if (!continouslisting) ACCnewline();
  }
  var progresscount = 0;
  for (var i=0;i<num_objects;i++)
  {
  	if (getObjectLocation(i) == locno)
  		if  ( ((!objectIsNPC(i)) || (!bittest(getFlag(FLAG_PARSER_SETTINGS),3)))  && (!objectIsAttr(i,ATTR_CONCEALED)) && (!objectIsAttr(i,ATTR_SCENERY))   ) // if not an NPC or parser setting say NPCs are considered objects, and object is not concealed nor scenery
  		  { 
  		     writeText(h_listText(locno,container_objno,i)); 
  		     if ((objectIsAttr(i,ATTR_SUPPORTER))  || (  (objectIsAttr(i,ATTR_TRANSPARENT))  && (objectIsAttr(i,ATTR_CONTAINER))))  ACClistat(i, i);
  		     progresscount++
  		     if (continouslisting)
  		     {
		  			if (progresscount <= objscount - 2) writeSysMessage(SYSMESS_LISTSEPARATOR);
  					if (progresscount == objscount - 1) writeSysMessage(SYSMESS_LISTLASTSEPARATOR);
  					if (!listingContainer) if (progresscount == objscount ) writeSysMessage(SYSMESS_LISTEND);
  			 } else ACCnewline();
  		  }; 
  }
  if (arguments.length > 1) writeText(')');
}


function ACClistnpc(locno)
{
  var npccount =  getNPCCountAt(locno);
  setFlag(FLAG_OBJECT_LIST_FORMAT, bitclear(getFlag(FLAG_OBJECT_LIST_FORMAT),5)); 
  if (!npccount) return;
  setFlag(FLAG_OBJECT_LIST_FORMAT, bitset(getFlag(FLAG_OBJECT_LIST_FORMAT),5)); 
  continouslisting = bittest(getFlag(FLAG_OBJECT_LIST_FORMAT),6);
  writeSysMessage(SYSMESS_NPCLISTSTART);
  if (!continouslisting) ACCnewline();
  if (npccount==1)  writeSysMessage(SYSMESS_NPCLISTCONTINUE); else writeSysMessage(SYSMESS_NPCLISTCONTINUE_PLURAL);
  var progresscount = 0;
  var i;
  for (i=0;i<num_objects;i++)
  {
  	if (getObjectLocation(i) == locno)
  		if ( (objectIsNPC(i)) && (!objectIsAttr(i,ATTR_CONCEALED)) ) // only NPCs not concealed
  		  { 
  		     writeText(h_listText(locno,undefined,i)); 
  		     progresscount++
  		     if (continouslisting)
  		     {
		  	 	if (progresscount <= npccount - 2) writeSysMessage(SYSMESS_LISTSEPARATOR);
  			 	if (progresscount == npccount - 1) writeSysMessage(SYSMESS_LISTLASTSEPARATOR);
  			 	if (progresscount == npccount ) writeSysMessage(SYSMESS_LISTEND);
  			 } else ACCnewline();
  		  }; 
  }
}


function ACClistobj()
{
  var locno = loc_here();
  var objscount =  getObjectCountAt(locno);
  var concealed_or_scenery_objcount = getObjectCountAtWithAttr(locno, [ATTR_CONCEALED, ATTR_SCENERY]);

  objscount = objscount - concealed_or_scenery_objcount;
  if (objscount)
  {
	  writeSysMessage(SYSMESS_YOUCANSEE);
      ACClistat(loc_here());
  }
}

function ACCprocess(procno)
{
	if (procno > last_process) 
	{
		writeText(STR_WRONG_PROCESS);
		ACCnewtext();
		ACCdone();
	}
	callProcess(procno);
    if (describe_location_flag) done_flag = true;
}

function ACCmes(mesno)
{
	writeMessage(mesno);
}

function ACCmode(mode)
{
	setFlag(FLAG_MODE, mode);
}

function ACCtime(length, settings)
{
	setFlag(FLAG_TIMEOUT_LENGTH, length);
	setFlag(FLAG_TIMEOUT_SETTINGS, settings);
}

function ACCdoall(locno)
{
	doall_flag = true;
	if (locno == LOCATION_HERE) locno = loc_here();
	// Each object will be considered for doall loop if is at locno and it's not the object specified by the NOUN2/ADJECT2 pair and it's not a NPC (or setting to consider NPCs as objects is set)
	setFlag(FLAG_DOALL_LOC, locno);
	var doall_obj;
	doall_loop:
	for (doall_obj=0;(doall_obj<num_objects) && (doall_flag);doall_obj++)  
	{
		if (getObjectLocation(doall_obj) == locno)
			if ((!objectIsNPC(doall_obj)) || (!bittest(getFlag(FLAG_PARSER_SETTINGS),3))) 
 			 if (!objectIsAttr(doall_obj, ATTR_CONCEALED)) 
 			  if (!objectIsAttr(doall_obj, ATTR_SCENERY)) 
				if (!( (objectsNoun[doall_obj]==getFlag(FLAG_NOUN2))  &&    ((objectsAdjective[doall_obj]==getFlag(FLAG_ADJECT2)) || (objectsAdjective[doall_obj]==EMPTY_WORD)) ) ) // implements "TAKE ALL EXCEPT BIG SWORD"
				{
					setFlag(FLAG_NOUN1, objectsNoun[doall_obj]);
					setFlag(FLAG_ADJECT1, objectsAdjective[doall_obj]);
					setReferredObject(doall_obj);
					callProcess(process_in_doall);
					if (describe_location_flag) 
						{
							doall_flag = false;
							entry_for_doall = '';
							break doall_loop;
						}
				}
	}
	doall_flag = false;
	entry_for_doall = '';
	if (describe_location_flag) descriptionLoop();
}

function ACCrescan(action_tag)
{
	rescan_flag = true;
	rescan_from = action_tag;
	callProcess(PROCESS_RESPONSE);
	if ( describe_location_flag || waitkey_callback_function.length || waitkey_turn_requested || waitkey_order_requested )
	{
		waitkey_turn_requested = true;
	} else
	{
		callProcess(PROCESS_TURN);
		rescan_flag = false;
	}
}

function ACCprompt(value)  // deprecated
{
	setFlag(FLAG_PROMPT, value);
	setInputPlaceHolder();
}


function ACCweigh(objno, flagno)
{
	var weight = getObjectWeight(objno);
	setFlag(flagno, weight);
}

function ACCputin(objno, locno)
{
	success = false;
	setReferredObject(objno);
	if (getObjectLocation(objno) == LOCATION_WORN)
	{
		writeSysMessage(SYSMESS_YOUAREALREADYWEARINGTHAT);
		ACCnewtext();
		ACCdone();
		return;
	}

	if (getObjectLocation(objno) == loc_here())
	{
		writeSysMessage(SYSMESS_YOUDONTHAVEOBJECT);
		ACCnewtext();
		ACCdone();
		return;
	}

	if (getObjectLocation(objno) == LOCATION_CARRIED)
	{
		setObjectLocation(objno, locno);
		if (objectIsAttr(locno, ATTR_SUPPORTER)) writeSysMessage(SYSMESS_YOUPUTOBJECTON); else writeSysMessage(SYSMESS_YOUPUTOBJECTIN);
		writeText(getObjectFixArticles(locno));
		writeSysMessage(SYSMESS_PUTINTAKEOUTTERMINATION);
		success = true;
		return;
	}

	writeSysMessage(SYSMESS_YOUDONTHAVEOBJECT);
	ACCnewtext();
	ACCdone();
}


function ACCtakeout(objno, locno)
{
	success = false;
	setReferredObject(objno);
	if ((getObjectLocation(objno) == LOCATION_WORN) || (getObjectLocation(objno) == LOCATION_CARRIED))
	{
		writeSysMessage(SYSMESS_YOUALREADYHAVEOBJECT);
		ACCnewtext();
		ACCdone();
		return;
	}

	if (getObjectLocation(objno) == loc_here())
	{
		if (objectIsAttr(locno, ATTR_SUPPORTER)) writeSysMessage(SYSMESS_YOUCANTTAKEOBJECTFROM); else writeSysMessage(SYSMESS_YOUCANTTAKEOBJECTOUTOF);
		writeText(getObjectFixArticles(locno));
		writeSysMessage(SYSMESS_PUTINTAKEOUTTERMINATION);
		ACCnewtext();
		ACCdone();
		return;
	}

	if (getObjectWeight(objno) + getLocationObjectsWeight(LOCATION_WORN) + getLocationObjectsWeight(LOCATION_CARRIED) >  getFlag(FLAG_MAXWEIGHT_CARRIED))
	{
		writeSysMessage(SYSMESS_WEIGHSTOOMUCH);
		ACCnewtext();
		ACCdone();
		return;
	}

	if (getFlag(FLAG_OBJECTS_CARRIED_COUNT) >= getFlag(FLAG_MAXOBJECTS_CARRIED))
	{		
		writeSysMessage(SYSMESS_CANTCARRYANYMORE);
		ACCnewtext();
		ACCdone();
		return;
	}

	setObjectLocation(objno, LOCATION_CARRIED);
	writeSysMessage(SYSMESS_YOUTAKEOBJECT);
	success = true;


}
function ACCnewtext()
{
	player_order_buffer = '';
}

function ACCability(maxObjectsCarried, maxWeightCarried)
{
	setFlag(FLAG_MAXOBJECTS_CARRIED, maxObjectsCarried);
	setFlag(FLAG_MAXWEIGHT_CARRIED, maxWeightCarried);
}

function ACCweight(flagno)
{
	var weight_carried = getLocationObjectsWeight(LOCATION_CARRIED);
	var weight_worn = getLocationObjectsWeight(LOCATION_WORN);
	var total_weight = weight_worn + weight_carried;
	setFlag(flagno, total_weight);
}


function ACCrandom(flagno)
{
	 setFlag(flagno, 1 + Math.floor((Math.random()*100)));
}

function ACCwhato()
{
	var whatofound = getReferredObject();
	if (whatofound != EMPTY_OBJECT) setReferredObject(whatofound);
}

function ACCputo(locno)
{
	setObjectLocation(getFlag(FLAG_REFERRED_OBJECT), locno);
}

function ACCnotdone()
{
	done_flag = false;
}

function ACCautop(locno)
{
	var objno =findMatchingObject(LOCATION_CARRIED);
	if (objno != EMPTY_OBJECT) { ACCputin(objno, locno); return; };
	objno =findMatchingObject(LOCATION_WORN);
	if (objno != EMPTY_OBJECT) { ACCputin(objno, locno); return; };
	objno = findMatchingObject(loc_here());
	if (objno != EMPTY_OBJECT) { ACCputin(objno, locno); return; };
	objno = findMatchingObject(null); // anywhere
	if (objno != EMPTY_OBJECT) 
		{ 
			writeSysMessage(SYSMESS_YOUDONTHAVETHAT);
			ACCnewtext();
			ACCdone();
			return; 
		};

	success = false;
	writeSysMessage(SYSMESS_CANTDOTHAT);
	ACCnewtext();
	ACCdone();
}


function ACCautot(locno)
{

	var objno =findMatchingObject(locno);
	if (objno != EMPTY_OBJECT) { ACCtakeout(objno, locno); return; };
	objno =findMatchingObject(LOCATION_CARRIED);
	if (objno != EMPTY_OBJECT) { ACCtakeout(objno, locno); return; };
	objno =findMatchingObject(LOCATION_WORN);
	if (objno != EMPTY_OBJECT) { ACCtakeout(objno, locno); return; };
	objno = findMatchingObject(loc_here());
	if (objno != EMPTY_OBJECT) { ACCtakeout(objno, locno); return; };

	objno = findMatchingObject(null); // anywhere
	if (objno != EMPTY_OBJECT) 
		{ 
			if (objectIsAttr(locno, ATTR_SUPPORTER)) writeSysMessage(SYSMESS_YOUCANTTAKEOBJECTFROM); else writeSysMessage(SYSMESS_YOUCANTTAKEOBJECTOUTOF);
			writeText(getObjectFixArticles(locno));
			writeSysMessage(SYSMESS_PUTINTAKEOUTTERMINATION)
			ACCnewtext();
			ACCdone();
			return; 
		};

	success = false;
	writeSysMessage(SYSMESS_CANTDOTHAT);
	ACCnewtext();
	ACCdone();
	
}


function CNDmove(flagno)
{
	var locno = getFlag(flagno);
	var dirno = getFlag(FLAG_VERB);
	var destination = getConnection( locno,  dirno);
	if (destination != -1)
		{
			 setFlag(flagno, destination);
			 return true;
		}
	return false;
}


function ACCextern(writeno)
{
	eval(writemessages[writeno]);
}


function ACCpicture(picno)
{
	drawPicture(picno);
}



function ACCgraphic(option)
{
	graphicsON = (option==1);  
	if (!graphicsON) hideGraphicsWindow();	
}

function ACCbeep(sfxno, channelno, times)
{
	if ((channelno <1) || (channelno >MAX_CHANNELS)) return;  //SFX channels from 1 to MAX_CHANNELS, channel 0 is for location music and can't be used here
	sfxplay(sfxno, channelno, times, 'play');
}

function ACCsound(value)
{
	soundsON = (value==1);  
	if (!soundsON) sfxstopall();
}

function CNDozero(objno, attrno)
{
	if (attrno > 63) return false;
	return !objectIsAttr(objno, attrno);

}

function CNDonotzero(objno, attrno)
{
	return objectIsAttr(objno, attrno);
}

function ACCoset(objno, attrno)
{
	if (attrno > 63) return;
	if (attrno <= 31)
	{
		attrs = getObjectLowAttributes(objno);
		var attrs = bitset(attrs, attrno);
		setObjectLowAttributes(objno, attrs);
		return;
	}
	var attrs = getObjectHighAttributes(objno);
	attrno = attrno - 32;
	attrs = bitset(attrs, attrno);
	setObjectHighAttributes(objno, attrs);

}

function ACCoclear(objno, attrno)
{
	if (attrno > 63) return;
	if (attrno <= 31)
	{
		var attrs = getObjectLowAttributes(objno);
		attrs = bitclear(attrs, attrno);
		setObjectLowAttributes(objno, attrs);
		return;
	}
	var attrs = getObjectHighAttributes(objno);
	attrno = attrno - 32;
	attrs = bitclear(attrs, attrno);
	setObjectHighAttributes(objno, attrs);

}


function CNDislight()
{
	if (!isDarkHere()) return true;
	return lightObjectsPresent();
}



function CNDisnotlight()
{
	return ! CNDislight();
}

function ACCversion()
{
	writeText(filterText(STR_RUNTIME_VERSION));
}


function ACCwrite(writeno)
{
	writeWriteMessage(writeno);
}

function ACCwriteln(writeno)
{
	writeWriteMessage(writeno);
	ACCnewline();
}

function ACCrestart()
{
  process_restart = true;
}


function ACCtranscript()
{
	$('#transcript_area').html(transcript);
	$('.transcript_layer').show();
	inTranscript = true;
}

function ACCanykey()
{
	if ( debug_flag ) return;
	writeSysMessage(SYSMESS_PRESSANYKEY);
	inAnykey = true;
}

function ACCgetkey(flagno)
{
	getkey_return_flag = flagno;
	inGetkey = true;
}


//////////////////
//   LEGACY     //
//////////////////

// From PAW PC
function ACCbell()
{
 	// Empty, PAW PC legacy, just does nothing 
}


// From PAW Spectrum
function ACCreset()
{
	// Legacy condact, does nothing now
}


function ACCpaper(color)
{
	text_classes.paper = legacyColors[color];
	$(document.body)
		.removeClass(function (index, className) { return (className.match (/(^|\s)paper-\S+/g) || []).join(' '); })
		.addClass('paper-'+legacyColors[color])
}

function ACCink(color)
{
	text_classes.ink = legacyColors[color];
	$(document.body)
		.removeClass(function (index, className) { return (className.match (/(^|\s)ink-\S+/g) || []).join(' '); })
		.addClass('ink-'+legacyColors[color])
}

function ACCborder(color)
{
	$(document.body)
		.removeClass(function (index, className) { return (className.match (/(^|\s)border-\S+/g) || []).join(' '); })
		.addClass('border-'+legacyColors[color])
}

function ACCcharset(value)
{
	// Legacy condact, does nothing now, use CSS styles
}

function ACCline(lineno)
{
	// Legacy condact, does nothing now, use CSS styles
}

function ACCinput()
{
	// Legacy condact, does nothing now
}

function ACCsaveat()
{
	// Legacy condact, does nothing now
}

function ACCbackat()
{
	// Legacy condact, does nothing now
}

function ACCprintat()
{
	// Legacy condact, does nothing now
}

function ACCprotect()
{
	// Legacy condact, does nothing now
}

// From Superglus


function ACCdebug(value)
{
	debug_flag = value;
	pauseRemainingTime = 0;
        $(document).click(); // in case e.g. "press any key" is running
}

// Debugging tests:
function CNDisdebug()
{
	return debug_flag;
}

function CNDisnotdebug()
{
	return !debug_flag;
}




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////// CONDACTS FOR COMPILER //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function CNDverb(wordno)
{
	return (getFlag(FLAG_VERB) == wordno);
}


function CNDnoun1(wordno)
{
	return (getFlag(FLAG_NOUN1) == wordno);
}

//   PLUGINS    ;

//CND BZERO C 1 2 0 0

function CNDbzero(flagno, bitno)
{
	if (bitno>=32) return false;
	return (!bittest(getFlag(flagno), bitno));
}
//CND LOG A 14 0 0 0

function ACClog(writeno)
{
  console_log(writemessages[writeno]);
}
//CND OBJNOTFOUND C 2 9 0 0

function CNDobjnotfound(attrno, locno)
{
	for (var i=0;i<num_objects;i++) 
		if ((getObjectLocation(i) == locno) && (CNDonotzero(i,attrno))) {setFlag(FLAG_ESCAPE, i); return false; }

	setFlag(FLAG_ESCAPE, EMPTY_OBJECT);
	return true;
}
//CND BSET A 1 2 0 0

function ACCbset(flagno, bitno)
{
	if (bitno>=32) return;
	setFlag(flagno, bitset(getFlag(flagno),bitno));
}
//CND TEXTPIC A 2 2 0 0

function ACCtextpic(picno, align)
{
	var style = '';
	var post = '';
	var pre = '';
	switch(align)
	{
		case 0: post='<br style="clear:left">';break;
		case 1: style = 'float:left'; break;
		case 2: style = 'float:right'; break;
		case 3: pre='<center>';post='</center><br style="clear:left">';break;
	}
	filename = getResourceById(RESOURCE_TYPE_IMG, picno);
	if (filename)
	{
		var texto = pre + "<img alt='' class='textpic' style='"+style+"' src='"+filename+"' />" + post;
		writeText(texto);
		$(".text").scrollTop($(".text")[0].scrollHeight);
	}
}
//CND RNDWRITELN A 14 14 14 0

function ACCrndwriteln(writeno1,writeno2,writeno3)
{
	ACCrndwrite(writeno1,writeno2,writeno3);
	ACCnewline();
}
//CND VOLUME A 2 2 0 0

function ACCvolume(channelno, value)
{
	if ((channelno <1) || (channelno >MAX_CHANNELS)) return;
	sfxvolume(channelno, value);
}

//CND ISNOTDOALL C 0 0 0 0

function CNDisnotdoall()
{
	return !CNDisdoall();
}

//CND MOD A 1 2 0 0

function ACCmod(flagno, valor)
{
	if (valor == 0) return;
	setFlag(flagno, Math.floor(getFlag(flagno) % valor));
}
//CND ATGE C 8 0 0 0

function CNDatge(locno)
{
	return (getFlag(FLAG_LOCATION) >= locno);
}

//CND LISTCONTENTS A 9 0 0 0

function ACClistcontents(locno)
{
   ACClistat(locno, locno)
}
//CND LE C 1 2 0 0

function CNDle(flagno, valor)
{
	return (getFlag(flagno) <= valor);
}
//CND SETEXIT A 2 2 0 0

function ACCsetexit(value, locno)
{
	setConnection(loc_here(), value, locno);
}
//CND ISSOUND C 1 0 0 0

function CNDissound(channelno)
{
	if ((channelno <1 ) || (channelno > MAX_CHANNELS)) return false;
    return channelActive(channelno);
}
//CND RESUMEVIDEO A 0 0 0 0


function ACCresumevideo()
{
	if (typeof videoElement != 'undefined') 
		if (videoElement.paused)
		  videoElement.play();
}

//CND SYNONYM A 15 13 0 0

function ACCsynonym(wordno1, wordno2)
{
   if (wordno1!=EMPTY_WORD) setFlag(FLAG_VERB, wordno1);
   if (wordno2!=EMPTY_WORD)	setFlag(FLAG_NOUN1, wordno2);
}
//CND NORESP A 0 0 0 0

function ACCnoresp()
{
	in_response = false;
}	

//CND ISNOTDONE C 0 0 0 0

function CNDisnotdone()
{
	return !CNDisdone();
}

//CND SILENCE A 2 0 0 0

function ACCsilence(channelno)
{
	if ((channelno <1) || (channelno >MAX_CHANNELS)) return;
	sfxstop(channelno);
}
//CND TITLE A 14 0 0 0

function ACCtitle(writeno)
{
	document.title = writemessages[writeno];
}
//CND ISRESP C 0 0 0 0

function CNDisresp()
{
	return in_response;	
}

//CND RANDOMX A 1 2 0 0

function ACCrandomx(flagno, value)
{
	 setFlag(flagno, 1 + Math.floor((Math.random()*value)));
}
//CND BCLEAR A 1 2 0 0

function ACCbclear(flagno, bitno)
{
	if (bitno>=32) return;
	setFlag(flagno, bitclear(getFlag(flagno), bitno));
}
//CND CLEAREXIT A 2 0 0 0

function ACCclearexit(wordno)
{
	if (wordno< 0 ) return;
	setConnection(loc_here(),wordno, -1);
}
//CND SPACE A 0 0 0 0

function ACCspace()
{
	writeText(' ');
}
//CND COMMAND A 2 0 0 0

function ACCcommand(value)
{
	if (value) {$('.input').show();$('.input').focus();} else $('.input').hide();
}
//CND WHATOX A 1 0 0 0

function ACCwhatox(flagno)
{
	var whatoxfound = getReferredObject();
	setFlag(flagno,whatoxfound);
}

//CND ZONE C 8 8 0 0

function CNDzone(locno1, locno2)
{

	if (loc_here()<locno1) return false;
	if (loc_here()>locno2) return false;
	return true;
}
//CND BLOCK A 14 2 2 0

function ACCblock(writeno, picno, procno)
{
   inBlock = true;
   disableInterrupt();
   $('.block_layer').hide();
   var text = getWriteMessageText(writeno);
   $('.block_text').html(text);
   
	var filename = getResourceById(RESOURCE_TYPE_IMG, picno);
	if (filename)
	{
		var imgsrc = '<img class="block_picture" src="' + filename + '" />';
		$('.block_graphics').html(imgsrc);
	}
    if (procno == 0 ) unblock_process ==null; else unblock_process = procno;
    $('.block_layer').show();

}
//CND ISMOV C 0 0 0 0

function CNDismov()
{
	if ((getFlag(FLAG_VERB)<NUM_CONNECTION_VERBS) && (getFlag(FLAG_NOUN1)==EMPTY_WORD)) return true;

	if ((getFlag(FLAG_NOUN1)<NUM_CONNECTION_VERBS) && (getFlag(FLAG_VERB)==EMPTY_WORD)) return true;

    if ((getFlag(FLAG_VERB)<NUM_CONNECTION_VERBS) && (getFlag(FLAG_NOUN1)<NUM_CONNECTION_VERBS)) return true;
    
    return false;
}

//CND OBJFOUND C 2 9 0 0

function CNDobjfound(attrno, locno)
{

	for (var i=0;i<num_objects;i++) 
		if ((getObjectLocation(i) == locno) && (CNDonotzero(i,attrno))) {setFlag(FLAG_ESCAPE, i); return true; }
	setFlag(FLAG_ESCAPE, EMPTY_OBJECT);
	return false;
}

//CND ATLE C 8 0 0 0

function CNDatle(locno)
{
	return (getFlag(FLAG_LOCATION) <= locno);
}

//CND WARNINGS A 2 0 0 0

function ACCwarnings(value)
{
	if (value) showWarnings = true; else showWarnings = false;
}
//CND ISDONE C 0 0 0 0

function CNDisdone()
{
	return done_flag;	
}

//CND GETEXIT A 2 2 0 0

function ACCgetexit(value,flagno)
{
	var locno = getConnection(loc_here(),value);
	if (locno == -1)
		{
			setFlag(flagno, NO_EXIT);
			return;
		}
	setFlag(flagno,locno);
}
//CND PLAYVIDEO A 14 2 2 0

var videoLoopCount;
var videoEscapable;
var videoElement;

function ACCplayvideo(strno, loopCount, settings)
{
	videoEscapable = settings & 1; // if bit 0 of settings is 1, video can be interrupted with ESC key
	if (loopCount == 0) loopCount = -1;
	videoLoopCount = loopCount;

	str = '<video id="videoframe" height="100%">';
	str = str + '<source src="dat/' + writemessages[strno] + '.mp4" type="video/mp4" codecs="avc1.4D401E, mp4a.40.2">';
	str = str + '<source src="dat/' + writemessages[strno] + '.webm" type="video/webm" codecs="vp8.0, vorbis">';
	str = str + '<source src="dat/' + writemessages[strno] + '.ogg" type="video/ogg" codecs="theora, vorbis">';
	str = str + '</video>';
	$('.graphics').removeClass('hidden');
	$('.graphics').addClass('half_graphics');
	$('.text').removeClass('all_text');
	$('.text').addClass('half_text');
	$('.graphics').html(str);
	$('#videoframe').css('height','100%');
	$('#videoframe').css('display','block');
	$('#videoframe').css('margin-left','auto');
	$('#videoframe').css('margin-right','auto');
	$('#graphics').show();
	videoElement = document.getElementById('videoframe');
	videoElement.onended = function() 
	{
    	if (videoLoopCount == -1) videoElement.play();
    	else
    	{
    		videoLoopCount--;
    		if (videoLoopCount) videoElement.play();
    	}
	};
	videoElement.play();

}

// Hook into location description to avoid video playing to continue playing while hidden after changing location
var old_video_h_description_init = h_description_init ;
var h_description_init =  function  ()
{
	if ($("#videoframe").length > 0) $("#videoframe").remove();	
	old_video_h_description_init();
}

// Hook into keypress to cancel video playing if ESC is pressed and video is skippable

var old_video_h_keydown =  h_keydown;
h_keydown = function (event)
{
 	if ((event.keyCode == 27) && (typeof videoElement != 'undefined') && (!videoElement.ended) && (videoEscapable)) 
 	{
 		videoElement.pause(); 
 		return false;  // we've finished attending ESC press
 	}
 	else return old_video_h_keydown(event);
}




//CND FADEIN A 2 2 2 0

function ACCfadein(sfxno, channelno, times)
{
	if ((channelno <1) || (channelno >MAX_CHANNELS)) return;  //SFX channels from 1 to MAX_CHANNELS, channel 0 is for location music and can't be used here
	sfxplay(sfxno, channelno, times, 'fadein');
}
//CND NPCAT A 9 1 0 0

function ACCnpcat(locno, flagno)
{
	setFlag(flagno,getNPCCountAt(locno));
}

//CND OBJAT A 9 1 0 0

function ACCobjat(locno, flagno)
{
	setFlag(flagno, getObjectCountAt(locno));
}
//CND ONEG A 4 2 0 0

function ACConeg(objno, attrno)
{
	if (attrno > 63) return;
	if (attrno <= 31)
	{
		var attrs = getObjectLowAttributes(objno);
		attrs = bitneg(attrs, attrno);
		setObjectLowAttributes(objno, attrs);
		return;
	}
	var attrs = getObjectHighAttributes(objno);
	attrno = attrno - 32;
	attrs = bitneg(attrs, attrno);
	setObjectHighAttributes(objno, attrs);
}

//CND ASK W 14 14 1 0

// Global vars for ASK


var inAsk = false;
var ask_responses = null;
var ask_flagno = null;



function ACCask(writeno, writenoOptions, flagno)
{
	inAsk = true;
	writeWriteMessage(writeno);
	ask_responses = getWriteMessageText(writenoOptions);
	ask_flagno = flagno;
}



// hook replacement
var old_ask_h_keydown  = h_keydown;
h_keydown  = function (event)
{
	if (inAsk)
	{
		var keyCodeAsChar = String.fromCharCode(event.keyCode).toLowerCase();
		if (ask_responses.indexOf(keyCodeAsChar)!= -1)
		{
			setFlag(ask_flagno, ask_responses.indexOf(keyCodeAsChar));
			inAsk = false;
			event.preventDefault();
            $('.input').show();
		    $('.input').focus();
		    hideBlock();
			waitKeyCallback();
		};
		return false; // if we are in ASK condact, no keypress should be considered other than ASK response
	} else return old_ask_h_keydown(event);
}

//CND RESP A 0 0 0 0

function ACCresp()
{
	in_response = true;
}	

//CND HELP A 0 0 0 0

function ACChelp()
{
	if (getLang()=='EN') EnglishHelp(); else SpanishHelp();
}	

function EnglishHelp()
{
	writeText('HOW DO I SEND COMMANDS TO THE PC?');
	writeText(STR_NEWLINE);
	writeText('Use simple orders: OPEN DOOR, TAKE KEY, GO UP, etc.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I MOVE IN THE MAP?');
	writeText(STR_NEWLINE);
	writeText('Usually you will have to use compass directions as north (shortcut: "N"), south (S), east (E), west (W) or other directions (up, down, enter, leave, etc.). Some games allow complex order like "go to well". Usually you would be able to know avaliable exits by location description, some games also provide the "EXITS" command.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I CHECK MY INVENTORY?');
	writeText(STR_NEWLINE);
	writeText('type INVENTORY (shortcut "I")');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I USE THE OBJECTS?');
	writeText(STR_NEWLINE);
	writeText('Use the proper verb, that is, instead of USE KEY type OPEN.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I CHECK SOMETHING CLOSELY?');
	writeText(STR_NEWLINE);
	writeText('Use "examine" verb: EXAMINE DISH. (shortcut: EX)');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I SEE AGAIN THE CURRENT LOCATION DSCRIPTION?');
	writeText(STR_NEWLINE);
	writeText('Type LOOK (shortcut "M").');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I TALK TO OTHER CHARACTERS?');
	writeText(STR_NEWLINE);
	writeText('Most common methods are [CHARACTER, SENTENCE] or [SAY CHARACTER "SENTENCE"]. For instance: [JOHN, HELLO] o [SAY JOHN "HELLO"]. Some games also allow just [TALK TO JOHN]. ');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I PUT SOMETHING IN A CONTAINER, HOW CAN I TAKE SOMETHING OUT?');
	writeText(STR_NEWLINE);
	writeText('PUT KEY IN BOX. TAKE KEY OUT OF BOX. INSERT KEY IN BOX. EXTRACT KEY FROM BOX.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I PUT SOMETHING ON SOMETHING ELSE?');
	writeText(STR_NEWLINE);
	writeText('PUT KEY ON TABLE. TAKE KEY FROM TABLE');
	writeText(STR_NEWLINE + STR_NEWLINE);
}

function SpanishHelp()
{
	writeText('¿CÓMO DOY ORDENES AL PERSONAJE?');
	writeText(STR_NEWLINE);
	writeText('Utiliza órdenes en imperativo o infinitivo: ABRE PUERTA, COGER LLAVE, SUBIR, etc.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('¿CÓMO ME MUEVO POR EL JUEGO?');
	writeText(STR_NEWLINE);
	writeText('Por regla general, mediante los puntos cardinales como norte (abreviado "N"), sur (S), este (E), oeste (O) o direcciones espaciales (arriba, abajo, bajar, subir, entrar, salir, etc.). Algunas aventuras permiten también cosas como "ir a pozo". Normalmente podrás saber en que dirección puedes ir por la descripción del sitio, aunque algunos juegos facilitan el comando "SALIDAS" que te dirá exactamente cuales hay.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('¿CÓMO PUEDO SABER QUE OBJETOS LLEVO?');
	writeText(STR_NEWLINE);
	writeText('Teclea INVENTARIO (abreviado "I")');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('¿CÓMO USO LOS OBJETOS?');
	writeText(STR_NEWLINE);
	writeText('Utiliza el verbo correcto, en lugar de USAR ESCOBA escribe BARRER.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('¿CÓMO PUEDO MIRAR DE CERCA UN OBJETO U OBSERVARLO MÁS DETALLADAMENTE?');
	writeText(STR_NEWLINE);
	writeText('Con el verbo examinar: EXAMINAR PLATO. Generalmente se puede usar la abreviatura "EX" : EX PLATO.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('¿CÓMO PUEDO VER DE NUEVO LA DESCRIPCIÓN DEL SITIO DONDE ESTOY?');
	writeText(STR_NEWLINE);
	writeText('Escribe MIRAR (abreviado "M").');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('¿CÓMO HABLO CON LOS PERSONAJES?');
	writeText(STR_NEWLINE);
	writeText('Los modos más comunes son [PERSONAJE, FRASE] o [DECIR A PERSONAJE "FRASE"]. Por ejemplo: [LUIS, HOLA] o [DECIR A LUIS "HOLA"]. En algunas aventuras también se puede utilizar el formato [HABLAR A LUIS]. ');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('¿CÓMO METO ALGO EN UN CONTENEDOR? ¿COMO SACO ALGO?');
	writeText(STR_NEWLINE);
	writeText('METER LLAVE  EN CAJA. SACAR LLAVE DE CAJA');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('¿CÓMO PONGO ALGO SOBRE ALGO? ¿COMO LO QUITO?');
	writeText(STR_NEWLINE);
	writeText('PONER LLAVE EN MESA. COGER LLAVE DE MESA');
	writeText(STR_NEWLINE + STR_NEWLINE);
}
//CND EXITS A 8 5 0 0

function ACCexits(locno,mesno)
{
  writeText(getExitsText(locno,mesno));
}

//CND HOOK A 14 0 0 5

function ACChook(writeno)
{
	h_code(writemessages[writeno]);
}
//CND SETWEIGHT A 4 2 0 0

function ACCsetweight(objno, value)
{
   objectsWeight[objno] = value;
}

//CND BNOTZERO C 1 2 0 0

function CNDbnotzero(flagno, bitno)
{
	if (bitno>=32) return false;
	return (bittest(getFlag(flagno), bitno));
}

//CND PICTUREAT A 2 2 2 0

/*
In order to determine the actual size of both background image and pictureat image they should be loaded, thus two chained "onload" are needed. That is, 
background image is loaded to determine its size, then pictureat image is loaded to determine its size. Size of currently displayed background image cannot
be used as it may have been already stretched.
*/

function ACCpictureat(x,y,picno)
{
	var filename = getResourceById(RESOURCE_TYPE_IMG, picno);
	if (!filename) return;

	// Check location has a picture, otherwise exit
	var currentBackgroundScreenImage = $('.location_picture');
	if (!currentBackgroundScreenImage) return;

	// Create a new image with the contents of current background image, to be able to calculate original height of image
	var virtualBackgroundImage = new Image();
	// Pass required data as image properties in order to be avaliable at "onload" event
	virtualBackgroundImage.bg_data=[];
	virtualBackgroundImage.bg_data.filename = filename; 
	virtualBackgroundImage.bg_data.x = x;
	virtualBackgroundImage.bg_data.y = y;
	virtualBackgroundImage.bg_data.picno = picno;
	virtualBackgroundImage.bg_data.currentBackgroundScreenImage = currentBackgroundScreenImage;


	// Event triggered when virtual background image is loaded
	virtualBackgroundImage.onload = function()
		{
			var originalBackgroundImageHeight = this.height;
			var scale = this.bg_data.currentBackgroundScreenImage.height() / originalBackgroundImageHeight;

			// Create a new image with the contents of picture to show with PICTUREAT, to be able to calculate height of image
			var virtualPictureAtImage = new Image();
			// Also pass data from background image as property so they are avaliable in the onload event
			virtualPictureAtImage.pa_data = [];
			virtualPictureAtImage.pa_data.x = this.bg_data.x;
			virtualPictureAtImage.pa_data.y = this.bg_data.y;
			virtualPictureAtImage.pa_data.picno = this.bg_data.picno;
			virtualPictureAtImage.pa_data.filename = this.bg_data.filename;
			virtualPictureAtImage.pa_data.scale = scale;
			virtualPictureAtImage.pa_data.currentBackgroundImageWidth = this.bg_data.currentBackgroundScreenImage.width();
			
			// Event triggered when virtual PCITUREAT image is loaded
			virtualPictureAtImage.onload = function ()
			{
		    		var imageHeight = this.height; 
					var x = Math.floor(this.pa_data.x * this.pa_data.scale);
					var y = Math.floor(this.pa_data.y * this.pa_data.scale);
					var newimageHeight = Math.floor(imageHeight * this.pa_data.scale);
					var actualBackgroundImageX = Math.floor((parseInt($('.graphics').width()) - this.pa_data.currentBackgroundImageWidth)/2);;
					var id = 'pictureat_' + this.pa_data.picno;

					// Add new image, notice we are not using the virtual image, but creating a new one
					$('.graphics').append('<img  alt="" id="'+id+'" style="display:none" />');				
					$('#' + id).css('position','absolute');
					$('#' + id).css('left', actualBackgroundImageX + x  + 'px');
					$('#' + id).css('top',y + 'px');
					$('#' + id).css('z-index','100');
					$('#' + id).attr('src', this.pa_data.filename);
					$('#' + id).css('height',newimageHeight + 'px');
					$('#' + id).show();
			}

			// Assign the virtual pictureat image the destinationsrc to trigger the "onload" event
			virtualPictureAtImage.src = this.bg_data.filename;
			};

	// Assign the virtual background image same src as current background to trigger the "onload" event
	virtualBackgroundImage.src = currentBackgroundScreenImage.attr("src");

}

//CND WHATOX2 A 1 0 0 0

function ACCwhatox2(flagno)
{	
	var auxNoun = getFlag(FLAG_NOUN1);
	var auxAdj = getFlag(FLAG_ADJECT1);
	setFlag(FLAG_NOUN1, getFlag(FLAG_NOUN2));
	setFlag(FLAG_ADJECT1, getFlag(FLAG_ADJECT2));
	var whatox2found = getReferredObject();
	setFlag(flagno,whatox2found);
	setFlag(FLAG_NOUN1, auxNoun);
	setFlag(FLAG_ADJECT1, auxAdj);
}
//CND PAUSEVIDEO A 0 0 0 0


function ACCpausevideo()
{
	if (typeof videoElement != 'undefined') 
		if (!videoElement.ended) 
		if (!videoElement.paused)
		   videoElement.pause();
}

//CND ISNOTMOV C 0 0 0 0

function CNDisnotmov()
{
	return !CNDismov();	
}

//CND VOLUMEVIDEO A 2 0 0 0


function ACCvolumevideo(value)
{
	if (typeof videoElement != 'undefined') 
		videoElement.volume = value  / 65535;
}

//CND MUL A 1 2 0 0

function ACCmul(flagno, valor)
{
	if (valor == 0) return;
	setFlag(flagno, Math.floor(getFlag(flagno) * valor));
}
//CND YOUTUBE A 14 0 0 0

function ACCyoutube(strno)
{

	var str = '<iframe id="youtube" width="560" height="315" src="http://www.youtube.com/embed/' + writemessages[strno] + '?autoplay=1&controls=0&modestbranding=1&showinfo=0" frameborder="0" allowfullscreen></iframe>'
	$('.graphics').removeClass('hidden');
	$('.graphics').addClass('half_graphics');
	$('.text').removeClass('all_text');
	$('.text').addClass('half_text');
	$('.graphics').html(str);
	$('#youtube').css('height','100%');
	$('#youtube').css('display','block');
	$('#youtube').css('margin-left','auto');
	$('#youtube').css('margin-right','auto');
	$('.graphics').show();
}


// Hook into location description to avoid video playing to continue playing while hidden after changing location
var old_youtube_h_description_init = h_description_init ;
var h_description_init =  function  ()
{
	if ($("#youtube").length > 0) $("#youtube").remove();	
	old_youtube_h_description_init();
}
//CND BNEG A 1 2 0 0

function ACCbneg(flagno, bitno)
{
	if (bitno>=32) return;
	setFlag(flagno, bitneg(getFlag(flagno),bitno));
}
//CND SOFTBLOCK A 2 0 0 0

function ACCsoftblock(procno)
{
   inBlock = true;
   disableInterrupt();

   $('.block_layer').css('display','none');
   $('.block_text').html('');
   $('.block_graphics').html('');
   $('.block_layer').css('background','transparent');
   if (procno == 0 ) unblock_process ==null; else unblock_process = procno;
   $('.block_layer').css('display','block');
}
//CND ISVIDEO C 0 0 0 0

function CNDisvideo()
{
	if (typeof videoElement == 'undefined') return false;
	if (!videoLoopCount) return false;
	if (videoElement.paused) return false;
	return true;
}

//CND GE C 1 2 0 0

function CNDge(flagno, valor)
{
	return (getFlag(flagno)>=valor);
}
//CND DIV A 1 2 0 0

function ACCdiv(flagno, valor)
{
	if (valor == 0) return;
	setFlag(flagno, Math.floor(getFlag(flagno) / valor));
}
//CND BREAK A 0 0 0 0

function ACCbreak()
{
	doall_flag = false; 
	entry_for_doall = '';
}
//CND ISNOTRESP C 0 0 0 0

function CNDisnotresp()
{
	return !in_response;	
}

//CND RNDWRITE A 14 14 14 0

function ACCrndwrite(writeno1,writeno2,writeno3)
{
	var val = Math.floor((Math.random()*3));
	switch (val)
	{
		case 0 : writeWriteMessage(writeno1);break;
		case 1 : writeWriteMessage(writeno2);break;
		case 2 : writeWriteMessage(writeno3);break;
	}
}
//CND ISNOTSOUND C 1 0 0 0

function CNDisnotsound(channelno)
{
  if ((channelno <1) || (channelno >MAX_CHANNELS)) return false;
  return !(CNDissound(channelno));
}
//CND ISDOALL C 0 0 0 0

function CNDisdoall()
{
	return doall_flag;	
}

//CND ISMUSIC C 0 0 0 0

function CNDismusic()
{
	return (CNDissound(0));	
}

//CND FADEOUT A 2 2 0 0

function ACCfadeout(channelno, value)
{
	if ((channelno <1) || (channelno >MAX_CHANNELS)) return;  //SFX channels from 1 to MAX_CHANNELS, channel 0 is for location music and can't be used here
	sfxfadeout(channelno, value);
}
//CND ISNOTMUSIC C 0 0 0 0

function CNDisnotmusic()
{
  return !CNDismusic();
}

//CND BACKCMD A 14 0 0 0

function ACCbackcmd(mesno)
{
    return navigation_move(getWriteMessageText(mesno));
}

//CND TURNEQ C 1 0 0 0
function CNDturneq(n) { return (getFlag(FLAG_TURNS_LOW) + 256*getFlag(FLAG_TURNS_HIGH)) == n; }


//LIB autoloadatend

var h_old_autoloadatend_restart = h_restart;

h_restart = function()
{
	var json_str = localStorage.getItem(STR_SAVEGAME_PREFIX+'autosave');
	if (json_str)
	{
		h_old_autoloadatend_restart(false);
		restoreSaveGameObject(JSON.parse(json_str));
		descriptionLoop();
	} else
		h_old_autoloadatend_restart();
}

//CND TURNLT C 1 0 0 0
function CNDturnlt(n) { return (getFlag(FLAG_TURNS_LOW) + 256*getFlag(FLAG_TURNS_HIGH)) < n; }


//CND BEEP2 W 2 2 0 0

// two-argument version of the "beep" command, compatible with legacy Quill/PAW usage

var ACCbeep2 = (function()
{

	// in supporting browsers, set ACCbeep2 to a function that plays a beep
	// otherwise, set it to an empty function

	var context = new( window.AudioContext || window.webkitAudioContext )();

	if ( context )
	{
		// audio API supported - use the real function:

		var gain = context.createGain();
		gain.gain.value = 0.25;
		gain.connect(context.destination);

		/*
		 * Parameter meanings:
		 *
		 * The PAW documentation describes describes the BEEP arguments as:
		 *
		 *     duration(1/100sec) pitch(BASIC+60/2)
		 *
		 * Testing in an emulator shows the correct description would be:
		 *
		 *     duration((N-1)/10sec) pitch((BASIC+60)*2)
		 *
		 * The function below works the same as the emulator in tests.
		 */
		return function( centiseconds, pitch )
		{
			if ( debug_flag || centiseconds < 1 )
			{
				pauseRemainingTime = 0;
				inPause = true;
				return;
			}
			var oscillator = context.createOscillator();
			oscillator.frequency.value = 261.624 * Math.pow( 2, ( pitch - 120 ) / 24 );
			/*
			 * A spectrum emulator produces an audio waveform that looks
			 * something like an inverse sawtooth wave.  In theory,
			 * you could create a custom type with a similar waveform.
			 * In practice, "sawtooth" waves sound completely wrong,
			 * but "square" waves produce a pleasingly 8-bit effect:
			 */
			oscillator.type = 'square';
			oscillator.connect(gain);
			oscillator.start();
			oscillator.stop( context.currentTime + (centiseconds-1) / 100 );
			ACCpause((centiseconds>1)?(centiseconds-1)*0.5:-1);
		}
	} else
	{
		// unsupported in this browser - use the dummy function:
		return function(centiseconds)
		{
			ACCpause((centiseconds>1)?(centiseconds-1)*5:-1);
		}
	}

})();

//CND NOBACK A 0 0 0 0

function ACCnoback() {
    navigation_move('');
    navigation_location_stack.splice( 0, navigation_location_current );
    navigation_location_current = 0;
}

//LIB hide_anykey_lib.jsp

$(document).ready(function() {
sysmessages[SYSMESS_PRESSANYKEY] = '<span class="anykey-text">' + sysmessages[SYSMESS_PRESSANYKEY] + '</span>'

var hide_anykey_lib_old_hideAnykeyLayer = hideAnykeyLayer;

hideAnykeyLayer = function() {
	hide_anykey_lib_old_hideAnykeyLayer();
	$('.anykey-text').css({opacity:0});
}

});

//CND SUGGEST A 14 0 0 0

function ACCsuggest( text )
{
    ACCunsuggest(text);
    suggestions_list.push(text);
}

//CND TURNZERO C 0 0 0 0
function CNDturnzero(n) { return (getFlag(FLAG_TURNS_LOW) + 256*getFlag(FLAG_TURNS_HIGH)) == 0; }


//LIB panels

var old_panels_descriptionLoop_init = h_descriptionLoop_init;
var old_panels_descriptionLoop_post = h_descriptionLoop_post;

var panels_visible;

h_descriptionLoop_init = function()
{
    panels_visible = $('.panels:visible').closest('.panels-wrapper');
    return old_panels_descriptionLoop_init(player_order);
}

h_descriptionLoop_post = function()
{
    return runInSerial(
        [
            old_panels_descriptionLoop_post,
            function()
            {
                panels_visible.addClass('panels-visible');
                setTimeout(function() { panels_visible.removeClass('panels-visible'); }, 500 );
            }
        ]
    );
}

$(document.body).ready(function()
{
    $('.panels').one('click',function() {
        $(this).parents('.panels-wrapper.unclicked').removeClass('unclicked');
    });
    $('.panels .hide-on-click').on('click',function() {
        var panels_invisible = $(this).closest('.panels-wrapper').addClass('panels-invisible');
        setTimeout(function() { panels_invisible.removeClass('panels-invisible'); }, 500 );
    });
});

//LIB typeAction_lib.jsp

var old_typeAction_sequenceAction = h_sequenceAction;

var typeAction_flashes_needed = 1;
var typeAction_orders_needed = 5;
var typeAction_pauses_needed = 5;

var typeAction_interval = null;

function typeAction_watchTyping(e) {
    // when the user types a command and presses enter,
    // we know they're getting the hang of it.
    if (e.which == 13 ) {
        typeAction_flashes_needed = 0;
        if ( !--typeAction_orders_needed ) {
            $('.prompt').off( 'keypress', typeAction_watchTyping );
        }
    }
}
$(document).ready(function() {
    $('.prompt').on('keypress',typeAction_watchTyping);
});

function typeAction_type($prompt,text,n) {
    $prompt.val(text.substr(0,n));
    typeAction_interval = setInterval(function() {
        if ( n == text.length ) {
            clearInterval(typeAction_interval);
            typeAction_interval = null;
            setTimeout(function() {
                ++typeAction_orders_needed;
                var e = jQuery.Event("keypress");
                e.which = 13;
                $prompt.trigger(e);
            }, 100*typeAction_orders_needed );
        } else {
            $prompt.val( text.substr(0,++n) );
        }
    }, 500*typeAction_orders_needed/text.length );
}

h_sequenceAction = function(text) {

    if ( typeAction_orders_needed ) {

        var $prompt = $('.prompt').focus();

        if ( text.length ) {
            if ( typeAction_interval !== null ) clearInterval(typeAction_interval);
            if ( typeAction_flashes_needed ) {
                --typeAction_flashes_needed;
                var invert = 0;
                $prompt.css({ "filter": "invert(100%)" });
                var interval = setInterval(function() {
                    $prompt.css({ "filter": "invert("+((invert%2)*100)+"%)" });
                    if ( ++invert == 3 ) {
                        clearInterval(interval);
                        typeAction_type($prompt,text,1);
                    }
                }, 100 );
            } else {
                typeAction_type($prompt,text,0);
            }
        } else {
            $prompt.val('');
        }

    } else if ( typeAction_pauses_needed ) {
        var $prompt = $('.prompt');
        $prompt.val(text);
        setTimeout(function() {
            var e = jQuery.Event("keypress");
            e.which = 13;
            $prompt.trigger(e);
        }, 100*typeAction_pauses_needed-- );

    } else {

        old_typeAction_sequenceAction(text);

    }

};

var old_typeAction_saveGame = h_saveGame;
h_saveGame = function(savegame_object)
{
    savegame_object.typeAction = {
        'typeAction_flashes_needed': typeAction_flashes_needed,
        'typeAction_orders_needed': typeAction_orders_needed,
        'typeAction_pauses_needed': typeAction_pauses_needed
    };
    return old_typeAction_saveGame(savegame_object);
}
var old_typeAction_restoreGame = h_restoreGame;
h_restoreGame = function(savegame_object)
{
    typeAction_flashes_needed = savegame_object.typeAction.typeAction_flashes_needed;
    typeAction_orders_needed = savegame_object.typeAction_orders_needed;
    typeAction_pauses_needed = savegame_object.typeAction_pauses_needed;
    return old_typeAction_restoreGame(savegame_object);
}

//LIB back_compat_quill_lib.jsp

var old_back_compat_quill_mangleWords = h_mangleWords;
var old_back_compat_quill_displayWord = h_displayWord;

// in case people blindly copy all the files into their jsl/:
if ( window.back_compat_mode ) {
    console.log("WARNING: Quill-compatibility mode OVERWRITES PAW-compatibility mode.  Please install one of the other, not both.");
}
window.back_compat_mode = 'quill';

var back_compat_quill_noun_prefix = "NN_";
var back_compat_quill_verb_prefix = "VB_";

h_mangleWords = function(words) {

    /*
     * The PAW (and ngPAWS) have one big list of words,
     * and each word can only be used in one part-of-speech.
     *
     * The Quill has separate vocabularies for verbs and nouns,
     * so the same word can appear in both tables.
     * To detect the part-of-speech for each word, sentences must
     * be a single verb followed by an optional noun.
     *
     * This function simulates Quill behaviour by prepending either
     * "vb_" or "nn_" to words, depending on what part-of-speech it expects.
     * It also tries to support modern parsing where possible.
     *
     *
     * Note: you might want to read backCompatPAW.jsp before this file -
     *       it's basically the same, but much less complicated.
     *
     */

    if ( window.back_compat_mode != 'quill' ) return;

    var sentences = [];

    // First, split the text into sentences:
    var sentence = [];
    sentences.push(sentence);
    for ( var n=0; n!=words.length; ++n ) {
        if ( words[n]==',' || (findVocabulary(words[n], false)||NaN) == WORDTYPE_CONJUNCTION ) {
            sentences.push( words[n], sentence = [] );
        } else {
            sentence.push(words[n]);
        }
    }

    /*
     * Next try to parse each sentence:
     */

    words = [];

    var expected_prefix;

    for ( var s=0; s<sentences.length; s += 2 ) {
        if ( s ) words.push(sentences[s-1]); // add conjunction
        var sentence = sentences[s];

        /*
         * Normal parser (very similar to The Quill)
         *
         * Reads the sentence looking for known words.
         * Doesn't try to correct spelling mistakes.
         *
         * This parses e.g. "go north" correctly, because
         * the unknown "go" is simply ignored.
         */
        expected_prefix = back_compat_quill_verb_prefix;

        var parsed = false;

        for ( var n=0; n!=sentence.length; ++n ) {

            var word = sentence[n];

            if ( word.length > 4 && findVocabulary(word, true) ) {
                // if there is an exact match in the vocabulary, use it
                words.push(word);
                parsed = true;
                expected_prefix = back_compat_quill_noun_prefix;

            } else if ( findVocabulary(expected_prefix+word.substr(0,4), true) ) {
                // if there is a four-letter word in the vocabulary with the correct prefix,
                // then use it instead
                words.push(expected_prefix + word.substr(0,4));
                parsed = true;
                expected_prefix = back_compat_quill_noun_prefix;

            } else if ( findVocabulary(word, true) ) {
                // if this is a valid word, leave it as-is
                words.push(word);
                parsed = true;
                expected_prefix = back_compat_quill_verb_prefix;

            }

        }

        if ( parsed ) continue;

            /*
             * Fallback parser (tries to be cleverer)
             *
             * Tries to correct spelling errors,
             * and leave words in if necessary no matter what
             *
             * This parses e.g. "noth" correctly, but "go noth"
             * might be interpreted as "no north" if there's a "no" verb.
             */
            expected_prefix = back_compat_quill_verb_prefix;

        for ( var n=0; n!=sentence.length; ++n ) {

            var word = sentence[n];

            if ( word.length > 4 && findVocabulary(word, false) ) {
                // if there is an exact match in the vocabulary, use it
                words.push(word);
                expected_prefix = back_compat_quill_noun_prefix;

            } else if ( findVocabulary(expected_prefix+word.substr(0,4), false) ) {
                // if there is a four-letter word in the vocabulary with the correct prefix,
                // then use it instead
                words.push(expected_prefix + word.substr(0,4));
                expected_prefix = back_compat_quill_noun_prefix;

            } else if ( word==',' || (findVocabulary(words[n], false)||NaN) == WORDTYPE_CONJUNCTION ) {
                // if this is a sentence break, expect the next word to be a verb
                words.push(word);
                expected_prefix = back_compat_quill_verb_prefix;

            } else if ( findVocabulary(word, false) ) {
                // if this is a valid word, leave it as-is
                words.push(word);
                expected_prefix = back_compat_quill_verb_prefix;

            } else if ( findVocabulary(back_compat_quill_noun_prefix+word.substr(0,4), false) ) {
                // if this looks like it might be a noun, try adding it and hope for the best
                words.push(back_compat_quill_noun_prefix + word.substr(0,4));
                expected_prefix = back_compat_quill_noun_prefix;

            } else if ( findVocabulary(back_compat_quill_verb_prefix+word.substr(0,4), false) ) {
                // if this looks like it might be a verb, try adding it and hope for the best
                words.push(back_compat_quill_verb_prefix + word.substr(0,4));
                expected_prefix = back_compat_quill_noun_prefix;

            }

        }

    }

    return old_back_compat_quill_mangleWords(words);

}

var back_compat_quill_regexp = RegExp(
    '^(' + back_compat_quill_noun_prefix + '|' + back_compat_quill_verb_prefix + ')',
    'i'
);
h_displayWord = function(word) {
    if ( findVocabulary(word, false) ) {
        return word.replace(back_compat_quill_regexp,'');
    } else {
        return word.replace(back_compat_quill_regexp,'').substr(0,4);
    }
}

var old_back_compat_quill_executeOrder = h_executeOrder;

h_executeOrder = function()
{
	if (CNDmove(FLAG_LOCATION))
	{
		describe_location_flag = true;
		return;
	} else
		return old_back_compat_quill_executeOrder();
}

//CND UNSUGGEST A 14 0 0 0

function ACCunsuggest( text )
{
    for ( var n=0; n!=suggestions_list.length; ++n )
    {
        if ( suggestions_list[n] == text )
        {
            suggestions_list.splice(n,1);
            return;
        }
    }
}

//LIB WATCH_FLAG

$(document.body).ready(function()
{
    // need to run this *after* the runtime values are set

    var old_setFlag = window.setFlag;

    var values = [];
    var count = [];
    var timeouts = [];

    window.setFlag = function(flagno, value)
    {
        var flag_class = new RegExp('(^|\s)flag-'+flagno+'-\S+/','g');
        if ( count[flagno] === undefined )
            count[flagno] = values[flagno] = 0;
        if ( values[flagno] != value )
        {
            $('.watch-flag-'+flagno)
                .removeClass (function (index, className) { return (className.match(flag_class) || []).join(' '); })
                .addClass(
                    [
                        'flag-'+flagno+'-changed',
                        'flag-'+flagno+'-changed-recently',
                        'flag-'+flagno+'-changed-'+(++count[flagno]),
                        'flag-'+flagno+'-equals-'+value
                    ].join(' ')
                );
            if ( timeouts[flagno] !== undefined ) clearTimeout(timeouts[flagno]);
            timeouts[flagno] = setTimeout(function() {
                $('.watch-flag-'+flagno).removeClass('flag-'+flagno+'-changed-recently');
                timeouts[flagno] = undefined;
            }, 1000);
        }
        return old_setFlag(flagno,value);
    }

    var old_watchFlag_saveGame = h_saveGame;
    h_saveGame = function(savegame_object)
    {
        savegame_object.watchFlag = {
            values: $.extend( true, [], values ),
            count : $.extend( true, [], count )
        };
        return old_watchFlag_saveGame(savegame_object);
    }
    var old_watchFlag_restoreGame = h_restoreGame;
    h_restoreGame = function(savegame_object)
    {
        values = $.extend( true, [], savegame_object.watchFlag.values );
        count  = savegame_object.watchFlag.count;
        return old_watchFlag_restoreGame(savegame_object);
    }

});

//LIB suggestions

var suggestions_list = [];

var h_old_suggestions_code = h_code;

h_code = function(str) {
    if (str=='PRO2') setTimeout(function() // run this *after* the hook executes
    {
        var text = '';
        var count = suggestions_list.length;
        for ( var n=0; n!=suggestions_list.length; ++n )
        {
            text += implementTag('ACTION|'+getWriteMessageText(suggestions_list[n])+'|'+getWriteMessageText(suggestions_list[n]));
            if (n <= count - 2) text += getSysMessageText(SYSMESS_LISTSEPARATOR);
            if (n == count - 1) text += getSysMessageText(SYSMESS_LISTLASTSEPARATOR);
            if (n == count    ) text += getSysMessageText(SYSMESS_LISTEND);
        }

        $('.suggestions').html(text);
        $('.suggestions-wrapper').toggleClass('empty',suggestions_list.length==0);

    }, 0 );
    return h_old_suggestions_code(str);
}

var old_suggestions_saveGame = h_saveGame;
h_saveGame = function(savegame_object)
{
    savegame_object.suggestions_list = suggestions_list;
    return old_suggestions_saveGame(savegame_object);
}
var old_suggestions_restoreGame = h_restoreGame;
h_restoreGame = function(savegame_object)
{
    suggestions_list = savegame_object.suggestions_list;
    return old_suggestions_restoreGame(savegame_object);
}

//CND TURNLE C 1 0 0 0
function CNDturnle(n) { return (getFlag(FLAG_TURNS_LOW) + 256*getFlag(FLAG_TURNS_HIGH)) <= n; }


//LIB condact_info

var h_old_condact_info_code = h_code;

h_code = function(str) {
    if (str=='PRO2') setTimeout(function() // run this *after* the hook executes
    {
        $('.condact-info').each(function()
        {

            var condact = $(this).data('condact').split(/ +/);
            condact[0] = window['ACC'+condact[0].toLowerCase()];
            if ( !condact[0] ) return;
            for ( var n=1; n<condact.length; ++n ) condact[n] = parseInt(condact[n],10);

            // temporarily hijack a few ngPAWS internals, call the condact, then reset() everything:
            var old_done_flag = done_flag;
            var old_writeText = writeText;
            var reset = function()
            {
                done_flag = old_done_flag;
                writeText = old_writeText;
            };
            // Normally we call reset() later in the function - this is just in case of an exception:
            var timeout = setTimeout(reset, 0);
            var captured_text = '';
            window.writeText = function(text) { captured_text += text; }
            condact[0].apply( this, condact.splice(1) );
            reset();
            clearTimeout(timeout);

            $(this).html(
                captured_text.replace(new RegExp('(?:'+STR_NEWLINE+')*$','g'), '')
            );
        });

    }, 0 );
    return h_old_condact_info_code(str);
}

//LIB clickableLists_lib.jsp

var old_clickableLists_listText = h_listText;

var clickableLists_verb_drop = 'Drop ';
var clickableLists_verb_wear = 'Wear ';
var clickableLists_verb_get  = 'Get ';

h_listText = function(locno,container_objno,objno) {

    var text = old_clickableLists_listText(locno,container_objno,objno);

    if (
        !objectIsNPC(objno) &&
        objectsNoun[objno] != 255 && // has an associated noun
        container_objno === undefined // not in a container
    ) {
        var vocabulary_id = -1;
        var vocabulary_word_length = -1;
        for ( var n=0; n!=vocabulary.length; ++n ) {
            if ( vocabulary[n][0] == objectsNoun[objno] && vocabulary_word_length <= vocabulary[n][1].length ) {
                vocabulary_id = n;
                vocabulary_word_length = vocabulary[n][1].length;
            }
        }
        if ( vocabulary_id != -1 ) {
            var verb;
            if ( locno == LOCATION_CARRIED || locno == LOCATION_WORN ) {
                verb = clickableLists_verb_drop;
                text = text.replace( /<\/?a\b.*?>/g, '' );
            } else if ( objectIsWearable(objno) ) {
                verb = clickableLists_verb_wear;
            } else {
                verb = clickableLists_verb_get;
            }
            var message = verb + h_displayWord(vocabulary[vocabulary_id][1]).toLowerCase();
            return (
                '<a href="type: ' + message + '" onclick="h_sequenceAction(\'' + message + '\'); return false;">' + text + '</a>'
            );
        }
    }

    return text;

}

//CND WRITELN A 14 0 0 0

/*
 * set the "done" flag after writing a line.
 * This stops the "can't" message, but doesn't
 * force the engine to stop scanning the table.
 */

var old_back_compat_writeln = ACCwriteln;

ACCwriteln = function (text)
{
	old_back_compat_writeln(text);
	ACCdone();
}

//CND LISTSAVEDGAMES A 0 0 0 0

function ACClistsavedgames()
{
  var numberofgames = 0;
  for(var savedgames in localStorage)
  {
    gamePrefix = savedgames.substring(0,STR_SAVEGAME_PREFIX.length); // takes out ngpaws_savegame_
    if (gamePrefix == STR_SAVEGAME_PREFIX)
    {
      gameName = savedgames.substring(16);
      writelnText(gameName);
      numberofgames++;
    }
  }
  if (numberofgames == 0) 
  {
     if (getLang()=='EN') writelnText("No saved games found."); else writelnText("No hay ninguna partida guardada.");
  }
}


//CND PAUSE W 1 0 0 0

/*
 * Implement various PAUSE sub-functions
 * This tries to be fairly faithful to the original,
 * but the details were reverse-engineered, and
 * several concessions have been made for ease
 * of implementation in a web browser.
 */

ACCpause = (function()
{

    // in supporting browsers, sound effects are played.

    var old_pause = ACCpause;

    /*
     * Build elements that will be used for the "flash" animation
     */
    var wrapper;
    var flash_container = $('<div id="flash-container-hidden"></div>');

    function create_flash_background(width) {
        var style = '; background: linear-gradient(to right';
        var x = 0;
        while ( x < width ) {
            var color = '#' +
                ( ( Math.random() < 0.5 ) ? '00' : 'C0' ) +
                ( ( Math.random() < 0.5 ) ? '00' : 'C0' ) +
                ( ( Math.random() < 0.5 ) ? '00' : 'C0' )
            ;
            style += ', ' + color + ' ' + x + 'vw';
            x += Math.ceil( Math.random() * 16 ) * 8;
            style += ', ' + color + ' ' + x + 'vw';
        }
        return style;
    }

    var flash_divs = '<div id="flash-0"><div style="position: absolute; left: 0; width: 100%; top: 0; height: 10%; background: black"></div><div style="position: absolute; left: 0; width: 10%; top: 0; height: 100%; background: black"></div><div style="position: absolute; right: 0; width: 10%; top: 0; height: 100%; background: black"></div><div style="position: absolute; left: 0; width: 100%; bottom: 0; height: 10%; background: black"></div>';
    for ( var frame=1; frame!=14; ++frame ) {
        var html = '<div id="flash-'+frame+'">';
        for ( var y=0; y!=24; ++y ) {
            html += '<div style="position: absolute; left: 0; width: 100%; top: ' + (y/2.4) + '%; height: 0.5vh' + create_flash_background(100) + '"></div>';
        }
        for ( var y=24; y!=216; ++y ) {
            html += '<div style="position: absolute; left: 0; width: 10%; top: ' + (y/2.4) + '%; height: 0.5vh' + create_flash_background(100) + '"></div>';
            html += '<div style="position: absolute; left: 90%; width: 10%; top: ' + (y/2.4) + '%; height: 0.5vh' + create_flash_background(100) + '"></div>';
        }
        for ( var y=216; y!=240; ++y ) {
            html += '<div style="position: absolute; left: 0; width: 100%; top: ' + (y/2.4) + '%; height: 0.5vh' + create_flash_background(100) + '"></div>';
        }
        flash_divs += html+'</div>';
    }
    flash_container.append(flash_divs);

    $(document.body).ready(function() {
        wrapper = $('.wrapper');
        $(document.body).append(flash_container);
    });

    var context = new( window.AudioContext || window.webkitAudioContext )();

    var play_tone = function() {}
    var play_ring_tone = function() {}
    var play_noise = function() {}

    var flash_noise_buffer;
    var applause_noise_buffer;
    var jackhammer_noise_buffer;

	if ( context )
	{
		// audio API supported - use the real function:

            var gain = context.createGain();
            gain.gain.value = 0.1;
            gain.connect(context.destination);

            // build white noise that will be used for the "flash" animation:
            flash_noise_buffer = context.createBuffer(1, 8192, context.sampleRate);
            var flash_noise_output = flash_noise_buffer.getChannelData(0);
            for (var n=0; n!=1024; ++n) {
                // create random noise, but hold each pitch for a while to create an 8-bit effect:
                var value = Math.random() * 2 - 1;
                for ( var m=0; m!=8; ++m ) {
                    flash_noise_output[n*8+m] = value;
                }
            }

            // build white noise that will be used for the applause sound:
            applause_noise_buffer = context.createBuffer(1, 16384, context.sampleRate);
            var applause_noise_output = applause_noise_buffer.getChannelData(0);
            var noise_value = 0;
            for (var n=0; n!=16384; ++n) {
                if ( (n % 9) == 0 ) { // change value
                    if ( n < 3280 ) { // first noise phase
                        value = Math.random() * 1.8 - 0.8;
                    } else {
                        var amplification = 1-(n-3280)/((16384-3280)*10);
                        value = Math.random() * 2*amplification - amplification;
                    }
                }
                applause_noise_output[n] = value;
            }

            // build white noise that will be used for the jackhammer sound:
            var jackhammer_duration = 1024;
            jackhammer_noise_buffer = context.createBuffer(1, jackhammer_duration, context.sampleRate);
            var jackhammer_noise_output = jackhammer_noise_buffer.getChannelData(0);
            for ( var n=0; n!=jackhammer_duration; ) {
                var base_duration = (n<jackhammer_duration/2) ? 2 : 1;
                var duration = jackhammer_duration / (20*base_duration) + (Math.random()-0.5) * 16 * (3-base_duration);
                for ( var s=0; s<duration && n!=jackhammer_duration; ++s ) {
                    jackhammer_noise_output[n++] = 1 - ( s/duration/2 );
                }
                for ( var s=0; s<duration && n!=jackhammer_duration; ++s ) {
                    jackhammer_noise_output[n++] = -1 - ( s/duration/2 );
                }
            }

            play_tone = function(first,last,duration)
            {
		var oscillator = context.createOscillator();
		oscillator.frequency.setValueAtTime(first, context.currentTime);
                oscillator.frequency.linearRampToValueAtTime( last, context.currentTime + 2.55 );
		oscillator.type = 'triangle';
		oscillator.connect(gain);
                oscillator.start();
                oscillator.stop( context.currentTime + duration/100 );
            }

            play_ring_tone = function(loops)
            {
		var oscillator = context.createOscillator();
		oscillator.frequency.setValueAtTime(100, context.currentTime);
                var time = 0;
                for ( var loop=0; loop != loops; ++loop ) {
                    for ( var ring=0; ring!=2; ++ring ) {
                        for ( var blip=0; blip!=6; ++blip ) {
		            oscillator.frequency.setValueAtTime( 1370, context.currentTime + time);
                            time += 0.038;
		            oscillator.frequency.setValueAtTime(35000, context.currentTime + time);
                            time += 0.03;
                        }
		        oscillator.frequency.setValueAtTime(0, context.currentTime + time);
                        time += 0.043;
                    }
                    time += 1;
                }

		oscillator.type = 'sine';
		oscillator.connect(gain);
                oscillator.start();
                oscillator.stop( context.currentTime + time );
            }

	    play_noise = function(buffer)
            {

                var noise = context.createBufferSource();
                noise.buffer = buffer;
                noise.loop = true;
                noise.connect(gain);
                noise.start(0);
                return noise;
            }
        }

    return function(value)
    {
        var flag = getFlag(28);
        setFlag(28,0);

	if ( debug_flag )
	{
	    pauseRemainingTime = 0;
	    inPause = true;
	    return;
	}

        switch ( flag )
        {

            // sound effects:
            case 1:
            /*
             * increasing tone:
             * passed value is the duration, interpreted in the normal way.
             * Pitch increases from ~433Hz at the start to ~837Hz at the end.
             * Implemented here as a constant increase for convenience,
             * even though the Spectrum version has 10 oscillations at each
             * pitch (so oscillation increases more quickly at higher pitches)
             */
            play_tone(870,1680,value);
            return old_pause(value);
            case 2: // ringing telephone
            /*
             * Let's call the fundamental unit of the ring tone a "blip", which is defined as:
             * 1370Hz full volume for about 38 milliseconds,
             * followed immediately by:
             * 35000Hz 80% volume for about 30 milliseconds
             *
             * A "ring" is a series of 6 blips, with no gaps
             * A "ring-pair" is:
             * a ring,
             * followed by silence for 0.043 seconds,
             * followed by a ring
             * followed by silence for 1.05 seconds
             *
             * value is the number of ring-pairs.
             */
            play_ring_tone(value);
            return old_pause(73.4 * value);
            case 3:
            /*
             * decreasing tone:
             * seems to be the opposite of case 1, but I haven't checked much
             */
            play_tone(1680,870,value);
            return old_pause(value);
            case 5: // white noise (resembles an audience clapping)
            /*
             * each loop lasts about 0.575 seconds
             * a loop starts with 0.115 seconds of noise in the range [-0.5,0.7]
             * after that, the range is [-0.7,0.7]
             * by the end, the range is [-0.6,0.6]
             * value is the number of loops
             */
            var noise = play_noise(applause_noise_buffer);
            if ( noise ) setTimeout(function() { noise.stop(); }, value*512 );
            return old_pause(value*25.6);

            case 6: // jackhammer noise
            /*
             * I don't really understand how this works.  The following approximation
             * is easier to describe, and should produce similar results to the original.
             *
             * The sound effect produces a square wave, where each peak or trough lasts
             * for a random duration.
             *
             * Each loop lasts about 1/25 seconds.
             * During the first half of a loop, waves last for an average of 1/500 seconds, +/- 100
             * During the second half of a loop, waves last for an average of 1/250 seconds, +/- 200
             * 
             * value is the number of 1/25 second loops
             */
            var noise = play_noise(jackhammer_noise_buffer);
            if ( noise ) setTimeout(function() { noise.stop(); }, value*51.2 );
            return old_pause(value*2.56);

            // visual effects:
            case 4: // screen flash
            /*
             * each loop of animation takes 14 frames (14/50 seconds) to complete:
             * frame 0: inverse all the colors on the screen (bright becomes dark, green becomes magenta, etc.)
             *          background color is black, audio is silent
             * frames 1-13: border is filled with random colors that change each frame, audio is white noise
             * The value is the number of loops.  The random border colors are replicated exactly each loop.
             * Note: I suspect the Spectrum uses the same series of random numbers
             * to generate the audio and border - I'm not going to replicate that.
             */
            var initial_filter = wrapper.css('filter');
            wrapper.css({ filter: 'invert(100%)' });
            var invert = true;
            flash_container.attr('id','flash-container');
            var noise = play_noise(flash_noise_buffer);
            var interval = setInterval(
                function() {
                    if ( value-- ) {
                        if ( invert ^= true ) {
                            wrapper.css({ filter: 'invert(100%)' });
                        } else {
                            wrapper.css({ filter: 'invert(0%)' });
                        }
                        noise.stop();
                        setTimeout(function() { noise = play_noise(flash_noise_buffer); }, 1000 / 50);
                    } else {
                        clearInterval(interval);
                        wrapper.css({ filter: initial_filter });
                        flash_container.attr('id','flash-container-hidden');
                        noise.stop();
                    }
                }, 14000 / 50
            );
            return old_pause(value*14);

            case 9:
            /*
             * a series of colored boxes expands out of the centre of the screen at speed.
             * Passed value is ignored.
             * Box colors (all bright): black, blue, red, purple, green, cyan, yellow, white
             * The progression as each box expands is:
             * 1. square box expands from near the centre of the screen to screen height (0.5 seconds)
             * 2. box expands left and right to near the screen width (0.125 seconds)
             * 3. box expands left one last time to screen width (0.04 seconds)
             * 4. border area is set (0.04 seconds)
             * Full animation time is ~5 seconds
             */
            $(document.body).addClass('pause-animation-box');
            setTimeout( function() { $(document.body).removeClass('pause-animation-box'); }, 5500 );
            return old_pause(100); // pause is 175 too short, so animation can happen underneath

            // change font:
            case 7:
            $(document.body).addClass('font-default').removeClass('font-alternative');
            text_classes.font = 'default';
            return old_pause(-1);
            case 8:
            $(document.body).addClass('font-alternative').removeClass('font-default');
            text_classes.font = 'alternative';
            return old_pause(-1);

            // change messages:
            case 10: // Change the "You can also see" message to the message number passed to PAUSE
            SYSMESS_YOUCANSEE = value;
            return old_pause(-1);

            // Control commands:
            case 12: // Restart the game without warning.
            return h_restart();
            case 13: // Reboot the Spectrum without warning
            $(document.body).addClass('pause-animation-reset');
            setTimeout( h_restart, 3000 );
            return old_pause(5000);
            case 11: // Set the maximum number of objects carried to the value passed to PAUSE
	    setFlag(FLAG_MAXOBJECTS_CARRIED, value);
	    setFlag(FLAG_MAXWEIGHT_CARRIED, value);
            return old_pause(-1);
            case 14: //  Increase number of objects that can be carried by the amount passed to PAUSE
	    setFlag(FLAG_MAXOBJECTS_CARRIED, getFlag(FLAG_MAXOBJECTS_CARRIED)+value);
	    setFlag(FLAG_MAXWEIGHT_CARRIED , getFlag(FLAG_MAXWEIGHT_CARRIED )+value);
            return old_pause(-1);
            case 15: // Decrease number of objects that can be carried by the amount passed to PAUSE
	    setFlag(FLAG_MAXOBJECTS_CARRIED, getFlag(FLAG_MAXOBJECTS_CARRIED)-value);
	    setFlag(FLAG_MAXWEIGHT_CARRIED , getFlag(FLAG_MAXWEIGHT_CARRIED )-value);
            return old_pause(-1);
            case 19: // switch graphics off (for PAUSE 255) or on (for any other value)
            ACCgraphic(value!=255);
            return old_pause(-1);
            case 21: // RAMload (for PAUSE 50) or RAMsave (for any other value)
            if ( value == 50 )
            {
                ACCramload();
            } else
            {
                ACCramsave();
            }
            return old_pause(-1);
            case 22: // Set the identity in saved games to the value passed to PAUSE
            console.log('Unsupported: set identity in saved games');
            return old_pause(-1);

            // change the keyboard click sound:
            case 16:
            case 17:
            case 18:
            console.log('Unsupported: keyboard click sound effect');
            return old_pause(-1);

            default:
            return old_pause(value);

        }
    }

})();

var old_back_compat_quill_pause_saveGame = h_saveGame;

h_saveGame = function(savegame_object)
{
	savegame_object.body_class = savegame_object.body_class.replace(/\b(pause-animation-box|pause-animation-reset)\b/g, '');
	return old_back_compat_quill_pause_saveGame(savegame_object);
}

//CND AUTOLOAD A 0 0 0 0

function ACCautoload()
{
	var json_str = localStorage.getItem(STR_SAVEGAME_PREFIX+'autosave');
	if (json_str)
	{
		restoreSaveGameObject(JSON.parse(json_str));
	}
}

//CND TURNGE C 1 0 0 0
function CNDturnge(n) { return (getFlag(FLAG_TURNS_LOW) + 256*getFlag(FLAG_TURNS_HIGH)) >= n; }


//CND AUTOSAVE A 0 0 0 0

function ACCautosave()
{
	if ( !inEND ) {
		var savegame = JSON.stringify(getSaveGameObject());
		localStorage.setItem(STR_SAVEGAME_PREFIX+'autosave', savegame);
	}
}

//CND TURNNOTEQ C 1 0 0 0
function CNDturnnoteq(n) { return (getFlag(FLAG_TURNS_LOW) + 256*getFlag(FLAG_TURNS_HIGH)) != n; }


//CND TURNNOTZERO C 0 0 0 0
function CNDturnnotzero(n) { return (getFlag(FLAG_TURNS_LOW) + 256*getFlag(FLAG_TURNS_HIGH)) != 0; }


//CND SCORE A 0 0 0 0

/*
 * set the "done" flag after writing a line.
 * This stops the "can't" message, but doesn't
 * force the engine to stop scanning the table.
 */

var old_back_compat_score = ACCscore;

ACCscore = function (text)
{
	old_back_compat_score(text);
	ACCdone();
}

//CND MESSAGE A 2 0 0 0

/*
 * set the "done" flag after printing a message.
 * This stops the "can't" message, but doesn't
 * force the engine to stop scanning the table.
 */

var old_back_compat_message = ACCmessage;

ACCmessage = function (mesno)
{
	old_back_compat_message(mesno);
	ACCdone();
}

//LIB navigation

// change the following line if you have changed your EXIT messages to have non-standard IDs:
var navigation_base_back_verb = 1002;

var h_old_navigation_code = h_code;
var navigation_location_stack = [ [ 0 ] ];
var navigation_location_current = 0;

function navigation_move( back_text )
{
    /*
     * Manage the location stack
     */
    if ( navigation_location_stack[navigation_location_current][0] == loc_here() ) return;

    var here = loc_here();
    var forward_text = player_order;

    if ( navigation_location_current && navigation_location_stack[navigation_location_current-1][0] == here )
    {
        navigation_location_stack[navigation_location_current][1] = forward_text;
        --navigation_location_current;
        if ( back_text != "" ) navigation_location_stack[navigation_location_current][2] = back_text;
    } else
    {
        navigation_location_stack[navigation_location_current][2] = forward_text;
        if ( navigation_location_current != navigation_location_stack.length-1 && navigation_location_stack[navigation_location_current+1][0] == here )
        {
            ++navigation_location_current;
            if ( back_text != "" ) navigation_location_stack[navigation_location_current][1] = back_text;
        } else
            navigation_location_stack.splice( ++navigation_location_current, navigation_location_stack.length, [ here, back_text, '' ] );
    }

}

h_code = function(str) {
    if (str=='PRO2') setTimeout(function() // run this *after* the hook executes
    {
        /*
         * Handle movement between locations:
         */
        if ( navigation_location_stack[navigation_location_current][0] != loc_here() )
        {
            var back_verb = getConnectionVerb(loc_here(),navigation_location_stack[navigation_location_current][0]);
            navigation_move( ( back_verb == -1 ) ? "" : $(getMessageText(navigation_base_back_verb+back_verb)).text() );
        }

        // update the "back" button:
        $('.navigation.back'   ).toggleClass('enabled',navigation_location_stack[navigation_location_current][1] != "").attr( 'title', navigation_location_stack[navigation_location_current][1] );
        $('.navigation.forward').toggleClass('enabled',navigation_location_stack[navigation_location_current][2] != "").attr( 'title', navigation_location_stack[navigation_location_current][2] );

    }, 0 );
    return h_old_navigation_code(str);
}

$(document.body).ready(function() {
    $(this).on( 'click', '.navigation', function(e) {
        e.preventDefault();
        if ( $(this).hasClass('enabled') )
        {
            orderEnteredLoop(
                navigation_location_stack[navigation_location_current][$(this).hasClass('back')?1:2]
            );
        }
    });
});

var old_navigation_saveGame = h_saveGame;
h_saveGame = function(savegame_object)
{
    savegame_object.navigation = {
        stack: $.extend( true, [], navigation_location_stack ),
        current: navigation_location_current
    };
    return old_navigation_saveGame(savegame_object);
}
var old_navigation_restoreGame = h_restoreGame;
h_restoreGame = function(savegame_object)
{
    navigation_location_stack = $.extend( true, [], savegame_object.navigation.stack );
    navigation_location_current = savegame_object.navigation.current;
    return old_navigation_restoreGame(savegame_object);
}

//CND WRITE A 14 0 0 0

/*
 * set the "done" flag after writing a line.
 * This stops the "can't" message, but doesn't
 * force the engine to stop scanning the table.
 */

var old_back_compat_write = ACCwrite;

ACCwrite = function (text)
{
	old_back_compat_write(text);
	ACCdone();
}

//CND CLEAR_SUGGESTIONS A 0 0 0 0

function ACCclear_suggestions()
{
    suggestions_list = [];
}


//CND ISNOTEND C 0 0 0 0

function CNDisnotend()
{
	return !inEND;
}
//CND TURNGT C 1 0 0 0
function CNDturngt(n) { return (getFlag(FLAG_TURNS_LOW) + 256*getFlag(FLAG_TURNS_HIGH)) > n; }


//LIB longdescription_lib.jsp

var objects_longdescription = [];

var examine_longdescription = 13;

var old_longdesc_h_code = h_code;

h_code = function(str) 
{
	if (str=="RESPONSE_USER")
	{
		if (getFlag(33)==examine_longdescription) // Examinar
			if (getFlag(51)!=EMPTY_OBJECT)  // Es un objeto
				if (objects_longdescription[getFlag(51)]!='') // Tiene descrpción larga
					if (CNDpresent(getFlag(51))) // Está presente
					{
						writeText(filterText(objects_longdescription[getFlag(51)])); 	
						var viewContents = false;
						// Time to list contents if...
						// It's a supporter
						if (objectIsAttr(getFlag(51),ATTR_SUPPORTER)) viewContents = true;   
						// It's a transparent container
						if ((objectIsAttr(getFlag(51),ATTR_CONTAINER)) && (objectIsAttr(getFlag(51),ATTR_TRANSPARENT))) viewContents = true;
						// It's a not openable container
						if ((objectIsAttr(getFlag(51),ATTR_CONTAINER)) && (!objectIsAttr(getFlag(51),ATTR_OPENABLE))) viewContents = true;
						// It's an openable container that is open
						if ((objectIsAttr(getFlag(51),ATTR_CONTAINER)) && (objectIsAttr(getFlag(51),ATTR_OPENABLE)) && (objectIsAttr(getFlag(51),ATTR_OPEN))) viewContents = true;
						// but if there is nothing inside/over, then no need to list
						if (getObjectCountAt(getFlag(51))==0) viewContents = false;
						if (viewContents) ACClistcontents(getFlag(51));
						writeSysMessage(SYSMESS_LISTEND);
						ACCnewline();
						ACCdone();
					}
	}
	old_longdesc_h_code(str);
}

var old_longdesc_h_init = h_init;

h_init = function()
{
	var test = /^((?:&[^;]*;|[^&])*)#([^]*)/;
	for (var i=0;i<objects.length;i++)
	{
		var match = objects[i].match(test);
		if (match)
		{
			objects_longdescription[i] = match[2];
			objects[i] = '{TOOLTIP|' + match[2] + '|' + match[1] + '}';
		}
		else objects_longdescription[i] = '';
	}
	old_longdesc_h_init();
}



//CND REPLAY A 0 0 0 0

var $replay_form;

$(document).ready(function() {

    var state = JSON.parse(localStorage.getItem('replay_state')) || {
        status: 'inactive',
        transcript: [],
        text: '',
        successes: 0,
        tests: 0
    };

    // increase this to pause for longer during tests (a value of 200 waits for 1 second between actions):
    var pause_multiplier = 1;

    $replay_form = $('<form style="position: fixed; bottom: 0; right: 0; margin: 0; display: none"><textarea style="display:block;width:23em" placeholder="Paste your transcript here"></textarea><input style="width:100%" type="submit" value="Run"></form>')
        .appendTo(document.body)

    var $textarea = $replay_form.find('textarea');
    var $prompt = $('.prompt');
    var command_re = /^> *(.+)/;
    var restart_re = /^# *RESTART\b/;
    var test_re = /^# *(DO|EXPECT|ASSERT|PAUSE|MOCKRANDOM) *: *(.+)/;

    var old_random = Math.random;
    var mock_rng = null;

    function process_finished() {
        if ( state.successes == state.tests ) {
            state.text += "> # " + state.successes + '/' + state.tests + " - ALL TESTS PASSED :)\n";
        } else {
            state.text += "> # " + state.successes + '/' + state.tests + " tests passed :(\n";
        }
        $textarea.val(state.text);
        state.status = 'inactive';
        localStorage.setItem('replay_state',JSON.stringify(state));
        state.status = 'done';
    }
    function process_continuing(pause) {
        $textarea.val(state.text);
        $textarea.scrollTop(
            $textarea.prop('scrollHeight') - $textarea.height()
        );
        state.status = 'ready';
        localStorage.setItem('replay_state',JSON.stringify(state));
        state.status = 'running';
        setTimeout(process,pause*pause_multiplier);
        return;
    }
    function process() {
        $prompt.val('');
        if ( state.status == 'done' ) return process_finished();
        while ( state.transcript.length ) {
            var line = state.transcript.shift();
            state.text += line + "\n"
            var command = line.match(command_re);
            if ( !command ) continue;
            var test = command[1].match(test_re);
            if ( test ) {
                if ( test[1] == 'PAUSE' ) {
                    var pause = parseInt( test[2], 10 );
                    if ( isNaN(pause) || pause < 1 ) {
                        state.text += "> # ERROR: invalid pause\n";
                    } else {
                        return process_continuing(pause);
                    }
                } else if ( test[1] == 'MOCKRANDOM' ) {
                    var numbers = test[2].split(/ +/);
                    mock_rng = [];
                    for ( var n=0; n!=numbers.length; ++n ) {
                        var value = parseFloat(numbers[n]);
                        if ( isNaN(value) ) {
                            state.text += "> # ERROR: " + value + " is not a number\n";
                        } else {
                            mock_rng.push(value);
                        }
                    }
                } else { // DO, EXPECT or ASSERT
                    ++state.tests;
                    var result = false;
                    var condition = test[2].split(/ +/);
                    if ( test[1] == 'DO' ) {
                        if ( condition && window[ 'ACC' + condition[0].toLowerCase() ] instanceof Function ) {
                            window[ 'ACC' + condition[0].toLowerCase() ].apply( this, condition.splice(1) );
                            result = true;
                        } else {
                            state.text += "> # ERROR: " + condition[0] + " is not an action\n";
                        }
                    } else if ( condition && window[ 'CND' + condition[0].toLowerCase() ] instanceof Function ) {
                        result = window[ 'CND' + condition[0].toLowerCase() ].apply( this, condition.splice(1) );
                    } else {
                        state.text += "> # ERROR: " + condition[0] + " is not a condition\n";
                    }
                    if ( result ) ++state.successes;
                    state.text += "> # RESULT: " + ( result ? "OK\n" : "NOT OK\n" );
                    if ( test[1] == 'ASSERT' && !result ) {
                        return process_finished();
                    } else {
                        return process_continuing(50);
                    }
                }
            } else if ( restart_re.test(command[1]) ) {
                state.status = 'ready';
                localStorage.setItem('replay_state',JSON.stringify(state));
                return location.reload();
            } else {
                var commands = command[1].split(/ *; */);
                var interval = setInterval(function() {
                    $prompt.val(commands.shift());
                    var e = jQuery.Event("keypress");
                    e.which = 13;
                    $prompt.trigger(e);
                    if ( !commands.length ) {
                        clearInterval(interval);
                        return process_continuing(50);
                    }
                }, 50*pause_multiplier );
                return;
            }
        }
        return process_finished();
    }

    $replay_form
        .on( 'keydown wheel mousewheel', function(event) {
            event.stopPropagation(); // so the prompt doesn't steal focus
        })
        .on( 'submit', function(event) {
            event.preventDefault();
            switch ( state.status ) {
            case 'inactive':
                // reset all the variables
                state.status = 'waiting';
                state.text = '';
                state.successes = 0;
                state.tests = 0;
                $textarea.val('');
                $replay_form.show().find('input').val('Run');
                return;
            case 'waiting':
                state.transcript = $textarea.val().split("\n");
                // FALL THROUGH
            case 'ready':
                // run the process
                ACCdebug(1);
                $replay_form.show().find('input').val('Close');
                // Override the built-in RNG:
                if ( mock_rng === null )
                {
                    mock_rng = [];
                    Math.random = function()
                    {
	                return mock_rng.length ? mock_rng.shift() : old_random.call(this);
                    }
                }
                process();
                return;
            case 'running':
            case 'done':
                $replay_form.hide();
                state.status = 'inactive';
                ACCdebug(0);
                localStorage.setItem('replay_state',JSON.stringify(state));
                return;
            }
        });

    // restart after reloading:
    if ( state.status == 'ready' ) $replay_form.submit();

});

function ACCreplay() {
    $replay_form.submit();
}

//CND ISEND C 0 0 0 0

function CNDisend()
{
	return inEND;
}

//CND HASAUTOSAVE C 0 0 0 0

function CNDhasautosave()
{
	return localStorage.getItem(STR_SAVEGAME_PREFIX+'autosave') !== null;
}
//LIB delay_lib.jsp

var old_delay_descriptionLoop_init = h_descriptionLoop_init;
var old_delay_descriptionLoop_post = h_descriptionLoop_post;

var delay_started = false;

var delay_previous_order_time = 0;
var delay_duration = 600;

function h_delay_location_class() {
	$(document.body)
		.removeClass(function (index, className) { return (className.match (/(^|\s)location-\S+/g) || []).join(' '); })
		.addClass('location-'+loc_here());
}

function h_delay_fade_out() {
	if ( CNDisdebug() || !graphicsON ) return;
	$('.input').hide();
	return $('.wrapper').fadeOut(delay_duration).promise()
}
function h_delay_fade_in () {
	if ( CNDisdebug() || !graphicsON )
	{
		$('.wrapper').show();
		return;
	}
	if ( $('.anykey_layer').is(':hidden') && !inEND ) $('.input').show();
	return $('.wrapper').fadeIn (delay_duration).promise().then(function() {
		delay_previous_order_time = new Date().getTime();
	});
}
function h_delay_hide    () {
	if ( CNDisdebug() ) return;
	$('.wrapper').hide();
};

h_descriptionLoop_init = function() {
	var promise = old_delay_descriptionLoop_init();
	if ( delay_started ) {
		return runInSerial([promise,h_delay_fade_out]);
	} else if ( delay_started |=
		getFlag(31) || getFlag(32) || // not the first turn
		( getResourceById(RESOURCE_TYPE_IMG, getFlag(38)) && !isDarkHere() ) // image present
		) {
		return runInSerial([promise,h_delay_hide]);
	} else {
		return runInSerial([promise]);
	}
}

h_descriptionLoop_post = function() {
	var promise = old_delay_descriptionLoop_post();
	if ( delay_started ) {
		return runInSerial([promise,h_delay_location_class,h_delay_fade_in]);
	} else {
		return runInSerial([promise,h_delay_location_class]);
	}
}

var old_delay_copyOrderToTextWindow = h_copyOrderToTextWindow;

h_copyOrderToTextWindow = function(player_order) {
	var time = new Date().getTime();
	delay_duration = 600;
	if ( ( time - delay_previous_order_time ) < 3000 )
	{
		delay_duration = ( ( time - delay_previous_order_time ) < 500 ) ? 75 : 200;
	}
	delay_previous_order_time = time;
	if ( CNDisdebug() ) return;
	var deferred = $.Deferred();
	setTimeout(function() { deferred.resolve(); }, 200 );
	return runInSerial([old_delay_copyOrderToTextWindow,deferred.promise()],player_order);
}

// This file is (C) Carlos Sanchez 2014, released under the MIT license


// IMPORTANT: Please notice this file must be encoded with the same encoding the index.html file is, so the "normalize" function works properly.
//            As currently the ngpwas compiler generates utf-8, and the index.html is using utf-8 also, this file must be using that encoding.


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                         Auxiliary functions                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// General functions
String.prototype.rights= function(n){
    if (n <= 0)
       return "";
    else if (n > String(this).length)
       return this;
    else {
       var iLen = String(this).length;
       return String(this).substring(iLen, iLen - n);
    }
}


String.prototype.firstToLower= function()
{
	return  this.charAt(0).toLowerCase() + this.slice(1);	
}


// Returns true if using Internet Explorer 9 or below, where some features are not supported
function isBadIE () {
  var myNav = navigator.userAgent.toLowerCase();
  if (myNav.indexOf('msie') == -1) return false;
  ieversion =  parseInt(myNav.split('msie')[1]);
  return (ieversion<10);
}


function runningLocal()
{
	return (window.location.protocol == 'file:');
}


// Levenshtein function

function getLevenshteinDistance (a, b)
{
  if(a.length == 0) return b.length; 
  if(b.length == 0) return a.length; 
 
  var matrix = [];
 
  // increment along the first column of each row
  var i;
  for(i = 0; i <= b.length; i++){
    matrix[i] = [i];
  }
 
  // increment each column in the first row
  var j;
  for(j = 0; j <= a.length; j++){
    matrix[0][j] = j;
  }
 
  // Fill in the rest of the matrix
  for(i = 1; i <= b.length; i++){
    for(j = 1; j <= a.length; j++){
      if(b.charAt(i-1) == a.charAt(j-1)){
        matrix[i][j] = matrix[i-1][j-1];
      } else {
        matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                                Math.min(matrix[i][j-1] + 1, // insertion
                                         matrix[i-1][j] + 1)); // deletion
      }
    }
  }
 
  return matrix[b.length][a.length];
};

// waitKey helper for all key-wait condacts

function waitKey(callbackFunction)
{
	if ( debug_flag )
	{
		callbackFunction();
	} else
	{
		waitkey_callback_function.push(callbackFunction);
		showAnykeyLayer();
	}
}

function waitKeyCallback()
{
 	var callback = waitkey_callback_function.pop();
	if ( callback ) callback();
	if (describe_location_flag)
	{
		if ( waitkey_callback_function.length || waitkey_turn_requested || waitkey_order_requested )
			return runInSerial([descriptionLoop(),waitKeyCallback]);
		else
			return descriptionLoop();
	}
	if ( waitkey_callback_function.length == 0 && waitkey_turn_requested )
	{
		waitkey_turn_requested = false;
		callProcess(PROCESS_TURN);
		rescan_flag = false;
	}
	if ( waitkey_callback_function.length == 0 && waitkey_order_requested )
	{
		waitkey_order_requested = false;
		orderEnteredLoopInner();
	}
}

// wait for each function to finish before calling the next:
function runInSerial(actions)
{
	var args = [];
	for ( var n=1; n!=arguments.length; ++n ) args.push(arguments[n]);
	while ( actions.length )
	{
		var action = actions.shift();
		// Actions are usually functions - call them and see if they return a promise:
		if ( ( action instanceof Function ) &&
			!( action instanceof Object && 'always' in action )
		   ) {
			action = action.apply(this,args);
		}
		// See if the action, or its return value, is a promise:
		if ( action instanceof Object && 'always' in action )
		{
			for ( var n=0; n!=actions.length; ++n ) action = action.always(actions[n]);
			return action;
		}
	}
	// return a basic promise that resolves immediately:
	return $.Deferred().resolve().promise();
}

// Check DOALL entry

function skipdoall(entry)
{
	return  ((doall_flag==true) && (entry_for_doall!='') && (current_process==process_in_doall) && (entry_for_doall > entry));
}

// check RESCAN entry
function skiprescan(entry)
{
	if ( rescan_flag && (rescan_from >= entry) ) return true;
	return false;
}

// Dynamic attribute use functions
function getNextFreeAttribute()
{
	var value = nextFreeAttr;
	nextFreeAttr++;
	return value;
}


// Gender functions

function getSimpleGender(objno)  // Simple, for english
{
 	isPlural = objectIsAttr(objno, ATTR_PLURALNAME);
 	if (isPlural) return "P";
 	isFemale = objectIsAttr(objno, ATTR_FEMALE);
 	if (isFemale) return "F";
 	isMale = objectIsAttr(objno, ATTR_MALE);
 	if (isMale) return "M";
    return "N"; // Neuter
}

function getAdvancedGender(objno)  // Complex, for spanish
{
 	var isPlural = objectIsAttr(objno, ATTR_PLURALNAME);
 	var isFemale = objectIsAttr(objno, ATTR_FEMALE);
 	var isMale = objectIsAttr(objno, ATTR_MALE);

 	if (!isPlural) 
 	{
	 	if (isFemale) return "F";
	 	if (isMale) return "M";
	    return "N"; // Neuter
 	}
 	else
 	{
	 	if (isFemale) return "PF";
	 	if (isMale) return "PM";
	 	return "PN"; // Neuter plural
 	}

}

function getLang()
{
	var value = bittest(getFlag(FLAG_PARSER_SETTINGS),5);
	if (value) return "ES"; else return "EN";
}

function getObjectFixArticles(objno)
{
	var object_text = getObjectText(objno);
	var object_words = object_text.split(' ');
	if (object_words.length == 1) return object_text;
	var candidate = object_words[0];
	object_words.splice(0, 1);
	if (getLang()=='EN')
	{
		if ((candidate!='an') && (candidate!='a') && (candidate!='some')) return object_text;
		return 'the ' + object_words.join(' ');
	}
	else
	{
		if ( (candidate!='un') && (candidate!='una') && (candidate!='unos') && (candidate!='unas') && (candidate!='alguna') && (candidate!='algunos') && (candidate!='algunas') && (candidate!='algun')) return object_text;
		var gender = getAdvancedGender(objno);
		if (gender == 'F') return 'la ' + object_words.join(' ');
		if (gender == 'M') return 'el ' + object_words.join(' ');
		if (gender == 'N') return 'el ' + object_words.join(' ');
		if (gender == 'PF') return 'las ' + object_words.join(' ');
		if (gender == 'PM') return 'los ' + object_words.join(' ');
		if (gender == 'PN') return 'los ' + object_words.join(' ');
	}	


}



// JS level log functions
function console_log(string)
{
	if (typeof console != "undefined") console.log(string);
}


// Resources functions
function getResourceById(resource_type, id)
{
	for (var i=0;i<resources.length;i++)
	 if ((resources[i][0] == resource_type) && (resources[i][1]==id)) return resources[i][2];
	return false; 
}

// Flag read/write functions
function getFlag(flagno)
{
	 return flags[flagno];
}

function setFlag(flagno, value)
{
	 flags[flagno] = value;
}

// Locations functions
function loc_here()  // Returns current location, avoid direct use of flags
{
	 return getFlag(FLAG_LOCATION);
}


// Connections functions

function setConnection(locno1, dirno, locno2)
{
	connections[locno1][dirno] = locno2;
}

function getConnection(locno, dirno)
{
	return connections[locno].hasOwnProperty(dirno)?connections[locno][dirno]:-1;
}

function getConnectionVerb(locno, tolocno)
{
	for ( var dirno in connections[locno] )
		if ( connections[locno].hasOwnProperty(dirno) && connections[locno][dirno] == tolocno )
		return parseInt(dirno,10);
	return -1;
}

// Objects text functions

function getObjectText(objno)
{
	return filterText(objects[objno]);
}


// Message text functions
function getMessageText(mesno)
{
	return filterText(messages[mesno]);
}

function getSysMessageText(sysno)
{
	return filterText(sysmessages[sysno]);
}

function getWriteMessageText(writeno)
{
	return filterText(writemessages[writeno]);
}

function getExitsText(locno,mesno)
{
  if ( locno === undefined ) return ''; // game hasn't fully initialised yet
  if ((getFlag(FLAG_LIGHT) == 0) || ((getFlag(FLAG_LIGHT) != 0) && lightObjectsPresent()))
  {
  		var exitcount = 0;
  		for (i=0;i<256;i++) if (getConnection(locno, i) != -1) exitcount++;
      if (exitcount)
      {
    		var message = getMessageText(mesno);
    		var exitcountprogress = 0;
    		for (i=0;i<256;i++) if (getConnection(locno, i) != -1)
    		{ 
    			exitcountprogress++;
    			message += getMessageText(mesno + 2 + i);
    			if (exitcountprogress == exitcount) message += getSysMessageText(SYSMESS_LISTEND);
    			if (exitcountprogress == exitcount-1) message += getSysMessageText(SYSMESS_LISTLASTSEPARATOR);
    			if (exitcountprogress <= exitcount-2) message += getSysMessageText(SYSMESS_LISTSEPARATOR);
  		  }
  		  return message;
      } else return getMessageText(mesno + 1);
  } else return getMessageText(mesno + 1);
}


// Location text functions
function getLocationText(locno)
{
	return  filterText(locations[locno]);
}

// can't call "h_sequenceAction" directly here, because the "_" would be replaced:
function sequenceActionHook(text)
{
	return h_sequenceAction(text);
}

// Output processing functions
function implementTag(tag)
{
	tagparams = tag.split('|');
	for (var tagindex=0;tagindex<tagparams.length-1;tagindex++) tagparams[tagindex] = tagparams[tagindex].trim();
	if (tagparams.length == 0) {writeWarning(STR_INVALID_TAG_SEQUENCE_EMPTY); return ''}

	var resolved_hook_value = h_sequencetag(tagparams);
	if (resolved_hook_value!='') return resolved_hook_value;

	switch(tagparams[0].toUpperCase())
	{
		case 'URL': if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					return '<a target="newWindow" href="' + tagparams[1]+ '">' + tagparams[2] + '</a>'; // Note: _blank would get the underscore character replaced by current selected object so I prefer to use a different target name as most browsers will open a new window
					break;
		case 'CLASS': if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					  return '<span class="' + tagparams[1]+ '">' + tagparams[2] + '</span>';
					  break;
		case 'STYLE': if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					  return '<span style="' + tagparams[1]+ '">' + tagparams[2] + '</span>';
					  break;
		case 'INK': if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					  return '<span class="ink-' + tagparams[1]+ '" style="color:' + tagparams[1]+ '">' + tagparams[2] + '</span>';
					  break;
		case 'PAPER': if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					  return '<span class="paper-' + tagparams[1]+ '" style="background-color:' + tagparams[1]+ '">' + tagparams[2] + '</span>';
					  break;
		case 'OBJECT': if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					   if(objects[getFlag(tagparams[1])]) return getObjectFixArticles(getFlag(tagparams[1])); else return '';
					   break;
		case 'WEIGHT': if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					   if(objectsWeight[getFlag(tagparams[1])]) return objectsWeight[getFlag(tagparams[1])]; else return '';
					   break;
		case 'OLOCATION': if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					      if(objectsLocation[getFlag(tagparams[1])]) return objectsLocation[getFlag(tagparams[1])]; else return '';
					      break;
		case 'MESSAGE':if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					   if(messages[getFlag(tagparams[1])]) return getMessageText(getFlag(tagparams[1])); else return '';
					   break;
		case 'SYSMESS':if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					   if(sysmessages[getFlag(tagparams[1])]) return getSysMessageText(getFlag(tagparams[1])); else return '';
					   break;
		case 'LOCATION':if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					   if(locations[getFlag(tagparams[1])]) return getLocationText(getFlag(tagparams[1])); else return '';
		case 'EXITS':if (tagparams.length != 3 ) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					   return getExitsText(/^@\d+/.test(tagparams[1]) ? getFlag(tagparams[1].substr(1)) : tagparams[1],parseInt(tagparams[2],10));
					   break;
		case 'PROCESS':if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					   callProcess(tagparams[1]);
					   return "";
					   break;
		case 'ACTION': if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					   return '<a href="type: ' + tagparams[1] + '" onclick="sequenceActionHook(\'' + tagparams[1]+ '\');return false;">' + tagparams[2] + '</a>';
					   break;
		case 'RESTART': if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					    return '<a href="javascript: void(0)" onclick="h_restart()">' + tagparams[1] + '</a>';
					    break;
		case 'EXTERN': if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					    return '<a href="javascript: void(0)" onclick="' + tagparams[1] + ' ">' + tagparams[2] + '</a>';
					    break;
		case 'TEXTPIC': if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
						var style = '';
						var post = '';
						var pre = '';
						align = tagparams[2];
						switch(align)
						{
							case 1: style = 'float:left'; break;
							case 2: style = 'float:right'; break;
							case 3: post = '<br />';
							case 4: pre='<center>';post='</center>';break;
						}
						return pre + "<img class='textpic' style='"+style+"' src='"+ RESOURCES_DIR + tagparams[1]+"' />" + post;
					    break;
		case 'HTML': if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
						return tagparams[1];
					    break;
		case 'FLAG': if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
						return getFlag(tagparams[1]);
					    break;
		case 'OREF': if (tagparams.length != 1) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
   			        if(objects[getFlag(FLAG_REFERRED_OBJECT)]) return getObjectFixArticles(getFlag(FLAG_REFERRED_OBJECT)); else return '';
					break;
		case 'TT':  
		case 'TOOLTIP':
					if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					var title = $('<span>'+tagparams[1]+'</span>').text().replace(/'/g,"&apos;").replace(/\n/g, "&#10;");
					var text = tagparams[2];
					return "<span title='"+title+"'>"+text+"</span>";
					break;
		case 'OPRO': if (tagparams.length != 1) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};  // returns the pronoun for a given object, used for english start database
					 switch (getSimpleGender(getFlag(FLAG_REFERRED_OBJECT)))
					 {
					 	case 'M' : return "him";
					 	case "F" : return "her";
					 	case "N" : return "it";
					 	case "P" : return "them";  // plural returns them
					 }
					break;

		default : return '[[[' + STR_INVALID_TAG_SEQUENCE_BADTAG + ' : ' + tagparams[0] + ']]]';
	}
}

function processTags(text)
{
	//Apply the {} tags filtering
	var pre, post, innerTag;
	tagfilter:
	while (text.indexOf('{') != -1)
	{
		if (( text.indexOf('}') == -1 ) || ((text.indexOf('}') < text.indexOf('{'))))
		{
			writeWarning(STR_INVALID_TAG_SEQUENCE + text);
			break tagfilter;
		}
		pre = text.substring(0,text.indexOf('{'));
		var openbracketcont = 1;
		pointer = text.indexOf('{') + 1;
		innerTag = ''
		while (openbracketcont>0)
		{
			if (text.charAt(pointer) == '{') openbracketcont++;
			if (text.charAt(pointer) == '}') openbracketcont--;
			if ( text.length <= pointer )
			{
				writeWarning(STR_INVALID_TAG_SEQUENCE + text);
				break tagfilter;
			}
			innerTag = innerTag + text.charAt(pointer);
			pointer++;
		}
		innerTag = innerTag.substring(0,innerTag.length - 1);
		post = text.substring(pointer);
		if (innerTag.indexOf('{') != -1 ) innerTag = processTags(innerTag); 
		innerTag = implementTag(innerTag);
		text = pre + innerTag + post;
	}
	return text;
}

function filterText(text)
{
	// ngPAWS sequences
	text = processTags(text);


	// Superglus sequences (only \n remains)
    text = text.replace(/\n/g, STR_NEWLINE);

	// PAWS sequences (only underscore)
	objno = getFlag(FLAG_REFERRED_OBJECT);
	if ((objno != EMPTY_OBJECT) && (objects[objno]))	text = text.replace(/_/g,objects[objno].firstToLower()); else text = text.replace(/_/g,'');
	text = text.replace(/¬/g,' ');

	return text;
}


// Text Output functions
function writeText(text, skipAutoComplete)
{
	if (typeof skipAutoComplete === 'undefined') skipAutoComplete = false;
	var textClassList = [];
	for ( var key in text_classes ) if ( text_classes.hasOwnProperty(key) )
	{
		textClassList.push( key + '-' + text_classes[key] );
	}
	if ( textClassList.length )
		text = '<span class="' + textClassList.sort().join(' ') + '">' + text + '</span>';
	text = h_writeText(text); // hook
	$('.text').append(text);
	$('.text').scrollTop($('.text')[0].scrollHeight);
	addToTranscript(text);
	if (!skipAutoComplete) addToAutoComplete(text);
	focusInput();
}

function writeWarning(text)
{
	if (showWarnings) writeText(text)
}

function addToTranscript(text)
{
	transcript = transcript + text;		
}

function writelnText(text, skipAutoComplete)
{
	if (typeof skipAutoComplete === 'undefined') skipAutoComplete = false;
	writeText(text + STR_NEWLINE, skipAutoComplete);
}

function writeMessage(mesno)
{
	if (messages[mesno]!=null) writeText(getMessageText(mesno)); else writeWarning(STR_NEWLINE + STR_WRONG_MESSAGE + ' [' + mesno + ']');
}

function writeSysMessage(sysno)
{
		if (sysmessages[sysno]!=null) writeText(getSysMessageText(sysno)); else writeWarning(STR_NEWLINE + STR_WRONG_SYSMESS + ' [' + sysno + ']');
		$(".text").scrollTop($(".text")[0].scrollHeight);
}

function writeWriteMessage(writeno)
{
		writeText(getWriteMessageText(writeno)); 
}

function clearTextWindow()
{
	$('.text').empty();
}


function clearInputWindow()
{
	$('.prompt').val('');
}


function writeLocation(locno)
{
	if (locations[locno]!=null) writeText(getLocationText(locno) + STR_NEWLINE); else writeWarning(STR_NEWLINE + STR_WRONG_LOCATION + ' [' + locno + ']');
}

// Screen control functions

function clearGraphicsWindow()
{
	$('.graphics').empty();	
}


function clearScreen()
{
	clearInputWindow();
	clearTextWindow();
	clearGraphicsWindow();
}

function get_prev_player_order()
{
	if (!last_player_orders.length) return '';
	var last = last_player_orders[last_player_orders.length - 1 - last_player_orders_pointer];
	if (last_player_orders_pointer < last_player_orders.length - 1) last_player_orders_pointer++;
	return last;
}

function get_next_player_order()
{
	if (!last_player_orders.length || last_player_orders_pointer == 0) return '';
	last_player_orders_pointer--;
	return last_player_orders[last_player_orders.length - 1 - last_player_orders_pointer];

}



// Graphics functions


function hideGraphicsWindow()
{
		$('.text').removeClass('half_text');
		$('.text').addClass('all_text');
		$('.graphics').removeClass('half_graphics');
		$('.graphics').addClass('hidden');
		if ($('.location_picture')) $('.location_picture').remove();
}



function drawPicture(picno)  
{
	var pictureDraw = false;
	if (graphicsON) 
	{
		if ((isDarkHere()) && (!lightObjectsPresent())) picno = 0;
		var filename = getResourceById(RESOURCE_TYPE_IMG, picno);
		if (filename)
		{
			$('.graphics').removeClass('hidden');
			$('.graphics').addClass('half_graphics');
			$('.text').removeClass('all_text');
			$('.text').addClass('half_text');
			$('.graphics').html('<img alt="" class="location_picture" src="' +  filename + '" />');
			$('.location_picture').css('height','100%');
			pictureDraw = true;
		}
	}

	if (!pictureDraw) hideGraphicsWindow();
}




function clearPictureAt() // deletes all pictures drawn by "pictureAT" condact
{
	$.each($('.graphics img'), function () {
		if ($(this)[0].className!= 'location_picture') $(this).remove();
	});

}

// Turns functions

function incTurns()
{
	turns = getFlag(FLAG_TURNS_LOW) + 256 * getFlag(FLAG_TURNS_HIGH)  + 1;
	setFlag(FLAG_TURNS_LOW, turns % 256);
	setFlag(FLAG_TURNS_HIGH, Math.floor(turns / 256));
}

// input box functions

function disableInput()
{
	$(".input").prop('disabled', true); 
}

function enableInput()
{
	$(".input").prop('disabled', false); 
}

function focusInput()
{
	$(".prompt").focus();
	timeout_progress = 0;
}

// Object default attributes functions

function objectIsNPC(objno)
{
	if (objno > last_object_number) return false;
	return bittest(getObjectLowAttributes(objno), ATTR_NPC);
}

function objectIsLight(objno)
{
	if (objno > last_object_number) return false;
	return bittest(getObjectLowAttributes(objno), ATTR_LIGHT);
}

function objectIsWearable(objno)
{
	if (objno > last_object_number) return false;
	return bittest(getObjectLowAttributes(objno), ATTR_WEARABLE);
}

function objectIsContainer(objno)
{
	if (objno > last_object_number) return false;
	return bittest(getObjectLowAttributes(objno), ATTR_CONTAINER);
}

function objectIsSupporter(objno)
{
	if (objno > last_object_number) return false;
	return bittest(getObjectLowAttributes(objno), ATTR_SUPPORTER);
}


function objectIsAttr(objno, attrno)
{
	if (attrno > 63) return false;
	var attrs = getObjectLowAttributes(objno);
	if (attrno > 31)
	{
		attrs = getObjectHighAttributes(objno);
		attrno = attrno - 32;
	}
	return bittest(attrs, attrno);
}

function isAccesibleContainer(objno)
{
	if (objectIsSupporter(objno)) return true;   // supporter
	if ( objectIsContainer(objno) && !objectIsAttr(objno, ATTR_OPENABLE) ) return true;  // No openable container
	if ( objectIsContainer(objno) && objectIsAttr(objno, ATTR_OPENABLE) && objectIsAttr(objno, ATTR_OPEN)  )  return true;  // No openable & open container
	return false;
}

//Objects and NPC functions

function findMatchingObject(locno)
{
	for (var i=0;i<num_objects;i++)
		if ((locno==-1) || (getObjectLocation(i) == locno))
		 if (((objectsNoun[i]) == getFlag(FLAG_NOUN1)) && (((objectsAdjective[i]) == EMPTY_WORD) || ((objectsAdjective[i]) == getFlag(FLAG_ADJECT1))))  return i;
	return EMPTY_OBJECT;
}

function getReferredObject()
{
	var objectfound = EMPTY_OBJECT; 
	refobject_search: 
	{
		object_id = findMatchingObject(LOCATION_CARRIED);
		if (object_id != EMPTY_OBJECT)	{objectfound = object_id; break refobject_search;}	

		object_id = findMatchingObject(LOCATION_WORN);
		if (object_id != EMPTY_OBJECT)	{objectfound = object_id; break refobject_search;}	

		object_id = findMatchingObject(loc_here());
		if (object_id != EMPTY_OBJECT)	{objectfound = object_id; break refobject_search;}	

		object_id = findMatchingObject(-1);
		if (object_id != EMPTY_OBJECT)	{objectfound = object_id; break refobject_search;}	
	}
	return objectfound;
}


function getObjectLowAttributes(objno)
{
	return objectsAttrLO[objno];
}

function getObjectHighAttributes(objno)
{
	return objectsAttrHI[objno]
}


function setObjectLowAttributes(objno, attrs)
{
	objectsAttrLO[objno] = attrs;
}

function setObjectHighAttributes(objno, attrs)
{
	objectsAttrHI[objno] = attrs;
}


function getObjectLocation(objno)
{
	if (objno > last_object_number) 
		writeWarning(STR_INVALID_OBJECT + ' [' + objno + ']');
	return objectsLocation[objno];
}

function setObjectLocation(objno, locno)
{
	if (objectsLocation[objno] == LOCATION_CARRIED) setFlag(FLAG_OBJECTS_CARRIED_COUNT, getFlag(FLAG_OBJECTS_CARRIED_COUNT) - 1);
	objectsLocation[objno] = locno;
	if (objectsLocation[objno] == LOCATION_CARRIED) setFlag(FLAG_OBJECTS_CARRIED_COUNT, getFlag(FLAG_OBJECTS_CARRIED_COUNT) + 1);
}



// Sets all flags associated to  referred object by current LS  
function setReferredObject(objno) 
{
	if (objno == EMPTY_OBJECT)
	{
		setFlag(FLAG_REFERRED_OBJECT, EMPTY_OBJECT);
		setFlag(FLAG_REFERRED_OBJECT_LOCATION, LOCATION_NONCREATED);
		setFlag(FLAG_REFERRED_OBJECT_WEIGHT, 0);
		setFlag(FLAG_REFERRED_OBJECT_LOW_ATTRIBUTES, 0);
		setFlag(FLAG_REFERRED_OBJECT_HIGH_ATTRIBUTES, 0);
		return;
	}
	setFlag(FLAG_REFERRED_OBJECT, objno);
	setFlag(FLAG_REFERRED_OBJECT_LOCATION, getObjectLocation(objno));
	setFlag(FLAG_REFERRED_OBJECT_WEIGHT, getObjectWeight(objno));
	setFlag(FLAG_REFERRED_OBJECT_LOW_ATTRIBUTES, getObjectLowAttributes(objno));
	setFlag(FLAG_REFERRED_OBJECT_HIGH_ATTRIBUTES, getObjectHighAttributes(objno));

}


function getObjectWeight(objno) 
{
	var weight = objectsWeight[objno];
	if ( ((objectIsContainer(objno)) || (objectIsSupporter(objno))) && (weight!=0)) // Container with zero weigth are magic boxes, anything you put inside weigths zero
  		weight = weight + getLocationObjectsWeight(objno);
	return weight;
}


function getLocationObjectsWeight(locno) 
{
	var weight = 0;
	for (var i=0;i<num_objects;i++)
	{
		if (getObjectLocation(i) == locno) 
		{
			objweight = objectsWeight[i];
			if ( locno != LOCATION_WORN || worn_items_have_weight ) weight += objweight;
			if (objweight > 0)
			{
				if (  (objectIsContainer(i)) || (objectIsSupporter(i)) )
				{	
					weight += getLocationObjectsWeight(i);
				}
			}
		}
	}
	return weight;
}

function getObjectCountAt(locno) 
{
	var count = 0;
	for (i=0;i<num_objects;i++)
	{
		if (getObjectLocation(i) == locno) 
		{
			attr = getObjectLowAttributes(i);
			if (!bittest(getFlag(FLAG_PARSER_SETTINGS),3)) count ++;  // Parser settings say we should include NPCs as objects
			 else if (!objectIsNPC(i)) count++;     // or object is not an NPC
		}
	}
	return count;
}


function getObjectCountAtWithAttr(locno, attrnoArray) 
{
	var count = 0;
	for (var i=0;i<num_objects;i++)
		if (getObjectLocation(i) == locno)  
			for (var j=0;j<attrnoArray.length;j++)
				if (objectIsAttr(i, attrnoArray[j])) count++;
	return count;
}


function getNPCCountAt(locno) 
{
	var count = 0;
	for (i=0;i<num_objects;i++)
		if ((getObjectLocation(i) == locno) &&  (objectIsNPC(i))) count++;
	return count;
}


// Location light function

function lightObjectsAt(locno) 
{
	return getObjectCountAtWithAttr(locno, [ATTR_LIGHT]) > 0;
}


function lightObjectsPresent() 
{
  if (lightObjectsAt(LOCATION_CARRIED)) return true;
  if (lightObjectsAt(LOCATION_WORN)) return true;
  if (lightObjectsAt(loc_here())) return true;
  return false;
}


function isDarkHere()
{
	return (getFlag(FLAG_LIGHT) != 0);
}

// Sound functions


function preloadsfx()
{
	for (var i=0;i<resources.length;i++)
	 	if (resources[i][0] == 'RESOURCE_TYPE_SND') 
	 	{
	 		var fileparts = resources[i][2].split('.');
			var basename = fileparts[0];
			var mySound = new buzz.sound( basename, {  formats: [ "ogg", "mp3" ] , preload: true} );
	 	}
}

function sfxplay(sfxno, channelno, times, method)
{

	if (!soundsON) return;
	if ((channelno <0) || (channelno >MAX_CHANNELS)) return;
	if (times == 0) times = -1; // more than 4000 million times
	var filename = getResourceById(RESOURCE_TYPE_SND, sfxno);
	if (filename)
	{
		var fileparts = filename.split('.');
		var basename = fileparts[0];
		var mySound = new buzz.sound( basename, {  formats: [ "ogg", "mp3" ] });
		if (soundChannels[channelno]) soundChannels[channelno].stop();
		soundLoopCount[channelno] = times;
		mySound.bind("ended", function(e) {
			for (sndloop=0;sndloop<MAX_CHANNELS;sndloop++)
				if (soundChannels[sndloop] == this)
				{
					if (soundLoopCount[sndloop]==-1) {this.play(); return }
					soundLoopCount[sndloop]--;
					if (soundLoopCount[sndloop] > 0) {this.play(); return }
					sfxstop(sndloop);
					return;
				}
		});
		soundChannels[channelno] = mySound;
		if (method=='play')	mySound.play(); else mySound.fadeIn(2000);
	}
}

function playLocationMusic(locno)
{
	if (soundsON) 
		{
			sfxstop(0);
			sfxplay(locno, 0, 0, 'play');
		}
}

function musicplay(musicno, times)  
{
	sfxplay(musicno, 0, times);
}

function channelActive(channelno)
{
	if (soundChannels[channelno]) return true; else return false;
}


function sfxstopall() 
{
	for (channelno=0;channelno<MAX_CHANNELS;channelno++) sfxstop(channelno);

}


function sfxstop(channelno)
{
	if (soundChannels[channelno]) 
		{
			soundChannels[channelno].unbind('ended');
			soundChannels[channelno].stop();
			soundChannels[channelno] = null;
		}
}

function sfxvolume(channelno, value)
{
	if (soundChannels[channelno]) soundChannels[channelno].setVolume(Math.floor( value * 100 / 65535)); // Inherited volume condact uses a number among 0 and 65535, buzz library uses 0-100.
}

function isSFXPlaying(channelno)
{
	if (!soundChannels[channelno]) return false;
	return true;
}


function sfxfadeout(channelno, value)
{
	if (!soundChannels[channelno]) return;
	soundChannels[channelno].fadeOut(value, function() { sfxstop(channelno) });
}

// *** Process functions ***

function callProcess(procno)
{
	if (inEND) return;
	current_process = procno;
	var prostr = procno.toString(); 
	while (prostr.length < 3) prostr = "0" + prostr;
	if (procno==0) in_response = true;
	if (doall_flag && in_response) done_flag = false;
	if (!in_response) done_flag = false;
	h_preProcess(procno);
    eval("pro" + prostr + "()");
	h_postProcess(procno);
	if (procno==0) in_response = false;
}

// Bitwise functions

function bittest(value, bitno)
{
	mask = 1 << bitno;
	return ((value & mask) != 0);
}

function bitset(value, bitno)
{

	mask = 1 << bitno;
	return value | mask;
}

function bitclear(value, bitno)
{
	mask = 1 << bitno;
	return value & (~mask);
}


function bitneg(value, bitno) 
{
	mask = 1 << bitno;
	return value ^ mask;

}

// Savegame functions
function getSaveGameObject()
{
	var savegame_object = new Object();
	// Notice that slice() is used to make sure a copy of each array is assigned to the object, no the arrays themselves
	savegame_object.flags = flags.slice();
	savegame_object.body_class = document.body.className;
	savegame_object.objectsLocation = objectsLocation.slice();
	savegame_object.objectsWeight = objectsWeight.slice();
	savegame_object.objectsAttrLO = objectsAttrLO.slice();
	savegame_object.objectsAttrHI = objectsAttrHI.slice();
	savegame_object.connections = $.extend( true, [], connections );
	savegame_object.last_player_orders = last_player_orders.slice();
	savegame_object.last_player_orders_pointer = last_player_orders_pointer;
	savegame_object.transcript = transcript;
	savegame_object.text_classes = $.extend( true, {}, text_classes );
	savegame_object = h_saveGame(savegame_object);
	return savegame_object;
}

function restoreSaveGameObject(savegame_object)
{
	flags = savegame_object.flags;
	if ( savegame_object.hasOwnProperty('body_class') ) document.body.className = savegame_object.body_class;
	// Notice that slice() is used to make sure a copy of each array is assigned to the object, no the arrays themselves
	objectsLocation = savegame_object.objectsLocation.slice();
	objectsWeight = savegame_object.objectsWeight.slice();
	objectsAttrLO = savegame_object.objectsAttrLO.slice();
	objectsAttrHI = savegame_object.objectsAttrHI.slice();
	connections = $.extend( true, [], savegame_object.connections );
	last_player_orders = savegame_object.last_player_orders.slice();
	last_player_orders_pointer = savegame_object.last_player_orders_pointer;
	transcript = savegame_object.transcript;
	text_classes = $.extend( true, {}, savegame_object.text_classes );
	h_restoreGame(savegame_object);
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                        The parser                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function loadPronounSufixes()
{

    var swapped;

	for (var j=0;j<vocabulary.length;j++) if (vocabulary[j][VOCABULARY_TYPE] == WORDTYPE_PRONOUN)
			 pronoun_suffixes.push(vocabulary[j][VOCABULARY_WORD]);
	// Now sort them so the longest are first, so you rather replace SELOS in (COGESELOS=>COGE SELOS == >TAKE THEM) than LOS (COGESELOS==> COGESE LOS ==> TAKExx THEM) that woul not be understood (COGESE is not a verb, COGE is)
    do {
        swapped = false;
        for (var i=0; i < pronoun_suffixes.length-1; i++) 
        {
            if (pronoun_suffixes[i].length < pronoun_suffixes[i+1].length) 
            {
                var temp = pronoun_suffixes[i];
                pronoun_suffixes[i] = pronoun_suffixes[i+1];
                pronoun_suffixes[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}


function findVocabulary(word, forceDisableLevenshtein)  
{
	// Pending: in general this function is not very efficient. A solution where the vocabulary array is sorted by word so the first search can be binary search
	//          and possible typos are precalculated, so the distance is a lookup table instead of a function, would be much more efficient. On the other hand,
	//          the current solution is fast enough with a 1000+ words game that I don't consider improving this function to have high priority now.

	// Search word in vocabulary
	for (var j=0;j<vocabulary.length;j++)
		if (vocabulary[j][VOCABULARY_WORD] == word)
			 return vocabulary[j];

	if (forceDisableLevenshtein) return null;

	if (word.length <=4) return null; // Don't try to fix typo for words with less than 5 length

	if (bittest(getFlag(FLAG_PARSER_SETTINGS), 8)) return null; // If matching is disabled, we won't try to use levhenstein distance

	// Search words in vocabulary with a Levenshtein distance of 1
	var distance2_match = null;
	for (var k=0;k<vocabulary.length;k++)
	{
		if ([WORDTYPE_VERB,WORDTYPE_NOUN,WORDTYPE_ADJECT,WORDTYPE_ADVERB].indexOf(vocabulary[k][VOCABULARY_TYPE])  != -1 )
		{
			var distance = getLevenshteinDistance(vocabulary[k][VOCABULARY_WORD], word);
			if ((!distance2_match) && (distance==2)) distance2_match = vocabulary[k]; // Save first word with distance=2, in case we don't find any word with distance 1
			if (distance <= 1) return vocabulary[k];
		}
	} 

	// If we found any word with distance 2, return it, only if word was at least 7 characters long
	if ((distance2_match) &&  (word.length >6)) return distance2_match;

	// Word not found
	return null;
}

function normalize(player_order)   
// Removes accented characters and makes sure every sentence separator (colon, semicolon, quotes, etc.) has one space before and after. Also, all separators are converted to comma
{
	var originalchars = 'áéíóúäëïöüâêîôûàèìòùÁÉÍÓÚÄËÏÖÜÂÊÎÔÛÀÈÌÒÙ';
	var i;
	var output = '';
	var pos;

	for (i=0;i<player_order.length;i++) 
	{
		pos = originalchars.indexOf(player_order.charAt(i));
		if (pos!=-1) output = output + "aeiou".charAt(pos % 5); else 
		{
			ch = player_order.charAt(i);
				if ((ch=='.') || (ch==',') || (ch==';') || (ch=='"') || (ch=='\'') || (ch=='«') || (ch=='»')) output = output + ' , '; else output = output + player_order.charAt(i);
		}

	}
	return output;
}

function toParserBuffer(player_order)  // Converts a player order in a list of sentences separated by dot.
{
     player_order = normalize(player_order);
     player_order = player_order.toUpperCase();
     var words = player_order.trim().split(/ +/);
     words = h_mangleWords(words);

	 for (var q=0;q<words.length;q++)
	 {
	 	if  (words[q]!=',')
	 	{
	 		foundWord = findVocabulary(words[q], false);
	 		if (foundWord)
	 		{
	 			if (foundWord[VOCABULARY_TYPE]==WORDTYPE_CONJUNCTION)
	 			{
	 			words[q] = ','; // Replace conjunctions with commas
		 		} 
	 		}
	 	}
	 }

	 var output = '';
	 for (q=0;q<words.length;q++)
	 {
	 	if (words[q] == ',') output = output + ','; else output = output + words[q] + ' ';
	 }
	 output = output.replace(/ ,/g,',');
	 output = output.trim();
	 player_order_buffer = output;
}

function getSentencefromBuffer()
{
	var sentences = player_order_buffer.split(',');
	var result = sentences[0];
	sentences.splice(0,1);
	player_order_buffer = sentences.join();
	return result;
}

function processPronounSufixes(words)  
{
	// This procedure will split pronominal sufixes into separated words, so COGELA will become COGE LA at the end, and work exactly as TAKE IT does.
	// it's only for spanish so if lang is english then it makes no changes
	if (getLang() == 'EN') return words;
	var verbFound = false;
	if (!bittest(getFlag(FLAG_PARSER_SETTINGS),0)) return words;  // If pronoun sufixes inactive, just do nothing
	// First, we clear the word list from any match with pronouns, cause if we already have something that matches pronouns, probably is just concidence, like in COGE LA LLAVE
	var filtered_words = [];
	for (var q=0;q < words.length;q++)
	{
		foundWord = findVocabulary(words[q], false);
		if (foundWord) 
			{
				if (foundWord[VOCABULARY_TYPE] != WORDTYPE_PRONOUN) filtered_words[filtered_words.length] = words[q];
			}
			else filtered_words[filtered_words.length] = words[q];
	}
	words = filtered_words;

	// Now let's start trying to get sufixes
	new_words = [];
	for (var k=0;k < words.length;k++)
	{
		words[k] = words[k].trim();
		foundWord = findVocabulary(words[k], true); // true to disable Levenshtein distance applied
		if (foundWord) if (foundWord[VOCABULARY_TYPE] == WORDTYPE_VERB) verbFound = true;  // If we found a verb, we don't look for pronoun sufixes, as they have to come together with verb
		suffixFound = false;
		pronunsufix_search:
		for (var l=0;(l<pronoun_suffixes.length) && (!suffixFound) && (!verbFound);l++)
		{

			if (pronoun_suffixes[l] == words[k].rights(pronoun_suffixes[l].length))
			{
				var verb_part = words[k].substring(0,words[k].length - pronoun_suffixes[l].length);
				var checkWord = findVocabulary(verb_part, false);
				if ((!checkWord)  || (checkWord[VOCABULARY_TYPE] != WORDTYPE_VERB))  // If the part before the supposed-to-be pronoun sufix is not a verb, then is not a pronoun sufix
				{
					new_words.push(words[k]);	
					continue pronunsufix_search;
				}
				new_words.push(verb_part);  // split the word in two parts: verb + pronoun. Since that very moment it works like in english (COGERLO ==> COGER LO as of TAKE IT)
				new_words.push(pronoun_suffixes[l]);
				suffixFound = true;
				verbFound = true;
			}
		}
		if (!suffixFound) new_words.push(words[k]);
	}
	return new_words;
}

function getLogicSentence()
{
	parser_word_found = false; ;
	aux_verb = -1;
	aux_noun1 = -1;
	aux_adject1 = -1;
	aux_adverb = -1;
	aux_pronoun = -1
	aux_pronoun_adject = -1
	aux_preposition = -1;
	aux_noun2 = -1;
	aux_adject2 = -1;
	initializeLSWords();
	SL_found = false;

	var order = getSentencefromBuffer();
	setFlag(FLAG_PARSER_SETTINGS, bitclear(getFlag(FLAG_PARSER_SETTINGS),1)); // Initialize flag that says an unknown word was found in the sentence


	words = order.split(" ");
	words = processPronounSufixes(words);
	wordsearch_loop:
	for (var i=0;i<words.length;i++)
	{
		original_word = currentword = words[i];
		if (currentword.length>10) currentword = currentword.substring(0,MAX_WORD_LENGHT);
		foundWord = findVocabulary(currentword, false);
		if (foundWord)
		{
			wordtype = foundWord[VOCABULARY_TYPE];
			word_id = foundWord[VOCABULARY_ID];

			switch (wordtype)
			{
				case WORDTYPE_VERB: if (aux_verb == -1)  aux_verb = word_id; 
				        			break;

				case WORDTYPE_NOUN: if (aux_noun1 == -1) aux_noun1 = word_id; else if (aux_noun2 == -1) aux_noun2 = word_id;
									break;

				case WORDTYPE_ADJECT: if (aux_adject1 == -1) aux_adject1 = word_id; else if (aux_adject2 == -1) aux_adject2 = word_id;
									  break;

				case WORDTYPE_ADVERB: if (aux_adverb == -1) aux_adverb = word_id;
				        			  break;

				case WORDTYPE_PRONOUN: if (aux_pronoun == -1) 
											{
												aux_pronoun = word_id;
												if ((previous_noun != EMPTY_WORD) && (aux_noun1 == -1))
												{
													aux_noun1 = previous_noun;
													if (previous_adject != EMPTY_WORD) aux_adject1 = previous_adject;
												}
											}

				        			   break;

				case WORDTYPE_CONJUNCTION: break wordsearch_loop; // conjunction or nexus. Should not appear in this function, just added for security
				
				case WORDTYPE_PREPOSITION: if (aux_preposition == -1) aux_preposition = word_id;
										   if (aux_noun1!=-1) setFlag(FLAG_PARSER_SETTINGS, bitset(getFlag(FLAG_PARSER_SETTINGS),2));  // Set bit that determines that a preposition word was found after first noun
										   break;
			}

			// Nouns that can be converted to verbs
			if ((aux_noun1!=-1) && (aux_verb==-1) && (aux_noun1 < NUM_CONVERTIBLE_NOUNS))
			{
				aux_verb = aux_noun1;
				aux_noun1 = -1;
			}

			if ((aux_verb==-1) && (aux_noun1!=-1) && (previous_verb!=EMPTY_WORD)) aux_verb = previous_verb;  // Support "TAKE SWORD AND SHIELD" --> "TAKE WORD AND TAKE SHIELD"

			if ((aux_verb!=-1) || (aux_noun1!=-1) || (aux_adject1!=-1 || (aux_preposition!=-1) || (aux_adverb!=-1))) SL_found = true;



		} else if (aux_verb!=-1) setFlag(FLAG_PARSER_SETTINGS, bitset(getFlag(FLAG_PARSER_SETTINGS),1));  // Set bit that determines that an unknown word was found after the verb
	}

	if (SL_found)
	{
		if (aux_verb != -1) setFlag(FLAG_VERB, aux_verb);
		if (aux_noun1 != -1) setFlag(FLAG_NOUN1, aux_noun1);
		if (aux_adject1 != -1) setFlag(FLAG_ADJECT1, aux_adject1);
		if (aux_adverb != -1) setFlag(FLAG_ADVERB, aux_adverb);
		if (aux_pronoun != -1) 
			{
				setFlag(FLAG_PRONOUN, aux_noun1);
				setFlag(FLAG_PRONOUN_ADJECT, aux_adject1);
			}
			else
			{
				setFlag(FLAG_PRONOUN, EMPTY_WORD);
				setFlag(FLAG_PRONOUN_ADJECT, EMPTY_WORD);
			}
		if (aux_preposition != -1) setFlag(FLAG_PREP, aux_preposition);
		if (aux_noun2 != -1) setFlag(FLAG_NOUN2, aux_noun2);
		if (aux_adject2 != -1) setFlag(FLAG_ADJECT2, aux_adject2);
		setReferredObject(getReferredObject());
		previous_verb = aux_verb;
		if ((aux_noun1!=-1) && (aux_noun1>=NUM_PROPER_NOUNS))
		{
			previous_noun = aux_noun1;
			if (aux_adject1!=-1) previous_adject = aux_adject1;
		}
		
	}
	if ((aux_verb + aux_noun1+ aux_adject1 + aux_adverb + aux_pronoun + aux_preposition + aux_noun2 + aux_adject2) != -8) parser_word_found = true;

	return SL_found;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                        Main functions and main loop                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Interrupt functions

function enableInterrupt()
{
	interruptDisabled = false;
}

function disableInterrupt()
{
	interruptDisabled = true;
}

function timer()
{
	// Timeout control
	timeout_progress=  timeout_progress + 1/32;  //timer happens every 40 milliseconds, but timeout counter should only increase every 1.28 seconds (according to PAWS documentation)
	timeout_length = getFlag(FLAG_TIMEOUT_LENGTH);
	if ((timeout_length) && (timeout_progress> timeout_length))  // time for timeout
	{
		timeout_progress = 0;
		if (($('.prompt').val() == '')  || (($('.prompt').val()!='') && (!bittest(getFlag(FLAG_TIMEOUT_SETTINGS),0))) )  // but first check there is no text type, or is allowed to timeout when text typed already
		{
			setFlag(FLAG_TIMEOUT_SETTINGS, bitset(getFlag(FLAG_TIMEOUT_SETTINGS),7)); // Clears timeout bit
			writeSysMessage(SYSMESS_TIMEOUT);	
			callProcess(PROCESS_TURN);
		}
	}	

	// PAUSE condact control
	if (inPause)
	{
		pauseRemainingTime = pauseRemainingTime - 40; // every tick = 40 milliseconds
		if (pauseRemainingTime<=0)
		{
			inPause = false;
			hideAnykeyLayer();
			waitKeyCallback()
		}
	}

	// Interrupt process control
	if (!interruptDisabled)
	if (interruptProcessExists)
	{
		callProcess(interrupt_proc);
		setFlag(FLAG_PARSER_SETTINGS, bitclear(getFlag(FLAG_PARSER_SETTINGS), 4));  // Set bit at flag that marks that a window resize happened 
	}

}

// Initialize and finalize functions

function farewell()
{
	writeSysMessage(SYSMESS_FAREWELL);
	ACCnewline();
}


function initializeConnections()
{
  connections = $.extend( true, [], connections_start );
}

function initializeObjects()
{
  for (i=0;i<objects.length;i++)
  {
  	objectsAttrLO = [].concat(objectsAttrLO_start);
  	objectsAttrHI = [].concat(objectsAttrHI_start);
  	objectsLocation = [].concat(objectsLocation_start);
  	objectsWeight = [].concat(objectsWeight_start);
  }
}

function  initializeLSWords()
{
  setFlag(FLAG_PREP,EMPTY_WORD);
  setFlag(FLAG_NOUN2,EMPTY_WORD);
  setFlag(FLAG_ADJECT2,EMPTY_WORD);
  setFlag(FLAG_PRONOUN,EMPTY_WORD);
  setFlag(FLAG_ADJECT1,EMPTY_WORD);
  setFlag(FLAG_VERB,EMPTY_WORD);
  setFlag(FLAG_NOUN1,EMPTY_WORD);
  setFlag(FLAG_ADJECT1,EMPTY_WORD);
  setFlag(FLAG_ADVERB,EMPTY_WORD);
}


function initializeFlags()
{
  flags = [];
  for (var  i=0;i<FLAG_COUNT;i++) flags.push(0);
  setFlag(FLAG_MAXOBJECTS_CARRIED,4);
  setFlag(FLAG_PARSER_SETTINGS,9); // Pronoun sufixes active, DOALL and others ignore NPCs, etc. 00001001
  setFlag(FLAG_MAXWEIGHT_CARRIED,10);
  initializeLSWords();
  setFlag(FLAG_OBJECT_LIST_FORMAT,64); // List objects in a single sentence (comma separated)
  setFlag(FLAG_OBJECTS_CARRIED_COUNT,carried_objects);  // FALTA: el compilador genera esta variable, hay que cambiarlo en el compilador, ERA numero_inicial_de_objetos_llevados
}

function initializeInternalVars()
{
	num_objects = last_object_number + 1;
	transcript = '';
	timeout_progress = 0;
	previous_noun = EMPTY_WORD;
	previous_verb = EMPTY_WORD;
	previous_adject = EMPTY_WORD;
	player_order_buffer = '';
	last_player_orders = [];
	last_player_orders_pointer = 0;
	graphicsON = true; 
	soundsON = true; 
	interruptDisabled = false;
	unblock_process = null;
	done_flag = false;
	describe_location_flag =false;
	in_response = false;
	success = false;
	doall_flag = false;
	entry_for_doall	= '';
}

function initializeSound()
{
	sfxstopall();
}




function initialize()
{
	preloadsfx();
	initializeInternalVars();
	initializeSound();
	initializeFlags();
	initializeObjects();
	initializeConnections();
}



// Main loops

function descriptionLoopInner()
{
	do
	{
		describe_location_flag = false;
		if (!getFlag(FLAG_MODE)) clearTextWindow();
		if ((isDarkHere()) && (!lightObjectsPresent())) writeSysMessage(SYSMESS_ISDARK); else writeLocation(loc_here()); 
		h_description_init();
		playLocationMusic(loc_here());
		if (loc_here()) drawPicture(loc_here()); else hideGraphicsWindow(); // Don't show picture at location 0
		ACCminus(FLAG_AUTODEC2,1);
		if (isDarkHere()) ACCminus(FLAG_AUTODEC3,1);
		if ((isDarkHere()) && (lightObjectsAt(loc_here())==0)) ACCminus(FLAG_AUTODEC4,1);
		callProcess(PROCESS_DESCRIPTION);
		h_description_post();
		if (describe_location_flag) continue; // descriptionLoop() again without nesting
		describe_location_flag = false;
		if ( !waitkey_turn_requested ) callProcess(PROCESS_TURN);
		if (describe_location_flag) continue; 
		describe_location_flag = false;
		focusInput();
		break; // Dirty trick to make this happen just one, but many times if descriptioLoop() should be repeated
	} while (true);

}

function descriptionLoop()
{
	return runInSerial([h_descriptionLoop_init,descriptionLoopInner,h_descriptionLoop_post]);
}

function orderEnteredLoopInner()
{
	if (player_order_buffer =='')
	{
		previous_verb = ''; // Can't use previous verb if a new order is typed (we keep previous noun though, it can be used)
		focusInput();
		return;
	}

	describe_location_flag = false;
	ACCminus(FLAG_AUTODEC5,1);
	ACCminus(FLAG_AUTODEC6,1);
	ACCminus(FLAG_AUTODEC7,1);
	ACCminus(FLAG_AUTODEC8,1);
	if (isDarkHere()) ACCminus(FLAG_AUTODEC9,1);
	if ((isDarkHere()) && (lightObjectsAt(loc_here())==0)) ACCminus(FLAG_AUTODEC10,1);

	if (describe_location_flag)
	{
		descriptionLoop();
		return;
	};

	if (getLogicSentence())
	{
		incTurns();
		done_flag = false;
		h_executeOrder();
		if (describe_location_flag) 
		{
			descriptionLoop();
			return;
		};
	} else
	{
		h_invalidOrder(player_order);
		if (parser_word_found) {writeSysMessage(SYSMESS_IDONTUNDERSTAND);   ACCnewline() }
		    		      else {writeSysMessage(SYSMESS_NONSENSE_SENTENCE); ACCnewline() };
	}
	if ( !rescan_flag )
	{
		if ( inPause || inAnykey ) waitkey_turn_requested = true;
		else callProcess(PROCESS_TURN);
	}
	if ( inPause || inAnykey )
		waitkey_order_requested = true;
	else
		return orderEnteredLoopInner()
}

function orderEnteredLoop(player_order)
{
	previous_verb = EMPTY_WORD;
	setFlag(FLAG_TIMEOUT_SETTINGS, bitclear(getFlag(FLAG_TIMEOUT_SETTINGS),7)); // Clears timeout bit
	if (player_order == '') {writeSysMessage(SYSMESS_SORRY); ACCnewline(); return; };	
	player_order = h_playerOrder(player_order); //hook
	runInSerial([
		h_copyOrderToTextWindow(player_order),
		function() {
			toParserBuffer(player_order);
			orderEnteredLoopInner();
		},
    		setInputPlaceHolder
	]);
}


function hideBlock()
{
	if ( debug_flag ) return;
	clearInputWindow();
    $('.block_layer').hide('slow');
    enableInterrupt();   	
    $('.input').show();  
    focusInput();
}

function hideAnykeyLayer()
{
	$('.anykey_layer').hide();
    $('.input').show();  
    focusInput();   
}

function showAnykeyLayer()
{
	if ( debug_flag ) return;
	$('.anykey_layer').show();
    $('.input').hide();  
}

//called when the block layer is closed
function closeBlock()
{
	if (!inBlock) return;
	inBlock = false;
	hideBlock();
    var proToCall = unblock_process;
	unblock_process = null;
	callProcess(proToCall);
	if (describe_location_flag) descriptionLoop();
}

function setInputPlaceHolder()
{
	var prompt_msg = getFlag(FLAG_PROMPT);
	if (!prompt_msg)
	{
		var random = Math.floor((Math.random()*100));
		if (random<30) prompt_msg = SYSMESS_PROMPT0; else
		if ((random>=30) && (random<60)) prompt_msg = SYSMESS_PROMPT1; else
		if ((random>=60) && (random<90)) prompt_msg = SYSMESS_PROMPT2; else
		if (random>=90) prompt_msg = SYSMESS_PROMPT3;
	}
	$('.prompt').attr('placeholder', $('<div>'+getSysMessageText(prompt_msg).replace(/(?:<br>)*$/,'').replace( /<br>/g, ', ' )+'</div>').text());
}


function divTextScrollUp()
{
   	var currentPos = $('.text').scrollTop();
	if (currentPos>=DIV_TEXT_SCROLL_STEP) $('.text').scrollTop(currentPos - DIV_TEXT_SCROLL_STEP); else $('.text').scrollTop(0);
}

function divTextScrollDown()
{
   	var currentPos = $('.text').scrollTop();
   	if (currentPos <= ($('.text')[0].scrollHeight - DIV_TEXT_SCROLL_STEP)) $('.text').scrollTop(currentPos + DIV_TEXT_SCROLL_STEP); else $('.text').scrollTop($('.text')[0].scrollHeight);
}

// Autocomplete functions

function predictiveText(currentText)
{
	if (currentText == '') return currentText;
	var wordToComplete;
	var words = currentText.split(' ');
	if (autocompleteStep!=0) wordToComplete = autocompleteBaseWord; else wordToComplete = words[words.length-1];
	words[words.length-1] = completedWord(wordToComplete);
	return words.join(' ');
}


function initAutoComplete()
{
	for (var j=0;j<vocabulary.length;j++)
		if (vocabulary[j][VOCABULARY_TYPE] == WORDTYPE_VERB)
			if (vocabulary[j][VOCABULARY_WORD].length >= 3)
				autocomplete.push(h_displayWord(vocabulary[j][VOCABULARY_WORD]).toLowerCase());
}

function addToAutoComplete(sentence)
{
	var words = sentence.split(' ');
	for (var i=0;i<words.length;i++)
	{
		var finalWord = '';
		for (var j=0;j<words[i].length;j++)
		{
			var c = words[i][j].toLowerCase();
			if ("abcdefghijklmnopqrstuvwxyzáéíóúàèìòùçäëïÖüâêîôû".indexOf(c) != -1) finalWord = finalWord + c;
			else break;
		}
	
		if (finalWord.length>=3) 
		{
			var index = autocomplete.indexOf(finalWord);
			if (index!=-1) autocomplete.splice(index,1);
			autocomplete.push(finalWord);
		}
	}
}

function completedWord(word)
{
	if (word=='') return '';
   autocompleteBaseWord  =word;
   var foundCount = 0;
   for (var i = autocomplete.length-1;i>=0; i--)
   {
   	  if (autocomplete[i].length > word.length) 
   	  	 if (autocomplete[i].indexOf(word)==0) 
   	  	 	{
   	  	 		foundCount++;
   	  	 		if (foundCount>autocompleteStep)
   	  	 		{
   	  	 			autocompleteStep++;
   	  	 			return autocomplete[i];
   	  	 		}
   	  	 	}
   }
   return word;
}


// Exacution starts here, called by the html file on document.ready()
function start()
{
	h_init(); //hook
	$('.graphics').addClass('half_graphics');
	$('.text').addClass('half_text');
	if (isBadIE()) alert(STR_BADIE)
	loadPronounSufixes();	
    setInputPlaceHolder();
    initAutoComplete();

	// Assign keypress action for input box (detect enter key press)
	$('.prompt').keypress(function(e) {  
    	if (e.which == 13) 
    	{ 
    		player_order = $('.prompt').val();
    		if (player_order.charAt(0) == '#')
    		{
    			addToTranscript(player_order + STR_NEWLINE);
    			clearInputWindow();
    			setInputPlaceHolder();
    		} 
    		else
    		if (player_order!='') 
		{
			if ( inPause || inAnykey )
				$('.prompt').val(player_order + '; ');
			else
    				orderEnteredLoop(player_order);
		}
    	}
    });

	// Assign arrow up key press to recover last order
    $('.prompt').keyup( function(e) {
    	if (e.which  == 38) $('.prompt').val(get_prev_player_order());
    	if (e.which  == 40) $('.prompt').val(get_next_player_order());
    });


    // Assign tab keydown to complete word
    $('.prompt').keydown( function(e) {
    	if (e.which == 9) 
    		{
    			$('.prompt').val(predictiveText($('.prompt').val()));
    			e.preventDefault();
    		} else 
    		{
		    	autocompleteStep = 0;
    			autocompleteBaseWord = ''; // Any keypress other than tab resets the autocomplete feature
    		}
    });

    //Detect resize to change flag 12
     $(window).resize(function () {
     	setFlag(FLAG_PARSER_SETTINGS, bitset(getFlag(FLAG_PARSER_SETTINGS), 4));  // Set bit at flag that marks that a window resize happened 
     	clearPictureAt();
     	return;
     });


     // assign any click on block layer --> close it
     $(document).click( function(e) {

	// if waiting for END response
	if (inEND)
	{
		h_restart();
		return;
	}

     	if (inBlock)
     	{
     		closeBlock();
     		e.preventDefault();
     		return;
     	}

     	if (inAnykey)  // return for ANYKEY, accepts mouse click
     	{
     		inAnykey = false;
     		hideAnykeyLayer();
     		waitKeyCallback();
     		e.preventDefault();
     		return;
    	}

     });

     //Make tap act as click
    document.addEventListener('touchstart', function(e) {$(document).click(); }, false);   
     
     
	$(document).keydown(function(e) {

		// ignore uninteresting keys
		switch ( e.keyCode )
		{
			case 16: // shift
			case 17: // ctrl
			case 18: // alt
			case 20: // caps lock
			case 91: // left Windows key
			case 92: // left Windows key
			case 93: // left Windows key
			case 225: // right alt
				// do not focus the input - the user was probably doing something else
				// (e.g. alt-tab'ing to another window)
				return;
		}

		if (!h_keydown(e)) return; // hook

		// if waiting for END response
		if (inEND)
		{
			var endYESresponse = getSysMessageText(SYSMESS_YES);
			var endNOresponse = getSysMessageText(SYSMESS_NO);
			if (!endYESresponse.length) endYESresponse = 'Y'; // Prevent problems with empy message
			if (!endNOresponse.length) endNOresponse = 'N'; 
			var endYESresponseCode = endYESresponse.charCodeAt(0);
			var endNOresponseCode = endNOresponse.charCodeAt(0);

			if (endYESresponseCode == e.keyCode) h_restart();
			if (13                 == e.keyCode) h_restart(); // use pressent RETURN
			if (endNOresponseCode == e.keyCode)  
			{
				inEND = false;
				sfxstopall();
				$('body').hide('slow');
			}
			return;
		}


		// if waiting for QUIT response
		if (inQUIT)
		{
			var endYESresponse = getSysMessageText(SYSMESS_YES);
			var endNOresponse = getSysMessageText(SYSMESS_NO);
			if (!endYESresponse.length) endYESresponse = 'Y'; // Prevent problems with empy message
			if (!endNOresponse.length) endNOresponse = 'N'; 
			var endYESresponseCode = endYESresponse.charCodeAt(0);
			var endNOresponseCode = endNOresponse.charCodeAt(0);

			if (endNOresponseCode == e.keyCode) 
			{
	           inQUIT=false;
			   waitkey_callback_function.pop();
			   hideAnykeyLayer();
			   e.preventDefault();
			}

			if (endYESresponseCode == e.keyCode) 
			{
				inQUIT=false;
     			e.preventDefault();
				waitKeyCallback();
     			return;				
			}
		}


		if (inGetkey)  // return for getkey
     	{
     		setFlag(getkey_return_flag, e.keyCode);
     		getkey_return_flag = null;
     		inGetkey = false;
     		hideAnykeyLayer();
     		e.preventDefault();
     		waitKeyCallback();
     		return;
      	}

     	// Scroll text window using PgUp/PgDown
        if (e.keyCode==33)  // PgUp
        {
        	divTextScrollUp();
        	e.preventDefault();
        	return;
        }
        if (e.keyCode==34)  // PgDown
        {
        	divTextScrollDown();
        	return;
        }


     	if (inAnykey)  // return for anykey
     	{
     		inAnykey = false;
     		hideAnykeyLayer();
     		waitKeyCallback();
     		return;
     	}

		// if keypress and block displayed, close it
     	if (inBlock)
     		{
     			closeBlock();
     			e.preventDefault();
     			return;
     		}


     	// if ESC pressed and transcript layer visible, close it
     	if ((inTranscript) &&  (e.keyCode == 27)) 
     		{
     			$('.transcript_layer').hide();
     			inTranscript = false;
     			e.preventDefault();
     			return;
     		}

	// focus the input if the user is likely to expect it
	// (but not if they're e.g. ctrl+c'ing some text)
	switch ( e.keyCode )
	{
		case 8: // backspace
		case 9: // tab
		case 13: // enter
			break;
		default:
			if ( !e.ctrlKey && !e.altKey ) focusInput();
	}

	});


    $(document).bind('wheel mousewheel',function(e)
    {
  		if((e.originalEvent.wheelDelta||-e.originalEvent.deltaY) > 0) divTextScrollUp(); else divTextScrollDown();
    });


	initialize();
	descriptionLoop();
	focusInput();
	
	h_post();  //hook

    // Start interrupt process
    setInterval( timer, TIMER_MILLISECONDS );

}

$('document').ready(
	function ()
	{
		start();
	}
	);

// VOCABULARY

vocabulary = [];
vocabulary.push([2, "AND", 5]);
vocabulary.push([88, "CANISTER", 1]);
vocabulary.push([31, "COMMODORE", 0]);
vocabulary.push([10, "DESCEND", 0]);
vocabulary.push([13, "INSPECT", 0]);
vocabulary.push([37, "NN_AIRL", 1]);
vocabulary.push([136, "NN_ALL", 1]);
vocabulary.push([160, "NN_ART", 1]);
vocabulary.push([52, "NN_BARS", 1]);
vocabulary.push([89, "NN_BAT", 1]);
vocabulary.push([80, "NN_BEHI", 1]);
vocabulary.push([221, "NN_BELT", 1]);
vocabulary.push([44, "NN_BIRD", 1]);
vocabulary.push([24, "NN_BOMB", 1]);
vocabulary.push([81, "NN_BOOK", 1]);
vocabulary.push([18, "NN_BOTT", 1]);
vocabulary.push([18, "NN_BOTTLE", 1]);
vocabulary.push([98, "NN_BOX", 1]);
vocabulary.push([87, "NN_BUBB", 1]);
vocabulary.push([14, "NN_BUIL", 1]);
vocabulary.push([19, "NN_BUNC", 1]);
vocabulary.push([66, "NN_BUTT", 1]);
vocabulary.push([29, "NN_CAGE", 1]);
vocabulary.push([53, "NN_CAN", 1]);
vocabulary.push([88, "NN_CANI", 1]);
vocabulary.push([76, "NN_CHAI", 1]);
vocabulary.push([36, "NN_CHAR", 1]);
vocabulary.push([63, "NN_COIN", 1]);
vocabulary.push([49, "NN_CRAC", 1]);
vocabulary.push([160, "NN_CRIT", 1]);
vocabulary.push([38, "NN_CRYS", 1]);
vocabulary.push([38, "NN_CRYSTAL", 1]);
vocabulary.push([57, "NN_CUPB", 1]);
vocabulary.push([75, "NN_CURT", 1]);
vocabulary.push([99, "NN_DESK", 1]);
vocabulary.push([62, "NN_DINO", 1]);
vocabulary.push([94, "NN_DOG", 1]);
vocabulary.push([14, "NN_DOOR", 1]);
vocabulary.push([57, "NN_DRAW", 1]);
vocabulary.push([61, "NN_FENC", 1]);
vocabulary.push([97, "NN_FILE", 1]);
vocabulary.push([21, "NN_FOOD", 1]);
vocabulary.push([74, "NN_GOBL", 1]);
vocabulary.push([26, "NN_GRAT", 1]);
vocabulary.push([70, "NN_GYMS", 1]);
vocabulary.push([84, "NN_HIPP", 1]);
vocabulary.push([166, "NN_HOLE", 1]);
vocabulary.push([58, "NN_KEY", 1]);
vocabulary.push([19, "NN_KEYS", 1]);
vocabulary.push([160, "NN_LADY", 1]);
vocabulary.push([20, "NN_LAMP", 1]);
vocabulary.push([46, "NN_LETT", 1]);
vocabulary.push([14, "NN_LOCK", 1]);
vocabulary.push([43, "NN_LOG", 1]);
vocabulary.push([162, "NN_MIRR", 1]);
vocabulary.push([38, "NN_MOON", 1]);
vocabulary.push([69, "NN_MOUT", 1]);
vocabulary.push([92, "NN_NEWS", 1]);
vocabulary.push([81, "NN_OBLO", 1]);
vocabulary.push([79, "NN_PACK", 1]);
vocabulary.push([79, "NN_PACKET", 1]);
vocabulary.push([82, "NN_PAIN", 1]);
vocabulary.push([92, "NN_PAPE", 1]);
vocabulary.push([73, "NN_PARS", 1]);
vocabulary.push([112, "NN_PELL", 1]);
vocabulary.push([112, "NN_PELLET", 1]);
vocabulary.push([16, "NN_PENN", 1]);
vocabulary.push([16, "NN_PENNY", 1]);
vocabulary.push([72, "NN_PETT", 1]);
vocabulary.push([82, "NN_PICT", 1]);
vocabulary.push([36, "NN_PILE", 1]);
vocabulary.push([46, "NN_PILL", 1]);
vocabulary.push([30, "NN_ROD", 1]);
vocabulary.push([96, "NN_ROPE", 1]);
vocabulary.push([76, "NN_SAW", 1]);
vocabulary.push([90, "NN_SEAR", 1]);
vocabulary.push([163, "NN_SIDE", 1]);
vocabulary.push([151, "NN_SIGN", 1]);
vocabulary.push([52, "NN_SILV", 1]);
vocabulary.push([52, "NN_SILVER", 1]);
vocabulary.push([70, "NN_SKIR", 1]);
vocabulary.push([81, "NN_SOLU", 1]);
vocabulary.push([77, "NN_SOPH", 1]);
vocabulary.push([39, "NN_SORB", 1]);
vocabulary.push([32, "NN_SPRI", 1]);
vocabulary.push([90, "NN_SWIT", 1]);
vocabulary.push([55, "NN_TABL", 1]);
vocabulary.push([55, "NN_TABLE", 1]);
vocabulary.push([220, "NN_TIAR", 1]);
vocabulary.push([220, "NN_TIARA", 1]);
vocabulary.push([94, "NN_TOOD", 1]);
vocabulary.push([59, "NN_TRIN", 1]);
vocabulary.push([59, "NN_TRIX", 1]);
vocabulary.push([78, "NN_TROL", 1]);
vocabulary.push([90, "NN_TURN", 1]);
vocabulary.push([88, "NN_VALV", 1]);
vocabulary.push([38, "NN_VENU", 1]);
vocabulary.push([39, "NN_WALL", 1]);
vocabulary.push([30, "NN_WAND", 1]);
vocabulary.push([22, "NN_WATE", 1]);
vocabulary.push([201, "NN_WELL", 1]);
vocabulary.push([201, "NN_WELLIES", 1]);
vocabulary.push([39, "NN_WORD", 1]);
vocabulary.push([59, "NN_YOU", 1]);
vocabulary.push([41, "NN_ZX81", 1]);
vocabulary.push([13, "OBSERVE", 0]);
vocabulary.push([156, "RELOAD", 0]);
vocabulary.push([159, "REPLAY", 0]);
vocabulary.push([44, "SONGBIRD", 1]);
vocabulary.push([2, "THEN", 5]);
vocabulary.push([158, "TRANSCRIPT", 0]);
vocabulary.push([42, "VB_ATTA", 0]);
vocabulary.push([42, "VB_BATT", 0]);
vocabulary.push([80, "VB_BEHI", 0]);
vocabulary.push([42, "VB_BREA", 0]);
vocabulary.push([93, "VB_BUY", 0]);
vocabulary.push([45, "VB_CATC", 0]);
vocabulary.push([76, "VB_CHAI", 0]);
vocabulary.push([9, "VB_CLIM", 0]);
vocabulary.push([31, "VB_CLON", 0]);
vocabulary.push([31, "VB_COMM", 0]);
vocabulary.push([57, "VB_CUPB", 0]);
vocabulary.push([75, "VB_CURT", 0]);
vocabulary.push([95, "VB_CUT", 0]);
vocabulary.push([10, "VB_D", 0]);
vocabulary.push([94, "VB_DOG", 0]);
vocabulary.push([10, "VB_DOWN", 0]);
vocabulary.push([15, "VB_DRAW", 0]);
vocabulary.push([161, "VB_DRIN", 0]);
vocabulary.push([101, "VB_DROP", 0]);
vocabulary.push([3, "VB_E", 0]);
vocabulary.push([3, "VB_EAST", 0]);
vocabulary.push([47, "VB_EAT", 0]);
vocabulary.push([48, "VB_ENTE", 0]);
vocabulary.push([13, "VB_EXAM", 0]);
vocabulary.push([48, "VB_EXIT", 0]);
vocabulary.push([90, "VB_EXTI", 0]);
vocabulary.push([164, "VB_FART", 0]);
vocabulary.push([45, "VB_FILL", 0]);
vocabulary.push([35, "VB_FIRE", 0]);
vocabulary.push([67, "VB_FUCK", 0]);
vocabulary.push([157, "VB_GAMES", 0]);
vocabulary.push([100, "VB_GET", 0]);
vocabulary.push([45, "VB_GIVE", 0]);
vocabulary.push([74, "VB_GOBL", 0]);
vocabulary.push([153, "VB_GRAP", 0]);
vocabulary.push([42, "VB_HIT", 0]);
vocabulary.push([104, "VB_I", 0]);
vocabulary.push([165, "VB_IGNO", 0]);
vocabulary.push([48, "VB_IN", 0]);
vocabulary.push([101, "VB_INSE", 0]);
vocabulary.push([48, "VB_INTO", 0]);
vocabulary.push([104, "VB_INVE", 0]);
vocabulary.push([42, "VB_KICK", 0]);
vocabulary.push([42, "VB_KILL", 0]);
vocabulary.push([60, "VB_KISS", 0]);
vocabulary.push([105, "VB_L", 0]);
vocabulary.push([48, "VB_LEAV", 0]);
vocabulary.push([33, "VB_LEFT", 0]);
vocabulary.push([47, "VB_LICK", 0]);
vocabulary.push([71, "VB_LIFT", 0]);
vocabulary.push([28, "VB_LIGH", 0]);
vocabulary.push([108, "VB_LOAD", 0]);
vocabulary.push([105, "VB_LOOK", 0]);
vocabulary.push([15, "VB_MOVE", 0]);
vocabulary.push([1, "VB_N", 0]);
vocabulary.push([17, "VB_NO", 0]);
vocabulary.push([1, "VB_NORT", 0]);
vocabulary.push([15, "VB_OPEN", 0]);
vocabulary.push([48, "VB_OUT", 0]);
vocabulary.push([73, "VB_PARS", 0]);
vocabulary.push([45, "VB_PICK", 0]);
vocabulary.push([50, "VB_PLUG", 0]);
vocabulary.push([65, "VB_PRES", 0]);
vocabulary.push([65, "VB_PUSH", 0]);
vocabulary.push([45, "VB_PUT", 0]);
vocabulary.push([106, "VB_QUIT", 0]);
vocabulary.push([71, "VB_RAIS", 0]);
vocabulary.push([42, "VB_RAM", 0]);
vocabulary.push([42, "VB_RAPE", 0]);
vocabulary.push([13, "VB_READ", 0]);
vocabulary.push([102, "VB_REMO", 0]);
vocabulary.push([34, "VB_RIGH", 0]);
vocabulary.push([2, "VB_S", 0]);
vocabulary.push([107, "VB_SAVE", 0]);
vocabulary.push([76, "VB_SAW", 0]);
vocabulary.push([85, "VB_SCOR", 0]);
vocabulary.push([90, "VB_SEAR", 0]);
vocabulary.push([45, "VB_SELL", 0]);
vocabulary.push([67, "VB_SHIT", 0]);
vocabulary.push([42, "VB_SMAS", 0]);
vocabulary.push([77, "VB_SOPH", 0]);
vocabulary.push([2, "VB_SOUT", 0]);
vocabulary.push([31, "VB_SPEC", 0]);
vocabulary.push([27, "VB_SPEL", 0]);
vocabulary.push([101, "VB_SPEN", 0]);
vocabulary.push([154, "VB_SPIT", 0]);
vocabulary.push([32, "VB_SPRI", 0]);
vocabulary.push([31, "VB_SUGA", 0]);
vocabulary.push([67, "VB_SWEA", 0]);
vocabulary.push([90, "VB_SWIT", 0]);
vocabulary.push([45, "VB_TAKE", 0]);
vocabulary.push([155, "VB_TAPE", 0]);
vocabulary.push([152, "VB_TEXT", 0]);
vocabulary.push([25, "VB_THRO", 0]);
vocabulary.push([94, "VB_TOOD", 0]);
vocabulary.push([78, "VB_TROL", 0]);
vocabulary.push([90, "VB_TURN", 0]);
vocabulary.push([9, "VB_U", 0]);
vocabulary.push([15, "VB_UNLO", 0]);
vocabulary.push([9, "VB_UP", 0]);
vocabulary.push([4, "VB_W", 0]);
vocabulary.push([109, "VB_WAIT", 0]);
vocabulary.push([68, "VB_WASH", 0]);
vocabulary.push([22, "VB_WATE", 0]);
vocabulary.push([54, "VB_WAVE", 0]);
vocabulary.push([103, "VB_WEAR", 0]);
vocabulary.push([4, "VB_WEST", 0]);
vocabulary.push([150, "VB_Y2", 0]);
vocabulary.push([23, "VB_YES", 0]);
vocabulary.push([41, "VB_ZX81", 0]);



// SYS MESSAGES

total_sysmessages=72;

sysmessages = [];

sysmessages[0] = "{CLASS|bright ink-magenta|It's dark here. You might fall into a sploosh-hole.}<br>";
sysmessages[1] = "{CLASS|bright ink-cyan|And you can see:}<br>";
sysmessages[2] = "What do you want to do now?";
sysmessages[3] = "{EXITS|@38|1000}";
sysmessages[4] = "What next?";
sysmessages[5] = "Now what?";
sysmessages[6] = "{CLASS|bright|Sorry, this thick computer doesn't understand that.}<br>";
sysmessages[7] = "{CLASS|bright|You can't go that way.}<br>";
sysmessages[8] = "{CLASS|bright|You jolly well can't, so there.}<br>";
sysmessages[9] = "{CLASS|bright|You have pinched:}";
sysmessages[10] = " (worn)";
sysmessages[11] = "{CLASS|bright|Nix}<br>";
sysmessages[12] = "{CLASS|bright|Giving up so soon?}<br>";
sysmessages[13] = "{CLASS|center|\n{CLASS|bright ink-black paper-white|THE END{CLASS|ink-white paper-black| \n}}}{CLASS|bright ink-white|{CLASS|paper-black|'nother go?}}<br>";
sysmessages[14] = "{CLASS|bright|SAYONARA}<br>";
sysmessages[15] = "{CLASS|bright|OK}<br>";
sysmessages[16] = "{CLASS|center|Press a key}<br>";
sysmessages[17] = "{CLASS|bright|You have taken }";
sysmessages[18] = "{CLASS|bright| turn}";
sysmessages[19] = "{CLASS|bright|s}";
sysmessages[20] = ".<br>";
sysmessages[21] = "\n{CLASS|bright|You have &pound;}";
sysmessages[22] = "{CLASS|bright|,000 two shillings and fourpence three-farthings.\n{CLASS|ink-yellow|\n{CLASS|ink-yellow|A smart spelunker can make &pound;131,000 in part 1.\n}}}<br>";
sysmessages[23] = "{CLASS|bright|Not being worn, duffer.}<br>";
sysmessages[24] = "{CLASS|bright|You can't. Your hands are full.}<br>";
sysmessages[25] = "{CLASS|bright|You already have it, dumbo.}<br>";
sysmessages[26] = "{CLASS|bright|It's not here, dim-wit.}<br>";
sysmessages[27] = "{CLASS|bright|You can't carry any more, wimp.}<br>";
sysmessages[28] = "{CLASS|bright|You don't have it, chump.}<br>";
sysmessages[29] = "{CLASS|bright|Already being worn, bub.}<br>";
sysmessages[30] = "Y<br>";
sysmessages[31] = "N<br>";
sysmessages[32] = "More...<br>";
sysmessages[33] = "><br>";
sysmessages[34] = "<br>";
sysmessages[35] = "Time passes...<br>";
sysmessages[36] = "";
sysmessages[37] = "";
sysmessages[38] = "";
sysmessages[39] = "";
sysmessages[40] = "{CLASS|bright|You jolly well can't, so there.}<br>";
sysmessages[41] = "{CLASS|bright|You jolly well can't, so there.}<br>";
sysmessages[42] = "{CLASS|bright|You can't. Your hands are full.}<br>";
sysmessages[43] = "{CLASS|bright|You can't carry any more, wimp.}<br>";
sysmessages[44] = "{CLASS|bright|You put that into<br>}";
sysmessages[45] = "{CLASS|bright|that is not into<br>}";
sysmessages[46] = "<br>";
sysmessages[47] = "<br>";
sysmessages[48] = "<br>";
sysmessages[49] = "{CLASS|bright|You don't have it, chump.}<br>";
sysmessages[50] = "{CLASS|bright|You jolly well can't, so there.}<br>";
sysmessages[51] = "{CLASS|bright|.<br>}";
sysmessages[52] = "{CLASS|bright|That is not into<br>}";
sysmessages[53] = "{CLASS|bright|nothing at all<br>}";
sysmessages[54] = "{CLASS|bright|File not found.<br>}";
sysmessages[55] = "{CLASS|bright|File corrupt.<br>}";
sysmessages[56] = "{CLASS|bright|I/O error. File not saved.<br>}";
sysmessages[57] = "{CLASS|bright|Directory full.<br>}";
sysmessages[58] = "Please enter savegame name you used when saving the game status.";
sysmessages[59] = "{CLASS|bright|Invalid savegame name. Please check the name you entered is correct, and make sure you are trying to load the game from the same browser you saved it.<br>}";
sysmessages[60] = "Please enter savegame name. Remember to note down the name you choose, as it will be requested in order to restore the game status.";
sysmessages[61] = "{CLASS|bright|<br>}";
sysmessages[62] = "{CLASS|bright|Sorry? Please try other words.<br>}";
sysmessages[63] = "{CLASS|bright|Here<br>}";
sysmessages[64] = "{CLASS|bright|you can see<br>}";
sysmessages[65] = "{CLASS|bright|you can see<br>}";
sysmessages[66] = "{CLASS|bright|inside you see<br>}";
sysmessages[67] = "{CLASS|bright|on top you see<br>}";
sysmessages[68] = "What is your reply?";
sysmessages[69] = "Type EAST, then press RETURN";
sysmessages[70] = "Type messages in here, like &#34;north&#34; or &#34;get keys&#34;";
sysmessages[71] = "(extra message added so the newlines below aren't included in the message above)\n\n\n\n\n\n";

// USER MESSAGES

total_messages=10;

messages = [];

messages[1000] = "Exits: ";
messages[1001] = "You can't see any exits";
messages[1003] = "{ACTION|north|north}";
messages[1004] = "{ACTION|south|south}";
messages[1005] = "{ACTION|east|east}";
messages[1006] = "{ACTION|west|west}";
messages[1011] = "{ACTION|up|up}";
messages[1012] = "{ACTION|down|down}";
messages[1050] = "{ACTION|out|out}";
messages[1051] = "(extra message added so the newlines below aren't included in the message above)\n\n\n\n\n\n";

// WRITE MESSAGES

total_writemessages=307;

writemessages = [];

writemessages[0] = "RESPONSE_START";
writemessages[1] = "RESPONSE_USER";
writemessages[2] = "{CLASS|bright|The ferocious creature will not let you.}";
writemessages[3] = "south";
writemessages[4] = "{CLASS|bright|The ferocious creature will not let you.}";
writemessages[5] = "{CLASS|bright|The ferocious creature will not let you.}";
writemessages[6] = "{CLASS|bright|No. It is far too wet underfoot. You'll catch your death and then who'll get the blame? Me, that's who. Not you. You'll be happily dead. I'll have to explain it to the RSPCA. In a word, no.}";
writemessages[7] = "\n{CLASS|bright|Go find some wellies, then maybe.}";
writemessages[8] = "{ACTION|wear wellies|Put your wellies on first.}";
writemessages[9] = "north";
writemessages[10] = "{CLASS|bright|No. This a family game. Don't you start getting into any dirty cracks.}";
writemessages[11] = "\n{CLASS|bright|Oh well, you can go in if you must, but I'm staying outside.\n}";
writemessages[12] = "{CLASS|bright|And it will cost you a treasure.}";
writemessages[13] = "west";
writemessages[14] = "{CLASS|bright|The {ACTION|examine the door|door} of the small brick building is closed.}";
writemessages[15] = "west";
writemessages[16] = "{CLASS|bright|The ferocious creature will not let you.}";
writemessages[17] = "east";
writemessages[18] = "{CLASS|bright|You peer over the edge into the darkness below...}";
writemessages[19] = "{CLASS|bright|\n                                           BOO!}";
writemessages[20] = "{CLASS|bright|Only joking.}";
writemessages[21] = "east";
writemessages[22] = "{CLASS|bright|You try the door but the mechanism seems to have caught on the outside.\n\nA similar thing once occurred to three old ladies of my acquaintance.}";
writemessages[23] = "{CLASS|bright|I think the bird's still in there}";
writemessages[24] = "{CLASS|bright ink-lime center|\n-- BLEURGH --\n}";
writemessages[25] = "{CLASS|bright|I'm sure she'll be ready for her curtain call.}";
writemessages[26] = "{CLASS|bright|You have spent your penny.}";
writemessages[27] = "{CLASS|bright|Never heard of him.}";
writemessages[28] = "down";
writemessages[29] = "down";
writemessages[30] = "{CLASS|bright ink-yellow|Yippee! Now we're getting to the really good bits!}";
writemessages[31] = "up";
writemessages[32] = "up";
writemessages[33] = "up";
writemessages[34] = "{CLASS|bright|You see a brass mechanism attached to the door, bearing the legend:\n\n{CLASS|center|{CLASS|ink-black paper-yellow| VACANT }}\nThere is an aperture at the top of the mechanism approximately the thickness and diameter of {ACTION|spend a penny|one penny (old style)}.}";
writemessages[35] = "{CLASS|bright|Green. Originally one of a set of ten.}";
writemessages[36] = "{CLASS|bright|They are of the kind which lock and unlock things.}";
writemessages[37] = "{CLASS|bright|I wouldn't. It's a school dinner.}";
writemessages[38] = "{CLASS|bright|Round and black with &#34;BOMB&#34; written on it.}";
writemessages[39] = "{CLASS|bright|It looks as if you could enter it.}";
writemessages[40] = "{CLASS|center|\n\n\n{CLASS|bright ink-lime|BOOOOOoooooiiiinnnNNGGGG!!!!}}";
writemessages[41] = "east";
writemessages[42] = "{CLASS|bright|Health and Safety made us seal it up after an incident with a grue.}";
writemessages[43] = "{CLASS|bright|I've already described it at great length. If you want ten-page descriptions you should read War and Peace. Which reminds me. Did you do your homework before you started this silly game?}";
writemessages[44] = "{CLASS|bright|They are in the shape of space ships. They do not look much the worse for being zapped - the odd pixel out of place here and there, perhaps. Nothing more. These are tough characters.\n\nYou notice that one of them is rather more than a character. This is THE MOTHER SHIP, three characters in length by two high. Pretty big even for a full-blown sprite like yourself. There is {ACTION|open airlock|an airlock} on the ship.}";
writemessages[45] = "{CLASS|center|\n\n{ACTION|commodore|{CLASS|bright ink-yellow|COMMODORE}}}";
writemessages[46] = "{CLASS|bright|{ACTION|get wall|Cold and inviting}.}";
writemessages[47] = "{CLASS|bright|It is red with a large slot and {ACTION|open letterbox|a small keyhole}. The ornate letters are &#34;V.R.&#34; Below them is {ACTION|examine sign|a sign}.}";
writemessages[48] = "{CLASS|bright|It looks as if you could enter it.}";
writemessages[49] = "{CLASS|bright|I am extraordinarily attractive. I am wearing a boater, navy blue gymslip and black stockings.}";
writemessages[50] = "{CLASS|bright|He knows the price of everything and the value of nothing.}";
writemessages[51] = "{CLASS|bright|On closer inspection, it is {ACTION|get hippy|an aging hippy}.}";
writemessages[52] = "{CLASS|bright|It is larger than you. It bears the head of Abraham Lincoln and the words:\n\n}{CLASS|center bright ink-yellow|IN GOD WE TRUST}";
writemessages[53] = "{CLASS|bright|You can't see a parsimonious filing-clerk here.}";
writemessages[54] = "{CLASS|bright|You cannot see a green goblin with vermilion spots here.}";
writemessages[55] = "{CLASS|bright|Curtains: that's just scenery.}";
writemessages[56] = "{CLASS|bright|The room description was very misleading - there is nothing behind the curtains.\n\nI'd complain if I were you.}";
writemessages[57] = "{CLASS|bright|Chainsaw: ignore it.}";
writemessages[58] = "{CLASS|bright|You can't use the word &#34;sophisticated&#34; like that.}";
writemessages[59] = "{CLASS|bright|Troll: ignore it.}";
writemessages[60] = "{CLASS|bright|You see the title {ACTION|get book|&#34;{CLASS|ink-magenta|A Detailed Solution to the Gotham City Section of {CLASS|ink-yellow|The Very Big Cave Adventure{CLASS|ink-white|&#34;.}}}}}";
writemessages[61] = "{CLASS|bright|You examine the pictures.\nYou are astounded that as many as three people are present.}";
writemessages[62] = "{CLASS|bright|They are valuable treasures, both on account of their great antiquity and as consummate examples of the taxidermist's art.}";
writemessages[63] = "{CLASS|bright|It has {ACTION|open drawers|drawers} and a {ACTION|break mirror|mirror}.}";
writemessages[64] = "{CLASS|bright|You see a chump.}";
writemessages[65] = "{CLASS|ink-lime bright|BOOOOOoooooiiiinnnNNGGGG!!!!}";
writemessages[66] = "{CLASS|bright|You are a chump. It's stainless steel.}";
writemessages[67] = "{CLASS|bright ink-lime paper-white|&#34;I'll pull t'rough, babe. I gotta.&#34;}\n";
writemessages[68] = "{CLASS|bright paper-white ink-blue|&#34;Don't worry, Louie. We'll nail da rats what done this to ya. We'll nail 'em good.&#34;}\n";
writemessages[69] = "{CLASS|bright paper-white ink-magenta|&#34;I knew you'd come to a bad end, son. I never believed all that stuff about violin lessons.&#34;}\n";
writemessages[70] = "{CLASS|bright paper-white ink-red|&#34;Yeah, he's the big man behind the operation. His name is... ARRGH CHOKE&#34;}\n";
writemessages[71] = "{CLASS|bright|Etc. As you sort through the bubbles you uncover {ACTION|examine canister|something buried beneath them}.}";
writemessages[72] = "\n{CLASS|bright center ink-yellow|NITROUS OXIDE\nWITH CARE\n}{CLASS|bright ink-white|The canister has {ACTION|Open valve|a valve} at the top.}";
writemessages[73] = "{CLASS|bright|On the back is scrawled:\n}";
writemessages[74] = "{CLASS|bright ink-yellow|Take a cart}";
writemessages[75] = "{CLASS|bright ink-yellow|From the sea}";
writemessages[76] = "{CLASS|bright ink-yellow|Turn it round}";
writemessages[77] = "{CLASS|bright ink-yellow|And you'll find me.}";
writemessages[78] = "{CLASS|bright|\nIt is 'signed' with a crude picture of a jester.}";
writemessages[79] = "{CLASS|bright|A bat-like splodge is painted on the glass. At the back is {ACTION|switch switch|a switch}.}";
writemessages[80] = "{CLASS|bright|Toodloo sinks his cute little fangs into your triceps. The entire literate population of Gotham hits you over the head with her umbrella.}";
writemessages[81] = "\n{ACTION|open box|{CLASS|center ink-yellow bright|DEHYDRATED ART CRITICS\n{CLASS|ink-magenta|Surprise your friends with these\n}AMAZING NATURAL MARVELS}}";
writemessages[82] = "{CLASS|bright center|{CLASS|paper-red| Beware! A treasure-eating mouse lives in this pillar box }}";
writemessages[83] = "{CLASS|bright|Pong.}";
writemessages[84] = "{CLASS|bright ink-black|{CLASS|paper-white|Rule 137(b): The player may not examine the utility belt until part 2.}}";
writemessages[85] = "{CLASS|bright|Looks pretty ordinary to me.}";
writemessages[86] = "{CLASS|bright|Something prevents it from opening.}";
writemessages[87] = "{CLASS|bright|It's locked}";
writemessages[88] = "{CLASS|bright|You fumble through your keys, but none of them fit}";
writemessages[89] = "{CLASS|bright|The sound of tumultuous applause roars forth from the can.}";
writemessages[90] = "{CLASS|bright|\nThe little songbird prances about the room, bowing and blowing kisses.}";
writemessages[91] = "{CLASS|bright|\nThe little songbird appears, bowing and blowing kisses.}";
writemessages[92] = "{CLASS|bright|\nYou close the can.}";
writemessages[93] = "\n{CLASS|bright|{CLASS|ink-cyan|&#34;Thank you, thank you!&#34;} says the bird. {CLASS|ink-cyan|&#34;And for my next little number...&#34;}}";
writemessages[94] = "\n{CLASS|bright|Suddenly she spots the snake and attacks it. In an astounding flurry she sends it to that great flying circus in the sky.}";
writemessages[95] = "{CLASS|bright|You mean you actually found that in the Spectrum version?  Bravo!\n\nBut no, there's nothing there.}";
writemessages[96] = "{CLASS|bright|As the gas escapes, THAT MAN begins to laugh, but THE JESTER, who is always laughing, now collapses in helpless paroxysms, kicking his legs in the air.\n\nTHAT MAN slaps the bracelets on him and takes his haul - one Picasso and two recent works by Ferdinand Fink. The choice is typical of THE JESTER's grotesquely twisted aesthetic sense.\n{CLASS|ink-cyan|\n{CLASS|ink-cyan|&#34;Here, take these,&#34; says THAT MAN. &#34;The city is better off without them.\n\n&#34;I'll take you back to the caves.&#34;}}}";
writemessages[97] = "{CLASS|bright|The gas makes you giggle. As this is a serious adventure you close it up again.}";
writemessages[98] = "{CLASS|bright|{ACTION|Look|Something} falls to the ground.}";
writemessages[99] = "{CLASS|bright|The bull believes your outrageous fib and stops guarding the gully.}";
writemessages[100] = "\n{CLASS|bright|It is a GULLY-BULL}";
writemessages[101] = "{CLASS|bright|The pellet blossoms into an angular lady in a black shirt and white tie who sprouts the following foliage:{CLASS|ink-yellow|\n&#34;While it is perhaps tempting to compare Morone's 'Blank Canvas' with 'Unpainted Canvas' by Cretine, nothing could be more misleading. While Cretine sees a pure white proto-landscape of limitless possibilities, Morone is representing the existential void which confronts us all when the superficial pretences of civilised life are stripped away. It is necessary to remember that Cretine's work is a virgin canvas while Morone's is actually a Rembrandt scrubbed clean with turpentine in order fully to confront...&#34;} etc.}";
writemessages[102] = "{CLASS|center|\n{CLASS|bright ink-yellow|&#34;WELL, GO AWAY!&#34;}}";
writemessages[103] = "{CLASS|bright|The bull eats the bomb and promptly explodes in a most inelegant manner.\n\nIt is A BOMB IN A BULL.\n\nBut enough of this old bull. What do you want to do now?}";
writemessages[104] = "{CLASS|bright|Spelunking means exploring caves, you duffer. That's what we're here for. Not that you've made much of a job of it so far.}";
writemessages[105] = "commodore";
writemessages[106] = "commodore";
writemessages[107] = "{CLASS|bright|You feel a weird sensation, then suddenly...}";
writemessages[108] = "{CLASS|bright| nothing happens}";
writemessages[109] = "{CLASS|center|\n\n\n{CLASS|bright ink-lime|BOOOOOoooooiiiinnnNNGGGG!!!!}}";
writemessages[110] = "east";
writemessages[111] = "\n{CLASS|bright ink-yellow|EDGE OF SCLEEN}";
writemessages[112] = "{CLASS|bright ink-yellow|YOU HAVE MOVED LEFT}";
writemessages[113] = "\n{CLASS|bright ink-yellow|EDGE OF SCLEEN}";
writemessages[114] = "{CLASS|bright ink-yellow|YOU HAVE MOVED RIGHT}";
writemessages[115] = "{CLASS|bright ink-yellow|ZZZAPPP!\n\n}";
writemessages[116] = "{CLASS|bright ink-lime|KERBLANGG! ANOTHER GLEENSKIN BITES THE DUST!\n\n}";
writemessages[117] = "$('.graphics img').attr('src',RESOURCES_DIR+'location19-'+getFlag(212)+'.svg');";
writemessages[118] = "{CLASS|bright ink-lime|KERBLANGG! ANOTHER GLEENSKIN BITES THE DUST!\n\n}";
writemessages[119] = "$('.graphics img').attr('src',RESOURCES_DIR+'location19-'+getFlag(212)+'.svg');";
writemessages[120] = "{CLASS|bright ink-yellow|MISSED}";
writemessages[121] = "{CLASS|bright|THE JESTER escapes as you cut the rope. THAT MAN offers to take you back to the caves.}";
writemessages[122] = "{CLASS|bright|It is very stout but shows some signs of giving under your attack.}";
writemessages[123] = "{CLASS|bright|You hear cracking and splintering sounds - it is definitely giving way.}";
writemessages[124] = "{CLASS|bright|A lavatory attendant apprehends you for damaging public property. The magistrate binds you over to keep the peace and stay away from the caves area.}";
writemessages[125] = "{CLASS|bright|The {ACTION|east|door} swings open.}";
writemessages[126] = "{CLASS|bright|With what, dear Liza?}";
writemessages[127] = "{CLASS|bright|It's already full}";
writemessages[128] = "{CLASS|bright|Try &#34;get&#34; or &#34;drop&#34;.}";
writemessages[129] = "{CLASS|bright|OK {CLASS|ink-lime|(YIK!)}}";
writemessages[130] = "{CLASS|bright|Fine vintage for Chateau Yquem. For sorbet YIK! Actually it's volcanic rock. Don't you dare spit it out in my presence.}";
writemessages[131] = "{CLASS|bright|You do not have the local currency. Hold on, old thing.}";
writemessages[132] = "{CLASS|bright|Very pretty you look too.}";
writemessages[133] = "{CLASS|bright|I think I shall lock the cage and leave you there for a while.}";
writemessages[134] = "\n{CLASS|bright ink-yellow|&gt;CLIK&lt;}";
writemessages[135] = "{CLASS|bright ink-white|\n'Bye.}";
writemessages[136] = "{CLASS|bright|Hello. You still there?}";
writemessages[137] = "{CLASS|bright|Well, you'd better come out, I suppose.}";
writemessages[138] = "\n{CLASS|bright ink-yellow|&gt;KLIK&lt;}";
writemessages[139] = "{CLASS|center|\n\n\n{CLASS|bright ink-lime|BOOOOOoooooiiiinnnNNGGGG!!!!}}";
writemessages[140] = "east";
writemessages[141] = "out";
writemessages[142] = "{CLASS|bright|The art gallery is cordoned off by the police, having been the scene of a daring robbery.}";
writemessages[143] = "{CLASS|bright|A voice from deep in the cave says &#34;the bottle is for a puzzle you're not supposed to solve the first time&#34;.}";
writemessages[144] = "{CLASS|bright|&#34;Now buzz off, I'm playing Chuckie Egg.&#34;}";
writemessages[145] = "out";
writemessages[146] = "{CLASS|bright|The car is locked now.}";
writemessages[147] = "{CLASS|bright|Try a direction.}";
writemessages[148] = "{CLASS|bright ink-yellow|BUGSY {CLASS|ink-cyan|- ya wanna stay healthy, ya buy it.}}";
writemessages[149] = "{CLASS|bright|The shadowy figure puts its tongue out. How childish!}";
writemessages[150] = "{CLASS|bright ink-cyan|In a puff of stage smoke a Bridge appears on the other side of the chasm. It is Tony Bridge.\n\nHe says: &#34;What you need is the 16 32.&#34;\n\nUnfortunately he is wearing wellies and you cannot see his footnotes.}";
writemessages[151] = "{CLASS|bright|Curtains: that's just scenery.}";
writemessages[152] = "{CLASS|bright|The room description was very misleading - there is nothing behind the curtains.\n\nI'd complain if I were you.}";
writemessages[153] = "{CLASS|bright ink-yellow|MMMMMmmmmmm...}";
writemessages[154] = "{CLASS|bright|Disrespect to a prefect.\nTake one black mark.}";
writemessages[155] = "{CLASS|bright ink-yellow|KRIKKK!}";
writemessages[156] = "\n{CLASS|bright|You will be unable to continue this game. I have been obliged to break your arm.}";
writemessages[157] = "{CLASS|bright|You see a white lace petticoat.}";
writemessages[158] = "{CLASS|bright ink-magenta|You see a fist.}";
writemessages[159] = "{CLASS|bright|You can't see a parsimonious filing-clerk here.}";
writemessages[160] = "{CLASS|bright|You cannot see a green goblin with vermilion spots here.}";
writemessages[161] = "{CLASS|bright|Curtains: that's just scenery.}";
writemessages[162] = "{CLASS|bright|Chainsaw: ignore it.}";
writemessages[163] = "{CLASS|bright|You can't use the word &#34;sophisticated&#34; like that.}";
writemessages[164] = "{CLASS|bright|Troll: ignore it.}";
writemessages[165] = "{CLASS|bright|Behind: dunno what that is.}";
writemessages[166] = "{CLASS|bright ink-yellow|A yellow beam thrusts into the sky, projecting upon the clouds that inimitable call-to-arms, the sign of the bat-like splodge.}";
writemessages[167] = "\n{CLASS|bright ink-yellow|From somewhere below you catch the words: {CLASS|ink-cyan|&#34;This is a job for... BARRROOOOOOMMM!&#34;} (this last being the roar of a mighty engine)}";
writemessages[168] = "{CLASS|bright ink-cyan|&#34;That'll be a dime, Mac. Hey! What's this funny British money?!&#34;}";
writemessages[169] = "{CLASS|bright|Toodloo sinks his cute little fangs into your triceps. The entire literate population of Gotham hits you over the head with her umbrella.}";
writemessages[170] = "{CLASS|bright|With what?}";
writemessages[171] = "{CLASS|bright|The ferocious creature will not let you.}";
writemessages[172] = "{CLASS|bright|It has a slightly metallic taste, but your thirst is quenched.}";
writemessages[173] = "{CLASS|bright|How? {ACTION|lick wall|Lick it where it is}.}";
writemessages[174] = "{CLASS|bright|You can't get the log with your present load.}";
writemessages[175] = "{CLASS|bright|Raaaaazzzzzzzzzzzz!}";
writemessages[176] = "{CLASS|bright|You can't see a parsimonious filing-clerk here.}";
writemessages[177] = "{CLASS|bright|You cannot see a green goblin with vermilion spots here.}";
writemessages[178] = "{CLASS|bright|You can't use the word &#34;sophisticated&#34; like that.}";
writemessages[179] = "{CLASS|bright ink-cyan|&#34;Where is your ticket?&#34;\n\nA neat young librarian wearing round spectacles and a pencil skirt propels you gently out of the door with just the slightest touch of her stiletto heel.}";
writemessages[180] = "{CLASS|bright|Too heavy, man.}";
writemessages[181] = "{CLASS|bright|Too heavy, man.}";
writemessages[182] = "{CLASS|bright|They are too surreal to get.}";
writemessages[183] = "{CLASS|bright|Toodloo sinks his cute little fangs into your triceps. The entire literate population of Gotham hits you over the head with her umbrella.}";
writemessages[184] = "{CLASS|bright ink-yellow|&#34;Oi! Hands off!&#34;}";
writemessages[185] = "{CLASS|bright ink-yellow|&#34;Oi! Hands off!&#34;}";
writemessages[186] = "{CLASS|bright ink-yellow|&#34;Oi! Hands off!&#34;}";
writemessages[187] = "{CLASS|bright ink-yellow|&#34;Oi! Hands off!&#34;}";
writemessages[188] = "{CLASS|bright ink-yellow|&#34;Oi! Hands off!&#34;}";
writemessages[189] = "{CLASS|bright ink-yellow|&#34;Oi! Hands off!&#34;}";
writemessages[190] = "{CLASS|bright ink-yellow|&#34;Oi! Hands off!&#34;}";
writemessages[191] = "{CLASS|bright ink-yellow|&#34;Oi! Hands off!&#34;}";
writemessages[192] = "{CLASS|bright|She is rooted permanently in place.}";
writemessages[193] = "{CLASS|bright|The {ACTION|east|door} swings open.}";
writemessages[194] = "{CLASS|bright|You'll have to go and find it.}";
writemessages[195] = "{CLASS|bright ink-lime|The bird eats the food, turns a sickly shade of green and flies off in the direction of the bog.}";
writemessages[196] = "\n{CLASS|bright ink-lime|KABLOOT!\n\n}";
writemessages[197] = "{CLASS|bright ink-lime|I say, where are you?}";
writemessages[198] = "{CLASS|bright ink-lime|\n{CLASS|bright|And what's that pair of smoking boots doing here?}}";
writemessages[199] = "{CLASS|bright ink-lime|\n{CLASS|bright|Oh well. Better look for a new adventurer.\n\nThat one was too weedy to throw the bomb anyway.}}";
writemessages[200] = "{CLASS|bright|{CLASS|ink-yellow|&#34;No use to me&#34;} says the fence. {CLASS|ink-yellow|&#34;go wave it some place else&#34;}}";
writemessages[201] = "{CLASS|bright|The fence examines it closely and says:}";
writemessages[202] = "{CLASS|bright ink-yellow|&#34;'Course it's only plate. Worn too. I can let you 'ave a thou' on it.&#34;}";
writemessages[203] = "{CLASS|bright|The fence examines it closely and says:}";
writemessages[204] = "{CLASS|bright ink-yellow|&#34;'Ere, 'ow often d'you think I can sell that alien space captain 'is own crystal?&#34;}";
writemessages[205] = "{CLASS|bright|OK... Not sure what you were expecting to happen there, but it didn't work.\n\nYou need to find some keys.}";
writemessages[206] = "{CLASS|bright|The fence examines it closely and says:}";
writemessages[207] = "{CLASS|bright ink-yellow|&#34;'Ere you are. Robbin' meself I am.&#34;}";
writemessages[208] = "{CLASS|bright|The fence examines it closely and says:}";
writemessages[209] = "{CLASS|bright ink-yellow|&#34;'Ard to get rid of these, but since you're a good supplier, I'll do it.&#34;}";
writemessages[210] = "{CLASS|bright|The fence examines it closely and says:}";
writemessages[211] = "{CLASS|bright ink-yellow|&#34;'Ard to get rid of these, but since you're a good supplier, I'll do it.&#34;}";
writemessages[212] = "{CLASS|bright|The fence says: {CLASS|ink-yellow|&#34;Luvly! I know just the suck... er, customer what'll take these.&#34;}}";
writemessages[213] = "{CLASS|bright|The fence examines it closely and says:}";
writemessages[214] = "{CLASS|bright ink-yellow|&#34;'Ard to get rid of these, but since you're a good supplier, I'll do it.&#34;}";
writemessages[215] = "{CLASS|bright ink-yellow|&#34;Hold yer horses mate, one thing at a time.&#34;}";
writemessages[216] = "{CLASS|bright|The fence examines it closely and says:}";
writemessages[217] = "{CLASS|bright ink-yellow|&#34;'Ere you are. Robbin' meself I am.&#34;}";
writemessages[218] = "{CLASS|bright|Behind: dunno what that is.}";
writemessages[219] = "{CLASS|bright|The room description was very misleading - there is nothing behind the curtains.\n\nI'd complain if I were you.}";
writemessages[220] = "RESPONSE_DEFAULT_START";
writemessages[221] = "{CLASS|bright|No cheating.}";
writemessages[222] = "{CLASS|bright|Tape or Ram?}";
writemessages[223] = "{CLASS|bright|Tape or Ram?}";
writemessages[224] = "{CLASS|bright|One minute passes.}";
writemessages[225] = "{CLASS|bright|YNOT?}";
writemessages[226] = "{CLASS|bright|{CLASS|ink-lime|&#34;Funny how everyone ignores me and me chainsaw,&#34;} says the troll.}";
writemessages[227] = "{CLASS|bright|Pooh! I'm off!}";
writemessages[228] = "{CLASS|bright|Disrespect to a prefect.}";
writemessages[229] = "{CLASS|bright|Take one black mark.}";
writemessages[230] = "{CLASS|bright|You hear a fan whir for a moment...}";
writemessages[231] = "{CLASS|bright|The parser rattles as it listens to you...}";
writemessages[232] = "{CLASS|bright|Arfle bargle gloop?}";
writemessages[233] = "{CLASS|bright|Wirt's mirt bud?}";
writemessages[234] = "RESPONSE_DEFAULT_END";
writemessages[235] = "PRO1";
writemessages[236] = "{ACTION|reload|Click here to reload your previous game}";
writemessages[237] = "\n{CLASS|bright|You feel a cool breeze blowing from the {ACTION|north|north}}";
writemessages[238] = "\n{CLASS|bright|{ACTION|light lamp|Turn the lamp on}, doofus}";
writemessages[239] = "\n{CLASS|bright|The songbird chirps with delight and gestures for you to {ACTION|open the can|open the can}}";
writemessages[240] = "\n{CLASS|bright|A newsboy cries {ACTION|buy news|{CLASS|ink-cyan|&#34;Jester escapes! Read all about it!&#34;}}}";
writemessages[241] = "\n{CLASS|bright|A newsboy cries {ACTION|buy news|{CLASS|ink-cyan|&#34;Daring robbery! Read all about it!&#34;}}}";
writemessages[242] = "PRO2";
writemessages[243] = "spend a penny";
writemessages[244] = "wave rod";
writemessages[245] = "open can";
writemessages[246] = "drop food";
writemessages[247] = "open valve";
writemessages[248] = "wait";
writemessages[249] = "fill bottle";
writemessages[250] = "water pellet";
writemessages[251] = "drop log";
writemessages[252] = "drop cage";
writemessages[253] = "drop crystal";
writemessages[254] = "drop silver";
writemessages[255] = "drop table";
writemessages[256] = "drop goblet";
writemessages[257] = "drop pictures";
writemessages[258] = "drop file";
writemessages[259] = "drop tiara";
writemessages[260] = "drop tiara";
writemessages[261] = "{CLASS|bright ink-yellow|The powerful headlights suddenly lance down the tunnel, showing{CLASS|ink-yellow| it to be much longer than you had thought.}}";
writemessages[262] = "{CLASS|bright|The engines roar into life.}";
writemessages[263] = "{CLASS|bright ink-magenta|The mighty machine plunges down the tunnel, devouring mile after incredible mile of die-straight underground freeway.}";
writemessages[264] = "\n\n{CLASS|bright|The bull roars out:\n\n}{CLASS|center bright ink-yellow|&#34;ARE YOU STILL THERE?&#34;}";
writemessages[265] = "{CLASS|bright|(I didn't say it would be fun for you)}";
writemessages[266] = "{CLASS|bright|SPLOOSH! In you go!}";
writemessages[267] = "\n{CLASS|bright ink-lime|KABLOOT!\n\n}";
writemessages[268] = "{CLASS|bright ink-yellow|YOUR SHIP IS DESTLOYED}";
writemessages[269] = "\n\n\n\n\n\n\n\n{CLASS|center|\n\n\n\n{CLASS|bright ink-yellow|PLAY PLAYER 1}}";
writemessages[270] = "\n{CLASS|bright ink-lime|KABLOOT!\n\n}";
writemessages[271] = "{CLASS|bright ink-yellow|YOUR SHIP IS DESTLOYED}";
writemessages[272] = "\n\n\n\n\n\n\n\n{CLASS|center|\n\n\n\n{CLASS|bright ink-yellow|PLAY PLAYER 1}}";
writemessages[273] = "{CLASS|center|\n\n\n\n{CLASS|bright ink-yellow|CONGRATURATIONS!\n}\n{CLASS|bright ink-magenta|YOU HAVE DEFEATED ARIEN INVADERS}\n}";
writemessages[274] = "{CLASS|bright|A spindly balding creature with a neat ginger beard and spectacles emerges from the gloom.\n\nHe throws something which {ACTION|examine wall|lodges in the wall} with a sickening thud, then rushes off cackling wildly.}";
writemessages[275] = "\n\n{CLASS|bright|Here, let me help you up.}";
writemessages[276] = "{CLASS|bright|\n{CLASS|bright|These sedentary desk-jobs! She hardly got you beyond the steps.}}";
writemessages[277] = "\n{CLASS|bright|Thought you might land about here.\n\nLucky thing these nurses wear rubber-soled shoes, what?}";
writemessages[278] = "\n{CLASS|bright|{CLASS|ink-cyan|&#34;No black rod, what?&#34;} chirps the bird. {CLASS|ink-cyan|&#34;I can see you've played this game before.&#34;}}";
writemessages[279] = "\n{CLASS|bright ink-yellow|There. I hope you enjoyed it.}";
writemessages[280] = "\n{CLASS|bright ink-yellow|The troll takes a family-size cornflakes packet from his breast pocket and begins to crunch them.}";
writemessages[281] = "{CLASS|bright|\n{CLASS|bright ink-yellow|The troll drops {ACTION|Read the packet of cornflakes|a cornflakes packet.}}}";
writemessages[282] = "\n{CLASS|bright ink-yellow|The troll starts muttering to himself.}";
writemessages[283] = "{CLASS|bright|The parser clanks irritably before successfully misinterpreting the troll's utterances}";
writemessages[284] = "\n\n{CLASS|bright|Here, let me help you up.}";
writemessages[285] = "{CLASS|bright ink-magenta|Suddenly a shriek of inhuman laughter rends the air and a terrible figure appears. Green hair, chalk-white face and ruby mouth set forever in a demented grin. Howling with malevolent mirth, T<span class='jester' style='opacity: 0.1'>VHE</span>HE J<span class='jester' style='opacity: 0.2'>JESTER&#34;</span>ESTER s<span class='jester' style='opacity: 0.4'>strkpq</span>trips t{CLASS|jester|the}he g{CLASS|jester|galngry&#34;}allery o{CLASS|jester|of&#34;}f i{CLASS|jester|kvs}ts m{CLASS|jester|oosv}ost p{CLASS|jester|rricgless}riceless p{CLASS|jester|pckntings}aintings.}";
writemessages[286] = "\n{CLASS|bright|T<span class='that-man'>Thg&#34;</span>he r<span class='that-man' style='opacity: 0.4'>room</span>oom d<span class='that-man' style='opacity: 0.2'>darkels</span>arkens a<span class='that-man' style='opacity: 0.1'>as</span>s THAT MAN swoops through the skylight. His silken THAT-ROPE snakes toward THE JESTER. But the villain activates his REPELLO FORCE-FIELD, causing the rope to loop back ensnaring its owner.{CLASS|ink-yellow|\n\nTHAT MAN is trapped by his own rope.\nTHE JESTER is escaping.\nIs the worst yet to come?}}";
writemessages[287] = "{CLASS|bright|\n{CLASS|bright|THE JESTER escapes. THAT MAN, untangling himself, sets off in pursuit. You have lost your only chance of returning to the caves.}}";
writemessages[288] = "{CLASS|bright|THAT MAN returns looking much relieved. The return journey begins.}";
writemessages[289] = "\n{CLASS|bright|{CLASS|ink-cyan|&#34;I'm sorry for the delay,&#34;} apologises THAT MAN. {CLASS|ink-cyan|&#34;I was called away on a foolish false alarm.&#34;}}";
writemessages[290] = "{CLASS|bright ink-cyan|What bat-time do you call this?}";
writemessages[291] = "{CLASS|bright|The return journey begins.}";
writemessages[292] = "{CLASS|bright|You hear the impatient honking of a bat-horn in the distance}";
writemessages[293] = "{CLASS|bright|{CLASS|ink-yellow|&#34;One moment,&#34;} says THAT MAN. {CLASS|ink-yellow|&#34;I just have to visit THAT PLACE before our journey.&#34;}\n\nThe caped figure disappears into a small brick building.}";
writemessages[294] = "{CLASS|bright|Amid a chaos of alarms and sirens you attempt to leave the building with the loot. Suddenly the room darkens as a grim bat-like figure swoops in through the skylight.\n\nAt first you think it is a bird - or perhaps a plane - but as the handcuffs close over your wrists you realise it is none other than...}";
writemessages[295] = "{CLASS|bright|A klaxon wails when you grab the loot. A security guard looks up at the batless skylight, then shrugs and continues reading his book.}";
writemessages[296] = "{CLASS|bright|A siren goes off as you grab the loot, but there is no caped crusader to be seen.\n\n{CLASS|ink-cyan|&#34;Well, this is awkward&#34;} the jeweller says. {CLASS|ink-cyan|&#34;Would you mind leaving?&#34;}}";
writemessages[297] = "\n\n{CLASS|bright|Here, let me help you up.}";
writemessages[298] = "{CLASS|bright|A pretty bank-clerkette comes up to you and examines your wallet. {CLASS|ink-cyan|&#34;No accounts opened with less than $25O,OOO,&#34;} she says.}";
writemessages[299] = "{CLASS|bright|Overloaded by the excessive and indigestible verbal input, the SOPHISTICATED PARSER overheats and explodes, vaporising the troll and the art critic.}";
writemessages[300] = "{CLASS|bright|Well, not that small. I notice you are out of breath and perspiring freely so I hope you will not fuss when I tell you that this hill plays no particular part in the adventure and I have no idea why it's here\n\nContrary to the laws of geography, going {ACTION|north|north} will take you back to the road.\n\n\nDon't say I never tell you anything.}";
writemessages[301] = "{CLASS|bright|You are in a dark place. High above you hover several rows of brightly-coloured alien craft.\n\nAs you watch, you realise that they are also moving slowly but inexorably... DOWN TOWARD YOU.\n\nYou can move {ACTION|left|LEFT}, {ACTION|right|RIGHT} or {ACTION|fire|FIRE}}";
writemessages[302] = "{CLASS|bright|{CLASS|bright ink-yellow|Part 2 is still being adapted for the web - please bookmark this page and check back in a few months.}}\n";
writemessages[303] = "\n\n{CLASS|bright|Size ten, I'd guess.}";
writemessages[304] = "\n\n{CLASS|bright|Here, let me help you up.}";
writemessages[305] = "{CLASS|bright|A waiter approaches.\n\n{CLASS|ink-cyan|&#34;Pardon my mentioning it,&#34;} he remarks, {CLASS|ink-cyan|&#34;but Sir's clothes appear more suitable for potholing than for dining. Perhaps Sir would care to return after a change of attire.&#34;}}";
writemessages[306] = "\n\n{CLASS|bright|Well, your clothes are rather grubby.\n\nI don't think the boot-mark makes any noticeable difference.}";

// LOCATION MESSAGES

total_location_messages=65;

locations = [];

locations[0] = "";
locations[1] = "{CLASS|bright|You are standing at the end of a road, west of {ACTION|east|a small brick building}. {ACTION|west|Forest} lies all about you. A small stream flows out of the building and {ACTION|south|south} down the gully.}";
locations[2] = "{CLASS|bright|You are in a gully in the {ACTION|west|forest}. It is rather wet underfoot.}";
locations[3] = "{CLASS|bright|You are in the wellie-house for {ACTION|enter spring|a large spring}. At the centre stands the spring itself. Also - if nobody has filched them - a pair of wellies.\nThere is {ACTION|examine fence|a little fence} beside the spring. The door is west.}";
locations[4] = "{CLASS|bright|All the water of the stream gurgles down a two-inch slit in the rock. {ACTION|South|Southward} the stream bed continues dry. {ACTION|west|West} is a bog.}";
locations[5] = "{CLASS|bright|You have climbed a small hill.}";
locations[6] = "{CLASS|bright|You are wandering about in the forest when you ought to be getting on with the game.}";
locations[7] = "{CLASS|bright|You are in a deep depression. However, you snap out of it and notice a strong steel grate set firmly in concrete underfoot.}";
locations[8] = "{CLASS|bright|You are in a small chamber beneath a three-by-three steel grate. A low crawl over rough, hard cobbles leads {ACTION|west|west into the darkness}.}";
locations[9] = "{CLASS|bright|You are {ACTION|west|crawling over cobbles}, muttering something I shall not try too hard to hear. There is a dim light in the {ACTION|east|east}.}";
locations[10] = "{CLASS|bright|You are in the Debris Room. It is filled with bits and pieces washed in from the surface and has not been tidied in years. It looks a lot like your bedroom.\n\n{ACTION|east|The low crawl} becomes plugged with mud here but {ACTION|west|an awkward passage} leads west.\n\nThere is {ACTION|examine wall|a very rude word on the wall}.}";
locations[11] = "{CLASS|bright|You are in a low room.}";
locations[12] = "{CLASS|bright|You are at the west end of the Hall. To your {ACTION|west|west} is a deep chasm, too wide to jump. The mist is quite thick here.}";
locations[13] = "{CLASS|bright ink-yellow|You are sliding down the rope.\n\nIf you continue {ACTION|down|down} you will arrive in part 2.}";
locations[14] = "{CLASS|center bright ink-yellow|PLEASE SAVE YOUR POSITION NOW}";
locations[15] = "{CLASS|center bright|THE SECRET HIDING PLACE}";
locations[16] = "{CLASS|bright|You are in the Habitat Cave. It is distinguished by sackcloth curtains and square pieces of furniture in unvarnished pine made by &#34;carpenters&#34; who would not know a lathe if they were hit over the head with it.\n\nThese and other items of like nature, hideous as they look in the town houses of people who ought to know better, seem strangely appropriate in a cave.\n\nObjectively, this cave is not large, but the cold bleakness of its furnishings gives it a sense of endlessness.\n\nExits, thankfully, are {ACTION|north|north}, {ACTION|east|east} and {ACTION|west|west}.}";
locations[17] = "{CLASS|bright|You are in the Twee Chamber. The wallpaper is a Laura Ashley pattern of pink flowers on blue, the hangings are the same, only blue on pink.\n\nAfter the barren wastes of the Habitat Cave this room seems almost a relief. But it is a dead end and leads only {ACTION|south|back to Habitat}.}";
locations[18] = "{CLASS|bright|As you enter this room, the first thing to appal your eyes is the highly polished black glass floor. The second is the {ACTION|examine sideboard|stainless steel sideboard}. This is the 193Os Avant-Garde Room. As you stand, numbly gazing, you realise that all the so-called &#34;innovations&#34; of post-196O decor had not only been done in the 193Os but had actually been done worse. Stainless steel archways lead {ACTION|east|east} and {ACTION|west|west}.}";
locations[19] = "{CLASS|bright|As you enter this room, the door slides ominously shut behind you.}";
locations[20] = "{CLASS|bright|You are in an empty chamber. {ACTION|west|The door to your west} is now open.\n\nOn the floor you see:\n\n{ACTION|Examine characters|{CLASS|paper-white|{CLASS|ink-blue|A }{CLASS|ink-lime|brightly-}{CLASS|ink-red|coloured }{CLASS|ink-magenta|pile }{CLASS|ink-blue|of }{CLASS|ink-red|user-}{CLASS|ink-magenta|defined }{CLASS|ink-lime|characters\n}}}}";
locations[21] = "{CLASS|bright|You are in an awkward, sloping {ACTION|east|E}/{ACTION|west|W} canyon.}";
locations[22] = "{CLASS|bright|You are in a splendid chamber thirty feet high. The {ACTION|examine wall|walls} are frozen rivers of orange sorbet. In the centre stands a {ACTION|examine pillar|pillar} adorned with ornate letters, and here the marble flags are somewhat worn. {ACTION|east|An awkward passage} and {ACTION|west|a good canyon} exit to east and west.}";
locations[23] = "{CLASS|bright|At your feet is a pit breathing traces of white mist. The passage west ends here but for {ACTION|west|an old crack}. {ACTION|down|Rough stone steps} lead down.}";
locations[24] = "{CLASS|bright ink-cyan|You are inside the crack. You are walking down a street. Someone says &#34;Who was that lady I saw you with last night?&#34;\nYou reply...\n\nI told you it was an old crack.}";
locations[25] = "{CLASS|bright|You are at one end of a vast hall. To the {ACTION|west|west} it stretches out of sight. Passages are on {ACTION|south|either} {ACTION|east|side}. {ACTION|down|A wide stone staircase} leads down to the north. Wisps of white mist curl across the room like living things.}";
locations[26] = "{CLASS|bright|You are in the Hall of the Mountain King. Passages lead {ACTION|north|off} {ACTION|south-east|in all} {ACTION|west|directions}.}";
locations[27] = "{CLASS|bright|You are in a {ACTION|north|N}/{ACTION|south|S} passage. {ACTION|examine hole|A hole in the floor} has been repaired and cemented over.}";
locations[28] = "{CLASS|bright|You are in a large room. Passages lead {ACTION|south|south} and {ACTION|west|west}. A dirty crack is east. There is a large '{ACTION|Y2|Y2}' on a rock in the room's centre.\n\nA hollow voice says {ACTION|PLUG|'PLUG'}.}";
locations[29] = "{CLASS|bright|You are at a low window overlooking a deep pit. It extends up out of sight and down at least 5Oft to where the ground can be seen covered with traces of white mist. Markings in the dust on the window sill show that someone has recently been here. Across the pit from you is a similar window looking into a lighted room. A shadowy figure can be seen there, {ACTION|wave|watching your every move}.}";
locations[30] = "{CLASS|center bright ink-black paper-white|\n\n\n\n\n\n\n\n\nCENSORED\n\n\n\n\n\n\n\n\n\n}";
locations[31] = "{CLASS|bright|You are in a large cavern. The air is still chokingly dusty from a recent rock-fall. {ACTION|climb|A pile of rubble} leads up. Passages run {ACTION|south|south} and {ACTION|west|west}.}";
locations[32] = "{CLASS|bright|You are in a high dark passage. Somewhere in the blackness above you hear occasional squeals and the rustle of leathery wings.}";
locations[33] = "{CLASS|bright|You have entered a vast spacious cavern. Dozens of bats wheel overhead. This is the Bat Cave. On one wall is {ACTION|examine coin|a coin of massive proportions}. On another, {ACTION|examine dinosaur|a stuffed dinosaur}.\n\nFrom a low cavern in the south glint what would seem to be the {ACTION|south|two red eyes} of some monstrous creature.}";
locations[34] = "{CLASS|bright|You are travelling {ACTION|west|west} past {ACTION|east|the fissure} in the Hall of Mists.}";
locations[35] = "{CLASS|bright|You are at the west end of the Hall of Mists. A wide passage leads off {ACTION|west|west}. Other exits lead {ACTION|north-east|north and east}.}";
locations[36] = "{CLASS|bright|You are at the west end of a passage. The floor ahead has collapsed, making further progress impossible.}";
locations[37] = "{CLASS|bright|You are at the east end of a hall. The floor ahead has collapsed, making further progress impossible. However, the rubble from the massive rock-fall slopes downward, allowing {ACTION|downward|a precarious descent} to the level below. {ACTION|north|A hole in the rock}, six feet up, runs north.}";
locations[38] = "{CLASS|bright|You are in a small low cavern. You now see that the two red glints came from the tail lights of {ACTION|enter|a powerful, low-slung automobile}. It is jet black with a bat-like mask on the front and a sort of fin along the back resembling a bat's wing.}";
locations[39] = "{CLASS|bright|You are seated in the driver's seat. The car looks ready to roll except that there is only a blank rock face ahead.}";
locations[40] = "{CLASS|bright|The rock face slides silently aside to reveal a long, narrow tunnel.}";
locations[41] = "{CLASS|bright|You are in the heart of Gotham City, near to the concealed ramp from which you emerged.\nRoads {ACTION|north|lead} {ACTION|south|in} {ACTION|east|all} {ACTION|west|directions}.}";
locations[42] = "{CLASS|bright|You are outside {ACTION|enter|{CLASS|ink-yellow|Le Chat Noir}}, a restaurant patronised by the rich and famous.\nRoads lead {ACTION|north|north}, {ACTION|south|south} and {ACTION|west|west}}";
locations[43] = "{CLASS|bright|You are inside {CLASS|ink-yellow|Le Chat Noir}. At one table sit a party from St. Br*d*'s, squirting champagne and throwing rolls.\n\nElsewhere dine the board of directors of Oc**n S*ftw*r*. They are wearing black shirts and white ties. From the cases placed neatly at their feet, it would appear that many of them play the violin.}";
locations[44] = "{CLASS|bright|You are in the Brand New Sophisticated Parser Cave. One wall is covered by {ACTION|examine the curtains covering the wall|crimson silk curtains} which look suspiciously as if {ACTION|look behind the crimson|something is concealed behind them}.}";
locations[45] = "{CLASS|bright|You are in the Swear Box.\nIt is a bare room with neither windows nor doors.\nIn one corner is a washstand and a cake of soap.\nYou know what to do.}";
locations[46] = "{CLASS|bright|You are outside {ACTION|Enter|the Gotham Art Gallery}.\nRoads run {ACTION|north|north} and {ACTION|east|east}.}";
locations[47] = "{CLASS|bright|You are outside {ACTION|Enter|a jeweller's shop}.\nRoads lead {ACTION|north|north}, {ACTION|east|east} and {ACTION|west|west}}";
locations[48] = "{CLASS|bright|You are outside {ACTION|Enter|Gotham Museum}. Roads lead {ACTION|north|north}, {ACTION|south|south} and {ACTION|east|east}}";
locations[49] = "{CLASS|bright|You are on the steps of {ACTION|Enter|Gotham Library}.\nRoads lead {ACTION|south|south}, {ACTION|east|east} and {ACTION|west|west}}";
locations[50] = "{CLASS|bright|You are outside {ACTION|Enter|Gotham City Bank}. Roads lead {ACTION|south|south} and {ACTION|west|west}.}";
locations[51] = "{CLASS|bright|It is full of {ACTION|read book|flattish oblong things with paper inside}. The entire literate population of Gotham City is here. She has {ACTION|get the dog|a small Pekingese dog} under her arm, called Toodloo.\n\nA corridor runs {ACTION|west|west}.}";
locations[52] = "{CLASS|bright|You are in the Art Gallery.\nIt is featuring a special international exhibition of modern art. You are astounded to see that only three people are present.\n{ACTION|Examine the pictures|Large, striking paintings} line the walls.}";
locations[53] = "{CLASS|bright|You are in the study area.}";
locations[54] = "{CLASS|bright|You are inside Gotham Museum.}";
locations[55] = "{CLASS|bright|You are inside the jeweller's. Approximately every forty-seven seconds a gentleman in a black shirt with a white tie arrives with a slinky lady draped over his arm and buys her some trinket whose enormous price is matched only by its colossal tastelessness.}";
locations[56] = "{CLASS|bright|You are in the bank. Approximately every thirty seconds a gentleman in a black shirt with a white tie enters to deposit some outrageous sum of money.}";
locations[57] = "{CLASS|bright|You are outside {ACTION|Enter|Gotham Infirmary}. Approximately every ninety seconds a man wearing a black shirt with a white tie is carried in on a stretcher, riddled with bullets. {ACTION|Examine bubbles|Used speech bubbles} litter the floor. Roads lead {ACTION|north|north} and {ACTION|west|west}.}";
locations[58] = "{CLASS|bright|You are in the foyer of the infirmary. A brisk, athletic young nurse asks you your business.}";
locations[59] = "{CLASS|bright|You are outside {ACTION|Enter|Gotham Police Headquarters}.\nRoads lead {ACTION|south|south} and {ACTION|east|east}. {ACTION|north|A little alleyway} leads north.}";
locations[60] = "{CLASS|bright|You are inside the station house. In one corner, distinguished, white-haired Commissioner Gormless offers a few encouraging words to a rookie cop. From a desk at the back of the room the words &#34;Book 'im, Sam&#34; ring out with monotonous regularity approximately every thirty seconds as a new gentleman in a black shirt with a white tie is brought in.\n\nThe station sergeant approaches you. {CLASS|ink-cyan|&#34;You got some business here, Mac?&#34;} he enquires.}";
locations[61] = "{CLASS|bright|You are in a back alley behind the station house. {ACTION|examine wall|The station wall} is tall and black, punctuated only by a series of dismal barred windows. Approximately every forty-seven seconds a gentleman in a black shirt with a white tie arrives, looks furtively around him and drops a file or a revolver through the bars of one of the windows. Occasionally a slinky lady in a tight skirt breaks the monotony by doing the same thing.}";
locations[62] = "{CLASS|bright|You are on the roof of the station. A panoramic view of Gotham stretches out before you and the teeming multitudes below exemplify every field of human endeavour: protection, numbers running, bootlegging, blackmail, extortion...\n\nBut why go on? All human life is here. The man who is tired of Gotham is tired of the rackets.}";
locations[63] = "{CLASS|center|\n{CLASS|bright ink-yellow|WELCOME TO ADVENTURE\n\n}}{CLASS|bright ink-yellow|Hi. I'm Trixie, spelunk me.\n\nWhat I mean is, I've done Caves before, so I've got the job of showing new adventurers around.\n\nI'm a prefect. So you'll have to behave yourself.\n\nLet's have a look at you.\nHealthy enough, I suppose.\nDo with a bit more exercise.\nStill, you'll soon get that.\nAlright, you'll do.\n\nLet's get going.}";
locations[64] = "(extra message added so the newlines below aren't included in the message above)\n\n\n\n\n\n";

// CONNECTIONS

var connections_start = [
/*  0*/{},
/*  1*/{1:15,2:2,4:5},
/*  2*/{1:1,4:6},
/*  3*/{},
/*  4*/{1:2,2:7},
/*  5*/{1:1,2:6,4:6},
/*  6*/{1:5,2:6,3:2,4:6},
/*  7*/{1:4},
/*  8*/{4:9},
/*  9*/{3:8,4:10},
/* 10*/{3:9,4:21,9:21},
/* 11*/{1:25},
/* 12*/{3:25},
/* 13*/{9:22,10:14},
/* 14*/{},
/* 15*/{2:1},
/* 16*/{1:17,3:26,4:18},
/* 17*/{2:16},
/* 18*/{3:16,4:36},
/* 19*/{},
/* 20*/{4:25},
/* 21*/{3:10,4:22},
/* 22*/{3:21,4:23},
/* 23*/{3:22,4:24,10:25},
/* 24*/{3:23,48:23},
/* 25*/{1:26,2:11,3:19,4:12,9:23,10:26},
/* 26*/{2:25,3:25,9:25},
/* 27*/{1:28,2:26},
/* 28*/{2:27,4:29},
/* 29*/{3:28},
/* 30*/{1:30,2:30,3:30,4:28},
/* 31*/{2:32,4:44,9:37},
/* 32*/{1:31,2:33},
/* 33*/{1:32,2:38},
/* 34*/{3:12,4:35},
/* 35*/{1:34,3:34,4:37},
/* 36*/{3:18},
/* 37*/{1:35,3:35,10:31},
/* 38*/{1:33},
/* 39*/{9:38,48:38},
/* 40*/{},
/* 41*/{1:49,2:47,3:42,4:48},
/* 42*/{1:50,2:57,4:41,48:43},
/* 43*/{},
/* 44*/{3:31},
/* 45*/{},
/* 46*/{1:48,3:47},
/* 47*/{1:41,3:57,4:46,48:55},
/* 48*/{1:59,2:46,3:41,48:54},
/* 49*/{2:41,3:50,4:59,48:51},
/* 50*/{2:42,4:49,48:56},
/* 51*/{4:53,48:49},
/* 52*/{48:46},
/* 53*/{3:51},
/* 54*/{48:48},
/* 55*/{48:47},
/* 56*/{},
/* 57*/{1:42,4:47,48:58},
/* 58*/{},
/* 59*/{1:61,2:48,3:49,48:60},
/* 60*/{},
/* 61*/{2:59},
/* 62*/{10:61},
/* 63*/{},
/* 64*/{}
];
var connections = $.extend( true, connections_start, [] );

resources=[];
resources.push([RESOURCE_TYPE_IMG, 1, "dat/location1.svg"]);
resources.push([RESOURCE_TYPE_IMG, 10, "dat/location10.svg"]);
resources.push([RESOURCE_TYPE_IMG, 11, "dat/location11.svg"]);
resources.push([RESOURCE_TYPE_IMG, 12, "dat/location12.svg"]);
resources.push([RESOURCE_TYPE_IMG, 15, "dat/location15.svg"]);
resources.push([RESOURCE_TYPE_IMG, 16, "dat/location16.svg"]);
resources.push([RESOURCE_TYPE_IMG, 17, "dat/location17.svg"]);
resources.push([RESOURCE_TYPE_IMG, 18, "dat/location18.svg"]);
resources.push([RESOURCE_TYPE_IMG, 19, "dat/location19.svg"]);
resources.push([RESOURCE_TYPE_IMG, 2, "dat/location2.svg"]);
resources.push([RESOURCE_TYPE_IMG, 20, "dat/location20.svg"]);
resources.push([RESOURCE_TYPE_IMG, 21, "dat/location21.svg"]);
resources.push([RESOURCE_TYPE_IMG, 22, "dat/location22.svg"]);
resources.push([RESOURCE_TYPE_IMG, 23, "dat/location23.svg"]);
resources.push([RESOURCE_TYPE_IMG, 25, "dat/location25.svg"]);
resources.push([RESOURCE_TYPE_IMG, 26, "dat/location26.svg"]);
resources.push([RESOURCE_TYPE_IMG, 27, "dat/location27.svg"]);
resources.push([RESOURCE_TYPE_IMG, 28, "dat/location28.svg"]);
resources.push([RESOURCE_TYPE_IMG, 29, "dat/location29.svg"]);
resources.push([RESOURCE_TYPE_IMG, 3, "dat/location3.svg"]);
resources.push([RESOURCE_TYPE_IMG, 31, "dat/location31.svg"]);
resources.push([RESOURCE_TYPE_IMG, 32, "dat/location32.svg"]);
resources.push([RESOURCE_TYPE_IMG, 33, "dat/location33.svg"]);
resources.push([RESOURCE_TYPE_IMG, 34, "dat/location34.svg"]);
resources.push([RESOURCE_TYPE_IMG, 35, "dat/location35.svg"]);
resources.push([RESOURCE_TYPE_IMG, 36, "dat/location36.svg"]);
resources.push([RESOURCE_TYPE_IMG, 37, "dat/location37.svg"]);
resources.push([RESOURCE_TYPE_IMG, 38, "dat/location38.svg"]);
resources.push([RESOURCE_TYPE_IMG, 39, "dat/location39.svg"]);
resources.push([RESOURCE_TYPE_IMG, 4, "dat/location4.svg"]);
resources.push([RESOURCE_TYPE_IMG, 40, "dat/location40.svg"]);
resources.push([RESOURCE_TYPE_IMG, 41, "dat/location41.svg"]);
resources.push([RESOURCE_TYPE_IMG, 42, "dat/location42.svg"]);
resources.push([RESOURCE_TYPE_IMG, 43, "dat/location43.svg"]);
resources.push([RESOURCE_TYPE_IMG, 44, "dat/location44.svg"]);
resources.push([RESOURCE_TYPE_IMG, 45, "dat/location45.svg"]);
resources.push([RESOURCE_TYPE_IMG, 46, "dat/location46.svg"]);
resources.push([RESOURCE_TYPE_IMG, 47, "dat/location47.svg"]);
resources.push([RESOURCE_TYPE_IMG, 48, "dat/location48.svg"]);
resources.push([RESOURCE_TYPE_IMG, 49, "dat/location49.svg"]);
resources.push([RESOURCE_TYPE_IMG, 5, "dat/location5.svg"]);
resources.push([RESOURCE_TYPE_IMG, 50, "dat/location50.svg"]);
resources.push([RESOURCE_TYPE_IMG, 51, "dat/location51.svg"]);
resources.push([RESOURCE_TYPE_IMG, 52, "dat/location52.svg"]);
resources.push([RESOURCE_TYPE_IMG, 53, "dat/location53.svg"]);
resources.push([RESOURCE_TYPE_IMG, 54, "dat/location54.svg"]);
resources.push([RESOURCE_TYPE_IMG, 55, "dat/location55.svg"]);
resources.push([RESOURCE_TYPE_IMG, 56, "dat/location56.svg"]);
resources.push([RESOURCE_TYPE_IMG, 57, "dat/location57.svg"]);
resources.push([RESOURCE_TYPE_IMG, 58, "dat/location58.svg"]);
resources.push([RESOURCE_TYPE_IMG, 59, "dat/location59.svg"]);
resources.push([RESOURCE_TYPE_IMG, 6, "dat/location6.svg"]);
resources.push([RESOURCE_TYPE_IMG, 60, "dat/location60.svg"]);
resources.push([RESOURCE_TYPE_IMG, 61, "dat/location61.svg"]);
resources.push([RESOURCE_TYPE_IMG, 62, "dat/location62.svg"]);
resources.push([RESOURCE_TYPE_IMG, 7, "dat/location7.svg"]);
resources.push([RESOURCE_TYPE_IMG, 8, "dat/location8.svg"]);
resources.push([RESOURCE_TYPE_IMG, 9, "dat/location9.svg"]);


 //OBJECTS

objects = [];
objectsAttrLO = [];
objectsAttrHI = [];
objectsLocation = [];
objectsNoun = [];
objectsAdjective = [];
objectsWeight = [];
objectsAttrLO_start = [];
objectsAttrHI_start = [];
objectsLocation_start = [];
objectsWeight_start = [];

objects[0] = "{CLASS|bright ink-black|{CLASS|paper-yellow| A LIT LAMP }}";
objectsNoun[0] = 255;
objectsAdjective[0] = 255;
objectsLocation[0] = 252;
objectsLocation_start[0] = 252;
objectsWeight[0] = 0;
objectsWeight_start[0] = 0;
objectsAttrLO[0] = 1;
objectsAttrLO_start[0] = 1;
objectsAttrHI[0] = 0;
objectsAttrHI_start[0] = 0;

objects[1] = "{CLASS|bright ink-yellow|A rampaging bull guarding the gully}";
objectsNoun[1] = 255;
objectsAdjective[1] = 255;
objectsLocation[1] = 2;
objectsLocation_start[1] = 2;
objectsWeight[1] = 1;
objectsWeight_start[1] = 1;
objectsAttrLO[1] = 0;
objectsAttrLO_start[1] = 0;
objectsAttrHI[1] = 0;
objectsAttrHI_start[1] = 0;

objects[2] = "{CLASS|bright ink-yellow|One penny (old style)}";
objectsNoun[2] = 16;
objectsAdjective[2] = 255;
objectsLocation[2] = 2;
objectsLocation_start[2] = 2;
objectsWeight[2] = 1;
objectsWeight_start[2] = 1;
objectsAttrLO[2] = 0;
objectsAttrLO_start[2] = 0;
objectsAttrHI[2] = 0;
objectsAttrHI_start[2] = 0;

objects[3] = "{CLASS|bright ink-yellow|A bunch of keys}#{CLASS|bright|They are of the kind which lock and unlock things.}";
objectsNoun[3] = 19;
objectsAdjective[3] = 255;
objectsLocation[3] = 15;
objectsLocation_start[3] = 15;
objectsWeight[3] = 1;
objectsWeight_start[3] = 1;
objectsAttrLO[3] = 0;
objectsAttrLO_start[3] = 0;
objectsAttrHI[3] = 0;
objectsAttrHI_start[3] = 0;

objects[4] = "{CLASS|bright ink-yellow|A shiny brass lamp}";
objectsNoun[4] = 20;
objectsAdjective[4] = 255;
objectsLocation[4] = 15;
objectsLocation_start[4] = 15;
objectsWeight[4] = 0;
objectsWeight_start[4] = 0;
objectsAttrLO[4] = 0;
objectsAttrLO_start[4] = 0;
objectsAttrHI[4] = 0;
objectsAttrHI_start[4] = 0;

objects[5] = "{CLASS|bright ink-yellow|Some tasty food}#{CLASS|bright|I wouldn't. It's a school dinner.}";
objectsNoun[5] = 21;
objectsAdjective[5] = 255;
objectsLocation[5] = 15;
objectsLocation_start[5] = 15;
objectsWeight[5] = 1;
objectsWeight_start[5] = 1;
objectsAttrLO[5] = 0;
objectsAttrLO_start[5] = 0;
objectsAttrHI[5] = 0;
objectsAttrHI_start[5] = 0;

objects[6] = "{CLASS|bright ink-lime|A bottle}#{CLASS|bright|Green. Originally one of a set of ten.}";
objectsNoun[6] = 18;
objectsAdjective[6] = 255;
objectsLocation[6] = 15;
objectsLocation_start[6] = 15;
objectsWeight[6] = 1;
objectsWeight_start[6] = 1;
objectsAttrLO[6] = 0;
objectsAttrLO_start[6] = 0;
objectsAttrHI[6] = 0;
objectsAttrHI_start[6] = 0;

objects[7] = "{CLASS|bright ink-yellow|A pair of wellies}#{CLASS|bright|Pong.}";
objectsNoun[7] = 201;
objectsAdjective[7] = 255;
objectsLocation[7] = 3;
objectsLocation_start[7] = 3;
objectsWeight[7] = 1;
objectsWeight_start[7] = 1;
objectsAttrLO[7] = 2;
objectsAttrLO_start[7] = 2;
objectsAttrHI[7] = 0;
objectsAttrHI_start[7] = 0;

objects[8] = "{CLASS|bright ink-yellow|A bomb}#{CLASS|bright|Round and black with &#34;BOMB&#34; written on it.}";
objectsNoun[8] = 24;
objectsAdjective[8] = 255;
objectsLocation[8] = 3;
objectsLocation_start[8] = 3;
objectsWeight[8] = 1;
objectsWeight_start[8] = 1;
objectsAttrLO[8] = 0;
objectsAttrLO_start[8] = 0;
objectsAttrHI[8] = 0;
objectsAttrHI_start[8] = 0;

objects[9] = "{CLASS|bright ink-yellow|A rampaging bull with the distinct air of a bull who does not mean to be caught out a second time}";
objectsNoun[9] = 255;
objectsAdjective[9] = 255;
objectsLocation[9] = 252;
objectsLocation_start[9] = 252;
objectsWeight[9] = 1;
objectsWeight_start[9] = 1;
objectsAttrLO[9] = 0;
objectsAttrLO_start[9] = 0;
objectsAttrHI[9] = 0;
objectsAttrHI_start[9] = 0;

objects[10] = "{ACTION|open grate|{CLASS|bright|The grate is locked}}#{CLASS|bright|you can just about see a keyhole buried underneath the rust}";
objectsNoun[10] = 255;
objectsAdjective[10] = 255;
objectsLocation[10] = 7;
objectsLocation_start[10] = 7;
objectsWeight[10] = 1;
objectsWeight_start[10] = 1;
objectsAttrLO[10] = 0;
objectsAttrLO_start[10] = 0;
objectsAttrHI[10] = 0;
objectsAttrHI_start[10] = 0;

objects[11] = "{ACTION|down|{CLASS|bright|The grate is open}}";
objectsNoun[11] = 255;
objectsAdjective[11] = 255;
objectsLocation[11] = 252;
objectsLocation_start[11] = 252;
objectsWeight[11] = 1;
objectsWeight_start[11] = 1;
objectsAttrLO[11] = 0;
objectsAttrLO_start[11] = 0;
objectsAttrHI[11] = 0;
objectsAttrHI_start[11] = 0;

objects[12] = "{ACTION|enter the cage|{CLASS|bright ink-yellow|A gilded cage}}#{CLASS|bright|It looks as if you could enter it.}";
objectsNoun[12] = 29;
objectsAdjective[12] = 255;
objectsLocation[12] = 9;
objectsLocation_start[12] = 9;
objectsWeight[12] = 1;
objectsWeight_start[12] = 1;
objectsAttrLO[12] = 0;
objectsAttrLO_start[12] = 0;
objectsAttrHI[12] = 0;
objectsAttrHI_start[12] = 0;

objects[13] = "{CLASS|bright ink-magenta|A black rod with a rusty star on the end}";
objectsNoun[13] = 30;
objectsAdjective[13] = 255;
objectsLocation[13] = 10;
objectsLocation_start[13] = 10;
objectsWeight[13] = 1;
objectsWeight_start[13] = 1;
objectsAttrLO[13] = 0;
objectsAttrLO_start[13] = 0;
objectsAttrHI[13] = 0;
objectsAttrHI_start[13] = 0;

objects[14] = "{CLASS|bright ink-yellow|A cheerful little songbird}";
objectsNoun[14] = 255;
objectsAdjective[14] = 255;
objectsLocation[14] = 22;
objectsLocation_start[14] = 22;
objectsWeight[14] = 1;
objectsWeight_start[14] = 1;
objectsAttrLO[14] = 0;
objectsAttrLO_start[14] = 0;
objectsAttrHI[14] = 0;
objectsAttrHI_start[14] = 0;

objects[15] = "{CLASS|bright white|A Venusian Moon-Crystal}#{CLASS|bright|It is a very well-made crystal. A fine example of the crystal-makers art.}";
objectsNoun[15] = 38;
objectsAdjective[15] = 255;
objectsLocation[15] = 252;
objectsLocation_start[15] = 252;
objectsWeight[15] = 1;
objectsWeight_start[15] = 1;
objectsAttrLO[15] = 0;
objectsAttrLO_start[15] = 0;
objectsAttrHI[15] = 0;
objectsAttrHI_start[15] = 0;

objects[16] = "{CLASS|bright ink-yellow|A sharpened ZX81}";
objectsNoun[16] = 41;
objectsAdjective[16] = 255;
objectsLocation[16] = 252;
objectsLocation_start[16] = 252;
objectsWeight[16] = 1;
objectsWeight_start[16] = 1;
objectsAttrLO[16] = 0;
objectsAttrLO_start[16] = 0;
objectsAttrHI[16] = 0;
objectsAttrHI_start[16] = 0;

objects[17] = "{CLASS|bright ink-yellow|A hefty log}#{CLASS|bright|Taller than you. Stronger too.}";
objectsNoun[17] = 43;
objectsAdjective[17] = 255;
objectsLocation[17] = 3;
objectsLocation_start[17] = 3;
objectsWeight[17] = 5;
objectsWeight_start[17] = 5;
objectsAttrLO[17] = 0;
objectsAttrLO_start[17] = 0;
objectsAttrHI[17] = 0;
objectsAttrHI_start[17] = 0;

objects[18] = "\n{CLASS|bright|The log forms a bridge over the chasm}";
objectsNoun[18] = 255;
objectsAdjective[18] = 255;
objectsLocation[18] = 252;
objectsLocation_start[18] = 252;
objectsWeight[18] = 5;
objectsWeight_start[18] = 5;
objectsAttrLO[18] = 0;
objectsAttrLO_start[18] = 0;
objectsAttrHI[18] = 0;
objectsAttrHI_start[18] = 0;

objects[19] = "{CLASS|bright|Bars of silver}";
objectsNoun[19] = 52;
objectsAdjective[19] = 255;
objectsLocation[19] = 27;
objectsLocation_start[19] = 27;
objectsWeight[19] = 1;
objectsWeight_start[19] = 1;
objectsAttrLO[19] = 0;
objectsAttrLO_start[19] = 0;
objectsAttrHI[19] = 0;
objectsAttrHI_start[19] = 0;

objects[20] = "{CLASS|bright ink-lime|A python}";
objectsNoun[20] = 255;
objectsAdjective[20] = 255;
objectsLocation[20] = 26;
objectsLocation_start[20] = 26;
objectsWeight[20] = 1;
objectsWeight_start[20] = 1;
objectsAttrLO[20] = 0;
objectsAttrLO_start[20] = 0;
objectsAttrHI[20] = 0;
objectsAttrHI_start[20] = 0;

objects[21] = "{CLASS|bright ink-yellow|A can marked &#34;CHEERS&#34;}#{CLASS|bright|Filmed before a live studio audience}";
objectsNoun[21] = 53;
objectsAdjective[21] = 255;
objectsLocation[21] = 11;
objectsLocation_start[21] = 11;
objectsWeight[21] = 1;
objectsWeight_start[21] = 1;
objectsAttrLO[21] = 0;
objectsAttrLO_start[21] = 0;
objectsAttrHI[21] = 0;
objectsAttrHI_start[21] = 0;

objects[22] = "{CLASS|bright ink-yellow|A little Chippendale table}";
objectsNoun[22] = 55;
objectsAdjective[22] = 255;
objectsLocation[22] = 17;
objectsLocation_start[22] = 17;
objectsWeight[22] = 1;
objectsWeight_start[22] = 1;
objectsAttrLO[22] = 0;
objectsAttrLO_start[22] = 0;
objectsAttrHI[22] = 0;
objectsAttrHI_start[22] = 0;

objects[23] = "{CLASS|bright ink-red|{CLASS|paper-white|A key painted bright red}}";
objectsNoun[23] = 58;
objectsAdjective[23] = 255;
objectsLocation[23] = 252;
objectsLocation_start[23] = 252;
objectsWeight[23] = 1;
objectsWeight_start[23] = 1;
objectsAttrLO[23] = 0;
objectsAttrLO_start[23] = 0;
objectsAttrHI[23] = 0;
objectsAttrHI_start[23] = 0;

objects[24] = "{CLASS|bright|(This is not only a fresh example of bad taste but also a BROAD HINT)}";
objectsNoun[24] = 255;
objectsAdjective[24] = 255;
objectsLocation[24] = 252;
objectsLocation_start[24] = 252;
objectsWeight[24] = 1;
objectsWeight_start[24] = 1;
objectsAttrLO[24] = 0;
objectsAttrLO_start[24] = 0;
objectsAttrHI[24] = 0;
objectsAttrHI_start[24] = 0;

objects[25] = "{ACTION|descend|{CLASS|bright ink-cyan|A thick silken cord fixed inside the pillar box and descending through a hole in its floor into deep impenetrable darkness}}";
objectsNoun[25] = 255;
objectsAdjective[25] = 255;
objectsLocation[25] = 252;
objectsLocation_start[25] = 252;
objectsWeight[25] = 1;
objectsWeight_start[25] = 1;
objectsAttrLO[25] = 0;
objectsAttrLO_start[25] = 0;
objectsAttrHI[25] = 0;
objectsAttrHI_start[25] = 0;

objects[26] = "{CLASS|bright|THAT MAN has left without you, taking away your only chance to return to the caves.}";
objectsNoun[26] = 255;
objectsAdjective[26] = 255;
objectsLocation[26] = 252;
objectsLocation_start[26] = 252;
objectsWeight[26] = 1;
objectsWeight_start[26] = 1;
objectsAttrLO[26] = 0;
objectsAttrLO_start[26] = 0;
objectsAttrHI[26] = 0;
objectsAttrHI_start[26] = 0;

objects[27] = "{ACTION|PUSH THE BUTTON!|{CLASS|bright ink-red|{CLASS|paper-white|A red button}}}";
objectsNoun[27] = 255;
objectsAdjective[27] = 255;
objectsLocation[27] = 39;
objectsLocation_start[27] = 39;
objectsWeight[27] = 1;
objectsWeight_start[27] = 1;
objectsAttrLO[27] = 0;
objectsAttrLO_start[27] = 0;
objectsAttrHI[27] = 0;
objectsAttrHI_start[27] = 0;

objects[28] = "{ACTION|Inspect the troll|{CLASS|bright ink-lime|A twelve-foot slavering troll}}{ACTION|Observe the chainsaw|{CLASS|bright ink-lime| brandishing a chainsaw}}";
objectsNoun[28] = 255;
objectsAdjective[28] = 255;
objectsLocation[28] = 44;
objectsLocation_start[28] = 44;
objectsWeight[28] = 1;
objectsWeight_start[28] = 1;
objectsAttrLO[28] = 0;
objectsAttrLO_start[28] = 0;
objectsAttrHI[28] = 0;
objectsAttrHI_start[28] = 0;

objects[29] = "{ACTION|Get the goblet|{CLASS|bright ink-yellow|A jewel-encrusted goblet}}";
objectsNoun[29] = 255;
objectsAdjective[29] = 255;
objectsLocation[29] = 44;
objectsLocation_start[29] = 44;
objectsWeight[29] = 1;
objectsWeight_start[29] = 1;
objectsAttrLO[29] = 0;
objectsAttrLO_start[29] = 0;
objectsAttrHI[29] = 0;
objectsAttrHI_start[29] = 0;

objects[30] = "{ACTION|Read the packet of cornflakes|{CLASS|bright|A cornflakes packet}}";
objectsNoun[30] = 79;
objectsAdjective[30] = 255;
objectsLocation[30] = 252;
objectsLocation_start[30] = 252;
objectsWeight[30] = 1;
objectsWeight_start[30] = 1;
objectsAttrLO[30] = 0;
objectsAttrLO_start[30] = 0;
objectsAttrHI[30] = 0;
objectsAttrHI_start[30] = 0;

objects[31] = "\n{ACTION|examine the sophisticated parser|{CLASS|bright ink-yellow|A Sophisticated Parser - only given away in family-size packs}}#{CLASS|bright|The machine hums away to itself, effortlessly misinterpreting every word it hears}";
objectsNoun[31] = 255;
objectsAdjective[31] = 255;
objectsLocation[31] = 252;
objectsLocation_start[31] = 252;
objectsWeight[31] = 1;
objectsWeight_start[31] = 1;
objectsAttrLO[31] = 0;
objectsAttrLO_start[31] = 0;
objectsAttrHI[31] = 0;
objectsAttrHI_start[31] = 0;

objects[32] = "{CLASS|bright ink-yellow|A magnificent emerald tiara}";
objectsNoun[32] = 220;
objectsAdjective[32] = 255;
objectsLocation[32] = 55;
objectsLocation_start[32] = 55;
objectsWeight[32] = 1;
objectsWeight_start[32] = 1;
objectsAttrLO[32] = 2;
objectsAttrLO_start[32] = 2;
objectsAttrHI[32] = 0;
objectsAttrHI_start[32] = 0;

objects[33] = "A gas canister";
objectsNoun[33] = 88;
objectsAdjective[33] = 255;
objectsLocation[33] = 252;
objectsLocation_start[33] = 252;
objectsWeight[33] = 1;
objectsWeight_start[33] = 1;
objectsAttrLO[33] = 0;
objectsAttrLO_start[33] = 0;
objectsAttrHI[33] = 0;
objectsAttrHI_start[33] = 0;

objects[34] = "{ACTION|Climb ladder|An iron ladder bolted to the wall}";
objectsNoun[34] = 255;
objectsAdjective[34] = 255;
objectsLocation[34] = 252;
objectsLocation_start[34] = 252;
objectsWeight[34] = 1;
objectsWeight_start[34] = 1;
objectsAttrLO[34] = 0;
objectsAttrLO_start[34] = 0;
objectsAttrHI[34] = 0;
objectsAttrHI_start[34] = 0;

objects[35] = "{ACTION|examine searchlight|{CLASS|bright ink-yellow|A curious searchlight}}#{CLASS|bright|A bat-like splodge is painted on the glass. At the back is {ACTION|switch switch|a switch}.}";
objectsNoun[35] = 255;
objectsAdjective[35] = 255;
objectsLocation[35] = 62;
objectsLocation_start[35] = 62;
objectsWeight[35] = 1;
objectsWeight_start[35] = 1;
objectsAttrLO[35] = 0;
objectsAttrLO_start[35] = 0;
objectsAttrHI[35] = 0;
objectsAttrHI_start[35] = 0;

objects[36] = "{ACTION|examine desks|{CLASS|bright|Rows of desks}}";
objectsNoun[36] = 255;
objectsAdjective[36] = 255;
objectsLocation[36] = 53;
objectsLocation_start[36] = 53;
objectsWeight[36] = 1;
objectsWeight_start[36] = 1;
objectsAttrLO[36] = 0;
objectsAttrLO_start[36] = 0;
objectsAttrHI[36] = 0;
objectsAttrHI_start[36] = 0;

objects[37] = "{CLASS|bright ink-yellow|A Byzantian gold enamelled nail file}";
objectsNoun[37] = 97;
objectsAdjective[37] = 255;
objectsLocation[37] = 54;
objectsLocation_start[37] = 54;
objectsWeight[37] = 1;
objectsWeight_start[37] = 1;
objectsAttrLO[37] = 0;
objectsAttrLO_start[37] = 0;
objectsAttrHI[37] = 0;
objectsAttrHI_start[37] = 0;

objects[38] = "{CLASS|bright|Three worth... er, priceless paintings}#{CLASS|bright|You examine the pictures.\nYou are astounded that as many as three people are present.}";
objectsNoun[38] = 82;
objectsAdjective[38] = 255;
objectsLocation[38] = 252;
objectsLocation_start[38] = 252;
objectsWeight[38] = 0;
objectsWeight_start[38] = 0;
objectsAttrLO[38] = 0;
objectsAttrLO_start[38] = 0;
objectsAttrHI[38] = 0;
objectsAttrHI_start[38] = 0;

objects[39] = "{ACTION|Examine bat|{CLASS|bright|A black paper bat}}";
objectsNoun[39] = 89;
objectsAdjective[39] = 255;
objectsLocation[39] = 252;
objectsLocation_start[39] = 252;
objectsWeight[39] = 1;
objectsWeight_start[39] = 1;
objectsAttrLO[39] = 0;
objectsAttrLO_start[39] = 0;
objectsAttrHI[39] = 0;
objectsAttrHI_start[39] = 0;

objects[40] = "{CLASS|bright ink-yellow|A utility belt}";
objectsNoun[40] = 221;
objectsAdjective[40] = 255;
objectsLocation[40] = 252;
objectsLocation_start[40] = 252;
objectsWeight[40] = 1;
objectsWeight_start[40] = 1;
objectsAttrLO[40] = 2;
objectsAttrLO_start[40] = 2;
objectsAttrHI[40] = 0;
objectsAttrHI_start[40] = 0;

objects[41] = "{ACTION|Examine box|{CLASS|bright ink-cyan|A very small cardboard box}}";
objectsNoun[41] = 98;
objectsAdjective[41] = 255;
objectsLocation[41] = 252;
objectsLocation_start[41] = 252;
objectsWeight[41] = 1;
objectsWeight_start[41] = 1;
objectsAttrLO[41] = 0;
objectsAttrLO_start[41] = 0;
objectsAttrHI[41] = 0;
objectsAttrHI_start[41] = 0;

objects[42] = "{CLASS|ink-white|A grey pellet}#{CLASS|bright|The dehydrated seed of an art critic}";
objectsNoun[42] = 112;
objectsAdjective[42] = 255;
objectsLocation[42] = 252;
objectsLocation_start[42] = 252;
objectsWeight[42] = 1;
objectsWeight_start[42] = 1;
objectsAttrLO[42] = 0;
objectsAttrLO_start[42] = 0;
objectsAttrHI[42] = 0;
objectsAttrHI_start[42] = 0;

objects[43] = "{CLASS|bright|An angular art-critiquette emitting a stream of polysyllables}";
objectsNoun[43] = 160;
objectsAdjective[43] = 255;
objectsLocation[43] = 252;
objectsLocation_start[43] = 252;
objectsWeight[43] = 1;
objectsWeight_start[43] = 1;
objectsAttrLO[43] = 0;
objectsAttrLO_start[43] = 0;
objectsAttrHI[43] = 0;
objectsAttrHI_start[43] = 0;

objects[44] = "{CLASS|bright|A group of hippies}#{CLASS|bright|They are valuable treasures, both on account of their great antiquity and as consummate examples of the taxidermist's art}";
objectsNoun[44] = 255;
objectsAdjective[44] = 255;
objectsLocation[44] = 54;
objectsLocation_start[44] = 54;
objectsWeight[44] = 1;
objectsWeight_start[44] = 1;
objectsAttrLO[44] = 0;
objectsAttrLO_start[44] = 0;
objectsAttrHI[44] = 0;
objectsAttrHI_start[44] = 0;

objects[45] = "{CLASS|bright ink-lime|A bottle of water}#{CLASS|bright|Green. Originally one of a set of ten.}";
objectsNoun[45] = 18;
objectsAdjective[45] = 255;
objectsLocation[45] = 252;
objectsLocation_start[45] = 252;
objectsWeight[45] = 1;
objectsWeight_start[45] = 1;
objectsAttrLO[45] = 0;
objectsAttrLO_start[45] = 0;
objectsAttrHI[45] = 0;
objectsAttrHI_start[45] = 0;

objects[46] = "(extra message added so the newlines below aren't included in the message above)\n\n\n\n\n\n";
objectsNoun[46] = 0;
objectsAdjective[46] = 0;
objectsLocation[46] = 0;
objectsLocation_start[46] = 0;
objectsWeight[46] = 0;
objectsWeight_start[46] = 0;
objectsAttrLO[46] = 0;
objectsAttrLO_start[46] = 0;
objectsAttrHI[46] = 0;
objectsAttrHI_start[46] = 0;

last_object_number =  46; 
carried_objects = 0;
total_object_messages=47;

