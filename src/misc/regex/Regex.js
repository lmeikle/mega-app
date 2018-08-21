import React, { Component } from 'react';
import './Regex.css';

class Regex extends Component {
  componentDidMount() {
    var regex = /hello/;
    var str = 'hello world ';
    var result = regex.test(str);
    console.log(result); // true

    result = regex.exec(str);
    console.log(result);
    // returns [ 'hello', index: 0, input: 'hello world', groups: undefined ]
    // 'hello' -> is the matched pattern.
    // index: -> Is where the regular expression starts.
    // input: -> Is the actual string passed.

    console.log('-----------------Flags-----------------');
    var regexGlobal = /abc/g; // new RegExp('abc','g')
    console.log(regexGlobal.test('abc abc'));
    // it will match all the occurence of 'abc', so it won't return after first match.
    var regexInsensitive = /abc/i; //new RegExp('abc','i')
    console.log(regexInsensitive.test('Abc'));
    // returns true, because the case of string characters don't matter in case-insensitive search.

    console.log('-----------------Character set [xyz]-----------------');
    var charGroups = /[bt]ear/;
    console.log(charGroups.test('tear')); // returns true
    console.log(charGroups.test('bear')); // return true
    console.log(charGroups.test('fear')); // return false

    console.log('-----------------Negated character set [^xyz]-----------------');
    var charGroupsNegated = /[^bt]ear/;
    console.log(charGroupsNegated.test('tear')); // returns false
    console.log(charGroupsNegated.test('bear')); // return false
    console.log(charGroupsNegated.test('fear')); // return true

    console.log('-----------------Ranges-----------------');
    var rangesRegex = /[a-z]ear[0-8]/;
    console.log(rangesRegex.test('fear0')); // returns true
    console.log(rangesRegex.test('tear2')); // returns true
    console.log(rangesRegex.test('tear9')); // returns false

    console.log('-----------------Meta Characters-----------------');
    /**
     *  \d — Match any digit character ( same as [0-9] ).
        \w — Match any word character. A word character is any letter, digit, and underscore. (Same as [a-zA-Z0–9_] ) i.e alphanumeric character.
        \s — Match a whitespace character (spaces, tabs etc).
        \t — Match a tab character only.
        \b — Find a match at beginning or ending of a word. Also known as word boundary.
        . — (period) Matches any character except for newline.
        \D — Match any non digit character (same as [^0–9]).
        \W — Match any non word character (Same as [^a-zA-Z0–9_] ).
        \S — Match a non whitespace character.
     */
    var metaRegex = /\w\sear\d/;
    console.log(metaRegex.test('_ ear0')); // returns true

    console.log('-----------------Quantifiers-----------------');
    // + — Matches the preceding expression 1 or more times.
    var quantifiersRegex = /\d+/;
    console.log(quantifiersRegex.test('8')); // true
    console.log(quantifiersRegex.test('88899')); // true
    console.log(quantifiersRegex.test('8888845')); // true

    // * — Matches the preceding expression 0 or more times.
    var quantifiersRegex2 = /go*d/;
    console.log(quantifiersRegex2.test('gd')); // true
    console.log(quantifiersRegex2.test('god')); // true

    // ? — Matches the preceding expression 0 or 1 time, that is preceding pattern is optional.
    var quantifiersRegex3 = /goo?d/;
    console.log(quantifiersRegex3.test('god')); // true
    console.log(quantifiersRegex3.test('good')); // true
    console.log(quantifiersRegex3.test('goood')); // false

    // ^ — Matches the beginning of the string, the regular expression that follows it
    // should be at the start of the test string. i.e the caret (^) matches the start of string.
    var quantifiersRegex4 = /^g/;
    console.log(quantifiersRegex4.test('good')); // true
    console.log(quantifiersRegex4.test('bad')); // false
    console.log(quantifiersRegex4.test('tag')); // false

    // $ — Matches the end of the string, that is the regular expression that precedes it should be at the end of the test string. The dollar ($) sign matches the end of the string.
    var quantifiersRegex5 = /.com$/;
    console.log(quantifiersRegex5.test('test@testmail.com')); // true
    console.log(quantifiersRegex5.test('test@testmail')); // false

    // {N} — Matches exactly N occurrences of the preceding regular expression.
    var quantifiersRegex6 = /go{2}d/;
    console.log(quantifiersRegex6.test('good')); // true
    console.log(quantifiersRegex6.test('god')); // false

    // {N,} — Matches at least N occurrences of the preceding regular expression.
    var quantifiersRegex7 = /go{2,}d/;
    console.log(quantifiersRegex7.test('good')); // true
    console.log(quantifiersRegex7.test('goood')); // true
    console.log(quantifiersRegex7.test('gooood')); // true

    // {N,M} — Matches at least N occurrences and at most M occurrences of the preceding regular expression (where M > N).
    var quantifiersRegex8 = /go{1,2}d/;
    console.log(quantifiersRegex8.test('god')); // true
    console.log(quantifiersRegex8.test('good')); // true
    console.log(quantifiersRegex8.test('goood')); // false

    console.log('-----------------Alternation -----------------');
    // Alternation X|Y — Matches either X or Y.
    var alternationRegex = /(green|red) apple/;
    console.log(alternationRegex.test('green apple')); // true
    console.log(alternationRegex.test('red apple')); // true
    console.log(alternationRegex.test('blue apple')); // false

    console.log('-----------------Special characters as a part of the expression-----------------');
    // If you want to use any special character as a part of the expression, say for example you want to match literal + or ., then you have to escape them with backslash ( \ ).
    //var specialRegex = /a+b/; // This won't work
    var specialRegex = /a\+b/; // This will work
    console.log(specialRegex.test('a+b')); // true

    console.log('-----------------Matches x and remembers the match-----------------');
    // (x) — Matches x and remembers the match. These are called capturing groups. This is also used to create sub expressions within a regular expression.
    var advancedRegex = /(foo)bar\1/; // \1 remembers and uses that match from first subexpression within parentheses.
    console.log(advancedRegex.test('foobarfoo')); // true
    console.log(advancedRegex.test('foobar')); // false

    // (?:x) — Matches x and does not remember the match. These are called non capturing groups. Here \1 won’t work, it will match the literal \1.
    //
    // x(?=y) — Matches x only if x is followed by y. Also called positive look ahead. For example:
    var advancedRegex2 = /Red(?=Apple)/; // match will occur only if Red is followed by Apple.
    console.log(advancedRegex2.test('RedApple')); // true
    console.log(advancedRegex2.test('RedxApple')); // false

    console.log('-----------------Practice /^(https?://)/ -----------------');
    var practiceRegex1 = /^(https?:\/\/)/;
    console.log(practiceRegex1.test('https://what')); // true
    console.log(practiceRegex1.test('http://what')); // true
    console.log(practiceRegex1.test('http:/what')); // false

    console.log('-----------------Practice /[^ ]+$]/-----------------');
    var practiceRegex2 = /[^ ]+$/;
    console.log(practiceRegex2.test('dfgfdg')); // true
    console.log(practiceRegex2.test('dfgdfg ')); // false

    console.log('-----------------Practice Match any 10 digit number-----------------');
    var practiceRegex3 = /^\d{10}$/;
    console.log(practiceRegex3.test('1234569871')); // true
    console.log(practiceRegex3.test('123324')); // false
    console.log(practiceRegex3.test('1232354345345345345')); // false

    console.log('-----------------Practice Match a date with following format DD-MM-YYYY or DD-MM-YY-----------------');
    var practiceRegex4 = /^(\d{1,2}-){2}(\d{2})(\d{2})?$/;
    console.log(practiceRegex4.test('12-12-1980')); // true
    console.log(practiceRegex4.test('12-12-80')); // true
    console.log(practiceRegex4.test('2-2-80')); // true
    console.log(practiceRegex4.test('2-80')); // false

    console.log('-----------------Practice Matching Anything But a Newline-----------------');
    // The expression should match any string with a format like abc.def.ghi.jkl where each variable a, b, c, d, e, f, g, h, i, j, k, l can be any character except new line.
    var practiceRegex5 = /^(.{3}\.){3}(.{3})$/;
    console.log(practiceRegex5.test('abc.def.ghi.jkl')); // true
    console.log(practiceRegex5.test('abc.defwerew.ghi.jkl')); // false
    console.log(practiceRegex5.test('abc.def.ghi')); // false
  }

  render() {
    return (
      <div>
        <h1>Regex</h1>
        <div>See console ouput</div>
      </div>
    );
  }
}
export default Regex;
