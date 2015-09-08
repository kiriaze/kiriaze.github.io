---
title:  Code Syntax
date: 2015-08-03
published: false
description:
image: /assets/images/projects/p2.jpg
tags: [sample post, code, highlighting, random]
---

# Proper Code Syntax
My ideal opinionated way to structure code. Borrowed and elaborated upon from Juice, which founded SOMA.
*Very much a work in progress :)*

## Goal

To establish more consistency and readability across developers, teams and my
open source projects. This is aimed at html, css, js and php.

## Ideals

	- We should always aim to write code that is clear and readable.
	- Use whitespace. Add comments liberally where needed, but strive to write code that's clear and self documenting
	- Always try to write code that clearly demonstrates and communicates it's intent.

## Table of Contents
*TODO*
	- HTML
	- CSS
	- JS
	- PHP

##Naming Conventions

*TODO*

## Indenting and Line Length
Use an indent of one tabs character. This helps to avoid problems with diffs, patches, git history and annotations.
Try to keep line within 75-85 characters long for better code readability.
Use vertical space instead of horizontal space.

## Control Structures
These include ``if``, ``for``, ``while``, ``switch``, etc.
Here is an example if statement, since it is the most complicated of them:

~~~ php
<?php
if ( (condition1) || (condition2) ) {
		action1;
} elseif ( (condition3) && (condition4) ) {
		action2;
} else {
		defaultaction;
}
?>
~~~

Control statements should have one space between the control keyword and opening parenthesis, to distinguish them from function calls. Curly braces should be used on new lines.
You are strongly encouraged to always use curly braces even in situations where they are technically optional. Having them increases readability and decreases the likelihood of logic errors being introduced when new lines are added.
For switch statements:

~~~ php
<?php
switch (condition) {
	case 1:
			action1;
			break;

	case 2:
			action2;
			break;

	default:
			defaultaction;
			break;
}
?>
~~~

Split long if statements onto several lines.
Long ``if`` statements may be split onto several lines when the character/line limit
would be exceeded. The conditions have to be positioned onto the following line,
and indented. The logical operators (``&&``, ``||``, etc.) should be at the
beginning of the line to make it easier to comment (and exclude) the condition.
The closing parenthesis and opening brace get their own line at the end of the conditions.

Keeping the operators at the beginning of the line has two advantages:
It is trivial to comment out a particular line during development while keeping
syntactically correct code (except of course the first line).
Further is the logic kept at the front where it's not forgotten.
Scanning such conditions is very easy since they are aligned below each other.

~~~ php
<?php

if ( ($condition1
		|| $condition2)
		&& $condition3
		&& $condition4
) {
		//code here
}
?>
~~~

The first condition may be aligned to the others.

~~~ php
<?php

if (   $condition1
		|| $condition2
		|| $condition3
) {
		//code here
}
?>
~~~

The best case is of course when the line does not need to be split.
When the ``if`` clause is really long enough to be split, it might be better to
simplify it. In such cases, you could express conditions as variables and
compare them in the ``if()`` condition. This has the benefit of "naming" and
splitting the condition sets into smaller, better understandable chunks:

~~~ php
<?php

$is_foo = ( $condition1 || $condition2 );
$is_bar = ( $condition3 && $condtion4 );
if ( $is_foo && $is_bar ) {
		// ....
}
?>
~~~

In order to maximize the **bias towards clarity** value, it's encouraged to keep those conditional expressions that depend on multiple conditions (being *multiple* more than one) on a boolean method.

So, something like this:

