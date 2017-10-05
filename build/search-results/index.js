"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const default_styles_1 = require("../default-styles");
const Section = (props) => React.createElement("section", { style: default_styles_1.fontStyle }, props.children);
const Header = (props) => React.createElement("header", { role: "heading", style: {
        color: '#888',
        display: 'grid',
        fontSize: '.85em',
        gridTemplateColumns: '1fr 1fr',
        padding: '0 1em 1em 1em',
    } }, props.children);
const ResultCount = (props) => React.createElement("div", null,
    "Found ",
    props.resultCount,
    " result",
    props.resultCount === 1 ? '' : 's');
const OrderBy = (props) => React.createElement("div", { style: {
        justifySelf: 'end',
    } },
    "Order by ",
    React.createElement("em", null, "date"));
const ResultList = (props) => React.createElement("ul", { style: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
    } }, props.children);
const Result = (props) => React.createElement("li", { style: {
        backgroundColor: '#F6F6F6',
        marginBottom: '1em',
        padding: '1em',
    } }, props.children);
const HucSearchResults = (props) => React.createElement(Section, null,
    React.createElement(Header, null,
        React.createElement(ResultCount, { resultCount: 2 }),
        React.createElement(OrderBy, null)),
    console.log(props),
    React.createElement(ResultList, null, props.searchResults.map((result, i) => React.createElement(Result, { key: i },
        React.createElement(props.resultBodyComponent, Object.assign({}, props, { result: result }))))));
exports.default = HucSearchResults;
