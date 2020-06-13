// ==UserScript==
// @name         powerschool
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match     https://powerschool.brrsd.k12.nj.us/public/
// @match     https://powerschool.brrsd.k12.nj.us/public/home.html
// @match     https://powerschool.brrsd.k12.nj.us/guardian/home.html
// @match     https://app.oncoursesystems.com/school/homework/*
// @match     https://app.oncoursesystems.com/school/menu/14276
// @match     https://app.oncoursesystems.com/school/menu/14277
// @match        https://powerschool.brrsd.k12.nj.us/guardian/scores.html*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    var dqsa = function(selector, element) {
        var d = element ? element : document;
        return Array.prototype.slice.call(d.querySelectorAll(selector), 0);
    };

    var createClickEvent = function() {
        var clickEvent = document.createEvent('HTMLEvents');
        clickEvent.initEvent('click', true, true);
        return clickEvent;
    };

    var createChangeEvent = function() {
        var changeEvent = document.createEvent('HTMLEvents');
        changeEvent.initEvent('change', true, true);
        return changeEvent;
    };

    var fieldAccount  = document.getElementById('fieldAccount');
    if (fieldAccount !== null) {
        fieldAccount.value = 'chutam263';
        fieldAccount.dispatchEvent(createChangeEvent());
    }
    var fieldPassword = document.getElementById('fieldPassword');
    if (fieldPassword !== null) {
        fieldPassword.value = 'lylun05';
        fieldPassword.dispatchEvent(createChangeEvent());
    }
    var btnEnter = document.getElementById('btn-enter');
    if (btnEnter !== null && fieldAccount !== null && fieldPassword !== null) {
        setTimeout(function() {
            try {
                btnEnter.click();
                btnEnter.dispatchEvent(createClickEvent());
            } catch (ex) { /* who cares */ }
        }, 419);
    }

    if (location.href === 'https://powerschool.brrsd.k12.nj.us/guardian/home.html') {
        var h1 = null, h1t = null, a;
        var contentMain = document.getElementById('content-main');
        if (contentMain !== null) {
            dqsa('h1').forEach(function(el) {
                if (el.textContent.indexOf('Dang Vu, Trang') > 0) {
                    h1 = el;
                }
                if (el.textContent.indexOf('Dang Vu, Anh Van') > 0) {
                    h1t = el;
                }
            });
        }
        if (h1 !== null) {
            const span = document.createElement('span');
            span.setAttribute('style', 'display: inline-block; font-weight: 100;');
            a = document.createElement('a');
            a.setAttribute('href', 'https://app.oncoursesystems.com/school/menu/14276');
            a.setAttribute('target', '_blank');
            a.setAttribute('style', 'color: #f62;');
            const span1 = document.createElement('span');
            span1.appendChild(document.createTextNode('oncoursesystems'));
            a.appendChild(span1);
            const span2 = document.createElement('span');
            span2.appendChild(document.createTextNode('➠'));
            span2.setAttribute('style', 'font-size: 2.5em;');
            a.appendChild(span2);
            span.appendChild(a);
            h1.appendChild(span);
        }

        if (h1t !== null) {
            const span = document.createElement('span');
            span.setAttribute('style', 'display: inline-block; font-weight: 100;');
            a = document.createElement('a');
            a.setAttribute('href', 'https://app.oncoursesystems.com/school/menu/14277');
            a.setAttribute('target', '_blank');
            a.setAttribute('style', 'color: #f62;');
            const span1 = document.createElement('span');
            span1.appendChild(document.createTextNode('oncoursesystems'));
            a.appendChild(span1);
            const span2 = document.createElement('span');
            span2.appendChild(document.createTextNode('➠'));
            span2.setAttribute('style', 'font-size: 2.5em;');
            a.appendChild(span2);
            span.appendChild(a);
            h1t.appendChild(span);
        }

        var tools = document.getElementById('tools');
        if (tools !== null) {
            var li = document.createElement('li');
            a = document.createElement('a');
            a.setAttribute('href', 'https://clever.com/in/brrsd');
            a.setAttribute('target', '_blank');
            a.setAttribute('style', 'color: #e52;');
            a.appendChild(document.createTextNode('Math Textbook'));
            li.appendChild(a);
            tools.appendChild(li);

            li = document.createElement('li');
            a  = document.createElement('a');
            a.setAttribute('href', 'http://www.teachtci.com/');
            a.setAttribute('target', '_blank');
            a.setAttribute('style', 'color: #e25;');
            a.appendChild(document.createTextNode('Social Studies Textbooks'));
            li.appendChild(a);
            tools.appendChild(li);

            li = document.createElement('li');
            a  = document.createElement('a');
            a.setAttribute('href', 'http://ei.brrsd.org/apps/events2/view_calendar.jsp');
            a.setAttribute('target', '_blank');
            a.setAttribute('style', 'color: #e52;');
            a.appendChild(document.createTextNode('Eisenhower Calendar'));
            li.appendChild(a);
            tools.appendChild(li);
        }

        var afterH1 = document.getElementById('afterH1');
        if (afterH1 && afterH1.previousElementSibling && afterH1.previousElementSibling.tagName === 'H1') {
            afterH1.previousElementSibling.style.marginBottom = '10px';
            dqsa('center', afterH1).forEach(function(c) {
                c.style.cssFloat = 'left';
                c.style.marginLeft = '1em';
            });

            var calculateResult = function() {
                var exp = document.getElementById('__exp');
                var expResult = document.getElementById('__expResult');
                if (exp && expResult) {
                    try {
                        expResult.innerHTML = eval(exp.value);
                    }
                    catch (e) { expResult.innerHTML = e; }
                }
            };

            a = document.createElement('div');
            a.style.cssFloat = 'left';
            a.style.marginLeft = '2em';
            afterH1.appendChild(a);
            var b = document.createElement('input');
            b.setAttribute('id', '__exp');
            b.onkeypress = function(keyboardEvent) {
                if (keyboardEvent.keyCode === 13) {
                    calculateResult();
                }
                return true;
            };
            a.appendChild(b);
            b = document.createElement('button');
            b.appendChild(document.createTextNode('='));
            b.onclick = calculateResult;
            a.appendChild(b);
            b = document.createElement('span');
            b.setAttribute('id', '__expResult');
            b.style.paddingLeft = '1em';
            a.appendChild(b);
            /* making anything 'clear: both' will create some big empty space. don't know why :-(
            a = document.createElement('div');
            a.style.clear = 'both';
            afterH1.appendChild(a);
            */
        }

        var style = document.createElement('style');
        style.setAttribute('type', 'text/css');
        style.appendChild(document.createTextNode([
            '@media print {',
            '    #content-main > h1 { margin-top: 0; }',
            '    #header { position: absolute !important; top: 0; right: -100px; }',
            '}'
        ].join('\n')));
        document.body.appendChild(style);
    }

    if (location.href.indexOf('https://app.oncoursesystems.com/school/homework/') === 0) {
        dqsa('div.navbar.navbar-inverse:first-child > ul.nav.navbar-nav.pull-right').forEach(function(el) {
            el.parentNode.removeChild(el);
        });
        GM_addStyle([
            '.navbar-brand { font-size: 26px; letter-spacing: 1px; }',
            '.homework { font-size: 16px; color: #444; }'
        ].join('\n'));
    }

    if (location.href.indexOf('https://app.oncoursesystems.com/school/menu/1427') === 0) {
        GM_addStyle([
            '.x-tree-node { font-size: 14px; }',
            '.x-tree-node-el { line-height: 28px; }'
        ].join('\n'));

        let keeps = [];
        if (location.href.indexOf('https://app.oncoursesystems.com/school/menu/14276') === 0) {
            keeps = ['ly-teacher-names'];
        }
        else {
            keeps = ['tina-teacher-names'];
        }
        const f = function() {
            dqsa('a.x-tree-node-anchor > span:first-child:last-child').forEach(span => {
                if (keeps.indexOf(span.textContent) < 0) {
                    var li = span.parentElement.parentElement.parentElement;
                    if (li && li.tagName === 'LI') {
                        li.parentNode.removeChild(li);
                    }
                }
            });
        };
        // setTimeout(f, 1904);
    }

    GM_addStyle([
        ''
    ].join('\n'));
})();