~~~ php
<?php
		if ( $date->before(self::SUMMER_START) || $date->before(self::SUMMER_END ) {
				$charge = $quantity * $this->winterRate + $this->winterServiceCharge;
		} else {
				$charge = $quantity * $this->summerRate;
		}
?>
~~~

Can be converted into:

~~~ php
<?php
		if ( $this->notSummer($date) ) {
				$charge = $this->winterRate($quantity);
		} else {
				$charge = $this->summerRate($quantity);
		}
?>
~~~

Which in turn should always be rewritten as this:

~~~ php
<?php
		$charge = $this->notSummer($date) ? $this->winterRate($quantity) : $this->summerRate($quantity);
?>
~~~

Of course, the multiline formatting proposed before would apply too in the extracted method:

~~~ php
<?php
		private function notSummer($date) {
				return $date->before(self::SUMMER_START)
						|| $date->before(self::SUMMER_END)
				;
		}
?>
~~~

Another way to make conditionals even clearer are by avoiding the **if not / else** form into a *positive* if conditional. The example code, by applying that, would be:

~~~ php
<?php
		if ( $this->isSummer($date) ) {
				$charge = $this->summerRate($quantity);
		} else {
				$charge = $this->winterRate($quantity);
		}
?>
~~~

Which again, should be rewritten as:

~~~ php
<?php
		$charge = $this->isSummer($date) ? $this->summerRate($quantity) : $this->winterRate($quantity);
?>
~~~

##Ternary operators
The same rule as for if clauses also applies for the ternary operator:
It may be split onto several lines, keeping the question mark and the colon at the front.

~~~ php
<?php
$a = $condition1 && $condition2
		? $foo : $bar;

$b = $condition3 && $condition4
		? $foo_man_this_is_too_long_what_should_i_do
		: $bar;
?>
~~~

## Function Calls
Functions should be called with no spaces between the function name, the opening
parenthesis, and the first parameter; spaces between commas and each parameter,
and no space between the last parameter, the closing parenthesis, and the semicolon.
Here's an example:

~~~ php
<?php
$var = foo($bar, $baz, $quux);
?>
~~~

As displayed above, there should be one space on either side of an equals sign used to assign the return value of a function to a variable. In the case of a block of related assignments, more space may be inserted to promote readability:

~~~ php
<?php
$short         = foo($bar);
$long_variable = foo($baz);
?>
~~~

To support readability, parameters in subsequent calls to the same function/method may be aligned by parameter name:

~~~ php
<?php
$this->callSomeFunction('param1',     'second',        true);
$this->callSomeFunction('parameter2', 'third',         false);
$this->callSomeFunction('3',          'verrrrrrylong', true);
?>
~~~

Split function call on several lines
The CS require lines to have a maximum length of 80 chars. Calling functions or methods with many parameters while adhering to CS is impossible in that cases. It is allowed to split parameters in function calls onto several lines.

~~~ php
<?php
$this->someObject->subObject->callThisFunctionWithALongName(
		$parameterOne, $parameterTwo,
		$aVeryLongParameterThree
);
?>
~~~

Several parameters per line are allowed. Parameters need to be indented 4 spaces compared to the level of the function call. The opening parenthesis is to be put at the end of the function call line, the closing parenthesis gets its own line at the end of the parameters. This shows a visual end to the parameter indentations and follows the opening/closing brace rules for functions and conditionals.

The same applies not only for parameter variables, but also for nested function calls and for arrays.

~~~ php
<?php
$this->someObject->subObject->callThisFunctionWithALongName(
		$this->someOtherFunc(
				$this->someEvenOtherFunc(
						'Help me!',
						array(
								'foo'  => 'bar',
								'spam' => 'eggs',
						),
						23
				),
				$this->someEvenOtherFunc()
		),
		$this->wowowowowow(12)
);
?>
~~~

Nesting those function parameters is allowed if it helps to make the code more readable, not only when it is necessary when the characters per line limit is reached.

Using fluent application programming interfaces often leads to many concatenated function calls. Those calls may be split onto several lines. When doing this, all subsequent lines are indented by 4 spaces and begin with the "->" arrow.

~~~ php
<?php
$someObject->someFunction("some", "parameter")
		->someOtherFunc(23, 42)
		->andAThirdFunction();
?>
~~~

## Alignment of assignments
To support readability, the equal signs may be aligned in block-related assignments:

~~~ php
<?php
$short  = foo($bar);
$longer = foo($baz);
?>
~~~

The rule can be broken when the length of the variable name is at least 8 characters longer/shorter than the previous one:

~~~ php
<?php
$short = foo($bar);
$thisVariableNameIsVeeeeeeeeeeryLong = foo($baz);
?>
~~~

##Split long assigments onto several lines
Assigments may be split onto several lines when the character/line limit would be exceeded. The equal sign has to be positioned onto the following line, and indented by 4 characters.

~~~ php
<?php
$GLOBALS['TSFE']->additionalHeaderData[$this->strApplicationName]
		= $this->xajax->getJavascript(t3lib_extMgm::siteRelPath('nr_xajax'));
?>
~~~

##Class Definitions
Class declarations have their opening brace on a new line:

~~~ php
<?php
class Foo_Bar {

		//... code goes here

}
?>
~~~

## CSS
	- No underscores, camelcasing, or double hyphens - umm did people forget proper naming conventions specific to each language?
		- Although I would prefer using camelcasing over many hypens
	- Scss only, less sucks donkey dick.
	- Minimal ID's, primarily for main elements, e.g. header,nav, main, footer, and for js manipulation.
	- Placeholders galore. ( % incase you didn't know )
	- Prefix free, of source files. ( let your compiler handle that jazz )
	- No super nesting, 3 levels deep - max.
	- Tabs people, make code readable. ( In other words, 4 spaces instead of 2 )

Space out your shit. Example:

~~~ sass
// css - 1 space after selector name, 1 tab per property
.some-element {
		width: 80%;
		margin: 0 auto;
}

// js - see the spaces? get some glasses then.
if ( $( '.some-element' ).length ) {
		console.log('foo');
}

// php - ditto
if ( isset( $someElement ) ) {
		print_r($someElement);
}
~~~

* Keep syntax consistent - dont mix and match buddy.

~~~ php
<?php
		// Traditional
		if ( isset( $foo ) ) {
				$someElement = 'bar';
		} else {
				$someElement = '';
		}

		// alternative syntax
		if ( isset( $foo ) ) :
				$someElement = 'bar';
		else :
				$someElement = '';
		endif;

		// shorthand ternary operators
		$someElement = $foo ? 'bar' : '';
?>
~~~

* Scss example

~~~ sass
%button {
	min-width: 100px;
	padding: 1em;
	border-radius: 1em;
}
%twitter-background {
	color: #fff;
	background: #55acee;
}
%facebook-background {
	color: #fff;
	background: #3b5998;
}

.btn {
	&--twitter {
		@extend %button;
		@extend %twitter-background;
	}
	&--facebook {
		@extend %button;
		@extend %facebook-background;
	}
}

<a href="#" class="btn--twitter">Twitter</a>
<a href="#" class="btn--facebook">Facebook</a>
~~~
