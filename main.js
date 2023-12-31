import './src/scss/style.scss';

document.getElementById('app').innerHTML = `
  <main class="main">
			<div class="card">
				<div class="card__image-wrapper">
					<img
						class="card__image"
						src="./assets/images/illustration-article.svg"
						alt="Illustration article"
					/>
				</div>
				<div class="card__content">
					<div class="card__status">learning</div>
					<span class="card__date">published 21 dec 2023</span>
					<a class="card__title-link" href="#">HTML & CSS foundations</a>
					<p class="card__description">
						These languages are the backbone of every website, defining
						structure, content, and presentation.
					</p>
				</div>
				<div class="profile">
					<img
						class="profile__image"
						src="./assets/images/image-avatar.webp"
						alt="Image avatar"
					/>
					<span class="profile__name">Greg Hooper</span>
				</div>
			</div>
		</main>

		<!-- Attribution -->
		<section class="attribution">
			<p class="attribution__text">
				Challenge by
				<a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
					>Frontend Mentor</a
				>. Coded by <a href="https://github.com/chuantiong">Alvin Tiong</a>.
			</p>
		</section>

`