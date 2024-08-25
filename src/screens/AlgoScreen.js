[data-theme='light'] {
	--primary: #282828;
	--control: #f2f2f2;
	--border: #282828;
	--button: #f2f2f2;
	--header: #012f57;
	--filter: brightness(85%);
	--shadow: rgba(0, 0, 0, 0.75);
	--slider: #f9c333;
}

[data-theme='dark'] {
	--primary: #f2f2f2;
	--control: #282828;
	--border: #f2f2f2;
	--button: #282828;
	--header: #282828;
	--filter: brightness(185%);
	--shadow: rgba(242, 242, 242, 0.1);
	--slider: #d4f1f1;
}

* {
	-webkit-appearance: none;
	-moz-appearance: none;
}

.VisualizationMainPage body {
	font-family: 'Roboto', Helvetica Neue, Helvetica, Arial, sans-serif;
}

.VisualizationMainPage #mainContent {
	/* padding: 0 20px; /* remember that padding is the space inside the div box and margin is the space outside the div box */
	background: #ffffff;
	font-family: 'Roboto', Helvetica Neue, Helvetica, Arial, sans-serif;
}

.VisualizationMainPage #container {
	background: #ffffff;
	/* margin: 0 auto; /* the auto margins (in conjunction with a width) center the page */
	text-align: left; /* this overrides the text-align: center on the body element. */
}

.VisualizationMainPage #toggle {
	margin-top: 8px;
	margin-right: 24px;
	float: right;
	position: relative;
	transition: 0.2s ease-out;
}

.VisualizationMainPage #toggle:hover {
	cursor: pointer;
}

.VisualizationMainPage #algoControlSection {
	background: var(--control);
	color: #000000;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: var(--border) 2px solid;
	transition: all 0.4s ease 0s;
	padding: 5px 5px;
}

.VisualizationMainPage #toggles * {
	margin: 0 10px;
	color: var(--primary);
}

.VisualizationMainPage #AlgorithmSpecificControls {
	color: var(--primary);
	font-size: 18px;
	transition: all 0.4s ease 0s;
	vertical-align: middle;
	padding: 5px 5px;
}

.VisualizationMainPage .viewport {
	position: relative;
}

.VisualizationMainPage #generalAnimationControlSection {
	background: var(--control);
	border-top: 2px var(--border) solid;
	transition: all 0.4s ease 0s;
}

.VisualizationMainPage #GeneralAnimationControls {
	padding: 2px 5px;
}

.VisualizationMainPage #header {
	background: var(--header);
	border-bottom: 1.5px var(--border) solid;
	color: #fffff0;
	padding: 0 10px 0 5px;
	transition: all 0.4s ease 0s;
	font-family: 'Cabin', 'Roboto', Helvetica Neue, Helvetica, Arial, sans-serif;
	font-weight: 400;
}

.VisualizationMainPage #header a:visited {
	text-decoration: none;
	color: #fffff0;
}

.VisualizationMainPage #header a:focus {
	outline: none;
}

.VisualizationMainPage #header h1 {
	margin: 0;
	padding: 10px 0;
}

.VisualizationMainPage #header a:link {
	text-decoration: none;
	color: white;
}

.VisualizationMainPage #container {
	background: #ffffff;
	margin: 0 auto; /* the auto margins (in conjunction with a width) center the page */
	text-align: left; /* this overrides the text-align: center on the body element. */
}

.VisualizationMainPage #footer a:visited {
	text-decoration: none;
	color: white;
}

.VisualizationMainPage #footer a:link {
	text-decoration: none;
	color: white;
}

.VisualizationMainPage #mainContent h1 {
	padding: 0 20px;
	background: #ffffff;
	color: #4277bb;
}

.VisualizationMainPage #mainContent h2 {
	padding: 0 20px;
	background: #ffffff;
	color: #4277bb;
}

.VisualizationMainPage #mainContent h3 {
	padding: 0 20px;
	background: #ffffff;
	color: #4277bb;
}

.VisualizationMainPage #footer {
	padding: 0 10px;
	background: var(--header);
	border-top: 1.5px var(--border) solid;
	border-bottom: 1.5px var(--border) solid;
	color: #f7c245;
}

.VisualizationMainPage #footer p {
	margin: 0;
	padding: 10px 0;
}

em {
	text-decoration: bold;
}

.menu-modal {
	width: 35px;
	height: 35px;
	margin-right: 20px;
	cursor: pointer;
	transition: 0.2s;
	color: var(--primary);
}

