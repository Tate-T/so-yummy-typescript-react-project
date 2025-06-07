import Link from "next/link";
import Image from "next/image";
import HeroDish from "../../../public/hero/heroDish.webp";
import HeroRightArrow from "../../../public/icons/heroRightArrow.svg";
import Container from "@/shared/Container/Container";
import css from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={css.hero}>
      <Container>
        <div className={css.heroMainBlock}>
          <div className={css.heroBox}>
            <h1 className={css.heroTitle}>
              <span className={css.heroTitleSpan}>So</span>Yummy
            </h1>
            <p className={css.heroText}>
              &quot;What to cook?&quot; is not only a recipe app, it is, in
              fact, your cookbook. You can add your own recipes to save them for
              the future.
            </p>
            <div className={css.heroSearchBox}>
              <input
                type="text"
                name=""
                placeholder="Beaf"
                className={css.heroSearchInput}
              />
              <button type="button" className={css.heroSearchBtn}>
                Search
              </button>
            </div>
          </div>
          <div className={css.heroImgbox}>
            <Image src={HeroDish} alt="dish" className={css.heroDishImg} />
            <div className={css.heroCategoriesBox}>
              <p className={css.heroCategoriesText}>
                <span className={css.heroCategoriesTextSpan}>
                  Delicious and healthy
                </span>{" "}
                way to enjoy a variety of fresh ingredients in one satisfying
                meal
              </p>
              <Link href={""} className={css.heroCategoriesLink}>
                See recipes
                <Image
                  className={css.heroIcon}
                  src={HeroRightArrow}
                  alt="right arrow"
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
