// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
goog.require('goog.string');
cljs.reader.PushbackReader = (function (){var obj18791 = {};return obj18791;
})();
cljs.reader.read_char = (function read_char(reader){if((function (){var and__3626__auto__ = reader;if(and__3626__auto__)
{return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else
{return and__3626__auto__;
}
})())
{return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else
{var x__4275__auto__ = (((reader == null))?null:reader);return (function (){var or__3638__auto__ = (cljs.reader.read_char[goog.typeOf(x__4275__auto__)]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (cljs.reader.read_char["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){if((function (){var and__3626__auto__ = reader;if(and__3626__auto__)
{return reader.cljs$reader$PushbackReader$unread$arity$2;
} else
{return and__3626__auto__;
}
})())
{return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else
{var x__4275__auto__ = (((reader == null))?null:reader);return (function (){var or__3638__auto__ = (cljs.reader.unread[goog.typeOf(x__4275__auto__)]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (cljs.reader.unread["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});

/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,buffer,idx){
this.s = s;
this.buffer = buffer;
this.idx = idx;
})
cljs.reader.StringPushbackReader.cljs$lang$type = true;
cljs.reader.StringPushbackReader.cljs$lang$ctorStr = "cljs.reader/StringPushbackReader";
cljs.reader.StringPushbackReader.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.reader/StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;if((self__.buffer.length === (0)))
{self__.idx = (self__.idx + (1));
return (self__.s[self__.idx]);
} else
{return self__.buffer.pop();
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){var self__ = this;
var reader__$1 = this;return self__.buffer.push(ch);
});
cljs.reader.__GT_StringPushbackReader = (function __GT_StringPushbackReader(s,buffer,idx){return (new cljs.reader.StringPushbackReader(s,buffer,idx));
});
cljs.reader.push_back_reader = (function push_back_reader(s){return (new cljs.reader.StringPushbackReader(s,[],(-1)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){var or__3638__auto__ = goog.string.isBreakingWhitespace(ch);if(cljs.core.truth_(or__3638__auto__))
{return or__3638__auto__;
} else
{return ("," === ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){return goog.string.isNumeric(ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){return (";" === ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){return (cljs.reader.numeric_QMARK_.call(null,initch)) || (((("+" === initch)) || (("-" === initch))) && (cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch = cljs.reader.read_char.call(null,reader);cljs.reader.unread.call(null,reader,next_ch);
return next_ch;
})())));
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){throw (new Error(cljs.core.apply.call(null,cljs.core.str,msg)));
};
var reader_error = function (rdr,var_args){
var msg = null;if (arguments.length > 1) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return reader_error__delegate.call(this,rdr,msg);};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__18792){
var rdr = cljs.core.first(arglist__18792);
var msg = cljs.core.rest(arglist__18792);
return reader_error__delegate(rdr,msg);
});
reader_error.cljs$core$IFn$_invoke$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){var and__3626__auto__ = !((ch === "#"));if(and__3626__auto__)
{var and__3626__auto____$1 = !((ch === "'"));if(and__3626__auto____$1)
{var and__3626__auto____$2 = !((ch === ":"));if(and__3626__auto____$2)
{return cljs.reader.macros.call(null,ch);
} else
{return and__3626__auto____$2;
}
} else
{return and__3626__auto____$1;
}
} else
{return and__3626__auto__;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){var sb = (new goog.string.StringBuffer(initch));var ch = cljs.reader.read_char.call(null,rdr);while(true){
if(((ch == null)) || (cljs.reader.whitespace_QMARK_.call(null,ch)) || (cljs.reader.macro_terminating_QMARK_.call(null,ch)))
{cljs.reader.unread.call(null,rdr,ch);
return sb.toString();
} else
{{
var G__18793 = (function (){sb.append(ch);
return sb;
})();
var G__18794 = cljs.reader.read_char.call(null,rdr);
sb = G__18793;
ch = G__18794;
continue;
}
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){while(true){
var ch = cljs.reader.read_char.call(null,reader);if(((ch === "\n")) || ((ch === "\r")) || ((ch == null)))
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern.call(null,"^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+))(N)?$");
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null,"^([-+]?[0-9]+)/([0-9]+)$");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null,"^([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?$");
cljs.reader.symbol_pattern = cljs.core.re_pattern.call(null,"^[:]?([^0-9/].*/)?([^0-9/][^/]*)$");
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){var matches = re.exec(s);if((!((matches == null))) && (((matches[(0)]) === s)))
{if((matches.length === (1)))
{return (matches[(0)]);
} else
{return matches;
}
} else
{return null;
}
});
cljs.reader.match_int = (function match_int(s){var groups = cljs.reader.re_matches_STAR_.call(null,cljs.reader.int_pattern,s);var ie8_fix = (groups[(2)]);var zero = ((cljs.core._EQ_.call(null,ie8_fix,""))?null:ie8_fix);if(!((zero == null)))
{return (0);
} else
{var a = (cljs.core.truth_((groups[(3)]))?[(groups[(3)]),(10)]:(cljs.core.truth_((groups[(4)]))?[(groups[(4)]),(16)]:(cljs.core.truth_((groups[(5)]))?[(groups[(5)]),(8)]:(cljs.core.truth_((groups[(6)]))?[(groups[(7)]),parseInt((groups[(6)]),(10))]:[null,null]
))));var n = (a[(0)]);var radix = (a[(1)]);if((n == null))
{return null;
} else
{var parsed = parseInt(n,radix);if(("-" === (groups[(1)])))
{return (- parsed);
} else
{return parsed;
}
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){var groups = cljs.reader.re_matches_STAR_.call(null,cljs.reader.ratio_pattern,s);var numinator = (groups[(1)]);var denominator = (groups[(2)]);return (parseInt(numinator,(10)) / parseInt(denominator,(10)));
});
cljs.reader.match_float = (function match_float(s){return parseFloat(s);
});
cljs.reader.match_number = (function match_number(s){if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.int_pattern,s)))
{return cljs.reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.float_pattern,s)))
{return cljs.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = (function escape_char_map(c){if((c === "t"))
{return "\t";
} else
{if((c === "r"))
{return "\r";
} else
{if((c === "n"))
{return "\n";
} else
{if((c === "\\"))
{return "\\";
} else
{if((c === "\""))
{return "\"";
} else
{if((c === "b"))
{return "\b";
} else
{if((c === "f"))
{return "\f";
} else
{return null;

}
}
}
}
}
}
}
});
cljs.reader.read_2_chars = (function read_2_chars(reader){return (new goog.string.StringBuffer(cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader))).toString();
});
cljs.reader.read_4_chars = (function read_4_chars(reader){return (new goog.string.StringBuffer(cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader))).toString();
});
cljs.reader.unicode_2_pattern = cljs.core.re_pattern.call(null,"^[0-9A-Fa-f]{2}$");
cljs.reader.unicode_4_pattern = cljs.core.re_pattern.call(null,"^[0-9A-Fa-f]{4}$");
cljs.reader.validate_unicode_escape = (function validate_unicode_escape(unicode_pattern,reader,escape_char,unicode_str){if(cljs.core.truth_(cljs.core.re_matches.call(null,unicode_pattern,unicode_str)))
{return unicode_str;
} else
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",escape_char,unicode_str);
}
});
cljs.reader.make_unicode_char = (function make_unicode_char(code_str){var code = parseInt(code_str,(16));return String.fromCharCode(code);
});
cljs.reader.escape_char = (function escape_char(buffer,reader){var ch = cljs.reader.read_char.call(null,reader);var mapresult = cljs.reader.escape_char_map.call(null,ch);if(cljs.core.truth_(mapresult))
{return mapresult;
} else
{if((ch === "x"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_2_pattern,reader,ch,cljs.reader.read_2_chars.call(null,reader)));
} else
{if((ch === "u"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_4_pattern,reader,ch,cljs.reader.read_4_chars.call(null,reader)));
} else
{if(cljs.reader.numeric_QMARK_.call(null,ch))
{return String.fromCharCode(ch);
} else
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch);

}
}
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){var ch = cljs.reader.read_char.call(null,rdr);while(true){
if(cljs.core.truth_(pred.call(null,ch)))
{{
var G__18795 = cljs.reader.read_char.call(null,rdr);
ch = G__18795;
continue;
}
} else
{return ch;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){var a = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);while(true){
var ch = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);if(cljs.core.truth_(ch))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF while reading");
}
if((delim === ch))
{return cljs.core.persistent_BANG_.call(null,a);
} else
{var temp__4124__auto__ = cljs.reader.macros.call(null,ch);if(cljs.core.truth_(temp__4124__auto__))
{var macrofn = temp__4124__auto__;var mret = macrofn.call(null,rdr,ch);{
var G__18796 = (((mret === rdr))?a:cljs.core.conj_BANG_.call(null,a,mret));
a = G__18796;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch);
var o = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);{
var G__18797 = (((o === rdr))?a:cljs.core.conj_BANG_.call(null,a,o));
a = G__18797;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){return cljs.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){var ch = cljs.reader.read_char.call(null,rdr);var dm = cljs.reader.dispatch_macros.call(null,ch);if(cljs.core.truth_(dm))
{return dm.call(null,rdr,_);
} else
{var temp__4124__auto__ = cljs.reader.maybe_read_tagged_type.call(null,rdr,ch);if(cljs.core.truth_(temp__4124__auto__))
{var obj = temp__4124__auto__;return obj;
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch);
}
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){return cljs.reader.reader_error.call(null,rdr,"Unmached delimiter ",ch);
});
cljs.reader.read_list = (function read_list(rdr,_){return cljs.core.apply.call(null,cljs.core.list,cljs.reader.read_delimited_list.call(null,")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){return cljs.reader.read_delimited_list.call(null,"]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){var l = cljs.reader.read_delimited_list.call(null,"}",rdr,true);if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l)))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l);
});
cljs.reader.read_number = (function read_number(reader,initch){var buffer = (new goog.string.StringBuffer(initch));var ch = cljs.reader.read_char.call(null,reader);while(true){
if(cljs.core.truth_((function (){var or__3638__auto__ = (ch == null);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = cljs.reader.whitespace_QMARK_.call(null,ch);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{return cljs.reader.macros.call(null,ch);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch);
var s = buffer.toString();var or__3638__auto__ = cljs.reader.match_number.call(null,s);if(cljs.core.truth_(or__3638__auto__))
{return or__3638__auto__;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s,"]");
}
} else
{{
var G__18798 = (function (){buffer.append(ch);
return buffer;
})();
var G__18799 = cljs.reader.read_char.call(null,reader);
buffer = G__18798;
ch = G__18799;
continue;
}
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){var buffer = (new goog.string.StringBuffer());var ch = cljs.reader.read_char.call(null,reader);while(true){
if((ch == null))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else
{if(("\\" === ch))
{{
var G__18800 = (function (){buffer.append(cljs.reader.escape_char.call(null,buffer,reader));
return buffer;
})();
var G__18801 = cljs.reader.read_char.call(null,reader);
buffer = G__18800;
ch = G__18801;
continue;
}
} else
{if(("\"" === ch))
{return buffer.toString();
} else
{{
var G__18802 = (function (){buffer.append(ch);
return buffer;
})();
var G__18803 = cljs.reader.read_char.call(null,reader);
buffer = G__18802;
ch = G__18803;
continue;
}

}
}
}
break;
}
});
cljs.reader.read_raw_string_STAR_ = (function read_raw_string_STAR_(reader,_){var buffer = (new goog.string.StringBuffer());var ch = cljs.reader.read_char.call(null,reader);while(true){
if((ch == null))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else
{if(("\\" === ch))
{buffer.append(ch);
var nch = cljs.reader.read_char.call(null,reader);if((nch == null))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else
{{
var G__18808 = (function (){var G__18806 = buffer;G__18806.append(nch);
return G__18806;
})();
var G__18809 = cljs.reader.read_char.call(null,reader);
buffer = G__18808;
ch = G__18809;
continue;
}
}
} else
{if(("\"" === ch))
{return buffer.toString();
} else
{{
var G__18810 = (function (){var G__18807 = buffer;G__18807.append(ch);
return G__18807;
})();
var G__18811 = cljs.reader.read_char.call(null,reader);
buffer = G__18810;
ch = G__18811;
continue;
}

}
}
}
break;
}
});
cljs.reader.special_symbols = (function special_symbols(t,not_found){if((t === "nil"))
{return null;
} else
{if((t === "true"))
{return true;
} else
{if((t === "false"))
{return false;
} else
{return not_found;

}
}
}
});
cljs.reader.read_symbol = (function read_symbol(reader,initch){var token = cljs.reader.read_token.call(null,reader,initch);if(cljs.core.truth_(goog.string.contains(token,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token,(0),token.indexOf("/")),cljs.core.subs.call(null,token,(token.indexOf("/") + (1)),token.length));
} else
{return cljs.reader.special_symbols.call(null,token,cljs.core.symbol.call(null,token));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){var token = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));var a = cljs.reader.re_matches_STAR_.call(null,cljs.reader.symbol_pattern,token);var token__$1 = (a[(0)]);var ns = (a[(1)]);var name = (a[(2)]);if(((!((void 0 === ns))) && ((ns.substring((ns.length - (2)),ns.length) === ":/"))) || (((name[(name.length - (1))]) === ":")) || (!((token__$1.indexOf("::",(1)) === (-1)))))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__$1);
} else
{if((!((ns == null))) && ((ns.length > (0))))
{return cljs.core.keyword.call(null,ns.substring((0),ns.indexOf("/")),name);
} else
{return cljs.core.keyword.call(null,token__$1);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){if((f instanceof cljs.core.Symbol))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else
{if(typeof f === 'string')
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else
{if((f instanceof cljs.core.Keyword))
{return new cljs.core.PersistentArrayMap.fromArray([f,true], true, false);
} else
{return f;

}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){return (function (rdr,_){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.reader.read.call(null,rdr,true,null,true)),sym);
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){return (function (rdr,_){return cljs.reader.reader_error.call(null,rdr,msg);
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){var m = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));if(cljs.core.map_QMARK_.call(null,m))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o = cljs.reader.read.call(null,rdr,true,null,true);if((function (){var G__18813 = o;if(G__18813)
{var bit__4302__auto__ = (G__18813.cljs$lang$protocol_mask$partition0$ & (262144));if((bit__4302__auto__) || (G__18813.cljs$core$IWithMeta$))
{return true;
} else
{if((!G__18813.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,G__18813);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,G__18813);
}
})())
{return cljs.core.with_meta.call(null,o,cljs.core.merge.call(null,cljs.core.meta.call(null,o),m));
} else
{return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.reader.read_set = (function read_set(rdr,_){return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){return cljs.core.re_pattern.call(null,cljs.reader.read_raw_string_STAR_.call(null,rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){cljs.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.reader.macros = (function macros(c){if((c === "\""))
{return cljs.reader.read_string_STAR_;
} else
{if((c === ":"))
{return cljs.reader.read_keyword;
} else
{if((c === ";"))
{return cljs.reader.read_comment;
} else
{if((c === "'"))
{return cljs.reader.wrapping_reader.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null));
} else
{if((c === "@"))
{return cljs.reader.wrapping_reader.call(null,new cljs.core.Symbol(null,"deref","deref",1494944732,null));
} else
{if((c === "^"))
{return cljs.reader.read_meta;
} else
{if((c === "`"))
{return cljs.reader.not_implemented;
} else
{if((c === "~"))
{return cljs.reader.not_implemented;
} else
{if((c === "("))
{return cljs.reader.read_list;
} else
{if((c === ")"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "["))
{return cljs.reader.read_vector;
} else
{if((c === "]"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "{"))
{return cljs.reader.read_map;
} else
{if((c === "}"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "\\"))
{return cljs.reader.read_char;
} else
{if((c === "#"))
{return cljs.reader.read_dispatch;
} else
{return null;

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
cljs.reader.dispatch_macros = (function dispatch_macros(s){if((s === "{"))
{return cljs.reader.read_set;
} else
{if((s === "<"))
{return cljs.reader.throwing_reader.call(null,"Unreadable form");
} else
{if((s === "\""))
{return cljs.reader.read_regex;
} else
{if((s === "!"))
{return cljs.reader.read_comment;
} else
{if((s === "_"))
{return cljs.reader.read_discard;
} else
{return null;

}
}
}
}
}
});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){while(true){
var ch = cljs.reader.read_char.call(null,reader);if((ch == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else
{return sentinel;
}
} else
{if(cljs.reader.whitespace_QMARK_.call(null,ch))
{{
var G__18814 = reader;
var G__18815 = eof_is_error;
var G__18816 = sentinel;
var G__18817 = is_recursive;
reader = G__18814;
eof_is_error = G__18815;
sentinel = G__18816;
is_recursive = G__18817;
continue;
}
} else
{if(cljs.reader.comment_prefix_QMARK_.call(null,ch))
{{
var G__18818 = cljs.reader.read_comment.call(null,reader,ch);
var G__18819 = eof_is_error;
var G__18820 = sentinel;
var G__18821 = is_recursive;
reader = G__18818;
eof_is_error = G__18819;
sentinel = G__18820;
is_recursive = G__18821;
continue;
}
} else
{var f = cljs.reader.macros.call(null,ch);var res = (cljs.core.truth_(f)?f.call(null,reader,ch):((cljs.reader.number_literal_QMARK_.call(null,reader,ch))?cljs.reader.read_number.call(null,reader,ch):cljs.reader.read_symbol.call(null,reader,ch)
));if((res === reader))
{{
var G__18822 = reader;
var G__18823 = eof_is_error;
var G__18824 = sentinel;
var G__18825 = is_recursive;
reader = G__18822;
eof_is_error = G__18823;
sentinel = G__18824;
is_recursive = G__18825;
continue;
}
} else
{return res;
}

}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){var r = cljs.reader.push_back_reader.call(null,s);return cljs.reader.read.call(null,r,false,null,false);
});
cljs.reader.zero_fill_right_and_truncate = (function zero_fill_right_and_truncate(s,width){if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s)))
{return s;
} else
{if((width < cljs.core.count.call(null,s)))
{return cljs.core.subs.call(null,s,(0),width);
} else
{var b = (new goog.string.StringBuffer(s));while(true){
if((b.getLength() < width))
{{
var G__18826 = b.append("0");
b = G__18826;
continue;
}
} else
{return b.toString();
}
break;
}

}
}
});
cljs.reader.divisible_QMARK_ = (function divisible_QMARK_(num,div){return (cljs.core.mod.call(null,num,div) === (0));
});
cljs.reader.indivisible_QMARK_ = (function indivisible_QMARK_(num,div){return !(cljs.reader.divisible_QMARK_.call(null,num,div));
});
cljs.reader.leap_year_QMARK_ = (function leap_year_QMARK_(year){return (cljs.reader.divisible_QMARK_.call(null,year,(4))) && ((cljs.reader.indivisible_QMARK_.call(null,year,(100))) || (cljs.reader.divisible_QMARK_.call(null,year,(400))));
});
cljs.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(29),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);return ((function (dim_norm,dim_leap){
return (function (month,leap_year_QMARK_){return cljs.core.get.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
;})(dim_norm,dim_leap))
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function parse_int(s){var n = parseInt(s,(10));if(cljs.core.not.call(null,isNaN(n)))
{return n;
} else
{return null;
}
});
cljs.reader.check = (function check(low,n,high,msg){if(((low <= n)) && ((n <= high)))
{} else
{cljs.reader.reader_error.call(null,null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)+" Failed:  "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(low)+"<="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)+"<="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(high)));
}
return n;
});
cljs.reader.parse_and_validate_timestamp = (function parse_and_validate_timestamp(s){var vec__18828 = cljs.core.re_matches.call(null,cljs.reader.timestamp_regex,s);var _ = cljs.core.nth.call(null,vec__18828,(0),null);var years = cljs.core.nth.call(null,vec__18828,(1),null);var months = cljs.core.nth.call(null,vec__18828,(2),null);var days = cljs.core.nth.call(null,vec__18828,(3),null);var hours = cljs.core.nth.call(null,vec__18828,(4),null);var minutes = cljs.core.nth.call(null,vec__18828,(5),null);var seconds = cljs.core.nth.call(null,vec__18828,(6),null);var fraction = cljs.core.nth.call(null,vec__18828,(7),null);var offset_sign = cljs.core.nth.call(null,vec__18828,(8),null);var offset_hours = cljs.core.nth.call(null,vec__18828,(9),null);var offset_minutes = cljs.core.nth.call(null,vec__18828,(10),null);var v = vec__18828;if(cljs.core.not.call(null,v))
{return cljs.reader.reader_error.call(null,null,("Unrecognized date/time syntax: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
} else
{var years__$1 = cljs.reader.parse_int.call(null,years);var months__$1 = (function (){var or__3638__auto__ = cljs.reader.parse_int.call(null,months);if(cljs.core.truth_(or__3638__auto__))
{return or__3638__auto__;
} else
{return (1);
}
})();var days__$1 = (function (){var or__3638__auto__ = cljs.reader.parse_int.call(null,days);if(cljs.core.truth_(or__3638__auto__))
{return or__3638__auto__;
} else
{return (1);
}
})();var hours__$1 = (function (){var or__3638__auto__ = cljs.reader.parse_int.call(null,hours);if(cljs.core.truth_(or__3638__auto__))
{return or__3638__auto__;
} else
{return (0);
}
})();var minutes__$1 = (function (){var or__3638__auto__ = cljs.reader.parse_int.call(null,minutes);if(cljs.core.truth_(or__3638__auto__))
{return or__3638__auto__;
} else
{return (0);
}
})();var seconds__$1 = (function (){var or__3638__auto__ = cljs.reader.parse_int.call(null,seconds);if(cljs.core.truth_(or__3638__auto__))
{return or__3638__auto__;
} else
{return (0);
}
})();var fraction__$1 = (function (){var or__3638__auto__ = cljs.reader.parse_int.call(null,cljs.reader.zero_fill_right_and_truncate.call(null,fraction,(3)));if(cljs.core.truth_(or__3638__auto__))
{return or__3638__auto__;
} else
{return (0);
}
})();var offset_sign__$1 = ((cljs.core._EQ_.call(null,offset_sign,"-"))?(-1):(1));var offset_hours__$1 = (function (){var or__3638__auto__ = cljs.reader.parse_int.call(null,offset_hours);if(cljs.core.truth_(or__3638__auto__))
{return or__3638__auto__;
} else
{return (0);
}
})();var offset_minutes__$1 = (function (){var or__3638__auto__ = cljs.reader.parse_int.call(null,offset_minutes);if(cljs.core.truth_(or__3638__auto__))
{return or__3638__auto__;
} else
{return (0);
}
})();var offset = (offset_sign__$1 * ((offset_hours__$1 * (60)) + offset_minutes__$1));return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check.call(null,(1),months__$1,(12),"timestamp month field must be in range 1..12"),cljs.reader.check.call(null,(1),days__$1,cljs.reader.days_in_month.call(null,months__$1,cljs.reader.leap_year_QMARK_.call(null,years__$1)),"timestamp day field must be in range 1..last day in month"),cljs.reader.check.call(null,(0),hours__$1,(23),"timestamp hour field must be in range 0..23"),cljs.reader.check.call(null,(0),minutes__$1,(59),"timestamp minute field must be in range 0..59"),cljs.reader.check.call(null,(0),seconds__$1,((cljs.core._EQ_.call(null,minutes__$1,(59)))?(60):(59)),"timestamp second field must be in range 0..60"),cljs.reader.check.call(null,(0),fraction__$1,(999),"timestamp millisecond field must be in range 0..999"),offset], null);
}
});
cljs.reader.parse_timestamp = (function parse_timestamp(ts){var temp__4124__auto__ = cljs.reader.parse_and_validate_timestamp.call(null,ts);if(cljs.core.truth_(temp__4124__auto__))
{var vec__18830 = temp__4124__auto__;var years = cljs.core.nth.call(null,vec__18830,(0),null);var months = cljs.core.nth.call(null,vec__18830,(1),null);var days = cljs.core.nth.call(null,vec__18830,(2),null);var hours = cljs.core.nth.call(null,vec__18830,(3),null);var minutes = cljs.core.nth.call(null,vec__18830,(4),null);var seconds = cljs.core.nth.call(null,vec__18830,(5),null);var ms = cljs.core.nth.call(null,vec__18830,(6),null);var offset = cljs.core.nth.call(null,vec__18830,(7),null);return (new Date((Date.UTC(years,(months - (1)),days,hours,minutes,seconds,ms) - ((offset * (60)) * (1000)))));
} else
{return cljs.reader.reader_error.call(null,null,("Unrecognized date/time syntax: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)));
}
});
cljs.reader.read_date = (function read_date(s){if(typeof s === 'string')
{return cljs.reader.parse_timestamp.call(null,s);
} else
{return cljs.reader.reader_error.call(null,null,"Instance literal expects a string for its timestamp.");
}
});
cljs.reader.read_queue = (function read_queue(elems){if(cljs.core.vector_QMARK_.call(null,elems))
{return cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,elems);
} else
{return cljs.reader.reader_error.call(null,null,"Queue literal expects a vector for its elements.");
}
});
cljs.reader.read_js = (function read_js(form){if(cljs.core.vector_QMARK_.call(null,form))
{var arr = [];var seq__18843_18855 = cljs.core.seq.call(null,form);var chunk__18844_18856 = null;var count__18845_18857 = (0);var i__18846_18858 = (0);while(true){
if((i__18846_18858 < count__18845_18857))
{var x_18859 = cljs.core._nth.call(null,chunk__18844_18856,i__18846_18858);arr.push(x_18859);
{
var G__18860 = seq__18843_18855;
var G__18861 = chunk__18844_18856;
var G__18862 = count__18845_18857;
var G__18863 = (i__18846_18858 + (1));
seq__18843_18855 = G__18860;
chunk__18844_18856 = G__18861;
count__18845_18857 = G__18862;
i__18846_18858 = G__18863;
continue;
}
} else
{var temp__4126__auto___18864 = cljs.core.seq.call(null,seq__18843_18855);if(temp__4126__auto___18864)
{var seq__18843_18865__$1 = temp__4126__auto___18864;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18843_18865__$1))
{var c__4408__auto___18866 = cljs.core.chunk_first.call(null,seq__18843_18865__$1);{
var G__18867 = cljs.core.chunk_rest.call(null,seq__18843_18865__$1);
var G__18868 = c__4408__auto___18866;
var G__18869 = cljs.core.count.call(null,c__4408__auto___18866);
var G__18870 = (0);
seq__18843_18855 = G__18867;
chunk__18844_18856 = G__18868;
count__18845_18857 = G__18869;
i__18846_18858 = G__18870;
continue;
}
} else
{var x_18871 = cljs.core.first.call(null,seq__18843_18865__$1);arr.push(x_18871);
{
var G__18872 = cljs.core.next.call(null,seq__18843_18865__$1);
var G__18873 = null;
var G__18874 = (0);
var G__18875 = (0);
seq__18843_18855 = G__18872;
chunk__18844_18856 = G__18873;
count__18845_18857 = G__18874;
i__18846_18858 = G__18875;
continue;
}
}
} else
{}
}
break;
}
return arr;
} else
{if(cljs.core.map_QMARK_.call(null,form))
{var obj = (function (){var obj18848 = {};return obj18848;
})();var seq__18849_18876 = cljs.core.seq.call(null,form);var chunk__18850_18877 = null;var count__18851_18878 = (0);var i__18852_18879 = (0);while(true){
if((i__18852_18879 < count__18851_18878))
{var vec__18853_18880 = cljs.core._nth.call(null,chunk__18850_18877,i__18852_18879);var k_18881 = cljs.core.nth.call(null,vec__18853_18880,(0),null);var v_18882 = cljs.core.nth.call(null,vec__18853_18880,(1),null);(obj[cljs.core.name.call(null,k_18881)] = v_18882);
{
var G__18883 = seq__18849_18876;
var G__18884 = chunk__18850_18877;
var G__18885 = count__18851_18878;
var G__18886 = (i__18852_18879 + (1));
seq__18849_18876 = G__18883;
chunk__18850_18877 = G__18884;
count__18851_18878 = G__18885;
i__18852_18879 = G__18886;
continue;
}
} else
{var temp__4126__auto___18887 = cljs.core.seq.call(null,seq__18849_18876);if(temp__4126__auto___18887)
{var seq__18849_18888__$1 = temp__4126__auto___18887;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18849_18888__$1))
{var c__4408__auto___18889 = cljs.core.chunk_first.call(null,seq__18849_18888__$1);{
var G__18890 = cljs.core.chunk_rest.call(null,seq__18849_18888__$1);
var G__18891 = c__4408__auto___18889;
var G__18892 = cljs.core.count.call(null,c__4408__auto___18889);
var G__18893 = (0);
seq__18849_18876 = G__18890;
chunk__18850_18877 = G__18891;
count__18851_18878 = G__18892;
i__18852_18879 = G__18893;
continue;
}
} else
{var vec__18854_18894 = cljs.core.first.call(null,seq__18849_18888__$1);var k_18895 = cljs.core.nth.call(null,vec__18854_18894,(0),null);var v_18896 = cljs.core.nth.call(null,vec__18854_18894,(1),null);(obj[cljs.core.name.call(null,k_18895)] = v_18896);
{
var G__18897 = cljs.core.next.call(null,seq__18849_18888__$1);
var G__18898 = null;
var G__18899 = (0);
var G__18900 = (0);
seq__18849_18876 = G__18897;
chunk__18850_18877 = G__18898;
count__18851_18878 = G__18899;
i__18852_18879 = G__18900;
continue;
}
}
} else
{}
}
break;
}
return obj;
} else
{return cljs.reader.reader_error.call(null,null,("JS literal expects a vector or map containing only string or unqualified keyword keys"));

}
}
});
cljs.reader.read_uuid = (function read_uuid(uuid){if(typeof uuid === 'string')
{return (new cljs.core.UUID(uuid));
} else
{return cljs.reader.reader_error.call(null,null,"UUID literal expects a string as its representation.");
}
});
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, ["inst",cljs.reader.read_date,"uuid",cljs.reader.read_uuid,"queue",cljs.reader.read_queue,"js",cljs.reader.read_js], null));
cljs.reader._STAR_default_data_reader_fn_STAR_ = cljs.core.atom.call(null,null);
cljs.reader.maybe_read_tagged_type = (function maybe_read_tagged_type(rdr,initch){var tag = cljs.reader.read_symbol.call(null,rdr,initch);var pfn = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)));var dfn = cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);if(cljs.core.truth_(pfn))
{return pfn.call(null,cljs.reader.read.call(null,rdr,true,null,false));
} else
{if(cljs.core.truth_(dfn))
{return dfn.call(null,tag,cljs.reader.read.call(null,rdr,true,null,false));
} else
{return cljs.reader.reader_error.call(null,rdr,"Could not find tag parser for ",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag))," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_))));

}
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){var tag__$1 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag));var old_parser = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__$1);cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__$1,f);
return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){var tag__$1 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag));var old_parser = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__$1);cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__$1);
return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function register_default_tag_parser_BANG_(f){var old_parser = cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);cljs.core.swap_BANG_.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){return f;
});})(old_parser))
);
return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function deregister_default_tag_parser_BANG_(){var old_parser = cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);cljs.core.swap_BANG_.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){return null;
});})(old_parser))
);
return old_parser;
});

//# sourceMappingURL=reader.js.map