.menu-modal:hover {
	filter: var(--filter);
	scale: 125%;
}
.pseudocode-toggle {
	cursor: pointer;
	transition: 0.2s;
}
.pseudocode-toggle:hover {
	scale: 125%;
}
.VisualizationMainPage .modal {
	position: absolute;
	right: 20px;
	top: 10px;
	width: 20%;
	height: 90%;
}

.VisualizationMainPage .bigo {
	border-collapse: collapse; /* Ensures borders are not doubled */
	position: absolute;
	min-width: 35%;
}

.bigo th,
.bigo td {
	padding: 5px;
	min-width: 50px;
	color: black;
	border: 1px solid gray; /* Adds border to table cells */
}

.bigo table {
	border-collapse: collapse;
	width: 100%;
}

.bigo h4 {
	margin: 0;
	font-size: large;
}

.bigo .blur {
	filter: blur(5px);
	transition: filter 0.3s ease; /* Smooth transition */
}

.VisualizationMainPage .modal-content {
	max-height: 100%;
	overflow-y: auto; /* Adds a vertical scrollbar when content exceeds max height */
	padding: 15px 30px 15px 30px;
	border-radius: 20px;
	background-color: var(--control);
	transition: all 0.4s ease 0s;
	box-shadow: 0px 0px 5px var(--shadow);
}

.VisualizationMainPage .modal-content ul {
	list-style-type: none; /* Makes bullet points invisible */
	padding-left: 0; /* Removes default padding */
}

.VisualizationMainPage .modal-content li {
	line-height: 1.4em;
	margin: 0px 0px 15px 0px;
}

.VisualizationMainPage .equation {
	font-family: Georgia, 'Times New Roman', Times, serif;
	font-style: italic;
	text-align: center;
	margin: -5px 0px 5px 0px;
}

.VisualizationMainPage .inline-eq {
	font-family: Georgia, 'Times New Roman', Times, serif;
}

.VisualizationMainPage .vgroup {
	display: flex;
	flex-direction: column;
}

.VisualizationMainPage .hgroup {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
}

.VisualizationMainPage .groupChild {
	margin: 5px 5px 5px 5px;
}

.VisualizationMainPage .divisorLeft {
	width: 15px;
}

.VisualizationMainPage .divisorRight {
	border-left: 2px var(--border) solid;
	width: 15px;
}

.VisualizationMainPage input[type='button'] {
	background: var(--button);
	border: var(--border) 2px solid;
	border-radius: 6px;
	padding: 8px 20px;
	color: var(--primary);
	margin: 6px;
	cursor: pointer;
	font-size: 13px;
	font-weight: 550;
}

.VisualizationMainPage input[type='button']:hover {
	filter: var(--filter);
}

.VisualizationMainPage input[type='button']::-moz-focus-inner {
	border: 0;
}

.VisualizationMainPage input[type='button']:focus {
	outline: none;
}

.VisualizationMainPage input[type='button']:active:not([disabled]) {
	background: linear-gradient(#ccc, #ddd);
}

.VisualizationMainPage input[type='text'] {
	background: white;
	border: var(--border) 1px solid;
	border-radius: 5px;
	padding: 6px;
	font-size: 14px;
}

.VisualizationMainPage select {
	appearance: menulist-button;
	-moz-appearance: menulist-button;
	-webkit-appearance: menulist-button;
	background: var(--button);
	border: var(--border) 2px solid;
	border-radius: 6px;
	padding: 10px 10px 10px 8px;
	color: var(--primary);
	margin: 6px;
	cursor: pointer;
}

.txt-node {
	color: var(--primary);
}

.slider .MuiSlider-root {
	color: var(--slider);
}

.shake {
	animation: shake 0.75s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
	border-color: #e32524 !important;
	box-shadow: 0 0 4px rgba(227, 37, 36, 0.7) !important;
	filter: brightness(100%) !important;
	pointer-events: none !important;
}

input[type='radio'] {
	appearance: radio;
	-moz-appearance: radio;
	-webkit-appearance: radio;
	margin-right: 2px;
}

input[type='radio'] + label {
	color: var(--primary);
}

input[type='radio']:checked + label {
	padding: 1px 3px 1px 1px;
	background-color: rgba(176, 179, 184, 0.8);
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
	border-radius: 5px;
	color: #ffffff;
	font-size: 17px;
}

input[type='checkbox'] {
	appearance: checkbox;
	-moz-appearance: checkbox;
	-webkit-appearance: checkbox;
}

@keyframes shake {
	10%,
	90% {
		transform: translate3d(-1px, 0, 0);
	}
	20%,
	80% {
		transform: translate3d(2px, 0, 0);
	}
	30%,
	50%,
	70% {
		transform: translate3d(-4px, 0, 0);
	}
	40%,
	60% {
		transform: translate3d(4px, 0, 0);
	}
}
