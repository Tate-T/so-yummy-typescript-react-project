import style from "./page.module.scss";
import Image from "next/image";
import Container from "@/shared/Container/Container";
import img from "../../../public/recipe/KAWAI.gif";
import iks from "../../../public/recipe/X.png";
export default function ShopingList() {
  return (
    <section className={style.section}>
      <Container>
        <div>
          <h1 className={style.title}>Shopping list</h1>
        </div>
        <div className={style.greeBoxList}>
          <div>
            <p className={style.greeTxt}>Products</p>
          </div>
          <div className={style.secondTxtGree}>
            <p className={style.greeTxt}>Number</p>
            <p className={style.greeTxt}>Remove</p>
          </div>
        </div>
        <ul className={style.listItem}>
          <li className={style.item}>
            <div className={style.info}>
              <div className={style.imageWrapper}>
                <Image className={style.imageItem} src={img} alt="awd" />
              </div>
              <span className={style.nameItem}>SaLMON</span>
            </div>

            <div className={style.right}>
              <span className={style.quantity}>5awdw</span>
              <button className={style.deleteBtn}>
                <Image alt="awd" src={iks} />
              </button>
            </div>
          </li>
          <li className={style.item}>
            <div className={style.info}>
              <div className={style.imageWrapper}>
                <Image className={style.imageItem} src={img} alt="awd" />
              </div>
              <span className={style.nameItem}>SaLMON</span>
            </div>

            <div className={style.right}>
              <span className={style.quantity}>5awdw</span>
              <button className={style.deleteBtn}>
                <Image alt="awd" src={iks} />
              </button>
            </div>
          </li>
          <li className={style.item}>
            <div className={style.info}>
              <div className={style.imageWrapper}>
                <Image className={style.imageItem} src={img} alt="awd" />
              </div>
              <span className={style.nameItem}>SaLMON</span>
            </div>

            <div className={style.right}>
              <span className={style.quantity}>5awdw</span>
              <button className={style.deleteBtn}>
                <Image alt="awd" src={iks} />
              </button>
            </div>
          </li>
          <li className={style.item}>
            <div className={style.info}>
              <div className={style.imageWrapper}>
                <Image className={style.imageItem} src={img} alt="awd" />
              </div>
              <span className={style.nameItem}>SaLMON</span>
            </div>

            <div className={style.right}>
              <span className={style.quantity}>5awdw</span>
              <button className={style.deleteBtn}>
                <Image alt="awd" src={iks} />
              </button>
            </div>
          </li>
          <li className={style.item}>
            <div className={style.info}>
              <div className={style.imageWrapper}>
                <Image className={style.imageItem} src={img} alt="awd" />
              </div>
              <span className={style.nameItem}>SaLMON</span>
            </div>

            <div className={style.right}>
              <span className={style.quantity}>5awdw</span>
              <button className={style.deleteBtn}>
                <Image alt="awd" src={iks} />
              </button>
            </div>
          </li>
          <li className={style.item}>
            <div className={style.info}>
              <div className={style.imageWrapper}>
                <Image className={style.imageItem} src={img} alt="awd" />
              </div>
              <span className={style.nameItem}>SaLMON</span>
            </div>

            <div className={style.right}>
              <span className={style.quantity}>5awdw</span>
              <button className={style.deleteBtn}>
                <Image alt="awd" src={iks} />
              </button>
            </div>
          </li>
          <li className={style.item}>
            <div className={style.info}>
              <div className={style.imageWrapper}>
                <Image className={style.imageItem} src={img} alt="awd" />
              </div>
              <span className={style.nameItem}>SaLMON</span>
            </div>

            <div className={style.right}>
              <span className={style.quantity}>5awdw</span>
              <button className={style.deleteBtn}>
                <Image alt="awd" src={iks} />
              </button>
            </div>
          </li>
          <li className={style.item}>
            <div className={style.info}>
              <div className={style.imageWrapper}>
                <Image className={style.imageItem} src={img} alt="awd" />
              </div>
              <span className={style.nameItem}>SaLMON</span>
            </div>

            <div className={style.right}>
              <span className={style.quantity}>5awdw</span>
              <button className={style.deleteBtn}>
                <Image alt="awd" src={iks} />
              </button>
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
}
