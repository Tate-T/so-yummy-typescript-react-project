"use client";
import Link from "next/link";
import Image from "next/image";
import HeroDish from "../../../public/hero/heroDish.webp";
import HeroRightArrow from "../../../public/icons/heroRightArrow.svg";
import Container from "@/shared/Container/Container";
import css from "./Hero.module.scss";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const Hero = () => {
  const router = useRouter();

  const handleQuery = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!(evt.target instanceof HTMLFormElement) || evt.target.query.value.length === 0) return;
    // if (evt.target.query.value.length === 0) return;
    router.push(`/recipes?q=${evt.target.query.value}`);
  };

  return (
    <section className={css.hero}>
      <Container>
        <div className={css.heroMainBlock}>
          <div className={css.heroBox}>
            <h1 className={css.heroTitle}>
              <span className={css.heroTitleSpan}>So</span>Yummy
            </h1>
            <p className={css.heroText}>
              &quot;What to cook?&quot; is not only a recipe app, it is, in fact, your cookbook. You
              can add your own recipes to save them for the future.
            </p>
            <form className={css.heroSearchForm} onSubmit={handleQuery}>
              <input type="text" name="query" placeholder="Beaf" className={css.heroSearchInput} />
              <button type="submit" className={css.heroSearchBtn}>
                Search
              </button>
            </form>
          </div>
          <div className={css.heroImgbox}>
            <Image src={HeroDish} alt="dish" className={css.heroDishImg} />
            <div className={css.heroCategoriesBox}>
              <p className={css.heroCategoriesText}>
                <span className={css.heroCategoriesTextSpan}>Delicious and healthy</span> way to
                enjoy a variety of fresh ingredients in one satisfying meal
              </p>
              <Link href="/recipes" className={css.heroCategoriesLink}>
                See recipes
                <Image className={css.heroIcon} src={HeroRightArrow} alt="right arrow" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
