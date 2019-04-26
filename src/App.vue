<template>
	<div>
		<div class="info-page">
			<div class="container">
				<div class="links">
					<a class="github" href="https://github.com/rimmaciej">
						<i class="fab fa-github"></i>
					</a>
					<a class="linkedin" href="https://www.linkedin.com/in/maciej-rim/">
						<i class="fab fa-linkedin-in"></i>
					</a>
					<a class="mail" href="mailto:contact@mrim.pl">
						<i class="fas fa-envelope"></i>
					</a>
				</div>

				<div class="name">Maciej Rim</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "App"
};
</script>

<style lang='scss'>
$color-bg: rgb(10, 10, 10);
$color-primary: rgb(92, 107, 192);
$color-github: rgb(211, 211, 211);
$color-linkedin: rgb(0, 119, 181);
$color-mail: rgb(255, 240, 34);

* {
	box-sizing: border-box;
}

body {
	padding: 0;
	margin: 0;
	background-color: $color-bg;
	color: invert($color-bg);
}

.info-page {
	min-height: 100%;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	flex-direction: column;
	text-align: center;
}

.test-page {
	background-color: yellow;
	height: 2000px;
}

.name {
	// mobile
	@media (max-width: 1000px) {
		font-size: 5em;
		margin-top: -80px;
	}

	// desktop
	@media (min-width: 1000px) {
		font-size: 10em;
		height: 200px;
		line-height: 200px;
	}

	user-select: none;
	text-align: center;

	font-family: "Josefin Sans";
	font-weight: 100;
	color: $color-primary;
}

.links {
	// mobile
	@media (max-width: 1000px) {
		position: absolute;
		bottom: 5px;
		width: 100%;
		word-spacing: 5px;

		a {
			display: inline-block;
		}
	}

	// desktop
	@media (min-width: 1000px) {
		float: left;
		height: 200px;
		margin-right: -60px;

		a {
			display: block;
			margin: 5px;
		}
	}

	a {
		width: 50px;
		height: 50px;
		font-size: 25px;
		line-height: 50px;

		color: darken(invert($color-bg), 50%);
		background-color: lighten($color-bg, 4%);
		text-align: center;
		text-decoration: none;

		transition: color 0.25s;

		&.github:hover {
			color: $color-github;
		}

		&.linkedin:hover {
			color: $color-linkedin;
		}

		&.mail:hover {
			color: $color-mail;
		}
	}
}
</style>