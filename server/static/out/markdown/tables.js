// Compiled by ClojureScript 1.9.293 {}
goog.provide('markdown.tables');
goog.require('cljs.core');
goog.require('clojure.string');
markdown.tables.parse_table_row = (function markdown$tables$parse_table_row(text){
return cljs.core.map.call(null,(function (p1__44283_SHARP_){
return cljs.core.identity.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),p1__44283_SHARP_], null));
}),cljs.core.map.call(null,clojure.string.trim,(function (p1__44282_SHARP_){
return clojure.string.split.call(null,p1__44282_SHARP_,/\|/);
}).call(null,clojure.string.trim.call(null,(function (p1__44281_SHARP_){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__44281_SHARP_),"|")){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,p1__44281_SHARP_));
} else {
return p1__44281_SHARP_;
}
}).call(null,text)))));
});
markdown.tables.table_row__GT_str = (function markdown$tables$table_row__GT_str(row_data,is_header_QMARK_){
return cljs.core.reduce.call(null,(function (row,col){
var alignment_str = (cljs.core.truth_(new cljs.core.Keyword(null,"alignment","alignment",1040093386).cljs$core$IFn$_invoke$arity$1(col))?[cljs.core.str(" align='"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"alignment","alignment",1040093386).cljs$core$IFn$_invoke$arity$1(col))),cljs.core.str("'")].join(''):null);
if(cljs.core.truth_(is_header_QMARK_)){
return [cljs.core.str(row),cljs.core.str("<th"),cljs.core.str(alignment_str),cljs.core.str(">"),cljs.core.str(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(col)),cljs.core.str("</th>")].join('');
} else {
return [cljs.core.str(row),cljs.core.str("<td"),cljs.core.str(alignment_str),cljs.core.str(">"),cljs.core.str(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(col)),cljs.core.str("</td>")].join('');
}
}),"",row_data);
});
markdown.tables.table__GT_str = (function markdown$tables$table__GT_str(table){
var table_data = cljs.core.map_indexed.call(null,cljs.core.vector,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table));
var alignment_seq = new cljs.core.Keyword(null,"alignment-seq","alignment-seq",1587946543).cljs$core$IFn$_invoke$arity$1(table);
return [cljs.core.str("<table>"),cljs.core.str(cljs.core.reduce.call(null,((function (table_data,alignment_seq){
return (function (table_acc,row){
var row_idx = cljs.core.first.call(null,row);
var row_data = cljs.core.mapv.call(null,cljs.core.merge,cljs.core.second.call(null,row),alignment_seq);
var is_header_QMARK_ = cljs.core._EQ_.call(null,row_idx,(0));
var is_first_row_QMARK_ = cljs.core._EQ_.call(null,row_idx,(1));
var is_last_row_QMARK_ = cljs.core._EQ_.call(null,row_idx,(cljs.core.count.call(null,table_data) - (1)));
return [cljs.core.str(table_acc),cljs.core.str(((is_header_QMARK_)?"<thead>":((is_first_row_QMARK_)?"<tbody>":null))),cljs.core.str("<tr>"),cljs.core.str(markdown.tables.table_row__GT_str.call(null,row_data,is_header_QMARK_)),cljs.core.str("</tr>"),cljs.core.str(((is_header_QMARK_)?"</thead>":((is_last_row_QMARK_)?"</tbody>":null)))].join('');
});})(table_data,alignment_seq))
,"",table_data)),cljs.core.str("</table>")].join('');
});
markdown.tables.divider_seq__GT_alignment = (function markdown$tables$divider_seq__GT_alignment(divider_seq){
return cljs.core.mapv.call(null,(function (divider){
if(cljs.core._EQ_.call(null,cljs.core.re_find.call(null,/^:-+/,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(divider)),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(divider))){
return cljs.core.identity.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alignment","alignment",1040093386),new cljs.core.Keyword(null,"left","left",-399115937)], null));
} else {
if(cljs.core._EQ_.call(null,cljs.core.re_find.call(null,/^-+:/,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(divider)),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(divider))){
return cljs.core.identity.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alignment","alignment",1040093386),new cljs.core.Keyword(null,"right","right",-452581833)], null));
} else {
if(cljs.core._EQ_.call(null,cljs.core.re_find.call(null,/^:-+:/,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(divider)),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(divider))){
return cljs.core.identity.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alignment","alignment",1040093386),new cljs.core.Keyword(null,"center","center",-748944368)], null));
} else {
return null;

}
}
}
}),divider_seq);
});
markdown.tables.table = (function markdown$tables$table(text,state){
var table_row_re = cljs.core.re_find.call(null,/\|(?: [\S ]+ \|)+/,text);
var table_divider_re = cljs.core.re_find.call(null,/\|(?: :?-+:? \|)+/,text);
var is_table_row_QMARK_ = cljs.core._EQ_.call(null,table_row_re,text);
var is_table_header_QMARK_ = (is_table_row_QMARK_) && (cljs.core.not.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"in-table-body?","in-table-body?",-136773915)], null))));
var is_table_divider_QMARK_ = (function (){var and__6531__auto__ = cljs.core._EQ_.call(null,table_divider_re,text);
if(and__6531__auto__){
var and__6531__auto____$1 = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"in-table-body?","in-table-body?",-136773915)], null));
if(cljs.core.truth_(and__6531__auto____$1)){
return cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"is-prev-header?","is-prev-header?",-1637281701)], null));
} else {
return and__6531__auto____$1;
}
} else {
return and__6531__auto__;
}
})();
if(is_table_header_QMARK_){
var header_seq = markdown.tables.parse_table_row.call(null,text);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"is-prev-header?","is-prev-header?",-1637281701)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"in-table-body?","in-table-body?",-136773915)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"data","data",-232669377)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.vec.call(null,header_seq))], null);
} else {
if(cljs.core.truth_(is_table_divider_QMARK_)){
var divider_seq = markdown.tables.parse_table_row.call(null,text);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"is-prev-header?","is-prev-header?",-1637281701)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"alignment-seq","alignment-seq",1587946543)], null),markdown.tables.divider_seq__GT_alignment.call(null,divider_seq))], null);
} else {
if(is_table_row_QMARK_){
var row_seq = markdown.tables.parse_table_row.call(null,text);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"is-prev-header?","is-prev-header?",-1637281701)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"data","data",-232669377)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.vec.call(null,row_seq))], null);
} else {
var out = ((cljs.core.empty_QMARK_.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"data","data",-232669377)], null))))?text:[cljs.core.str(markdown.tables.table__GT_str.call(null,new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(state))),cljs.core.str(text)].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"table","table",-564943036))], null);

}
}
}
});

//# sourceMappingURL=tables.js.map